# How to Set Up Chained REST API Calls

This guide explains how to configure chained API calls that fetch parent data from one endpoint and then automatically fetch related child data from additional endpoints for each parent record.

## Prerequisites

- **Permission** - You have NAVX IF STANDARD or NAVX IF ALL permission set
- **REST API Integration** - You have a REST API integration with a root (parent) endpoint configured
- **API Endpoints Known** - You know the parent and child API endpoint URLs and their response structures

## What Are Chained API Calls?

Chained API calls follow a master/detail pattern. The Integration Framework first calls a parent endpoint to retrieve a list of records. Then, for each parent record, it calls one or more child endpoints to fetch related detail data. The child endpoint URLs are constructed dynamically using values from the parent response.

This pattern is common when an API provides a list endpoint that returns summary data (e.g., order headers) and a separate detail endpoint that returns full data for a single record (e.g., order lines for one order).

## When to Use Chained Calls

Chained calls are the right choice when:

- **List Then Detail** - The API has a list endpoint and a separate detail endpoint, and you need both levels of data
- **Master/Detail Data** - You need order headers and their line items, but they come from separate API calls
- **ID-Based Lookups** - The list response includes IDs that must be used to fetch full records from another endpoint
- **Related Resources** - Parent records reference child resources at different URLs (e.g., `/customers` then `/customers/{id}/contacts`)

## How Chained Calls Work

The execution flow follows these steps:

1. **Fetch Parent Data** - The framework calls the root endpoint and collects all parent records (handling pagination automatically)
2. **Iterate Parent Records** - For each parent JSON object returned:
   a. The parent row is written to the integration data buffer
   b. For each child endpoint (ordered by Chain Order), the framework resolves the child URL by replacing `{{parent.path}}` placeholders with values from the parent object
   c. The child endpoint is called and its response data is appended as additional rows after the parent row
3. **Combined Output** - The result is an interleaved dataset: parent row, followed by its child rows, followed by the next parent row and its child rows, and so on

## Step-by-Step Process

### Step 1: Configure the Parent (Root) Endpoint

1. Navigate to **Integration Framework** > **Integrations**
2. Open your REST API integration
3. Configure the root endpoint with:

| Field | Description | Example |
| --- | --- | --- |
| **Resource Path** | The URL path for the parent list endpoint | `/api/v2/orders` |
| **HTTP Method** | Typically GET for list endpoints | GET |
| **Response Data Path** | JSON path to the array of records in the response | `data.orders` |
| **Connection Code** | The REST API connection to use | `MY_API` |

### Step 2: Create Child Endpoints

1. Create a new REST API endpoint for the child (detail) data
2. Configure the child endpoint with:

| Field | Description | Example |
| --- | --- | --- |
| **Parent Endpoint Sort Order** | The Sorting Order of the parent endpoint this child belongs to | `10` |
| **Chain Order** | The order in which this child is called relative to other children of the same parent | `1` |
| **Child URL Template** | The URL path with `{{parent.path}}` placeholders | `/api/v2/orders/{{parent.id}}/lines` |
| **HTTP Method** | Typically GET for detail endpoints | GET |
| **Response Data Path** | JSON path to the data array in the child response | `data.lines` |
| **Connection Code** | The REST API connection for the child endpoint | `MY_API` |
| **Max Child Calls** | Maximum number of child calls to make for this endpoint (safety limit) | `1000` |

### Step 3: Configure the Child URL Template

The Child URL Template uses `{{parent.jsonPath}}` placeholders to inject values from the parent response into the child URL.

**Placeholder syntax:**

```text
{{parent.propertyName}}
```

The `parent.` prefix tells the framework to look up the value in the current parent JSON object using the path that follows.

**Examples:**

| Child URL Template | Parent JSON Property Used |
| --- | --- |
| `/api/orders/{{parent.id}}/lines` | `id` from the parent object |
| `/api/customers/{{parent.customerCode}}/addresses` | `customerCode` from the parent object |
| `/api/v2/detail?orderId={{parent.data.orderId}}` | `data.orderId` (nested property) from the parent object |

### Step 4: Set Max Child Calls

The **Max Child Calls** field limits how many times the framework calls a child endpoint during a single integration run. This protects against runaway API calls when the parent dataset is unexpectedly large.

- If the parent list returns 5,000 records but Max Child Calls is set to 1,000, the framework stops calling the child endpoint after 1,000 parent records and logs a warning
- Set this value based on expected data volumes and API rate limits

### Step 5: Run the Integration

1. Run the integration from the Integrations list
2. The framework executes the chain automatically:
   - Fetches all parent records (with pagination if configured)
   - For each parent record, calls each child endpoint in Chain Order
   - A progress dialog shows the current parent record number and child endpoint being fetched
3. Review the imported data on the **Integration Records** page

## Response Data Flow

The following diagram illustrates how data flows through a chained call:

```text
Parent Endpoint: GET /api/orders
Response: [
  { "id": "ORD-001", "customer": "Contoso", "total": 1500 },
  { "id": "ORD-002", "customer": "Northwind", "total": 2300 }
]

Child Endpoint: GET /api/orders/{{parent.id}}/lines

  For parent ORD-001:
    GET /api/orders/ORD-001/lines
    Response: [
      { "item": "WIDGET-A", "qty": 10, "price": 25.00 },
      { "item": "WIDGET-B", "qty": 5, "price": 50.00 }
    ]

  For parent ORD-002:
    GET /api/orders/ORD-002/lines
    Response: [
      { "item": "GADGET-X", "qty": 20, "price": 15.00 }
    ]

Resulting Data Buffer (interleaved):
  Row 1: { "id": "ORD-001", "customer": "Contoso", "total": 1500 }        <- parent
  Row 2: { "item": "WIDGET-A", "qty": 10, "price": 25.00 }               <- child
  Row 3: { "item": "WIDGET-B", "qty": 5, "price": 50.00 }                <- child
  Row 4: { "id": "ORD-002", "customer": "Northwind", "total": 2300 }      <- parent
  Row 5: { "item": "GADGET-X", "qty": 20, "price": 15.00 }               <- child
```

## Multiple Child Endpoints

You can configure multiple child endpoints for the same parent. They are processed in **Chain Order** sequence for each parent record.

**Example:** Fetch order headers, then order lines, then order notes:

| Endpoint | Parent Endpoint Sort Order | Chain Order | Child URL Template |
| --- | --- | --- | --- |
| Order Lines | 10 | 1 | `/api/orders/{{parent.id}}/lines` |
| Order Notes | 10 | 2 | `/api/orders/{{parent.id}}/notes` |

For each parent order, the framework first fetches lines (Chain Order 1), then notes (Chain Order 2), before moving to the next parent.

## Error Handling

When a child endpoint call fails for a specific parent record:

- The error is logged with the parent row index and endpoint details
- By default, processing continues with the next parent record
- The OnChildFetchError integration event is raised, allowing custom AL code to decide whether to continue or stop processing

This means a single failed child call does not stop the entire chain. The framework logs the failure and moves on.

## Pagination in Chained Calls

Both parent and child endpoints support pagination independently:

- **Parent Endpoint** - Pagination is applied automatically when configured. All parent pages are fetched and combined before child processing begins.
- **Child Endpoints** - Each child call also supports pagination. If a child endpoint returns paginated results, all pages are fetched for that specific parent record.

## Troubleshooting

### Issue: "Cannot resolve placeholder" error

- **Cause** - The `{{parent.path}}` placeholder references a JSON path that does not exist in the parent response
- **Solution** - Verify the JSON path matches a property in the parent response. Check for typos and case sensitivity.

### Issue: "REST API connection not found" error for child endpoint

- **Cause** - The Connection Code on the child endpoint does not match any configured REST API connection
- **Solution** - Verify the Connection Code is set correctly on the child endpoint

### Issue: Child data missing for some parent records

- **Cause** - The Max Child Calls limit was reached, or individual child calls failed
- **Solution** - Check the integration log for warnings about max calls reached. Increase Max Child Calls if needed. Review error messages for failed child fetches.

### Issue: Too many API calls causing rate limiting

- **Cause** - Large parent datasets generate one child call per parent record per child endpoint
- **Solution** - Use Max Child Calls to limit the total. Consider whether aggregation (horizontal merge) might be more efficient than chaining for your use case.

### Issue: Parent data appears but no child rows

- **Cause** - No child endpoints are configured for the parent, or the Child URL Template is incorrect
- **Solution** - Verify the Parent Endpoint Sort Order on the child matches the parent endpoint's Sorting Order. Test the resolved child URL manually.

## Best Practices

1. **Set Realistic Max Child Calls** - Always configure Max Child Calls to prevent uncontrolled API usage
2. **Test with Small Datasets** - Start with a parent endpoint that returns a few records to verify the chain works before running against full datasets
3. **Use Response Data Path** - Configure the Response Data Path on both parent and child endpoints to point directly to the data array
4. **Monitor API Rate Limits** - Be aware that chained calls multiply API requests (one per parent per child endpoint)
5. **Order Child Endpoints** - Use Chain Order to control the sequence when multiple child endpoints exist
6. **Handle Errors Gracefully** - The framework continues on child errors by default, so review logs after each run to catch issues
7. **Consider Aggregation** - If you need to merge data from independent endpoints by a shared key rather than fetching detail per parent, use aggregation instead of chaining

## See Also

- [How to Configure REST API Request Body Templates](how-to-rest-api-body-templates.md)
- [How to Configure REST API Template Variables](how-to-rest-api-template-variables.md)
- [How to Configure REST API Aggregation](how-to-rest-api-aggregation.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)

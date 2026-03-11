# How to Configure REST API Aggregation

This guide explains how to configure multi-endpoint aggregation to merge data from separate REST API endpoints into a single, combined dataset.

## Prerequisites

- **Permission** - You have NAVX IF STANDARD or NAVX IF ALL permission set
- **REST API Integration** - You have a primary REST API integration with an endpoint configured
- **Secondary Endpoints** - You have additional REST API integrations configured for the secondary data sources
- **Join Key Known** - You know which fields in the primary and secondary responses can be used to match records

## What Is Aggregation?

Aggregation fetches data from multiple REST API endpoints and merges the results horizontally by matching records on a shared key. The primary endpoint provides the base dataset, and each secondary endpoint contributes additional fields that are merged into matching primary records.

Think of it as a SQL JOIN operation: the primary endpoint is the main table, and each aggregation source is a joined table. The result is a single dataset where each row contains fields from the primary response plus fields from all matched secondary responses.

## When to Use Aggregation

Aggregation is the right choice when:

- **Data Split Across APIs** - The information you need is spread across multiple API endpoints (e.g., customer details in one API, customer addresses in another)
- **Enrichment** - You want to enrich records from one endpoint with supplementary data from another
- **Horizontal Merge** - You need to combine fields side by side rather than appending child rows below parent rows (for that, use chained calls instead)
- **Independent Endpoints** - The data sources are independent (not parent/child) but share a common key

### Aggregation vs. Chained Calls

| Feature | Aggregation | Chained Calls |
| --- | --- | --- |
| **Data direction** | Horizontal (adds columns) | Vertical (adds rows) |
| **Use case** | Merge fields from different sources into one row | Fetch detail rows for each parent record |
| **Result** | One row per primary record with merged fields | Parent rows interleaved with child rows |
| **Matching** | By join key across datasets | By parent ID in child URL |

## How Aggregation Works

The execution flow follows these steps:

1. **Fetch Primary Data** - The framework calls the primary endpoint and indexes all records by a row key
2. **Fetch Secondary Data** - For each configured aggregation source (in Fetch Order), the framework calls the secondary endpoint and indexes records by the Foreign Key JSON Path
3. **Merge** - For each primary record, the framework extracts the join key (Primary Key JSON Path), finds the matching secondary record, and merges the secondary fields into the primary object
4. **Handle Conflicts** - If a secondary field name already exists in the primary object, the secondary field is prefixed with `_merged_` to avoid overwriting
5. **Apply Join Type** - For Left Joins, unmatched primary records are kept as-is. For Inner Joins, unmatched primary records are removed from the result.
6. **Output** - The merged dataset is written to the integration data buffer for field mapping and processing

## Step-by-Step Process

### Step 1: Configure the Primary Endpoint

1. Navigate to **Integration Framework** > **Integrations**
2. Open your primary REST API integration
3. Configure the endpoint with its resource path, connection, and response data path
4. Note the **Sorting Order** of this endpoint

### Step 2: Configure Secondary Endpoints

For each additional data source:

1. Create a separate REST API integration with its own endpoint
2. Configure the endpoint with its resource path, connection, and response data path
3. Note the **Sorting Order** of each secondary integration

Secondary endpoints are full REST API integrations in their own right. They must have their own connection and endpoint configuration.

### Step 3: Open Aggregation Sources

1. On the primary endpoint page, locate the **Aggregation Sources** section
2. This is where you define which secondary endpoints to merge and how to match records

### Step 4: Add Aggregation Rules

For each secondary endpoint, add a line in the Aggregation Sources with the following fields:

| Field | Description | Example |
| --- | --- | --- |
| **Source Endpoint Sort Order** | The Sorting Order of the secondary REST API integration to merge data from | `20` |
| **Join Type** | How to handle unmatched primary records (see Join Types below) | `Left Join` |
| **Primary Key JSON Path** | The JSON path in the primary response that contains the join key value | `customerId` |
| **Foreign Key JSON Path** | The JSON path in the secondary response that contains the matching key value | `id` |
| **Fetch Order** | The order in which secondary endpoints are fetched and merged. Lower numbers are processed first. | `1` |

**Important:** The Source Endpoint Sort Order cannot reference the same integration as the primary endpoint.

### Step 5: Configure Join Keys

The join keys determine how records are matched between the primary and secondary datasets.

**Example:** The primary endpoint returns orders with a `customerId` field, and the secondary endpoint returns customers with an `id` field.

- **Primary Key JSON Path** = `customerId` (in the order response)
- **Foreign Key JSON Path** = `id` (in the customer response)

The framework matches each order's `customerId` value against each customer's `id` value. When a match is found, the customer fields are merged into the order record.

**Nested paths are supported:**

| Primary Key JSON Path | Foreign Key JSON Path | Description |
| --- | --- | --- |
| `customerId` | `id` | Simple top-level field match |
| `details.vendorCode` | `vendor.code` | Nested field match |
| `header.accountNo` | `accountNumber` | Mixed nesting |

### Step 6: Run the Integration

1. Run the integration from the Integrations list
2. The framework executes aggregation automatically:
   - Fetches all primary data (with pagination if configured)
   - Fetches each secondary source in Fetch Order (with pagination if configured)
   - Merges secondary fields into matching primary records
   - A progress dialog shows the current aggregation source being fetched
3. Review the merged data on the **Integration Records** page

## Join Types

### Left Join

All primary records are kept in the result, regardless of whether a matching secondary record exists.

- **Matched records** - Primary fields plus merged secondary fields
- **Unmatched records** - Primary fields only (secondary fields are absent)

Use Left Join when you want all primary data and secondary data is supplementary.

### Inner Join

Only primary records that have a matching secondary record are kept in the result. Unmatched primary records are removed.

- **Matched records** - Primary fields plus merged secondary fields
- **Unmatched records** - Removed from the result

Use Inner Join when you only want records that exist in both datasets.

## Field Name Conflicts

When a secondary response contains a field name that already exists in the primary response, the framework prefixes the secondary field name with `_merged_` to prevent data loss.

**Example:**

- Primary response has a field named `name` with value `"Contoso Inc"`
- Secondary response also has a field named `name` with value `"Contoso Corporation"`
- After merge, the combined record contains:
  - `name` = `"Contoso Inc"` (from primary)
  - `_merged_name` = `"Contoso Corporation"` (from secondary)

When setting up field mappings, use the `_merged_` prefixed JSON path to reference the secondary field.

## Example Scenario

### Scenario: Merge Customer Data with Address Data

**Primary Endpoint (Sorting Order 10):**

```text
Resource Path: /api/customers
Response Data Path: data.customers
```

**Response:**

```json
{
  "data": {
    "customers": [
      { "id": "C001", "name": "Contoso Inc", "email": "info@contoso.com" },
      { "id": "C002", "name": "Northwind Traders", "email": "info@northwind.com" }
    ]
  }
}
```

**Secondary Endpoint (Sorting Order 20):**

```text
Resource Path: /api/addresses
Response Data Path: data.addresses
```

**Response:**

```json
{
  "data": {
    "addresses": [
      { "customerId": "C001", "street": "100 Main St", "city": "Seattle", "state": "WA" },
      { "customerId": "C002", "street": "200 Oak Ave", "city": "Chicago", "state": "IL" }
    ]
  }
}
```

**Aggregation Configuration:**

| Field | Value |
| --- | --- |
| Source Endpoint Sort Order | 20 |
| Join Type | Left Join |
| Primary Key JSON Path | `id` |
| Foreign Key JSON Path | `customerId` |
| Fetch Order | 1 |

**Merged Result:**

| id | name | email | street | city | state |
| --- | --- | --- | --- | --- | --- |
| C001 | Contoso Inc | info@contoso.com | 100 Main St | Seattle | WA |
| C002 | Northwind Traders | info@northwind.com | 200 Oak Ave | Chicago | IL |

The merged dataset can then be mapped to a Business Central table using standard field mappings, with JSON paths like `id`, `name`, `street`, `city`, etc.

## Multiple Aggregation Sources

You can merge data from multiple secondary endpoints into the same primary dataset. Each aggregation source is processed in **Fetch Order** sequence.

**Example:** Merge customers with addresses (Fetch Order 1) and then with credit limits (Fetch Order 2):

| Source Endpoint Sort Order | Join Type | Primary Key JSON Path | Foreign Key JSON Path | Fetch Order |
| --- | --- | --- | --- | --- |
| 20 (Addresses) | Left Join | `id` | `customerId` | 1 |
| 30 (Credit Limits) | Inner Join | `id` | `accountId` | 2 |

After both merges, each primary record contains fields from all three endpoints (where matches exist).

## Troubleshooting

### Issue: Secondary data not merged (fields missing)

- **Cause** - Join keys do not match between primary and secondary datasets
- **Solution** - Verify the Primary Key JSON Path and Foreign Key JSON Path point to fields with matching values. Check for case sensitivity and data type differences (e.g., string `"123"` vs. number `123`).

### Issue: "No REST API endpoint is configured for secondary integration" error

- **Cause** - The Source Endpoint Sort Order references an integration that does not exist or has no endpoint
- **Solution** - Verify the secondary integration exists and has a configured REST API endpoint with the correct Sorting Order

### Issue: Primary records disappearing from result

- **Cause** - Inner Join is configured and some primary records have no matching secondary record
- **Solution** - Change Join Type to Left Join if you want to keep all primary records regardless of match

### Issue: Duplicate field names with `_merged_` prefix

- **Cause** - Both primary and secondary responses contain fields with the same name
- **Solution** - This is expected behavior. Use the `_merged_` prefixed JSON path in your field mappings to reference the secondary field.

### Issue: "Cannot reference the same integration as the primary endpoint" error

- **Cause** - The Source Endpoint Sort Order is set to the same Sorting Order as the primary endpoint
- **Solution** - Select a different integration as the secondary source

## Best Practices

1. **Use Unique Key Fields** - Ensure join key fields contain unique values in the secondary dataset. If duplicates exist, only the last matching record is used.
2. **Choose the Right Join Type** - Use Left Join when secondary data is optional; use Inner Join when you only want fully matched records.
3. **Order Fetch Sequence** - Set Fetch Order to control which secondary sources are merged first. Earlier merges affect the data available for later merges.
4. **Plan for Name Conflicts** - Be aware that overlapping field names result in `_merged_` prefixes. Design field mappings accordingly.
5. **Test with Small Datasets** - Run the integration with limited data first to verify join keys match correctly before processing large volumes.
6. **Consider Chaining Instead** - If you need parent/child rows (vertical expansion) rather than merged fields (horizontal expansion), use chained calls instead.
7. **Monitor Performance** - Each aggregation source adds an additional set of API calls. Be mindful of API rate limits when configuring multiple sources.

## See Also

- [How to Configure REST API Request Body Templates](how-to-rest-api-body-templates.md)
- [How to Configure REST API Template Variables](how-to-rest-api-template-variables.md)
- [How to Set Up Chained REST API Calls](how-to-rest-api-chained-calls.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)

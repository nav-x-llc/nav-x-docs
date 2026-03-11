# How to Configure REST API Pagination

This guide walks you through configuring pagination for REST API endpoints in the Integration Framework to retrieve large datasets across multiple API calls.

## Prerequisites

- **Permission** - You have NAVX IF STANDARD or NAVX IF ALL permission set
- **REST API Connection** - You have created a REST API connection and endpoint (see [How to Create a REST API Import Integration](how-to-rest-api-import.md))
- **API Documentation** - You know how the target API paginates its responses

## Why Pagination is Needed

Most REST APIs limit the number of records returned in a single response to protect server resources and improve response times. For example, an API may return only 100 customers per request even if you have 5,000 customers. Without pagination, you would only receive the first 100 records.

The Integration Framework handles pagination automatically once configured. It makes multiple API calls, retrieves each page of results, and combines all records into a single import.

## Pagination Types Overview

The Integration Framework supports three pagination strategies for REST APIs:

| Pagination Type | How It Works | Common APIs |
| --- | --- | --- |
| **Next Link** | The response includes a URL pointing to the next page | OData APIs, Microsoft Graph, Shopify |
| **Page Number** | A page number parameter is incremented with each request | Simple REST APIs with `?page=1`, `?page=2` |
| **Offset/Limit** | An offset parameter tracks position, and a limit parameter controls page size | APIs with `?offset=0&limit=100`, `?offset=100&limit=100` |

## How Each Pagination Type Works

### Next Link Pagination

The API response includes a JSON property containing the full URL for the next page. When the property is absent or null, there are no more pages.

**Example API response:**

```json
{
  "data": [
    { "id": 1, "name": "Contoso Inc" },
    { "id": 2, "name": "Northwind Traders" }
  ],
  "@odata.nextLink": "https://api.example.com/v1/customers?$skip=100"
}
```

The framework reads the next link URL from the response and uses it as the full request URL for the next call, continuing until the next link property is empty or absent.

### Page Number Pagination

The framework appends a page number query parameter to the request URL and increments it with each call. The framework determines there are more pages when the number of records returned equals the configured Page Size. When fewer records are returned, the last page has been reached.

**Example requests:**

```
GET /customers?page=1    -> returns 100 records
GET /customers?page=2    -> returns 100 records
GET /customers?page=3    -> returns 47 records (last page)
```

### Offset/Limit Pagination

The framework appends offset and limit query parameters to the request URL. The offset starts at 0 and increases by the Page Size after each call. Like Page Number, pagination stops when fewer records than the Page Size are returned.

**Example requests:**

```
GET /customers?offset=0&limit=100    -> returns 100 records
GET /customers?offset=100&limit=100  -> returns 100 records
GET /customers?offset=200&limit=100  -> returns 47 records (last page)
```

## Configuring Next Link Pagination

1. Open the **REST API Endpoint** page from the Integration
2. In the **Pagination** section, set **Pagination Type** to **Next Link**
3. Complete the following fields:

| Field | Description | Example |
| --- | --- | --- |
| **Next Link JSON Path** | JSON path to the next page URL in the response | `@odata.nextLink`, `pagination.next_url`, `links.next` |
| **Page Size** | Number of records per page (used for display/monitoring) | `100` |
| **Max Pages** | Safety limit to prevent infinite loops | `100` |

### Next Link JSON Path Examples

| API Style | Response Structure | Next Link JSON Path |
| --- | --- | --- |
| OData | `{"@odata.nextLink": "https://..."}` | `@odata.nextLink` |
| Shopify | `{"pagination": {"next_url": "https://..."}}` | `pagination.next_url` |
| Custom | `{"links": {"next": "https://..."}}` | `links.next` |
| Flat | `{"next": "https://..."}` | `next` |

The framework uses the JSON path to extract the URL. It supports both `SelectToken` (for paths like `@odata.nextLink`) and direct property access (for simple names like `next`).

## Configuring Page Number Pagination

1. Open the **REST API Endpoint** page from the Integration
2. In the **Pagination** section, set **Pagination Type** to **Page Number**
3. Complete the following fields:

| Field | Description | Example |
| --- | --- | --- |
| **Page Parameter Name** | Query parameter name for the page number | `page`, `pageNumber`, `p` |
| **Page Size** | Number of records per page. Must match the API's page size | `100` |
| **Max Pages** | Safety limit to prevent infinite loops | `100` |
| **Response Data Path** | JSON path to the data array (required for pagination to count records) | `data`, `results`, `items` |

### How Page Number Continuation Works

The framework determines whether to fetch the next page by checking two conditions:

1. The current page number is less than the **Max Pages** limit
2. The number of records returned on the current page is greater than or equal to the **Page Size**

If either condition is false, pagination stops. This means you must set **Page Size** to match the actual number of records the API returns per page, and you must set **Response Data Path** so the framework can count the returned records.

## Configuring Offset/Limit Pagination

1. Open the **REST API Endpoint** page from the Integration
2. In the **Pagination** section, set **Pagination Type** to **Offset/Limit**
3. Complete the following fields:

| Field | Description | Example |
| --- | --- | --- |
| **Offset Parameter Name** | Query parameter name for the starting position | `offset`, `skip`, `start` |
| **Limit Parameter Name** | Query parameter name for the page size | `limit`, `top`, `count`, `per_page` |
| **Page Size** | Number of records per page. Sent as the limit parameter value | `100` |
| **Max Pages** | Safety limit to prevent infinite loops | `100` |
| **Response Data Path** | JSON path to the data array (required for pagination to count records) | `data`, `results`, `items` |

### How Offset/Limit Continuation Works

The framework uses the same continuation logic as Page Number pagination:

1. The current page count is less than the **Max Pages** limit
2. The number of records returned on the current page is greater than or equal to the **Page Size**

The offset starts at 0 and increases by the Page Size after each call. The limit value is always the configured Page Size.

## Pagination Configuration Examples

### Example 1: OData API with Next Link

**API behavior:** Returns `@odata.nextLink` with the next page URL until all records are retrieved.

```text
Pagination Type: Next Link
Next Link JSON Path: @odata.nextLink
Response Data Path: value
Page Size: 100
Max Pages: 100
```

**Request flow:**

```
GET /odata/customers
-> Response includes "@odata.nextLink": "https://api.example.com/odata/customers?$skip=100"

GET https://api.example.com/odata/customers?$skip=100
-> Response includes "@odata.nextLink": "https://api.example.com/odata/customers?$skip=200"

GET https://api.example.com/odata/customers?$skip=200
-> Response has no "@odata.nextLink" -> Done
```

### Example 2: Simple REST API with Page Numbers

**API behavior:** Accepts `?page=N` and returns the Nth page of results.

```text
Pagination Type: Page Number
Page Parameter Name: page
Response Data Path: data
Page Size: 50
Max Pages: 200
```

**Request flow:**

```
GET /api/customers?page=1 -> returns 50 records
GET /api/customers?page=2 -> returns 50 records
GET /api/customers?page=3 -> returns 23 records -> Done (23 < 50)
```

### Example 3: API with Offset and Limit

**API behavior:** Accepts `?offset=N&limit=M` to control which records are returned.

```text
Pagination Type: Offset/Limit
Offset Parameter Name: offset
Limit Parameter Name: limit
Response Data Path: results
Page Size: 100
Max Pages: 50
```

**Request flow:**

```
GET /api/customers?offset=0&limit=100 -> returns 100 records
GET /api/customers?offset=100&limit=100 -> returns 100 records
GET /api/customers?offset=200&limit=100 -> returns 75 records -> Done (75 < 100)
```

## The Response Data Path Field

The **Response Data Path** field is critical for Page Number and Offset/Limit pagination. It tells the framework where to find the data array in the JSON response so it can count the returned records and determine whether another page exists.

| Response Structure | Response Data Path |
| --- | --- |
| `[{...}, {...}]` (root array) | *(leave blank)* |
| `{"data": [{...}, {...}]}` | `data` |
| `{"results": {"items": [{...}]}}` | `results.items` |
| `{"value": [{...}, {...}]}` | `value` |

If the Response Data Path is not set or does not point to a valid array, the framework cannot count records and pagination will stop after the first page.

## Max Pages Safety Limit

The **Max Pages** field prevents runaway pagination in case of misconfiguration or an API that always returns a next link. The default value is 100. The framework stops fetching pages when the current page number reaches this limit, even if the API indicates more pages exist.

Set Max Pages based on your expected data volume:

| Expected Records | Page Size | Recommended Max Pages |
| --- | --- | --- |
| Up to 1,000 | 100 | 20 |
| Up to 10,000 | 100 | 150 |
| Up to 50,000 | 500 | 150 |
| Unknown | 100 | 100 (default) |

## Troubleshooting

### Issue: Only the first page of results is imported

- **Cause** - Pagination Type is set to None, or the Page Size does not match the actual API page size
- **Solution** - Set the correct Pagination Type and ensure Page Size matches the number of records the API returns per page
- **Check** - Verify the Response Data Path points to the data array in the response

### Issue: Pagination runs indefinitely (or until Max Pages)

- **Cause** - Next Link JSON Path is incorrect and the framework always finds a non-empty value, or Page Size is set lower than what the API actually returns
- **Solution** - Verify the Next Link JSON Path matches the actual response structure. For Page Number/Offset, ensure Page Size matches the API's actual page size
- **Debug** - Set Max Pages to a low number (e.g., 3) temporarily and inspect the imported data

### Issue: "Max Pages reached" but not all records retrieved

- **Cause** - Max Pages limit is too low for the total number of records
- **Solution** - Increase the Max Pages value, or increase Page Size if the API supports larger pages

### Issue: Duplicate records across pages

- **Cause** - The API's pagination cursor may have shifted due to data changes during import
- **Solution** - This is typically an API-side issue. Use Next Link pagination when available, as it is more reliable than Page Number for dynamic datasets

## Best Practices

1. **Prefer Next Link** - When the API supports it, use Next Link pagination as it is the most reliable and handles edge cases like data changes during pagination
2. **Match Page Size to API** - For Page Number and Offset/Limit, set Page Size to exactly match the API's default or maximum page size
3. **Set Realistic Max Pages** - Calculate the expected number of pages based on your data volume and add a buffer
4. **Always Set Response Data Path** - For Page Number and Offset/Limit pagination, the Response Data Path must be set for the framework to count records and determine when to stop
5. **Test with Small Limits** - Start with a low Max Pages (e.g., 3) to verify pagination works before running a full import
6. **Monitor Page Counts** - After imports, check how many pages were retrieved to ensure all data was captured

## Next Steps

- [How to Create a REST API Import Integration](how-to-rest-api-import.md)
- [How to Configure REST API Authentication](how-to-rest-api-authentication.md)
- [How to Set Up REST API Scheduled Polling](how-to-rest-api-scheduled-polling.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)

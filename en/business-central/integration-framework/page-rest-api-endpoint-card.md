# Page REST API Endpoint Card

The **REST API Endpoint Card** page configures how a specific integration communicates with a REST API endpoint. It defines the resource path, HTTP method, pagination, GraphQL settings, endpoint-specific headers, template variables, aggregation sources, and scheduled import polling.

**To open:** From the [Integrations page](page-integrations.md), select a REST API integration and open its endpoint configuration.

## Overview

An endpoint configuration includes:

- **Connection and resource path** identifying which API to call
- **HTTP method** and response parsing settings
- **GraphQL** query and cursor-based pagination (optional)
- **Chained endpoint** configuration for parent/child API calls
- **Pagination** settings for multi-page responses
- **Endpoint-specific headers and query parameters**
- **Template variables** for dynamic URL and body placeholders
- **Aggregation sources** for merging data from multiple endpoints
- **Scheduled import** polling at a configurable interval

## Key Fields

### General

| Field | Description |
| ------- | ----------- |
| **Connection Code** | The REST API connection to use for this integration. Links to a [REST API Connection](page-rest-api-connection-card.md). |
| **Resource Path** | The resource path appended to the base URL (e.g., `/customers` or `/orders?status=open`). Supports `{{variableName}}` placeholders. |
| **HTTP Method** | The HTTP method for the API request. Allowed values: GET, POST, PUT, PATCH. Not editable when GraphQL is enabled. |
| **Response Data Path** | The JSON path to the data array in the response (e.g., `data.items`). Leave empty if the root element is the array. |
| **Is GraphQL** | Whether this endpoint uses GraphQL queries. When enabled, requests always use POST with a structured GraphQL body. |
| **Accept Header Override** | An optional Accept header value to override the default (`application/json`). |
| **Parent Endpoint Sort Order** | The sorting order of the parent endpoint for chained API calls. Leave at 0 for a root (parent) endpoint. |

### GraphQL

Visible when **Is GraphQL** is enabled.

| Field | Description |
| ------- | ----------- |
| **GraphQL Query** | The GraphQL query string to send in the request body. Supports multi-line input. |
| **GraphQL Variables** | The GraphQL variables as a JSON object (e.g., `{"first": 100}`). Supports multi-line input. |
| **Cursor JSON Path** | The JSON path to the end cursor in the response (e.g., `data.orders.pageInfo.endCursor`). |
| **HasNextPage JSON Path** | The JSON path to the `hasNextPage` boolean in the response (e.g., `data.orders.pageInfo.hasNextPage`). |
| **Cursor Variable Name** | The GraphQL variable name used for the cursor (default: `after`). |

### Chain Configuration

Visible when **Parent Endpoint Sort Order** is greater than 0 (child endpoint).

| Field | Description |
| ------- | ----------- |
| **Parent Key JSON Path** | The JSON path in the parent response to extract the key value used for child URL resolution (e.g., `id`). |
| **Child URL Template** | The URL template for child API calls. Use `{{parent.<jsonpath>}}` placeholders to insert values from the parent response (e.g., `/orders/{{parent.id}}/lines`). |
| **Chain Order** | The execution order among sibling child endpoints. Lower numbers execute first. |
| **Max Child Calls** | The maximum number of child API calls to prevent runaway execution. Default is 500. |

### Pagination

| Field | Description |
| ------- | ----------- |
| **Pagination Type** | The pagination method used by the API: **None**, **NextLink**, **PageNumber**, or **OffsetLimit**. Not editable when GraphQL is enabled. |

**NextLink pagination** (visible when Pagination Type = NextLink):

| Field | Description |
| ------- | ----------- |
| **Next Link JSON Path** | The JSON path to the next page URL (e.g., `@odata.nextLink` or `pagination.next_url`). |

**Page Number pagination** (visible when Pagination Type = PageNumber):

| Field | Description |
| ------- | ----------- |
| **Page Parameter Name** | The query parameter name for the page number (e.g., `page`). |

**Offset/Limit pagination** (visible when Pagination Type = OffsetLimit):

| Field | Description |
| ------- | ----------- |
| **Offset Parameter Name** | The query parameter name for the offset (e.g., `offset`). |
| **Limit Parameter Name** | The query parameter name for the limit (e.g., `limit`). |

**Common pagination settings** (visible when any pagination type is selected):

| Field | Description |
| ------- | ----------- |
| **Page Size** | The number of records to request per page. |
| **Max Pages** | The maximum number of pages to retrieve (safety limit to prevent infinite loops). |

### Headers & Query Parameters

The endpoint card includes an embedded [REST API Endpoint Headers](page-rest-api-endpoint-headers.md) sub-page for defining endpoint-specific headers and query parameters that are sent in addition to the connection-level defaults.

### Template Variables

Visible when the HTTP method is POST, PUT, or PATCH, or when the Resource Path contains `{{` placeholders.

The embedded [Template Variables](page-rest-api-template-vars.md) sub-page allows you to define variables that are resolved at runtime and substituted into URL placeholders or request bodies.

### Data Aggregation

Visible for root (parent) endpoints only (not for child endpoints).

The embedded [Aggregation Sources](page-rest-api-aggregations.md) sub-page allows you to merge data from secondary endpoints into the primary endpoint's results using join keys.

### Scheduled Import

| Field | Description |
| ------- | ----------- |
| **Enable Scheduled Import** | Whether scheduled import polling is enabled for this endpoint. Read-only; use the Enable Schedule / Disable Schedule actions. |
| **Recurrence (Minutes)** | The interval in minutes between scheduled import runs (1 to 1440). |
| **Earliest Start Date/Time** | The earliest date/time for the first scheduled run. If blank, the schedule starts immediately. |
| **Last Scheduled Run** | The date/time of the last scheduled import run. Read-only. |

## Actions

### Enable Schedule

Creates a recurring Job Queue Entry to automatically poll this REST API endpoint at the configured interval. Available only when the schedule is not currently enabled.

### Disable Schedule

Removes the recurring Job Queue Entry and stops scheduled polling for this endpoint. Available only when the schedule is currently enabled.

## See Also

- [REST API Connection Card](page-rest-api-connection-card.md)
- [REST API Endpoint Headers](page-rest-api-endpoint-headers.md)
- [REST API Template Variables](page-rest-api-template-vars.md)
- [REST API Aggregations](page-rest-api-aggregations.md)
- [Integrations Page](page-integrations.md)

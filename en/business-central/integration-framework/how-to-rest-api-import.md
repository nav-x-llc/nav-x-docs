# How to Create a REST API Import Integration

This guide walks you through creating and configuring an integration to import data from a REST API into Business Central.

## Prerequisites

- **Permission** - You have NAVX IF STANDARD or NAVX IF ALL permission set
- **API Access** - You have the base URL and authentication credentials for the target REST API
- **Target Table** - You know which Business Central table will receive the data

## What is REST API Import

REST API import allows Business Central to pull data directly from external REST APIs without manual file downloads. The Integration Framework sends HTTP requests to an API, receives JSON responses, and maps the data into Business Central tables. This eliminates the need to export data from one system, save it to a file, and then import it manually.

## When to Use REST API Import

REST API import is the right choice when:

- **Live Data** - You need to pull current data directly from an external system's API
- **Automated Imports** - You want to schedule recurring data pulls without manual intervention
- **Cloud Services** - Your data source is a SaaS application or cloud platform that exposes a REST API
- **Real-Time Sync** - You need to keep Business Central data up to date with an external system
- **Large Datasets** - The API supports pagination and you need to retrieve thousands of records automatically

## REST API Architecture Overview

The REST API import feature uses a two-level configuration model:

### Connections

A **REST API Connection** defines the shared settings for communicating with an API:

- Base URL (e.g., `https://api.example.com/v1`)
- Authentication type and credentials
- Default content type
- Timeout and retry configuration
- Default headers and query parameters

### Endpoints

A **REST API Endpoint** defines the specific API resource to call within a connection:

- Resource path (e.g., `/customers` or `/orders?status=open`)
- HTTP method (GET, POST, PUT, PATCH)
- Response data path for extracting the data array from the response
- Pagination configuration
- Endpoint-specific headers and query parameters
- Scheduled import settings

One connection can serve multiple endpoints, allowing you to reuse authentication and base URL settings across different API resources.

## Step-by-Step Process

### Step 1: Create a REST API Connection

1. Navigate to **Integration Framework** > **REST API Connections**
2. Click **New**
3. Complete the following fields:

| Field | Description |
| --- | --- |
| **Code** | Unique identifier (e.g., "SHOPIFY" or "ERP_API") |
| **Description** | Clear name (e.g., "Shopify Production API") |
| **Base URL** | The root URL of the API (e.g., `https://api.example.com/v1`). Must start with `https://` or `http://` |
| **Default Content Type** | Content type for requests (default: `application/json`) |
| **Timeout (ms)** | Request timeout in milliseconds (default: 30000, range: 1000-300000) |

### Step 2: Configure Authentication

1. On the REST API Connection Card, set the **Authentication Type** field
2. Available authentication types:

| Authentication Type | Use Case |
| --- | --- |
| **None** | Public APIs with no authentication |
| **Basic Auth** | APIs using username and password |
| **Bearer Token** | APIs using a static token |
| **API Key** | APIs using an API key in a header or query parameter |
| **OAuth2 Client Credentials** | APIs using OAuth2 client credentials flow |
| **Token Endpoint** | APIs that require posting credentials to obtain a session token |

3. Complete the authentication fields that appear based on your selection

For detailed configuration of each authentication type, see [How to Configure REST API Authentication](how-to-rest-api-authentication.md).

### Step 3: Configure Retry Settings (Optional)

1. In the **Retry Configuration** section:
   - **Enable Retry** - Enable to automatically retry failed requests (default: enabled)
   - **Max Retries** - Maximum retry attempts (default: 3, range: 0-10)
   - **Initial Retry Delay (ms)** - Delay before the first retry (default: 1000, range: 100-60000)

The system uses exponential backoff, doubling the delay after each retry. It also respects the `Retry-After` header returned by the API. Retries apply to transient errors: HTTP 429 (rate limited), 500, 502, 503, 504, and network errors.

### Step 4: Configure Connection-Level Headers

1. In the **Default Headers & Query Parameters** section on the Connection Card, add entries that apply to all endpoints using this connection
2. For each entry, set:

| Field | Description |
| --- | --- |
| **Type** | Select **Header** or **Query Parameter** |
| **Name** | The header or parameter name (e.g., `X-Custom-Header` or `api_version`) |
| **Value** | The header or parameter value |
| **Is Secret** | Enable for sensitive values (stored securely in Isolated Storage) |
| **Description** | Optional description for documentation |

### Step 5: Create a New Integration with REST API Endpoint

1. Navigate to **Integration Framework** > **Integrations**
2. Click **New**
3. Complete the following fields:
   - **Code** - Unique identifier (e.g., "CUST_API_IMPORT")
   - **Description** - Clear name (e.g., "Customers from REST API")
   - **Integration Type** - Select **Rest API**
   - **Direction** - Select **Import**

4. Open the **REST API Endpoint** page from the Integration
5. Configure the endpoint:

| Field | Description |
| --- | --- |
| **Connection Code** | Select the REST API connection from Step 1 |
| **Resource Path** | The API path to append to the base URL (e.g., `/customers`). Supports `{{variableName}}` placeholders |
| **HTTP Method** | The HTTP method (default: GET) |
| **Response Data Path** | JSON path to the data array in the response (e.g., `data.items`). Leave empty if the root element is the array |
| **Accept Header Override** | Optional override for the Accept header (default uses connection's content type or `application/json`) |

### Step 6: Configure Endpoint-Level Headers (Optional)

1. In the **Headers & Query Parameters** section on the Endpoint Card, add entries specific to this endpoint
2. Endpoint headers override or supplement connection-level headers
3. Fields are the same as connection-level headers (Type, Name, Value, Is Secret, Description)

### Step 7: Configure Pagination (If Needed)

If the API returns data in pages, configure pagination on the endpoint. See [How to Configure REST API Pagination](how-to-rest-api-pagination.md) for detailed instructions.

### Step 8: Test the Connection

1. On the REST API Connection Card, click **Test Connection**
2. The system sends a GET request to the Base URL
3. On success, you see the HTTP status code and response time
4. On failure, you see the error message and response body excerpt

### Step 9: Set Up Field Mappings

1. From the Integration, click **Integration Fields** to define source fields
2. From the Integration, click **Integration Mappings** to map fields to Business Central:
   - **Source Field** - Select the source field
   - **Destination Table** - Select target table
   - **Destination Field** - Select BC field that receives the data
   - **Validate** - Enable to validate field values during import

### Step 10: Run the Import

1. Click **Import** on the Integrations list
2. The system calls the REST API, retrieves data (with pagination if configured), and parses the JSON response
3. Review the imported records on the **Integration Records** page
4. Click **Process** or **Process All** to write data into Business Central

## Connection Fields Reference

| Field | Description | Default |
| --- | --- | --- |
| **Code** | Unique connection identifier | - |
| **Description** | Connection description | - |
| **Base URL** | Root API URL (must start with `https://` or `http://`) | - |
| **Authentication Type** | None, Basic Auth, Bearer Token, API Key, OAuth2 Client Credentials, Token Endpoint | None |
| **Default Content Type** | Content type for requests | `application/json` |
| **Timeout (ms)** | Request timeout | 30000 |
| **Enable Retry** | Retry failed requests automatically | true |
| **Max Retries** | Maximum retry attempts | 3 |
| **Initial Retry Delay (ms)** | Delay before first retry (doubles each retry) | 1000 |

## Endpoint Fields Reference

| Field | Description | Default |
| --- | --- | --- |
| **Connection Code** | Link to the REST API connection | - |
| **Resource Path** | API path appended to base URL | - |
| **HTTP Method** | GET, POST, PUT, or PATCH | GET |
| **Response Data Path** | JSON path to data array in response | - |
| **Accept Header Override** | Override Accept header value | - |
| **Pagination Type** | None, Next Link, Page Number, Offset/Limit | None |

## Troubleshooting

### Issue: "Connection failed" on Test Connection

- **Cause** - Base URL is incorrect, the API is unreachable, or credentials are invalid
- **Solution** - Verify the Base URL is correct and accessible from the Business Central server
- **Check** - Confirm authentication credentials are entered correctly

### Issue: "REST API request failed" on import

- **Cause** - The API returned an error response (4xx or 5xx)
- **Solution** - Check the error message for the HTTP status code and response body
- **Check** - Verify the Resource Path, HTTP Method, and authentication settings

### Issue: "No records were found in the REST API response"

- **Cause** - The Response Data Path does not match the actual JSON structure
- **Solution** - Verify the Response Data Path points to the correct array in the API response
- **Debug** - Use Test Connection or an API testing tool to inspect the raw response structure

### Issue: Data fields importing as blank

- **Cause** - Field paths in Integration Fields do not match the JSON property names
- **Solution** - Check that JSON paths are case-sensitive and match the API response exactly
- **Debug** - Review the raw API response to confirm property names

## Best Practices

1. **Start with Test Connection** - Always test the connection before configuring endpoints and mappings
2. **Use HTTPS** - Always use `https://` URLs for production APIs to protect credentials in transit
3. **Enable Retry** - Keep retry enabled to handle transient network errors and rate limiting gracefully
4. **Set Appropriate Timeouts** - Increase the timeout for APIs that return large datasets or respond slowly
5. **Use Connection-Level Headers** - Place headers that apply to all endpoints (like API version headers) at the connection level
6. **Use Endpoint-Level Headers** - Place headers specific to a single API call at the endpoint level
7. **Mark Sensitive Values as Secret** - Use the "Is Secret" flag on headers containing tokens or keys
8. **Configure Pagination** - For APIs that return paginated data, always configure pagination to retrieve all records
9. **Test with Small Page Sizes** - When setting up pagination, start with a small page size to verify the configuration works correctly
10. **Monitor Scheduled Imports** - If using scheduled polling, review import logs regularly to catch errors early

## Next Steps

- [How to Configure REST API Authentication](how-to-rest-api-authentication.md)
- [How to Configure REST API Pagination](how-to-rest-api-pagination.md)
- [How to Set Up REST API Scheduled Polling](how-to-rest-api-scheduled-polling.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Use Field Value Mapping](how-to-field-value-mapping.md)

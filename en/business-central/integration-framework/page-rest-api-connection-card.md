# Page REST API Connection Card

The **REST API Connection Card** page is where you configure the details of a single REST API connection, including the base URL, authentication credentials, retry behavior, and default headers or query parameters.

**To open:** From the [REST API Connections](page-rest-api-connections.md) list, click on a connection to open its card.

## Overview

A REST API connection defines:

- **Base URL** for the external API
- **Authentication** method and credentials
- **Retry configuration** for failed requests
- **Default headers and query parameters** sent with every request using this connection

## Key Fields

### General

| Field | Description |
| ------- | ----------- |
| **Code** | The unique code for this REST API connection. Required. |
| **Description** | A description for this REST API connection. |
| **Base URL** | The base URL for the REST API endpoint, e.g., `https://api.example.com/v1`. |
| **Default Content Type** | The default content type for requests. |
| **Timeout (ms)** | The request timeout in milliseconds. |

### Retry Configuration

| Field | Description |
| ------- | ----------- |
| **Enable Retry** | Specifies whether failed requests should be automatically retried. |
| **Max Retries** | The maximum number of retry attempts for failed requests. Editable only when Enable Retry is turned on. |
| **Initial Retry Delay (ms)** | The initial delay in milliseconds before the first retry. Each subsequent retry doubles this delay (exponential backoff). Editable only when Enable Retry is turned on. |

### Authentication

The **Authentication Type** field determines which credential fields are visible. The available authentication types are:

#### Basic Authentication

Visible when **Authentication Type** = Basic Auth.

| Field | Description |
| ------- | ----------- |
| **Username** | The username for Basic Authentication. |
| **Password** | Enter the password for Basic Authentication. The value is stored securely and cannot be displayed after saving. |
| **Password is Set** | Read-only indicator showing whether a password has been stored. |

#### Bearer Token

Visible when **Authentication Type** = Bearer Token.

| Field | Description |
| ------- | ----------- |
| **Bearer Token** | Enter the bearer token. The value is stored securely and cannot be displayed after saving. |
| **Bearer Token is Set** | Read-only indicator showing whether a bearer token has been stored. |

#### API Key

Visible when **Authentication Type** = API Key.

| Field | Description |
| ------- | ----------- |
| **API Key Header Name** | The header name for the API key, e.g., `X-Api-Key`. |
| **API Key Location** | Whether the API key is sent as a header or query parameter. |
| **API Key Param Name** | The query parameter name for the API key. Visible only when API Key Location is set to Query Parameter. |
| **API Key** | Enter the API key. The value is stored securely and cannot be displayed after saving. |
| **API Key is Set** | Read-only indicator showing whether an API key has been stored. |

#### OAuth2 Client Credentials

Visible when **Authentication Type** = OAuth2 Client Credentials.

| Field | Description |
| ------- | ----------- |
| **OAuth2 Token URL** | The OAuth2 token endpoint URL. |
| **OAuth2 Client ID** | The OAuth2 client ID. |
| **OAuth2 Scope** | The OAuth2 scope(s) to request. |
| **Client Secret** | Enter the OAuth2 client secret. The value is stored securely and cannot be displayed after saving. |
| **Client Secret is Set** | Read-only indicator showing whether a client secret has been stored. |

#### OAuth2 Authorization Code

Visible when **Authentication Type** = OAuth2 Authorization Code.

| Field | Description |
| ------- | ----------- |
| **OAuth2 Token URL** | The token endpoint URL used to exchange the authorization code for tokens. |
| **OAuth2 Authorization URL** | The authorization endpoint where the user grants access. |
| **OAuth2 Client ID** | The OAuth2 client ID registered with the authorization server. |
| **OAuth2 Scope** | The OAuth2 scope(s) to request during authorization. |
| **Client Secret** | Enter the OAuth2 client secret. The value is stored securely and cannot be displayed after saving. |
| **Client Secret is Set** | Read-only indicator showing whether a client secret has been stored. |
| **Authorization Status** | Read-only indicator showing whether the connection has been authorized (Authorized / Not Authorized). |

To authorize this connection type, use the **Manage Authorization** actions on the action bar. See [How to Use REST API Authentication](how-to-rest-api-authentication.md) for the full authorization flow.

#### Token Endpoint

Visible when **Authentication Type** = Token Endpoint.

| Field | Description |
| ------- | ----------- |
| **Token Endpoint URL** | The URL to POST credentials to for obtaining an access token. Can be a relative path (e.g., `/api/auth`) resolved against the Base URL, or an absolute URL. |
| **Username** | The username to send to the token endpoint. |
| **Password** | Enter the password for the token endpoint. The value is stored securely and cannot be displayed after saving. |
| **Password is Set** | Read-only indicator showing whether a password has been stored. |
| **Token JSON Path** | The JSON path to extract the access token from the response (e.g., `access_token` or `data.token`). |
| **Token Expiry JSON Path** | The JSON path to extract the token expiry in seconds from the response (e.g., `expires_in`). |

### Default Headers & Query Parameters

The connection card includes an embedded [REST API Headers](page-rest-api-headers.md) sub-page where you can define default headers and query parameters that are sent with every request using this connection.

## Actions

### Test Connection

Tests the connection to the REST API by sending a request to the **Base URL** using the configured authentication. The result is shown in a structured **Test Result** dialog that includes:

- **HTTP Status Code** — the status returned by the API
- **Diagnosis** — a plain-language explanation of what the status means in context
- **Suggestion** — a recommended next step if the test did not return a successful response

The diagnosis and suggestion are tailored to common status codes:

| HTTP Status | Diagnosis | Suggested Action |
| --- | --- | --- |
| 200–299 | Connection successful | None — connection is working |
| 401 | Authentication failed | Verify credentials; check if token or secret has expired |
| 403 | Authorized but access denied | Confirm the credentials have permission to access this resource |
| 404 | Base URL not found | Check the Base URL for typos or trailing path segments |
| 407 | Proxy authentication required | Configure proxy credentials in BC server settings |
| 429 | Rate limit exceeded | Reduce request frequency; the connection itself is working |
| 500–599 | Server error | The external API is returning errors; retry later |
| Connection error | Could not reach host | Verify the Base URL is reachable from the BC server; check firewall and DNS |

> **Note:** Test Connection tests the connection-level settings (URL, authentication). To test a specific API endpoint's URL and method, use the **Test Endpoint** action on the [REST API Endpoint Card](page-rest-api-endpoint-card.md).

### Manage Authorization

Visible when **Authentication Type** = OAuth2 Authorization Code. Provides the following actions:

| Action | Description |
| --- | --- |
| **Start Authorization** | Opens the external authorization URL in the browser to begin the OAuth2 Authorization Code flow |
| **Test Token** | Verifies that the stored access token is valid by making a test call to the Base URL |
| **Refresh Token** | Forces an immediate token refresh using the stored refresh token |
| **Revoke Authorization** | Clears all stored tokens and resets the authorization status to Not Authorized |

### Clear Credentials

Removes all stored credentials (password, bearer token, client secret, API key, and cached tokens) for this connection. A confirmation prompt is displayed before clearing.

## Extensibility

The connection test raises integration events that allow extensions to customize the test behavior:

| Event | Description |
| --- | --- |
| **OnBeforeTestConnection** | Raised before the test request is sent. Allows extensions to modify the test request (URL, headers) or cancel the test |
| **OnAfterTestConnection** | Raised after the test response is received. Allows extensions to modify the test result, diagnosis, or suggestion shown to the user |

These events are useful when the Base URL does not have a directly testable endpoint and a different URL or method should be used for validation.

## See Also

- [REST API Connections](page-rest-api-connections.md)
- [REST API Headers](page-rest-api-headers.md)
- [REST API Endpoint Card](page-rest-api-endpoint-card.md)
- [Integrations Page](page-integrations.md)

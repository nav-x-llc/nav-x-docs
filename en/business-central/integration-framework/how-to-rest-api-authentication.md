# How to Configure REST API Authentication

This guide walks you through configuring authentication for REST API connections in the Integration Framework. Each authentication type is explained with its use case and step-by-step configuration.

## Prerequisites

- **Permission** - You have NAVX IF STANDARD or NAVX IF ALL permission set
- **REST API Connection** - You have created a REST API connection (see [How to Create a REST API Import Integration](how-to-rest-api-import.md))
- **API Credentials** - You have the authentication credentials provided by the API provider

## Authentication Types Overview

The Integration Framework supports six authentication types for REST API connections:

| Authentication Type | Description | Common Use Case |
| --- | --- | --- |
| **None** | No authentication | Public APIs, open data endpoints |
| **Basic Auth** | Username and password sent as Base64-encoded header | Legacy APIs, internal systems |
| **Bearer Token** | Static token sent in the Authorization header | APIs that issue long-lived tokens |
| **API Key** | Key sent as a header or query parameter | Third-party SaaS APIs, marketplace APIs |
| **OAuth2 Client Credentials** | Automated token acquisition using client ID and secret | Modern enterprise APIs, Microsoft services |
| **OAuth2 Authorization Code** | Interactive user-delegated authorization with PKCE | APIs requiring user consent, Salesforce, HubSpot |
| **Token Endpoint** | Custom token acquisition by posting credentials to an endpoint | Custom APIs with proprietary login endpoints |

## When to Use Each Type

### None

Use when the API requires no authentication. Typical for public data APIs, open government data, or APIs protected only by network-level security.

### Basic Auth

Use when the API requires a username and password combination. The framework sends these as a Base64-encoded `Authorization: Basic` header. This is common for:

- Internal or on-premises APIs
- Legacy systems
- APIs behind VPN or IP-restricted access

### Bearer Token

Use when the API provider gives you a static access token that does not expire (or expires infrequently and is refreshed manually). The framework sends it as an `Authorization: Bearer <token>` header. This is common for:

- APIs with manually generated personal access tokens
- API platforms that issue long-lived tokens in their admin portal
- Development and testing environments

### API Key

Use when the API requires a key passed either in a custom header or as a URL query parameter. This is common for:

- SaaS platforms (e.g., shipping carriers, payment processors)
- APIs that use keys like `X-Api-Key`, `api_key`, or similar
- APIs where authentication is a single key rather than a username/password pair

### OAuth2 Client Credentials

Use when the API supports the OAuth2 client credentials flow (machine-to-machine authentication). The framework automatically acquires and refreshes tokens from the OAuth2 token endpoint. This is common for:

- Microsoft Graph API and Azure services
- Modern enterprise APIs
- APIs that require scoped access tokens

### OAuth2 Authorization Code

Use when the API requires a user to interactively log in and grant consent before the integration can access data on their behalf. This is the authorization code flow with PKCE (Proof Key for Code Exchange) and is distinct from OAuth2 Client Credentials, which uses machine-to-machine trust. Common for:

- SaaS platforms that require user consent (Salesforce, HubSpot, QuickBooks Online)
- APIs where data access is scoped to the authenticated user
- Platforms that do not support client credential grants

### Token Endpoint

Use when the API has a custom login endpoint that accepts credentials and returns a session token. Unlike OAuth2, this pattern uses a proprietary request format (typically posting username and password as JSON). The framework acquires the token, caches it, and refreshes it before expiry. This is common for:

- Custom-built APIs with a `/login` or `/auth` endpoint
- APIs that return a JWT after authentication
- Systems that do not follow the OAuth2 standard

## Configuring Basic Auth

1. On the REST API Connection Card, set **Authentication Type** to **Basic Auth**
2. The **Basic Authentication** section appears
3. Complete the following fields:

| Field | Description |
| --- | --- |
| **Username** | The username for the API |
| **Password** | Enter the password (stored securely in Isolated Storage and masked after saving) |
| **Password is Set** | Read-only indicator confirming a password has been stored |

The framework sends an `Authorization: Basic <base64(username:password)>` header with each request.

## Configuring Bearer Token

1. On the REST API Connection Card, set **Authentication Type** to **Bearer Token**
2. The **Bearer Token** section appears
3. Complete the following fields:

| Field | Description |
| --- | --- |
| **Bearer Token** | Enter the token value (stored securely in Isolated Storage and masked after saving) |
| **Bearer Token is Set** | Read-only indicator confirming a token has been stored |

The framework sends an `Authorization: Bearer <token>` header with each request.

## Configuring API Key

1. On the REST API Connection Card, set **Authentication Type** to **API Key**
2. The **API Key** section appears
3. Set the **API Key Location** to determine where the key is sent:

### API Key in Header

When **API Key Location** is set to **Header**:

| Field | Description |
| --- | --- |
| **API Key Header Name** | The header name expected by the API (e.g., `X-Api-Key`, `Authorization`, `api-key`) |
| **API Key** | Enter the API key value (stored securely and masked after saving) |
| **API Key is Set** | Read-only indicator confirming a key has been stored |

The framework sends the key as a custom HTTP header with each request. For example, if the header name is `X-Api-Key` and the key is `abc123`, the request includes:

```
X-Api-Key: abc123
```

### API Key as Query Parameter

When **API Key Location** is set to **Query Parameter**:

| Field | Description |
| --- | --- |
| **API Key Param Name** | The query parameter name expected by the API (e.g., `api_key`, `key`, `access_token`) |
| **API Key** | Enter the API key value (stored securely and masked after saving) |
| **API Key is Set** | Read-only indicator confirming a key has been stored |

The framework appends the key to the request URL as a query parameter. For example, if the parameter name is `api_key` and the key is `abc123`, the URL becomes:

```
https://api.example.com/v1/customers?api_key=abc123
```

## Configuring OAuth2 Client Credentials

1. On the REST API Connection Card, set **Authentication Type** to **OAuth2 Client Credentials**
2. The **OAuth2 Client Credentials** section appears
3. Complete the following fields:

| Field | Description |
| --- | --- |
| **OAuth2 Token URL** | The token endpoint URL provided by the identity provider (e.g., `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token`) |
| **OAuth2 Client ID** | The client ID (application ID) registered with the identity provider |
| **OAuth2 Scope** | The scope(s) to request (e.g., `https://graph.microsoft.com/.default`). Leave empty if no scope is required |
| **Client Secret** | Enter the client secret (stored securely and masked after saving) |
| **Client Secret is Set** | Read-only indicator confirming a secret has been stored |

The framework automatically:

1. Sends a `POST` request to the OAuth2 Token URL with the client credentials
2. Receives an access token from the identity provider
3. Includes the token as `Authorization: Bearer <token>` in subsequent API requests
4. Refreshes the token automatically when it expires

## Configuring OAuth2 Authorization Code

1. On the REST API Connection Card, set **Authentication Type** to **OAuth2 Authorization Code**
2. The **OAuth2 Authorization Code** section appears
3. Complete the following fields:

| Field | Description |
| --- | --- |
| **Authorization URL** | The URL of the authorization endpoint where users are redirected to log in and grant consent (e.g., `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/authorize`) |
| **OAuth2 Token URL** | The token endpoint URL used to exchange the authorization code for an access token (e.g., `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token`) |
| **OAuth2 Client ID** | The client ID (application ID) registered with the identity provider |
| **OAuth2 Scope** | The scope(s) to request, space-separated (e.g., `openid profile offline_access`). The `offline_access` scope is required to receive a refresh token |
| **Client Secret** | The client secret for your app registration. Some providers (public clients) do not require a secret when PKCE is used |
| **Client Secret is Set** | Read-only indicator confirming a secret has been stored |

### Authorizing the Connection

Unlike OAuth2 Client Credentials, the Authorization Code flow requires an interactive authorization step that a user must complete once:

1. After entering the configuration fields above, choose the **Manage Authorization** action on the Connection Card
2. The **OAuth2 Authorization Management** page opens
3. Choose **Start Authorization** — Business Central opens the provider's login page in your browser
4. Log in with the user account and grant consent when prompted
5. After consent, the provider redirects back to Business Central with an authorization code
6. The framework exchanges the code for an access token and refresh token automatically
7. The token is stored securely in Isolated Storage

### How Token Refresh Works

The framework silently refreshes the access token using the stored refresh token before it expires (with a 60-second buffer). If the refresh token itself expires (which can happen after extended periods of inactivity), you must re-authorize using the **Start Authorization** action.

### Managing Authorization

Use the **Manage Authorization** action on the REST API Connection Card to open the **OAuth2 Authorization Management** page, which provides the following actions:

| Action | Description |
| --- | --- |
| **Start Authorization** | Opens the identity provider's login page to begin the authorization code flow. Use this for initial setup or when re-authorization is required |
| **Test Token** | Verifies that a valid access token is available. Confirms whether the authorization is active without making an API call |
| **Refresh Token** | Manually triggers a token refresh using the stored refresh token. Use this to proactively renew a token before it expires |
| **Revoke Authorization** | Revokes the stored tokens and clears the authorization from Isolated Storage. Use this to disconnect the integration from the user account |

### Difference from OAuth2 Client Credentials

| | OAuth2 Client Credentials | OAuth2 Authorization Code |
| --- | --- | --- |
| **Who authenticates** | The application (machine-to-machine) | A specific user (user-delegated) |
| **User interaction required** | No | Yes, once during setup |
| **Token type** | Application access token | User access token + refresh token |
| **Best for** | Server-to-server APIs, background jobs | APIs scoped to a user account |
| **PKCE** | Not applicable | Supported |

## Configuring Token Endpoint

1. On the REST API Connection Card, set **Authentication Type** to **Token Endpoint**
2. The **Token Endpoint** section appears
3. Complete the following fields:

| Field | Description |
| --- | --- |
| **Token Endpoint URL** | The URL to POST credentials to. Can be a relative path (e.g., `/api/auth`) resolved against the Base URL, or an absolute URL (e.g., `https://api.example.com/auth/login`) |
| **Username** | The username to send to the token endpoint |
| **Password** | Enter the password (stored securely and masked after saving) |
| **Password is Set** | Read-only indicator confirming a password has been stored |
| **Token JSON Path** | The JSON path to extract the token from the response (e.g., `access_token` or `data.token`). Uses dot-notation for nested objects |
| **Token Expiry JSON Path** | The JSON path to extract the token expiry in seconds from the response (e.g., `expires_in`). If not found or not set, defaults to 3600 seconds (1 hour) |

### How Token Endpoint Authentication Works

1. The framework sends a `POST` request to the Token Endpoint URL with a JSON body:

```json
{"username": "<username>", "password": "<password>"}
```

2. The API responds with a JSON object containing a token:

```json
{
  "access_token": "eyJhbGciOi...",
  "expires_in": 3600
}
```

3. The framework extracts the token using the **Token JSON Path** (e.g., `access_token`)
4. The token is cached and reused for subsequent requests
5. Before the token expires (with a 60-second buffer), the framework automatically requests a new token
6. The token is sent as `Authorization: Bearer <token>` in all API requests

### Token Endpoint URL Resolution

The Token Endpoint URL supports both absolute and relative paths:

| Token Endpoint URL | Base URL | Resolved URL |
| --- | --- | --- |
| `https://auth.example.com/token` | (ignored) | `https://auth.example.com/token` |
| `/api/auth/login` | `https://api.example.com/v1` | `https://api.example.com/v1/api/auth/login` |
| `auth/token` | `https://api.example.com` | `https://api.example.com/auth/token` |

### Customizing the Token Request

The framework provides an integration event `OnBeforeBuildTokenRequestBody` that allows you to customize the token request body and content type through AL code. This is useful when the token endpoint expects a different format (e.g., form-encoded data, additional fields, or a different JSON structure).

## Clearing Credentials

To remove all stored credentials from a connection:

1. On the REST API Connection Card, click **Clear Credentials**
2. Confirm the action when prompted

This removes all stored passwords, tokens, API keys, client secrets, and cached tokens from Isolated Storage.

## Security Considerations

- **Isolated Storage** - All credentials (passwords, tokens, API keys, client secrets) are stored in Business Central's Isolated Storage with module-level scope, ensuring they cannot be accessed by other extensions
- **Masked Display** - Secret fields are displayed as masked text and cannot be read back after saving
- **HTTPS Required** - Always use `https://` URLs in production to protect credentials in transit
- **Minimal Permissions** - Request only the minimum API permissions or scopes needed for the integration
- **Token Caching** - The Token Endpoint and OAuth2 methods cache tokens to minimize authentication requests
- **Credential Rotation** - When rotating credentials, enter the new value on the connection card; the old value is overwritten in Isolated Storage

## Troubleshooting

### Issue: "Connection failed" with 401 Unauthorized

- **Cause** - Credentials are incorrect or have expired
- **Solution** - Re-enter the credentials on the Connection Card and verify they match the API provider's settings
- **Check** - Confirm the Authentication Type matches what the API expects

### Issue: "Connection failed" with 403 Forbidden

- **Cause** - The credentials are valid but lack permission for the requested resource
- **Solution** - Verify the API key, token, or OAuth2 scope grants access to the endpoint
- **Check** - Contact the API provider to confirm permissions

### Issue: Token Endpoint returns "Invalid JSON response"

- **Cause** - The token endpoint returned a response that is not valid JSON
- **Solution** - Verify the Token Endpoint URL is correct and points to the authentication endpoint
- **Debug** - Test the token endpoint with an API testing tool to inspect the raw response

### Issue: "Could not find token at JSON path" error

- **Cause** - The Token JSON Path does not match the structure of the token endpoint response
- **Solution** - Inspect the token endpoint response and update the Token JSON Path to match
- **Example** - If the response is `{"data": {"token": "abc"}}`, the path should be `data.token`

### Issue: OAuth2 token acquisition fails

- **Cause** - Client ID, client secret, token URL, or scope is incorrect
- **Solution** - Verify all OAuth2 settings match the application registration in the identity provider
- **Check** - Confirm the application has the `client_credentials` grant type enabled

## Best Practices

1. **Use OAuth2 or Token Endpoint for Production** - Prefer token-based authentication over static credentials for better security
2. **Use HTTPS** - Never send credentials over unencrypted HTTP connections
3. **Rotate Credentials Regularly** - Change API keys and secrets periodically
4. **Use Scoped Tokens** - When using OAuth2, request only the minimum scopes needed
5. **Test Before Importing** - Use the Test Connection feature to verify authentication before running imports
6. **Document Credentials** - Maintain a record of which credentials are used for each connection (outside of Business Central)
7. **Clear Unused Credentials** - Use Clear Credentials to remove stored secrets from connections that are no longer in use

## Next Steps

- [How to Create a REST API Import Integration](how-to-rest-api-import.md)
- [How to Configure REST API Pagination](how-to-rest-api-pagination.md)
- [How to Set Up REST API Scheduled Polling](how-to-rest-api-scheduled-polling.md)

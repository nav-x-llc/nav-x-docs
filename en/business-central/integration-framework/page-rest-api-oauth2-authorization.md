# Page OAuth2 Authorization Management

The **OAuth2 Authorization Management** page manages the interactive authorization for REST API connections that use the **OAuth2 Authorization Code** authentication type. It provides actions to start the authorization flow, test the current token, manually refresh the token, and revoke the authorization.

**To open:** From the [REST API Connection Card](page-rest-api-connection-card.md), choose the **Manage Authorization** action. Available only when **Authentication Type** is set to **OAuth2 Authorization Code**.

## Overview

The OAuth2 Authorization Code flow requires a one-time interactive step where a user logs in to the external identity provider and grants consent. This page is the central hub for managing that authorization lifecycle.

See [How to Configure REST API Authentication](how-to-rest-api-authentication.md#configuring-oauth2-authorization-code) for a full setup walkthrough.

## Key Fields

| Field | Description |
| --- | --- |
| **Connection Code** | The REST API connection this authorization belongs to (read-only) |
| **Authorization Status** | Whether a valid authorization (access token + refresh token) is currently stored: **Authorized** or **Not Authorized** |
| **Token Expiry** | The date and time when the current access token expires. The framework refreshes it automatically before this time |
| **Last Authorized** | The date and time when the user last completed the authorization flow |
| **Authorized By** | The Business Central user who completed the authorization |

## Actions

### Start Authorization

Opens the identity provider's login page in your browser to begin the OAuth2 Authorization Code flow with PKCE.

**When to use:** Initial setup, or when re-authorization is required (e.g., the refresh token has expired or been revoked by the provider).

**Flow:**

1. Choose **Start Authorization** — your browser opens the provider's consent screen
2. Log in with the user account that should authorize access
3. Grant consent when prompted
4. The provider redirects back to Business Central with an authorization code
5. The framework exchanges the code for access and refresh tokens automatically
6. The **Authorization Status** updates to **Authorized**

### Test Token

Verifies that a valid access token is currently available without making an API call to the external system.

**When to use:** To confirm the authorization is still active after a period of inactivity, or to diagnose authentication issues before running an import.

A success message confirms the token is valid. An error indicates the token has expired or been revoked — use **Start Authorization** to re-authorize.

### Refresh Token

Manually triggers an access token refresh using the stored refresh token.

**When to use:** Proactively renew a token before it expires, or to recover from a temporary token expiry without going through the full authorization flow again.

> **Note:** If the refresh token itself has expired (which varies by provider — typically 14–90 days of inactivity), **Refresh Token** will fail. In that case, use **Start Authorization** to re-authorize.

### Revoke Authorization

Clears all stored tokens (access token and refresh token) from Isolated Storage and resets the **Authorization Status** to **Not Authorized**.

**When to use:**

- The user account used for authorization has changed or been deactivated
- You need to switch to a different user account
- You want to fully disconnect the integration from the external system

> **Warning:** After revoking, all integrations using this connection will fail to authenticate until authorization is completed again with **Start Authorization**.

## Token Storage

All tokens are stored securely in Business Central's **Isolated Storage** with module-level scope:

- Tokens cannot be read or accessed by other extensions
- Tokens are never displayed in the UI
- Tokens are scoped to the Business Central company and environment

## See Also

- [How to Configure REST API Authentication](how-to-rest-api-authentication.md)
- [REST API Connection Card](page-rest-api-connection-card.md)
- [REST API Connections](page-rest-api-connections.md)

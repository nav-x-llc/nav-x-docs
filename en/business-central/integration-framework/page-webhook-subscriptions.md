# Page Webhook Subscriptions

The **Webhook Subscriptions** page lists all outbound webhook subscription registrations for an integration. Each record represents a subscription that Business Central has registered (or will register) with an external API, instructing that API to send webhook payloads to BC when events occur.

**To open:** From the [Integrations page](page-integrations.md), select a REST API integration and choose **Webhook Subscriptions** from the action bar. Or search for **NAVX IF Webhook Subscriptions** in Tell Me.

## Overview

Unlike the [Webhook Configuration](page-webhook-config.md) page (which configures BC as a *receiver*), the Webhook Subscriptions page configures BC as a *subscriber* — actively registering with external APIs to request push notifications.

See [How to Set Up Webhook Subscriptions](how-to-webhook-subscriptions.md) for a full walkthrough.

## Key Fields

| Field | Description |
| --- | --- |
| **Integration Sorting Order** | The Sorting Order of the integration whose webhook receiver URL is used as the callback URL |
| **Connection Code** | The REST API connection used to authenticate when calling the external API's subscription endpoint |
| **Subscription URL** | The external API's subscription registration endpoint |
| **Registration Method** | HTTP method used when registering: **POST** or **PUT** |
| **Unregistration Method** | HTTP method used when unregistering: **DELETE** or **POST** |
| **Status** | The current lifecycle state of the subscription (color-coded) |
| **Verification Mode** | How the external API verifies the callback URL: **None**, **Challenge Response**, or **HMAC** |

## Subscription Status

| Status | Style | Description |
| --- | --- | --- |
| **Inactive** | Standard | Created but not yet registered with the external API |
| **Pending** | Attention (yellow) | Registration sent; awaiting verification or confirmation |
| **Active** | Favorable (green) | Registered and active — external API is sending webhooks |
| **Expired** | Ambiguous | Subscription TTL has passed; use **Refresh** to renew |
| **Failed** | Unfavorable (red) | Registration or verification failed; see error details |

## Actions

### Register

Sends the registration request to the external API's subscription endpoint. Builds the request body from the **Registration Body Template**, replaces `{{callback_url}}` with the integration's webhook receiver URL, and calls the external API. Updates the **Status** based on the response.

### Unregister

Sends an unregistration request to the external API to stop receiving webhooks. The subscription record remains but its **Status** returns to **Inactive**.

### Refresh

Re-registers an **Expired** subscription with the external API. Use this to renew subscriptions that have a time-to-live set by the provider.

### Refresh Expired

Processes all subscriptions with **Expired** status in a single action. Useful for bulk renewal after a subscription TTL period.

### Test Connection

Tests the REST API connection configured in **Connection Code** against the external API's subscription endpoint. Verifies authentication and reachability without modifying the subscription.

## Registration Body Template

The **Registration Body Template** field (visible on the subscription card) defines the JSON body sent during registration. Use the following placeholders:

| Placeholder | Replaced with |
| --- | --- |
| `{{callback_url}}` | The integration's direct webhook receiver URL |
| Standard [template variables](page-rest-api-template-vars.md) | Values resolved from Business Central records |

**Example template:**

```json
{"url": "{{callback_url}}", "events": ["order.created"], "format": "json"}
```

## See Also

- [How to Set Up Webhook Subscriptions](how-to-webhook-subscriptions.md)
- [Webhook Configuration](page-webhook-config.md)
- [REST API Connection Card](page-rest-api-connection-card.md)
- [Integrations Page](page-integrations.md)

# How to Set Up Webhook Subscriptions

This guide explains how to configure Business Central to register outbound webhook subscriptions with external APIs, enabling those APIs to push data to Business Central automatically whenever events occur.

## What Are Webhook Subscriptions?

Webhook Subscriptions are the complement to [Webhook Receivers](how-to-rest-api-webhooks.md). Where a webhook receiver passively listens for incoming payloads, a webhook subscription is an active registration that Business Central sends to an external API to say: "Send me a webhook whenever event X occurs."

**Key difference:**

| | Webhook Receiver | Webhook Subscription |
| --- | --- | --- |
| **Direction** | External system → Business Central | Business Central → External system (registration) |
| **Who initiates** | External system sends payloads | BC registers with the external API |
| **Use case** | Receive pushed data from a third-party service | Tell a third-party service to start pushing data to BC |

**Common use cases:**

- Register with a marketplace API so it pushes new orders to Business Central as they arrive
- Subscribe to a payment provider to receive real-time payment status updates
- Register with an IoT platform to receive device telemetry events
- Subscribe to a partner's catalog API to receive price change notifications

## How Webhook Subscription Registration Works

```text
BC calls external API's subscription registration endpoint (POST)
    |
BC sends callback URL (the BC webhook receiver URL) + optional verification token
    |
External API may challenge: sends a verification request to the callback URL
    |
BC webhook receiver responds to the challenge (challenge-response verification)
    |
External API confirms subscription is Active
    |
From now on: external API sends webhook payloads to the callback URL when events occur
    |
BC processes incoming payloads through the Integration Framework import pipeline
```

## Prerequisites

Before setting up webhook subscriptions:

1. You have a **REST API** type integration with a **Webhook Configuration** enabled — this provides the callback URL that the external API will call
2. You have a **REST API Connection** configured to authenticate with the external API's subscription management endpoint
3. The external API supports programmatic subscription registration via a REST endpoint
4. You have the **NAVX IF ALL** permission set assigned

## Step-by-Step Guide

### Step 1: Open Webhook Subscriptions

There are two ways to reach the Webhook Subscriptions page:

- From the **Integrations** page, select a REST API integration, then choose **Webhook Subscriptions** from the action bar
- Search for **NAVX IF Webhook Subscriptions** in the Tell Me search

### Step 2: Create a Subscription

Choose **New** to create a new webhook subscription record and configure the following fields:

#### General

| Field | Description |
| --- | --- |
| **Integration Sorting Order** | The sorting order of the REST API integration whose webhook receiver URL will be used as the callback URL |
| **Connection Code** | The REST API connection used to authenticate when calling the external API's subscription endpoint |
| **Subscription URL** | The external API's subscription registration endpoint (e.g., `https://api.example.com/v1/webhooks`) |
| **Registration Method** | The HTTP method for registration: **POST** (create new) or **PUT** (upsert). Most APIs use POST |
| **Unregistration Method** | The HTTP method for unregistering: **DELETE** (most common) or **POST** |
| **Status** | Read-only. The current lifecycle state of the subscription (see [Subscription Status](#subscription-status)) |

#### Registration Body

| Field | Description |
| --- | --- |
| **Registration Body Template** | A JSON body template to send with the registration request. Use `{{callback_url}}` as a placeholder for the callback URL that Business Central generates. Example: `{"url": "{{callback_url}}", "events": ["order.created", "order.updated"]}` |

The framework replaces `{{callback_url}}` with the integration's direct webhook receiver URL at registration time. You can also use standard [template variables](how-to-rest-api-template-variables.md) to inject values from Business Central records.

#### Verification

| Field | Description |
| --- | --- |
| **Verification Mode** | How the external API verifies your callback URL: **None**, **Challenge Response**, or **HMAC** |
| **Verification Token** | A token sent during registration that the external API will echo back in its verification challenge. BC validates that the echo matches |

### Step 3: Register the Subscription

After saving the configuration, choose **Register** from the action bar. The framework:

1. Builds the registration request body (replacing `{{callback_url}}` and any template variables)
2. Calls the external API's subscription endpoint using the configured connection and HTTP method
3. If the API responds with a challenge (challenge-response verification), the BC webhook receiver automatically responds to it
4. Updates the subscription **Status** to **Active** on success

> **Tip:** If registration succeeds but the external API still sends a verification challenge, ensure the integration's **Webhook Configuration** is enabled — the receiver must be active to respond to challenges.

## Subscription Status

| Status | Description |
| --- | --- |
| **Inactive** | Subscription has been created but not yet registered with the external API |
| **Pending** | Registration request has been sent; waiting for verification or confirmation |
| **Active** | Subscription is registered and the external API is sending webhooks to BC |
| **Expired** | The subscription has expired (some APIs set a TTL on subscriptions). Use **Refresh** to renew |
| **Failed** | Registration or verification failed. Check the error details and retry with **Register** |

## Verifying Subscriptions

### Challenge-Response Verification

Some APIs (GitHub, Facebook, Microsoft Graph) verify ownership of the callback URL by sending a GET or POST request to it with a challenge parameter. The callback URL must echo the challenge value back in the response.

When **Verification Mode** is set to **Challenge Response**:

1. During registration, the framework passes the **Verification Token** in the registration body
2. The external API sends a verification GET request to the callback URL with the challenge parameter
3. The BC webhook receiver's `receiveSecure` action automatically handles the challenge-response and replies with the correct value
4. Once verified, the external API marks the subscription as active

No additional configuration is needed — the BC webhook receiver handles challenge responses automatically when the subscription exists.

### HMAC Verification

Some APIs verify subscriptions using HMAC signatures. When **Verification Mode** is set to **HMAC**:

- Combine this with the [webhook security HMAC configuration](how-to-rest-api-webhooks.md#securing-incoming-webhooks) on the Webhook Configuration Card so that ongoing payloads are also verified

## Managing Subscriptions

### Refresh (Renew Expiring Subscriptions)

Some APIs set a time-to-live on subscriptions (e.g., 30 days, 90 days). When a subscription's status is **Expired**:

1. Open the **Webhook Subscriptions** page
2. Select the expired subscription
3. Choose **Refresh** — the framework re-registers the subscription with the external API
4. The status returns to **Active** on success

To proactively renew subscriptions before they expire, use the **Refresh Expired** action which processes all subscriptions with **Expired** status in one step.

### Test Connection

Use the **Test Connection** action to verify that the configured **Connection Code** can successfully reach the external API's subscription endpoint. This tests authentication and connectivity without modifying the subscription.

### Unregister

To stop receiving webhooks from the external API:

1. Select the subscription on the **Webhook Subscriptions** page
2. Choose **Unregister**
3. The framework calls the external API's unregistration endpoint using the configured method and URL
4. The subscription status changes to **Inactive**

Unregistering does not delete the subscription record — it remains for reference or re-registration.

## Example: Registering with a Shopify Webhook

**Connection:** A REST API connection to `https://{shop}.myshopify.com/admin/api/2024-01` using API Key authentication.

**Webhook Configuration:** An integration with webhook receiver enabled, providing a direct webhook URL.

**Subscription configuration:**

| Field | Value |
| --- | --- |
| Connection Code | SHOPIFY |
| Subscription URL | `https://{shop}.myshopify.com/admin/api/2024-01/webhooks.json` |
| Registration Method | POST |
| Unregistration Method | DELETE |
| Registration Body Template | `{"webhook": {"topic": "orders/create", "address": "{{callback_url}}", "format": "json"}}` |
| Verification Mode | None |

Choose **Register** — Shopify creates the webhook subscription and begins sending new order payloads to the BC webhook receiver.

## Troubleshooting

### Subscription Stays in "Pending" Status

The external API sent a verification challenge but BC did not respond correctly. Verify:

- The integration's **Webhook Configuration** is **Enabled**
- The **Verification Mode** matches what the external API expects
- The callback URL is publicly reachable from the internet (not a local or sandbox URL)

### "Registration Failed" Error

- Check the **Connection Code** — run **Test Connection** to confirm authentication works
- Confirm the **Subscription URL** is correct for the external API
- Review the error details on the subscription record for the HTTP status code and response body
- Check whether the external API requires specific headers (add them via the connection's **Headers** configuration)

### Subscription Expires Repeatedly

Some APIs require periodic renewal. Set up a scheduled Job Queue entry to run the **Refresh Expired** action automatically. Contact the external API provider for their subscription TTL and renewal requirements.

### External API Is Not Sending Payloads After Registration

- Confirm the subscription status is **Active** (not Pending or Failed)
- Use the external API's dashboard or subscription management UI to verify the callback URL matches the BC webhook receiver URL
- Test by triggering an event in the external system and checking the **Webhook Queue** on the BC integration

## See Also

- [How to Set Up REST API Webhooks](how-to-rest-api-webhooks.md)
- [How to Configure REST API Authentication](how-to-rest-api-authentication.md)
- [How to Configure Template Variables](how-to-rest-api-template-variables.md)
- [Webhook Subscriptions Page](page-webhook-subscriptions.md)
- [Webhook Configuration Page](page-webhook-config.md)

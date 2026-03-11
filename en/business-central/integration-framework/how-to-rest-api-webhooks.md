# How to Set Up REST API Webhooks

This guide explains how to configure webhook receivers so that external systems can push data into Business Central through the NAV-X Integration Framework.

## What Are Webhooks?

Webhooks are a push-based integration pattern. Instead of Business Central polling an external API on a schedule, the external system sends an HTTP POST request to a Business Central endpoint whenever new data is available. This enables near-real-time data flow without continuous polling.

**Key Difference:**

- **Polling (Pull):** Business Central calls the external API on a schedule to check for new data
- **Webhooks (Push):** The external system sends data to Business Central the moment it is available

Common webhook use cases include:

- Receiving new orders from an e-commerce platform (Shopify, WooCommerce)
- Receiving payment notifications from a payment provider (Stripe, PayPal)
- Receiving inventory updates from a warehouse management system
- Receiving status change notifications from a third-party service

## Prerequisites

Before setting up webhooks, ensure:

1. You have a **REST API** type integration configured in the Integration Framework
2. The integration has **Integration Fields** and **Integration Mappings** defined for the incoming JSON payload
3. You have the **NAVX IF ALL** permission set assigned
4. If using the Power Automate relay URL, the **Power Automate Base URL** is configured in the Flexible Integration Setup

## How Webhook Processing Works

```text
External system sends HTTP POST to webhook URL
    |
BC Webhook Receiver API page receives the request
    |
Payload is validated and enqueued in the Webhook Queue
    |
Webhook Config statistics updated (Last Received, Total Received)
    |
If Auto Process is enabled:
    |-- Payload is immediately parsed and imported
    |
If Auto Process is disabled:
    |-- Payload remains in queue as Pending
    |-- Job Queue or manual action processes it later
```

## Step-by-Step Guide

### Step 1: Open the Webhook Configuration

1. Open your **Integration** record (the integration must be of type **REST API**)
2. Choose the **Webhook Configuration** action to open the Webhook Configuration Card

### Step 2: Enable the Webhook Receiver

On the **Webhook Configuration Card**, configure the following fields:

|Field|Description|
|-|-|
|**Enabled**|Turn this on to allow the webhook receiver to accept incoming payloads. When disabled, all incoming requests are rejected.|
|**Response Data Path**|The JSON path in the incoming payload to the data array (e.g., `data.items`). Leave empty if the root element is the array.|
|**Auto Process**|When enabled, incoming payloads are processed immediately (synchronously) through the import pipeline. When disabled, payloads are queued for later processing.|

### Step 3: Copy the Webhook URL

The Webhook Configuration Card displays two URLs:

|URL Type|Description|
|-|-|
|**Direct Webhook URL**|The BC API URL for custom integrations. External systems POST payloads directly to this endpoint. Format: `<BC API Base URL>/api/navx/integrationFramework/v1.0/webhooks(<token>)/Microsoft.NAV.receive`|
|**Power Automate Webhook URL**|A relay URL for standard webhook providers (Stripe, Shopify, etc.) that route through Power Automate. Only visible when a Power Automate Base URL is configured in setup. Format: `<PA Base URL>/webhook/<token>`|

Use the **Copy Direct URL** or **Copy Power Automate URL** actions to copy the appropriate URL to your clipboard.

### Step 4: Configure the External System

In your external system's webhook settings:

1. Paste the copied webhook URL as the destination/endpoint URL
2. Set the HTTP method to **POST**
3. Set the content type to **application/json**
4. Send the payload as a JSON body with the structure: `{ "payload": "<your JSON data>" }`

### Step 5: Configure Auto Process or Queued Processing

Choose a processing mode based on your requirements:

- **Auto Process enabled (default):** Each incoming webhook is processed immediately. The external system waits for BC to finish processing before receiving a response. Best for low-volume, time-sensitive integrations.
- **Auto Process disabled:** Payloads are stored in the Webhook Queue with a **Pending** status. A Job Queue task or manual action processes them later. Best for high-volume integrations where you want to decouple reception from processing.

## Setting Up the Power Automate Webhook Relay Flow

Business Central API pages are OData-based and cannot receive raw HTTP POST bodies directly. Standard webhook providers (Stripe, Shopify, GitHub, etc.) send raw JSON payloads, so a **Power Automate relay flow** is needed to wrap the payload and forward it to Business Central.

A single Power Automate flow handles **all** webhook integrations. Each integration has a unique token in its URL, which routes the payload to the correct integration in Business Central.

### How the Relay Works

```text
External system sends POST to Power Automate trigger URL
    |
Power Automate extracts {token} from URL and raw request body
    |
Flow calls BC API: POST .../webhooks({token})/Microsoft.NAV.receive
    with body: { "payload": "<raw body>" }
    |
BC processes the webhook through the Integration Framework pipeline
```

### Step 1: Download the Flow Package

Download the Power Automate flow package: [WebhookRelay.zip](downloads/WebhookRelay.zip)

### Step 2: Import the Flow

1. Go to [Power Automate](https://make.powerautomate.com) and navigate to **My Flows**
2. Click **Import** > **Import Package (Legacy)** or use **Import from file**
3. Select the downloaded `WebhookRelay.zip` file
4. Create as a new flow

### Step 3: Configure the BC Environment URL

1. Open the imported flow for editing
2. Find the **BCEnvironmentURL** parameter
3. Set it to your Business Central environment URL, e.g.:
   `https://businesscentral.dynamics.com/v2.0/your-tenant-id/Production`

### Step 4: Configure Authentication

1. In the **Send_to_Business_Central** HTTP action, configure the authentication:

   | Setting | Value |
   | ------- | ----- |
   | **Type** | Active Directory OAuth |
   | **Tenant** | Your Azure AD tenant ID |
   | **Audience** | `https://api.businesscentral.dynamics.com` |
   | **Client ID** | Your Azure AD app registration client ID |
   | **Secret** | Your Azure AD app registration client secret |

   The app registration needs the **Dynamics 365 Business Central > API.ReadWrite.All** permission.

### Step 5: Save and Get the Trigger URL

1. Save the flow
2. Power Automate generates a trigger URL like:
   `https://prod-xx.logic.azure.com/workflows/.../triggers/When_a_HTTP_request_is_received/paths/invoke/webhook/{token}?api-version=2016-06-01&sig=...`

### Step 6: Configure the Base URL in Business Central

1. In Business Central, open **Integration Framework Setup** (via the **Setup** action on the Integrations page)
2. Navigate to the **Flexible Integration Setup**
3. Paste the **base trigger URL** into the **Power Automate Base URL** field
   - This is everything before `/webhook/{token}`, including the query parameters
   - Example: `https://prod-xx.logic.azure.com/workflows/.../triggers/When_a_HTTP_request_is_received/paths/invoke`
4. Once configured, each integration's Webhook Configuration Card will display the **Power Automate Webhook URL** with the integration's unique token appended

### Step 7: Register with External Services

1. Open the integration's **Webhook Configuration Card** in Business Central
2. Copy the **Power Automate Webhook URL** shown on the card
3. Register this URL in your external service's webhook settings (e.g., Stripe Dashboard, Shopify Admin, GitHub repository settings)

### Security

- The Power Automate trigger URL includes a `sig` parameter that authenticates incoming requests
- The flow authenticates to Business Central using OAuth2 (Azure AD app registration)
- All communication uses HTTPS

## The Webhook Receiver API Endpoint

The Webhook Receiver is a Business Central API page (not a user-navigated page) that serves as the HTTP endpoint for incoming webhooks. Key details:

- **API Publisher:** navx
- **API Group:** integrationFramework
- **API Version:** v1.0
- **Entity Name:** webhook
- **Entity Set Name:** webhooks

The receiver exposes a `receive` action that accepts a `payload` text parameter. When called, it:

1. Looks up the Webhook Config by the token in the URL
2. Validates the webhook is enabled
3. Validates the payload is not empty
4. Enqueues the payload into the Webhook Queue
5. Optionally processes it immediately if Auto Process is enabled

## Monitoring Webhook Deliveries

### Webhook Configuration Statistics

The Webhook Configuration Card displays:

|Field|Description|
|-|-|
|**Last Received**|The date/time when the last webhook payload was received.|
|**Total Received**|The total number of webhook payloads received since the configuration was created.|

### Webhook Queue

To view all webhook deliveries, choose the **View Queue** action on the Webhook Configuration Card. The **Webhook Queue** page displays:

|Column|Description|
|-|-|
|**Entry No.**|Auto-incrementing entry number.|
|**Status**|Processing status: **Pending**, **Processing**, **Completed**, or **Error**.|
|**Received Date/Time**|When the payload was received.|
|**Processed Date/Time**|When the payload was processed (or when it failed).|
|**Error Message**|The error message if processing failed.|
|**Source IP**|The IP address of the external system that sent the webhook.|

Status values are color-coded for quick visual identification:

- **Pending** - Standard (no highlight)
- **Processing** - Attention (yellow)
- **Completed** - Favorable (green)
- **Error** - Unfavorable (red)

## Retry Handling for Failed Webhooks

When a webhook payload fails to process, the queue entry is set to **Error** status and the error message is recorded. You have several options for retrying:

### Retry Individual Entries

1. Open the **Webhook Queue** page
2. Select one or more entries with **Pending** or **Error** status
3. Choose the **Process Selected** action
4. The selected entries are reprocessed and a confirmation message shows the count of processed entries

### Retry All Failed Entries

1. Open the **Webhook Queue** page
2. Choose the **Retry Failed** action
3. All entries with **Error** status are reset to **Pending** and reprocessed
4. A confirmation message shows the count of retried entries

### Clean Up Completed Entries

1. Open the **Webhook Queue** page
2. Choose the **Delete Completed** action
3. Confirm the deletion when prompted
4. All entries with **Completed** status are removed

## Managing Webhook Tokens

Each webhook configuration uses a unique token (GUID) that forms part of the webhook URL. This token acts as an identifier to route incoming requests to the correct integration.

To generate a new token:

1. Open the **Webhook Configuration Card**
2. Choose the **Generate New Token** action
3. Confirm the warning that the existing URL will stop working
4. The webhook URL changes immediately; update the external system with the new URL

> **Important:** Generating a new token invalidates the previous webhook URL. Any external systems using the old URL will no longer be able to deliver payloads.

## Troubleshooting

### "Webhook receiver is not enabled" Error

The webhook configuration exists but **Enabled** is turned off. Open the Webhook Configuration Card and enable it.

### "No webhook configuration found" Error

No webhook configuration exists for the integration referenced by the token in the URL. Ensure the webhook URL is correct and matches an existing integration.

### "The webhook payload is empty" Error

The external system sent an empty payload. Verify the external system is sending a valid JSON body with the `payload` field.

### Payloads Received but Not Processing

If Auto Process is disabled, payloads remain in **Pending** status. Either enable Auto Process or manually process entries from the Webhook Queue page.

### Data Not Mapping Correctly

Verify the **Response Data Path** on the Webhook Configuration matches the structure of the incoming payload. If the data array is nested (e.g., inside `data.items`), set the path accordingly.

## See Also

- [How to Set Up REST API GraphQL Queries](how-to-rest-api-graphql.md)
- [How to Set Up REST API Sync Protocol](how-to-rest-api-sync-protocol.md)
- [How to Use Copilot for REST API Setup](how-to-rest-api-copilot.md)
- [How to Use Background Processing](how-to-background-processing.md)
- [How to Import from JSON Files](how-to-json-import.md)

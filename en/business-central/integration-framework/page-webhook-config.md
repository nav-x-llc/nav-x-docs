# Page Webhook Configuration

The **Webhook Configuration** page configures an integration to receive incoming webhook payloads from external systems. It provides the webhook URLs, processing settings, and statistics for a single integration.

**To open:** From the [Integrations page](page-integrations.md), select a REST API integration and open its webhook configuration.

## Overview

Webhook configuration enables your integration to receive pushed data from external systems (e.g., Stripe, Shopify, custom applications) rather than polling for it. The framework provides two webhook URL types:

- **Direct Webhook URL** -- A Business Central API endpoint for custom integrations to POST webhook payloads directly
- **Power Automate Webhook URL** -- A relay URL for standard webhook providers, suitable for external systems that cannot authenticate directly with Business Central

When a webhook payload is received, it is either processed immediately (synchronous) or queued for later processing by a Job Queue task, depending on the **Auto Process** setting.

## Key Fields

### General

| Field | Description |
| ------- | ----------- |
| **Enabled** | Whether the webhook receiver is enabled for this integration. |
| **Response Data Path** | The JSON path in the incoming payload to the data array (e.g., `data.items`). Leave empty if the root element is the array. |
| **Auto Process** | Whether incoming webhook payloads are processed immediately (synchronously) or queued for later processing by a Job Queue task. |

### Webhook URLs

| Field | Description |
| ------- | ----------- |
| **Direct Webhook URL** | The BC API URL for custom integrations to POST webhook payloads directly. Send a POST request with body `{ "payload": "..." }`. Read-only. |
| **Power Automate Webhook URL** | The Power Automate relay URL for standard webhook providers (Stripe, Shopify, etc.). Configure this URL in your external system's webhook settings. Read-only. Visible only when a Power Automate base URL is configured. |

### Statistics

| Field | Description |
| ------- | ----------- |
| **Last Received** | When the last webhook payload was received. |
| **Total Received** | The total number of webhook payloads received. |

## Webhook Receiver API Endpoint

The webhook receiver is exposed as a Business Central API page with the following properties:

| Property | Value |
| ------- | ----------- |
| **API Group** | `integrationFramework` |
| **API Publisher** | `navx` |
| **API Version** | `v1.0` |
| **Entity Name** | `webhook` |
| **Entity Set Name** | `webhooks` |

The receiver exposes a `receive` bound action that accepts a `payload` text parameter. External systems POST their payload to this endpoint, and the framework enqueues the payload for processing by the configured integration.

The API page is read-only -- insert, modify, and delete operations are not allowed.

## Actions

### Generate New Token

Generates a new unique webhook token, which changes the webhook URL. Any existing integrations using the old URL will stop working. A confirmation prompt is displayed before generating.

### View Queue

Opens the [Webhook Queue](page-webhook-queue.md) page filtered to this integration, showing all received webhook payloads and their processing status.

### Copy Direct URL

Copies the direct BC API webhook URL to the clipboard for use in external system configurations.

### Copy Power Automate URL

Copies the Power Automate relay webhook URL to the clipboard. Available only when a Power Automate base URL is configured.

## See Also

- [Webhook Queue](page-webhook-queue.md)
- [REST API Connection Card](page-rest-api-connection-card.md)
- [REST API Endpoint Card](page-rest-api-endpoint-card.md)
- [Integrations Page](page-integrations.md)

# How to Use the Bulk Import API

This guide explains how external systems can submit large datasets to Business Central for import using the Integration Framework's Bulk Import API — an asynchronous, fire-and-forget REST API that decouples data submission from processing.

## What Is the Bulk Import API?

The Bulk Import API exposes a Business Central REST endpoint that external systems can POST data to. Unlike a synchronous import (where the caller waits for processing to complete), the Bulk Import API accepts the payload immediately, returns a **Request ID**, and processes the data asynchronously in the background.

The external system uses the Request ID to poll for the processing status.

**When to use the Bulk Import API:**

- High-volume data submissions where the caller cannot wait for synchronous processing
- External systems (ERP, WMS, e-commerce platforms) that need a reliable "drop and forget" integration pattern
- Nightly batch loads where confirmation is needed only that data was received, not immediately processed
- Integration scenarios where the submitting system and BC run on different schedules

**Comparison with other integration patterns:**

| Pattern | Who initiates | Synchronous? | Best for |
| --- | --- | --- | --- |
| File import | BC (manual or scheduled) | Yes | Batch files on a schedule |
| REST API polling | BC polls external API | Yes | Near-real-time pull |
| Webhook receiver | External system pushes | Yes (or queued) | Event-driven push |
| **Bulk Import API** | **External system pushes** | **No — async** | **High-volume fire-and-forget** |

## How It Works

```text
External system POSTs payload to BC Bulk Import API endpoint
    |
BC returns 202 Accepted + Request ID immediately
    |
BC enqueues the payload as a Bulk Import Request (Status: Pending)
    |
Job Queue picks up the request and processes it (Status: Processing)
    |
Processing completes (Status: Completed or Failed)
    |
External system GETs status using Request ID
    |
On Completed: external system confirms success
On Failed: external system reads error details and decides to retry or escalate
```

## API Endpoint Reference

The Bulk Import API is a Business Central API page with the following properties:

| Property | Value |
| --- | --- |
| **API Publisher** | `navx` |
| **API Group** | `integrationFramework` |
| **API Version** | `v1.0` |
| **Entity Name** | `bulkImportRequest` |
| **Entity Set Name** | `bulkImportRequests` |

### Submit a Bulk Import Request (POST)

```text
POST /api/navx/integrationFramework/v1.0/bulkImportRequests
Content-Type: application/json
Authorization: Bearer <token>

{
  "integrationSortingOrder": 1000,
  "payload": "[{\"CustomerNo\": \"C001\", \"Name\": \"Contoso\"}, ...]"
}
```

**Request body fields:**

| Field | Type | Description |
| --- | --- | --- |
| `integrationSortingOrder` | Integer | The Sorting Order of the Integration Framework integration that should process this payload |
| `payload` | String | The data payload as a JSON string. The structure must match what the integration expects based on its field mappings |

**Response (202 Accepted):**

```json
{
  "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "Pending",
  "submittedAt": "2026-03-31T09:00:00Z"
}
```

Save the `requestId` — you need it to poll for status.

### Poll for Status (GET)

```text
GET /api/navx/integrationFramework/v1.0/bulkImportRequests(a1b2c3d4-e5f6-7890-abcd-ef1234567890)
Authorization: Bearer <token>
```

**Response:**

```json
{
  "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "integrationSortingOrder": 1000,
  "status": "Completed",
  "submittedAt": "2026-03-31T09:00:00Z",
  "processedAt": "2026-03-31T09:00:05Z",
  "recordCount": 250,
  "errorMessage": ""
}
```

## Request Status Values

| Status | Description | Next action |
| --- | --- | --- |
| **Pending** | Payload received; waiting for the Job Queue to pick it up | Poll again shortly |
| **Processing** | Job Queue is actively processing the payload | Poll again; do not resubmit |
| **Completed** | Processing finished successfully | No action needed |
| **Failed** | Processing encountered an error | Read `errorMessage`; decide whether to resubmit or escalate |
| **Cancelled** | Request was cancelled before processing | Resubmit if needed |

## Retention Policy

Bulk Import Request records are retained according to the following policy:

| Status | Retention |
| --- | --- |
| **Pending** | Never automatically deleted (must be processed or cancelled first) |
| **Processing** | Never automatically deleted while active |
| **Completed** | Deleted after **30 days** |
| **Failed** | Deleted after **30 days** |
| **Cancelled** | Deleted after **30 days** |

> **Note:** Records in Pending or Processing status are never automatically deleted to prevent data loss. If a request is stuck in Processing after a Job Queue failure, an administrator can manually reset or cancel it.

## Setting Up an Integration to Accept Bulk Import Requests

Any Integration Framework integration can receive bulk import requests. The integration must be configured to handle the incoming payload format.

### Step 1: Create or identify the integration

Create a REST API or file-based integration with the appropriate **Integration Fields** and **Integration Mappings** for the incoming data format. The `integrationSortingOrder` in the API request must match this integration's Sorting Order.

### Step 2: Enable bulk import reception

1. Open the **Integration** record
2. In the **Bulk Import** section, enable **Accept Bulk Import Requests**
3. Optionally configure a **Max Payload Size (KB)** limit to reject oversized submissions

### Step 3: Ensure the Job Queue is running

The Bulk Import processor runs as a Job Queue task. Verify the Job Queue entry **NAVX IF Bulk Import Processor** is active and scheduled with an appropriate interval (e.g., every 1–5 minutes for near-real-time processing).

## Authentication

External systems must authenticate with Business Central using one of the standard BC API authentication methods:

- **OAuth2 (recommended):** Azure AD app registration with `Dynamics 365 Business Central > API.ReadWrite.All` permission
- **Basic Auth:** BC user credentials (not recommended for production)

The authenticating user or service principal must have the **NAVX IF ALL** permission set.

## Polling Best Practices

- **Poll interval:** Wait at least 5–10 seconds between polls. Processing time depends on payload size and Job Queue load
- **Maximum poll attempts:** Implement a maximum retry count (e.g., 60 attempts × 10 seconds = 10 minutes) before treating the request as timed out
- **Exponential backoff:** Increase polling interval progressively (5s, 10s, 20s, 40s...) to reduce load during periods of high BC processing
- **Idempotency:** If you must resubmit a failed request, use the same payload. Do not resubmit requests that are still in Pending or Processing status

## Troubleshooting

### 404 Not Found when polling status

The Request ID is invalid or the record has been deleted (past the 30-day retention window). Verify the Request ID and check retention policy.

### Request stays in "Pending" for a long time

The Job Queue processor (**NAVX IF Bulk Import Processor**) may not be running. Ask an administrator to check the Job Queue entries in Business Central.

### Status is "Failed" with an error message

Read the `errorMessage` field for details. Common causes:

- The payload structure does not match the integration's field mappings
- A required field is missing or has an invalid value
- The integration's target table raised a validation error

Fix the payload data and resubmit a new request (do not reuse the failed Request ID).

### 413 Payload Too Large

The payload exceeds the configured **Max Payload Size** limit on the integration. Split the payload into smaller batches and submit multiple requests.

## See Also

- [How to Set Up REST API Import](how-to-rest-api-import.md)
- [How to Set Up REST API Webhooks](how-to-rest-api-webhooks.md)
- [How to Use Background Processing](how-to-background-processing.md)
- [How to Handle Errors](how-to-error-handling.md)

# How to Use Export Response Writeback

This guide explains how to configure Export Response Writeback to automatically update Business Central record fields with values returned in the API response after a successful export.

## What Is Export Response Writeback?

When BC exports a record to a REST API via POST, PUT, or PATCH, the API typically returns a response body containing the updated or confirmed state of the record. Export Response Writeback lets you map fields from that response JSON back to fields on the originating BC record.

**Common use cases:**

- After posting a sales order to an external fulfillment API, capture the fulfillment reference number returned in the response and write it back to a custom field on the Sales Order
- After creating a customer in a CRM via POST, capture the CRM's internal ID and write it back to a BC customer field for future reference
- After syncing an item to a marketplace, capture the marketplace's listing URL or status and store it in a BC item field
- After posting a payment, capture the transaction ID returned by the payment gateway

## Relationship to the Identity Registry

Export Writeback and the [Identity Registry](how-to-identity-registry.md) are complementary:

- The **Identity Registry** captures the external ID specifically for routing purposes (POST vs PUT/PATCH on future runs)
- **Export Writeback** captures any response fields and writes them directly into BC record fields

You can use both together: the Identity Registry handles routing; Writeback handles the data.

## Prerequisites

- You have a REST API export integration configured
- The API returns a JSON response body on POST, PUT, or PATCH calls
- The integration runs in **SingleRecord** mode (one API call per BC record) — Writeback is not supported in batch export mode
- You have the **NAVX IF ALL** permission set

## Configuring Export Response Writeback

1. Open the **REST API Endpoint Card** for the export integration's endpoint
2. Scroll to the **Export Writeback** section (a list part at the bottom of the card)
3. Choose **New** to add a writeback mapping

Configure each writeback row:

| Field | Description |
| --- | --- |
| **Response JSON Path** | Dot-notation path in the API response JSON to the field value to capture (e.g., `id`, `data.fulfillmentRef`, `result.status`) |
| **Target Table No.** | The BC table containing the field to update. Typically the same table as the export integration's source table |
| **Target Field No.** | The field in the target table to write the captured value to |
| **Use Validate** | When enabled, the field is updated using BC's `Validate` trigger, which runs field validation logic. When disabled, the value is written directly. Use **Validate** for fields with important side effects (e.g., updating a status that triggers other logic). Disable it for simple data fields to avoid unexpected validation errors |

Add one row per response field you want to write back to BC.

## How Writeback Works

For each BC record exported via SingleRecord mode:

```text
BC exports record → API call (POST/PUT/PATCH)
    |
API returns response JSON
    |
For each Writeback mapping:
    |-- Navigate to Response JSON Path in response
    |-- Extract value
    |-- Find the BC record using the export's source key
    |-- Write value to Target Field (with or without Validate)
    |
Writeback errors are logged but do NOT fail the export
    |
Export result: Success (even if some writebacks failed)
```

> **Important:** Writeback failures are isolated — they are logged as warnings in the export log but never cause the export record to be marked as failed. The export result reflects whether the API call succeeded, not whether all writebacks succeeded.

## Monitoring Writeback Results

After an export run, open the **Import Log Card** for the run. Each export row's detail entry shows:

- **Writeback Status**: Success, Partial (some fields failed), or Failed (all fields failed)
- **Writeback Errors**: A list of which fields failed and why

## Example: Capture Fulfillment Reference from API Response

**API POST response:**

```json
{
  "orderId": "ORD-001",
  "fulfillmentRef": "FUL-20260331-0042",
  "estimatedDelivery": "2026-04-05",
  "status": "accepted"
}
```

**Writeback mappings:**

| Response JSON Path | Target Table | Target Field | Use Validate |
| --- | --- | --- | --- |
| `fulfillmentRef` | Sales Header | Fulfillment Reference No. | No |
| `estimatedDelivery` | Sales Header | Promised Delivery Date | Yes |
| `status` | Sales Header | External Status | No |

After each successful export, these three fields on the BC Sales Header are updated automatically with the values returned by the fulfillment API.

## Limitations

- Writeback is only supported in **SingleRecord** export mode. Batch mode (multiple records in one API call) does not support per-record response mapping
- If the **Response JSON Path** does not exist in the response, that writeback row is skipped silently
- Writeback runs synchronously after each record's API call, within the same export job

## See Also

- [How to Use Identity Registry](how-to-identity-registry.md)
- [How to Set Up REST API Import](how-to-rest-api-import.md)
- [REST API Endpoint Card](page-rest-api-endpoint-card.md)
- [How to Use Import Logging](how-to-import-logging.md)

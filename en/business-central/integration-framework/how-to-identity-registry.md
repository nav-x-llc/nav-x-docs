# How to Use the Identity Registry

This guide explains how to use the Identity Registry to enable bidirectional synchronization between Business Central and external APIs — where BC exports records to an external system via POST, captures the external system's assigned ID from the response, and uses that ID on future imports and exports for seamless two-way record matching.

## What Is the Identity Registry?

The Identity Registry is an extension of [Cross References](how-to-duplicate-detection.md) that adds export-side key tracking. When BC exports a new record to an external API:

1. The framework sends a **POST** request (create) and captures the external ID returned in the API response
2. A cross-reference is created with **Direction = Export**, linking the BC record's primary key to the external ID
3. On the next export of the same record, the framework detects the cross-reference and routes to **PUT** or **PATCH** (update) instead of POST
4. On import, if the same external ID arrives in source data, the cross-reference is found, and its direction is upgraded to **Both** — confirming the bidirectional link

**The result:** Records created in BC and exported to an external system are tracked persistently. Future exports update rather than duplicate, and future imports match against the correct BC record.

**Common use cases:**

- Export new BC customers to a CRM; capture the CRM's customer ID; future syncs update rather than duplicate
- Export new sales orders to a fulfillment API; capture the external order ID for status polling
- Sync BC items to a marketplace; track the marketplace's SKU ID for future updates and incoming order matching

## Prerequisites

- You have a REST API export integration configured
- The external API returns the newly created record's ID in its POST response (as a JSON field)
- [Cross Reference / Duplicate Detection](how-to-duplicate-detection.md) is configured on the import integration for the same entity
- You have the **NAVX IF ALL** permission set

## Step 1: Enable Identity Registry on the Export Integration

1. Open the **export** integration record on the **Integrations** page
2. Open the **Integration Mappings** (choose **Mappings** from the action bar)
3. Enable **Register External ID on Export**
4. Configure the following fields:

| Field | Description |
| --- | --- |
| **Response ID JSON Path** | The dot-notation path in the POST response JSON that contains the external ID assigned by the API (e.g., `id`, `data.customerId`, `result.externalRef`) |
| **Cross Reference Direction** | Set to **Export** — the cross-reference is created with this direction on first export |
| **Export Update Method** | **PUT** or **PATCH** — the HTTP method used when updating an existing record (one with a known cross-reference). The full resource URL is constructed as `<base URL>/<external ID>` |

## Step 2: How POST vs PUT/PATCH Routing Works

During each export run, for each BC record being exported:

```text
Look up cross-reference by BC primary key
    |
Not found → New record
    |-- Export via POST to the base endpoint
    |-- Parse response JSON using Response ID JSON Path
    |-- Create cross-reference: BC key ↔ external ID, Direction = Export
    |
Found (Direction = Export or Both) → Known record
    |-- Export via PUT or PATCH to <base URL>/<external ID>
    |-- No new cross-reference created
```

The URL construction appends the external ID to the endpoint's Resource Path automatically. For example, if Resource Path is `/api/v1/customers` and the external ID is `EXT-001`, the update call goes to `/api/v1/customers/EXT-001`.

## Step 3: Configure Import-Side Cross-Reference Matching

For bidirectional sync, also configure the **import** integration:

1. Open the **import** integration for the same entity
2. On the **Integration Mappings**, set:
   - **External Key Field No.** → the field that carries the external ID in the import source data
   - **Match Strategy** → **Exact**
   - **Duplicate Action** → **Update**
   - **Auto Create Cross Reference** → enabled

When an import matches an external ID that already exists as an Export-direction cross-reference, the Match Engine upgrades the direction to **Both**, confirming the full bidirectional link.

## Cross-Reference Direction Lifecycle

| Stage | Direction | Meaning |
| --- | --- | --- |
| Before first export | *(no record)* | BC record has never been sent to the external system |
| After first POST | **Export** | BC exported the record; external system's ID is captured |
| After first import match | **Both** | External system is also sending this record back to BC |

Once a cross-reference reaches **Both**, both the import and export pipelines use it for matching.

## Viewing the Identity Registry

Cross-references created by the Identity Registry appear on the standard **Cross References** page (see [Cross References Page](page-cross-references.md)). Filter by **Direction = Export** or **Direction = Both** to see Identity Registry records specifically.

## Export Writeback vs Identity Registry

| | Identity Registry | Export Writeback |
| --- | --- | --- |
| **Captures** | The external ID from the POST response | Any field(s) from the POST/PUT/PATCH response |
| **Stores in** | Cross-reference table | Directly into BC record fields |
| **Used for** | Future routing (POST vs PUT/PATCH) | Updating BC data with response values |
| **Typical data** | `id`, `externalRef`, `uuid` | Status codes, confirmation numbers, timestamps |

You can use both together: the Identity Registry captures the ID for routing, while [Export Writeback](how-to-export-writeback.md) captures additional response fields into BC.

## Troubleshooting

### Record Is Exported as POST Every Time (Not Updating)

- The cross-reference was not created. Confirm **Register External ID on Export** is enabled
- Check **Response ID JSON Path** — if the path is incorrect, the external ID is not extracted and no cross-reference is created
- Review the export log for errors during the response ID capture step

### PUT/PATCH Returns 404

The external ID stored in the cross-reference no longer exists in the external system (the record was deleted externally). Delete the cross-reference on the **Cross References** page so the next export creates a new record via POST.

### Import Is Not Matching Against Export Cross-References

Confirm the **External Key Field No.** on the import mapping points to the field that carries the same external ID value that was captured during export. The values must be identical for the Match Engine to find the cross-reference.

## See Also

- [How to Set Up Duplicate Detection and Cross References](how-to-duplicate-detection.md)
- [How to Use Export Response Writeback](how-to-export-writeback.md)
- [Cross References Page](page-cross-references.md)
- [How to Set Up REST API Import](how-to-rest-api-import.md)

# How to Import Composite Documents

This guide explains how to use the Composite Document Builder to import multi-part documents — such as an order header together with its line items — from a single source file or API response, in a single all-or-nothing transaction.

## What Is Composite Document Import?

A composite document is a record in Business Central that consists of a **parent** record (e.g., a Sales Header) and one or more **child** records (e.g., Sales Lines) that belong to it. Importing these from an external source traditionally requires either:

- A single integration with complex interleaved-row logic (fragile and hard to maintain), or
- Two separate integrations run in sequence (which risks partial imports if the second step fails)

The Composite Document Builder provides a cleaner solution: you configure one **parent integration** and one or more **child integrations**, and the framework imports each document — header plus all its lines — as an atomic unit. If any part of a document fails, the entire document is rolled back.

**Difference from the Sales Documents how-to:**

The existing [Import Sales Documents](how-to-sales-documents.md) guide covers multi-line document import using a single flat integration. The Composite Document Builder is the newer, more flexible approach that supports:

- Truly separate parent/child integrations with independent field mappings
- Nested JSON/XML sources where child data is embedded inside parent records
- Any BC table combination, not just Sales Header/Line

## Prerequisites

- You have a parent integration and at least one child integration configured, each with their own field mappings
- For nested JSON/XML sources, child data is accessible as an array within each parent record
- You have the **NAVX IF ALL** permission set

## Concepts

### Parent Integration

The integration that processes the top-level record (e.g., Sales Header, Purchase Header, a custom document header table). When Document Mode is enabled, the parent integration orchestrates the entire import.

### Child Integration

An integration that processes the detail records (e.g., Sales Lines, Purchase Lines) belonging to a parent. Child integrations are linked to the parent and run within the parent's transaction scope.

### Document Mode

A flag on the parent integration that activates composite document processing. When enabled, the import pipeline uses the Document Builder instead of the standard row-by-row processor.

## Step 1: Configure the Parent Integration

1. Open the parent integration record on the **Integrations** page
2. Enable **Document Mode** in the **Composite Document** section
3. Configure the parent's field mappings to match the header-level fields in your source data

## Step 2: Configure Child Integrations

Each child integration is a standard integration with its own field mappings for the line-level data.

For **flat files** (Excel, CSV, text) where header and line rows are interleaved in the same file:

- Set the child integration's field mappings to match the line-level columns
- Use a pre-parsing transformation or row filter to distinguish header rows from line rows (e.g., a `Type` column with value `L`)

For **nested JSON/XML** sources where line items are embedded as an array inside each header object:

- See [How to Use Nested Record Expansion](how-to-nested-expansion.md) to configure the child integration to expand from the parent's nested array
- The **Nested Data Path** on the child integration points to the array within the parent record (e.g., `lines`, `items.orderLines`)

## Step 3: Link Child Integrations to the Parent

1. Open the parent integration record
2. Choose **Child Integrations** from the action bar
3. The **Child Integrations** page opens
4. Choose **New** and add each child integration:

| Field | Description |
| --- | --- |
| **Child Integration Sorting Order** | The Sorting Order of the child integration |
| **Processing Order** | The sequence in which child integrations are processed. Lower numbers run first |
| **Description** | An optional label (e.g., "Sales Lines") |

Add one row per child integration.

## Step 4: Define the Parent Key Link

The framework needs to know how to link child records back to their parent. Configure the **Parent Link Field** on each child integration:

1. Open the child integration's **Integration Fields** page
2. Locate the field that holds the parent key (e.g., the Document No. or Order No. field)
3. Set **Parent Link** to **Yes** on that field

The Document Builder passes the parent's key value to this field in each child row automatically.

## How the Document Builder Processes Each Document

```text
For each parent record in the source:
    |
    Begin transaction
    |
    Import parent record → BC parent table (e.g., Sales Header)
    Capture parent key (e.g., new Document No.)
    |
    For each child integration (in Processing Order):
        |
        Import all child rows belonging to this parent → BC child table
        Inject parent key into each child row via Parent Link field
    |
    If all steps succeed → Commit transaction
    If any step fails → Roll back entire document (no partial imports)
```

Every document — header plus all lines — is either fully committed or fully rolled back. There are no partial documents in BC after a composite import.

## Monitoring Composite Imports

### Import Log Grouping

After a composite import, the Import Log groups parent and child log entries by **Document Entry No.**:

- The parent log entry shows the overall document result
- Child log entries are nested under the parent, showing per-line results
- Choose **Show Document Logs** on any Import Log entry to see the full parent + children log for that document

### Errors in Composite Documents

If a child record fails validation or a BC write error occurs:

- The error is recorded on the child's log entry
- The entire document (parent + all children) is rolled back
- Other documents in the same import run are unaffected — the rollback is per-document, not per-run

After reviewing errors in the Import Log, fix the source data and re-import. Only the failed documents need to be resubmitted.

## Example: Importing Purchase Orders with Lines

**Source:** A JSON API response containing an array of orders, each with an embedded `lines` array.

**Parent Integration (Sorting Order 1000):**

- Target table: Purchase Header
- Document Mode: enabled
- Field mappings: `orderNumber` → No., `vendorId` → Buy-from Vendor No., `orderDate` → Document Date

**Child Integration (Sorting Order 1001):**

- Target table: Purchase Line
- Nested Data Path: `lines` (expands child rows from the parent's `lines` array)
- Parent Link field: Document No. (receives the parent's generated Document No.)
- Field mappings: `itemSku` → No., `quantity` → Quantity, `unitPrice` → Direct Unit Cost

**Child Integrations link:** Parent 1000 → Child 1001, Processing Order 1.

Running the parent integration imports all orders and their lines in a single pass, with each order fully committed or fully rolled back.

## See Also

- [How to Import Sales Documents](how-to-sales-documents.md)
- [How to Use Nested Record Expansion](how-to-nested-expansion.md)
- [How to Use Import Logging](how-to-import-logging.md)
- [How to Handle Errors](how-to-error-handling.md)
- [Integrations Page](page-integrations.md)

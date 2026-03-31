# How to Set Up Duplicate Detection and Cross References

This guide explains how to configure the Integration Framework to detect duplicate records during import using cross-references, and how to control what happens when a duplicate is found.

## What Is Duplicate Detection?

Duplicate detection uses a **cross-reference table** to track the relationship between external records (identified by an external key from the source data) and Business Central records (identified by their BC primary key). When a new import arrives, the Match Engine checks whether an external key already has a cross-reference — if so, the record is a known duplicate.

**What you gain:**

- Prevent creating duplicate BC records when the same external data is imported more than once
- Automatically update existing BC records when re-imports carry the same external key
- Maintain a persistent map of external-to-BC key relationships across runs

**How it relates to the Identity Registry:**

Duplicate detection via cross-references is the foundation. The [Identity Registry](how-to-identity-registry.md) extends this for bidirectional sync — where exports also register keys and the direction (import-only, export-only, or both) is tracked. Start with basic duplicate detection here; add Identity Registry when you need export-side key tracking.

## Prerequisites

- You have an integration configured with field mappings
- The source data contains a stable, unique external key per record (e.g., an ERP record ID, a vendor-assigned code)
- You have the **NAVX IF ALL** permission set

## Concepts

### External Key

A value from the source data that uniquely identifies a record in the external system. For example: an order number from a marketplace, a customer ID from a CRM, a product SKU from a supplier feed.

### Cross Reference

A persisted record linking an **external key** to a **BC primary key**. Created automatically on first import; looked up on subsequent imports to detect duplicates.

### Match Strategy

How the Match Engine compares the incoming external key against existing cross-references:

| Match Strategy | Description |
| --- | --- |
| **Exact** | The external key must match the cross-reference exactly (case-insensitive) |
| **Normalized** | Minor formatting differences (whitespace, dashes, leading zeros) are ignored before comparison |

### Duplicate Action

What happens when the Match Engine finds a matching cross-reference:

| Duplicate Action | Description |
| --- | --- |
| **Update** | The existing BC record is updated with the new data from the source (modify) |
| **Skip** | The row is skipped — no insert, no update. The existing record is left unchanged |
| **Error** | The row is rejected with an error, flagging the duplicate for manual review |

## Step 1: Configure Duplicate Detection on the Integration

1. Open the **Integration** record on the **Integrations** page
2. Open the **Integration Mappings** page (choose **Mappings** from the action bar)
3. Set the following fields on the mapping:

| Field | Description |
| --- | --- |
| **Match Strategy** | How external keys are compared: **Exact** or **Normalized** |
| **Duplicate Action** | What happens when a duplicate is found: **Update**, **Skip**, or **Error** |
| **External Key Field No.** | The field number in the Integration Fields list that carries the external key value from the source data |
| **Auto Create Cross Reference** | When enabled, a cross-reference record is created automatically on first successful import of a new record |

## Step 2: Verify the External Key Field

The **External Key Field No.** must point to a field in the integration's field list that:

- Is populated for every source record
- Contains a value that is stable and unique in the external system
- Is present in every import of the same record (the same order always comes with the same order number)

If the external system does not provide a natural key, you can derive one using an [Expression Field](how-to-expression-fields.md) that combines multiple source columns into a composite key.

## How the Match Engine Works

During import, for each incoming row:

```text
Extract external key value from the row (External Key Field)
    |
Look up cross-reference by external key
    |
Found → Duplicate detected
    |-- Duplicate Action = Update → modify existing BC record
    |-- Duplicate Action = Skip  → skip this row silently
    |-- Duplicate Action = Error → reject row with error message
    |
Not found → New record
    |-- Import as new BC record (insert)
    |-- If Auto Create Cross Reference → create cross-reference linking
         external key to new BC primary key
```

## Viewing Cross References

To see all cross-reference records for an integration:

1. Open the **Integration** record
2. Choose **Cross References** from the action bar

The **Cross References** page shows:

| Column | Description |
| --- | --- |
| **External Key** | The key value from the external system |
| **BC Primary Key** | The corresponding BC record's primary key |
| **Direction** | **Import**, **Export**, or **Both** (see [Identity Registry](how-to-identity-registry.md)) |
| **Created Date/Time** | When this cross-reference was first created |
| **Last Used Date/Time** | When this cross-reference was last matched during an import or export |

## Managing Cross References

### Manually Adding a Cross Reference

If you are migrating from an existing setup where BC records already exist and you want to link them to external keys without re-importing:

1. On the **Cross References** page, choose **New**
2. Enter the **External Key** and **BC Primary Key** manually
3. Set **Direction** to **Import**

This tells the Match Engine that the external record is already in BC and should be updated (not inserted) on the next import.

### Deleting a Cross Reference

To force the next import to treat an external key as new (creating a new BC record):

1. On the **Cross References** page, select the record
2. Choose **Delete**

> **Caution:** Deleting a cross-reference when **Duplicate Action = Update** will cause the next import to create a new BC record instead of updating the existing one. This may produce duplicates in BC. Use with care.

### Retention Policy

Cross-reference records that have not been used for a configured period are automatically cleaned up. Configure the retention period in the Integration Framework Setup under **Cross Reference Retention (days)**. Set to `0` to retain indefinitely.

## Troubleshooting

### Duplicate Records Are Still Being Created

- Confirm **Auto Create Cross Reference** is enabled on the mapping
- Verify the **External Key Field No.** points to a field that is consistently populated with the same value across imports
- Check that the **Match Strategy** matches the format of the external keys (use **Normalized** if keys have minor formatting variations)

### All Records Are Being Skipped

If **Duplicate Action = Skip** and all records have cross-references from a prior import, every row will be skipped on subsequent runs. This is correct behavior when the source data has not changed. If you need to force re-processing, delete the relevant cross-references or temporarily change **Duplicate Action** to **Update**.

### Cross References Are Not Being Created

Confirm **Auto Create Cross Reference** is enabled and that the import is completing successfully (errors on insert prevent cross-reference creation).

## See Also

- [How to Use Identity Registry](how-to-identity-registry.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [Cross References Page](page-cross-references.md)
- [How to Handle Errors](how-to-error-handling.md)

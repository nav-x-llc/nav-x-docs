# How to Set Up Validation Rules

This guide explains how to configure validation rules for your integrations to enforce data quality requirements before records are written to Business Central. Validation rules can block bad data (errors) or flag it for review (warnings) without stopping the import.

## What Are Validation Rules?

Validation rules are conditions evaluated against each row of incoming data during the import pipeline, or against outgoing data during export. When a rule fails:

- **Error** severity — the row is rejected and logged as an import error. The record is not written to BC.
- **Warning** severity — the row is flagged in the import log but still processed. The record is written to BC.

Rules are configured per integration field, allowing precise per-column quality controls alongside your standard field mappings.

## Prerequisites

- You have an integration with field mappings configured
- You have the **NAVX IF ALL** permission set

## Opening Validation Rules

1. Open the **Integrations** page and select an integration
2. Open the **Integration Fields** page (choose **Fields** from the action bar)
3. Select the field you want to add validation to
4. Choose **Validation Rules** from the action bar

The **Validation Rules** page opens filtered to that field. You can also open it directly from the field row via the **Has Validation Rules** indicator (a checkmark appears on fields that already have rules configured).

## Creating a Validation Rule

On the **Validation Rules** page, choose **New** and configure the following:

| Field | Description |
| --- | --- |
| **Rule Type** | The type of validation to apply (see [Rule Types](#validation-rule-types) below) |
| **Severity** | **Error** (blocks the row) or **Warning** (flags but allows the row) |
| **Direction** | **Both**, **Import Only**, or **Export Only** — controls when the rule is evaluated |
| **Enabled** | Turn off to temporarily disable a rule without deleting it |
| **Error Message** | Custom message shown in the import log when this rule fails. If empty, a default message is generated |

Additional fields appear based on the selected **Rule Type**.

## Validation Rule Types

### Required

Rejects the row if the field value is empty (blank text, zero for numeric, or unassigned for option fields).

No additional configuration fields.

**Example use:** Ensure Customer No. is always populated before creating a sales order.

---

### Min Length

Rejects the row if the text value is shorter than the specified minimum number of characters.

| Field | Description |
| --- | --- |
| **Min Length** | The minimum number of characters required |

**Example use:** Ensure item descriptions are at least 3 characters long.

---

### Max Length

Rejects the row if the text value is longer than the specified maximum number of characters.

| Field | Description |
| --- | --- |
| **Max Length** | The maximum number of characters allowed |

**Example use:** Prevent values that would exceed a BC field length limit before the write attempt fails.

---

### Numeric Range

Rejects the row if a numeric value falls outside a defined range.

| Field | Description |
| --- | --- |
| **Min Value** | The minimum acceptable value (inclusive). Leave empty for no lower bound |
| **Max Value** | The maximum acceptable value (inclusive). Leave empty for no upper bound |

**Example use:** Ensure quantities are between 1 and 10,000.

---

### Date Range

Rejects the row if a date value falls outside a defined range.

| Field | Description |
| --- | --- |
| **Min Date** | The earliest acceptable date (inclusive). Leave empty for no lower bound |
| **Max Date** | The latest acceptable date (inclusive). Leave empty for no upper bound |

**Example use:** Reject orders with a document date more than 30 days in the past.

---

### Regex Pattern

Rejects the row if the field value does not match a regular expression pattern.

| Field | Description |
| --- | --- |
| **Regex Pattern** | A .NET-compatible regular expression. The entire value must match |

**Example use:** Validate that a phone number matches `^\+?[0-9\s\-\(\)]{7,20}$`, or that an email contains `@`.

---

### Allowed Values

Rejects the row if the field value is not in a defined list of acceptable values.

| Field | Description |
| --- | --- |
| **Allowed Values** | Semicolon-separated list of allowed values (e.g., `OPEN;RELEASED;SHIPPED`) |

**Example use:** Ensure a status field only contains known values before mapping to a BC option field.

---

### Not Allowed Values

Rejects the row if the field value is in a defined list of prohibited values.

| Field | Description |
| --- | --- |
| **Not Allowed Values** | Semicolon-separated list of prohibited values |

**Example use:** Block records where a country code is a sanctioned territory.

---

### Lookup

Rejects the row if the field value does not exist in a specified BC table.

| Field | Description |
| --- | --- |
| **Lookup Table No.** | The BC table ID to look up in |
| **Lookup Field No.** | The field in the lookup table to match against |
| **Lookup Filter** | Optional filter expression to restrict the lookup (e.g., `Blocked=false`) |

**Example use:** Verify that an incoming Customer No. exists in the BC Customer table before attempting to post a document.

---

### Cross Field

Rejects the row if the value of this field does not satisfy a condition relative to another field in the same row.

| Field | Description |
| --- | --- |
| **Compare Field Name** | The source field name of the other field to compare against |
| **Comparison Operator** | `=`, `<>`, `<`, `<=`, `>`, `>=` |

**Example use:** Ensure that Ship Date is not earlier than Order Date in the same row.

---

### Custom Expression

Evaluates a custom AL expression. Use this for complex validations not covered by the built-in types.

| Field | Description |
| --- | --- |
| **Validation Codeunit ID** | The ID of an AL codeunit that implements the `IFValidationRule` interface |

The codeunit receives the field value and the full row context, and returns a pass/fail result with an optional message.

**Example use:** Validate a checksum digit on a barcode, or call an external API to verify a VAT registration number.

---

## Direction Awareness

The **Direction** field on each rule controls when it is evaluated:

| Direction | Evaluated on Import | Evaluated on Export |
| --- | --- | --- |
| **Both** | Yes | Yes |
| **Import Only** | Yes | No |
| **Export Only** | No | Yes |

For most data quality rules (Required, Regex, Lookup), use **Both** or **Import Only**. For export-specific rules (e.g., ensuring a field is populated before sending to an external API), use **Export Only**.

## Viewing Validation Results

When a validation rule fails during import:

- **Error** rows appear in the Import Log with the error message from the rule
- **Warning** rows appear in the Import Log with a warning marker and the message, but the record is still imported

Open the **Import Log Card** for any import run to review validation results per row. Use [Dry Run](how-to-dry-run.md) to preview validation outcomes before committing an import.

## Best Practices

- Start with **Warning** severity for new rules and observe results in the import log before switching to **Error**
- Use **Required** rules on all fields that are part of a BC primary key or unique key
- Use **Lookup** rules on foreign key fields (Customer No., Item No., Location Code) to catch referential integrity errors before the BC write
- Use **Regex Pattern** for formatted fields (phone, email, postal code) rather than custom codeunits — it is faster and requires no AL code
- Combine **Min Length** + **Max Length** + **Regex Pattern** for fields with strict format requirements

## See Also

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Use Dry Run](how-to-dry-run.md)
- [How to Handle Errors](how-to-error-handling.md)
- [Validation Rules Page](page-validation-rules.md)

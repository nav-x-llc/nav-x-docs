# Page Validation Rules

The **Validation Rules** page lists all validation rules configured for a specific integration field. Each rule defines a data quality condition that is evaluated during import or export. Rules with **Error** severity block rows that fail; rules with **Warning** severity flag rows but still allow them through.

**To open:** From the [Integration Fields](page-integration-fields.md) page, select a field and choose **Validation Rules** from the action bar. Or click the **Has Validation Rules** indicator on the field row.

## Overview

See [How to Set Up Validation Rules](how-to-validation-rules.md) for a full configuration walkthrough and descriptions of all 11 rule types.

## Key Fields

| Field | Description |
| --- | --- |
| **Rule Type** | The type of validation: Required, Min Length, Max Length, Numeric Range, Date Range, Regex Pattern, Allowed Values, Not Allowed Values, Lookup, Cross Field, or Custom Expression |
| **Severity** | **Error** — row is rejected. **Warning** — row is flagged but still processed |
| **Direction** | **Both**, **Import Only**, or **Export Only** — when the rule is evaluated in the pipeline |
| **Enabled** | Whether the rule is active. Disabled rules are skipped during processing |
| **Error Message** | Custom message shown in the import log when the rule fails. If empty, a system default is used |

Additional fields appear based on **Rule Type**:

| Rule Type | Additional Fields |
| --- | --- |
| Min Length | **Min Length** |
| Max Length | **Max Length** |
| Numeric Range | **Min Value**, **Max Value** |
| Date Range | **Min Date**, **Max Date** |
| Regex Pattern | **Regex Pattern** |
| Allowed Values | **Allowed Values** (semicolon-separated) |
| Not Allowed Values | **Not Allowed Values** (semicolon-separated) |
| Lookup | **Lookup Table No.**, **Lookup Field No.**, **Lookup Filter** |
| Cross Field | **Compare Field Name**, **Comparison Operator** |
| Custom Expression | **Validation Codeunit ID** |

## Has Validation Rules Indicator

The [Integration Fields](page-integration-fields.md) page shows a **Has Validation Rules** FlowField (checkmark) on each field row. This gives a quick visual indication of which fields have rules configured without opening the Validation Rules page.

## Actions

### New

Creates a new validation rule for the current field.

### Delete

Deletes the selected validation rule. A confirmation prompt is displayed.

## See Also

- [How to Set Up Validation Rules](how-to-validation-rules.md)
- [Integration Fields](page-integration-fields.md)
- [How to Use Dry Run](how-to-dry-run.md)

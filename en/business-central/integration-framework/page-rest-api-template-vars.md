# Page REST API Template Variables

The **REST API Template Variables** page defines variables that are resolved at runtime and substituted into `{{variableName}}` placeholders in the resource path or request body. This is a sub-page embedded within the [REST API Endpoint Card](page-rest-api-endpoint-card.md).

**To open:** Open a [REST API Endpoint Card](page-rest-api-endpoint-card.md). The template variables list appears in the **Template Variables** section, which is visible when the HTTP method is POST, PUT, or PATCH, or when the resource path contains `{{` placeholders.

## Overview

Template variables allow you to build dynamic API requests. For example, you can include the current date in a URL filter, read a field value from a Business Central record, or reference the last synchronization timestamp.

Each variable has a **Variable Type** that determines how its value is resolved:

- **Static** -- A fixed text value you enter directly
- **Date** -- The current date, formatted using the specified date format string
- **DateTime** -- The current date/time, formatted using the specified date format string
- **LastSyncDate** -- The date of the last scheduled import run, formatted using the specified date format string
- **LastSyncDateTime** -- The date/time of the last scheduled import run, formatted using the specified date format string
- **RecordField** -- A value read from a specific Business Central table and field, optionally filtered

## Key Fields

| Field | Description |
| ------- | ----------- |
| **Variable Name** | The variable name used in `{{variableName}}` placeholders. |
| **Variable Type** | How the variable is resolved at runtime: Static, Date, DateTime, LastSyncDate, LastSyncDateTime, or RecordField. |
| **Static Value** | The static value to substitute. Editable only when Variable Type is Static. |
| **Date Format** | The date format string (e.g., `yyyy-MM-dd`, `yyyy-MM-ddTHH:mm:ss`). Editable when Variable Type is Date, DateTime, LastSyncDate, or LastSyncDateTime. |
| **Source Table No.** | The Business Central table to read the field value from. Editable only when Variable Type is RecordField. |
| **Source Table Name** | The name of the selected source table. Read-only. |
| **Source Field No.** | The field number within the source table whose value will be used. Editable only when Variable Type is RecordField. |
| **Filter Expression** | The filter to identify the record to read. Use the assist-edit button to open a filter page for visual filter building. Read-only in the field; use assist-edit to modify. |

## Examples

### Static Variable in URL

```text
Resource Path: /orders?status={{orderStatus}}
Variable Name: orderStatus
Variable Type: Static
Static Value: open
```

Result: `/orders?status=open`

### Date Variable for Incremental Sync

```text
Resource Path: /customers?modified_since={{lastSync}}
Variable Name: lastSync
Variable Type: LastSyncDateTime
Date Format: yyyy-MM-ddTHH:mm:ss
```

Result: `/customers?modified_since=2026-03-10T14:30:00`

### Record Field Variable

```text
Variable Name: warehouseCode
Variable Type: RecordField
Source Table No.: 14 (Location)
Source Field No.: 1 (Code)
Filter Expression: WHERE(Use As In-Transit=CONST(No))
```

## See Also

- [REST API Endpoint Card](page-rest-api-endpoint-card.md)
- [REST API Connection Card](page-rest-api-connection-card.md)
- [Integrations Page](page-integrations.md)

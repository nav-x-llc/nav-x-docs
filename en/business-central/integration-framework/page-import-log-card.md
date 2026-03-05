# Page NAV-X Import Log Card

The **Import Log Card** page displays detailed information for a single import log entry, including import statistics, JSON-specific metrics, processing results, and performance data.

**To open:** From the [Import Logs page](page-import-logs.md), click on an entry to open its card view.

## Overview

The Import Log Card provides a comprehensive view of a single import run organized into sections:

- **General** - Basic identification and status
- **Import Statistics** - Source file metrics
- **JSON Statistics** - JSON-specific metrics (visible only for JSON imports)
- **Processing Statistics** - Record creation results
- **Performance** - Timing information
- **Details** - Per-field, per-row detail records

This page is read-only. No modifications can be made to import log entries.

## Key Fields

### General

| Field | Purpose |
| ------- | --------- |
| **Entry No.** | Unique identifier for this import log entry |
| **Integration Name** | Name of the integration that was executed |
| **Integration Type** | File type (Excel, CSV, Text, or JSON) |
| **Direction** | Direction of the integration (Import or Export) |
| **Status** | Current status with color-coded styling (see below) |
| **Execution Mode** | Whether the import was run manually or scheduled |
| **User ID** | User who started the import |
| **File Name** | Name of the imported file |
| **Error Message** | Error details if the import failed (multi-line) |

### Status Values

| Status | Color | Meaning |
| ------- | ------- | --------- |
| **In Progress** | Ambiguous (yellow) | Import is currently running |
| **Completed** | Favorable (green) | All rows processed successfully |
| **Completed with Errors** | Attention (orange) | Some rows had errors during processing |
| **Failed** | Unfavorable (red) | Import failed entirely |

### Import Statistics

| Field | Purpose |
| ------- | --------- |
| **Source Row Count** | Number of rows in the source file |
| **Source Column Count** | Number of columns detected in the source file |
| **Records Created** | Number of integration records created during import |

### JSON Statistics

These fields are only visible when the import used a JSON integration type.

| Field | Purpose |
| ------- | --------- |
| **JSON Root Array Count** | Number of elements in the JSON root array |
| **JSON Pre-Flatten Row Count** | Number of rows before array flattening was applied |
| **JSON Paths Resolved** | Number of JSON field paths that resolved successfully |
| **JSON Paths Failed** | Number of JSON field paths that did not resolve in any element |
| **JSON Arrays Flattened** | Number of parent elements whose child arrays were flattened into separate rows |

### Processing Statistics

| Field | Purpose |
| ------- | --------- |
| **Rows Processed** | Total number of rows processed |
| **Rows Completed** | Number of rows processed successfully |
| **Rows with Errors** | Number of rows that had errors during processing |
| **BC Records Inserted** | Number of new Business Central records created |
| **BC Records Updated** | Number of existing Business Central records updated |

### Performance

| Field | Purpose |
| ------- | --------- |
| **Started Date/Time** | When the import started |
| **Completed Date/Time** | When the import completed |
| **Duration (ms)** | Total duration of the import in milliseconds |

## Details Subpage

The bottom of the card displays the **Import Log Details** subpage, which shows per-field, per-row detail records for the import. Each detail record includes:

- Import Log Entry No. (linked to the parent log)
- Row number and field information
- Post-pre-parsing value
- Column type
- Processing status
- Error type and error message (if applicable)

## See Also

- [Import Logs page](page-import-logs.md) - List of all import logs
- [How to Use Import Logging](how-to-import-logging.md) - Setup and usage guide
- [Integrations Page](page-integrations.md) - Integration configuration

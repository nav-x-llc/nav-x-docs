# Import Logs Page

**Page Name:** NAV-X Import Logs
**Purpose:** Tracks and displays the history of all integration import executions with status, timing, and error information
**Version:** NAV-X Integration Framework v1.3.0+
**Application Area:** NAV-X Integration Framework

## Overview

The **Import Logs** page provides a complete history of all integration import executions. Each entry records the integration used, execution status, timing information, row and record counts, and any error messages. Use this page to monitor import health, investigate failures, and audit import activity.

## When You Use This Page

- **After running an import** to verify execution results
- **To monitor scheduled imports** and confirm they completed successfully
- **To investigate failures** by reviewing error messages and row counts
- **To audit import history** across all integrations
- **To export or import log data** for archival or cross-environment analysis

## Accessing the Page

1. Open the **Integrations** page
2. Select an integration
3. Click the **Import Logs** action

The page opens filtered to the selected integration. Remove the filter to view logs across all integrations.

## Key Fields

### Identification Fields

| Field | Purpose |
| ------- | --------- |
| **Entry No.** | Unique identifier for this log entry (auto-numbered) |
| **Integration Name** | Name of the integration that was executed |

### Status and Execution Fields

| Field | Purpose | Values |
| ------- | --------- | -------- |
| **Status** | Current status of the import execution (color-coded) | **In Progress** = Currently executing, **Completed** = Finished successfully, **Completed with Errors** = Finished but some rows failed, **Failed** = Execution failed entirely |
| **Execution Mode** | How the import was initiated | **Manual** = User-initiated import, **Scheduled** = Triggered by Job Queue |
| **User ID** | The user who initiated the import | User ID (read-only) |

### Timing Fields

| Field | Purpose |
| ------- | --------- |
| **Started Date/Time** | Date and time when the import execution began |
| **Duration (ms)** | Total execution time in milliseconds |

### Row and Record Count Fields

| Field | Purpose |
| ------- | --------- |
| **Source Row Count** | Total number of rows found in the source file |
| **Records Created** | Number of Business Central records successfully created |
| **Rows Completed** | Number of source rows processed successfully |
| **Rows with Errors** | Number of source rows that encountered errors during processing |

### Additional Fields

| Field | Purpose | Visibility |
| ------- | --------- | ------------ |
| **File Name** | Name of the source file that was imported | Visible |
| **Integration Type** | Type of the integration (e.g., Excel, CSV, Text, JSON) | Hidden by default |
| **Sorting Order** | Internal sorting identifier | Hidden by default |
| **Error Message** | Error details if the import failed | Hidden by default |

> **Tip:** To view hidden fields, use the **Personalize** action on the page to add them to the visible columns.

## Status Color Coding

The **Status** field uses style expressions to provide visual indicators:

| Status | Style | Appearance |
| ------- | ------- | ------------ |
| **In Progress** | Ambiguous | Neutral/yellow styling indicating the import is still running |
| **Completed** | Favorable | Green styling indicating successful completion |
| **Completed with Errors** | Attention | Orange/red styling indicating partial success with some row failures |
| **Failed** | Unfavorable | Red styling indicating the import failed entirely |

## Actions

### Details

**What it does:** Opens a detailed view showing field-level information for the selected import log entry.

**When to use:**

- To inspect individual field values from the import
- To investigate which specific fields caused errors
- To review the data that was processed

### Export Logs

**What it does:** Exports the import log data to an XML file.

**When to use:**

- To create a backup of import log history
- To transfer log data to another environment for analysis
- To archive log entries before cleanup

### Import Logs

**What it does:** Imports log data from a previously exported XML file.

**When to use:**

- To restore log data from a backup
- To consolidate log data from multiple environments
- To load historical log data into a new environment

## Filtering and Analysis

### Common Filters

**View all failed imports:**

```text
Status = Failed
```

**View imports with errors:**

```text
Status = Completed with Errors
```

**View imports for a specific integration:**

```text
Integration Name = [your integration name]
```

**View imports from a specific date:**

```text
Started Date/Time = [date filter]
```

**View scheduled imports only:**

```text
Execution Mode = Scheduled
```

### Analyzing Import Performance

Use the **Duration (ms)** field to identify slow imports:

1. Sort by Duration (ms) descending
2. Compare Source Row Count to Duration to identify performance outliers
3. Imports with high duration relative to row count may indicate lookup performance issues

### Identifying Data Quality Issues

Use the row count fields to spot patterns:

```text
Source Row Count:  1000
Records Created:   950
Rows Completed:    950
Rows with Errors:   50

Analysis: 5% error rate - review error rows for common issues
```

## Examples and Scenarios

### Scenario 1: Reviewing a Successful Scheduled Import

```text
Entry No.: 1042
Integration Name: Daily Customer Update
Status: Completed (green)
Execution Mode: Scheduled
Started Date/Time: 2026-03-05 02:00:15
Duration (ms): 12450
Source Row Count: 200
Records Created: 200
Rows Completed: 200
Rows with Errors: 0

Result: All 200 rows processed successfully in 12.4 seconds
```

### Scenario 2: Investigating a Partially Failed Import

```text
Entry No.: 1043
Integration Name: Vendor Catalog Import
Status: Completed with Errors (orange)
Execution Mode: Manual
User ID: ADMIN
Started Date/Time: 2026-03-05 10:30:00
Duration (ms): 45200
Source Row Count: 500
Records Created: 480
Rows Completed: 480
Rows with Errors: 20

Next Step: Click Details to identify which rows failed and why
```

### Scenario 3: Reviewing a Failed Import

```text
Entry No.: 1044
Integration Name: Sales Order Import
Status: Failed (red)
Execution Mode: Manual
User ID: SALES01
Started Date/Time: 2026-03-05 14:15:00
Duration (ms): 350
Source Row Count: 0
Records Created: 0
Rows Completed: 0
Rows with Errors: 0
Error Message: "Source file format not recognized"

Analysis: File parsing failed before any rows could be processed
```

## Troubleshooting

### Question: Log shows "Completed with Errors" but I expected all rows to succeed?

**Steps:**

1. Click **Details** to view field-level information
2. Review the error messages on failed rows
3. Common causes: missing required values, lookup failures, data type mismatches
4. Fix source data and re-import the affected rows

### Question: Duration seems unusually long?

**Possible causes:**

- Large number of lookup fields requiring table searches
- Complex validation rules
- High server load during import
- Large source file with many columns

**Solution:**

1. Compare duration against previous imports of similar size
2. Review integration configuration for unnecessary lookups
3. Consider running large imports during off-peak hours

### Question: Source Row Count is zero but I selected a file?

**Possible causes:**

- File format does not match integration type (e.g., CSV file on Excel integration)
- File is empty or contains only headers
- File encoding not supported

**Solution:**

1. Verify file type matches the integration configuration
2. Open the source file and confirm it contains data rows
3. Check the Error Message field (may need to unhide it) for details

## See Also

- [How to Set Up Import Logging](how-to-import-logging.md)
- [How to Handle Errors](how-to-error-handling.md)
- [How to Use Background Processing](how-to-background-processing.md)
- [Integration Records Page](page-integration-records.md)

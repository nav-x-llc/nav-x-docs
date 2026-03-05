# How to Use Import Logging

This guide explains how to use Import Logging in the Integration Framework to track, audit, and troubleshoot data imports with detailed two-level structured logging.

## What is Import Logging

Import Logging is a two-level structured logging system that records every aspect of an import run. It captures information at two levels:

- **Summary Level (Import Log):** High-level statistics for each import run, including row counts, record counts, timing, and overall status.
- **Detail Level (Import Log Details):** Field-level detail for each row processed, including pre- and post-parsing values, column types, processing status, and any error information.

Together, these two levels provide a complete audit trail from the source file through to the final Business Central records.

## When to Use Import Logging

Import Logging is valuable in several scenarios:

| Scenario | How Logging Helps |
| --- | --- |
| **Debugging** | Pinpoint exactly which row and field caused a failure, with the raw and parsed values side by side |
| **Auditing** | Maintain a complete record of what data entered the system, when, and by whom |
| **Compliance** | Demonstrate data lineage from source file to Business Central record |
| **Performance Monitoring** | Track import duration, row throughput, and identify slow integrations |

## Enabling Import Logging

Import Logging is controlled by two toggles that work together.

### Global Toggle

1. Open the **Integration Framework Setup** page
2. Enable the **Enable Import Logging** toggle
3. This activates the logging infrastructure for all integrations

### Per-Integration Toggle

1. Open the **Integrations** page
2. Select the integration you want to log
3. Enable the **Enable Detailed Logging** toggle
4. This activates detailed field-level logging for that specific integration

**Important:** Both toggles must be enabled for detailed logging to work. The global toggle enables the logging system, and the per-integration toggle controls which integrations produce detailed log entries. If only the global toggle is on, summary-level logs are created but detail records are not.

## Import Log Summary

Each import run produces a summary record capturing the following information:

### General Information

- **Integration Name** - Which integration was executed
- **Type** - The integration type
- **Direction** - Import direction
- **Execution Mode** - How the import was triggered (manual, scheduled, etc.)
- **User** - The user who initiated or owns the run
- **File Name** - The source file processed

### Import Statistics

- **Source Row Count** - Total rows found in the source file
- **Source Column Count** - Total columns found in the source file
- **Records Created** - Number of Business Central records created

### Processing Statistics

- **Rows Processed** - Total rows attempted
- **Rows Completed** - Rows that finished without errors
- **Rows with Errors** - Rows that encountered errors during processing
- **BC Records Inserted** - New records created in Business Central
- **BC Records Updated** - Existing records updated in Business Central

### Performance

- **Start Timestamp** - When the import run began
- **End Timestamp** - When the import run finished
- **Duration** - Total elapsed time for the import

### Status

Each import log has a status value:

| Status | Meaning |
| --- | --- |
| **In Progress** | Import is currently running |
| **Completed** | All rows processed successfully |
| **Completed with Errors** | Import finished but some rows had errors |
| **Failed** | Import could not complete due to a critical error |

## Import Log Details

When detailed logging is enabled, each row in the import produces detail records at the field level. Each detail record includes:

- **Post-Pre-Parsing Value** - The value before and after parsing transformations
- **Column Type** - The type of column from the source data
- **Processing Status** - Whether this field was processed successfully
- **Error Type** - The category of error, if one occurred
- **Error Message** - The specific error description, if one occurred

These detail records allow you to trace exactly how each source value was interpreted and where processing broke down.

## Viewing Import Logs

### Import Logs Page

1. Open the **Integrations** page
2. Select the integration you want to review
3. Click the **Import Logs** action
4. The **Import Logs** page opens, showing all logged runs for that integration

The list uses color-coded status indicators to help you quickly identify runs that need attention:

- Completed runs display normally
- Runs with errors are highlighted for review
- Failed runs are clearly marked

### Import Log Card

To view detailed information for a single run:

1. From the **Import Logs** page, select a log entry
2. Open the **Import Log Card**
3. The card organizes information into groups:
   - **General** - Integration name, type, direction, user, file name
   - **Import Statistics** - Source row/column counts, records created
   - **Processing Statistics** - Rows processed, completed, with errors, BC records inserted/updated
   - **Performance** - Start/end timestamps and duration

### JSON Statistics

For JSON-based imports, the Import Log Card includes an additional **JSON Statistics** section with metrics specific to JSON processing:

- **Root Array Count** - Number of elements in the root JSON array
- **Pre-Flatten Row Count** - Row count before array flattening
- **Paths Resolved** - Number of JSON paths successfully resolved
- **Paths Failed** - Number of JSON paths that could not be resolved
- **Arrays Flattened** - Number of nested arrays that were flattened during processing

## Exporting and Importing Logs

Import logs can be exported to XML format and re-imported into another environment:

### Exporting Logs

1. Open the **Import Logs** page
2. Select the log entries to export
3. Use the **Export** action
4. Logs are saved as an XML file

### Importing Logs

1. Open the **Import Logs** page
2. Use the **Import** action
3. Select the XML file to import
4. Log records are created in the current environment

This is useful for:

- **Archival** - Storing historical logs outside Business Central
- **Cross-Environment Analysis** - Moving logs from production to a test environment for investigation
- **Backup** - Preserving logs before a system change

## Log Retention Policy

Import logs follow these retention rules:

| Status | Retention Period |
| --- | --- |
| **Completed** | 3 months from completion |
| **Failed** | 3 months from failure |
| **Completed with Errors** | 3 months from completion |
| **In Progress** | Never deleted automatically |

Logs with **In Progress** status are never automatically deleted because they may indicate a run that was interrupted and needs investigation. Completed and failed logs are retained for three months by default to balance storage with audit needs.

## Troubleshooting with Logs

Import logs are your primary diagnostic tool when imports do not behave as expected.

### Step 1: Check the Summary

1. Open the **Import Logs** page for the integration
2. Find the run in question
3. Review the status - is it **Completed with Errors** or **Failed**?
4. Check **Rows with Errors** to understand the scope of the problem

### Step 2: Review the Details

1. Open the **Import Log Card** for the run
2. Navigate to the detail records
3. Filter for rows with errors
4. Examine the **Error Type** and **Error Message** for each failed field

### Step 3: Compare Values

1. Look at the **Post-Pre-Parsing Value** for error rows
2. Compare the source value against what was expected
3. Determine if the issue is in the source data, the field mapping, or a missing reference record

### Step 4: Check Performance

1. Review **Duration** on the Import Log Card
2. Compare against previous runs for the same integration
3. A significant increase in duration may indicate data volume issues or system resource constraints

### Common Diagnostic Patterns

| Symptom | What to Check in Logs |
| --- | --- |
| All rows fail | Check first few detail records for a systemic issue (wrong delimiter, encoding) |
| Random rows fail | Filter details by error type to find common causes (missing lookups, data quality) |
| Import runs but no records created | Check source row count vs. records created - parsing may have found zero valid rows |
| Import is slow | Compare duration and row counts across runs to identify trends |

## Best Practices

1. **Enable logging during initial setup** - Turn on both toggles when building a new integration so you can diagnose issues immediately
2. **Disable detailed logging in steady state** - Once an integration is running reliably, consider disabling the per-integration toggle to reduce storage usage
3. **Re-enable for troubleshooting** - Turn detailed logging back on when investigating a problem, then disable when resolved
4. **Export logs before cleanup** - If you need to retain logs beyond the 3-month retention period, export them to XML before they are automatically removed
5. **Review logs after changes** - After modifying field mappings, validations, or source file formats, check the next import log to confirm everything works as expected
6. **Use JSON statistics for JSON imports** - The JSON-specific metrics help diagnose flattening and path resolution issues that are unique to JSON sources
7. **Monitor duration trends** - Regularly check import duration to catch performance degradation early
8. **Check logs proactively** - Do not wait for error notifications; periodically review import logs to catch data quality issues before they accumulate

## See Also

- [Import Logs](page-import-logs.md)
- [Import Log Card](page-import-log-card.md)
- [How to Handle Errors](how-to-error-handling.md)

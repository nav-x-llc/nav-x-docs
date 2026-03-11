# How to Manage Data Administration

This guide explains how to use the Data Administration features in the Integration Framework to manage data growth, configure retention policies, and clean up integration records.

## Overview

As integrations run over time, the volume of integration records, import logs, and webhook queue entries grows. The Integration Framework provides three mechanisms to keep data under control:

- **Retention Policies** - Automatic, scheduled cleanup using the standard Business Central retention policy framework
- **Delete Completed Integration Records** - A report for batch deletion of completed records
- **Delete All Integration Records** - A report for targeted deletion of records by criteria

These tools are accessible from the standard **Data Administration** page in Business Central under the **NAV-X Integrations** group.

## Retention Policies

The Integration Framework automatically registers its tables with the Business Central retention policy framework when the extension is installed. No manual setup is required for the default configuration.

### Tables Registered for Retention

The following tables are registered with the retention policy framework:

| Table | Date Field | Description |
| --- | --- | --- |
| **Integration Record** | Change Date/Time | Records created during import processing |
| **Import Log** | Started Date/Time | Summary logs for each import run |
| **Webhook Queue** | Received Date/Time | Incoming webhook entries |

### Default Retention Periods

#### Integration Records

| Status | Retention Period |
| --- | --- |
| **New** | Never Delete |
| **Ready** | Never Delete |
| **Missing Mapping** | Never Delete |
| **Completed** | 1 Month |

Records with a status of **New**, **Ready**, or **Missing Mapping** are never automatically deleted because they may require attention or reprocessing. Completed records are retained for one month by default.

#### Import Logs

| Status | Retention Period |
| --- | --- |
| **In Progress** | Never Delete |
| **Completed** | 3 Months |
| **Completed with Errors** | 3 Months |
| **Failed** | 3 Months |

Logs with **In Progress** status are never automatically deleted because they may indicate an import run that was interrupted and needs investigation. Completed, failed, and error logs are retained for three months to balance storage with audit needs.

#### Webhook Queue

| Status | Retention Period |
| --- | --- |
| **Pending** | Never Delete |
| **Processing** | Never Delete |
| **Completed** | 1 Month |
| **Error** | 3 Months |

Pending and processing entries are preserved to prevent data loss. Completed entries are cleaned up after one month, while error entries are retained longer for troubleshooting.

### How Retention Policies Are Applied

1. The Integration Framework registers its tables with the Business Central **Retention Policy Allowed Tables** during installation
2. A **Retention Policy Setup** record is created for each table with the default retention period
3. The retention policy is automatically enabled when the extension is first installed
4. Business Central's built-in retention policy job queue processes the policies on schedule

### Configuring Retention Policies

To view or modify the retention policy configuration:

1. Open the **Retention Policies** page in Business Central (search for "Retention Policies")
2. Locate the entries for **Integration Record**, **Import Log**, or **Webhook Queue**
3. Select the entry you want to modify
4. Adjust the **Retention Period** to change how long records are kept
5. Use the **Enabled** toggle to enable or disable automatic cleanup for a specific table

**Important:** Changing the retention period affects all records that match the filter criteria. Shortening the retention period may cause records to be deleted on the next policy run.

## Delete Completed Integration Records

The **Delete Completed Integration Records** report provides a way to perform a one-time batch cleanup of integration records that have a status of **Completed**.

### Running the Report

1. Open the **Data Administration** page (search for "Data Administration")
2. In the **Data Cleanup** section, find the **NAV-X Integrations** group
3. Click **Delete Completed Integration Records**
4. On the request page, set filters on the **Change Date/Time** field to limit which records are deleted
5. Click **OK** to run the report

The report processes all completed integration records matching your filter criteria and deletes them. When finished, a confirmation message displays the number of records deleted.

### When to Use This Report

- When you need to clean up completed records immediately rather than waiting for the retention policy
- When you want to delete completed records older than a specific date
- As part of a periodic manual maintenance routine

## Delete All Integration Records

The **Delete All Integration Records** report provides more flexible cleanup options, allowing you to delete records based on both date and status criteria.

### Running the Report

1. Open the **Data Administration** page (search for "Data Administration")
2. In the **Data Cleanup** section, find the **NAV-X Integrations** group
3. Click **Delete All Integration Records**
4. On the request page, set filters:
   - **Change Date/Time** - Filter by when records were last modified
   - **Status** - Filter by record status (New, Ready, Missing Mapping, Completed)
5. Click **OK** to run the report

The report processes all integration records matching your filter criteria and deletes them. When finished, a confirmation message displays the number of records deleted.

### When to Use This Report

- When you need to delete records regardless of status
- When you want to clean up records for a specific status that is not covered by the retention policy
- When performing a major data cleanup before or after a system change

**Warning:** This report can delete records in any status, including **New** and **Ready**. Use the status filter carefully to avoid deleting records that are still needed for processing.

## Data Administration Page Extension

The Integration Framework adds a **NAV-X Integrations** group to the standard Business Central **Data Administration** page. This group appears in the **Data Cleanup** section and provides quick access to the two cleanup reports:

| Action | Description |
| --- | --- |
| **Delete Completed Integration Records** | Runs the report to delete integration records with Completed status |
| **Delete All Integration Records** | Runs the report to delete integration records filtered by date and status |

This integration with the standard Data Administration page means administrators can manage Integration Framework data alongside other Business Central data cleanup tasks without navigating to a separate area.

## Best Practices for Managing Data Growth

1. **Rely on retention policies for routine cleanup** - The default retention policies are configured to balance data availability with storage efficiency. Let them handle day-to-day cleanup automatically.
2. **Monitor table sizes periodically** - Check the Data Administration page to understand how much data the integration tables are consuming. If growth is faster than expected, consider shortening retention periods.
3. **Use reports for one-time cleanup** - If you need to reclaim space immediately after a large import or migration, use the Delete Completed Integration Records report rather than adjusting retention policies.
4. **Do not delete in-progress records** - Records with status New, Ready, Missing Mapping, or In Progress may be actively needed. The default retention policies protect these records for a reason.
5. **Export import logs before cleanup** - If you need to retain import log data beyond the retention period for audit or compliance purposes, export the logs to XML before they are automatically removed.
6. **Coordinate cleanup with import schedules** - Run manual cleanup reports during off-peak hours to minimize impact on active import processing.
7. **Review retention policies after go-live** - The default retention periods work well for most environments. After running in production for a few weeks, review whether the defaults match your data volume and audit requirements.
8. **Keep error records longer** - The default 3-month retention for failed import logs and error webhook entries provides time for investigation. Avoid shortening these periods unless storage is a concern.

## See Also

- [Integration Records](page-integration-records.md)
- [Import Logs](page-import-logs.md)
- [Import Log Card](page-import-log-card.md)
- [How to Use Import Logging](how-to-import-logging.md)
- [How to Handle Errors](how-to-error-handling.md)

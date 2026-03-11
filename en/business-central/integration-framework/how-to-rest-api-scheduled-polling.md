# How to Set Up REST API Scheduled Polling

This guide walks you through configuring scheduled automatic polling for REST API endpoints so that data is imported into Business Central on a recurring basis without manual intervention.

## Prerequisites

- **Permission** - You have NAVX IF STANDARD or NAVX IF ALL permission set
- **REST API Integration** - You have a working REST API integration that imports data successfully when run manually (see [How to Create a REST API Import Integration](how-to-rest-api-import.md))
- **Job Queue Access** - You have permission to create and manage Job Queue Entries in Business Central

## What is Scheduled Polling

Scheduled polling automates the REST API import process by creating a recurring Job Queue Entry that runs at a configured interval. Each time the job runs, Business Central calls the REST API, retrieves the latest data, and processes the import, keeping your data synchronized without manual action.

## When to Use Scheduled Polling

Scheduled polling is the right choice when:

- **Regular Sync** - You need to keep Business Central data in sync with an external system on a fixed schedule
- **Unattended Operation** - Imports should run automatically in the background
- **Near Real-Time Updates** - You need frequent data updates (as often as every minute)
- **Batch Processing** - You prefer to pull data at scheduled intervals rather than receiving push notifications

## Step-by-Step Process

### Step 1: Verify Manual Import Works

Before enabling scheduled polling, confirm the integration works correctly by running it manually:

1. Navigate to **Integration Framework** > **Integrations**
2. Select the REST API integration
3. Click **Import**
4. Verify records are imported and processed without errors

### Step 2: Configure Schedule Settings

1. Open the Integration and navigate to the **REST API Endpoint** page
2. In the **Scheduled Import** section, configure the following fields:

| Field | Description | Default |
| --- | --- | --- |
| **Recurrence (Minutes)** | The interval between scheduled runs, in minutes. Range: 1-1440 (1 minute to 24 hours) | 60 |
| **Earliest Start Date/Time** | The date and time for the first scheduled run. If blank, the schedule starts immediately when enabled | (blank) |

### Step 3: Enable the Schedule

1. On the REST API Endpoint page, click **Enable Schedule**
2. The system creates a recurring Job Queue Entry with the configured settings
3. The **Enable Scheduled Import** field changes to **Yes**
4. The **Last Scheduled Run** field will be populated after the first run completes

### Step 4: Verify the Job Queue Entry

1. Navigate to **Job Queue Entries** in Business Central
2. Locate the entry with description "REST API Import: [Integration Name]"
3. Verify the entry is in **Ready** status
4. Confirm the recurrence interval and earliest start date/time match your configuration

## Disabling the Schedule

To stop scheduled polling:

1. Open the Integration and navigate to the **REST API Endpoint** page
2. Click **Disable Schedule**
3. The system deletes the Job Queue Entry and sets **Enable Scheduled Import** to **No**

## How Scheduled Polling Works

When a scheduled polling job runs, the following sequence occurs:

1. The Job Queue triggers the REST API Poll Task codeunit
2. The system verifies the endpoint still has scheduling enabled
3. The system checks for an active (in-progress) import for the same integration
4. If no active import exists, the system runs the import
5. After the import completes, the **Last Scheduled Run** field is updated with the current date/time
6. The Job Queue reschedules the next run based on the configured recurrence interval

### Overlap Prevention

The system prevents overlapping imports. If a previous scheduled import is still running when the next scheduled run triggers, the new run is skipped. This ensures data integrity and prevents duplicate processing. The system raises an integration event `OnScheduledImportSkipped` when a run is skipped, which can be used for monitoring through custom AL code.

## Retry Logic and Error Handling

Scheduled polling benefits from two levels of error handling:

### HTTP-Level Retries

When the REST API returns a transient error, the REST client automatically retries the request (if retry is enabled on the connection). This handles:

- **HTTP 429** - Rate limited (respects the `Retry-After` header)
- **HTTP 500** - Internal server error
- **HTTP 502** - Bad gateway
- **HTTP 503** - Service unavailable
- **HTTP 504** - Gateway timeout
- **Network errors** - Connection failures

Each retry uses exponential backoff, doubling the delay after each attempt. The initial delay and maximum retries are configured on the REST API Connection.

**Example retry sequence with default settings (Initial Delay: 1000ms, Max Retries: 3):**

| Attempt | Delay Before Retry |
| --- | --- |
| 1st retry | 1000 ms (1 second) |
| 2nd retry | 2000 ms (2 seconds) |
| 3rd retry | 4000 ms (4 seconds) |

If the API returns a `Retry-After` header with a value larger than the calculated delay, the framework uses the `Retry-After` value instead.

### Job Queue-Level Recovery

If the import fails after all HTTP retries are exhausted, the Job Queue Entry handles the error according to Business Central's standard job queue behavior. The Job Queue Entry remains active and will attempt the next scheduled run at the normal interval.

## Monitoring Scheduled Imports

### Checking Last Run Time

On the REST API Endpoint page, the **Last Scheduled Run** field shows when the most recent scheduled import completed successfully.

### Reviewing Job Queue Status

1. Navigate to **Job Queue Entries**
2. Locate the REST API import entry
3. Check the **Status** field:

| Status | Meaning |
| --- | --- |
| **Ready** | Waiting for the next scheduled run |
| **In Process** | Currently running |
| **Error** | The last run failed. Check the **Error Message** field for details |
| **On Hold** | Manually paused. Resume by setting status to Ready |

### Reviewing Import Logs

After each scheduled run, review the imported data:

1. Navigate to **Integration Framework** > **Integrations**
2. Open the integration
3. Review **Integration Records** for the latest import batch
4. Check for records in **Error** status and review error details

## Polling Interval Recommendations

Choose the polling interval based on your business requirements and API constraints:

| Scenario | Recommended Interval | Notes |
| --- | --- | --- |
| Near real-time sync | 1-5 minutes | Check API rate limits before using short intervals |
| Frequent updates | 15-30 minutes | Good balance of freshness and API usage |
| Hourly sync | 60 minutes | Suitable for most business data |
| Daily sync | 1440 minutes (24 hours) | Use Earliest Start Date/Time to control the run time |
| Business hours only | 60 minutes | Combine with Earliest Start Date/Time and consider disabling/enabling via a separate job |

## Best Practices

1. **Test Manually First** - Always verify the integration works correctly with a manual import before enabling scheduled polling
2. **Start with Longer Intervals** - Begin with a longer interval (e.g., 60 minutes) and reduce it after confirming stable operation
3. **Respect API Rate Limits** - Check the API provider's rate limits and set the polling interval accordingly. Frequent polling with short intervals may trigger rate limiting
4. **Enable Retry on the Connection** - Keep retry enabled to handle transient API errors gracefully
5. **Set Appropriate Retry Delays** - For APIs with known rate limits, set the initial retry delay to accommodate the API's rate limit window
6. **Monitor Regularly** - Check the Job Queue Entry status and import logs weekly to catch errors early
7. **Use Earliest Start Date/Time** - Set this field to control when the first run occurs, especially for daily imports that should run at a specific time
8. **Review Error Records** - After each run, check for records in Error status and address mapping or data issues promptly
9. **One Schedule Per Endpoint** - Each endpoint can have only one active schedule. Disable the existing schedule before creating a new one
10. **Plan for Maintenance Windows** - When the external API has planned maintenance, consider temporarily disabling the schedule to avoid unnecessary error logs

## Troubleshooting

### Issue: Schedule is not running

- **Cause** - The Job Queue Entry may be on hold, in error, or deleted
- **Solution** - Navigate to Job Queue Entries and verify the entry exists and is in Ready status
- **Check** - Ensure the Job Queue is running in Business Central (check Job Queue Category setup)

### Issue: "A schedule is already active for this endpoint"

- **Cause** - An existing Job Queue Entry is linked to the endpoint
- **Solution** - Click **Disable Schedule** first, then click **Enable Schedule** to create a new entry

### Issue: Scheduled import skips runs

- **Cause** - The previous import is still running when the next scheduled run triggers
- **Solution** - Increase the polling interval to allow more time for each import to complete, or optimize the integration to process faster
- **Check** - Review the time each import takes and set the interval to at least double that duration

### Issue: "Previous import is still in progress" in logs

- **Cause** - The overlap prevention check detected an active import
- **Solution** - This is expected behavior to prevent duplicate imports. If the previous import is stuck, check the import log for errors

### Issue: Last Scheduled Run is not updating

- **Cause** - The import is failing before completion
- **Solution** - Run the import manually to see the error, or check the Job Queue Entry error message

## Next Steps

- [How to Create a REST API Import Integration](how-to-rest-api-import.md)
- [How to Configure REST API Authentication](how-to-rest-api-authentication.md)
- [How to Configure REST API Pagination](how-to-rest-api-pagination.md)
- [How to Handle Errors](how-to-error-handling.md)

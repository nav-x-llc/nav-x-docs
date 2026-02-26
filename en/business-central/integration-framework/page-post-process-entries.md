# Post-Process Entries Page

**Page Name:** NAV-X Post Process Entries  
**Purpose:** Tracks and manages records created during integration processing that require post-processing execution  
**Version:** NAV-X Integration Framework v1.3.0+  
**Application Area:** NAV-X Integration Framework  

## Overview

The **Post-Process Entries** page displays all Business Central records that were created during an integration import and are pending or have completed post-processing. This page allows you to monitor the execution status of post-processing codeunits and retry any entries that failed.

## When You Use This Page

- **After running an integration** with Post-Processing configured
- **To monitor progress** of background post-processing executions
- **To review errors** that occurred during post-processing
- **To retry failed entries** after fixing issues
- **To inspect which records were created** during an import

## Key Fields

### Tracking Fields

| Field | Purpose |
| ------- | --------- |
| **Entry No.** | Unique identifier for this post-process entry (auto-numbered) |
| **Import Entry No.** | Links to the original integration import batch |
| **Sorting Order** | Identifies which integration configuration was used |
| **Document Group No.** | Groups related records belonging to same document (e.g., all lines in one sales order) |

### Created Record Fields

| Field | Purpose |
| ------- | --------- |
| **Table No.** | Business Central table number where record was created (e.g., 36 for Sales Header, 37 for Sales Line) |
| **System Id** | Unique identifier (GUID) of the created Business Central record |
| **Record Was Inserted** | Boolean: True = new record created, False = existing record modified |

### Processing Status Fields

| Field | Purpose | Values |
| ------- | --------- | -------- |
| **Status** | Current post-processing status | **Ready** = Pending execution, **Processing** = Currently executing, **Completed** = Executed successfully, **Error** = Encountered error |
| **Error Message** | Error details if Status = Error | Text: Displays exception message if post-processing failed |
| **Created Date/Time** | When this entry was created | Date/Time stamp (read-only) |

## Status Values Explained

### Ready

- **Meaning:** Waiting for post-processing to execute
- **What happens:** Post-processing codeunit hasn't run yet
- **Action:** Wait for background processing, or click **Retry Post-Processing** action

### Processing

- **Meaning:** Post-processing codeunit is currently executing
- **What happens:** Background session is running the codeunit
- **Action:** Wait for completion (check back later)

### Completed

- **Meaning:** Post-processing executed successfully
- **What happens:** Codeunit finished without errors
- **Result:** Record modified as configured by post-processing codeunit
- **Action:** No action needed; import complete

### Error

- **Meaning:** Post-processing encountered an exception
- **What happens:** Codeunit threw an error
- **Error displayed:** See **Error Message** field for details
- **Action:** Fix the underlying issue, then retry using **Retry Post-Processing** action

## Working with Document Groups

Records from the same document (same header with multiple lines) share a **Document Group No.**

### Example

**Sales Order Import with 2 lines:**

```text
Document Group No. 1
├─ Entry 1: Sales Header SO001 (Table 36)
│  Status: Completed
│
└─ Entry 2: Sales Line Line 1 (Table 37)
   Status: Completed
   
└─ Entry 3: Sales Line Line 2 (Table 37)
   Status: Completed
```

### Filtering by Document

To view all records belonging to one document:

1. Click on **Document Group No.** field value
2. Page auto-filters to show all entries with that group number
3. You can see the header and all its lines together

## Actions

### Retry Post-Processing

**When to use:** When one or more entries show Status = **Error**

**What it does:**

1. Finds all entries with Status = **Error** in current filter
2. Clears the error message
3. Resets Status to **Ready**
4. Post-processing codeunit(s) execute again

**Example:**

```text
Entry 1: Sales Header - Status: Error
         Error Message: "Item ITEM_UNKNOWN not found"

Fix: Correct the item code in source and reimport, or add missing item to BC

Re-run: Click "Retry Post-Processing"
Result: Entry 1 Status changes to Completed
```

## Filtering and Analysis

### Common Filters

**View all errors:**

```text
Status = Error
```

**View results from specific import:**

```text
Import Entry No. = [your import entry number]
```

**View specific document:**

```text
Document Group No. = [document number]
```

**View specific table's records:**

```text
Table No. = [BAL table number]
Example: Table No. = 36 (all Sales Headers)
Example: Table No. = 37 (all Sales Lines)
```

### Understanding Table Numbers

Common table numbers you might see:

| Table No. | Business Central Table | Context |
| ----------- | ---------------------- | --------- |
| 36 | Sales Header | Order/Invoice/Quote headers |
| 37 | Sales Line | Order/Invoice/Quote line items |
| 38 | Purchase Header | PO/Invoice headers |
| 39 | Purchase Line | PO/Invoice line items |
| 21 | Vendor | Vendor records |
| 27 | Item | Item records |
| 18 | Customer | Customer records |

For other tables, note the table number and look up in your BC system.

## Post-Processing Triggers Explained

The execution of entries depends on the post-processing trigger configured in the integration:

### Per Document Trigger

- **When entries create:** Immediately after each document header created
- **Status progression:** Ready → Processing → Completed (immediate)
- **Configuration:** Integration → Post-Processing Trigger = "Per Document"
- **Example:** Post-process each sales order immediately as it's created

### After Processing Trigger

- **When entries create:** Immediately after all records created, before returning control to user
- **Status progression:** Ready → Processing → Completed (while you wait)
- **Configuration:** Integration → Post-Processing Trigger = "After Processing"
- **Example:** Post-process complete batch after all orders created

### Job Queue Trigger

- **When entries create:** Records created first, post-processing queued for background execution
- **Status progression:** Ready → (processing in background) → Completed
- **Configuration:** Integration → Post-Processing Trigger = "Job Queue"
- **Example:** Post-process orders in background while user continues working
- **Job Queue:** Requires Job Queue Entry configured to run post-processing codeunit

## Monitoring Post-Processing

### Real-Time Monitoring

1. Open **NAV-X Post Process Entries** page
2. Filter by Import Entry No. to see results from your import
3. Watch Status column as processing occurs
4. Row styling changes: Red for Error, Green for Completed

### Batch Monitoring

1. Click on **Sorting Order** field to identify which integration ran
2. Click on **Import Entry No.** to see associated integral records
3. Identify errors quickly by filtering Status = Error

## Error Handling and Recovery

### When Post-Processing Fails

1. **Errors recorded:** Entry Status = Error, Error Message populated
2. **Created record status:** BC record was created, but post-processing modifications not applied
3. **Data integrity:** Depends on post-processing codeunit - may be partial/incomplete

### Recovery Steps

1. **Identify error:** Filter Status = Error, read Error Message
2. **Fix root cause:**
   - If lookup failure: Ensure looked-up master records exist
   - If validation failure: Correct source data
   - If code error: Contact application developer
3. **Retry:**
   - Select entries or filter to erro entries
   - Click **Retry Post-Processing** action
   - Entries reset to Ready, post-processing executes again
4. **Verify:** Confirm Status changes to Completed and records correct

### Delete Failed Entries

If an entry cannot be recovered:

1. Ensure BC record is deleted (manually delete if needed)
2. Entry itself can be archived or deleted after investigation
3. Create new import with corrected data

## Notifications

### Post-Processing Completion Notification

When using **Job Queue** post-processing trigger:

- **Notification:** "Post-processing completed: X records successful, Y errors"
- **Trigger:** Sent when all Job Queue entries finish
- **Action:** Click notification to open Post-Process Entries page filtered to results

### Error Notification

If any entries fail post-processing:

- **Notification:** "Post-processing errors detected"
- **Follow-up:** Filter this page to Status = Error to review

## Examples and Scenarios

### Scenario 1: Successful Order Import with Post-Processing

```text
Step 1: Run sales order import
  → Creates 50 Sales Headers + 150 Sales Lines
  → Navigation framework creates 200 Post-Process Entries

Step 2: Post-processing executes
  → Status: Per Document trigger (immediate per document)
  → As each document completes: post-processing runs
  
Step 3: Monitor page
  → All entries show Status = Completed
  → No error messages
  → All orders ready for next workflow step
  
Result: ✅ Import and post-processing successful
```

### Scenario 2: Import with Post-Processing Error

```text
Step 1: Run invoice import
  → Creates 30 Invoice Headers + 100 Invoice Lines
  → Creates 130 Post-Process Entries

Step 2: Post-processing encounters error
  → Some records hit business rule violation
  → Status = Error for entries that failed
  → Error Message: "Document total exceeds credit limit"
  
Step 3: Fix in source data
  → Reduce quantities or prices in source to stay within limits
  → Re-import with corrected data
  
Step 4: Retry
  → Click "Retry Post-Processing" on error entries
  → Post-processing re-executes
  → Status changes to Completed
  
Result: ✅ Errors resolved, documents properly post-processed
```

## Troubleshooting

### Question: Entries stuck in "Processing" status?

**Possible causes:**

- Job Queue session crashed
- Long-running post-processing codeunit
- Background processing timeout

**Solution:**

1. Check Job Queue Entries status
2. If stuck > 30 minutes, manually reset entry to Ready
3. Re-run post-processing

### Question: All entries showing "Ready" but not progressing?

**Possible causes:**

- Post-Processing Trigger = Job Queue, but no Job Queue Entry configured
- Job Queue not running

**Solution:**

1. Verify Job Queue Entry exists for post-processing codeunit
2. Verify Job Queue Entry status = Ready (not blocked)
3. Start Job Queue if stopped

### Question: Can I delete entries?

**Answer:**

- Do not delete unless BC record confirmed deleted
- Consider archiving for audit trail instead
- Entries are reference-only (deleting doesn't affect BC records)

### Question: How long do entries stay?

**Recommendation:**

- Keep completed entries for audit purposes (90 days minimum)
- Archive after review period
- Helps troubleshoot future issues

## Related Information

- [Post-Processing Framework](how-to-post-processing.md) - How to configure post-processing
- [Integration Records Page](page-integration-records.md) - View created BC records
- [Job Queue Setup](../base/setting-up-job-queue.md) - Configure background processing
- [How to Handle Errors](how-to-error-handling.md) - Error handling best practices

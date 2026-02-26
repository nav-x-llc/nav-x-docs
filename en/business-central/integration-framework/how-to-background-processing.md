# How to Use Background Processing

This guide explains how to configure and use background (asynchronous) processing for imports to improve user experience with large or long-running imports.

## What is Background Processing?

Background processing allows imports to **run asynchronously in a background job queue** instead of blocking your user session. You can continue working in Business Central while records are imported.

**Key Difference:**

- **Blocking (Immediate):** User waits until import completes
- **Non-Blocking (Background):** Import happens in background while user works

## When to Use Background Processing

### Use Blocking Mode When

- Importing small amounts of data (< 100-500 records)
- You need immediate results before continuing
- Testing/validating import success
- Interactive workflows where user waits

### Use Background Processing When

- Large imports (1000+ records)
- Complex lookups or validations (slower processing)
- Scheduled/automated imports
- User experience matters (don't want users waiting)
- Processing may take several minutes

## How Background Processing Works

### Blocking (Immediate) Processing

```text
User starts import
    ↓
Import Framework begins processing
    ↓
User session blocks (wait cursor)
    ↓
Records created one by one
    ↓
Processing completes
    ↓
Results displayed
    ↓
User can continue (maybe 30 seconds to several minutes later)
```

**Timeline Example (500 records):**

```text
10:00:00 - User clicks Process Import
10:00:01 - Processing starts (user waiting)
10:00:45 - Processing completes
10:00:46 - Results shown ("500 records created")
10:00:46+ - User can work again
```

### Background (Asynchronous) Processing

```text
User starts import
    ↓
Import Framework queues to background job
    ↓
User session returns control IMMEDIATELY
    ↓
User can continue working
    ↓
Background job processes records
    ↓
User gets notification when complete
    ↓
User can review results anytime
```

**Timeline Example (500 records):**

```text
10:00:00 - User clicks Process in Background
10:00:03 - Job queued, user gets control back
10:00:03+ - User can work (open orders, create invoices, etc.)
10:00:15 - Processing continues in background
10:00:45 - Background processing completes
10:00:45 - User gets notification: "Import complete: 500 records created"
10:00:46+ - User can review results
```

## Setting Up Background Processing

### Step 1: Configure Processing Execution Mode

1. Open your **Integration** record
2. Find: **Processing Execution Mode**
3. Select:
   - **Immediate (Synchronous)** - Blocking (traditional mode)
   - **Deferred Job Queue (Asynchronous)** - Background processing
4. Save

### Step 2: Run Import

1. Click **Import** action
2. Framework parses source file (always synchronous)
3. You'll see post-import dialog with options:

   ```text
   "The import has been completed. What would you like to do?"
   
   • Process now (wait for completion)           [BLOCKING MODE]
   • Process in background (continue working)    [BACKGROUND MODE]
   • Open import results                         [VIEW RECORDS]
   ```

4. Choose based on your Processing Execution Mode:
   - If Immediate mode configured: First option is highlighted
   - If Deferred mode configured: Second option highlighted

### Step 3: Monitor Background Processing

After selecting background processing:

1. **Initial Dialog** - Shows progress with live updates
   - "Processing: 150/500 records"
   - "Errors: 2"
   - Can watch progress or close dialog

2. **Continue Working** - You can work while processing runs
   - Open documents
   - Create orders
   - Navigate pages
   - Process other data

3. **Notification Banner** - Appears when processing completes
   - "Import Processing Complete"
   - "500 records created, 0 errors"
   - Option to open results

4. **Check Results Anytime** - View integration records
   - Choose **Tell me** → Search for "Integration Records"
   - Filter by your integration
   - View Status column (Ready, Completed, Error, Processing)

## Background Processing Details

### What Happens Synchronously (User Session)

These always happen in your session and you wait for them:

- **Parse source file** (Excel, CSV, Text)
- **Create Integration Records** (staging table)
- **Initial validation** of source data

### What Happens Asynchronously (Background Job)

These run in background job queue (non-blocking):

- **Process Integration Records** → BC tables
- **Field mapping** and transformation
- **Lookups** and validation
- **Error handling** and tracking
- **Create actual BC records** (Documents, Items, Customers, etc.)

### Processing Duration

Time depends on:

- **Record count** - More records = longer processing
- **Lookup complexity** - Lookups slower than direct values
- **Validation rules** - Validation adds time
- **Field mapping count** - More mappings = slower
- **Job Queue backlog** - Other jobs ahead in queue

**Rough estimates (modern infrastructure):**

```text
100 records:     5-10 seconds
500 records:     30-60 seconds
1000 records:    1-2 minutes
5000 records:    5-15 minutes
10000 records:   15-30 minutes
```

## Monitoring and Managing Background Jobs

### View Background Job Status

1. Choose **Tell me** → Search for "Job Queue Entries"
2. Look for entries with Description containing your integration name
3. View Status:
   - **Ready** - Queued, awaiting processing
   - **In Process** - Currently running
   - **Error** - Failed (check error message)
   - **Finished** - Completed successfully

### Monitor Live Progress

While background processing runs:

1. Open **Integration Records** page
2. Filter by your integration
3. Watch Status column update:
   - Count of "Processing" status increases
   - Count of "Completed" status increases
   - Count of "Error" status shows failures

### Cancel Background Processing

If you started background processing and want to stop it:

1. Go to **Job Queue Entries**
2. Find entry for your integration
3. Choose **Cancel Job**
4. Processing stops (completed records remain, rest skipped)

## Handling Background Processing Errors

### View Error Records

After background processing completes:

1. Open **Integration Records** page
2. Filter Status = "Error"
3. View error message for each failed record
4. Review → **Error Message** field for details

### Retry Failed Records

To reprocess failed records:

1. Open **Integration Records** page
2. Filter Status = "Error"
3. Select failed records
4. Choose **Process** action
5. Framework reprocesses just those records

## Combining Background Processing with Post-Processing

When using both features:

### Scenario: Deferred Processing + Job Queue Post-Processing

```text
User imports 1000 sales orders
    ↓
Background job processes Integration Records → Sales Headers/Lines
    ↓
All 1000 orders created in BC
    ↓
Post-Processing job begins (if configured with Job Queue trigger)
    ↓
Release all 1000 orders in background
    ↓
User notified when everything complete
```

**Timeline:**

```text
10:00:00 - User clicks Process in Background
10:00:05 - Job queued, user can work
10:15:00 - All orders created (background processing complete)
10:15:01 - Post-processing job queued (if Job Queue trigger)
10:30:00 - All orders released (post-processing complete)
10:30:00 - User notified "Import and post-processing complete"
```

### Best Practices with Both Features

1. **Use immediate post-processing** if Job Queue processing is fast
2. **Use Job Queue post-processing** if logic is complex or slow
3. **Monitor both job types** in Job Queue Entries
4. **Allow adequate timeout** for both import and post-processing

## Performance Optimization

### Tips for Faster Processing

1. **Use Direct Mappings** - Avoid lookups when possible (faster)
2. **Validate Only Needed Fields** - Fewer validations = faster
3. **Sort Source Data** - Helps with grouping and processing
4. **Batch Size** - Consider breaking very large imports into smaller batches
5. **Job Queue Timing** - Don't run too many large jobs simultaneously

### Job Queue Configuration

To optimize background job execution:

1. Go to **Job Queue Categories**
2. Create/assign a category for Integration Framework jobs
3. Set **Frequency** (every few minutes for near-real-time)
4. Ensure **Job Queue is Enabled**
5. Monitor Job Queue status on Role Center

## Choosing Processing Mode for Different Scenarios

### Example 1: Manual Interactive Import

**User scenario:** Salesperson uploads Excel file of customer orders

**Recommendation:** Immediate (blocking) mode

- Small file (50-200 orders)
- User present and wants feedback
- User can wait a few seconds
- Interactive validation needed

**Configuration:**

```text
Integration Setup:
  - Processing Execution Mode = Immediate
  - Post-Processing Trigger = Per Document
  - User sees results in real-time
```

### Example 2: Large Nightly Import

**User scenario:** Automated job imports 10000 orders from ERP system

**Recommendation:** Deferred (background) mode

- Large file (10000+ records)
- Scheduled execution (2 AM)
- No user waiting
- Complex lookups and validation

**Configuration:**

```text
Integration Setup:
  - Processing Execution Mode = Deferred Job Queue
  - Post-Processing Trigger = Job Queue
  - Job Queue setup to run at 2 AM
  - Email notification when complete
```

### Example 3: Bulk Vendor Import

**User scenario:** Import 5000 items from vendor catalog

**Recommendation:** Deferred (background) mode

- Medium-large file (5000 records)
- User wants to continue working
- Item data complex (lookups needed)
- Results can be reviewed later

**Configuration:**

```text
Integration Setup:
  - Processing Execution Mode = Deferred Job Queue
  - Post-Processing Trigger = After Processing
  - User gets notification banner when complete
  - User can resume filling in additional item fields
```

## Troubleshooting Background Processing

### Background Job Doesn't Start

**Check:**

1. Is Job Queue Enabled?
   - Choose **Tell me** → "Job Queue Entries"
   - Check if any entries exist and are active
2. Is there a Job Queue Entry for the integration?
   - Should show status "Ready" or "In Process"
3. Is Job Queue running?
   - May require application restart on-premise

### Background Processing Seems Slow

**Check:**

1. Is Job Queue busy with other tasks?
   - Look at Job Queue Entries page
   - Check if many jobs are "In Process"
2. Is there a network delay?
   - Check BC telemetry for performance insights
3. Are lookups slow?
   - Consider indexing lookup tables
   - Reduce validation if not needed

### Background Job Stops/Errors

**Check:**

1. View Job Queue Entries → Status column
2. Check error message
3. Common issues:
   - Table lock (other user modifying records)
   - Permission issue (integration user lacks permissions)
   - Timeout (processing took longer than job timeout allows)

### User Keeps Waiting (Thinks It's Blocking)

**If background processing enabled but user still waits:**

1. User may have habitual waiting behavior
2. Provide clear messaging: "Processing continues in background"
3. Show notification banner more prominently
4. Train users that they can continue working

## Next Steps

- [How to Import Sales Documents](how-to-sales-documents.md)
- [How to Set Up Post-Processing](how-to-post-processing.md)
- [Getting Started](getting-started.md)

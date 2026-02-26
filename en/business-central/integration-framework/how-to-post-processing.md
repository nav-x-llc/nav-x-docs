# How to Set Up Post-Processing

This guide explains how to configure post-processing to automatically run custom business logic after records are created during an import.

## What is Post-Processing?

Post-processing allows you to **automatically run custom business logic** after the Integration Framework creates records in Business Central. This is useful for scenarios where importing creates records that require immediate follow-up action.

**Examples:**

- **Release Documents** - Automatically release sales orders or purchase orders after import
- **Cascade Updates** - Update related records based on newly created data
- **Trigger Workflows** - Start business workflows or approvals
- **Calculate Extensions** - Run extension-specific calculations or validations
- **Send Notifications** - Generate alerts or emails based on created records

## How Post-Processing Works

### Basic Workflow

```text
1. Import Runs
   └─ Parse source file
   └─ Create records in BC
   
2. Post-Processing Executes (based on trigger mode)
   └─ Run custom post-processing codeunit
   └─ Access created records via their SystemId
   └─ Execute your business logic
   
3. Results Tracked
   └─ Post-process entries recorded
   └─ Status: Ready, Completed, or Error
   └─ Failed entries can be manually retried
```

### Post-Processing Trigger Modes

Post-processing can execute at different times depending on your needs:

| Trigger Mode | When it Runs | Use Case |
| ------------------ | -------------- | ---------- |
| **Per Document** | Immediately after each document is created (during import) | Release orders one at a time as they're created; need results before next document |
| **After Processing** | Once after all rows are imported (end of import) | Wait for full batch to complete before post-processing; fewer background jobs |
| **Job Queue** | Asynchronously in background (after import completes) | Long-running logic; don't block user during post-processing |

#### Trigger Mode Details

##### Per Document (Immediate)

- Executes immediately after each header/master record is created
- Blocking mode - user waits for this post-processing
- Most frequent execution (once per document)
- Example: Release each sales order as it's created

##### After Processing (Immediate)

- Executes once when all rows have been imported
- Blocking mode - user waits
- Execute once per import
- Example: Auto-release all orders in one batch

##### Job Queue (Deferred)

- Executes asynchronously in background after import completes
- Non-blocking - user continues working
- Can take longer (no user session timeout)
- Status monitored via Integration Records page
- Example: Run complex business logic without blocking user

## Setting Up Post-Processing

### Step 1: Create Your Post-Processing Codeunit

Create an AL codeunit that implements the post-processing logic:

```al
codeunit 50100 "My Post Processing"
{
    procedure RunPostProcessing(var NAVXIFPostProcessEntry: Record "NAVX IF Post Process Entry")
    begin
        // Your custom logic that processes the created records
        if NAVXIFPostProcessEntry.FindSet() then
            repeat
                ProcessRecord(NAVXIFPostProcessEntry);
            until NAVXIFPostProcessEntry.Next() = 0;
    end;

    local procedure ProcessRecord(NAVXIFPostProcessEntry: Record "NAVX IF Post Process Entry")
    var
        SalesHeader: Record "Sales Header";
    begin
        // Reload the created record using SystemId
        if SalesHeader.GetBySystemId(NAVXIFPostProcessEntry."System Id") then begin
            // Perform your business logic
            // Example: Release the sales order
            SalesHeader.Validate(Status, SalesHeader.Status::Released);
            SalesHeader.Modify();
        end;
    end;
}
```

### Step 2: Configure Integration for Post-Processing

1. Open your **Integration** record
2. Set: **Post-Processing Codeunit** - Select the codeunit you created
3. Set: **Post-Processing Trigger** - Choose when to execute:
   - **Per Document (Immediate)** - After each document
   - **After Processing (Immediate)** - After all rows imported
   - **Job Queue (Deferred)** - Background execution
4. Save

> **Note:** Post-processing only runs if a Post-Processing Codeunit is configured.

### Step 3: Run Import

1. Run your integration import as normal
2. Records are created in BC
3. Post-processing executes based on your trigger mode
4. Post-process entries are tracked and can be reviewed

## Sample Post-Processing: Release Sales Orders

Here's a complete example of releasing imported sales orders automatically:

### Codeunit: Release Sales Orders After Import

```al
codeunit 50101 "Release Sales Orders IF"
{
    /// <summary>
    /// Post-processing codeunit that releases sales orders after they are created by import.
    /// Called by the Integration Framework after records are inserted.
    /// </summary>
    procedure RunPostProcessing(var NAVXIFPostProcessEntry: Record "NAVX IF Post Process Entry")
    var
        SalesHeader: Record "Sales Header";
        ReleaseSalesDoc: Codeunit "Release Sales Document";
        ErrorMessage: Text;
    begin
        if NAVXIFPostProcessEntry.FindSet() then
            repeat
                if SalesHeader.GetBySystemId(NAVXIFPostProcessEntry."System Id") then begin
                    try
                        // Release the document
                        ReleaseSalesDoc.Run(SalesHeader);
                        // Mark post-process entry as completed
                        NAVXIFPostProcessEntry.Status := "Process Status"::Completed;
                    catch ErrorMessage begin
                        // If release fails, mark as error
                        NAVXIFPostProcessEntry.MarkAsError(ErrorMessage);
                    end;
                end;
            until NAVXIFPostProcessEntry.Next() = 0;
    end;
}
```

### Configuration Steps

1. Create codeunit and assign object number (e.g., 50101)
2. Publish and deploy to Business Central
3. Open your **Sales Order Import** Integration record
4. Set: **Post-Processing Codeunit** = 50101 (Release Sales Orders IF)
5. Set: **Post-Processing Trigger** = "Per Document" (to release as they're created)
6. Save

### Result

When you import sales orders:

1. Each order is created from the source file
2. Post-processing immediately runs for that order
3. The order is automatically released
4. Next order is created and releases
5. All orders released by the end of import

## Monitoring Post-Processing

### View Post-Process Entries

After running an import with post-processing:

1. Open **NAV-X Integration Records** page
2. Filter by your Integration
3. Look at the record statuses:
   - **Ready** - Awaiting post-processing
   - **Completed** - Post-processing successful
   - **Error** - Post-processing failed (see error message)

### Check Post-Processing Results

1. Choose **Tell me** → Search for **Post-Process Entries**
2. View all post-processing results
3. Filter by Integration and date range
4. See status, error messages, and timestamps

### Retry Failed Post-Processing

If post-processing fails:

1. Fix the underlying issue (e.g., if release failed, resolve workflow blocks)
2. Select failed post-process entry
3. Choose **Retry** action
4. Post-processing runs again

## Post-Processing with Different Trigger Modes

### Example: Per Document Mode (Recommended for Most Cases)

**Configuration:**

- **Post-Processing Trigger** = "Per Document (Immediate)"

**Timeline:**

```text
10:00:00 - Order SO001 created
10:00:01 - Released immediately after SO001 created
10:00:02 - Order SO002 created
10:00:03 - Released immediately after SO002 created
10:00:05 - All orders created and released
```

**Pros:** Validate each order released while you watch; catch issues quickly
**Cons:** Slower (synchronous); user waits for each release cycle

### Example: After Processing Mode (Batch Scenario)

**Configuration:**

- **Post-Processing Trigger** = "After Processing (Immediate)"

**Timeline:**

```text
10:00:00 - Order SO001 created
10:00:00 - Order SO002 created
10:00:00 - Order SO003 created
10:00:01 - All three orders created
10:00:02 - Release all three orders together
10:00:03 - Import and post-processing complete
```

**Pros:** Efficient for batches; all post-processing in one cycle
**Cons:** If one order fails to release, all fail to process

### Example: Job Queue Mode (Large Imports)

**Configuration:**

- **Post-Processing Trigger** = "Job Queue (Deferred)"

**Timeline:**

```text
10:00:00 - Order SO001 created
10:00:00 - Order SO002 created
10:00:00 - Order SO3000 created
10:00:01 - All 3000 orders created
10:00:02 - Post-processing queued to background job
10:00:03 - User notified "Import complete; post-processing in progress"
10:00:03+ - User can continue working
10:15:00 - Background processing completes orders
10:15:00 - User notified "Post-processing complete; 3000 orders released"
```

**Pros:** Non-blocking; user can work; good for large batches
**Cons:** Asynchronous; may take longer; separate monitoring needed

## Best Practices for Post-Processing

1. **Keep Post-Processing Fast** - Avoid long-running operations in per-document mode
2. **Use Job Queue for Heavy Logic** - Set trigger to Job Queue if post-processing is slow
3. **Handle Errors Gracefully** - Catch exceptions and update NAVXIFPostProcessEntry status
4. **Test Thoroughly** - Test post-processing with sample data before production
5. **Document Your Logic** - Add comments explaining what post-processing does
6. **Monitor Results** - Check Post-Process Entries page after imports
7. **Set Appropriate Trigger Mode** - Match trigger mode to your use case (per document, after all, or deferred)
8. **Consider System Performance** - Per-document mode on large imports could be slow

## Common Post-Processing Tasks

### Release Documents

```al
// Release sales order
ReleaseSalesDoc.Run(SalesHeader);

// Release purchase order
ReleasePurchDoc.Run(PurchaseHeader);
```

### Update Related Records

```al
// Update customer after order import
Customer.Get(SalesHeader."Bill-to Customer No.");
Customer."Last Sales Order Date" := Today();
Customer.Modify();
```

### Send Notifications

```al
// Send notification after orders created
CreateNotification("Orders import complete and released");
MyNotification.Send();
```

### Calculate Totals

```al
// Recalculate invoice totals
SalesInvHeader."Amount Including VAT" := CalculateTotal(SalesInvHeader);
SalesInvHeader.Modify();
```

## Troubleshooting Post-Processing

### Post-Processing Not Running

**Check:**

1. Is Post-Processing Codeunit configured on Integration?
2. Is the codeunit number valid and published?
3. Does the code have a public procedure named `RunPostProcessing`?
4. Are post-process entries being created (check Post-Process Entries page)?

### Post-Processing Has Errors

**Check:**

1. View error message in Post-Process Entries
2. Verify the business logic (e.g., can the order actually be released based on BC rules?)
3. Check if record exists (use GetBySystemId)
4. Ensure all required fields are filled

### Performance Issues

**If post-processing is slow:**

1. Profile the codeunit to find bottlenecks
2. Move to Job Queue trigger mode (async)
3. Optimize queries (avoid nested loops)
4. Consider batching logic (use After Processing trigger instead of Per Document)

## Next Steps

- [How to Import Sales Documents](how-to-sales-documents.md)
- [How to Handle Errors](how-to-error-handling.md)
- [Getting Started](getting-started.md)

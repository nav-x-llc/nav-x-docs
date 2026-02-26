# Page NAV-X Integration Records

The **Integration Records** page displays imported source data before and after processing. Each row represents either a source data record awaiting processing or a completed/failed import operation.

**To open:** From the NAV-X Integrations page, select an integration and click the **Records** action.

## Overview

The page shows:

- **Imported data:** Source file contents parsed into rows
- **Processing status:** Ready, Processing, Completed, Error
- **BC creation results:** Which records were created successfully
- **Errors:** Details about failed records
- **Editable data:** Fix data before reprocessing if corrections needed

## Key Fields

### Tracking Information

| Field | Purpose | Read-Only |
| ------- | --------- | ----------- |
| **Entry No.** | Unique identifier for this import batch | Yes |
| **Row No.** | Sequential number within import (1, 2, 3...) | Yes |
| **Sorting Order** | Integration configuration identifier | Yes |

### Status Information

| Field | Purpose | Values |
| ------- | --------- | -------- |
| **Status** | Current processing state | **Ready to Process**, **Processing**, **Completed**, **Error** |
| **Change Date/Time** | When Status last changed | Auto-updated when status changes |
| **Error Type** | Category of error (if Status=Error) | **Field Error**, **Record Error**, **Post-Processing Error** |
| **Error Message** | Detailed error description | Read-only; shows validation/lookup failures |

### Document Grouping (New in v1.3.0)

| Field | Purpose | When Used |
| ------- | --------- | ----------- |
| **Document Group No.** | Groups related rows into single document | Multi-line imports (Sales Orders, Invoices) |

**Example:** All rows with Document Group No. = 1 belong to same Sales Order

### Source Data Fields

| Field | Purpose |
| ------- | --------- |
| **Field No.** | Source field identifier |
| **Column Type** | How field value was generated (Standard, Constant, Line Numbers, etc.) |
| **[Field Data]** | Actual imported values (columns display source data) |

## Status Values Explained

### Ready to Process

- **Meaning:** Imported, awaiting processing
- **When:** Immediately after import
- **Action:** Click **Process** actions to create BC records
- **Next:** Processing (if using Immediate mode) or Completed (if processed successfully)

### Processing

- **Meaning:** Currently being processed
- **When:** During record creation in BC
- **Duration:** Brief (unless very complex processing)
- **Next:** Completed or Error

### Completed

- **Meaning:** Successfully created/updated in BC
- **When:** After processing completes without errors
- **BC Record:** Created with values from source
- **Action:** No action needed; import successful
- **Note:** May reprocess if data needs updating

### Error

- **Meaning:** Failed to create BC record
- **When:** Validation failure, lookup failure, or business rule violation
- **Error Detail:** Check **Error Message** field
- **Action:** Fix data and **Reprocess Errors**

## Error Type Classification (New in v1.3.0)

### Field Error

**Cause:** Individual field validation failed

**Examples:**

- Field type mismatch (text in number field)
- Lookup failed (customer code not found)
- Code doesn't exist in BC
- Date format invalid

**Recovery:**

1. Read Error Message for specific field
2. Correct source value in this record
3. Click **Reprocess Errors**

**Example:**

```text
Row 5: CustomerCode = "BADCUST"
Error Type: Field Error
Error Message: "Customer BADCUST not found"
Fix: Change CustomerCode to valid customer, reprocess
```

### Record Error

**Cause:** Record-level validation or business rule failed

**Examples:**

- Multiple lines without header (grouping problem)
- Order total exceeds credit limit
- Duplicate primary key
- Required field missing

**Recovery:**

1. Check entire row for consistency
2. Verify multi-line grouping (Document Group No.)
3. Review all field values
4. Correct and reprocess

**Example:**

```text
Row 8-10: Sales Order group
Error Type: Record Error
Error Message: "Sales Header not created - duplicate order number"
Fix: Verify Order numbers unique, correct duplicates
```

### Post-Processing Error (New in v1.3.0)

**Cause:** Custom post-processing codeunit encountered error

**Examples:**

- Post-processing validation fails
- Business rule validation fails
- Complex calculation error
- Integration with external system fails

**Recovery:**

1. Understand post-processing logic (contact admin)
2. Correct source data or BC setup
3. Click **Reprocess Errors** (triggers post-processing again)

**Example:**

```text
Row 12: Sales Order SO100
Error Type: Post-Processing Error
Error Message: "Insufficient inventory for item WIDGET"
Fix: Correct inventory or adjust quantities
```

## Change Date/Time Field (New in v1.3.0)

**Meaning:** When the Status last changed

**Examples:**

```text
Row 1: Status=Completed, Change Date/Time = 2024-01-15 10:30:45
         (Created successfully at this date/time)

Row 5: Status=Error, Change Date/Time = 2024-01-15 10:31:12
       (Error occurred at this date/time)

Row 6: Status=Completed, Change Date/Time = 2024-01-15 10:31:45
       (Reprocessed after error, succeeded at this time)
```

**Use for:**

- Tracking processing timeline
- Finding which records processed last
- Audit trail of changes

## Document Group No. Field (New in v1.3.0)

**Purpose:** Groups related records belonging to same multi-line document

**Example - Sales Order with 3 lines:**

```text
Row 1: OrderNo=SO001, Document Group No.=10
Row 2: OrderNo=SO001, Document Group No.=10
Row 3: OrderNo=SO001, Document Group No.=10
Row 4: OrderNo=SO002, Document Group No.=11
Row 5: OrderNo=SO002, Document Group No.=11
```

**Usage:**

- Filter by Document Group No. to see all lines of one document
- Identify grouping issues if processing fails
- Verify multi-line grouping correct before processing

## Column Type and Field No. (New in v1.3.0)

### Column Type

Shows how the field value was generated:

| Type | Meaning |
| ------ | --------- |
| Standard | From source file |
| Constant | Fixed value |
| Line Numbers | Auto-generated (10, 20, 30...) |
| Entry Numbers | Auto-generated (1, 2, 3...) |
| Formula | Calculated/transformed |

### Field No

References the Integration Field definition from the setup.

**Use for:**

- Tracing field configuration
- Understanding data origin
- Debugging mapping issues

## Actions

### Process Current Record

Creates BC record from current Import Record row.

**When to use:**

- Process one row at a time (testing)
- After correcting a single error
- Selective processing

### Process All Records

Creates BC records for all rows with Status = **Ready to Process**.

**When to use:**

- After import, to process all together
- After fixing errors, to retry all

### Reprocess Errors

Reprocesses only rows with Status = **Error**.

**When to use:**

- After correcting error data
- After fixing BC setup (missing customers, items, etc.)
- To retry post-processing

**Process:**

1. Status = Error → Ready to Process
2. Attempts to create/update BC records
3. Updates Status based on result

### Mark as Completed

Manually set Status = **Completed** without processing.

**When to use:**

- Ignore unrecoverable errors
- Skip rows intentionally
- Clean up test data

**Warning:** BC record NOT created; use with caution

### Show Error

Displays detailed error message for current row.

**Content varies by Error Type:**

- Field Error: Which field failed and why
- Record Error: Record-level issue description
- Post-Processing Error: Business logic failure details

### Status Filters

| Action | Shows |
| -------- | ------- |
| **Show All** | All records (Ready, Processing, Completed, Error) |
| **Show Ready** | Only Status = Ready to Process |
| **Show Errors Only** | Only Status = Error |

### Column Navigation

If import has > 50 visible columns, use to navigate:

| Action | Effect |
| -------- | -------- |
| **All Columns Left** | Jump to first columns |
| **Column Left** | Scroll left one column |
| **Column Right** | Scroll right one column |
| **All Columns Right** | Jump to last columns |

## Working with Large Imports

### Processing in Stages

For large imports with potential errors:

```text
Step 1: Import source file
Step 2: Review first 10-20 rows
Step 3: Process those rows
Step 4: Verify BC records created correctly
Step 5: If successful, process all remaining rows
Step 6: Monitor for errors, fix, reprocess
```

### Filtering and Correcting

If selective errors found:

```text
Step 1: Click "Show Errors Only"
Step 2: Review error messages
Step 3: Identify root cause (bad data, missing masters, etc.)
Step 4: For each error:
        - Edit the source data in this page
        - Click "Reprocess Errors"
Step 5: Verify status changes to Completed
Step 6: Process any remaining Ready records
```

### Bulk Operations

**Process All:**

1. All Ready records process at once
2. Results visible immediately
3. Review Status and Error columns after completion

**Reprocess Errors:**

1. Select filter or records
2. Fix data in visible rows
3. Click **Reprocess Errors**
4. All Error records attempt reprocessing

## Multi-Line Document Workflow

For Sales Orders, Invoices (multiple lines per document):

```text
1. Import contains multiple rows per Order
2. Rows with same OrderNo have same Document Group No.
3. First row of group → Sales Header created
4. Subsequent rows → Sales Lines created
5. Status reflects document processing, not individual rows

Example:
  Rows 1-3: Document Group No.=10, Status=Completed
            (Sales Header + 2 Lines)
  Rows 4-5: Document Group No.=11, Status=Error
            (Sales Header failed - fix OrderNo or CustomerCode)
```

## Troubleshooting

### All records show Error status?

**Check:**

1. Integration mappings configured correctly?
2. Destination tables specified?
3. Required fields mapped?
4. Source data format matches Integration Type?

**Fix:**

1. Verify integration setup (Integrations page)
2. Verify field mappings (Mappings page)
3. Try import process again with corrected setup

### Some records Error, others Completed?

**Likely cause:** Data quality issues in error rows

**Solution:**

1. Filter **Show Errors Only**
2. Read each Error Message
3. Identify pattern (all same field? specific values?)
4. Correct error rows
5. Click **Reprocess Errors**

### Post-Processing Errors?

**Example:** Records created successfully (Status=Completed initially), then Error status after post-processing

**Cause:** Business logic in post-processing codeunit failed

**Solution:**

1. See Error Message for details
2. Contact integration administrator
3. Fix underlying issue (inventory, validation rules, etc.)
4. Click **Reprocess Errors**

### Document Group numbers wrong?

**Check:**

1. Source file sorted correctly? (by GroupingField)
2. GroupingField has "Create New Document" = Yes?
3. GroupingField values unique per document?

**Fix:**

1. Re-import with corrected source file (properly sorted)
2. Or verify "Create New Document" configured correctly

## Example Workflow

```text
Step 1: Import Sales Orders from CSV
  5 orders with 15 total lines
  Records show:
  - Rows 1-3: Document Group 1 (SO001)
  - Rows 4-6: Document Group 2 (SO002)
  - Rows 7-9: Document Group 3 (SO003)
  - Rows 10-12: Document Group 4 (SO004)
  - Rows 13-15: Document Group 5 (SO005)
  All Status = Ready to Process

Step 2: Process All
  Click "Process All Records"
  System processes all documents

Step 3: Check Results
  Rows 1-12: Status=Completed ✓ (4 orders created)
  Rows 13-15: Status=Error
  Error: "Customer C005 not found"

Step 4: Fix Error
  Row 13: Edit CustomerCode from "C005" to "C501"
  Row 14: Edit CustomerCode from "C005" to "C501"
  Row 15: Edit CustomerCode from "C005" to "C501"
  
Step 5: Reprocess
  Filter to "Show Errors Only"
  Click "Reprocess Errors"
  
Step 6: Verify
  All rows now Status=Completed ✓
  5 Sales Orders created in BC with 15 lines
```

## See Also

- [Integrations Page](page-integrations.md)
- [Integration Mappings page](page-integration-mappings.md)
- [Post-Process Entries page](page-post-process-entries.md) - New in v1.3.0
- [How to Handle Errors](how-to-error-handling.md)
- [How to Import Sales Documents](how-to-sales-documents.md)

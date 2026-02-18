# How to Handle Errors

This guide explains how to track, review, and recover from errors during data imports using the Integration Framework.

## Understanding Error Types

The Integration Framework handles two categories of errors:

### 1. File-Level Errors (Critical)

**When:** During file parsing, before records created

**Types:**

- Wrong delimiter configured
- Encoding issues (wrong character set)
- File structure problems

**Result:** **Entire import fails** - no records created

**Example:**

```text
Import Configuration: Field delimiter = Comma
File Content: Pipe-delimited (|) data
Result: "No valid records found" - Import stops
         All records status remain "Ready"
```

### 2. Record-Level Errors (Recoverable)

**When:** During individual record processing

**Types:**

- Missing required field value (validation failure)
- Lookup value not found
- Data type mismatch
- Foreign key not found

**Result:** **Individual record marked Error** - other records continue processing

**Example:**

```text
Records 1-5: Valid - Created successfully
Record 6: Customer lookup fails - Marked as Error
Records 7-10: Valid - Continue processing
Result: 9 records created, 1 record has error status
```

## Record Status Values

Each Integration Record has a **Status** showing its processing state:

| Status | Meaning | Action |
| --- | --- | --- |
| **New** | Just created, not ready | Review, then set to Ready |
| **Ready** | Ready for processing | Will process in next import run |
| **Processing** | Currently being processed | Wait for completion |
| **Completed** | Successfully imported | None - record complete |
| **Error** | Failed during processing | Review error, fix, set to Ready, reprocess |

## Reviewing Record Errors

### Step 1: Identify Records with Errors

1. Open **Integration Process** record
2. View **Records** related list
3. Filter or search for Status = **Error**
4. Review error records

### Step 2: Read Error Message

On each Error record:

1. Open error record
2. Check **Error Details** field
3. Read error message to understand issue

**Sample Error Messages:**

```text
"Customer 'CUST_999' not found in lookup table"
"Field 'Name' is required"
"Item 'ITEM_INVALID' does not exist"
"Quantity must be a number"
```

### Step 3: Determine Root Cause

Error messages indicate:

| Message Contains | Root Cause | Action |
| --- | --- | --- |
| "not found in lookup" | Referenced record missing in BC | Create in BC |
| "is required" | Source field empty | Add to source data |
| "does not exist" | Referenced table missing record | Create in BC |
| "must be a number" | Wrong data type | Fix source data type |
| "Invalid enumeration" | Wrong value for option field | Verify allowed values |

## Fixing and Reprocessing Errors

### Process: Error Recovery

#### Step 1: Fix the Issue

Determine fix location:

```text
Error: "Customer not found"
→ Fix Location: Business Central Customer table
→ Action: Create missing customer

Error: "Missing required Name"
→ Fix Location: Source data file
→ Action: Add name to source record

Error: "Wrong data type"
→ Fix Location: Source data
→ Action: Convert/correct value
```

#### Step 2: Update Record Status

1. Open error record
2. Change Status from "Error" → "Ready"
3. Clear error message (optional)

#### Step 3: Reprocess

1. Open related **Integration Process**
2. Click **Reprocess Errors** action
3. System reprocesses all "Ready" records
4. Errors retested with fixes applied

#### Step 4: Verify Results

After reprocessing:

1. Check record Status (should be "Completed" if fixed)
2. Verify data in Business Central
3. If error persists, repeat process

## Working with File-Level Errors

### When File Parsing Fails

**Symptom:** "No valid records found" or parsing error message

**Common Causes:**

1. Wrong field delimiter configured
2. Wrong record delimiter configured
3. Character encoding mismatch
4. File contains unexpected structure

### Resolving File-Level Errors

#### Step 1: Verify File Format

1. Open source file in text editor
2. Identify actual delimiters used
3. Identify actual line endings used
4. Check file encoding

#### Step 2: Correct Configuration

1. Open **Integration** record
2. Check **Field Delimiter Type** - Does it match file?
3. Check **Record Delimiter Type** - Does it match file?
4. For text files, check **Text Parsing Type** - Flexible or Fixed?

#### Step 3: Retry Import

1. Save corrected configuration
2. Set all records back to "Ready"
3. Run integration again
4. Should parse successfully

### Example: CSV File Parsing Failure

```text
File content: Semicolon-separated (;)
Configuration: Field Delimiter = Comma (,)
Result: "No valid records found"

Fix:
1. Open file in Notepad
2. Confirm delimiter is semicolon
3. Update Integration.Field Delimiter Type = Semicolon
4. Save
5. Set records to Ready
6. Retry import
Result: Records parse correctly
```

## Email Notifications

### Error Notifications

When integration completes with errors:

**System sends email showing:**

- Integration name
- Number of records processed
- Number of errors encountered
- Error summary

**Check email address:**

1. Open **Integration Process**
2. Check **Email for Failures** field
3. Email sent to this address when errors occur

### Disabling Notifications

1. Open **Integration Process**
2. Clear **Email for Failures** field
3. Notifications disabled for future runs

## Common Error Scenarios and Solutions

### Scenario 1: Lookup Value Not Found

**Error Message:** `"'VALUE' not found in lookup table [TableName]"`

**Cause:** Referenced record doesn't exist in BC

**Resolution:**

```text
Step 1: Identify missing value
  Error: 'CUST_999' not found in Customer
  
Step 2: Create in BC
  Create Customer with No. = 'CUST_999'
  
Step 3: Set record status to Ready
  
Step 4: Reprocess
  Integration retested with new customer
  
Result: Record processes successfully
```

### Scenario 2: Required Field Missing

**Error Message:** `"Field 'Name' is required"`

**Cause:** Source data missing value for required BC field

**Resolution:**

```text
Step 1: Identify missing field
  Error: Field 'Name' is required
  
Step 2: Fix source data
  Add value to missing field
  OR Use Constant field mapping
  
Step 3: Set record status to Ready
  
Step 4: Reprocess
  Integration retested with new value
  
Result: Record processes successfully
```

### Scenario 3: Data Type Mismatch

**Error Message:** `"Quantity must be a number"`

**Cause:** Source value wrong data type for BC field

**Resolution:**

```text
Step 1: Identify type mismatch
  Error: Quantity "ABC" is not valid
  
Step 2: Fix source data format
  Change "ABC" → "10"
  Ensure all values are numeric
  
Step 3: Set record status to Ready
  
Step 4: Reprocess
  Integration retested with correct type
  
Result: Record processes successfully
```

### Scenario 4: Item Not Found

**Error Message:** `"Item 'ABC123' does not exist"`

**Cause:** Item referenced in import doesn't exist in Item table

**Resolution:**

```text
Step 1: Identify missing item
  Error: Item 'ABC123' not found
  
Step 2: Create in BC
  Create Item 'ABC123' with required fields
  Ensure item is properly set up
  
Step 3: Set record status to Ready
  
Step 4: Reprocess
  Integration looks up item again
  
Result: Item found, record processes successfully
```

## Bulk Error Recovery

For multiple errors with same cause:

### Bulk Reprocessing

1. Open Integration Process
2. Filter records: Status = Error
3. If same error type (e.g., all lookup failures)
4. Fix all missing references in BC
5. Select all error records
6. Action: **Set Status to Ready** (bulk action)
7. Run **Reprocess Errors** once
8. All records revalidated together

### Bulk Data Fixes

For source data errors affecting multiple records:

1. Fix source data
2. Re-upload/re-import source file
3. Create new Integration Process
4. Process new records fresh

## Error Review and Prevention

### Best Practices

1. **Review First Records** - Check first 5 successful records for data quality
2. **Review All Errors** - Always check error records before declaring import complete
3. **Verify Sample** - Test import with small sample first
4. **Prepare Reference Data** - Ensure all lookups exist before import
5. **Validate Test Data** - Use test records to catch issues early
6. **Document Errors** - Note common errors for reference data maintenance
7. **Gradual Rollout** - Import in phases to catch issues early
8. **Monitor Notifications** - Set email to track integration health

### Prevention Checklist

Before importing:

```text
☐ All reference codes (Customer, Item, etc.) created in BC
☐ Source data verified for quality
☐ Field delimiters correct
☐ Record delimiters correct
☐ File encoding verified
☐ Sample records tested first
☐ Field mappings verified
☐ Validation enabled for critical fields
☐ Lookups configured correctly
☐ Email notifications set up
```

## Troubleshooting Import Failures

### "No records found"

**Possible Causes:**

- Wrong field delimiter
- Wrong record delimiter
- Wrong text parsing type (Flexible vs Fixed)
- File encoding issue

**Debug Steps:**

```text
1. Open file in Notepad
2. Verify delimiters visually
3. Check line endings (CRLF vs LF)
4. Verify file isn't corrupted
5. Try different delimiter setting
6. Check file has expected structure
```

### "All records have errors"

**Possible Causes:**

- Field mapping points to wrong BC table/field
- Validation too strict
- Source data format wrong
- Reference data missing entirely

**Debug Steps:**

```text
1. Check field mappings destination
2. Verify field exists in BC table
3. Check field type matches source data
4. Create sample reference records
5. Test with small sample first
```

### "Some records process, others fail"

**Normal scenario:** File-level parsing OK, record-level errors

**Resolution:**

```text
1. Review error details
2. Fix issues per error message
3. Set status to Ready
4. Reprocess errors
5. Iterate until all records complete
```

## Performance Considerations

- Error checking adds minimal processing time
- Email notifications slight delay at completion
- Reprocessing faster than initial import (only processes Ready records)
- Large error counts may require batching reprocessing

## Next Steps

- [How to Validate Data](how-to-data-validation.md)
- [How to Use Field Lookups](how-to-field-value-mapping.md)
- [How to Import Sales Documents](how-to-sales-documents.md)

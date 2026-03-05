# How to Use Import Preview Mode

This guide explains how to preview imported data before committing it to Business Central, allowing you to validate and inspect source file contents before processing.

## What is Import Preview?

Import Preview lets you **upload and preview data before importing** it into Business Central. Instead of importing directly and discovering issues after records are created, you can inspect the parsed data in a worksheet-style preview page, identify problems, and decide whether to proceed.

**Key Difference:**

- **Direct Import:** File is parsed and records are created immediately
- **Import with Preview:** File is parsed, data is displayed for review, and you confirm before records are created

## When to Use Import Preview

### Use Preview When

- Importing data from a new or unfamiliar source
- Source file quality is uncertain or inconsistent
- You want to verify field mappings are correct before committing
- Required fields may be missing in some rows
- First-time setup of a new integration
- Validating data before a large import

### Use Direct Import When

- Source file format is well-established and trusted
- Automated/scheduled imports with known-good data
- Small imports where errors are easily corrected after the fact
- Repeat imports from a verified source

## How to Use Import Preview

### Step 1: Start Import with Preview

1. Open the **Integrations** page
2. Select the integration you want to use
3. Click the **Import with Preview** action
4. Select your source file (Excel, CSV, Text, or JSON)
5. The framework parses the file and opens the Preview Page

### Step 2: Review Data in the Preview Page

The Preview Page displays your parsed data in a **worksheet-style layout**:

- **Columns:** Up to 50 columns displayed, with field names as column headers
- **Rows:** Configurable number of rows displayed (1-100, default is 10)
- **Row Count:** Adjust the row count to see more or fewer rows from the source file

```text
Preview Page Layout:

| Customer No. | Name           | Address          | City       | Post Code |
| ------------ | -------------- | ---------------- | ---------- | --------- |
| C001         | Contoso Ltd    | 123 Main St      | Seattle    | 98101     |
| C002         | Fabrikam Inc   | 456 Oak Ave      | Portland   | 97201     |
|              | Northwind Co   | 789 Pine Blvd    | Vancouver  |           |
| C004         | Adventure Works| 321 Elm Dr       | Bellevue   | 98004     |
```

### Step 3: Identify Issues

**Attention Styling for Missing Required Fields:**

Rows with missing required fields are highlighted using **Attention** styling, making them easy to spot. In the example above, the third row would be highlighted because the required **Customer No.** field is empty.

**Preview Warnings:**

The Preview Page displays warnings for:

- **Validation errors** - Required fields that are blank or contain invalid data
- **Data quality warnings** - Values that may cause issues during processing (e.g., unexpected formats, truncated values)

Review warnings carefully before deciding to proceed with the import.

### Step 4: Confirm or Cancel

After reviewing the preview:

- **Confirm Import:** Click **OK** to proceed with the import. The file does not need to be uploaded again. The parsed data buffer is passed directly to the import engine.
- **Cancel:** Close the preview page to cancel without importing any records.

## Zero Re-Upload

Import Preview uses a **zero re-upload** design. The source file is parsed only once when you initiate the preview. When you confirm the import, the already-parsed data buffer is passed directly to the import engine. This means:

- No second file upload or parsing step
- Faster confirmation-to-import transition
- Identical data between what you previewed and what gets imported

## Supported File Types

Import Preview works with all file types supported by the Integration Framework:

- **Excel** (.xlsx, .xls)
- **CSV** (comma-separated values)
- **Text** (fixed-length and flexible text files)
- **JSON** (structured data files)

## Configuring Preview Row Count

To adjust how many rows appear in the preview:

1. On the Preview Page, locate the **Row Count** field
2. Enter a value between **1** and **100**
3. The preview refreshes to show the specified number of rows
4. Default value is **10** rows

**Recommendation:** Use a higher row count (e.g., 50-100) when you need to inspect more of the data for quality. Use a lower count (e.g., 5-10) for quick spot-checks on familiar file formats.

## Example Scenarios

### Scenario 1: New Vendor Catalog Import

```text
Step 1: Receive new vendor catalog file (Excel, 500 items)
Step 2: Use Import with Preview to inspect first 20 rows
Step 3: Notice "Unit of Measure" column has unexpected values
Step 4: Cancel import, correct source file
Step 5: Re-upload corrected file with Import with Preview
Step 6: Data looks correct, confirm import
Step 7: 500 items imported successfully
```

### Scenario 2: Quick Validation of Customer Update

```text
Step 1: Receive weekly customer update (CSV, 50 records)
Step 2: Use Import with Preview with default 10 rows
Step 3: Verify field mappings look correct
Step 4: Confirm import
Step 5: 50 customer records updated
```

## See Also

- [How to Import Excel Files](how-to-excel-import.md)
- [How to Import CSV Files](how-to-csv-import.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Handle Errors](how-to-error-handling.md)
- [Getting Started](getting-started.md)

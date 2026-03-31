# How to Use Dry Run (Import Simulation)

This guide explains how to use the Dry Run feature to simulate an import without writing any data to Business Central. Use it to validate your integration configuration, preview what records would be created or updated, and catch errors before they affect live data.

## What Is a Dry Run?

A Dry Run executes the full import pipeline — parsing, field mapping, value transformation, validation, and duplicate detection — but stops before writing to Business Central. Every row in the source data is evaluated and classified as one of five outcomes:

| Outcome | Color | Description |
| --- | --- | --- |
| **Insert** | Green | A new record would be created in BC |
| **Modify** | Blue | An existing BC record would be updated |
| **Delete** | Orange | An existing BC record would be deleted |
| **Skip** | Gray | The row was skipped (e.g., duplicate, filtered out) |
| **Error** | Red | The row failed validation or mapping and would cause an import error |

**When to use a Dry Run:**

- Before running an integration for the first time on production data
- After changing field mappings or validation rules, to verify the changes are correct
- When troubleshooting import errors — use Dry Run to see exactly which rows fail and why
- When onboarding new data sources to validate the source file structure

## Prerequisites

- You have an integration configured with field mappings
- The integration has a source file uploaded (for file-based integrations) or a REST API endpoint configured
- You have the **NAVX IF STANDARD** or **NAVX IF ALL** permission set

## Running a Dry Run

### From the Integrations Page

1. Open the **Integrations** page (search for **NAVX IF Integrations** in Tell Me)
2. Select the integration you want to simulate
3. Choose **Dry Run** from the action bar (under the **Import** action group)
4. If the integration is file-based, you are prompted to select the source file
5. The framework runs the full import pipeline in simulation mode
6. When complete, the **Dry Run Results** page opens automatically

### From the Integration Card

1. Open the integration record
2. Choose **Dry Run** from the action bar
3. Follow the same steps as above

## Understanding the Dry Run Results Page

The **Dry Run Results** page shows one row per source record, color-coded by outcome.

### Summary Header

The top of the page displays summary counts:

| Count | Description |
| --- | --- |
| **Total Rows** | Total number of rows in the source data |
| **Insert** | Rows that would result in a new BC record |
| **Modify** | Rows that would update an existing BC record |
| **Delete** | Rows that would delete a BC record |
| **Skip** | Rows that were skipped |
| **Error** | Rows that would fail |

### Results Grid

Each row in the grid shows:

| Column | Description |
| --- | --- |
| **Row No.** | The row number in the source data |
| **Action** | The outcome: Insert, Modify, Delete, Skip, or Error |
| **Key Value** | The primary key or match key value for the row |
| **Error Message** | The error message for rows with an Error outcome. Empty for successful rows |

Click on any row to expand the **Field Detail FactBox**, which shows the individual field values that would be written for that row, including any transformations applied.

### Exporting Results

To export the full results for review or sharing:

1. On the **Dry Run Results** page, choose **Export to Excel**
2. An Excel file is generated with all rows, outcomes, and field details
3. Use this file to review results offline or share with a data owner for sign-off

## Interpreting Results

### All Rows Are "Error"

The source file structure likely does not match the integration's field mappings. Check that:

- The column headers in the source file match the **Source Field Name** values in the integration's field mappings
- The file format (delimiter, encoding) matches the integration configuration

### Unexpected "Skip" Rows

Rows may be skipped because:

- A duplicate detection rule identified them as already-existing records with no changes
- A filter or pre-parsing transformation excluded them

Open the field detail for a skipped row to see the reason.

### "Modify" When You Expected "Insert" (or Vice Versa)

This indicates the duplicate detection or match key configuration is finding (or not finding) an existing BC record. Review the **Integration Mappings** to confirm the match key field is correct.

### Proceeding After Review

A Dry Run does not change your integration's state — you can run it as many times as needed. Once you are satisfied with the results:

1. Close the **Dry Run Results** page
2. Run the actual import using the **Import** action on the Integrations page

## See Also

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Validate Data](how-to-data-validation.md)
- [How to Handle Errors](how-to-error-handling.md)
- [How to Use Import Logging](how-to-import-logging.md)
- [How to Preview Imports](how-to-import-preview.md)

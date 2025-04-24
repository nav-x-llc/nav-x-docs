# Page NAV-X Integration Records

When data is imported into Business Central using integrations defined in the *NAV-X Integration Framework*, the data is stored in an intermediate table. The imported data can be reviewed from the [Integrations Page](page-integrations.md) or from the [NAV-X Integrations to Business Central](page-intermediate.md) by clicking on the title of the integration.

The following fields are available on the page.

| Field | Description |
|-|-|
| **Entry No.** | This is the sequential id of each of the imports. Any time data is imported, the imported data has one *Entry No.*. This field is not editable. |
| **Row No.** | Each row or record in the import is assigned a sequential row number. Each row number will equal one record created or updated within Business Central. This field is not editable. |
| **Status** | If the status is *Ready to Process*, the data can be imported. Any row that could not be imported properly, will have the status of *Error*. This field is not editable. |
| **Fields** | Any additional fields shown are the actual imported data fields. They can be changed to ensure that possible errors can be corrected before re-trying to process the data. |

## Actions

### Process Current Record

This will process the import of the current row into Business Central.

### Process All Records

All rows that have the status *Ready to Process* will be imported into Business Central.

### Reprocess Errors

Any rows that are marked as *Error* will be reprocessed.

### Mark as Completed

If an error cannot be solved and the current row should be ignored, then the status can be set to *Completed*.

### Show Error

Displays the error message for the current row.

### Show All

Show all records in the **NAV-X Integration Records**, regardless of their status.

### Show Ready

Show only records that are *Ready to Process*.

### Show Errros Only

Show only records that have an *Error*.

### All Columns Left

The page can display a maximum of fifty fields at once. If the import has more than fifty fields, this action will show the left most columns.

### Column Left

The page can display a maximum of fifty fields at once. If the import has more than fifty fields, this action will show one more column to the left.

### Column Right

The page can display a maximum of fifty fields at once. If the import has more than fifty fields, this action will show one more column to the right.

### All Columns Right

The page can display a maximum of fifty fields at once. If the import has more than fifty fields, this action will show the right most columns.

## See Also

- [Integrations Page](page-integrations.md)
- [NAV-X Integrations to Business Central](page-intermediate.md)

# Page Import Preview

The **Import Preview** page displays a preview of the source file data before committing to a full import. It shows file statistics, a grid of parsed data rows with dynamic column headers, and validation warnings.

**To open:** From the [Integrations page](page-integrations.md), select an integration and click the **Import with Preview** action.

## Overview

The Import Preview page provides a worksheet-style view of your source file data so you can verify columns, data quality, and mappings before proceeding. The page displays:

- **Import statistics** summarizing the file contents
- **Data grid** showing a configurable number of preview rows (controlled by the **Preview Rows** setting on the integration)
- **Validation warnings** highlighting potential issues such as missing required values

Column headers in the data grid are dynamically set based on the integration field definitions. Rows with warnings are highlighted with an attention style. The page supports up to 50 columns.

The page is read-only -- you cannot edit the preview data directly.

## Import Statistics

| Field | Description |
| ------- | ----------- |
| **File Name** | The name of the file being previewed. |
| **Total Data Rows** | The total number of data rows found in the file. |
| **Columns Detected** | The number of columns detected in the file. |
| **Showing Rows** | How many preview rows are displayed in the grid below. |
| **Warnings** | The number of validation warnings detected. Highlighted when warnings exist. |

## Data Grid

The data grid displays one row per source file row, with columns dynamically mapped to integration field definitions:

| Field | Description |
| ------- | ----------- |
| **Row No.** | The row number from the source file. Highlighted when the row has a warning. |
| **Column 1 through Column 50** | Dynamic columns whose headers correspond to the integration field names. Only columns up to the number of defined fields are visible. |

Rows containing missing values for required fields are highlighted with an attention style to draw your attention to potential data quality issues before importing.

## Validation Warnings

The embedded **Preview Warnings** sub-part displays validation errors and data quality warnings detected during the preview analysis.

| Field | Description |
| ------- | ----------- |
| **#** | The warning number. |
| **Warning** | The validation warning message. Displayed with an attention style. |

Warnings are generated from two sources:
- **Validation errors** -- Structural issues detected during file parsing
- **Quality warnings** -- Data quality issues such as missing required field values

## Actions

### Navigation Actions

| Action | Description |
| ------- | ----------- |
| **All Columns Left** | Jump to the left-most column in the data grid. |
| **Column Left** | Shift the visible columns one position to the left. |
| **Column Right** | Shift the visible columns one position to the right. |
| **All Columns Right** | Jump to the right-most column in the data grid. |

These navigation actions are useful when the file contains more columns than can be displayed at once.

### Import Actions

| Action | Description |
| ------- | ----------- |
| **Proceed with Import** | Confirms the preview and proceeds with the full import of the file. |
| **Cancel** | Cancels the import preview and closes the page without importing. |

## See Also

- [How to Use Import Preview](how-to-import-preview.md)
- [Integrations Page](page-integrations.md)
- [Integration Fields Page](page-integration-fields.md)
- [Integration Records Page](page-integration-records.md)
- [Import Logs Page](page-import-logs.md)

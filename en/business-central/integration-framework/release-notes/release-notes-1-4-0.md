# Release Notes for February 2026 Update - Version 1.4.0

## New Features

### Copilot Auto Setup - AI-Powered Integration Configuration

A new **AI-Powered Setup Wizard** allows you to upload a file and optionally describe its purpose. Copilot analyzes the file structure, matches columns to Business Central tables and fields, and generates a complete integration configuration including fields, mappings, value maps, and character replacements for review before saving.

The **File Analysis Engine** automatically detects the file type (Excel, CSV, Text), delimiter type (comma, tab, pipe, semicolon), record delimiters, header rows, column data types, and fixed-width field boundaries with up to 5 sample values per column.

A **BC Metadata Provider** builds AI context from up to 25 relevant Business Central tables (12 default tables plus prompt-matched and column-matched tables) with up to 50 fields and 10 sample primary key values per table. Abbreviation expansion is supported (e.g., "cust" maps to "customer").

The **PromptDialog Page** provides a full Copilot UX with file upload, user prompt, generation, and a review interface showing integration summary, suggested fields (editable), suggested mappings (editable), and any AI validation warnings before confirmation.

**Copilot Telemetry** events are recorded for Setup Created, Generation Failed, and Generation Completed with custom dimensions, and AI client success/failure is logged via the Business Central Feature Telemetry framework.

**Extensibility Events** are provided for customization: `OnBeforeAnalyzeFile`, `OnAfterAnalyzeFile`, `OnGetAdditionalTables`, `OnBeforeGenerateSetupSuggestion`, `OnBeforeCreateSetupFromCopilot`, and `OnAfterCreateSetupFromCopilot`.

### Import Preview Mode

A new **Import with Preview** action on the Integrations page uploads and parses a file, then displays a preview page before importing. Users can inspect data, review warnings, and confirm or cancel.

The **Preview Page** shows a worksheet-style view with up to 50 columns displaying actual field names as column headers, a configurable preview row count (1-100, default 10), and attention styling for rows with missing required fields.

**Preview Warnings** display validation errors and data quality warnings including required field emptiness checks and import validation results.

The file is parsed once during preview; confirming the import passes the already-parsed buffer directly to the import engine without re-uploading.

### Dynamic Field Values

A new **Dynamic** column type is available alongside Standard and Constant that resolves system values at import time without requiring them in the source file.

Six Dynamic Value Types are supported: **Today**, **Work Date**, **Current Time**, **Current Date/Time**, **User ID**, and **Company Name**. These automatically stamp imported records with runtime context.

### Import Logging and Diagnostics

A new structured **two-level import logging** system records every aspect of an import run. Logging can be enabled globally on the Integration Framework Setup page or per-integration.

**Import Log Summary Records** capture one record per import run with integration name, type, direction, execution mode, user, file name, source row/column counts, records created, rows processed/completed/with errors, Business Central records inserted/updated, start/end timestamps, duration, and status.

**Import Log Detail Records** capture one record per field per row per import with the post-pre-parsing value, column type, processing status, error type, and error message for full diagnostic traceability.

Log entries progress through **In Progress**, **Completed**, **Completed with Errors**, and **Failed** statuses with automatic determination based on processing results.

An **Import Logs List Page** provides a read-only list of all import log summaries with color-coded status indicators, accessible from the Integrations page filtered to the selected integration.

**Import Log Export/Import** via XmlPort allows exporting log data to XML for archival and importing into other environments for cross-environment analysis.

**Import Log Retention Policy** is automatically registered with the Business Central retention policy framework with a 3-month default for completed/failed entries and "Never Delete" for in-progress entries.

### Definition Export/Import

**Export Integration Setup** allows you to export one or more selected integration configurations (including all field definitions, character replacements, integration maps, and field value maps) to a versioned XML file.

**Import Integration Setup** imports integration configurations from an XML file with automatic conflict resolution: existing integrations with the same name are updated, new integrations are created with the next available Sorting Order.

**Copy to Company** copies selected integrations directly to another company within the same Business Central environment using a company picker dialog.

**Extensibility Events** are provided: `OnBeforeImportIntegrations` (with IsHandled pattern) and `OnAfterImportIntegrations` for custom import logic.

### Field Pre-Parsing Transformations

New pre-parsing transformations can be applied to field values before they are processed into Business Central:

- **Default Value If Empty** - Specify a fallback value to use when the source field is blank
- **Trim Start/End** - Two trim modes per field: Flexible (trim a specified set of characters) or Fixed (remove exactly N characters)
- **Case Conversion** - Convert field values to Upper Case, Lower Case, or Title Case
- **Padding** - Pad values to a target length with a specified character, either left or right
- **Rounding** - Round decimal values to a specified precision with configurable direction (Nearest, Up, Down)
- **Character Replacements** - Define ordered find-and-replace rules per field for character substitution or removal

Transformations are applied in a defined sequence: default-if-empty, trim start, trim end, character replacements, case conversion, padding (rounding applied separately after multi-record splits).

### Field Mapping and Type Validation

A new **Pre-Import Validation Engine** validates imported data against the integration configuration before any records are created, with four independent checks:

- **Column count validation** - Verifies source columns match configured fields
- **Required field validation** - Checks every row for non-empty values, respecting Default Value If Empty
- **Duplicate mapping detection** - Warns when multiple mappings target the same destination field
- **Type conversion validation** - Verifies first-row values can be evaluated into the expected AL type (Integer, Decimal, Date, Time, DateTime, Boolean, GUID, etc.)

A new **Required** toggle on each integration mapping entry enables per-row validation for non-empty values.

**Setup Validation** allows you to validate the integration configuration without a file to check for duplicate mappings and incomplete field definitions.

### Centralized Feature Telemetry

**Application Insights Integration** provides centralized telemetry logging structured events with custom dimensions for: Integration Created (with feature usage flags), Integration Started, Integration Completed (with row counts), Setup Export/Import, and Post-Processing Failed.

## Resolved Issues

### Batch Results Summary

Processing completion now shows a detailed dialog with total rows, successful rows, field error rows, and record error rows, replacing the previous simple summary.

### Integration Map Primary Key

The Integration Map primary key has been restructured to (`Sorting Order`, `Field Order`, `Field No.`) to allow one source field to map to multiple destinations. Upgrade code automatically migrates existing mappings.

## See Also

- [How to update my extensions](../faq-index.md)

# Release Notes for March 2026 Update - Version 1.5.0

## New Features

### JSON File Import

It is now possible to import data from **JSON files** using the same pipeline as Excel, CSV, and Text imports. The JSON parser supports flat arrays, nested objects up to 5+ levels deep, and automatic type conversion (booleans to "true"/"false", numbers with preserved precision, null to empty).

New **Integration Setup Fields** have been added: `JSON Root Path` (dot-notation path to the root array, e.g., `data.invoices`) and `JSON Sample` (stored blob for field discovery) on the Integration table. Text-specific fields (delimiters, parsing type) are automatically disabled for JSON integrations. Path validation rejects leading/trailing dots, bracket wildcards, and `$` prefixes.

A new **JSON Path** field (Text[250]) on Integration Field supports dot-notation path expressions (e.g., `customer.address.city`). A **JSON Path Lookup** page discovers available paths from the stored sample with sample values.

The **"Suggest Fields from Sample"** action auto-discovers JSON structure, detects the root array path, enumerates all leaf paths, generates human-readable field names, and creates Integration Field records. Re-running does not duplicate existing fields.

### JSON Array Handling

A new `JSON Array Path` field on the Integration table supports child array flattening (e.g., `lines`). A new `JSON Array Mode` enum per field provides three modes:

- **Flatten** - Expand child elements into rows with parent values duplicated
- **Concatenate** - Join values with separator
- **First** - Take first element only

The default for non-array fields is blank.

### JSON Validation

The import validator has been extended with JSON-specific checks: root path resolution against actual file, field path resolution validation, dot-notation syntax validation, empty JSON Path detection for Standard fields, and BOM-prefixed JSON handling.

### JSON Logging

JSON imports are fully integrated with the import logging infrastructure. Integration type is recorded as "Json", source row count reflects post-flattening count, and detail logging captures JSON path resolution per field.

### JSON Setup Export/Import

JSON-specific fields (`JSON Root Path`, `JSON Array Path`, `JSON Sample`, `JSON Path`, `JSON Array Mode`) are included in setup export/import XmlPorts and Copy to Company. The format is backward-compatible with pre-JSON definitions.

### JSON Preview Mode

Import Preview Mode works with JSON files, displaying first N rows of parsed data with nested object paths resolved, array flattening visible, and missing/null paths clearly indicated.

### Copilot Auto Setup: JSON File Support

The **Copilot file analysis engine** has been extended to detect `.json` files, auto-discover root array path, enumerate dot-notation field paths, extract sample values, and detect nested arrays.

The **AI system prompt** has been extended with JSON-specific rules for dot-notation paths, root/array path configuration, and `jsonArrayMode` handling. The output schema includes `jsonRootPath`, `jsonArrayPath`, `jsonPath`, and `jsonArrayMode` fields.

The **response parser** extracts JSON-specific fields from AI responses into temporary Integration Field records, and the **setup creator** persists JSON Root Path, JSON Array Path, JSON Path, JSON Array Mode, and stores the uploaded file as JSON Sample.

### Copilot Improvements

A new **Regenerate** button on the Copilot Auto Setup PromptDialog page allows users to re-analyze the file and generate new suggestions without closing and reopening the dialog.

**Constant Value Support** has been added to the AI prompt schema and response parser for Constant fields. A Constant Value column has been added to the Suggested Fields subpage.

A new **Response Post-Processor** deterministically adds missing required fields for document imports (Sales Header/Line, Purchase Header/Line): Document Type constant, Type ("Item") constant, Line No. (LineNumbers), and System-Created Entry constant. Fields are added grouped by table with primary key fields first.

**Business-Critical Field Warnings** validate that customer/vendor number, item number, and quantity are mapped for document imports and surface warnings if missing.

## Resolved Issues

### On-Premise JSON Import Crash

Fixed a `NavNclTryFunctionWriteException` that occurred when importing JSON files (or any file type) on on-premise Business Central installations. The root cause was `[TryFunction]` wrapping write transactions (INSERT/MODIFY), which is prohibited on-premise. The import error handling has been replaced with `Codeunit.Run()` return values and a wrapper codeunit (`IFImportBufferRunner`).

### Delete Integration Confirmation

Deleting an integration now prompts with two warnings: one if there are unprocessed records (not Completed/Error), and one confirming that all existing records will be deleted. Previously, integrations could be deleted without adequate confirmation.

### Constant Field Validation

Three-point validation has been added for Constant fields with empty values:

- Import validator checks mapped Constant fields for empty Constant Value before import
- Integration Field table prevents clearing Constant Value when active mappings exist
- Integration Map table prevents mapping a Constant field that has no value set

## See Also

- [How to update my extensions](../faq-index.md)

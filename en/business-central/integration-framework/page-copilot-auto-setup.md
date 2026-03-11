# Page Copilot Auto Setup

The **Suggest Integration Setup with Copilot** page is an AI-powered PromptDialog that analyzes an uploaded file and generates a complete integration setup suggestion, including fields, mappings, value maps, and character replacements.

**To open:** From the [Integrations page](page-integrations.md), click the **Suggest Integration Setup** action.

## Overview

The Copilot Auto Setup page guides you through a three-step workflow:

1. **Attach** a file (Excel, CSV, Text, or JSON) and describe its contents
2. **Generate** suggestions using AI analysis
3. **Review and confirm** the suggested fields and mappings, or discard them

The AI analyzes your file structure, detects column names and data types, matches them to Business Central tables and fields, and produces a ready-to-use integration configuration. You can edit any part of the suggestion before confirming.

> **Note:** This feature requires the Integration Framework Auto Setup capability to be enabled in **Copilot & AI Capabilities**. The feature is marked as a preview.

## Prompt Area

| Field | Description |
| ------- | ----------- |
| **Describe the file** | A text description of what the file contains, e.g., "Customer master data" or "Sales orders mapping to Sales Header and Sales Line". Providing a detailed description improves the accuracy of the AI suggestions. |
| **Uploaded file** | Shows the name of the uploaded file. Read-only. Visible after a file has been attached. |

## Suggestion Summary

After generation, the following summary fields are displayed:

| Field | Description |
| ------- | ----------- |
| **Integration Name** | The suggested name for the integration setup. Editable before confirming. |
| **Description** | The suggested description for the integration setup. Editable before confirming. |
| **Integration Type** | The detected file type (Excel, CSV, Text, or JSON). Read-only. |
| **Field Delimiter** | The detected field delimiter (e.g., Comma, Tab, Pipe). Read-only. Visible for non-JSON files. |
| **Record Delimiter** | The detected record delimiter (e.g., LF, CR, CRLF). Read-only. Visible for non-JSON files. |
| **JSON Root Path** | The dot-notation path to the root array in the JSON file. Editable. Visible for JSON files only. |
| **Root Array Count** | The number of elements in the root JSON array. Read-only. Visible for JSON files only. |
| **Column Count** | The number of columns detected in the file. Read-only. Visible for non-JSON files. |

### Warnings

If the AI analysis produces validation warnings (such as invalid table or field references), they are displayed in the **AI Validation Warnings** field.

## Suggested Fields

The Suggested Fields sub-part displays the AI-generated field definitions in an editable list. Each field represents a column or value to extract from the source file.

| Field | Description |
| ------- | ----------- |
| **Field No.** | The field number for this integration field. |
| **Name** | The name of the integration field. |
| **Source Column** | The source column in the file (e.g., A, B, C for Excel or 1, 2, 3 for CSV/Text). Visible for non-JSON files. |
| **JSON Path** | The dot-notation JSON path to the field value (e.g., `customer.name`). Visible for JSON files. |
| **JSON Array Mode** | How child array fields are handled: Flatten, Concatenate, or First. Visible for JSON files. |
| **Column Type** | The column type: Standard (from file), Constant (fixed value), or Dynamic (system value). |
| **Constant Value** | The fixed value for Constant column type fields. |
| **Trim Start Mode** | How to trim characters from the beginning of the value. |
| **Trim End Mode** | How to trim characters from the end of the value. |
| **Case Conversion** | The case conversion to apply: None, Upper Case, Lower Case, or Title Case. |
| **Default Value If Empty** | A default value to use when the source value is empty. |

You can edit any of these fields before confirming the suggestion.

## Suggested Mappings

The Suggested Mappings sub-part displays the AI-generated field-to-table mappings in an editable list. Each mapping connects an integration field to a Business Central destination table and field.

| Field | Description |
| ------- | ----------- |
| **Field No.** | The integration field number this mapping applies to. |
| **Field Name** | The name of the integration field. Read-only. |
| **Destination Table No.** | The destination table number in Business Central. |
| **Destination Table Name** | The name of the destination table. Read-only. |
| **Destination Field No.** | The destination field number in the target table. |
| **Destination Field Name** | The name of the destination field. Read-only. |
| **Validate** | Whether the field should be validated when assigned. |
| **Create New Document** | Whether to create a new document when this field is encountered. |
| **Required** | Whether this field mapping is required. |

You can edit any of these fields before confirming the suggestion.

## Developer Setup

The **Copilot Dev Setup** page is a development-only administration page (not available in production builds) for configuring Azure OpenAI credentials used by the Copilot feature during development and testing.

| Field | Description |
| ------- | ----------- |
| **Endpoint** | The Azure OpenAI endpoint URL (e.g., `https://your-resource.openai.azure.com/`). |
| **Deployment** | The Azure OpenAI deployment name (e.g., `gpt-4o`). |
| **API Key** | The API key for accessing the Azure OpenAI service. Masked input. |

**Actions:**

- **Save** -- Saves the Azure OpenAI credentials to Isolated Storage.
- **Clear** -- Removes the Azure OpenAI credentials from Isolated Storage.

> **Note:** This page is only available in non-production builds and is intended for developers testing the Copilot integration.

## Actions

### Attach File

Uploads an Excel, CSV, Text, or JSON file for AI analysis.

### Generate

Analyzes the uploaded file and generates integration setup suggestions using AI. Requires that a file has been attached and that the Copilot capability is active.

### Regenerate

Re-analyzes the file and generates new suggestions. Useful if you modify the description and want updated results.

### Confirm

Creates the integration setup from the current suggestions, including all fields, mappings, value maps, and character replacements.

### Discard

Closes the dialog without creating anything.

## See Also

- [How to Use Copilot to Suggest Integration Setup](how-to-copilot-setup.md)
- [Integrations Page](page-integrations.md)
- [Integration Fields Page](page-integration-fields.md)
- [Integration Mappings Page](page-integration-mappings.md)

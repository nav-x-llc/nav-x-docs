# How to Use Copilot to Suggest Integration Setup

This guide explains how to use the AI-powered Copilot feature to automatically generate a complete integration configuration from a sample file.

## What is Copilot Auto Setup?

Copilot Auto Setup uses artificial intelligence to analyze an uploaded file and suggest a complete integration setup. Instead of manually configuring fields, mappings, and value translations, you upload a file, optionally describe its purpose, and Copilot generates the entire configuration for you to review and confirm.

Copilot supports all file types: **Excel**, **CSV**, **Text**, and **JSON**.

## Prerequisites

Before using Copilot Auto Setup, ensure:

1. The **Integration Framework Auto Setup** capability is enabled in **Copilot & AI Capabilities** in Business Central
2. You have the **NAVX IF ALL** permission set assigned
3. You have a sample file ready for upload

## How Copilot Auto Setup Works

```text
User uploads a file and describes it
    |
Copilot analyzes file structure
    |
AI matches columns to BC tables and fields
    |
Copilot generates fields, mappings, and value maps
    |
Post-processor adds missing required fields
    |
User reviews and edits suggestions
    |
User confirms to create the integration
```

## Step-by-Step Guide

### Step 1: Open the Copilot Auto Setup

On the **Integrations** page, choose the **Suggest Integration Setup** action in the prompting area. This action has a sparkle icon indicating it is an AI-powered feature.

### Step 2: Upload a File

In the Copilot dialog, choose the **Attach File** action to upload a sample file. Supported file types are:

- Excel files (.xlsx, .xls)
- CSV files (.csv)
- Text files (.txt, .dat)
- JSON files (.json)

The uploaded file name will appear in the dialog once selected.

### Step 3: Describe the File (Optional but Recommended)

In the **Describe the file** field, enter a description of what the file contains. This helps Copilot make better suggestions. Examples:

- "Customer master data with customer numbers, names, and addresses"
- "Sales orders mapping to Sales Header and Sales Line"
- "Vendor invoices with line items"
- "Inventory items with quantities and locations"

The more specific your description, the better the AI can match your data to the correct Business Central tables and fields.

### Step 4: Generate Suggestions

Choose the **Generate** action. Copilot will:

1. **Analyze the file** - Detect file type, delimiters, headers, column data types, and sample values
2. **Build BC metadata context** - Gather relevant Business Central table and field information (up to 25 tables with up to 50 fields each)
3. **Send to AI** - Submit the file analysis and BC metadata to the AI engine
4. **Parse the response** - Convert the AI suggestions into integration field and mapping records
5. **Post-process** - Add any missing required fields for document imports (e.g., Document Type, Line No.)

### Step 5: Review the Suggestion Summary

After generation, the dialog displays a **Suggestion Summary** with:

|Field|Description|
|-|-|
|**Integration Name**|The suggested name for the integration. You can edit this.|
|**Description**|The suggested description. You can edit this.|
|**Integration Type**|The detected file type (Excel, CSV, Text, or JSON). Read-only.|
|**Field Delimiter**|The detected field delimiter (e.g., Comma, Tab, Pipe). Visible for non-JSON files.|
|**Record Delimiter**|The detected record delimiter (e.g., LF, CR, CRLF). Visible for non-JSON files.|
|**JSON Root Path**|The dot-notation path to the root array. Visible for JSON files. You can edit this.|
|**Root Array Count**|The number of elements in the root JSON array. Visible for JSON files.|
|**Column Count**|The number of columns detected in the file. Visible for non-JSON files.|

### Step 6: Review Suggested Fields

The **Suggested Fields** section shows the integration fields that Copilot suggests creating. Each row represents a source column from your file. You can review and edit:

- Field number and name
- Column type (Standard, Constant, Dynamic)
- Constant values for fields that should always have the same value
- JSON Path for JSON files

For document imports (e.g., Sales Orders), the post-processor automatically adds required fields like **Document Type** (as a Constant), **Type** (as a Constant set to "Item"), **Line No.** (as Line Numbers), and **System-Created Entry** (as a Constant).

### Step 7: Review Suggested Mappings

The **Suggested Mappings** section shows how each field maps to a Business Central table and field. You can review and edit:

- Source field number and name
- Destination table and field
- Whether validation is enabled
- Whether the field creates a new document

### Step 8: Review Warnings

If Copilot detected any issues, they appear in the **Warnings** section. Common warnings include:

- Invalid table or field references that were skipped
- Missing critical mappings (customer/vendor number, item number, quantity)
- Fields that could not be matched to any BC table

### Step 9: Confirm or Discard

- Choose **Confirm** to create the integration with all suggested fields, mappings, value maps, and character replacements
- Choose **Discard** to close without creating anything

After confirmation, the new integration appears on the Integrations page and is ready for use.

### Step 10: Regenerate (Optional)

If the suggestions are not satisfactory, choose the **Regenerate** action to re-analyze the file and generate new suggestions without closing the dialog. You can modify your description before regenerating to guide the AI toward better results.

## Copilot with JSON Files

When you upload a JSON file, Copilot provides additional capabilities:

- **Automatic root array detection** - Copilot detects the path to the root data array
- **Dot-notation field paths** - Fields are mapped using JSON paths like `customer.address.city`
- **Array mode detection** - Nested arrays are identified with appropriate flatten/concatenate modes
- **JSON Sample storage** - The uploaded file is stored as a JSON Sample on the integration record for future field discovery

## What Copilot Creates

When you confirm the suggestions, Copilot creates:

1. **Integration record** - With name, description, type, direction, delimiters, and JSON paths
2. **Integration fields** - One per source column, with appropriate column types and constant values
3. **Integration mappings** - Linking each field to a BC destination table and field
4. **Field value maps** - Any value translation rules suggested by the AI
5. **Character replacements** - Any find-and-replace rules for data cleaning

## Tips for Better Results

- **Be specific in your description** - Mention the Business Central tables you want to target (e.g., "Sales Header and Sales Line" rather than just "sales orders")
- **Use meaningful column headers** - Files with descriptive headers produce better results
- **Include representative data** - Ensure your sample file contains realistic data values
- **Review mappings carefully** - While Copilot is accurate, always verify the destination tables and fields match your requirements
- **Iterate if needed** - Use the Regenerate button with a modified description if the first suggestion misses the mark

## Business-Critical Field Warnings

For document imports (Sales Header/Line, Purchase Header/Line), Copilot validates that critical fields are mapped:

- **Customer/Vendor Number** - Required for document creation
- **Item Number** - Required for line items
- **Quantity** - Required for line items

If these fields are not mapped, Copilot surfaces a warning so you can address the gap before confirming.

## Troubleshooting

### "Enable the Integration Framework Auto Setup capability" Error

The Copilot capability has not been enabled. Go to **Copilot & AI Capabilities** in Business Central and enable **Integration Framework Auto Setup**.

### "Please upload a file before generating" Error

You must attach a file before choosing Generate. Use the **Attach File** action first.

### "The AI could not determine appropriate mappings"

The AI could not match your file columns to BC fields. Try providing a more detailed description mentioning specific BC tables and fields.

### "The AI response could not be interpreted"

The AI returned an unexpected response. Try again, or modify your description to be more specific.

### Few or No Mappings Suggested

If Copilot suggests fields but no mappings, your column names may not match any known BC fields. Add a description like "Map to Customer table fields Name, Address, City, Post Code" to guide the AI.

## See Also

- [Integrations](page-integrations.md)
- [Integration Fields](page-integration-fields.md)
- [Integration Mappings](page-integration-mappings.md)
- [How to Import from JSON Files](how-to-json-import.md)
- [How to Import from Excel Files](how-to-excel-import.md)
- [How to Import from CSV Files](how-to-csv-import.md)

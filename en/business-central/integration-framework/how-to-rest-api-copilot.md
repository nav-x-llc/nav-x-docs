# How to Use Copilot for REST API Setup

This guide explains how to use the AI-powered Copilot feature to automatically generate integration configurations for REST API integrations. Copilot analyzes a sample file (such as a JSON response from your API) and suggests a complete integration setup including fields, mappings, and value translations.

## What Copilot Can Do for REST API Setup

When setting up a REST API integration, you typically need to:

1. Define integration fields that match the JSON response structure
2. Create mappings from those fields to Business Central tables and fields
3. Configure value translations where external values differ from BC values
4. Set up JSON root paths for nested response structures

Copilot automates all of these steps. You provide a sample JSON response from your API, describe what it contains, and Copilot generates the entire field and mapping configuration for you to review and confirm.

This is especially useful for REST API integrations because:

- API responses can have deeply nested JSON structures that are time-consuming to map manually
- Field names in external APIs often differ from Business Central field names
- Copilot can detect JSON root paths and dot-notation field paths automatically

## Prerequisites

Before using Copilot for REST API setup, ensure:

1. The **Integration Framework Auto Setup** capability is enabled in **Copilot & AI Capabilities** in Business Central
2. You have the **NAVX IF ALL** permission set assigned
3. You have a sample JSON response file from your API saved locally

To verify Copilot is enabled:

1. Choose **Tell me** and search for **Copilot & AI Capabilities**
2. Find **Integration Framework Auto Setup** in the list
3. Ensure it is set to **Active**

## Step-by-Step Guide

### Step 1: Save a Sample API Response

Before starting, capture a sample response from your REST API. You can do this by:

- Calling the API from a tool like Postman and saving the response as a `.json` file
- Downloading a sample response from your API provider's documentation
- Using the browser developer tools to capture a live response

The sample should contain representative data, including at least a few records, so Copilot can accurately detect the structure.

### Step 2: Open Copilot Auto Setup

1. Navigate to the **Integrations** page
2. Choose the **Suggest Integration Setup** action in the prompting area (indicated by a sparkle icon)

### Step 3: Upload the JSON Response File

1. In the Copilot dialog, choose the **Attach File** action
2. Select your saved JSON response file (`.json`)
3. The file name appears in the dialog after upload

### Step 4: Describe the Data

In the **Describe the file** field, provide a description that helps Copilot understand the data and make better mapping suggestions. Be specific about the Business Central tables you want to target.

**Examples for REST API integrations:**

- "Shopify orders mapping to Sales Header and Sales Line with customer lookup"
- "Customer records from CRM system mapping to Customer table"
- "Product catalog with prices mapping to Item table"
- "Vendor invoices with line items mapping to Purchase Header and Purchase Line"

The more specific your description, the better the AI can match JSON fields to the correct Business Central tables and fields.

### Step 5: Generate Suggestions

Choose the **Generate** action. Copilot will:

1. **Analyze the JSON structure** - Detect the root array, nested objects, field names, data types, and sample values
2. **Detect JSON root path** - Identify the dot-notation path to the data array (e.g., `data.orders`)
3. **Build BC metadata context** - Gather relevant Business Central table and field information based on your description
4. **Send to AI** - Submit the analysis and metadata to the AI engine
5. **Parse the response** - Convert AI suggestions into integration field and mapping records
6. **Post-process** - Add any missing required fields for document imports

### Step 6: Review the Suggestion Summary

After generation, review the summary:

|Field|Description|
|-|-|
|**Integration Name**|The suggested name. Editable.|
|**Description**|The suggested description. Editable.|
|**Integration Type**|Detected as JSON for REST API responses. Read-only.|
|**JSON Root Path**|The detected path to the root data array. Editable.|
|**Root Array Count**|The number of elements in the root array. Read-only.|

For REST API integrations, pay special attention to the **JSON Root Path**. This value determines which part of the API response contains the data records. If Copilot detects the wrong path, edit it before confirming.

### Step 7: Review Suggested Fields

The **Suggested Fields** section shows one row per detected JSON field. For REST API integrations, fields use JSON dot-notation paths (e.g., `customer.address.city`). Review and edit:

- Field number and name
- Column type (Standard, Constant, Dynamic)
- JSON Path for each field
- Constant values for fields that should always have the same value

### Step 8: Review Suggested Mappings

The **Suggested Mappings** section shows how each JSON field maps to a Business Central table and field. Review:

- Source field name and number
- Destination table and field
- Whether validation is enabled
- Whether the field creates a new document (for header/line structures)

### Step 9: Confirm or Discard

- Choose **Confirm** to create the integration with all suggested fields, mappings, value maps, and character replacements
- Choose **Discard** to close without creating anything

After confirmation, the new integration appears on the Integrations page. You then need to:

1. Set the **Integration Type** to **REST API** (if not already set)
2. Configure the REST API Connection and Endpoint separately
3. The fields and mappings created by Copilot are ready to use with the API response data

### Step 10: Regenerate If Needed

If the suggestions miss the mark, choose **Regenerate** to re-analyze the file. You can modify your description before regenerating to guide the AI toward better results.

## Multi-Endpoint Batch Sync Selection

When your REST API integration involves multiple endpoints (e.g., orders and line items from separate endpoints, or data from multiple API sources), you can use Copilot to set up the field and mapping configuration for each endpoint separately:

1. **Save a sample response for each endpoint** as a separate JSON file
2. **Run Copilot Auto Setup for the primary endpoint** first (e.g., order headers)
3. **Run Copilot Auto Setup for secondary endpoints** (e.g., line items), adjusting the description to target the correct BC tables
4. **Configure endpoint chaining or aggregation** to link the endpoints together (see [How to Set Up REST API Sync Protocol](how-to-rest-api-sync-protocol.md))

This workflow lets you use AI to generate the field configuration for each piece of a complex multi-step integration.

## Reviewing and Confirming AI Suggestions

When reviewing Copilot suggestions for REST API integrations, pay special attention to:

### JSON Path Accuracy

Verify that the JSON paths match the actual API response structure. Nested paths like `order.customer.email` must exactly match the response.

### Document Structure Detection

For header/line imports, ensure Copilot correctly identified:

- Which fields map to the header table (e.g., Sales Header)
- Which fields map to the line table (e.g., Sales Line)
- Which field triggers new document creation

### Value Translations

Check if Copilot suggested appropriate value maps for fields where the API uses different values than Business Central (e.g., order status codes, payment method identifiers).

### Required Fields

For document imports, Copilot automatically adds required fields such as:

- **Document Type** as a Constant
- **Type** as a Constant (set to "Item" for line items)
- **Line No.** as Line Numbers
- **System-Created Entry** as a Constant

Verify these are present and correct for your import scenario.

## Tips for Better Results with REST API Data

- **Use a complete sample response** - Include nested objects, arrays, and representative values
- **Mention specific BC tables** - "Map to Sales Header and Sales Line" produces better results than "sales orders"
- **Include the API source** - "Shopify order data" or "HubSpot contact records" helps the AI understand common field naming patterns
- **Iterate with different descriptions** - If the first result does not match, try a more detailed or different description

## Troubleshooting

### Copilot Does Not Detect JSON Root Path

If the root array is deeply nested, Copilot may not detect the path. Manually edit the **JSON Root Path** field in the suggestion summary.

### Fields Missing from Suggestions

If some JSON fields are not included in the suggestions, they may have been filtered out because the AI could not match them to any BC field. After confirming, you can manually add additional fields to the integration.

### "Enable the Integration Framework Auto Setup capability" Error

The Copilot capability is not active. Go to **Copilot & AI Capabilities** and enable **Integration Framework Auto Setup**.

## See Also

- [How to Use Copilot to Suggest Integration Setup](how-to-copilot-setup.md)
- [How to Set Up REST API Webhooks](how-to-rest-api-webhooks.md)
- [How to Set Up REST API GraphQL Queries](how-to-rest-api-graphql.md)
- [How to Set Up REST API Sync Protocol](how-to-rest-api-sync-protocol.md)
- [How to Import from JSON Files](how-to-json-import.md)

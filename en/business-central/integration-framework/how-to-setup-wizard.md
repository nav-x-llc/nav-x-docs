# How to Use the Integration Setup Wizard

This guide explains how to use the Integration Setup Wizard to create a new integration step-by-step without having to manually configure all pages. The wizard guides you through source configuration, field discovery, mapping, and scheduling in a single guided flow.

## What Is the Integration Setup Wizard?

The Integration Setup Wizard is a 7-step guided assistant that creates a fully configured integration from scratch. It supports both file-based integrations (Excel, CSV, JSON, XML, text) and REST API integrations.

The wizard handles:

- Naming and typing the integration
- Connecting to the data source (uploading a file or selecting a REST API connection)
- Automatically discovering the fields available in the source data
- Suggesting field-to-BC-table mappings using the [Auto-Map Engine](how-to-auto-mapping.md)
- Previewing and adjusting mappings before saving
- Optionally configuring a recurring schedule

**When to use the wizard vs. manual configuration:**

Use the wizard when creating a brand new integration from scratch — it is faster and reduces configuration errors. Use manual configuration when making targeted changes to an existing integration or when building advanced configurations (chained endpoints, conditional routing, complex transformations) that go beyond what the wizard covers.

## Prerequisites

- You have the **NAVX IF ALL** permission set
- For REST API integrations: you have a REST API connection configured (see [How to Configure REST API Authentication](how-to-rest-api-authentication.md))
- For file-based integrations: you have a sample source file available

## Starting the Wizard

1. Open the **Integrations** page (search for **NAVX IF Integrations** in Tell Me)
2. Choose **New Integration** > **Use Setup Wizard** from the action bar
3. The **Integration Setup Wizard** opens at Step 1

## Step 1: Welcome

The welcome step introduces the wizard and shows an overview of the steps. No configuration is required here.

Choose **Next** to proceed.

## Step 2: Basics

Configure the fundamental properties of the new integration.

| Field | Description |
| --- | --- |
| **Integration Code** | A unique code for the integration (e.g., `CUST-IMPORT`, `ITEM-SYNC`) |
| **Description** | A descriptive name (e.g., "Customer import from ERP") |
| **Integration Type** | **Import** (data flows into BC) or **Export** (data flows out of BC) |
| **Source Type** | The format of the data: **Excel**, **CSV**, **JSON**, **XML**, **Fixed Text**, **Flexible Text**, or **REST API** |
| **Target Table** | The Business Central table that records are written to or read from (e.g., `Customer`, `Item`, `Sales Header`) |

Choose **Next** to proceed to source configuration. The next step differs based on the **Source Type** you selected.

## Step 3a: File Source Configuration (File-Based Integrations)

This step appears when **Source Type** is Excel, CSV, JSON, XML, or a text format.

1. Choose **Upload Sample File** and select a representative sample file from your data source
2. The wizard reads the file and detects:
   - For Excel: the worksheet names and column headers
   - For CSV/Text: the delimiter and column headers
   - For JSON/XML: the root data path and field names
3. Review the detected settings:

   | Field | Description |
   | --- | --- |
   | **Detected Format** | Confirmation of the file format detected |
   | **Data Start Row** | The row where data begins (for Excel/CSV — typically row 2 if row 1 has headers) |
   | **Header Row** | The row containing column headers |
   | **Delimiter** | The column separator detected (for CSV) |
   | **Root Data Path** | The JSON/XML path to the data array (for JSON/XML) |

4. Adjust any detected values if needed, then choose **Next**

## Step 3b: REST API Configuration (REST API Integrations)

This step appears when **Source Type** is **REST API**.

| Field | Description |
| --- | --- |
| **Connection Code** | Select the REST API connection to use. Choose **New Connection** to create one now |
| **Resource Path** | The API endpoint path (e.g., `/api/v1/customers`) |
| **Response Data Path** | The JSON path to the data array in the response (e.g., `data`, `items`, `value`) |
| **HTTP Method** | **GET** (for imports) or **POST** (for exports or when the API requires a request body) |

After entering the endpoint, choose **Test & Discover**:

- The wizard makes a live API call and parses the response
- It displays the fields found in the first response record
- If the call fails, check the connection code and resource path

Choose **Next** to proceed to field discovery.

## Step 4: Field Discovery

The wizard displays all fields detected in the source data and lets you select which ones to include in the integration.

- **Detected Fields** lists every field found in the sample file or API response
- Check the box next to each field you want to map
- Use **Select All** to include all detected fields

The wizard carries the selected fields into Step 5 for mapping.

Choose **Next** to proceed.

## Step 5: Mapping

The wizard uses the [Auto-Map Engine](how-to-auto-mapping.md) to suggest a mapping for each selected field to a field in the target BC table.

### Reading the Mapping Grid

| Column | Description |
| --- | --- |
| **Source Field** | The field name from the source data |
| **Target Field** | The suggested BC table field to map to |
| **Confidence** | A color-coded confidence indicator for the auto-mapping suggestion |
| **Action** | **Accept**, **Change**, or **Skip** the suggested mapping |

### Confidence Color Coding

| Color | Meaning |
| --- | --- |
| Green | High confidence — exact or near-exact name match |
| Yellow | Medium confidence — partial match or abbreviation match |
| Red | Low confidence — weak match; review before accepting |
| Gray | No suggestion found; the field is unmapped |

### Adjusting Mappings

- To **accept** a suggestion as-is, leave the row unchanged (accepted by default for green/yellow)
- To **change** a mapping, click the **Target Field** and select a different BC table field from the lookup
- To **skip** a field and not include it in the integration, choose **Skip** for that row

You can change any mapping at any time after the wizard completes by editing the integration's fields manually.

Choose **Next** to proceed.

## Step 6: Scheduling

Configure a recurring schedule to run the integration automatically.

| Field | Description |
| --- | --- |
| **Enable Scheduling** | Turn on to create a Job Queue entry for this integration |
| **Run Every** | The interval between runs: minutes, hours, or days |
| **First Run** | The date and time of the first scheduled run |
| **Job Queue Category** | Optional Job Queue category to group this integration's task |

If you do not want to schedule the integration now, leave **Enable Scheduling** off — you can always configure it later from the integration record.

Choose **Next** to proceed to the review step.

## Step 7: Review and Create

The final step displays a summary of all the settings configured in the wizard:

- Integration code, description, type, and source type
- Target table
- Number of field mappings
- Scheduling configuration (if enabled)

Review the summary. If anything needs to be changed, use the **Back** button to return to the relevant step.

When ready, choose **Create Integration** — the wizard creates the integration with all configured settings and closes.

## After the Wizard

The new integration opens automatically on the **Integration Card**. From here you can:

- Review and refine field mappings on the **Integration Fields** page
- Add [transformation rules](how-to-pre-parsing-transformations.md), [validation rules](how-to-validation-rules.md), or [value maps](how-to-field-value-mapping.md)
- Run a [Dry Run](how-to-dry-run.md) to validate the configuration before running live
- Configure advanced features such as [post-processing](how-to-post-processing.md) or [error handling](how-to-error-handling.md)

## See Also

- [Getting Started](getting-started.md)
- [How to Use Copilot Auto Setup](how-to-copilot-setup.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Use Dry Run](how-to-dry-run.md)
- [Integration Setup Wizard Page](page-setup-wizard.md)

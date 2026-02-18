# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Prerequisites

Before setting up your first integration, ensure you have:

- **Appropriate permissions** - See [Permission Setups](permission-setups.md) for your user role
- **Source data prepared** - Have your import file ready (Excel, CSV, or text format)
- **Destination tables identified** - Know which Business Central table you're importing into
- **Field mapping planned** - Document which source fields map to which BC fields

## Permission Setup

Permissions for the app must be setup before the NAV-X Integration Framework can be used to ensure that users can access the setup and also use the functionality properly once setup is completed.

Two permission sets are provided:

- **NAVX IF STANDARD** - Use integrations, view records, process imports
- **NAVX IF ALL** - Full access including setup and configuration

You can find more information under [Permission Setups](permission-setups.md).

## Step-by-Step Setup Process

### Step 1: Initial Setup

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **NAV-X Integration Setups**, and then choose the related link.

[!include[eula](../includes/eula.md)]

This setup page allows you to configure general integration behaviors including:

- Default email for error notifications
- Default file locations
- Integration processing settings

Read more details about the [NAV-X Integration Setup page](page-integration-setup.md).

### Step 2: Create an Integration

To setup your first integration, open the page **NAV-X Integrations**. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **NAV-X Integrations**, and then choose the related link.

On this page you configure:

- **Integration Name** - Descriptive name for your integration
- **Integration Type** - The BC table you're importing into (Customer, Item, Sales Order, etc.)
- **Source Type** - The file format (Excel, CSV, Flexible Text, Fixed Length Text)
- **File Path** - Where your import file is located (optional, for automated processing)

Read more details about the [NAV-X Integrations page](page-integrations.md).

### Step 3: Define Integration Fields

To use an integration, you must define fields that are being integrated.

1. From the *NAV-X Integrations* page, click **Fields** action in the action bar
2. Create a row for each field from your source

Fields to define:

- **Field Name** - Name of field from your source (column header, field name, etc.)
- **Sequence** - Order of processing (10, 20, 30...)
- **Source Column** - Which column/position contains this data

Read more details about the [Integration Fields page](page-integration-fields.md).

### Step 4: Map Fields to Business Central

Once fields are defined, map them to your Business Central table.

1. From the *NAV-X Integrations* page, click **Mappings** action
2. Create a mapping row for each field you want to import
3. Configure each mapping:

**For each mapping, specify:**

- **Integration Field** - The source field (created in Step 3)
- **Destination Table** - The BC table field destination
- **Mapping Type** - How to populate:
  - **Standard** - Copy source value as-is
  - **Constant** - Use fixed value for all records
  - **Line Number** - Auto-generate sequential numbers
  - **Lookup** - Translate source codes to BC codes

**For lookup mappings, specify:**

- **Lookup Table** - Which BC table contains the reference data
- **Lookup Field** - Field to search in (e.g., "Your Reference")
- **Return Field** - Field to extract result (e.g., "No.")

**Enable validation:**

- **Validate Destination Field** - Verify data against BC rules before import

Read more details about the [Integration Mappings page](page-integration-mappings.md).

**The integration is now configured and ready to use.**

## Processing Your First Import

### Method 1: Manual Import

1. Click **Import Now** from Integration page
2. Select your source file
3. System validates file and creates Integration Records
4. Records show Status = "Ready"
5. Click **Process Records** to import data into BC

### Method 2: Automated Import

1. Set **File Path** on Integration
2. Create Job Queue Entry to run automatically
3. File automatically imported on schedule

## Monitoring and Troubleshooting

### View Import Status

1. Open Integration record
2. Click **Records** in related records section
3. View Status for each record:
   - **Completed** = Successfully imported
   - **Error** = Failed - review error message
   - **Ready** = Waiting to process

### Handle Errors

1. Review error records to identify issues
2. Fix issues (in source data or BC reference tables)
3. Set record Status back to "Ready"
4. Click **Reprocess Errors**

See [How to Handle Errors](how-to-error-handling.md) for detailed recovery procedures.

## Next Steps - How To Guides

Now that you've set up your first integration, explore these detailed guides:

**Import Formats:**

- [How to Import Excel Files](how-to-excel-import.md)
- [How to Import CSV Files](how-to-csv-import.md)
- [How to Import Flexible-Length Text](how-to-flexible-text-import.md)
- [How to Import Fixed-Length Text](how-to-fixed-length-text-import.md)

**Advanced Features:**

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Use Field Lookups](how-to-field-value-mapping.md)
- [How to Validate Data](how-to-data-validation.md)
- [How to Handle Errors](how-to-error-handling.md)
- [How to Import Sales Documents](how-to-sales-documents.md)

**Reference:**

- [Permission Setups](permission-setups.md) - User role configuration
- [FAQ](faq-index.md) - Common questions and answers

## Summary

You've now learned how to:

1. ✓ Set up initial configuration
2. ✓ Create an integration
3. ✓ Define fields
4. ✓ Map fields to BC tables
5. ✓ Process your first import

Continue with the how-to guides above to explore specific import formats and advanced features.

## See Also

- [NAV-X Integration Setup page](page-integration-setup.md)
- [NAV-X Integrations page](page-integrations.md)
- [Integration Fields page](page-integration-fields.md)
- [Integration Mappings page](page-integration-mappings.md)
- [Permission Setups](permission-setups.md)
- [FAQ](faq-index.md)

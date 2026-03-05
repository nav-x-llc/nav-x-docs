# How to Export and Import Integration Definitions

This guide explains how to transfer integration configurations between environments using Definition Export/Import, and how to copy configurations to other companies within the same environment.

## What is Definition Export/Import?

Definition Export/Import allows you to **transfer complete integration configurations between Business Central environments**. You can export an integration setup from one environment (e.g., a sandbox) and import it into another (e.g., production), preserving all field definitions, mappings, value maps, and character replacements.

**Key Difference:**

- **Export/Import Setup:** Transfer configurations between different environments via XML file
- **Copy to Company:** Duplicate configurations to another company within the same environment

## When to Use Each Method

### Use Export/Import Setup When

- Moving configurations from sandbox to production
- Sharing integration setups between separate Business Central tenants
- Creating backups of integration configurations
- Distributing standard integration templates to multiple environments
- Migrating configurations during environment upgrades

### Use Copy to Company When

- Multiple companies in the same environment need the same integration
- Setting up a new company that should mirror existing integrations
- Replicating configurations within the same tenant

## What is Included in an Export

When you export an integration definition, the XML file contains:

- **All field definitions** - Field names, data types, positions, and settings
- **Integration maps** - Table and field mapping configurations
- **Field value maps** - Value translation rules (e.g., source value "Y" maps to BC value "Yes")
- **Character replacements** - Find-and-replace rules for data cleansing

The export captures the complete configuration needed to recreate the integration in another environment.

## Exporting Integration Definitions

### Step 1: Select Integrations to Export

1. Open the **Integrations** page
2. Select one or more integrations you want to export
3. Click the **Export Setup** action

### Step 2: Save the XML File

1. A file download dialog appears
2. Choose a location to save the XML file
3. The file contains all configuration details for the selected integrations

```text
Export Example:

Selected: "Vendor Catalog Import", "Customer Update Import"
    |
Export Setup action
    |
File saved: IntegrationSetup_2026-03-05.xml
    |
Contains:
  - Vendor Catalog Import (all fields, mappings, value maps, char replacements)
  - Customer Update Import (all fields, mappings, value maps, char replacements)
```

## Importing Integration Definitions

### Step 1: Start Import

1. Open the **Integrations** page
2. Click the **Import Setup** action

### Step 2: Select the XML File

1. A file selection dialog appears
2. Navigate to and select the XML file previously exported
3. Click **Open** to begin the import

### Step 3: Automatic Conflict Resolution

The import process handles conflicts automatically:

- **Existing integrations:** If an integration with the same identifier already exists, it is updated with the imported configuration
- **New integrations:** If no matching integration exists, a new one is created

```text
Import Conflict Resolution:

XML contains: "Vendor Catalog Import", "Customer Update Import"

Environment has: "Vendor Catalog Import" (existing)

Result:
  - Vendor Catalog Import -> Updated with imported configuration
  - Customer Update Import -> Created as new integration
```

After the import completes, all field definitions, mappings, value maps, and character replacements are available in the target environment.

## Copying Definitions to Another Company

### Step 1: Select Integrations

1. Open the **Integrations** page
2. Select one or more integrations you want to copy

### Step 2: Copy to Company

1. Click the **Copy to Company** action
2. A company picker dialog appears
3. Select the target company within the current environment
4. Confirm the copy operation

### Step 3: Review Results

1. Switch to the target company
2. Open the **Integrations** page
3. Verify the copied integrations appear with all their configurations

```text
Copy to Company Example:

Source Company: CRONUS USA
Selected: "Sales Order Import"
    |
Copy to Company action
    |
Company Picker: Select "CRONUS Canada"
    |
Result: "Sales Order Import" now available in CRONUS Canada
  - All field definitions copied
  - All mappings copied
  - All value maps copied
  - All character replacements copied
```

## Example Scenarios

### Scenario 1: Sandbox to Production Migration

```text
Step 1: Develop and test integration in Sandbox environment
Step 2: Verify all mappings work correctly with test data
Step 3: Select integrations on Integrations page
Step 4: Click Export Setup, save XML file
Step 5: Open Production environment
Step 6: Open Integrations page, click Import Setup
Step 7: Select the saved XML file
Step 8: Integrations now available in Production
Step 9: Run a test import to verify
```

### Scenario 2: Multi-Company Setup

```text
Step 1: Configure integration in primary company (CRONUS USA)
Step 2: Test and verify all settings
Step 3: Select integrations on Integrations page
Step 4: Click Copy to Company
Step 5: Select "CRONUS Canada" from company picker
Step 6: Repeat for "CRONUS Mexico"
Step 7: All three companies now share the same integration configuration
Step 8: Adjust company-specific value maps if needed
```

### Scenario 3: Configuration Backup

```text
Step 1: Select all integrations on Integrations page
Step 2: Click Export Setup
Step 3: Save XML file with descriptive name and date
Step 4: Store file in secure backup location
Step 5: If configuration is lost or corrupted, Import Setup from backup
```

## See Also

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Set Up Field Value Mapping](how-to-field-value-mapping.md)
- [How to Set Up Pre-Parsing Transformations](how-to-pre-parsing-transformations.md)
- [Getting Started](getting-started.md)

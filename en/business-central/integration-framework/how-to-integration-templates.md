# How to Use Integration Templates

This guide explains how to save integrations as reusable templates and create new integrations from existing templates. Templates let you capture a proven integration configuration and replicate it across environments or share it with other companies.

## What Are Integration Templates?

An integration template is a saved snapshot of an integration's full configuration — including field mappings, REST API endpoint settings, transformation rules, and scheduling. Templates can be:

- Saved from any configured integration in Business Central
- Used to create new integrations with all settings pre-populated
- Parameterized so that environment-specific values (connection codes, file paths) are flagged for update at creation time
- Shared between environments (export as a file, import in another environment)

**Common use cases:**

- Standardize a vendor data sync integration and replicate it for new vendors
- Create a "starter" template for common integration patterns (customer import, item sync)
- Migrate an integration from development to production with a controlled parameter substitution step
- Distribute pre-built integrations to customers or partners

## Prerequisites

- You have at least one integration configured and tested
- You have the **NAVX IF ALL** permission set

## Saving an Integration as a Template

1. Open the **Integrations** page and select the integration you want to save
2. Choose **Templates** > **Save as Template** from the action bar
3. The **Save as Template** dialog opens:

   | Field | Description |
   | --- | --- |
   | **Template Name** | A unique name for the template |
   | **Description** | A brief description of what this template is for |
   | **Version** | An optional version label (e.g., `1.0`, `2024-Q1`) |

4. Choose **OK** — the template is saved to the Template Library with **Source: User**

The template captures the full configuration at the moment of saving, including:

- All integration header settings (type, format, table mappings)
- All field mappings and column definitions
- Transformation rules and value maps
- REST API endpoint configuration (without credentials)
- Scheduling configuration

> **Note:** Credentials and connection-specific secrets are never included in a template. Connection codes are saved as **Template Parameters** so you can substitute them at creation time.

## Creating an Integration from a Template

1. On the **Integrations** page, choose **Templates** > **Create from Template**
2. The **Template Library** page opens — browse or search for the template you want to use
3. Select the template and choose **Create Integration**
4. If the template has **Template Parameters**, a parameter substitution dialog opens (see [Template Parameters](#template-parameters) below)
5. Fill in the parameter values for your environment and choose **OK**
6. The new integration is created with all settings from the template, with your parameter values applied

## Opening the Template Library

To browse, preview, or manage all available templates:

1. On the **Integrations** page, choose **Templates** > **Open Template Library**
2. Or search for **NAVX IF Template Library** in Tell Me

The **Template Library** page shows all templates grouped by source (User, Built-In, Imported). A **Preview** FactBox on the right shows the template details when a template is selected.

## Template Parameters

Template Parameters identify fields in a template that are environment-specific and must be substituted when creating an integration from the template. Common parameter candidates:

- **Connection Code** — different in dev vs. production
- **File Path** or **Folder Path** — varies per environment or deployment
- **Job Queue Category** — may differ between environments
- **Integration Code** — if the template uses a fixed code that should be unique per instance

### Adding Template Parameters

After saving a template:

1. Open the template in the **Template Library**
2. Choose **Parameters** from the action bar
3. The **Template Parameters** page opens
4. Add a parameter for each field that should be substituted:

   | Field | Description |
   | --- | --- |
   | **Parameter Name** | A descriptive label shown to the user during substitution (e.g., "REST API Connection") |
   | **Field Caption** | The technical field name in the integration that this parameter maps to |
   | **Required** | Whether the user must provide a value. If **No**, the template's default value is used if left empty |
   | **Default Value** | The value pre-filled in the substitution dialog. The user can override this |

### How Parameters Work at Creation Time

When a user creates an integration from a template that has parameters, a dialog lists each parameter with its label, default value, and a text box for the user to enter the actual value. After the user confirms, the framework creates the integration and replaces each parameterized field with the provided value.

## Updating a Template

Templates are point-in-time snapshots. To update a template after the source integration has changed:

1. Select the integration on the **Integrations** page
2. Choose **Templates** > **Save as Template**
3. Enter the same **Template Name** — you are asked whether to overwrite the existing template or save a new version
4. Choose **Overwrite** to replace the current template, or **New Version** to keep both

## Exporting and Importing Templates

Templates can be exported to a file and imported in another Business Central environment:

### Export a Template

1. On the **Template Library** page, select one or more templates
2. Choose **Export** — a `.json` file is downloaded containing the selected templates

### Import a Template

1. On the **Template Library** page, choose **Import**
2. Select the exported `.json` file
3. The template is added to the library with **Source: Imported**

Imported templates behave identically to user-created templates. If a template with the same name already exists, you are prompted to overwrite or keep both.

## Template Sources

| Source | Description |
| --- | --- |
| **User** | Templates saved from integrations in this environment |
| **Built-In** | Templates shipped with the Integration Framework extension (read-only) |
| **Imported** | Templates imported from a file exported from another environment |

Built-In templates cannot be modified or deleted. To customize a Built-In template, create an integration from it, adjust it, and save it as a new User template.

## See Also

- [How to Export and Import Definitions](how-to-definition-export-import.md)
- [Template Library Page](page-template-library.md)
- [Integrations Page](page-integrations.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)

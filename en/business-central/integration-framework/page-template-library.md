# Page Template Library

The **Template Library** page lists all integration templates available in this environment. Use it to browse, preview, create integrations from templates, and manage template versions.

**To open:** From the [Integrations page](page-integrations.md), choose **Templates** > **Open Template Library**. Or search for **NAVX IF Template Library** in Tell Me.

## Overview

See [How to Use Integration Templates](how-to-integration-templates.md) for a full walkthrough of saving, creating from, and managing templates.

## Key Fields

| Field | Description |
| --- | --- |
| **Template Name** | The unique name of the template |
| **Description** | A description of the template's purpose |
| **Source** | **User** (saved in this environment), **Built-In** (shipped with the app), or **Imported** (loaded from a file) |
| **Version** | Optional version label assigned when the template was saved |
| **Created Date** | When the template was saved |
| **Integration Type** | The type of integration the template was created from (File, REST API, etc.) |

## Preview FactBox

When a template is selected, the **Preview** FactBox on the right shows the template's key configuration details:

- Integration type and target table
- Number of field mappings
- REST API connection code (if applicable)
- Template parameters (if any)

## Actions

### Create Integration

Creates a new integration from the selected template. If the template has **Template Parameters**, a substitution dialog opens so you can provide environment-specific values before the integration is created.

### Parameters

Opens the **Template Parameters** page for the selected template to view, add, or edit the parameters that users must supply when creating an integration from this template.

### Export

Exports the selected template (or multiple selected templates) to a `.json` file. Use this to transfer templates between Business Central environments.

### Import

Imports templates from a previously exported `.json` file. Imported templates are added with **Source: Imported**.

### Delete

Deletes the selected template. A confirmation prompt is displayed. Built-In templates cannot be deleted.

## Template Parameters Page

Opened via the **Parameters** action. Lists the environment-specific fields that are substituted at creation time.

| Field | Description |
| --- | --- |
| **Parameter Name** | The label shown to the user in the substitution dialog |
| **Field Caption** | The integration field that this parameter maps to |
| **Required** | Whether the user must provide a value |
| **Default Value** | The pre-filled default shown in the substitution dialog |

## See Also

- [How to Use Integration Templates](how-to-integration-templates.md)
- [Integrations Page](page-integrations.md)
- [How to Export and Import Definitions](how-to-definition-export-import.md)

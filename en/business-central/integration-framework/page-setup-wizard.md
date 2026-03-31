# Page Integration Setup Wizard

The **Integration Setup Wizard** is a 7-step guided assistant for creating a new integration from scratch. It walks through source configuration, field discovery, auto-mapping, and scheduling without requiring manual configuration of individual pages.

**To open:** From the [Integrations page](page-integrations.md), choose **New Integration** > **Use Setup Wizard**.

## Overview

See [How to Use the Integration Setup Wizard](how-to-setup-wizard.md) for a full walkthrough of each step, field descriptions, and guidance on adjusting auto-mapping suggestions.

## Wizard Steps

| Step | Name | What You Configure |
| --- | --- | --- |
| 1 | Welcome | Introduction and overview |
| 2 | Basics | Integration code, description, type, source type, target table |
| 3a | File Source Configuration | Upload sample file, confirm detected format and delimiter/path settings |
| 3b | REST API Configuration | Connection code, resource path, response data path; Test & Discover |
| 4 | Field Discovery | Select which detected fields to include in the integration |
| 5 | Mapping | Review and adjust auto-map suggestions with confidence color coding |
| 6 | Scheduling | Optional Job Queue entry configuration |
| 7 | Review and Create | Summary of all settings; choose Create Integration to finish |

## Step 2: Basics Fields

| Field | Description |
| --- | --- |
| **Integration Code** | Unique code for the new integration |
| **Description** | Descriptive name |
| **Integration Type** | **Import** or **Export** |
| **Source Type** | Excel, CSV, JSON, XML, Fixed Text, Flexible Text, or REST API |
| **Target Table** | The BC table records are written to or read from |

## Step 5: Mapping — Confidence Colors

| Color | Meaning |
| --- | --- |
| Green | High confidence auto-mapping (exact/near-exact name match) |
| Yellow | Medium confidence (partial or abbreviation match) |
| Red | Low confidence (weak match; review recommended) |
| Gray | No suggestion found; field is unmapped |

## Navigation

| Button | Action |
| --- | --- |
| **Next** | Advance to the next step (validates current step first) |
| **Back** | Return to the previous step to revise settings |
| **Create Integration** | Available on Step 7 — creates the integration and closes the wizard |
| **Cancel** | Closes the wizard without creating anything |

## See Also

- [How to Use the Integration Setup Wizard](how-to-setup-wizard.md)
- [Integrations Page](page-integrations.md)
- [How to Use Copilot Auto Setup](how-to-copilot-setup.md)

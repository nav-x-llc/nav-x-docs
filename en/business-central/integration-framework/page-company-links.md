# Page Company Links

The **Company Links** page lists all Business Central companies that are linked to an integration for multi-company execution. When the integration runs in the central company, the framework also runs it in each enabled linked company.

**To open:** From the [Integrations page](page-integrations.md), select an integration and choose **Company Links** from the action bar.

## Overview

See [How to Set Up Multi-Company Integration](how-to-multi-company.md) for a full configuration walkthrough.

## Key Fields

| Field | Description |
| --- | --- |
| **Company Name** | The linked Business Central company |
| **Description** | An optional label for the link |
| **Enabled** | Whether this company participates in multi-company runs. Disabled links are skipped |
| **Execution Mode** | **Centralized** (central company's schedule drives this company's runs) or **Distributed** (this company manages its own schedule independently) |
| **Last Run** | Date and time of the most recent run in this company |
| **Last Run Status** | **Success**, **Errors**, or **Failed** — outcome of the last run |
| **Last Error** | Summary of the most recent error in this company |

## Actions

### Run Now

Immediately triggers the integration in the selected linked company without waiting for the schedule.

### Run for All Companies

Triggers the integration in all enabled linked companies in sequence. Available from the Integrations page action bar.

### Schedule This Company

Creates or updates a Job Queue entry in the linked company for this integration. Use when **Execution Mode** is **Distributed**.

### Remove Schedule

Removes the Job Queue entry from the linked company. Use when switching to **Centralized** execution mode.

## See Also

- [How to Set Up Multi-Company Integration](how-to-multi-company.md)
- [Integrations Page](page-integrations.md)
- [How to Use Background Processing](how-to-background-processing.md)

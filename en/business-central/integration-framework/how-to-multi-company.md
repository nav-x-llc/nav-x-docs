# How to Set Up Multi-Company Integration

This guide explains how to configure the Integration Framework to run a single integration across multiple Business Central companies from a central company, so that one scheduled run processes data for all linked companies simultaneously.

## What Is Multi-Company Integration?

In a multi-company Business Central environment, each company typically has its own set of integrations. Without multi-company support, you must schedule and monitor each company's integrations independently.

Multi-Company Integration introduces a **Company Links** model where a central (hub) company maintains a list of linked (spoke) companies. When a scheduled integration runs in the central company, the framework automatically executes the same integration in each linked company — either in sequence or in parallel — using that company's own data and configuration.

**Common use cases:**

- A group of franchise companies all receive the same daily item price import from a central ERP
- A holding company runs a nightly customer master sync that updates all subsidiaries
- A managed service provider maintains one integration configuration and deploys it across all client companies

## Prerequisites

- The central company and all linked companies are in the same Business Central environment (same tenant)
- The integration configuration exists in the central company (it is copied to or replicated in linked companies automatically on first run)
- You have the **NAVX IF ALL** permission set in the central company

## Concepts

### Central Company (Hub)

The company where Company Links and the master integration schedule are configured. Integration runs initiated here cascade to linked companies.

### Linked Company (Spoke)

A company that receives integration runs triggered by the central company. Each linked company uses its own data — BC records, field values, and any company-specific overrides.

### Execution Mode

| Mode | Description |
| --- | --- |
| **Centralized** | The central company's Job Queue triggers and manages runs for all linked companies. Linked companies do not have their own schedules for this integration |
| **Distributed** | Each company has its own schedule and runs independently. The central company's schedule is additional, not the only trigger |

## Step 1: Open Company Links

1. On the **Integrations** page in the central company, select the integration
2. Choose **Company Links** from the action bar

The **Company Links** page opens showing all companies currently linked to this integration.

## Step 2: Add Linked Companies

Choose **New** to add a linked company:

| Field | Description |
| --- | --- |
| **Company Name** | The Business Central company to link. Select from the available companies in this environment |
| **Description** | An optional label for the link |
| **Enabled** | Whether this link is active. Disabled links are skipped during multi-company runs |
| **Execution Mode** | **Centralized** (central company controls scheduling) or **Distributed** (company manages its own schedule) |

Repeat for each company that should participate in this integration.

## Step 3: Configure Centralized Execution

When using **Centralized** execution mode:

1. Set up a single Job Queue schedule on the integration in the **central company**
2. The framework iterates through all enabled Company Links and runs the integration in each linked company in turn
3. Linked companies do not need their own Job Queue entries for this integration — the central company's schedule drives all runs

> **Tip:** Disable the Job Queue entry in linked companies (if they exist) to avoid duplicate runs when switching to Centralized mode.

## Step 4: Schedule Actions on Company Links

From the **Company Links** page, you can manage schedules for individual links:

| Action | Description |
| --- | --- |
| **Schedule This Company** | Creates or updates a Job Queue entry in the linked company for this integration |
| **Remove Schedule** | Removes the Job Queue entry from the linked company |
| **Run Now** | Immediately triggers the integration in the selected linked company |

## Monitoring Per-Company Health

The **Company Links** page displays health indicators for each link:

| Field | Description |
| --- | --- |
| **Last Run** | The date and time of the most recent run in this company |
| **Last Run Status** | **Success**, **Errors**, or **Failed** — the outcome of the last run |
| **Last Error** | A summary of the last error encountered in this company, if any |

These indicators let you monitor all linked companies from the central company's page without switching between companies.

## Running Multi-Company Integration Manually

To trigger a multi-company run immediately without waiting for the schedule:

1. On the **Integrations** page in the central company, choose **Run for All Companies**
2. The framework runs the integration sequentially in each enabled linked company
3. Results are written to the Import Log in each respective company

To run the integration for a single linked company on demand:

1. On the **Company Links** page, select the company
2. Choose **Run Now**

## Company-Specific Configuration Overrides

Linked companies can override specific integration settings without changing the central configuration. Overridable settings include:

- File source path or connection code (for companies that use a different data source)
- Target field filters (for companies with a different chart of accounts or dimension structure)

Overrides are configured directly in the linked company's copy of the integration record.

## Troubleshooting

### A Linked Company Is Skipped

Confirm the **Enabled** toggle is turned on for the Company Link. Also verify the integration exists and is enabled in the linked company.

### Errors in One Company Do Not Stop Other Companies

By design, a failure in one linked company does not prevent the framework from processing the remaining companies. Each company's result is logged independently. Check the **Last Run Status** on the Company Links page to identify which companies failed.

### "Integration not found in linked company" Error

The integration record (matching Sorting Order) does not exist in the linked company. Either create it manually or use the **Copy to Company** action on the Integrations page to replicate the configuration.

## See Also

- [Company Links Page](page-company-links.md)
- [How to Use Background Processing](how-to-background-processing.md)
- [How to Use Import Logging](how-to-import-logging.md)
- [How to Use Execution Chains](how-to-execution-chains.md)

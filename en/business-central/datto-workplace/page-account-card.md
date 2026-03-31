# Page: Datto Workplace Account Card

The **Datto Workplace Account** card page is where you view and edit the configuration of a single Datto Workplace account.

**To open:** From the **File Accounts** page (search for **External File Storage**), select a Datto Workplace account and choose **Manage Account**.

## Fields

### General

| Field | Description |
| --- | --- |
| **Name** | The descriptive name for this account. Displayed in the File Accounts list and in storage selectors throughout Business Central |
| **Disabled** | When enabled, this account is excluded from the connector account list and is not available as a storage option. The account and its credentials are retained and can be re-enabled at any time |

### Connection

| Field | Description |
| --- | --- |
| **Domain** | The Datto Workplace regional domain for this account (e.g., `us.workplace.datto.com`). Must match the domain shown in the Datto Workplace Admin Portal |
| **Cell** | The data center cell number within the selected domain (1–18). Must match the cell shown in the Datto Workplace Admin Portal |
| **Client ID** | The username of the Datto Workplace API user |
| **Client Secret** | Enter a new Client Secret to update the stored credential, or leave blank to keep the current value. The field is always blank on load — a blank value does not clear the stored secret |

### Status

| Field | Description |
| --- | --- |
| **Base URL** | Read-only. Shows the computed API base URL derived from the configured Domain and Cell. Format: `https://{domain}/{cell}/api/v1`. Useful for verifying the connection target before testing |

## Actions

### Test Connection

Calls the Datto Workplace API using the current credentials to verify that the account is configured correctly. Business Central attempts to list the Projects in the account.

- **Success** — a confirmation message is shown: "Connection to Datto Workplace was successful."
- **Failure** — an error message describes the problem. Common causes: incorrect Client ID or Client Secret, wrong Domain or Cell selection, or the Datto Workplace API is unreachable from Business Central

Run this action after saving credential updates or when troubleshooting file access errors.

### Browse Projects

Opens Business Central's built-in file browser pointed at this Datto Workplace account. The browser shows all Projects in the account as top-level folders, with the full folder hierarchy navigable within each Project.

Use this action to confirm that the connector can access your Datto Workplace content and to navigate the folder structure.

## See Also

- [How to Add a Datto Workplace Account](how-to-add-account.md)
- [How to Manage Accounts](how-to-manage-accounts.md)
- [Account Setup Wizard](page-account-setup-wizard.md)

# How to Add a Datto Workplace Account

This guide explains how to connect a Datto Workplace organization to Business Central using the account setup wizard.

## Prerequisites

Before starting the wizard, you need an API integration created in the Datto Workplace Admin Portal. The integration provides three values you will need here:

- **Endpoint URL** — shown on the integration tile; encodes the Domain and Cell (see below)
- **Client ID** — the unique identifier for the API integration
- **Client Secret** — the secret key for the API integration

If you have not yet created the API integration in Datto Workplace, follow [How to Set Up API Access in Datto Workplace](how-to-datto-api-setup.md) first.

### Determining Domain and Cell from the Endpoint URL

The Endpoint URL shown in the Datto Workplace Admin Portal has the format:

```text
https://{domain}/{cell}/api/v1
```

For example, `https://us.workplace.datto.com/5/api/v1` means:

- **Domain** → select **US Workplace** in Business Central
- **Cell** → select **5** in Business Central

See the full domain mapping table in [How to Set Up API Access in Datto Workplace](how-to-datto-api-setup.md#step-5-determine-your-domain-and-cell-from-the-endpoint-url).

## Opening the Wizard

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **External File Storage**, and then choose the related link.

On the **File Accounts** page, choose **Add Account**. A list of available connectors is displayed. Select **Datto Workplace** and choose **OK**.

The **Set Up Datto Workplace Account** wizard opens.

## Step 1: Welcome

The Welcome step describes the wizard and lists what you need before starting. Review the prerequisites and choose **Next**.

## Step 2: Connection

Configure how Business Central connects to your Datto Workplace organization:

| Field | Description |
| --- | --- |
| **Domain** | The Datto Workplace regional domain for your organization. Select from the dropdown. See [Domains](#domain-reference) below |
| **Cell** | The data center cell number within the selected domain. Select from the dropdown (1–18) |
| **Client ID** | The username of the Datto Workplace API user |
| **Password** | The Client Secret (password) of the Datto Workplace API user. The value is masked and not stored in the database |

All four fields are required. Choose **Next** to validate the fields and proceed.

## Step 3: Account Name

Enter a descriptive name for this account. The name appears in the **File Accounts** list and wherever Datto Workplace storage options are shown throughout Business Central.

Choose a name that identifies the organization or purpose, for example:

- `Datto Workplace - Acme Corp`
- `Datto Workplace - Production`
- `Datto WP - Finance Documents`

Choose **Next** after entering the name.

## Step 4: Test and Finish

The final step shows a summary of the configuration and lets you test the connection before saving.

Choose **Test Connection** to verify that Business Central can reach the Datto Workplace API using the credentials provided. The **Connection Status** field shows the result:

- **Connection successful** — credentials are valid and the API is reachable
- **Connection failed: [error message]** — check the error message and return to the Connection step to correct the credentials, domain, or cell

> **Important:** You can choose **Finish** without running the test, but it is strongly recommended to verify the connection before saving.

When the connection test passes, choose **Finish**. The account is created and registered in Business Central's External File Storage system.

## After the Wizard

The new account appears in the **File Accounts** list. To confirm it is working correctly:

1. Select the account and choose **Manage Account** to open the [Account Card](page-account-card.md)
2. Choose **Browse Projects** to navigate the Datto Workplace project and folder structure

The account is now available as a storage destination for any Business Central feature that uses External File Storage.

## Domain Reference

Select the domain that matches your Datto Workplace organization's region:

| Domain Option | Hostname |
| --- | --- |
| US FileProtection | `us.fileprotection.datto.com` |
| EU FileProtection | `eu.fileprotection.datto.com` |
| CA FileProtection | `ca.fileprotection.datto.com` |
| AU FileProtection | `au.fileprotection.datto.com` |
| US Workplace | `us.workplace.datto.com` |
| EU Workplace | `eu.workplace.datto.com` |
| CA Workplace | `ca.workplace.datto.com` |
| AU Workplace | `au.workplace.datto.com` |

If you are unsure which domain applies to your organization, check the URL you use to log in to the Datto Workplace web portal. The domain in the URL corresponds to the domain option in the connector.

## See Also

- [How to Manage Accounts](how-to-manage-accounts.md)
- [Account Setup Wizard](page-account-setup-wizard.md)
- [Account Card](page-account-card.md)
- [Getting Started](getting-started.md)

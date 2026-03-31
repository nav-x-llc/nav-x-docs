# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Prerequisites

Before setting up the Datto Workplace Connector, you need:

- **A Datto Workplace account** — access to Workplace Online with Administrator or Super Administrator privileges
- **An API integration in Datto Workplace** — created in Workplace Online under **Configuration → Integrations**. This provides the Endpoint URL, Client ID, and Client Secret you will use in Business Central. See [How to Set Up API Access in Datto Workplace](how-to-datto-api-setup.md) for step-by-step instructions
- **Appropriate BC permissions** — see [Permission Setups](permission-setups.md)

## Permission Setup

Before using the connector, ensure your Business Central user has the correct permission set assigned. See [Permission Setups](permission-setups.md) for details.

## Step 1: Create an API Integration in Datto Workplace

Before configuring anything in Business Central, you need an API integration in Datto Workplace to obtain the Client ID and Client Secret.

Follow the complete guide: [How to Set Up API Access in Datto Workplace](how-to-datto-api-setup.md).

After completing that guide, note your **Endpoint URL**, **Client ID**, and **Client Secret** — you will need all three in the next step. The Endpoint URL also tells you which **Domain** and **Cell** to select in Business Central.

## Step 2: Add a Datto Workplace Account in Business Central

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **External File Storage**, and then choose the related link. On the **File Accounts** page, choose **Add Account**, then select **Datto Workplace** from the list of available connectors.

This opens the **Set Up Datto Workplace Account** wizard. Follow the four steps:

1. **Welcome** — review the prerequisites and choose **Next**
2. **Connection** — select your **Domain** and **Cell**, then enter your **Client ID** and **Client Secret**. Choose **Next**
3. **Account Name** — enter a descriptive name for this account (e.g., `Datto Workplace - Production`). This name appears wherever Datto Workplace is listed as a storage option. Choose **Next**
4. **Test and Finish** — choose **Test Connection** to verify your credentials. When the status shows **Connection successful**, choose **Finish** to save the account

The account is now registered and available as an External File Storage provider throughout Business Central.

## Step 3: Verify the Account

After finishing the wizard, your new account appears in the **File Accounts** list. To open it:

1. Select the account and choose **Manage Account**
2. On the **Datto Workplace Account** card, choose **Browse Projects** to navigate your Datto Workplace project and folder structure from within Business Central

If the projects and folders appear correctly, the connector is working.

## Next Steps

- [How to Add a Datto Workplace Account](how-to-add-account.md) — detailed instructions for the setup wizard
- [How to Manage Accounts](how-to-manage-accounts.md) — editing credentials, disabling accounts, and browsing files
- [Account Card](page-account-card.md) — reference for all fields and actions on the Account Card

## See Also

- [Permission Setups](permission-setups.md)
- [FAQ](faq-index.md)

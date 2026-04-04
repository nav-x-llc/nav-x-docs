# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Prerequisites

Before setting up the FTP Connector, you need:

- **An FTP, FTPS, or SFTP server** — with a hostname or IP address reachable from the internet
- **Credentials for the server** — username and password, an SSH private key, or a client certificate depending on your server's authentication requirements
- **The server's port number** — default is 21 for FTP/FTPS and 22 for SFTP
- **Appropriate BC permissions** — see [Permission Setups](permission-setups.md)

## How the Connector Works

Business Central cannot connect directly to FTP or SFTP servers. The FTP Connector uses a secure **Azure Function bridge** hosted by NAV-X to relay file operations between Business Central and your server. All communication between Business Central and the bridge uses HTTPS. The bridge connects to your FTP or SFTP server, performs the requested operation, and returns the result.

**NAV-X does not store any of your data.** The bridge is fully stateless — no files, credentials, or file content are retained at any point. See [index.md](index.md) for more details.

## Permission Setup

Before using the connector, ensure your Business Central user has the correct permission set assigned. See [Permission Setups](permission-setups.md) for details.

## Step 1: Add an FTP/SFTP Account in Business Central

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **External File Storage**, and then choose the related link. On the **File Accounts** page, choose **Add Account**, then select **FTP/SFTP** from the list of available connectors.

This opens the **Set Up FTP/SFTP Account** wizard. Follow the three steps:

1. **Connection** — select your **Protocol** (FTP, FTPS, or SFTP), enter the **Host Name** and **Port**, and configure **Passive Mode** if required. Enter the **Account Name** for this account. Choose **Next**
2. **Authentication** — choose your **Authentication Type** and enter the required credentials (username and password, SSH private key, or client certificate). Choose **Next**
3. **Advanced & Finish** — optionally enter a **Default Directory** to use as the base path for all file operations. Choose **Test Connection** to verify the connection, then choose **Finish** to save the account

The account is now registered and available as an External File Storage provider throughout Business Central.

## Step 2: Verify the Account

After finishing the wizard, your new account appears in the **File Accounts** list. To open it:

1. Select the account and choose **Manage Account**
2. On the **FTP/SFTP Account** card, choose **Test Connection** to verify the server is reachable

If the connection test passes, the connector is working.

## Next Steps

- [How to Add an FTP/SFTP Account](how-to-add-account.md) — detailed instructions for the setup wizard
- [How to Manage Accounts](how-to-manage-accounts.md) — editing credentials, disabling accounts, and testing connections
- [FTP Account Card](page-ftp-account-card.md) — reference for all fields and actions

## See Also

- [Permission Setups](permission-setups.md)
- [FAQ](faq-index.md)

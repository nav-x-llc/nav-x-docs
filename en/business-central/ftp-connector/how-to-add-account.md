# How to Add an FTP/SFTP Account

This guide explains how to connect an FTP, FTPS, or SFTP server to Business Central using the account setup wizard.

## Prerequisites

Before starting the wizard, you need:

- The **hostname or IP address** of your FTP/SFTP server
- The **port number** (default: 21 for FTP/FTPS, 22 for SFTP)
- The **authentication credentials** appropriate for your server:
  - *Anonymous* — no credentials required
  - *Username & Password* — your FTP username and password
  - *SSH Private Key* — a PEM-formatted private key (SFTP only)
  - *Client Certificate* — a certificate for mutual TLS authentication (FTPS only)
- Whether the server requires **Passive Mode** (common for servers behind NAT or firewalls)
- The **FTPSTANDARD** permission set assigned to your BC user — see [Permission Setups](permission-setups.md)

## Opening the Wizard

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **External File Storage**, and then choose the related link.

On the **File Accounts** page, choose **Add Account**. A list of available connectors is displayed. Select **FTP/SFTP** and choose **OK**.

The **Set Up FTP/SFTP Account** wizard opens.

## Step 1: Connection

Configure the account identity and server connection:

| Field | Description |
| --- | --- |
| **Name** | A descriptive name for this account. Appears in the File Accounts list and storage selectors throughout Business Central. Example: `FTP - Production Server` |
| **Protocol** | The protocol to use: *FTP* (plain), *FTPS* (FTP over TLS), or *SFTP* (SSH). Changing the protocol automatically sets the default port and adjusts the available authentication options |
| **Host Name** | The hostname or IP address of the FTP/SFTP server |
| **Port** | The port to connect on. Defaults to 21 for FTP/FTPS and 22 for SFTP |
| **Passive Mode** | Enable for FTP and FTPS connections when the server is behind a NAT or firewall (most common for internet-facing FTP servers). Not applicable to SFTP |

All required fields are validated before advancing. Choose **Next**.

## Step 2: Authentication

Configure how Business Central authenticates to your server:

| Field | Description |
| --- | --- |
| **Authentication Type** | How to authenticate. Options depend on the selected protocol — see [Authentication Types](#authentication-types) below |
| **Username** | Your login username. Required for *Username & Password* and *SSH Private Key* authentication |
| **Password** | Your login password. Required for *Username & Password* authentication. The value is masked and not stored in the database |
| **SSH Private Key** | A PEM-formatted SSH private key. Required for *SSH Private Key* authentication (SFTP only). The value is masked and not stored in the database |
| **Client Certificate** | A PEM-formatted client certificate. Required for *Client Certificate* authentication (FTPS only). The value is masked and not stored in the database |

All required fields for the selected authentication type are validated before advancing. Choose **Next**.

### Authentication Types

| Authentication Type | Supported Protocols | Required Credentials |
| --- | --- | --- |
| Anonymous | FTP, FTPS | None |
| Username & Password | FTP, FTPS, SFTP | Username, Password |
| SSH Private Key | SFTP only | Username, SSH Private Key |
| Client Certificate | FTPS only | Client Certificate |

## Step 3: Advanced & Finish

Configure optional settings and test the connection:

| Field | Description |
| --- | --- |
| **Default Directory** | An optional base path on the server. When set, this path is automatically prepended to all file operations for this account. For example, if the default directory is `/uploads/bc`, a file written to `invoices/INV-001.pdf` is stored at `/uploads/bc/invoices/INV-001.pdf`. Use the browse button to navigate and select a directory |
| **Connection Status** | Shows the result of the last connection test |

Choose **Test Connection** to verify that Business Central can reach your server using the provided credentials. The **Connection Status** field shows the result:

- **Connection successful** — the server is reachable and credentials are valid
- **Connection failed: [error message]** — check the error and return to earlier steps to correct the settings

> [!NOTE]
> You can choose **Finish** without running the test, but it is strongly recommended to verify the connection before saving.

When the connection test passes, choose **Finish**. The account is created and registered in Business Central's External File Storage system.

## After the Wizard

The new account appears in the **File Accounts** list. To open it, select the account and choose **Manage Account** to open the [FTP Account Card](page-ftp-account-card.md).

The account is now available as a storage destination for any Business Central feature that uses External File Storage.

## See Also

- [How to Manage Accounts](how-to-manage-accounts.md)
- [FTP Account Setup Wizard](page-ftp-account-wizard.md)
- [FTP Account Card](page-ftp-account-card.md)
- [Getting Started](getting-started.md)

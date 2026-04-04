# Page: FTP Account Setup Wizard

The **Set Up FTP/SFTP Account** wizard walks you through connecting an FTP, FTPS, or SFTP server to Business Central in three steps.

**To open:** From the **File Accounts** page (search for **External File Storage**), choose **Add Account**, select **FTP/SFTP**, and choose **OK**.

## Step 1: Connection

Configure the account name and server connection details.

| Field | Description |
| --- | --- |
| **Name** | A descriptive name for this account. Required |
| **Protocol** | The protocol to use: *FTP*, *FTPS*, or *SFTP*. Automatically sets the default port and adjusts available authentication options |
| **Host Name** | The hostname or IP address of the server. Required |
| **Port** | The connection port. Defaults to 21 for FTP/FTPS and 22 for SFTP |
| **Passive Mode** | Enable for FTP/FTPS servers behind NAT or firewalls. Not shown for SFTP |

All required fields are validated before the **Next** button advances.

## Step 2: Authentication

Configure how Business Central authenticates to the server.

| Field | Description |
| --- | --- |
| **Authentication Type** | The authentication method. Available options depend on the protocol selected in Step 1 |
| **Username** | Server login username. Shown for *Username & Password* and *SSH Private Key* authentication |
| **Password** | Server password. Masked input. Shown for *Username & Password* authentication |
| **SSH Private Key** | PEM-formatted private key. Masked input. Shown for *SSH Private Key* authentication (SFTP only) |
| **Client Certificate** | PEM-formatted client certificate. Masked input. Shown for *Client Certificate* authentication (FTPS only) |

Required credential fields for the selected authentication type are validated before advancing.

## Step 3: Advanced & Finish

Configure optional settings and test the connection before saving.

| Field | Description |
| --- | --- |
| **Default Directory** | An optional base path automatically prepended to all file operations for this account. Use the browse button to navigate and select a folder on the server |
| **Connection Status** | Shows the result of the last connection test run on this wizard page |

## Actions

| Action | Description |
| --- | --- |
| **Back** | Return to the previous step. Not available on Step 1 |
| **Next** | Validate the current step and advance. Not available on Step 3 |
| **Test Connection** | Available on Step 3. Tests the connection to the FTP/SFTP server using the entered settings and credentials. Shows the result in **Connection Status** |
| **Finish** | Save the account and close the wizard. Only available on Step 3. Strongly recommended to run **Test Connection** before choosing **Finish** |

## See Also

- [How to Add an FTP/SFTP Account](how-to-add-account.md)
- [FTP Account Card](page-ftp-account-card.md)
- [Getting Started](getting-started.md)

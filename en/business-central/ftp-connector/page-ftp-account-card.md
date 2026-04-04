# Page: FTP Account Card

The **FTP/SFTP Account** card page is where you view and edit the configuration of a single FTP/SFTP account.

**To open:** From the **File Accounts** page (search for **External File Storage**), select an FTP/SFTP account and choose **Manage Account**.

## Fields

### General

| Field | Description |
| --- | --- |
| **Name** | The descriptive name for this account. Displayed in the File Accounts list and in storage selectors throughout Business Central |
| **Protocol** | The protocol used to connect to this server: *FTP*, *FTPS* (FTP over TLS), or *SFTP* (SSH). Changing this value automatically adjusts the default port and the available authentication types |
| **Host Name** | The hostname or IP address of the FTP/SFTP server |
| **Port** | The port to connect on. Default is 21 for FTP/FTPS and 22 for SFTP |
| **Passive Mode** | When enabled, the FTP or FTPS connection uses passive mode. Recommended for servers behind NAT or firewalls. Not shown for SFTP |

### Authentication

| Field | Description |
| --- | --- |
| **Authentication Type** | How Business Central authenticates to the server. Available options depend on the selected **Protocol** — see [Authentication Types](how-to-add-account.md#authentication-types) |
| **Username** | Your server login username. Shown when **Authentication Type** is *Username & Password* or *SSH Private Key* |
| **Password** | Enter a new password to update the stored credential, or leave blank to keep the current value. Always shown blank — a blank value does not clear the stored credential. Shown when **Authentication Type** is *Username & Password* |
| **SSH Private Key** | Enter a new PEM-formatted SSH private key to update the stored credential, or leave blank to keep the current value. Always shown blank. Shown when **Authentication Type** is *SSH Private Key* |
| **Client Certificate** | Enter a new PEM-formatted client certificate to update the stored credential, or leave blank to keep the current value. Always shown blank. Shown when **Authentication Type** is *Client Certificate* |

### Advanced

| Field | Description |
| --- | --- |
| **Default Directory** | An optional base path on the server that is automatically prepended to all file operation paths for this account. Use the browse button to navigate the server and select a directory |
| **Disabled** | When enabled, this account is excluded from the connector account list and is not available as a storage option. The account and its credentials are retained and can be re-enabled at any time |

## Actions

### Test Connection

Sends a test request through the NAV-X Azure Function bridge to your FTP/SFTP server using the current settings and credentials.

- **Success** — a confirmation message is shown
- **Failure** — an error message describes the problem. Common causes: incorrect hostname or port, wrong authentication credentials, server not reachable from the internet, or firewall blocking the connection

Run this action after saving credential updates or when troubleshooting file access errors.

## See Also

- [How to Add an FTP/SFTP Account](how-to-add-account.md)
- [How to Manage Accounts](how-to-manage-accounts.md)
- [FTP Account Setup Wizard](page-ftp-account-wizard.md)

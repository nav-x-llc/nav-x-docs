# How to Manage FTP/SFTP Accounts

This guide explains how to view, edit, test, and remove FTP/SFTP accounts after they have been set up.

## Opening an Account

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **External File Storage**, and then choose the related link.

On the **File Accounts** page, select the FTP/SFTP account you want to manage and choose **Manage Account**. The [FTP Account Card](page-ftp-account-card.md) opens.

## Changing the Account Name

On the Account Card, edit the **Name** field and save the record. The new name is immediately reflected in the **File Accounts** list and in all storage selectors throughout Business Central.

## Updating Connection Settings

If the server hostname, port, or protocol changes:

1. Open the Account Card
2. Update the **Host Name**, **Port**, or **Protocol** fields as needed
3. Save the record

> [!NOTE]
> Changing the **Protocol** automatically resets the port to the default for that protocol (21 for FTP/FTPS, 22 for SFTP) and may change which authentication types are available. Review the **Authentication Type** after changing the protocol.

## Updating Credentials

If your server password, SSH key, or client certificate changes:

1. Open the Account Card
2. Update the **Username** if it has changed
3. Enter the new secret in the **Password**, **SSH Private Key**, or **Client Certificate** field — these fields are masked and always show blank regardless of whether a value is currently stored
4. Save the record — the new credential is stored securely in Isolated Storage

> [!NOTE]
> Leaving a secret field blank when saving does not clear the stored credential — it retains the previously stored value. Only enter a value when you want to replace the existing credential.

## Testing the Connection

Choose **Test Connection** on the Account Card to verify that the current settings and credentials can connect to the FTP/SFTP server.

- **Success** — a message confirms the connection is working
- **Failure** — an error message describes the problem (for example, incorrect credentials, unreachable host, or wrong port)

Run a connection test after updating credentials or if users report file access errors.

## Changing the Default Directory

The **Default Directory** is a base path automatically prepended to all file operations. To change it:

1. Open the Account Card
2. Edit the **Default Directory** field, or use the browse button to navigate the server and select a directory
3. Save the record

To remove the default directory and use the server root, clear the field.

## Disabling an Account

If you want to temporarily remove an account from the list of available storage providers without deleting it, enable the **Disabled** toggle on the Account Card. Disabled accounts:

- Do not appear in the connector account list when selecting a storage destination
- Retain all configuration and credentials
- Can be re-enabled at any time by clearing the **Disabled** toggle

Use this when, for example, you need to update credentials and want to prevent the account from being used during the update.

## Deleting an Account

To permanently remove an FTP/SFTP account, delete it from the **File Accounts** page using the standard Business Central delete action. Deleting an account:

- Removes the account record from Business Central
- Deletes all stored credentials (password, SSH key, client certificate) from Isolated Storage — they cannot be recovered
- Removes the account from the connector list immediately

> [!WARNING]
> If the account is used as a storage destination by an active integration or Business Central feature, deleting it will cause those operations to fail until a new account is configured.

## Managing Multiple Accounts

You can configure multiple FTP/SFTP accounts — for example, one for each server environment (development, test, production) or one per business unit. Each account appears separately in the File Accounts list with its own name, protocol, host, and credentials.

There is no limit on the number of accounts. All enabled accounts are available as storage options wherever FTP/SFTP storage can be selected in Business Central.

## Troubleshooting

### Connection Test Fails

- Verify the **Host Name** and **Port** are correct and the server is reachable from the internet
- Confirm the credentials are correct — update and retest if needed
- If using FTP or FTPS, try enabling or disabling **Passive Mode** — this is a common cause of connection failures when firewalls are involved
- Check that the FTP/SFTP server allows connections from external IP addresses

### Account Is Not Visible in Storage Selectors

- Check that the **Disabled** toggle on the Account Card is not enabled
- Confirm your user has the **FTPSTANDARD** permission set assigned
- Sign out and sign back in to Business Central — permission changes require a fresh session

### Files Are Written to the Wrong Path

- Check the **Default Directory** on the Account Card — if set, it is prepended to all paths used by this account
- Clear the **Default Directory** to use the server root

## See Also

- [How to Add an FTP/SFTP Account](how-to-add-account.md)
- [FTP Account Card](page-ftp-account-card.md)
- [Permission Setups](permission-setups.md)

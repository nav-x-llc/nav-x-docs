# How to Manage Datto Workplace Accounts

This guide explains how to view, edit, test, and remove Datto Workplace accounts after they have been set up.

## Opening an Account

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **External File Storage**, and then choose the related link.

On the **File Accounts** page, select the Datto Workplace account you want to manage and choose **Manage Account**. The [Datto Workplace Account Card](page-account-card.md) opens.

## Changing the Account Name

On the Account Card, edit the **Name** field and save the record. The new name is immediately reflected in the **File Accounts** list and in all storage selectors throughout Business Central.

## Updating Credentials

If your Datto Workplace Client ID or Client Secret changes (for example, after a credential rotation in the Datto Workplace Admin Portal):

1. Open the Account Card
2. Update the **Client ID** field if the username changed
3. Enter the new password in the **Client Secret** field — the field is masked and always shows blank regardless of whether a secret is currently stored
4. Save the record — the new credentials are stored securely in isolated storage

> **Note:** Leaving **Client Secret** blank when saving does not clear the stored secret — it retains the previously stored value. Only enter a value when you want to replace the existing secret.

## Testing the Connection

Choose **Test Connection** on the Account Card to verify that the current credentials and connection settings are valid. Business Central calls the Datto Workplace API and attempts to list your Projects.

- **Success** — a message confirms the connection is working
- **Failure** — an error message is shown describing the problem (for example, incorrect credentials, unreachable host, or wrong cell/domain)

Run a connection test after updating credentials or if users report file access errors.

## Browsing Projects and Folders

Choose **Browse Projects** on the Account Card to open Business Central's built-in file browser pointed at this Datto Workplace account. The browser shows:

- All **Projects** in your Datto Workplace organization as top-level folders
- The folder and file hierarchy within each Project

You can navigate the folder tree, but file operations (upload, download, delete) are performed through the specific Business Central features that use file storage — not directly from this browser.

## Disabling an Account

If you want to temporarily remove an account from the list of available storage providers without deleting it, enable the **Disabled** toggle on the Account Card. Disabled accounts:

- Do not appear in the connector account list when selecting a storage destination
- Retain all configuration and credentials
- Can be re-enabled at any time by clearing the **Disabled** toggle

Use this when, for example, you need to rotate credentials and want to prevent the account from being used during the update.

## Deleting an Account

To permanently remove a Datto Workplace account, delete it from the **File Accounts** page using the standard Business Central delete action. Deleting an account:

- Removes the account record from Business Central
- Deletes the stored Client Secret from isolated storage — credentials cannot be recovered
- Removes the account from the connector list immediately

> **Warning:** If the account is used as a storage destination by an active integration or Business Central feature, deleting it will cause those operations to fail until a new account is configured.

## Managing Multiple Accounts

You can configure multiple Datto Workplace accounts — for example, one for each department, region, or purpose. Each account appears separately in the File Accounts list with its own name, domain, cell, and credentials.

There is no limit on the number of accounts. All enabled accounts are available as storage options wherever Datto Workplace storage can be selected in Business Central.

## Troubleshooting

### Connection Test Fails with "Connection failed"

- Verify the **Domain** and **Cell** match what is shown in your Datto Workplace Admin Portal
- Confirm the Client ID and Client Secret are correct — update and retest if needed
- Check that Business Central's outbound internet access allows connections to the Datto Workplace API domain

### Files Are Not Appearing in Browse Projects

- Confirm the Datto Workplace API user has permission to access the Projects you expect to see
- Verify the API user is not restricted to specific Projects in the Datto Workplace Admin Portal
- Run **Test Connection** to confirm the account is reachable

### Account Is Not Visible in Storage Selectors

- Check that the **Disabled** toggle on the Account Card is not enabled
- Confirm the user has the **NAVX DC STANDARD** permission set assigned

## See Also

- [How to Add a Datto Workplace Account](how-to-add-account.md)
- [Account Card](page-account-card.md)
- [Permission Setups](permission-setups.md)

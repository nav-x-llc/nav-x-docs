# Frequently Asked Questions

## Setup

- [What do I need before I can set up the connector?](#what-do-i-need-before-i-can-set-up-the-connector)
- [Which protocols are supported?](#which-protocols-are-supported)
- [Can I set up multiple FTP/SFTP accounts?](#can-i-set-up-multiple-ftpsftp-accounts)

## Usage

- [Which Business Central features work with FTP/SFTP storage?](#which-business-central-features-work-with-ftpsftp-storage)
- [Can I use this connector with the NAV-X Integration Framework?](#can-i-use-this-connector-with-the-nav-x-integration-framework)
- [What is the Default Directory used for?](#what-is-the-default-directory-used-for)

## Security & Privacy

- [Does NAV-X store my files or credentials?](#does-nav-x-store-my-files-or-credentials)
- [Where are my credentials stored in Business Central?](#where-are-my-credentials-stored-in-business-central)
- [How does the connector reach my FTP server from Business Central?](#how-does-the-connector-reach-my-ftp-server-from-business-central)

## Errors & Troubleshooting

- [The connection test fails — what should I check?](#the-connection-test-fails--what-should-i-check)
- [I cannot see the FTP/SFTP option when adding a file account](#i-cannot-see-the-ftpsftp-option-when-adding-a-file-account)
- [I want to update my version of the connector](#i-want-to-update-my-version-of-the-connector)

---

## Setup Answers

### What do I need before I can set up the connector?

You need:

1. An FTP, FTPS, or SFTP server accessible from the internet, with a known hostname and port
2. Credentials for the server (username and password, SSH private key, or client certificate depending on your server configuration)
3. Business Central 2025 Release Wave 1 (version 27.0) or later
4. The **FTPSTANDARD** permission set assigned to your BC user

### Which protocols are supported?

The connector supports three protocols:

| Protocol | Description |
| --- | --- |
| **FTP** | Plain File Transfer Protocol. Simple but unencrypted in transit |
| **FTPS** | FTP over TLS. Encrypts the control and data connections using TLS/SSL |
| **SFTP** | SSH File Transfer Protocol. Encrypts all communication using SSH. Not related to FTP — it is a separate protocol that happens to serve the same purpose |

### Can I set up multiple FTP/SFTP accounts?

Yes. You can add as many accounts as needed — each pointing to a different server, using different credentials or protocols, or for different purposes. All enabled accounts appear in the File Accounts list and are available as storage options wherever FTP/SFTP storage can be selected.

---

## Usage Answers

### Which Business Central features work with FTP/SFTP storage?

Any Business Central feature that uses the **External File Storage** system can use an FTP/SFTP account as its storage back-end. This includes document attachments, report output destinations, and — when used with the NAV-X Integration Framework — file pickup (import) and archiving (export) operations.

### Can I use this connector with the NAV-X Integration Framework?

Yes. When the FTP Connector is installed alongside the [NAV-X Integration Framework](../integration-framework/index.md), FTP/SFTP accounts can be selected as File Sources for file pickup and as archive or export file destinations. This allows the Integration Framework to automatically pick up files deposited on an FTP server, process them, and write output back — with no manual file transfers required.

### What is the Default Directory used for?

The **Default Directory** is an optional base path configured on each account. When set, it is automatically prepended to every file path used by that account. For example, if the default directory is `/business-central/files` and a feature writes a file to `invoices/INV-001.pdf`, the file is actually stored at `/business-central/files/invoices/INV-001.pdf` on the server. This is useful when the FTP user has access to the full server but you want Business Central to work within a specific subfolder.

---

## Security & Privacy Answers

### Does NAV-X store my files or credentials?

**No.** The NAV-X Azure Function bridge used by this connector is completely stateless. When Business Central sends a file operation request to the bridge, the bridge connects to your FTP/SFTP server, performs the operation, and immediately returns the result. No files, file content, credentials, or metadata are stored, logged, or retained by the bridge at any point. Every request is self-contained and independent.

### Where are my credentials stored in Business Central?

Passwords, SSH private keys, and client certificates are stored in Business Central's **Isolated Storage** — a per-company, encrypted key-value store that is separate from the database. Credentials are never written to any database table and cannot be read back or displayed in the UI after they are saved. When an account is deleted, all stored credentials are automatically removed from Isolated Storage.

### How does the connector reach my FTP server from Business Central?

Business Central (cloud) cannot make direct TCP connections to FTP or SFTP servers. The FTP Connector uses a secure **Azure Function bridge** hosted by NAV-X at `navx-ftp-bridge.azurewebsites.net`. Business Central sends an HTTPS request to the bridge containing the connection details and the operation to perform. The bridge connects to your server, executes the operation, and returns the result over HTTPS. Your FTP server must be reachable from the internet on the configured port for this to work.

---

## Errors & Troubleshooting Answers

### The connection test fails — what should I check?

1. **Verify Host Name and Port** — confirm the server address and port are correct and the server is accessible from the internet
2. **Verify credentials** — re-enter the password, SSH key, or client certificate. If the credential was recently changed, update it on the Account Card and retest
3. **Try toggling Passive Mode** — if using FTP or FTPS and the server is behind a firewall or NAT, enabling **Passive Mode** often resolves connection failures
4. **Check server firewall rules** — the NAV-X Azure Function bridge connects to your server from Azure's IP ranges. Confirm your server's firewall allows inbound connections from external sources on the configured port
5. **Check the protocol** — confirm the server supports the selected protocol (FTP, FTPS, or SFTP)

### I cannot see the FTP/SFTP option when adding a file account

- Confirm the **External File Storage - FTP Connector** app is installed. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extensions**, and verify the app appears in the list
- Confirm your user has the **FTPSTANDARD** permission set assigned. See [Permission Setups](permission-setups.md)
- Sign out and sign back in to Business Central — permission changes require a fresh session to take effect

### I want to update my version of the connector

When we release a new version, you will receive an in-product notification in Business Central. To update manually, log in to the *Business Central Admin Center*, select your environment, open the installed apps list, and apply the available update. For detailed steps, see the [Microsoft documentation on managing apps](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-apps).

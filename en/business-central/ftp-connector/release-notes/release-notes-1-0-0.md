# Release Notes for March 2026 - Version 1.0.0

Initial release of the **External File Storage - FTP Connector**.

## New Features

### FTP/SFTP as a Native External File Storage Provider

Business Central's **External File Storage** system now supports FTP, FTPS, and SFTP servers as first-class storage back-ends. When installed, the connector registers itself as the **FTP/SFTP** connector option throughout Business Central — any feature that uses External File Storage can store and retrieve files on your server without additional configuration.

### Azure Function Bridge

Because Business Central is a cloud-hosted service and cannot connect directly to FTP/SFTP servers, the connector routes all file operations through a secure, stateless **Azure Function** hosted by NAV-X at `navx-ftp-bridge.azurewebsites.net`. The bridge receives HTTPS requests from Business Central, connects to your FTP or SFTP server, performs the operation, and immediately returns the result. **No data is stored or retained by the bridge at any point.**

### Multiple Protocol Support

Connect to any FTP or SFTP server using the protocol it requires:

| Protocol | Description |
| --- | --- |
| **FTP** | Plain File Transfer Protocol |
| **FTPS** | FTP over TLS — encrypts control and data connections |
| **SFTP** | SSH File Transfer Protocol — encrypts all communication via SSH |

### Flexible Authentication

| Authentication Type | Supported Protocols |
| --- | --- |
| Anonymous | FTP, FTPS |
| Username & Password | FTP, FTPS, SFTP |
| SSH Private Key | SFTP only |
| Client Certificate | FTPS only |

### Secure Credential Storage

Passwords, SSH private keys, and client certificates are stored in Business Central's **Isolated Storage** — an encrypted, per-company store that is separate from the database. Credentials are never written to database tables and cannot be read back through the UI after saving. When an account is deleted, all stored credentials are automatically removed.

### Guided Account Setup Wizard

The **Set Up FTP/SFTP Account** wizard walks you through connecting a server to Business Central in three steps:

1. **Connection** — select protocol, enter host name and port, set the account name, and configure passive mode
2. **Authentication** — choose the authentication type and enter the required credentials
3. **Advanced & Finish** — optionally set a default directory, test the connection, and save the account

All required fields are validated before advancing to the next step.

### Account Card

The **FTP/SFTP Account Card** provides a central place to view and manage each configured account:

- View and edit the account name, protocol, host name, port, and authentication settings
- Update credentials without exposing previously stored values
- Set or change the **Default Directory** — a base path automatically prepended to all file operations
- **Test Connection** — verifies the server is reachable and credentials are valid via the Azure Function bridge

### Full File and Folder Operations

The connector implements the complete Business Central External File Storage interface:

| Operation | Description |
| --- | --- |
| **List files** | List files in a directory path |
| **List directories** | List subdirectories at a path |
| **Upload file** | Create a new file at a specified path |
| **Download file** | Retrieve a file's content by path |
| **Copy file** | Duplicate a file to a new path |
| **Move file** | Move or rename a file |
| **Delete file** | Remove a file by path |
| **Create directory** | Create a new folder, including any missing intermediate folders |
| **Delete directory** | Remove a folder by path |
| **File exists** | Check whether a file exists at a given path |
| **Directory exists** | Check whether a directory exists at a given path |

### Multiple Account Support

You can configure as many FTP/SFTP accounts as needed — each with its own server, protocol, and credentials. All enabled accounts appear in Business Central's **File Accounts** list and are available as storage options throughout the system. Individual accounts can be **disabled** (hidden from selectors) without deleting them.

### Default Directory

Each account can have an optional **Default Directory** — a base path on the server that is automatically prepended to all file operation paths for that account. This allows Business Central to work within a specific subfolder while keeping the FTP user's access at a broader level.

### Passive Mode

FTP and FTPS accounts support **Passive Mode**, recommended for servers behind NAT or firewalls. Passive mode is automatically disabled for SFTP connections (where it is not applicable).

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-the-connector)

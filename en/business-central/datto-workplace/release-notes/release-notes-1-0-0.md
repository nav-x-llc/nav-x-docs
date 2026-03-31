# Release Notes for March 2026 - Version 1.0.0

Initial release of the **External File Storage - Datto Workplace Connector**.

## New Features

### Datto Workplace as a Native External File Storage Provider

Business Central's **External File Storage** system now supports Datto Workplace as a first-class storage back-end. When installed, the connector registers itself as the **Datto Workplace** connector option throughout Business Central — any feature that uses External File Storage can store and retrieve files in Datto Workplace without additional configuration.

### Multi-Region Support

Connect to any Datto Workplace deployment worldwide. The connector supports eight regional domains across four geographic regions:

| Region | Platforms |
| --- | --- |
| **United States** | `us.fileprotection.datto.com`, `us.workplace.datto.com` |
| **Europe** | `eu.fileprotection.datto.com`, `eu.workplace.datto.com` |
| **Canada** | `ca.fileprotection.datto.com`, `ca.workplace.datto.com` |
| **Australia** | `au.fileprotection.datto.com`, `au.workplace.datto.com` |

Within each domain, 18 data center cells are supported, covering the full range of Datto Workplace infrastructure deployments.

### Guided Account Setup Wizard

The **Set Up Datto Workplace Account** wizard walks you through connecting a Datto Workplace organization to Business Central in four steps:

1. **Welcome** — review prerequisites
2. **Connection** — select your Domain and Cell, and enter your API Client ID and Client Secret
3. **Account Name** — give the account a descriptive name for easy identification
4. **Test and Finish** — test the connection and save the account

All required fields are validated before advancing to the next step. The wizard creates a fully configured account ready for use immediately after completion.

### Secure Credential Storage

API credentials (Client ID and Client Secret) are stored in Business Central's **Isolated Storage** — an encrypted, per-company store that is separate from the database. Credentials are never written to database tables and cannot be read back through the UI after saving. When an account is deleted, its stored credentials are automatically removed.

The connector authenticates to the Datto Workplace API using **HTTP Basic Authentication** (Base64-encoded `ClientID:ClientSecret`), as required by the Datto Workplace Public REST API.

### Account Card

The **Datto Workplace Account Card** provides a central place to view and manage each configured account:

- View and edit the account name, domain, cell, and Client ID
- Update the Client Secret without exposing the previously stored value
- See the computed **Base URL** for the account (useful for troubleshooting)
- **Test Connection** — verifies credentials by listing Projects from the Datto Workplace API
- **Browse Projects** — opens Business Central's file browser pointed at this account, showing Datto Workplace Projects as top-level folders

### Full File and Folder Operations

The connector implements the complete Business Central External File Storage interface:

| Operation | Description |
| --- | --- |
| **List files** | List files in a folder path |
| **List directories** | List subfolders; Projects appear as root-level directories |
| **Upload file** | Create a new file at a specified path |
| **Download file** | Retrieve a file's content by path |
| **Copy file** | Duplicate a file to a new path (download then re-upload) |
| **Move file** | Move a file to a new path (copy then delete source) |
| **Delete file** | Remove a file by path |
| **Create directory** | Create a new folder, including any missing intermediate folders |
| **Delete directory** | Remove a folder by path |
| **File exists** | Check whether a file or folder exists at a given path |

### Project-Based Path Navigation

Datto Workplace uses integer IDs internally to identify files and folders. The connector transparently resolves human-readable slash-delimited paths (e.g., `Finance/2026/Invoices/INV-001.pdf`) to the corresponding Datto Workplace IDs on every operation. The first segment of a path is matched to a **Project name**; subsequent segments traverse the folder hierarchy within that Project.

When uploading a file to a path whose parent folders do not yet exist, the connector automatically creates any missing folders along the path.

### Multiple Account Support

You can configure as many Datto Workplace accounts as needed — each with its own region, cell, and credentials. All enabled accounts appear in Business Central's **File Accounts** list and are available as storage options throughout the system. Individual accounts can be **disabled** (hidden from selectors) without deleting them.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-the-connector)

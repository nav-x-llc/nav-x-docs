# Welcome to the External File Storage - FTP Connector Help

The **External File Storage - FTP Connector** is an app for Microsoft Dynamics 365 Business Central that connects Business Central to FTP, FTPS, and SFTP servers, making them available as native external file storage providers for all Business Central file operations.

## What Is This App?

When installed, this connector registers FTP/SFTP as an option in Business Central's **External File Storage** system. Any Business Central feature that stores or retrieves files — document attachments, report output, integration file pickup and archiving, and other file-related workflows — can use your FTP or SFTP server as its storage back-end without any additional configuration.

You manage FTP/SFTP accounts directly inside Business Central. There is no need to switch between applications or manually transfer files — everything is handled transparently through Business Central's standard file interfaces.

## How the Connector Works

Business Central is a cloud-hosted SaaS service and cannot connect directly to FTP or SFTP servers. To bridge this gap, the FTP Connector routes all file operations through a **secure Azure Function** hosted by NAV-X at `navx-ftp-bridge.azurewebsites.net`.

When Business Central needs to read or write a file, it sends an HTTPS request to the Azure Function containing the connection details and the operation to perform. The Azure Function connects to your FTP or SFTP server, executes the operation, and returns the result to Business Central.

> [!IMPORTANT]
> **NAV-X does not store any of your data.** The Azure Function is completely stateless — it connects to your server, performs the requested operation, and discards all information immediately. No files, credentials, or file content are retained at any point. Each request is independent and self-contained. Credentials are passed per-request and are never logged or persisted by the bridge.

## Features

- **Guided Account Setup** — a step-by-step wizard helps you connect an FTP or SFTP server in minutes
- **Multiple Protocol Support** — connect using plain FTP, FTPS (FTP over TLS), or SFTP (SSH File Transfer Protocol)
- **Flexible Authentication** — supports Anonymous, Username & Password, SSH Private Key, and Client Certificate authentication
- **Secure Credential Storage** — passwords, SSH keys, and client certificates are stored in BC's Isolated Storage and never written to the database
- **Full File Operations** — list, upload, download, copy, move, and delete files; create and remove directories
- **Default Directory** — configure a base path that is automatically prepended to all file operations for the account
- **Passive Mode Support** — enable FTP passive mode for servers behind NAT or firewalls
- **Connection Testing** — verify your server connection from the account card at any time
- **Multiple Account Support** — configure as many accounts as needed, each pointing to a different server

## How to Start

### Getting Started

Follow our [Getting Started](getting-started.md) guide to set up your first FTP or SFTP account and verify the connection.

### How To

- [How to Add an FTP/SFTP Account](how-to-add-account.md)
- [How to Manage Accounts](how-to-manage-accounts.md)

### Pages

- [FTP Account Card](page-ftp-account-card.md)
- [FTP Account Setup Wizard](page-ftp-account-wizard.md)

## Supported Editions and Countries

### Supported Editions

The FTP Connector supports both the *Essential* and *Premium* editions of Microsoft Dynamics 365 Business Central.

### Supported Countries

We currently support the following countries: *Canada, USA*

### Supported Languages

We currently support the following languages: *English (Canada), English (United States)*

## What's New

When a new version is released, Business Central will notify you with an in-product notification. You can also review the history of new features and fixes in our [Release Notes](release-notes.md).

## Questions or Missing Functionality

Contact us through our [Support](https://nav-x.com/support/) page. Feature requests are welcome — we review each one and incorporate them where possible.

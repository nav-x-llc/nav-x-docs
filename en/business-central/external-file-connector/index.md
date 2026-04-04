# Welcome to the External File Storage Help

**External File Storage** is an app for Microsoft Dynamics 365 Business Central that redirects document attachments from the Business Central database to an external storage provider of your choice. Files are stored and retrieved transparently through Business Central's standard attachment workflows — your users work the same way they always have, but the files live in your external storage system.

## What Is This App?

When installed, External File Storage intercepts every document attachment upload and download and routes it through a storage connector. The Business Central database stores only a lightweight reference to the file — the actual content lives in your external storage system.

Any connector built on Business Central's **External File Storage** framework can be used as the storage back-end. NAV-X provides several ready-made connectors:

- **[External File Storage - FTP Connector](../ftp-connector/index.md)** — store attachments on any FTP, FTPS, or SFTP server
- **[External File Storage - Datto Workplace Connector](../datto-workplace/index.md)** — store attachments in Datto Workplace

## Features

- **Transparent Attachment Handling** — Document attachment uploads and downloads are automatically redirected to external storage. Users see no difference from the standard Business Central attachment workflow
- **Configurable Folder Structure** — Define how files are organized in your external storage using a template with tokens like `{TableName}`, `{RecordNo}`, `{Year}`, and `{Month}`
- **Pick from External Storage** — A *Pick from External Storage* action on all document attachment factboxes lets users browse existing files in external storage and attach them to any Business Central record without uploading a new copy
- **Connector-Agnostic** — Works with any storage connector built on Business Central's External File Storage framework

## How to Start

### Getting Started

Follow our [Getting Started](getting-started.md) guide to install a connector, configure your first file account, and verify that attachments are routed to external storage.

### How To

- [How to Configure the Folder Path Template](how-to-configure-folder-template.md)
- [How to Pick a File from External Storage](how-to-pick-from-storage.md)

### Pages

- [External File Storage Setup](page-external-file-storage-setup.md)

## Supported Editions and Countries

### Supported Editions

External File Storage supports both the *Essential* and *Premium* editions of Microsoft Dynamics 365 Business Central.

### Supported Countries

We currently support the following countries: *Canada, USA*

### Supported Languages

We currently support the following languages: *English (Canada), English (United States)*

## What's New

When a new version is released, Business Central will notify you with an in-product notification. You can also review the history of new features and fixes in our [Release Notes](release-notes.md).

## Questions or Missing Functionality

Contact us through our [Support](https://nav-x.com/support/) page. Feature requests are welcome — we review each one and incorporate them where possible.

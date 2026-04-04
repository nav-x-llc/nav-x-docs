# Frequently Asked Questions

## Setup

- [Do I need a connector app to use External File Storage?](#do-i-need-a-connector-app-to-use-external-file-storage)
- [Which connector apps work with External File Storage?](#which-connector-apps-work-with-external-file-storage)
- [What is the Document Attachments scenario?](#what-is-the-document-attachments-scenario)

## Usage

- [Which Business Central records support external attachments?](#which-business-central-records-support-external-attachments)
- [What happens when I attach a file — where does it go?](#what-happens-when-i-attach-a-file--where-does-it-go)
- [What is Pick from External Storage?](#what-is-pick-from-external-storage)
- [What does the folder path template do?](#what-does-the-folder-path-template-do)

## Files & Data

- [Are my existing attachments moved when I install the app?](#are-my-existing-attachments-moved-when-i-install-the-app)
- [What happens to attachments if I remove External File Storage?](#what-happens-to-attachments-if-i-remove-external-file-storage)
- [What happens if the external storage is unreachable?](#what-happens-if-the-external-storage-is-unreachable)

## Errors & Troubleshooting

- [I cannot see the Pick from External Storage action](#i-cannot-see-the-pick-from-external-storage-action)
- [Attachments are not going to external storage](#attachments-are-not-going-to-external-storage)
- [I want to update my version of the app](#i-want-to-update-my-version-of-the-app)

---

## Setup Answers

### Do I need a connector app to use External File Storage?

Yes. External File Storage is a framework that intercepts attachment operations and routes them to an external storage provider — but it does not include a storage provider itself. You must install at least one connector app that implements the storage back-end.

### Which connector apps work with External File Storage?

Any connector app built on Business Central's External File Storage framework will work. NAV-X provides:

- **[External File Storage - FTP Connector](../ftp-connector/index.md)** — connects to FTP, FTPS, or SFTP servers
- **[External File Storage - Datto Workplace Connector](../datto-workplace/index.md)** — connects to Datto Workplace

Third-party connectors built on the same framework will also work.

### What is the Document Attachments scenario?

Business Central uses *File Scenarios* to route different types of file operations to different storage accounts. External File Storage registers a scenario called **Document Attachments**. When you assign a storage account to this scenario via **File Scenarios**, all document attachment uploads from Business Central are sent to that account.

---

## Usage Answers

### Which Business Central records support external attachments?

Any Business Central record that supports the standard document attachment factbox can have its attachments stored in external storage. This includes, but is not limited to: Customers, Vendors, Items, Sales Orders, Sales Invoices, Purchase Orders, Purchase Invoices, and many more.

### What happens when I attach a file — where does it go?

When a user attaches a file to a Business Central record, External File Storage:

1. Evaluates the **Folder Path Template** to determine the destination folder path (e.g., `Sales_Header/SO-001`)
2. Uploads the file to that path in your external storage account
3. Stores a lightweight reference in the Business Central database — the file name, path, and storage account — but not the file content

When the user later opens or downloads the attachment, Business Central retrieves the file from external storage using the stored reference.

### What is Pick from External Storage?

*Pick from External Storage* is an action available in the document attachment factbox on every record. It opens a file browser pointing at your external storage account, allowing you to select an existing file and attach it to the current record — without uploading a new copy. The attachment points to the file's existing location in external storage.

### What does the folder path template do?

The **Folder Path Template** controls how files are organized in your external storage when uploaded as attachments. It uses tokens like `{TableName}`, `{RecordNo}`, `{Year}`, and `{Month}` that are replaced with actual values at upload time. See [How to Configure the Folder Path Template](how-to-configure-folder-template.md) for details and examples.

---

## Files & Data Answers

### Are my existing attachments moved when I install the app?

No. Existing attachments that were stored in the Business Central database before External File Storage was installed remain there. Only new attachments uploaded after the app is installed and configured are routed to external storage.

### What happens to attachments if I remove External File Storage?

Attachments stored in external storage become inaccessible from within Business Central if the app is removed, because the download mechanism that retrieves them from external storage is part of the app. The files themselves remain in your external storage system and are not deleted. The Business Central attachment records also remain, but opening them will fail.

> [!WARNING]
> Before removing External File Storage, ensure all externally-stored attachments have been downloaded and re-attached directly in Business Central, or that you no longer need to access them through Business Central.

### What happens if the external storage is unreachable?

If the external storage system is temporarily unavailable, attachment uploads and downloads will fail with an error message. Business Central does not fall back to storing files in the database. Existing attachment references in Business Central remain intact and will work again once external storage is available.

---

## Errors & Troubleshooting Answers

### I cannot see the Pick from External Storage action

- Confirm a file account is assigned to the **Document Attachments** scenario. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **External File Storage Setup**, and choose **File Scenarios** to verify
- Confirm the assigned account is not disabled in the connector app
- Sign out and sign back in — configuration changes may require a fresh session

### Attachments are not going to external storage

- Open **External File Storage Setup** and choose **File Scenarios**. Confirm the **Document Attachments** scenario has a file account assigned
- Confirm the connector app is installed and the assigned account is enabled and has a working connection (use the connector's **Test Connection** feature)
- Confirm your user has the **NAVX EFS STANDARD** permission set assigned. See [Permission Setups](permission-setups.md)

### I want to update my version of the app

When we release a new version, you will receive an in-product notification in Business Central. To update manually, log in to the *Business Central Admin Center*, select your environment, open the installed apps list, and apply the available update. For detailed steps, see the [Microsoft documentation on managing apps](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-apps).

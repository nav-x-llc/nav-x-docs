# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Prerequisites

Before setting up External File Storage, you need:

- **A storage connector app installed** — External File Storage is a framework; it requires a separate connector app that provides the actual storage back-end. Install one of the following from Microsoft AppSource:
  - [External File Storage - FTP Connector](../ftp-connector/index.md) — for FTP, FTPS, or SFTP servers
  - [External File Storage - Datto Workplace Connector](../datto-workplace/index.md) — for Datto Workplace
- **A configured file account in that connector** — each connector has its own account setup. Follow the connector's getting-started guide to create at least one account before continuing here
- **Appropriate BC permissions** — see [Permission Setups](permission-setups.md)

## Permission Setup

Before using External File Storage, ensure your Business Central user has the correct permission set assigned. See [Permission Setups](permission-setups.md) for details.

## Step 1: Open the External File Storage Setup

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **External File Storage Setup**, and then choose the related link.

This page is the central configuration point for the app. From here you can configure the folder path template, manage file accounts, and assign storage providers to scenarios.

## Step 2: Assign a File Account to the Document Attachments Scenario

Choose the **File Scenarios** action on the **External File Storage Setup** page. This opens the standard Business Central **File Scenario Setup** page.

Assign your storage account to the **Document Attachments** scenario:

1. Locate or create the **Document Attachments** scenario in the list
2. In the **Account Name** column, select the file account you created in your connector app
3. Close the page

> [!NOTE]
> The **File Scenarios** page lists all available scenarios registered by connector apps. You will see **Document Attachments** — this is the scenario registered by External File Storage. Other scenarios may be visible if other connector-aware apps are installed.

## Step 3: Verify the Setup

To confirm attachments are routing to external storage:

1. Open any Business Central record that supports document attachments (for example, a Sales Order)
2. In the **Attachments** factbox, choose **Attach File** and upload any file
3. The file should upload successfully. To confirm it went to external storage rather than the BC database, check your external storage account — the file should appear under the folder path determined by your [folder path template](how-to-configure-folder-template.md)

You should also see a new **Pick from External Storage** action in the attachments factbox. This allows users to browse your external storage and attach existing files without uploading a new copy. See [How to Pick a File from External Storage](how-to-pick-from-storage.md).

## Next Steps

- [How to Configure the Folder Path Template](how-to-configure-folder-template.md) — customize how files are organized in your external storage
- [How to Pick a File from External Storage](how-to-pick-from-storage.md) — attach existing files without re-uploading
- [External File Storage Setup Page](page-external-file-storage-setup.md) — reference for all setup fields and actions

## See Also

- [Permission Setups](permission-setups.md)
- [FAQ](faq-index.md)

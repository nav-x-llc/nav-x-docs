# How to Pick a File from External Storage

The *Pick from External Storage* action lets you browse your external storage system and attach an existing file to a Business Central record — without uploading a new copy of the file. This is useful when a file already exists in your external storage (for example, uploaded by another system or a previous process) and you want to link it to a record in Business Central.

## Before You Start

- External File Storage must be set up with a file account assigned to the **Document Attachments** scenario. See [Getting Started](getting-started.md).
- The *Pick from External Storage* action only appears on attachment factboxes when a file account is configured. If you do not see the action, verify the setup is complete.

## Steps

1. Open any Business Central record that supports document attachments — for example, a Customer, Sales Order, or Purchase Invoice.
2. Locate the **Attachments** factbox. If it is not visible, choose **Show more** or look for the attachment count indicator at the top of the page.
3. In the **Attachments** factbox, choose **Pick from External Storage**.
4. A file browser opens pointing at your external storage account. Navigate to the folder containing the file you want to attach.
5. Select the file and choose **OK**.
6. The file is added to the record's attachment list. It is linked to the existing file in external storage — no duplicate is created.

## How It Works

When you use *Pick from External Storage*, Business Central creates a document attachment record that references the selected file's path in external storage. The file itself is not moved or copied. When any user later opens or exports the attachment, Business Central downloads the file directly from its location in external storage.

This is different from a standard attachment upload, where the file is written to a new path based on the folder path template.

## See Also

- [Getting Started](getting-started.md)
- [How to Configure the Folder Path Template](how-to-configure-folder-template.md)
- [External File Storage Setup Page](page-external-file-storage-setup.md)

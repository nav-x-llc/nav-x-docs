# How to Configure the Folder Path Template

The **Folder Path Template** controls how External File Storage organizes files in your external storage system. When a user attaches a file to a Business Central record, the template is evaluated to determine the folder path where the file will be stored.

The default template is `{TableName}/{RecordNo}`, which creates one folder per record. For example, attaching a file to Sales Order SO-001 stores it at `Sales_Header/SO-001/filename.pdf`.

## Supported Tokens

| Token | Replaced With | Example |
| --- | --- | --- |
| `{TableName}` | The name of the Business Central table, with spaces replaced by underscores | `Sales_Header` |
| `{RecordNo}` | The primary key (record number) of the record | `SO-001` |
| `{Year}` | The current year (4 digits) | `2026` |
| `{Month}` | The current month (2 digits, zero-padded) | `04` |

## Steps

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **External File Storage Setup**, and then choose the related link.
2. In the **Folder Path Template** field, enter your desired template.
3. Close the page — the new template is applied immediately to all future uploads.

> [!NOTE]
> Changing the template does not move files that have already been uploaded. Existing attachments retain their original paths. Only new uploads use the updated template.

## Template Examples

| Goal | Template | Example Result |
| --- | --- | --- |
| One folder per record (default) | `{TableName}/{RecordNo}` | `Sales_Header/SO-001` |
| Organized by year and month | `{TableName}/{Year}/{Month}/{RecordNo}` | `Sales_Header/2026/04/SO-001` |
| All attachments in one dated folder | `Attachments/{Year}/{Month}` | `Attachments/2026/04` |
| Fixed prefix per table | `BusinessCentral/{TableName}/{RecordNo}` | `BusinessCentral/Sales_Header/SO-001` |

## Tips

- Use a template that includes `{RecordNo}` to keep each record's files in their own folder. This makes it easier to find files in your external storage system and avoids name conflicts between files from different records.
- If your external storage system has a maximum path length, keep the template short. Very long table names or record numbers combined with a long template could generate paths that exceed the limit.
- The file name is always appended after the folder path. If two files with the same name are attached to the same record, the second upload may overwrite the first depending on your connector's behavior.

## See Also

- [External File Storage Setup Page](page-external-file-storage-setup.md)
- [Getting Started](getting-started.md)

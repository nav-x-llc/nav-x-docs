# Page: External File Storage Setup

The **External File Storage Setup** page is the central configuration point for the External File Storage app.

**To open:** Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **External File Storage Setup**, and then choose the related link.

## Fields

| Field | Description |
| --- | --- |
| **Folder Path Template** | Defines how files are organized in your external storage. The template is applied to every attachment upload to determine the folder path where the file will be stored. Supports tokens that are resolved at upload time. Default: `{TableName}/{RecordNo}`. See [Supported Tokens](#supported-tokens) below and [How to Configure the Folder Path Template](how-to-configure-folder-template.md) |

## Supported Tokens

The following tokens can be used in the **Folder Path Template**:

| Token | Replaced With | Example |
| --- | --- | --- |
| `{TableName}` | The name of the Business Central table the record belongs to, with spaces replaced by underscores | `Sales_Header` |
| `{RecordNo}` | The primary key (record number) of the record the attachment is added to | `SO-001` |
| `{Year}` | The current year as a 4-digit number | `2026` |
| `{Month}` | The current month as a 2-digit zero-padded number | `04` |

Tokens can be combined freely. For example:

| Template | Result for Sales Order SO-001 uploaded in April 2026 |
| --- | --- |
| `{TableName}/{RecordNo}` | `Sales_Header/SO-001` |
| `{TableName}/{Year}/{Month}/{RecordNo}` | `Sales_Header/2026/04/SO-001` |
| `Documents/{Year}/{Month}` | `Documents/2026/04` |

## Actions

### File Accounts

Opens the standard Business Central **File Accounts** page, where you can view, add, and manage all configured storage accounts across all installed connector apps.

### File Scenarios

Opens the standard Business Central **File Scenario Setup** page, where you assign a storage account to the **Document Attachments** scenario. The account assigned here receives all document attachment uploads from Business Central.

## See Also

- [Getting Started](getting-started.md)
- [How to Configure the Folder Path Template](how-to-configure-folder-template.md)

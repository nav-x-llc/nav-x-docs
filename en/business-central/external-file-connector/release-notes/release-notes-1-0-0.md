# Release Notes for March 2026 - Version 1.0.0

Initial release of **External File Storage**.

## New Features

### External File Storage for Document Attachments

Document attachments are automatically redirected to an external storage provider instead of the Business Central database. When a user attaches a file to any Business Central record, External File Storage intercepts the upload, routes the file to the configured external storage account, and stores only a lightweight reference in the Business Central database.

Downloads are equally transparent — when a user opens or exports an attachment, Business Central retrieves the file from external storage automatically. No change to standard attachment workflows is required.

### Configurable Folder Path Template

The folder structure in external storage is configurable via the **External File Storage Setup** page. The **Folder Path Template** uses tokens that are resolved at upload time to determine where each file is stored.

Supported tokens:

| Token | Replaced With |
| --- | --- |
| `{TableName}` | Business Central table name (spaces replaced by underscores) |
| `{RecordNo}` | Primary key of the record being attached to |
| `{Year}` | Current year (4 digits) |
| `{Month}` | Current month (2 digits, zero-padded) |

Default template: `{TableName}/{RecordNo}`

### Pick from External Storage

A **Pick from External Storage** action is added to the document attachment factbox on all Business Central pages. This allows users to browse existing files in external storage and attach them to any record without uploading a new copy. The attachment links to the file's existing location.

The action is only visible when a file account is assigned to the **Document Attachments** scenario.

### Connector-Agnostic Framework

External File Storage works with any storage connector built on Business Central's External File Storage framework. The same setup and user experience applies regardless of which connector is used for the actual storage back-end.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-the-app)

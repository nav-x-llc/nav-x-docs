# Release Notes for February 2026 Update - Version 1.3.0

## New Features

### Post-Processing Framework

It is now possible to define custom business logic that runs automatically after records are created during an import. For example, you can automatically release sales orders or purchase orders after import completes by configuring a post-processing codeunit.

**Post-Processing Trigger Modes** allow you to configure when post-processing executes:

- **Per Document** - Runs immediately after each document is completed (synchronous, during import)
- **After Processing** - Runs once after all rows have been imported (synchronous, end of import)
- **Job Queue** - Deferred asynchronous execution via job queue (asynchronous, background processing)

A new **Post-Process Entries** page allows you to view and manage post-processing results with status tracking (Ready, Completed, Error) and manual retry for failed entries.

Two **sample post-processing codeunits** are included: one to release sales orders after import and one to release purchase orders after import.

New fields have been added to the **Integration Setup**: "Post-Processing Codeunit" to select your custom codeunit and "Post-Processing Trigger" to choose when post-processing runs. Post-processing only triggers if a post-processing codeunit is configured.

### Background Processing (Deferred Asynchronous Mode)

A new **Processing Execution Mode** setting is available on the Integration record to control how imported data is processed:

- **Immediate (Synchronous)** - Process records in user session (blocks user, faster feedback)
- **Deferred Job Queue (Asynchronous)** - Queue to background session (non-blocking, can work while processing)

When using background processing, a **real-time progress dialog** displays live completed record count, live error record count, and status updates as records process. After background processing completes, a **batch results summary** shows total success and error counts, and the user receives a notification banner.

Import staging is always synchronous (requires user session for file handling), while record processing runs asynchronously if configured.

### Multi-Level Document Support

Support has been added for up to **10 levels of nested destination tables**, enabling complex master-detail-subdetail import structures. For example: Order, Lines, and Sublines. Line numbers are automatically generated (10, 20, 30 for first level; 10000, 20000, 30000 for nested levels).

### Improved Error Classification

Errors are now categorized as:

- **Field-level errors** (data validation failure)
- **Record-level errors** (processing failure)
- **Post-Processing errors** (custom logic failure)

### Process Status Flow

A new **Processed** intermediate status tracks records that have been successfully imported to Business Central but are awaiting post-processing completion.

## Resolved Issues

### Processing Execution Mode Validation

The system now properly validates delimiter configuration and resets settings when switching parsing types. Previously, switching between parsing types could leave invalid delimiter settings in place.

### Record Completion Pattern

Enhanced record insertion and modification using a wrapper codeunit pattern for improved reliability on on-premise installations.

## See Also

- [How to update my extensions](../faq-index.md)

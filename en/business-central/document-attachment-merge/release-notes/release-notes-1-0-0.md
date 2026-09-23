# Release Notes for September 2026 - Version 1.0

Initial release of **Document Attachment Merge**.

## New Features

### Transparent PDF Attachment Merge

Item-level PDF attachments on Sales and Purchase document lines are merged directly into the printed, previewed, saved, and emailed output of enabled Sales and Purchase reports. No separate action or button is needed — the merge happens automatically as part of the standard report generation flow.

### Per-Report Configuration

Choose exactly which reports participate in the merge on the **Document Attachment Merge Reports** page. Document type (Sales or Purchase) is detected automatically for each report at print time — there is nothing to configure beyond enabling the report.

### Fail-Safe Behavior

If the merge service cannot be reached, the **Document Attachment Merge Setup** page's **Fallback Behavior** setting determines whether the original, unmerged document is published or the report stops with an error.

### Batch-Print Safety

A print run covering more than one document at a time — for example, a multi-select batch print — is always left unmerged, so attachments can never be mixed up between documents.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-the-app)

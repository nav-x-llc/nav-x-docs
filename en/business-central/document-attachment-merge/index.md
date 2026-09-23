# Welcome to the Document Attachment Merge Help

**Document Attachment Merge** is an app for Microsoft Dynamics 365 Business Central that automatically merges PDF attachments from Sales and Purchase document lines — item attachments, spec sheets, certificates — into the printed, previewed, saved, and emailed report output for Sales and Purchase Orders and Quotes. There is no manual button to click and nothing extra to configure per document: the merge happens transparently as part of the standard report generation flow.

Document Attachment Merge is aimed at manufacturers, distributors, and other companies that routinely need to accompany order confirmations or quotes with supporting item documentation without asking users to manually collate multiple PDFs before sending.

## What Is This App?

When installed and configured, Document Attachment Merge intercepts the finished output of an enabled Sales or Purchase report immediately after Business Central renders it. If the document being printed has qualifying PDF attachments, the app sends the rendered PDF and the attachments to the NAV-X merge service, which combines them into a single PDF and returns it in place of the original. Every other report, and every report action that does not produce a PDF (Word, Excel, HTML), is left completely untouched.

## Features

- **Transparent Merge** — No separate action or button. Print, preview, save, or email a Sales or Purchase document as you always have; the merge happens automatically behind the scenes
- **Per-Report Control** — Choose exactly which reports participate in the merge on the [Document Attachment Merge Reports](page-document-attachment-merge-reports.md) page
- **Automatic Document Type Detection** — The app determines whether a report belongs to the Sales or Purchase document family at print time; there is nothing to configure per report beyond enabling it
- **Fail-Safe by Design** — If the merge service cannot be reached, the app can either publish the original, unmerged document or stop with an error — your choice, configured on the [Document Attachment Merge Setup](page-document-attachment-merge-setup.md) page
- **Batch-Print Safe** — A single print run covering multiple documents (for example, a multi-select batch print) is left unmerged, so attachments are never mixed up between documents

## How to Start

### Getting Started

Follow our [Getting Started](getting-started.md) guide to configure the merge endpoint, approve the required privacy notice, enable your first report, and verify that attachments are merged into the printed output.

### Pages

- [Document Attachment Merge Setup](page-document-attachment-merge-setup.md)
- [Document Attachment Merge Reports](page-document-attachment-merge-reports.md)

## Supported Editions and Countries

### Supported Editions

Document Attachment Merge supports both the *Essential* and *Premium* editions of Microsoft Dynamics 365 Business Central.

### Supported Countries

We currently support the following countries: *USA*

### Supported Languages

We currently support the following languages: *English (United States)*

## What's New

When a new version is released, Business Central will notify you with an in-product notification. You can also review the history of new features and fixes in our [Release Notes](release-notes.md).

## Questions or Missing Functionality

Contact us through our [Support](https://nav-x.com/support/) page. Feature requests are welcome — we review each one and incorporate them where possible.

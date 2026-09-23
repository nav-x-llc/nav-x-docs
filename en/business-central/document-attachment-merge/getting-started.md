# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Prerequisites

Before setting up Document Attachment Merge, you need:

- **A NAV-X merge service endpoint.** Document Attachment Merge sends rendered documents to a NAV-X-hosted merge service to combine them with their attachments. NAV-X provides the endpoint address for your environment when your subscription is activated — you will need this before completing setup
- **Appropriate BC permissions** — see [Permission Setups](permission-setups.md)

## Permission Setup

Before using Document Attachment Merge, ensure your Business Central user has the correct permission set assigned. See [Permission Setups](permission-setups.md) for details.

## Step 1: Open the Document Attachment Merge Setup

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Document Attachment Merge Setup**, and then choose the related link.

Enter the **Middleware URL** provided by NAV-X for your environment, and choose a **Fallback Behavior**. See [Document Attachment Merge Setup](page-document-attachment-merge-setup.md) for a description of both fields.

## Step 2: Approve the Privacy Notice

Document Attachment Merge sends the document being printed, and its attachments, to the NAV-X merge service outside your Business Central environment. Before any document is sent, an administrator must approve the corresponding privacy notice.

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Privacy Notices**, and then choose the related link
2. Locate **NAV-X Document Attachment Merge** in the list and approve it

> [!IMPORTANT]
> Until this privacy notice is approved, no document will be merged — reports print normally, but attachments are never sent to the merge service and no error is shown. If merging does not appear to work, this is the first thing to check.

## Step 3: Enable a Report for Merging

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Document Attachment Merge Reports**, and then choose the related link.

Add a new line and, in the **Report ID** field, look up the Sales or Purchase report you want to enable — for example, your environment's Sales Order Confirmation report. Leave **Enabled** checked. See [Document Attachment Merge Reports](page-document-attachment-merge-reports.md) for details.

You do not need to specify whether the report belongs to the Sales or Purchase document family — Document Attachment Merge determines this automatically each time the report runs.

## Step 4: Flag Attachments to Flow to the Document

Document Attachment Merge only merges attachments that already qualify as document-level attachments on the Sales or Purchase line — it does not create or move attachments itself. There are two ways to get a qualifying PDF onto the line:

- **From the item card** — attach the PDF to the item, and check **Flow to Sales Trx** (for Sales documents) or **Flow to Purch. Trx** (for Purchase documents) on the attachment. Business Central copies the attachment onto the document line automatically whenever that item is added to a Sales or Purchase line
- **Directly on the line** — attach the PDF to the Sales or Purchase line itself, in the line's own **Attachments** FactBox, and check the same **Flow to Sales Trx** / **Flow to Purch. Trx** option

Only **PDF** attachments are merged. Attachments of any other file type (images, Word documents, and so on) are left as-is and are not included in the merged output.

## Step 5: Verify the Setup

1. Create a Sales Order (or Purchase Order) and add a line for an item that has a qualifying PDF attachment
2. Print or preview the document
3. The resulting PDF should include the item's attachment appended after the standard report pages

If the output only contains the standard report with no attachment pages, see the [FAQ](faq-index.md#the-attachment-was-not-merged-into-the-output) for things to check.

## Next Steps

- [Document Attachment Merge Setup Page](page-document-attachment-merge-setup.md) — reference for all setup fields
- [Document Attachment Merge Reports Page](page-document-attachment-merge-reports.md) — reference for enabling reports

## See Also

- [Permission Setups](permission-setups.md)
- [FAQ](faq-index.md)

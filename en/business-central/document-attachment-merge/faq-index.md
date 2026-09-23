# Frequently Asked Questions

## Setup

- [Where do I get the Middleware URL?](#where-do-i-get-the-middleware-url)
- [Do I need to approve anything before merging will work?](#do-i-need-to-approve-anything-before-merging-will-work)
- [How do I choose which reports are merged?](#how-do-i-choose-which-reports-are-merged)

## Usage

- [Which attachments are merged?](#which-attachments-are-merged)
- [Does the merge work for batch printing?](#does-the-merge-work-for-batch-printing)
- [What happens if the merge service is unavailable?](#what-happens-if-the-merge-service-is-unavailable)

## Errors & Troubleshooting

- [The attachment was not merged into the output](#the-attachment-was-not-merged-into-the-output)
- [I want to update my version of the app](#i-want-to-update-my-version-of-the-app)

---

## Setup Answers

### Where do I get the Middleware URL?

NAV-X provides the **Middleware URL** for your environment when your subscription is activated. Enter it on the **Document Attachment Merge Setup** page. See [Getting Started](getting-started.md).

### Do I need to approve anything before merging will work?

Yes. Because document content is sent outside your Business Central environment to the NAV-X merge service, an administrator must approve the **NAV-X Document Attachment Merge** privacy notice on the standard **Privacy Notices** page before any merge is attempted. See [Getting Started, Step 2](getting-started.md#step-2-approve-the-privacy-notice).

### How do I choose which reports are merged?

Add a line for the report on the **Document Attachment Merge Reports** page and keep **Enabled** checked. See [Document Attachment Merge Reports](page-document-attachment-merge-reports.md).

---

## Usage Answers

### Which attachments are merged?

Only **PDF** attachments that are flagged to flow to the Sales or Purchase document — either attached to the item and marked **Flow to Sales Trx** / **Flow to Purch. Trx**, or attached directly to the document line with the same option checked. Attachments of any other file type are left untouched and are never merged.

### Does the merge work for batch printing?

No, not by design. If a single print run covers more than one document at once (for example, a multi-select batch print), the output is always left unmerged for every document in that run, so one document's attachments can never be mixed up with another's.

### What happens if the merge service is unavailable?

Depends on the **Fallback Behavior** configured on the **Document Attachment Merge Setup** page:

- **Use Unmerged PDF** (default) — the report publishes normally, without the attachments merged in, and no error is shown
- **Error** — the report stops and shows an error instead

---

## Errors & Troubleshooting Answers

### The attachment was not merged into the output

Check each of the following:

- Confirm the report you printed is listed and **Enabled** on the **Document Attachment Merge Reports** page
- Confirm the **NAV-X Document Attachment Merge** privacy notice is approved on the **Privacy Notices** page — until it is approved, reports print normally with no error, but nothing is ever sent to the merge service
- Confirm the **Middleware URL** is set on the **Document Attachment Merge Setup** page
- Confirm the attachment is a **PDF** file and is flagged **Flow to Sales Trx** or **Flow to Purch. Trx** (whichever matches the document)
- Confirm you printed, previewed, or emailed a single document — a multi-select batch print is always left unmerged
- If **Fallback Behavior** is set to **Error**, note the error message shown — it will include the underlying reason the merge failed

### I want to update my version of the app

When we release a new version, you will receive an in-product notification in Business Central. To update manually, log in to the *Business Central Admin Center*, select your environment, open the installed apps list, and apply the available update. For detailed steps, see the [Microsoft documentation on managing apps](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-apps).

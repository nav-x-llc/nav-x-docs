# Page: Document Attachment Merge Setup

The **Document Attachment Merge Setup** page is the central configuration point for the Document Attachment Merge app. There is a single setup record for the app.

**To open:** Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Document Attachment Merge Setup**, and then choose the related link.

## Fields

| Field | Description |
| --- | --- |
| **Middleware URL** | The web address of the NAV-X merge service that this environment sends documents to for merging. NAV-X provides this value for your environment as part of activating your subscription — enter it exactly as provided. The value must be a secure address (`https://`) pointing at a real, public host name; other values are rejected when you leave the field |
| **Fallback Behavior** | Specifies what happens when a document qualifies for merging but the merge service cannot be reached, or returns an error. Choose **Use Unmerged PDF** (default) to publish the document without its attachments merged in — the user sees no error, and the document prints, previews, saves, or emails normally. Choose **Error** to stop the report with an error message instead, so the failure is visible rather than silent |

> [!NOTE]
> Merging also requires the **NAV-X Document Attachment Merge** privacy notice to be approved on the standard **Privacy Notices** page. This is a one-time, tenant-wide approval — see [Getting Started](getting-started.md#step-2-approve-the-privacy-notice) for details. A blank **Middleware URL** or a not-yet-approved privacy notice has the same effect: reports print normally, but nothing is ever merged.

## See Also

- [Getting Started](getting-started.md)
- [Document Attachment Merge Reports](page-document-attachment-merge-reports.md)

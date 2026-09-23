# Page: Document Attachment Merge Reports

The **Document Attachment Merge Reports** page lists every report that is enabled for attachment merging. Add a line here for each Sales or Purchase report you want Document Attachment Merge to act on.

**To open:** Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Document Attachment Merge Reports**, and then choose the related link.

## Fields

| Field | Description |
| --- | --- |
| **Report ID** | The object ID of the report to enable for attachment merging. Use the field's lookup to browse and select a report by name rather than entering an ID directly — the exact report objects available (for example, your environment's Sales Order Confirmation report) can vary by localization |
| **Report Name** | The name of the selected report, shown automatically once **Report ID** is entered. This field cannot be edited directly |
| **Enabled** | Specifies whether attachment merging is active for this report. Uncheck this to temporarily turn off merging for a report without removing its line from this list |

## How Reports Are Matched

You do not choose whether a report belongs to the Sales or Purchase document family — Document Attachment Merge determines this automatically each time the report runs, based on the document the report is actually printing. Only Sales and Purchase document reports (for example Order Confirmations and Quotes) can be merged; the app has no effect on reports that print other kinds of records.

A report is only ever merged when all of the following are true at print time:

- The report is listed here with **Enabled** checked
- The report is producing a PDF (printing, previewing, saving as PDF, or emailing — not Save as Word or Save as Excel)
- The print run covers exactly one document — a multi-select batch print covering several documents at once is left unmerged
- The document has at least one qualifying PDF attachment (see [Getting Started, Step 4](getting-started.md#step-4-flag-attachments-to-flow-to-the-document))

## See Also

- [Getting Started](getting-started.md)
- [Document Attachment Merge Setup](page-document-attachment-merge-setup.md)

# How to Set Up Export File Destinations

This guide explains how to configure multiple output destinations for an export integration, so that a single export run writes its output to more than one location simultaneously — for example, writing to a file share and emailing the file at the same time.

## What Are Export File Destinations?

By default, an export integration writes output to a single location (typically downloaded to the browser or written to a fixed path). Export File Destinations allow you to configure multiple targets, each receiving the same export output whenever the integration runs.

**Common use cases:**

- Deliver an exported price list to an SFTP folder for a supplier and also email a copy to your purchasing team
- Write an inventory report to a shared network folder and simultaneously archive it to Azure Blob
- Send a daily order export to three different partner SFTP locations with the same configuration

## Prerequisites

- You have an export integration configured with field mappings
- The destination file locations (network folder, SFTP, Azure Blob) are accessible from the Business Central server
- For email destinations, outgoing email is configured in Business Central
- You have the **NAVX IF ALL** permission set

## Step 1: Open Export File Destinations

1. Open the **Integration** record (must be an export-type integration)
2. Choose **Export Destinations** from the action bar

The **Export Destinations** page opens. Add one row for each destination you want to write to.

## Step 2: Add a Destination

Choose **New** and configure:

| Field | Description |
| --- | --- |
| **Destination Type** | The type of output target: **File Source**, **Email**, or **Download** |
| **Enabled** | Turn off to temporarily skip this destination without deleting it |
| **Description** | An optional label (e.g., "Vendor SFTP", "Archive copy") |

Additional fields appear based on **Destination Type**.

### File Source Destination

Writes the export output to a location defined by a [File Source](page-file-sources.md).

| Field | Description |
| --- | --- |
| **File Source Code** | The File Source that defines the target location and credentials |
| **File Name** | The name of the output file. Supports `{date}`, `{time}`, `{datetime}`, and `{integrationcode}` placeholders (e.g., `prices_{date}.csv`) |
| **Subfolder** | Optional subfolder within the File Source path to write the file to |
| **Overwrite Existing** | Whether to overwrite a file with the same name if it already exists at the destination |

### Email Destination

Attaches the export output to an email and sends it.

| Field | Description |
| --- | --- |
| **Recipient Email** | One or more email addresses (semicolon-separated) |
| **Subject** | The email subject line. Supports `{date}`, `{integrationcode}`, and `{description}` placeholders |
| **Body** | The email body text |
| **Attachment Name** | The file name for the email attachment. Supports the same placeholders as File Source file names |

### Download Destination

Makes the export output available as a browser download for the user who triggered the export. This is the standard behavior and works without additional configuration. Add a Download destination explicitly only when you also have other destinations and still want the user to be offered a download.

## Step 3: Test Destinations

Before relying on export destinations in production, test them individually:

1. On the **Export Destinations** page, select a destination row
2. Choose **Test Destination** — the framework attempts to write a small test file to the configured location (or sends a test email)
3. Confirm the test file or email was delivered successfully

## Running an Export with Destinations

When you run an export (via the **Export** action or a scheduled Job Queue task):

1. The integration processes data and generates the export output (file content)
2. The output is written to each enabled destination in sequence
3. Results for each destination are logged in the **Export Log** (see [Monitoring](#monitoring-destination-results))

If a destination fails (e.g., SFTP connection error), the failure is recorded in the log but the remaining destinations still execute — one destination's failure does not block the others.

## Preview and Destinations

When using **Preview Export** (available on the export integration), the preview output is also written to all enabled destinations. This allows you to validate destination delivery with a small test dataset before running the full export.

To skip destinations during a preview, temporarily disable them on the **Export Destinations** page.

## Monitoring Destination Results

After each export run, the **Export Log** records the outcome per destination:

1. Open the **Import Logs** page and filter to your export integration
2. Open the log card for a run
3. The **Destination Results** section shows:

| Column | Description |
| --- | --- |
| **Destination** | The description or type of the destination |
| **Status** | **Completed** or **Error** |
| **File Name / Recipient** | The actual file name written or email address sent to |
| **Error Message** | Error details if the destination failed |

## Example: Vendor Price File to SFTP and Email

**Scenario:** A daily price export should write to a vendor's SFTP folder and email a copy to the purchasing manager.

**Destination 1 — SFTP:**

| Field | Value |
| --- | --- |
| Destination Type | File Source |
| File Source Code | VENDOR-SFTP |
| File Name | `prices_{date}.csv` |
| Overwrite Existing | Yes |

**Destination 2 — Email:**

| Field | Value |
| --- | --- |
| Destination Type | Email |
| Recipient Email | `purchasing@contoso.com` |
| Subject | `Vendor price export {date}` |
| Attachment Name | `prices_{date}.csv` |

Both destinations are written in the same export run without any additional manual steps.

## See Also

- [File Sources Page](page-file-sources.md)
- [How to Set Up File Pickup and Archiving](how-to-file-pickup.md)
- [How to Use Import Logging](how-to-import-logging.md)
- [How to Use Background Processing](how-to-background-processing.md)

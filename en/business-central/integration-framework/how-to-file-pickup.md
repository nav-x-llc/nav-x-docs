# How to Set Up File Pickup and Archiving

This guide explains how to configure Business Central to automatically poll a file location for new files, import them when found, and archive the originals for traceability and re-import.

## What Is File Pickup?

File Pickup allows Business Central to act as a file consumer — periodically checking a configured file source location, detecting new files that match a naming pattern, importing each file through the Integration Framework pipeline, and archiving the original after processing.

This replaces the manual step of uploading files from the Integrations page and enables fully unattended, scheduled file-based integrations.

**Common use cases:**

- A supplier drops a CSV price file to an SFTP folder nightly — BC picks it up automatically at 2 AM
- A warehouse system exports a fixed-text shipment file to a shared folder — BC imports it every 15 minutes
- An ERP sends JSON order acknowledgements to a blob container — BC polls every 5 minutes

## Prerequisites

- You have a file-based integration configured with field mappings (see the relevant import how-to for your file format)
- The file source location (shared folder, SFTP, blob container) is accessible from the Business Central server
- You have the **NAVX IF ALL** permission set

## Concepts

### File Source

A **File Source** is a named configuration that defines a file location, connection credentials, and file matching rules. One File Source can be shared by multiple integrations.

### File Pickup Track

For each file detected in a File Source, BC creates a **Pickup Track** record. This tracks the file name, detection time, processing status, and archive reference, giving you a full history of every file processed.

### Archive

After a file is successfully imported, the Integration Framework can archive the original file. The archive stores the file content so it can be retrieved and re-imported later if needed.

## Step 1: Create a File Source

1. On the **Integrations** page, choose **File Sources** from the action bar, or search for **NAVX IF File Sources** in Tell Me
2. Choose **New** to open the **File Source Card**
3. Configure the following fields:

### General

| Field | Description |
| --- | --- |
| **Code** | A unique code for this file source (e.g., `SFTP-VENDOR-PRICES`) |
| **Description** | A description of what this source provides |
| **Enabled** | Turn on to allow pickup polling |

### Location

| Field | Description |
| --- | --- |
| **Source Type** | The type of file location: **Network Folder**, **SFTP**, or **Azure Blob** |
| **Path / URL** | The folder path or container URL where files are deposited |
| **Username** | Credentials for SFTP or Azure Blob authentication (if required) |
| **Password / Access Key** | The password or key (stored securely in Isolated Storage) |

### File Matching

| Field | Description |
| --- | --- |
| **File Name Pattern** | A wildcard pattern to match files (e.g., `prices_*.csv`, `*.json`, `orders-????-??-??.txt`). Leave empty to pick up all files |
| **File Name Contains** | An optional substring filter — only files whose names contain this text are picked up |
| **Min File Age (minutes)** | Only pick up files that have been in the folder for at least this many minutes. Use this to avoid picking up files still being written by the upstream system. Default: `1` |

## Step 2: Link the File Source to an Integration

1. Open the **Integration** record that should process files from this source
2. In the **File Pickup** section, configure:

| Field | Description |
| --- | --- |
| **File Source Code** | The File Source to poll |
| **Enable File Pickup** | Turn on to activate automatic polling for this integration |
| **Delete After Import** | When enabled, the original file is deleted from the source location after a successful import. When disabled, the file remains (useful if other systems also read from the same location) |

## Step 3: Configure Archiving

Archiving stores a copy of each imported file so it can be retrieved later.

On the **Integration** record, in the **Archive** section:

| Field | Description |
| --- | --- |
| **Archive Mode** | **None** (no archiving), **Inline** (file content stored in the BC database), or **External** (file stored back to a designated archive path in the file source) |
| **Archive Path** | For **External** mode: the subfolder within the file source to move archived files to (e.g., `archive/`, `processed/`) |
| **Archive File Name** | Optional pattern for the archived file name. Supports `{filename}` (original name) and `{datetime}` (timestamp) placeholders. Example: `{filename}_{datetime}.bak` |

### Archive Retention

Archived files are automatically cleaned up according to a retention policy to prevent unbounded growth:

| Field | Description |
| --- | --- |
| **Archive Retention (days)** | Number of days to retain archived files. Files older than this are deleted by a weekly cleanup job. Set to `0` to retain indefinitely |

## Step 4: Schedule File Pickup

File pickup runs as a Job Queue task. To configure the schedule:

1. On the **File Source Card**, choose **Schedule Pickup**
2. Configure the Job Queue entry — polling interval (e.g., every 5 minutes, every hour), start time, and Job Queue category
3. Activate the entry

Alternatively, to trigger pickup manually at any time:

- On the **Integrations** page, choose **Run File Pickup** for the integration
- On the **File Sources** page, select a file source and choose **Run Pickup Now**

## Monitoring File Pickup

### Pickup Tracks

To view every file that has been detected and processed:

1. On the **File Source Card**, choose **Pickup Tracks**
2. The **File Pickup Tracks** page shows:

| Column | Description |
| --- | --- |
| **File Name** | The original file name |
| **Detected Date/Time** | When the file was first detected |
| **Processed Date/Time** | When the import completed |
| **Status** | **Detected**, **Processing**, **Completed**, or **Error** |
| **Error Message** | Error details if processing failed |
| **Archive Reference** | A link to the archived file (if archiving is enabled) |

### Import Log Archive Link

On the **Import Log** page, each entry for a file pickup run shows an **Archive Reference** field linking to the archived copy of the source file.

## Re-Importing from the Archive

If you need to re-process a previously imported file:

1. Open the **Import Log** for the original import run
2. Locate the entry and choose **Re-Import from Archive**
3. The archived file is retrieved and processed again through the full import pipeline
4. A new Import Log entry is created for the re-import run

> **Note:** Re-import is only available when **Archive Mode** is set to **Inline** or **External** and the archive file has not been deleted by the retention cleanup.

## Troubleshooting

### Files Are Not Being Picked Up

- Confirm the Job Queue entry for this file source is active and scheduled
- Check that **Enable File Pickup** is turned on in the integration
- Verify the **File Name Pattern** matches the actual file names in the source location
- Check **Min File Age** — if files are very new, they may not yet meet the minimum age threshold
- Test connectivity: on the File Source Card, choose **Test Connection** to verify BC can reach the file location

### "File Already Processed" Warning

The framework tracks processed file names per File Source. If a file with the same name is deposited again, it is skipped to prevent duplicate imports. To re-process a file with the same name, delete the corresponding Pickup Track record or use **Re-Import from Archive**.

### Archive Path Not Found

For **External** archive mode, verify the **Archive Path** exists in the file source location. BC does not create the folder automatically.

## See Also

- [File Sources Page](page-file-sources.md)
- [How to Use Import Logging](how-to-import-logging.md)
- [How to Use Background Processing](how-to-background-processing.md)
- [How to Set Up Export File Destinations](how-to-export-destinations.md)

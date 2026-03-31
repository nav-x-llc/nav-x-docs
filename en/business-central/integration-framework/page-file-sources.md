# Page File Sources

The **File Sources** page lists all configured file source locations used for file pickup and export file destinations. A File Source defines a file location (network folder, SFTP, or Azure Blob), the credentials to access it, and file matching rules.

**To open:** From the [Integrations page](page-integrations.md), choose **File Sources** from the action bar. Or search for **NAVX IF File Sources** in Tell Me.

## Overview

See [How to Set Up File Pickup and Archiving](how-to-file-pickup.md) for a full configuration walkthrough.

## Key Fields

### General

| Field | Description |
| --- | --- |
| **Code** | Unique identifier for the file source |
| **Description** | A description of the source's purpose |
| **Enabled** | Whether this source is active for pickup polling |

### Location

| Field | Description |
| --- | --- |
| **Source Type** | **Network Folder**, **SFTP**, or **Azure Blob** |
| **Path / URL** | The folder path or container URL |
| **Username** | Credential for authentication (SFTP or Azure Blob) |
| **Password / Access Key** | Stored securely in Isolated Storage; masked after saving |

### File Matching

| Field | Description |
| --- | --- |
| **File Name Pattern** | Wildcard pattern for matching files (e.g., `*.csv`, `orders-*.json`) |
| **File Name Contains** | Optional substring filter |
| **Min File Age (minutes)** | Minimum file age before pickup; prevents picking up files still being written |

### Archive

| Field | Description |
| --- | --- |
| **Archive Mode** | **None**, **Inline** (stored in BC database), or **External** (stored in archive path on file source) |
| **Archive Path** | Subfolder for external archive storage |
| **Archive File Name** | Optional pattern using `{filename}` and `{datetime}` placeholders |
| **Archive Retention (days)** | Days to retain archived files before cleanup. `0` = retain indefinitely |

## Actions

### Test Connection

Verifies that Business Central can connect to and list files in the configured file source location.

### Run Pickup Now

Triggers an immediate file pickup run for this file source, processing all matched files found in the location.

### Schedule Pickup

Opens the Job Queue entry configuration to set up recurring automatic polling.

### Pickup Tracks

Opens the **File Pickup Tracks** page showing the history of all files detected and processed from this source, with status, timestamps, and archive references.

## See Also

- [How to Set Up File Pickup and Archiving](how-to-file-pickup.md)
- [Integrations Page](page-integrations.md)
- [How to Use Import Logging](how-to-import-logging.md)

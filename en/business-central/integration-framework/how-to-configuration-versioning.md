# How to Use Configuration Versioning

This guide explains how to use the Integration Framework's built-in configuration versioning to track changes to your integration settings over time, compare versions, and restore a prior configuration when needed.

## What Is Configuration Versioning?

Every time you change an integration's configuration — field mappings, transformation rules, endpoint settings, or any other setting — the framework automatically saves a version snapshot. These snapshots form a complete history of your integration's configuration, allowing you to:

- See exactly what changed and when
- Compare any two versions side-by-side
- Restore the integration to any prior state with a single action
- Audit configuration changes without relying on git history or manual documentation

## How Auto-Save Works

The framework uses a **30-second debounce** to auto-save versions. This means:

1. You make a change to the integration
2. The framework waits 30 seconds after your last edit
3. If no further changes are made within that window, a version snapshot is saved
4. The snapshot captures the entire integration configuration at that moment using SHA-256 change detection — if the net result of your edits is identical to the last saved version, no new version is created

This approach batches rapid sequential edits (e.g., setting multiple fields in one session) into a single version rather than creating a new snapshot for every keystroke.

## Viewing Version History

1. Open the **Integrations** page and select an integration
2. Choose **Version History** from the action bar
3. The **Config Versions** page opens, listing all saved versions in reverse chronological order

| Column | Description |
| --- | --- |
| **Version No.** | Auto-incrementing version number |
| **Saved Date/Time** | When this version was saved |
| **Saved By** | The BC user who made the changes that triggered this save |
| **Description** | An optional description you can add to label significant versions (e.g., "Before production deployment") |
| **Change Summary** | A brief auto-generated note about what changed (e.g., "3 field mappings modified") |

## Comparing Two Versions

To see exactly what changed between any two versions:

1. On the **Config Versions** page, select the version you want to compare
2. Choose **Compare with Previous** to see changes relative to the version before it, or **Compare with Current** to see how this version differs from the current live configuration
3. The **Version Diff** page opens, showing a field-by-field comparison:

| Column | Description |
| --- | --- |
| **Field** | The configuration field that differs |
| **Previous Value** | The value in the older version |
| **Current Value** | The value in the newer version |
| **Change Type** | **Added**, **Modified**, or **Removed** |

Changes are color-coded:

- **Green** — value was added (field had no value before)
- **Yellow** — value was modified
- **Red** — value was removed

## Restoring a Prior Version

To roll back your integration to a previous configuration:

1. On the **Config Versions** page, select the version you want to restore
2. Choose **Restore This Version**
3. A confirmation dialog warns you that the current configuration will be overwritten
4. Choose **Yes** to proceed

The integration is immediately updated to match the selected version. A new version snapshot is automatically saved after the restore, so the restore action itself is part of the history and can itself be undone.

## Adding Descriptions to Versions

By default, versions are identified by timestamp and user only. For significant milestones (e.g., before going live, after a major field mapping change), add a description:

1. On the **Config Versions** page, select the version
2. Choose **Edit Description**
3. Enter a meaningful label (e.g., `Go-live configuration 2026-03-31`, `Before adding discount field`)

Descriptions are visible in the version list and in comparison views.

## Manually Saving a Version

Auto-save handles most cases, but you can trigger a manual save at any time — for example, before making a risky change:

1. On the **Integrations** page, open the integration
2. Choose **Version History** > **Save Version Now**
3. Optionally enter a description in the prompt
4. A snapshot is saved immediately regardless of the debounce timer

## Cleaning Up Old Versions

Version records accumulate over time. To remove old versions you no longer need:

1. On the **Config Versions** page, select one or more versions to delete
2. Choose **Delete**
3. Confirm deletion

> **Caution:** Deleted versions cannot be recovered. Keep at least a few historical versions for audit purposes.

You can also configure automatic cleanup: in the Integration Framework Setup, set **Max Versions per Integration** to a number (e.g., `50`). Versions beyond this count are deleted oldest-first during the next auto-save cycle.

## Best Practices

- **Before deploying to production**, manually save a version with a clear description so you have a known-good baseline to return to
- **After a failed import run**, check Version History to see if any recent configuration changes may have caused the issue
- **When handing off an integration** to another team member, add a description to the latest version documenting the current state
- **Use Compare** before restoring — always review the diff to confirm you are restoring to the right state

## See Also

- [How to Export and Import Definitions](how-to-definition-export-import.md)
- [How to Use Integration Templates](how-to-integration-templates.md)
- [Integrations Page](page-integrations.md)

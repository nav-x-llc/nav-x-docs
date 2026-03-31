# Page: Workflow Instances

The **Workflow Instances** page shows the current state of all records being tracked by a workflow. Each row represents one record's position in the lifecycle defined by the workflow.

**To open:** From the **Integration** record, choose **Workflow Instances** from the action bar. Or from the Workflow Card, choose **View Instances**.

## Workflow Instances List

| Column | Description |
| --- | --- |
| **Integration Code** | The integration this instance belongs to |
| **Record ID** | The Business Central record identifier being tracked |
| **Current State** | The state code the instance is currently in |
| **State Description** | The display name of the current state |
| **In State Since** | The date and time the instance entered the current state |
| **Time in State** | How long the instance has been in the current state |
| **Last Trigger** | The trigger type that caused the most recent transition |
| **Last Transition** | The code of the most recent transition that fired |

### Filters

Use the filter bar to narrow instances by:

- **Current State** — find all records in a specific state
- **Integration Code** — view instances for a specific integration
- **In State Since** — find records that have been in a state since a specific date (useful for identifying stalled records approaching a timeout)

## Actions

| Action | Description |
| --- | --- |
| **Advance Workflow** | For instances with available **Manual** transitions from the current state: opens a dialog to select and fire the transition |
| **View History** | Opens the **Workflow Instance History** page for the selected instance, showing every transition that has fired |
| **Open Record** | Opens the BC record associated with this instance |
| **Reset to State** | Moves the instance back to a specified state. Requires confirmation. Use with care — this does not reverse any actions that occurred during prior transitions |
| **Delete Instance** | Removes the workflow instance without firing any transitions. The record returns to untracked status. Use when a record should no longer participate in the workflow |

## Workflow Instance History

The **Workflow Instance History** page is opened from **View History** and shows the full audit trail for a single instance.

| Column | Description |
| --- | --- |
| **Timestamp** | When the transition fired |
| **From State** | The state the instance was in before the transition |
| **To State** | The state the instance moved to |
| **Transition Code** | The transition that fired |
| **Trigger Type** | What caused the transition (Manual, On Import, On Webhook, etc.) |
| **Triggered By** | The user or Job Queue entry that triggered the transition |
| **Notes** | Optional notes recorded at the time of the transition (e.g., webhook payload excerpt, polling response value) |

The history is append-only and cannot be edited or deleted.

## Advancing Workflow Manually

When an instance has one or more transitions with **Trigger Type = Manual** available from its current state:

1. Select the instance on the Workflow Instances page
2. Choose **Advance Workflow**
3. A dialog lists all available manual transitions — select the desired transition
4. Confirm — the instance moves to the **To State** of the selected transition and a history entry is created

If no manual transitions are available from the current state, the **Advance Workflow** action is disabled.

## See Also

- [How to Use the Workflow Engine](how-to-workflow-engine.md)
- [Page: Workflows](page-workflows.md)
- [Integrations Page](page-integrations.md)

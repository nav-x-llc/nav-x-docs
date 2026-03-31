# Page: Workflows

The **Workflows** list and **Workflow Card** pages are where you define and manage integration lifecycle state machines.

**To open:** From the **Integrations** page, choose **Workflows** from the action bar, or search for **Integration Workflows**.

## Workflows List

The list shows all defined workflows with their code, description, and number of active instances.

| Column | Description |
| --- | --- |
| **Code** | Unique identifier for the workflow |
| **Description** | Display name |
| **Initial State** | The state assigned to new workflow instances |
| **Active Instances** | The count of workflow instances currently in a non-final state |

### Actions on the Workflows List

| Action | Description |
| --- | --- |
| **New** | Create a new workflow |
| **Edit** | Open the Workflow Card for the selected workflow |
| **Delete** | Delete the workflow (only allowed when no active instances exist) |
| **View Instances** | Open the Workflow Instances page filtered to this workflow |

## Workflow Card

The Workflow Card is where you define the states, transitions, and configuration for a single workflow.

### General Fields

| Field | Description |
| --- | --- |
| **Code** | Unique code for this workflow |
| **Description** | Display name |
| **Initial State** | The state code that new instances start in. Must match a state defined in the States sub-page |
| **Enabled** | When disabled, no new instances are created and no transitions are evaluated for this workflow |

### States Sub-Page

Lists all states in the workflow.

| Column | Description |
| --- | --- |
| **Code** | Unique code within this workflow (e.g., `NEW`, `PENDING`, `CONFIRMED`) |
| **Description** | Display name shown in workflow instance views |
| **Is Initial** | Marks the starting state. Exactly one state must be marked initial |
| **Is Final** | Marks terminal states from which no further transitions fire |
| **Timeout (Hours)** | If set, instances that remain in this state beyond this duration will have the On Timeout Transition fired |
| **On Timeout Transition** | The transition code to fire when the timeout expires |

### Transitions Sub-Page

Lists all transitions in the workflow.

| Column | Description |
| --- | --- |
| **Code** | Unique code for this transition |
| **Description** | A label describing the transition (e.g., `Submit to Fulfillment API`) |
| **From State** | The state the instance must be in for this transition to be evaluated |
| **To State** | The state the instance moves to when this transition fires |
| **Trigger Type** | The event that causes this transition to be evaluated (Manual / On Import / On Export / On Webhook / On Scheduled Poll / On BC Event) |
| **Enabled** | When disabled, the transition is never evaluated |

Selecting a transition row and choosing **Edit** opens the transition detail page where trigger-specific fields and conditions are configured.

### Actions on the Workflow Card

| Action | Description |
| --- | --- |
| **View Instances** | Open the Workflow Instances page for this workflow |
| **Copy Workflow** | Create a copy of the entire workflow definition (states, transitions, conditions) with a new code |
| **Export** | Export the workflow definition to a JSON file for sharing or backup |
| **Import** | Import a workflow definition from a JSON file |

## Attaching a Workflow to an Integration

To use a workflow, open the **Integration** record and set:

- **Workflow Code** — the workflow to attach
- **Workflow Instance Mode** — **Per Record** (one instance per source record) or **Per Run** (one instance per integration run)

## See Also

- [How to Use the Workflow Engine](how-to-workflow-engine.md)
- [Page: Workflow Instances](page-workflow-instances.md)
- [Integrations Page](page-integrations.md)

# How to Use the Workflow Engine

This guide explains how to configure and use the Integration Framework Workflow Engine to define lifecycle state machines for integration processes — automatically advancing records through states in response to import events, export events, webhooks, scheduled polls, and Business Central events.

## What Is the Workflow Engine?

The Workflow Engine lets you model multi-step business processes as a series of **States** connected by **Transitions**. Each transition defines:

- **When** to move from one state to another (the trigger)
- **What conditions** must be true for the transition to fire
- **What happens** when the transition fires (optional actions)

A workflow attached to an integration drives records through their lifecycle automatically — without custom code — by reacting to events that occur during integration processing.

**Common use cases:**

- Track an order from `New` → `Submitted` → `Confirmed` → `Shipped` → `Closed` as export calls succeed and webhook events arrive
- Retry a failed export after a cooldown period using a scheduled poll trigger
- Notify an external system when a BC record reaches a specific state
- Gate downstream integrations on workflow state (only export records in `Confirmed` state)

## Concepts

### Workflow

A **Workflow** defines the state machine: the set of states, the transitions between them, and the initial state for new instances. A workflow is attached to one or more integrations.

### State

A **State** is a named stage in the lifecycle. Every workflow has exactly one **Initial State** — the state assigned to a new workflow instance when it is created. Other states can be marked as **Final** (no further transitions expected).

### Transition

A **Transition** moves a workflow instance from one state (**From State**) to another (**To State**) when a **Trigger** fires and any configured **Conditions** are satisfied.

### Workflow Instance

A **Workflow Instance** tracks a single record's current state. One instance exists per integration-record combination. The instance records:

- Current state
- History of all state transitions (timestamp, trigger, user or job)
- Any data values captured from triggers

### Trigger

A **Trigger** is the event that causes a transition to be evaluated. The framework supports the following trigger types:

| Trigger Type | Description |
| --- | --- |
| **Manual** | A user explicitly fires the transition using the **Advance Workflow** action |
| **On Import** | Fires after a record is successfully imported (inserted or modified) by the integration |
| **On Export** | Fires after a record is successfully exported by the integration |
| **On Webhook** | Fires when a matching webhook payload is received |
| **On Scheduled Poll** | Fires on a timer — the framework polls a REST API endpoint and evaluates the response |
| **On BC Event** | Fires when a Business Central table event occurs (insert, modify, delete, rename) |

## Setting Up a Workflow

### Step 1: Create the Workflow

1. Open the **Integrations** page and choose **Workflows** from the action bar (or search for **Integration Workflows**)
2. Choose **New** to create a new workflow
3. Fill in the **Code** and **Description**
4. Set **Initial State** — this is the state that new instances start in (you will create states in the next step)

### Step 2: Define States

On the Workflow Card, open the **States** sub-page and choose **New** for each state:

| Field | Description |
| --- | --- |
| **Code** | Unique code for this state within the workflow (e.g., `NEW`, `SUBMITTED`, `CONFIRMED`) |
| **Description** | Display name shown in the Workflow Instances list |
| **Is Initial** | Mark exactly one state as the initial state |
| **Is Final** | Mark terminal states (no further transitions will fire from a final state) |
| **Timeout (Hours)** | Optional. If a workflow instance remains in this state longer than this duration, the **On Timeout Transition** fires automatically via Job Queue |
| **On Timeout Transition** | The transition to fire when the timeout expires |

### Step 3: Define Transitions

On the Workflow Card, open the **Transitions** sub-page and choose **New** for each transition:

| Field | Description |
| --- | --- |
| **Code** | Unique code for this transition |
| **Description** | A label for the transition (e.g., `Submit to API`, `Mark Confirmed`) |
| **From State** | The state the instance must be in for this transition to be evaluated |
| **To State** | The state the instance moves to when this transition fires |
| **Trigger Type** | The event that causes this transition to be evaluated (see trigger types above) |
| **Enabled** | When disabled, the transition is never evaluated — useful for temporarily pausing a step |

### Step 4: Configure the Trigger

After setting the Trigger Type, additional fields appear:

#### On Webhook Trigger

| Field | Description |
| --- | --- |
| **Webhook Event Filter** | A value or pattern matched against the incoming webhook's event type field. Only webhooks matching this filter evaluate the transition |
| **Webhook JSON Path** | A dot-notation JSON path in the webhook payload used to extract a value (e.g., `data.status`) |
| **Webhook Expected Value** | If set, the transition fires only when the extracted JSON path value equals this value |

#### On Scheduled Poll Trigger

| Field | Description |
| --- | --- |
| **Poll Endpoint Code** | The REST API Endpoint to call on the polling schedule |
| **Poll Interval (Minutes)** | How often the Job Queue runs the poll for instances in this state |
| **Poll Response Path** | The JSON path in the poll response that contains the status value to evaluate |
| **Poll Expected Value** | The value at the response path that causes the transition to fire |

#### On BC Event Trigger

| Field | Description |
| --- | --- |
| **BC Table No.** | The Business Central table to watch |
| **BC Event Type** | The event to react to: Insert, Modify, Delete, or Rename |
| **BC Field Filter** | Optional. A filter on a field value in the triggering record (e.g., only fire when Status = 'Released') |

### Step 5: Add Conditions (Optional)

On each transition, open the **Conditions** sub-page to add guards:

| Field | Description |
| --- | --- |
| **Field Source** | Where to read the value: **BC Field** (from the source record), **Workflow Variable** (a value captured in a prior transition), or **Constant** |
| **Field No.** | When Field Source = BC Field: the field to read |
| **Variable Name** | When Field Source = Workflow Variable: the variable key |
| **Operator** | `=`, `<>`, `<`, `>`, `<=`, `>=`, `Contains`, `Starts With` |
| **Value** | The value to compare against |

All conditions on a transition must be true for the transition to fire (AND logic). Add multiple transitions from the same state with different conditions to implement branching (OR logic via separate transitions).

### Step 6: Attach the Workflow to an Integration

1. Open the **Integration** record
2. Set the **Workflow Code** field to the workflow you created
3. Choose the **Workflow Instance Mode**:
   - **Per Record** — one workflow instance per source record (most common)
   - **Per Run** — one workflow instance per integration run (for run-level lifecycle tracking)

When the integration runs, the framework automatically creates workflow instances for new records and evaluates transitions for existing instances.

## Using the Manual Trigger

For transitions with **Trigger Type = Manual**, users can fire them explicitly:

1. Open the **Integration** record and choose **Workflow Instances** from the action bar
2. Select the instance(s) to advance
3. Choose **Advance Workflow** — a dialog lists all available manual transitions from the current state
4. Select the transition and confirm

Manual transitions are useful for human-in-the-loop approval steps: the integration moves the record to a `Pending Approval` state automatically, and a user manually advances it to `Approved` or `Rejected`.

## Viewing Workflow Instances

To see the current state of all records tracked by a workflow:

1. Open the **Integration** record
2. Choose **Workflow Instances** from the action bar

The **Workflow Instances** page shows each instance's current state, how long it has been in that state, and the last transition that fired. Choose **View History** on any instance to see the full transition history.

## Timeout Handling

When a state has a **Timeout (Hours)** value, the Job Queue periodically checks whether any workflow instances have been in that state past the timeout duration. When it finds an instance that has timed out, it fires the **On Timeout Transition** automatically.

This is useful for:

- Escalating stalled records (e.g., if no confirmation webhook arrives within 24 hours, move to `Escalated` state)
- Auto-closing abandoned integrations
- Retrying after a cooldown (move to a `Retry Pending` state with a short timeout, then transition back to `Submitted`)

The timeout check runs as a separate Job Queue entry created by the framework. You do not need to create it manually.

## Troubleshooting

### Transition Is Not Firing

- Confirm the workflow instance is in the **From State** of the transition
- Check that the **Trigger Type** matches the event that occurred (import, export, webhook, etc.)
- Verify all **Conditions** on the transition are satisfied
- Confirm the transition is **Enabled**
- For webhook triggers, verify the **Webhook Event Filter** matches the incoming event

### Workflow Instance Not Created

- Confirm the integration has a **Workflow Code** set
- Confirm the workflow has an **Initial State** defined
- Verify the integration run completed without errors — instances are only created on successful processing

### Timeout Not Firing

- Confirm the Job Queue entry for workflow timeout processing is active (search for **Integration Workflow Timeout** in Job Queue Entries)
- Verify the **Timeout (Hours)** and **On Timeout Transition** are both set on the state

## See Also

- [Page: Workflows](page-workflows.md)
- [Page: Workflow Instances](page-workflow-instances.md)
- [How to Use Background Processing](how-to-background-processing.md)
- [How to Use REST API Webhooks](how-to-rest-api-webhooks.md)
- [How to Use Execution Chains](how-to-execution-chains.md)

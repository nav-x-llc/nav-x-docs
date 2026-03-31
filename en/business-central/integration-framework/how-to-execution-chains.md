# How to Set Up Execution Chains and Dependencies

This guide explains how to configure dependencies between integrations so that they always run in the correct order, and how to control what happens when a dependency fails.

## What Are Execution Chains?

An execution chain is a directed graph of integrations where some integrations depend on others completing successfully before they start. For example:

- Integration B must run after Integration A (because B uses data that A imports)
- Integration C must run after both A and B
- If A fails, B and C should be skipped automatically

Without execution chains, you must either manually run integrations in the right order, or use complex scheduling offsets and hope nothing runs late. Execution chains make the dependency explicit and enforced.

**Common use cases:**

- Import a customer master file first, then import orders that reference those customers
- Sync item records before syncing inventory levels that reference those items
- Run a data preparation integration before the main import that depends on its output

## Prerequisites

- You have two or more integrations that have an ordering dependency
- You have the **NAVX IF ALL** permission set

## Step 1: Open Integration Dependencies

1. Open the **Integrations** page and select the dependent integration (the one that should run *after* another)
2. Choose **Dependencies** from the action bar

The **Integration Dependencies** page opens for the selected integration.

## Step 2: Add a Dependency

Choose **New** to add a dependency:

| Field | Description |
| --- | --- |
| **Depends On Integration** | The Sorting Order of the integration that must complete before this one runs |
| **Failure Action** | What to do if the dependency integration fails (see [Failure Actions](#failure-actions) below) |
| **Description** | An optional label for the dependency link |

Repeat for each prerequisite integration.

## Failure Actions

| Failure Action | Behavior |
| --- | --- |
| **Skip** | If the dependency fails, skip this integration for this run (no error logged against it) |
| **Error** | If the dependency fails, mark this integration as failed too, without running it |
| **Run Anyway** | Run this integration regardless of whether its dependency succeeded or failed |

Use **Skip** when the downstream integration simply has no work to do if the upstream failed. Use **Error** when a failure upstream should be treated as a failure of the whole chain. Use **Run Anyway** when the integrations are loosely coupled and the downstream should always run.

## Step 3: View the Execution Chain

To see the full dependency graph for a set of integrations:

1. On the **Integrations** page, choose **Execution Chain** from the action bar
2. The **Execution Chain View** page opens, showing a tree visualization of the dependency graph

The tree view shows:

- Each integration as a node
- Arrows indicating "depends on" relationships
- The resolved execution order (topological sort)
- Any circular dependency warnings

## Circular Dependency Detection

If you configure a circular dependency (A depends on B, B depends on A), the framework detects this when you save the dependency and displays an error. Circular dependencies are not allowed.

## How Dependencies Affect Scheduled Runs

When an integration that is part of an execution chain is triggered by the Job Queue:

- Only **root** integrations (those with no dependencies) should have their own Job Queue entries
- When a root integration completes, the framework automatically triggers all integrations that depend on it (and have no other unsatisfied dependencies)
- Dependent integrations without their own Job Queue entry are triggered by the chain — they do not need to be scheduled independently

> **Important:** If a dependent integration has its own Job Queue schedule, it may run before its dependencies complete. For chains, remove standalone Job Queue schedules from dependent integrations and let the chain drive their execution.

## Example: Customer → Order → Fulfillment Chain

**Integrations:**

- **1000** — Customer Master Import (root)
- **2000** — Sales Order Import (depends on 1000)
- **3000** — Fulfillment Notification Export (depends on 2000)

**Dependencies configured:**

- Integration 2000: Depends On = 1000, Failure Action = Skip
- Integration 3000: Depends On = 2000, Failure Action = Skip

**Job Queue:** Only integration 1000 has a scheduled Job Queue entry.

**Run flow:**

1. Job Queue triggers integration 1000 (Customer Master)
2. 1000 completes successfully → framework triggers integration 2000 (Sales Orders)
3. 2000 completes successfully → framework triggers integration 3000 (Fulfillment)

If integration 1000 fails → 2000 is skipped → 3000 is skipped. No partial chain execution.

## Monitoring Chain Execution

Each integration in the chain writes its own Import Log entry. To view the full chain results:

1. Open the **Import Logs** page
2. Filter by the run date/time to see all integrations that ran as part of the same chain

The **Triggered By** field on each log entry shows whether the run was started by a Job Queue entry (manual/scheduled) or by a dependency chain completion.

## Troubleshooting

### Dependent Integration Never Runs

- Confirm the root integration's Job Queue entry is active
- Check that the dependency record exists on the dependent integration (not on the root)
- Verify the root integration completed with status **Success** — if it completed with **Errors**, check whether the Failure Action is **Skip** (which suppresses the downstream run)

### "Circular dependency detected" Error

Review your dependency configuration. Use the **Execution Chain View** to visualize the graph and identify the cycle.

### Dependent Integration Runs Before Its Dependency

The dependent integration has its own Job Queue entry that fires before the root finishes. Remove the Job Queue entry from the dependent integration.

## See Also

- [Execution Chain View Page](page-execution-chain.md)
- [How to Use Background Processing](how-to-background-processing.md)
- [How to Use Import Logging](how-to-import-logging.md)
- [Integrations Page](page-integrations.md)

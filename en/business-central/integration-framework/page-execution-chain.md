# Page Execution Chain View

The **Execution Chain View** page displays the full dependency graph for a set of integrations as a read-only tree, showing the resolved execution order and all dependency relationships.

**To open:** From the [Integrations page](page-integrations.md), choose **Execution Chain** from the action bar.

## Overview

See [How to Set Up Execution Chains and Dependencies](how-to-execution-chains.md) for a full configuration walkthrough.

## What the Page Shows

The Execution Chain View renders all integrations that have dependencies (or are depended upon) as a tree:

- **Root nodes** — integrations with no dependencies (these have their own Job Queue schedule)
- **Child nodes** — integrations that depend on the node above them
- **Arrows** — indicate "must run after" relationships
- **Execution Order** — the topological sort order in which the framework will process integrations

A warning indicator is shown next to any integration involved in a circular dependency.

## Key Fields (per node)

| Field | Description |
| --- | --- |
| **Integration** | The integration code and description |
| **Sorting Order** | The integration's Sorting Order |
| **Failure Action** | What happens to this node if its parent dependency fails: Skip, Error, or Run Anyway |
| **Has Own Schedule** | Whether this integration has a standalone Job Queue entry. A warning appears if a dependent integration has its own schedule (which may cause out-of-order execution) |

## Actions

### Open Integration

Opens the selected integration's card for editing.

### Open Dependencies

Opens the **Integration Dependencies** page for the selected integration to add, edit, or remove dependency links.

## See Also

- [How to Set Up Execution Chains and Dependencies](how-to-execution-chains.md)
- [Integrations Page](page-integrations.md)
- [How to Use Background Processing](how-to-background-processing.md)

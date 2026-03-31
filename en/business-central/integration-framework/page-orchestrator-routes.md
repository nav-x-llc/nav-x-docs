# Page Orchestrator Routes

The **Orchestrator Routes** subpage lists the routes defined for an orchestrator. Each route maps a condition on the source data to a target integration. Routes are evaluated in **Processing Order** — the first matching route wins.

**To open:** From the [Orchestrator Card](page-orchestrator.md), the Routes subpage is embedded directly on the card.

## Overview

See [How to Use the Orchestrator](how-to-orchestrator.md) for a full explanation of routing logic, condition operators, and examples.

## Key Fields

| Field | Description |
| --- | --- |
| **Processing Order** | The sequence in which routes are evaluated. Lower numbers are checked first. Must be unique within the orchestrator |
| **Description** | A description of what this route handles (e.g., "Customer records", "Order headers") |
| **Integration Sorting Order** | The Sorting Order of the target integration that processes records matching this route |
| **Route Condition** | The value to match against the routing key. Leave empty for a catch-all route that matches all unmatched records |
| **Condition Operator** | The comparison applied between the routing key value and **Route Condition**: `=`, `<>`, `Contains`, `Starts With`, `Ends With`, `Is Empty`, `Is Not Empty` |
| **Condition Logic** | When multiple conditions are configured on the same route: **All Match** (AND) or **Any Match** (OR) |
| **Enabled** | Whether this route is active. Disabled routes are skipped during evaluation |

## Condition Operators Reference

| Operator | Route matches when routing key… |
| --- | --- |
| `=` | Exactly equals the Route Condition value (case-insensitive) |
| `<>` | Does not equal the Route Condition value |
| `Contains` | Contains the Route Condition value as a substring |
| `Starts With` | Begins with the Route Condition value |
| `Ends With` | Ends with the Route Condition value |
| `Is Empty` | Is blank, null, or missing |
| `Is Not Empty` | Has any non-blank, non-null value |

## Routing Order and Catch-All Routes

Routes are evaluated from lowest to highest **Processing Order**. The first route whose conditions are satisfied receives the record.

To configure a **catch-all** route that processes any record not matched by earlier routes:

1. Create a route with a high **Processing Order** (e.g., 9999)
2. Leave **Route Condition** empty
3. Set **Condition Operator** to any value (it is ignored when Route Condition is empty)

## See Also

- [How to Use the Orchestrator](how-to-orchestrator.md)
- [Orchestrator Card](page-orchestrator.md)
- [Integrations Page](page-integrations.md)

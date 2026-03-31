# Release Notes for March 2026 Update - Version 1.7.0

## New Features

### Dry Run — Import Simulation Without Committing Data

A new **Dry Run** action lets you simulate a full import against live Business Central data without creating or modifying any records. The simulation engine runs the complete import pipeline — field mapping, validation, lookup resolution, duplicate detection, and pre/post-processing — and reports the outcome for every row.

Results are displayed in a **Dry Run Results** page with color-coded outcome indicators:

- **Insert** — a new record would be created
- **Modify** — an existing record would be updated
- **Delete** — an existing record would be removed
- **Skip** — the row would be skipped (e.g., duplicate detected, already up-to-date)
- **Error** — the row would fail with the displayed error

A **Field Detail** FactBox shows the resolved value of every mapped field for the selected result row, making it easy to diagnose unexpected outcomes before committing data. Results can also be exported to Excel for offline review.

### Structured Connection Test with Diagnosis

The **Test Connection** action on the REST API Connection Card now returns a structured result with:

- **HTTP Status Code** returned by the API
- **Diagnosis** — a plain-language explanation of what the status code means in context
- **Suggestion** — a recommended next step when the test does not succeed

Common status codes (401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Rate Limit, 500–599 Server Errors) each produce a specific diagnosis and suggestion rather than a generic "failed" message.

A separate **Test Endpoint** action is now available on the **REST API Endpoint Card**, allowing you to test a specific endpoint's URL and method independently of the connection-level test. Integration events (`OnBeforeTestConnection`, `OnAfterTestConnection`) allow extensions to customize the test behavior.

### Validation Rules Engine

A new **Validation Rules** engine lets you define field-level quality rules that are evaluated on every row during import or export — without requiring custom code.

Eleven rule types are supported:

| Rule Type | Description |
| --- | --- |
| Required | Field must not be empty |
| Min Length / Max Length | Text must be within a character length range |
| Numeric Range | Number must fall within a minimum and maximum value |
| Date Range | Date must fall within a specified range |
| Regex | Value must match a regular expression pattern |
| Allowed Values | Value must be in a defined list |
| Not Allowed Values | Value must not be in a defined list |
| Lookup | Value must exist in a BC table field |
| Cross Field | One field's value must match a condition relative to another field |
| Custom Expression | A free-form expression is evaluated against the row |

Each rule can be set to **Error** (reject the row) or **Warning** (log but continue) severity. Rules are direction-aware and can be limited to Import only, Export only, or both directions.

### Integration Templates

Integration configurations can now be saved as **Templates** and reused as the starting point for new integrations. The **Template Library** page shows all available templates from three sources:

- **User Templates** — configurations saved by users in the current company
- **Built-In Templates** — pre-configured integration patterns included with the framework
- **Imported Templates** — templates shared from other environments

Templates support **Template Parameters** — named substitution tokens that are prompted when creating an integration from a template, allowing environment-specific values (URLs, codes, prefixes) to be filled in without editing the template itself.

### Execution Chains

**Execution Chains** define the order in which integrations must run and how failures propagate. Each integration can declare dependencies on other integrations, and the framework topologically sorts the chain to ensure dependencies always complete before dependents start.

When scheduling integrations with the Job Queue, only the **root** integrations (those with no dependencies) need to be scheduled — the framework automatically runs dependents after each root completes.

Each dependency link has a **Failure Action** that controls what happens when the upstream integration fails:

- **Skip** — the dependent is not run this cycle
- **Error** — the dependent is marked as failed without running
- **Run Anyway** — the dependent runs regardless of the upstream result

Circular dependencies are detected and reported as a configuration error.

### Notifications and Alerts

A new **Alerts** system monitors integration health and sends notifications through Business Central Notifications, email, or both.

Five alert types are available:

- **Import Failed** — triggered when an import run fails
- **Export Failed** — triggered when an export run fails
- **High Error Rate** — triggered when the percentage of error rows exceeds a threshold
- **Long Running** — triggered when a run exceeds a configured duration
- **No Data Received** — triggered when a scheduled import returns zero rows

Each alert has a **Cooldown (Minutes)** setting to prevent repeated notifications for persistent issues. A **Test Alert** action sends a sample notification to verify channel configuration.

### Duplicate Detection and Cross References

A new **Duplicate Detection** system identifies existing Business Central records that match incoming source data before inserting new records.

The **Match Engine** compares a configured key field from the source against a BC table field using one of two strategies:

- **Exact** — values must match exactly (case-insensitive)
- **Normalized** — punctuation, spaces, and underscores are stripped before comparison

When a match is found, the configured **Duplicate Action** determines the outcome:

- **Update** — modify the existing record with the incoming data
- **Skip** — ignore the incoming row; the existing record is unchanged
- **Error** — reject the row with an error for manual review

Matched record pairs are stored in the **Cross Reference** table, which tracks the BC record identifier alongside the external key. The **Auto Create Cross Reference** option on the Integration Map automatically registers new records in the cross reference table when they are first created.

## See Also

- [How to update my extensions](../faq-index.md)

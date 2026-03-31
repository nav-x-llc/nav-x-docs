# Release Notes for March 2026 Update - Version 2.1.0

## New Features

### Integration Setup Wizard

A new **Setup Wizard** guides users through creating a fully configured integration in a step-by-step flow, making it easier to set up new integrations without prior knowledge of the framework's configuration details.

The wizard covers seven steps:

1. **Welcome** — choose the integration name, description, and source type (File or REST API)
2. **Source Configuration** — for file integrations: select or create a File Source; for REST API integrations: select or create a REST API Connection and Endpoint
3. **Field Discovery** — the wizard connects to the source and automatically discovers the available fields (column headers for files; JSON property paths for REST API responses)
4. **Auto-Mapping** — the Auto-Map Engine runs automatically against the discovered fields and suggests BC field mappings with color-coded confidence scores
5. **Mapping Review** — review, accept, change, or skip each auto-mapping suggestion before they are applied
6. **Scheduling** — optionally configure a Job Queue entry to run the integration automatically on a schedule
7. **Review** — a summary of the complete integration configuration before it is saved

The wizard creates a fully functional integration record with field definitions, mappings, and optionally a Job Queue entry in a single guided session.

### Dynamic Sync API — Business Central as a Data Provider

The Integration Framework now supports a **Dynamic Sync API** mode in which Business Central acts as the data provider, exposing integration data to external systems via the BC OData/API layer.

External systems call a BC API endpoint to retrieve data from an integration's configured source table and field mappings:

```text
POST /api/navx/if/v2.0/companies({id})/integrations({code})/Microsoft.NAV.getChanges
```

Two response modes are available:

**Changes Only** — the BC API returns only records that have changed since the last synchronization, tracked using a cursor. This mode is efficient for incremental sync scenarios where the external system only needs new and updated records.

**Full Dataset** — the BC API returns all records from the source table on every call. This mode is useful for systems that perform their own change detection or require a complete snapshot.

Both modes support **pagination** via `top` and `skip` parameters, allowing large datasets to be retrieved in manageable pages.

Two staging modes control how data is prepared before being served:

- **Database** — data is read directly from the BC table on each call (lowest memory, slightly higher latency for large tables)
- **In-Memory** — data is staged in memory on first call and served from the in-memory set for subsequent pages within the same sync session (consistent snapshot, faster pagination)

## Resolved Issues

### Multi-Value Constant Field Combination Generation

Fixed an issue where the combination index generator for Constant fields with three or more values would corrupt the combination index list, causing incorrect or truncated output when generating all combinations of multi-value Constant fields.

### Import Entry No. Sorting and Enum Ordinal Assignment

Fixed an issue where `FindLast` on import entry records was not properly scoped to the `Sorting Order` key, causing incorrect entry number assignment in specific scenarios. Also fixed enum ordinal assignment to correctly handle enum values specified as ordinal integers rather than text labels.

## See Also

- [How to update my extensions](../faq-index.md)

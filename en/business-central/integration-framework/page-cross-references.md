# Page Cross References

The **Cross References** page lists all cross-reference records for an integration. Each record maps an external system key to a Business Central primary key, enabling the Match Engine to detect duplicates and route records to the correct BC record on subsequent imports or exports.

**To open:** From the [Integrations page](page-integrations.md), select an integration and choose **Cross References** from the action bar.

## Overview

See [How to Set Up Duplicate Detection and Cross References](how-to-duplicate-detection.md) for configuration details, and [How to Use Identity Registry](how-to-identity-registry.md) for bidirectional sync scenarios.

## Key Fields

| Field | Description |
| --- | --- |
| **External Key** | The unique identifier of the record in the external system (e.g., vendor order number, CRM customer ID) |
| **BC Primary Key** | The Business Central primary key of the linked BC record |
| **Direction** | **Import** (created on import), **Export** (created on export), or **Both** (used in both directions) |
| **Created Date/Time** | When this cross-reference was first created |
| **Last Used Date/Time** | When this cross-reference was last matched during a run |

## Direction Values

| Direction | Created By | Used By |
| --- | --- | --- |
| **Import** | Auto-created when a new record is inserted via import | Import Match Engine (duplicate detection) |
| **Export** | Auto-created when the Identity Registry captures an external ID from an export API response | Export pipeline (POST vs PUT/PATCH routing) |
| **Both** | Upgraded from Export to Both when the same record is later matched during an import | Both import and export pipelines |

## Actions

### New

Manually creates a new cross-reference record. Use this to pre-populate links for existing BC records without re-importing them.

### Delete

Removes the selected cross-reference. The next import of this external key will treat it as a new record (insert).

### Delete All

Removes all cross-reference records for this integration. Use with caution — this will cause all records to be treated as new on the next import run.

## See Also

- [How to Set Up Duplicate Detection and Cross References](how-to-duplicate-detection.md)
- [How to Use Identity Registry](how-to-identity-registry.md)
- [Integrations Page](page-integrations.md)

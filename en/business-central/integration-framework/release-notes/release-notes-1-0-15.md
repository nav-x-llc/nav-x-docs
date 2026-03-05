# Release Notes for June 2025 Update - Version 1.0.15

## New Features

### Integration Framework Foundation

The initial release of NAV-X Integration Framework provides a core integration processing engine for Business Central. The following features are included:

**Integration Records** - Create and manage integration data import records with field mapping to Business Central table fields.

**Field Value Mapping** - Lookup-based field value translation allows you to map source field values to Business Central values.

**Integration Status Tracking** - Records are tracked through the following statuses: New, Ready, Processing, Completed, and Error.

**Error Handling** - Errors are collected and tracked during integration processing. Email notifications can be sent to a configured email address when failures occur.

**Job Queue Integration** - Processing can be scheduled via the Business Central job queue for automated imports.

**Line Number Support** - Automatic line number generation for document lines.

**Constant Fields** - Define fixed value fields in integrations for values that should always be the same.

**Validation Rules** - Field-level validation is performed during import to ensure data quality.

**Intermediate Tables** - Staging tables are used for BC-bound data, allowing review before final processing.

**Permission Sets** - Two permission sets are included: NAVX IF STANDARD and NAVX IF ALL.

**Extensible Architecture** - Event-based extension points allow for customization and integration with other solutions.

### Supported Platforms

- **Editions** - Essential and Premium editions of Microsoft Dynamics 365 Business Central
- **Countries** - Canada, USA
- **Languages** - English (Australia, Canada, Great Britain, United States)

## See Also

- [How to update my extensions](../faq-index.md)

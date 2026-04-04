# Release Notes for March 2026 Update - Version 2.0

## New Features

### New Field Types

Added support for **Date**, **Time**, and **DateTime** fields.

### New Tables

Added support for the following tables:

- Allocation Account
- Extended Text
- Extended Text Line
- Fixed Asset
- G/L Account
- Item Charge
- Item Journal Line
- Resource
- Standard Text

### New Reports

Custom fields can now be displayed on the following additional reports. Each report uses a custom layout provided by the extension. See [How to Configure Custom Fields on Reports](../how-to-configure-report-fields.md) for setup instructions.

Sales reports:

- Standard Sales - Order Conf.
- Standard Sales - Invoice
- Standard Sales - Credit Memo

Purchase reports:

- Purchase Order
- Purchase - Invoice
- Purchase - Credit Memo

Finance reports:

- General Journal - Test

### Custom Lookup Filters

The [Custom Fields Lookup](../page-customfield-lookup.md) page now includes a **Custom Filters** section that allows you to restrict which records appear in the lookup list. Filters can apply a constant value or match dynamically against a field on the current record.

### Prioritize Account Nos. for General Journal Lines

A new **Prioritize Account Nos.** field is available on the [Custom Fields Definitions](../page-customfield-definitions.md) page for fields defined on the *Gen. Journal Line* table. This setting controls which account field (*Account No.* or *Bal. Account No.*) takes priority when automatically copying custom field values to the journal line.

### Extension Packages

Two new extension packages are now available on AppSource:

- **Custom Fields Extension Pack 1** — adds field numbers 6–10 per table per type
- **Custom Fields Extension Pack 2** — adds field numbers 11–15 per table per type

See [Extension Packages](../extension-packages.md) for more information.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-custom-fields-by-nav-x)

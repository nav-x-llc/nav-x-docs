# Release Notes for December 2023 Patch - Version 2.3.140

## Resolved Issues

### Inconsistencies when processing documents

When a document is created, the **Invoice Due Date** is not filled on the Commission Lines. This has been corrected.
When a document is posted, the **Invoice Due Date** is not filled on the Commission Ledger Entries. This has been corrected.
When cash is applied, the **Date Invoice Paid** is not updated. This has been corrected.
When cash is applied, the **Document Status** is not updated. This has been corrected.
When running the **Update Commission Ledger Entry Status** report, the **Invoice Due Date** is not updated.
When running the **Update Commission Ledger Entry Status** report, the **Effective Date** is not updated, when the invoice was paid before the original **Effective Date** and the commissions are effective based on the date paid.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

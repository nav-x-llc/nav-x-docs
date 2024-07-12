# Release Notes for July 2024 Patch - Version 2.5.218

## Resolved Issues

### Commission Ledger Entry: Edit Cost

When editing cost on the commission ledger entries and afterwards running the "recalculate commissions" process, the commission ledger entries are re-adjusted to the original values. This has been corrected

### Changed by - conversion from old Entered/Changed by

When the "Entered by" and "Changed by" fields were introduced, the data update routine moved the values from "Entered/Changed by" to the new field. During this, the username was incorrectly set to the User's Security Id. This has been corrected.

### Document Status on Commission Ledger Entry for Credits

Document Status is ‘Completely Invoiced’ rather than ‘Completely Paid’ when Credit Memos are posted. This has been corrected.

### Salesperson Edit in Commission Split

When the salesperson is changed in the *Commission Split*, no reversing Commission Ledger Entry is created for the salesperson that has been removed from the split. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

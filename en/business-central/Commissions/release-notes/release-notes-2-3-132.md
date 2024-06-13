# Release Notes for December 2023 Update - Version 2.3.132

## New Features

### Create Zero Ledger Entries for Resources

When commissions are created for time based commissions and commissions are calculated for Resources and there are no commission rates defined for this Resource, a zero amount Commission Ledger Entry will now be created. This is controlled by a new field in the **Commission Setup**.

## Resolved Issues

### Recalculating Commissions on Document level

When commissions are recalculated for a single document using the **Recalculate Commissions** action on the document, an error is shown stating *Default Implementation cannot be used". This happens when a resource and salesperson exit with the same primary key. This has been corrected.

### Credit Memos: Recalculate Commissions

When Recalculating Commissions for Credit Memos, no Commission Ledger Entries are created for Resources. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

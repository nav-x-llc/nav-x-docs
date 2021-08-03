# Release Notes for May 2021 Update - Version 2.1.23

## New Features

### Commission Calculation on General Journal Lines

It is now possible to calculate commissions on transactions in the **General Journal**. When entering journal entries, the commissions are calculated based on the **G/L Accounts** on the journal lines and a defined field that defines the customer that is used. Learn more on [calculating Journal Commissions](../page-journal-commission.md) and on [setting up Journal Commissions](../commission-setup.md#features).

### Recalculate Posted Sales Documents

By default, when commissions for posted sales documents are recalculated, the *commissionable* flag was updated. This could cause unwanted adjustments to commissions as it could be that items or other entities should only be commissionable for new transactions. We added an option that allows deactivating this and not updating the *commissionable* flag.

### Process Commissions report

A new column was added to show the reason code for a commission. This is especially useful when using reason codes to classify commission adjustments.

## Resolved Issues

### Recalculate Commission issue

When running the **Recalculate Sales Documents** process and an order or other sales document has a salesperson assigned that is not enabled for commissions, an error occurred and the recalculation was not completed. This has been corrected.

### Commission Chart

If multiple salespeople have the same name, an error was displayed on the role center when the Commission Chart is the active chart. This has been corrected.

### Commissions by Salesperson

The report "Commissions by Salesperson" was missing a subtotal for the normal commissions for a manager. Therefore, it was not easy to determine which part of the commission was calculated from the manager portion and which was their own commission. Additionally, the total sum was missing decimals when the amount was a round amount (no decimals) This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

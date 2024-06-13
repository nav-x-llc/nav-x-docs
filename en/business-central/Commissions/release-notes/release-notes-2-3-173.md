# Release Notes for March 2024 Update - Version 2.3.173

## New Features

### Exclude zero amount sales lines

A new setup was added to the *Commission Types* called **Exclude Zero Amount Lines from Resource Commissions**. When a sales commission for resources is calculated and resources are setup to calculate for time based commissions, if the sales line doesn't have an amount, the **Commissionable Quantity** is set to zero. This will exclude "non billable" sales lines from counting into the *Percentage Billable*.

## Resolved Issues

### Commissions do not calculate for Commission Types

When a *Commission Rate* is defined using a **Commission Type** as well as a **Starting Date**, the commissions are not calculated on the sales document. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

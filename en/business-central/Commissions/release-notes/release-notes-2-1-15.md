# Release Notes for October 2020 Update - Version 2.1.15

> [!NOTE]
> This version is only available for Microsoft Dynamics 365 Business Central 17 or later on Business Central SaaS. For Business Central on premise customers, this version can be installed for earlier versions of Business Central as well.

## New Features

### Commission Draw

We have added additional functionality to allow for the calculation and application of a commission draw. We define *Commission Draw* as the ability to include guaranteed payments to your salespeople and reduce the actual commissions received by those guaranteed payments (which, for instance, could be part of their salary or an advance). Read more on [Commission Draw](../how-to-commission-draw.md).

### Commission Split Mapping

We have added the ability to define more generic **Commission Splits** for salespeople based on values on the documents. For instance, you can define the salesperson responsible for a sale automatically based on the ship-to state on the sales order or based on a dimension value. Read more on [Commission Split Setup](../commission-split-setup.md).

### Different Commission Accounts for different Salespeople

We made the setup of the Commission Liability and Commission Expense accounts more flexible. It is now possible to define accounts by salesperson. Read more on [Salesperson Setup](../salesperson-setup.md).

## Resolved Issues

### Document Type is blank when recalculating commissions for posted documents

When recalculating commissions for posted sales documents, the **Document Type** was blank and not set to the proper value. This has been corrected.

### Commission Split is incorrect on documents

When sales orders are created, the commission splits could have been incorrectly created under certain circumstances. This has been corrected.

### Commission update missing when closing invoice at time of posting

When the invoice is automatically closed at the time of posting, for instance, with a balancing account defined on the payment method, the status of the commission ledger entry was not properly updated. This has been corrected.

### Error in chart on role center

When multiple salespeople have the same name, an error was displayed stating that a column with the name already exists. This has been corrected.

### Setup Assistant

During the setup wizard, the salespeople were not configured properly to have them enabled for commissions. This has been corrected.


## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

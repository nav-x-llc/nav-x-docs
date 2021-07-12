# Release Notes for July 2021 Update - Version 2.1.27

## New Features

### Initial Commission Rates

We already had the ability to calculate different commissions for the initial sales to a customer to reward salespeople for onboarding new customers. We expanded this functionality to allow this initial commission rate go beyond the first sale. It is now possible to define a period of time it is valid for. Read more about [setting up initial commissions](../commission-setup.md#initial-rates)

### Copying of Commission Rates

It is now possible to copy the commission rates from one salesperson to another or from one item to another, for instance. Read more about [copying commissions](../page-commissions-rates.md#actions)

### Commission rate page access from Items

The action to access the Commission Rates page has been moved from group "Process" to group "Item". This has been done to make the same action always available in the same area throughout Business Central.

### Commission rate page available globally

It is now possible to search for that Commission Rate page in the search box in Business Central. The page will show all rates defined in the system.

## Resolved Issues

### Permissions

As a user with *Commission User* permissions assigned, the user might have received a permission error when posting commissions. This has been corrected.

### "This table is not supported" when recalculating posted sales documents

When running the task to recalculate posted sales document commissions, an error appeared stating "This table is not supported". This has been corrected.

### Line cost entry in Commission Lines

When cost was entered in the Commission Lines manually and the commission calculation is set to *Gross Profit*, the commissionable amount was not recalculated. This has been corrected.

### "Value cannot be found" in commission lines

When going to a new line in the Commission Lines subpage, the error "Value cannot be found" was displayed. This has been corrected.

### Posting General Journal Commissions error "Customer Ledger Entry does not exist"

When Commissions are calculated on the General Journal and the General Journal was posted, an error appeared showing "The Customer Ledger Entry does not exist". This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

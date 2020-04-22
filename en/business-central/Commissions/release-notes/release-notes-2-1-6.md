# Release Notes for January 2020 Update - Version 2.1.6

## New Features

### Commission Rate exclusions

It is now possible to define commission rates as "exclusions". This means that the rate defined there overrides any other rates defined. This is typically useful when the setup "Use only most specific" is not checked. For instance, you can setup a generic rate for all items and then setup a specific rate for one item with a "0" percent rate. This then will override the rate for this item to zero percent, instead adding both commission rates. Read more on [setting up commission rates](../commission-rate-setup.md).

### Tiered commission recalculation

When you setup tiered commissions, the commission percentage is increased for any future transaction to the next tier when the specific tier minimum is reached. It is now possible to define a condition that allows recalculating previous transactions as well. Read more on [setting up commission rates](../commission-rate-setup.md).

## Resolved Issues

### Quantity change does not update commissions on Credit Memo

When the quantity is changed on a credit memo, the commission amounts were not recalculated. This has been corrected.

### When commission calculation based on Gross Profit, a division by zero error was shown when entering sales documents

Under certain circumstances, a "division by zero" error was displayed when sales documents are entered. This has been corrected.

### Commission amounts are not calculated automatically when commission rates are only setup by item categories

When commission rates are setup by Item Category only, commission amounts are only calculated on sales documents when selecting the action "Calculate Commissions", but not automatically. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

# Release Notes for June 2020 Update - Version 2.2.4

## New Features

### Data Synchronization

Our gateway provides new functionality to allow the synchronization of data between different systems, such as the ERP system and an eCommerce platform. We have always synchronized customers and credit cards as well as ACH bank accounts. We are now supporting the synchronization of Payment Terms, Salespeople, Items, Sales Orders, and Sales Invoices. Learn more about [data synchronization](../data-synchronization.md).

### Default account type

While we provide the ability to process credit cards and ACH transactions, not all our customers are using both options. If only one of those options is enabled, we now default the account type on the **Authorize** and **Charge** pages to the active option to make data entry simpler.

## Issues

### Opening Sales Order with prepayment

When you have a sales order and have a prepayment percentage defined, an error was displayed when the sales order was opened. This has been resolved.

### Entering a prepayment percentage on a sales order

When a prepayment percentage was entered on the sales order, an error was received. This has been resolved.

### Division by zero

When lines are entered on documents and a 100% line discount was applied, the resulting total line amount is zero. An error was received trying to process credit cards, bank accounts, or upload the invoice to the portal. This has been corrected.

### Batch posting

When multiple invoices were batch posted, errors were received resulting in no invoices being posted. This has been corrected.

### Payment on account

There are various scenarios that caused payments on account not to work properly. All known issues have been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-credit-card)

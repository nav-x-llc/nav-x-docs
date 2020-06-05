# Release Notes for June 2020 Update - Version 2.1.9

## New Features

### Commission Split Mapping

It was always possible to define, which salespeople are the right ones for a specific customer or even a ship-to address. However, this provided sometimes difficulties to define the proper salesperson, especially, for instance, in the scenario where you have salespeople that are responsible for different territories. And when those territories are defined by the ship-to address, which can be entered manually, your setup must be able to be defined based on fields on the sales order.

We now added a mapping definition that allows mapping one or more salespeople to a transaction based on any field that is available on the Sales Header, which is the header portion of all sales documents. This also works with any custom fields or fields added through different apps. Read more on [Commission Split Mapping](../page-commission-split-mapping.md).

### Commission Report with periods

It is now possible to run the **Commissions by Salesperson** report for specific periods. It is not only possible to run it for the last period, but also define how many periods should be run and which periods. This is also available for the automatic report processing. Read more on [Commissions by Salesperson](../report-commission.md) and [Commission Setup](../commission-setup.md#reporting).

### Commission Journal

It is now possible to post any commission amounts through the commission journal, even if there is no document defined. This is especially useful, if you want to implement a *Commission Draw* functionality where you apply pre-paid commission amounts on a monthly or yearly basis to the commissions that will be paid. In this case, you would post a journal entry with a negative amount for each of the commission draws.

### Commission payments with automatically created document numbers

It is now possible to define a schema to automatically create a document number or external document number. Read more on the [Commission Setup](../commission-setup.md#commission-processing).

### Setup Salespeople as customers

We always allowed the definition of vendors or employees for your salespeople to enable paying them. However, it can also be important to be able to pay your customers certain discounts based on a total sales volume. You can set your customer up as a salesperson and use our Commission Management to calculate the payments. You now can define that you want to setup a customer for payment on your salesperson. If a customer is defined, sales credit memos for the commission amount will be created. Read more on [Salesperson Setup](../salesperson-setup.md).

### Permissions

We have updated our permission sets that are available for you to choose from to provide access to the commission functionality. The original permission set that was always provided, gave full access to all of the Commission functionality. We now provide an additional permission set for your normal users that provide read only access to the majority of functionality. Read more on [Permission Setups](../permission-setups.md).

## Resolved Issues

### No Commission Calculated when using campaigns

When a sales campaign is used on the sales order, but no commissions are defined for that campaign, the system did not default back to the normal commissions. This has been resolved.

### Commissions not updated when Invoice Discount defined

When an invoice discount is entered on the sales documents, the commissions were not recalculated. This has been corrected.

### Commission amount adjustment with wrong amount

When **Commission Effective Date** is set to *Date Paid* and **Commission Payable On** is set to *Cash Receipt*, adjustment entries are posted at the time of cash receipt. These adjustment entries are posted for differences in the commission rates at the time of posting the invoice and posting the payment. The adjustment entries were posted for the wrong amount, therefore, even when the commission rates were not changed, it still posted adjustments. This has been corrected.

## Commission Rates

We are now allowing to rename commission rates. If you previously tried to change certain fields of the commission rate entry, you received an error message that you cannot rename a record. This has been updated.

### Calculate Commissions when Qty. to Invoice is filled in

When the field **Qty. to Invoice** is updated, the commission amounts were not recalculated. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

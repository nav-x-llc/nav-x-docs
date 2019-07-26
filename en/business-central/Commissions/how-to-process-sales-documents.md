# How to process sales documents

## Orders and Invoices

The following process describes details that relate to the Commissions processing part of a sales order to cash process. It will not describe details on the order entry itself. All described elements are the same for sales orders and sales invoices.

### Order Entry

When a sales order is created and a customer is assigned, the salesperson and the salesperson split on the customer will be copied to the sales order. You can change the associated salespeople for each order. Changing the salespeople involved in this order is done by selecting the action **Salesperson Commission Split**. You can access this action by going to *Navigate > Order > Salesperson Split*. Only if you are commission manager, you can see and make changes to the salesperson setup. If not, you can see your own information, but cannot see any other salespeople’s setup.

The [**Salesperson Split**](page-commission-salesperson-split.md) page opens. It shows the configuration that is setup on the customer or Ship-to Address, in case there is a setup on the Ship-to Address. You would then click on “Edit List” and can delete the row or update the Split. You can also select **New** to add additional salespeople.

Once you enter the sales lines, the commissions are calculated on the fly. If the item, resource, or general ledger account are set to commissionable, you can then view the commissions by selection the action **Commissions** *(Navigate > Order > Commissions)*. If you are a commission manager, you can see all commission calculations and can make changes to them. If not, you can see only your own commissions.

The [**Sales Commission**](page-commission-sales-commission.md) page opens. This page shows general information about the customer, the total **Commissionable Amount**, and the **Commission Amount**. In the Sales Commission Lines, you can see the details about each sales line and what the commission calculation is for each of those lines. You can also make changes to those calculations, if you are a commission manager.

If you make any changes to the commissions, or make changes to the commission setups after the order was created, you can refresh the commissions by selecting the action **Calculate Commissions** *(Navigate > Order > Calculate Commissions)*. Since the commissions are calculated automatically at the time of order entry, you will not have to perform this action, unless you make any manual changes.

### Order Processing

If Commissions are payable at the time of order entry, Commission Ledger Entries are created at the time of releasing the order. If this is not done manually, the order is automatically released right before posting. Commission Ledger Entries are the base for the actual commission processing and payment of commissions. Learn more details about the [**Commission Ledger Entries**](page-commission-ledger-entries.md) page.

If Commissions are payable at the time of Shipment, the posting of the shipment will create **Commission Ledger Entries**. If Commissions are payable at the time of Invoice or Cash Receipt, the Commission Ledger Entries are created at the time of posting the invoice. The Commission Ledger Entries have a status defining, if a commission is already due to the salesperson or not.

### Posted Sales Invoices

The same pages **Salesperson Split** and **Commissions** are available also on the posted Sales Invoices. They can be used to review the commission calculations for this document. If you are a commission manager, you can review commissions for all salespeople, if not, you will only see your own commissions.

## Credit Memo

Processing of credit memos follows the same steps as the above described order processing. However, you can also create a credit memo by copying a posted invoice or getting individual lines. At this time, the commission data is copied back from the original document so that the same commissions will be credited.

Commissions for credit memos will become “payable” as soon as they are posted. They will reduce the salesperson commission for the specific period.

## See Also

- [Selling Products](https://docs.microsoft.com/en-us/dynamics365/business-central/sales-how-sell-products)
- [Sales Commission](page-commission-sales-commission.md)
- [Commission Ledger Entries](page-commission-ledger-entries.md)

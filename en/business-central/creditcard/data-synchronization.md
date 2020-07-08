# Data Synchronization

The gateway can be used as a middle tier between Business Central and eCommerce systems to synchronize different data. Currently, we provide synchronization for the following data.

## Payment Terms

Payment terms entered in Business Central are uploaded to the gateway. We are not importing new payment terms back from the gateway or updates to existing ones.

## Salespeople

Salespeople entered in Business Central are uploaded to the gateway. We are not importing new salespeople back from the gateway or updates to existing ones.

## Items

All items in Business Central are uploaded to the gateway. We are not importing new items from the gateway or updates to existing ones.

## Sales Invoices

Any open, posted sales invoices are uploaded to the gateway, if it is enabled for the specific customer. Customers can pay those invoices on the Customer Portal. The payment information is downloaded again and invoices in Business Central are then closed out.

## Sales Orders

Any open sales orders are uploaded to the gateway, if it is enabled for the specific customer. Sales orders are also imported back into Business Central from the gateway and can either update the existing sales orders or can also create new sales orders.

## See Also

- [Gateway Sales Documents](page-credit-card-sales-document.md)

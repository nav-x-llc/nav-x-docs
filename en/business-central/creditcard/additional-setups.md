# Additional Setups

While the NAV-X Credit Card setup performs most of the setups for you, you might want to understand and review the setups to be able to make changes when needed. All setups described below can be reached by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon and entering the headings below. They can also be accessed from the [Credit Card Setup](credit-card-setup.md) page.

## Currencies

The gateway requires the definition of the **ISO Numeric Code** for each currency used in credit card transactions. Those currencies are used to tell the gateway the currency for the transaction amount.

## Account Type Setup

Account types are used to define the different credit card types and bank account types that are supported by the system. Currently, it is not possible to add additional account types. Account types will automatically be created when the app is originally installed and configured. The Account Type list can be accessed from the Credit Card Setup under Process. The Credit Card Setup can be found under *Setup & Extensions > Manual Setup*.

## Payment Method Setup

Payment Methods are used by NAV-X Credit Card to determine, if the customer will pay by credit card or a different method of payment. You can find details on [Defining Payment Methods](https://docs.microsoft.com/en-US/dynamics365/business-central/finance-payment-methods) in the Microsoft Documentation.

NAV-X Credit Card creates automatically a new payment method for you called **CREDITCARD**. If such a payment method exists already (or one called **CARD**), it will modify the setup to utilize this as a credit card payment. This payment method is setup to be used on customer setups and sales or service documents to indicate that the customer pays via credit card. If you want to configure a new payment method in this manner, you cannot define a **Bal. Account No.** and you have to set the field **Payment Type** to **Credit Card**.

Another payment method is also created automatically called **BANK**. If such a payment method already exists, it will modify the setup to utilize this as a ACH payment. This payment method is setup to be used on customers setups and sales or service documents to indicate that the customer pays via ACH payment. If you want to configure a new payment method in this manner, you cannot define a **Bal. Account No.** and you have to set the field **Payment Type** to **ACH**.

You can also define a default **Payment Terms Code** on each payment method. This payment term will then automatically be added when this payment method is used.

## Unit of Measure Setup

Units of measure are used to define the packing sizes items are sold in or stored in inventory. Unit of measures are also transmitted to the gateway on credit card transactions in the line level detail. These details are transmitted for PCI compliance. Units of measure are standardized for this and we need to map the units of measure you have in your solution to the standard codes used for credit card processing. NAV-X Credit Card already has done this automatically for you. If it could find a proper match, the match is configured. If not, the standard code of **PCE** for **Piece** was used.

While you can process credit card transactions with this setup, it is suggested to review the configured units of measure and make sure that the mappings are done properly.

## Item Setup

If you require additional information on how to setup new items, please read [Register New Items](https://docs.microsoft.com/en-US/dynamics365/business-central/inventory-how-register-new-items). To be PCI Level III compliant, document line details must be transmitted for a transaction. You already defined the standard codes for units of measure, which is one of the data elements that needs to be transmitted. The second element is the **Commodity Code**. A commodity code classifies an item – usually only required for exports of goods. This field can be found in the **Costs & Pricing** fast tab under **Foreign Trade**.

## Source Code Setup

Source codes are tags on transactions to identify the source of a transaction. For instance, any transaction posted from a sales order has a specific source code attached to identify this source. A source code is also required for credit card transactions. This is done automatically at the time of installation, but you can review and modify the source code. The field for credit card transaction source codes is called "Credit Card Payments" and accessible on the Source Code Setup. You can find this page through the Business Central search.

## Commodity Code Setup

Commodity codes are required to be used on items. Items will be classified for credit card transactions with PCI level III compliance as described above. The Commodity Code list can be accessed from the Credit Card Setup under Process. The Credit Card Setup can be found under *Setup & Extensions > Manual Setup*.

## User Setup

[!include[credit-card-user-setup.md](includes/credit-card-user-setup.md)]

## See Also

- [Credit Card Setup](credit-card-setup.md)
- [Defining Payment Methods](https://docs.microsoft.com/en-US/dynamics365/business-central/finance-payment-methods)
- [Register New Items](https://docs.microsoft.com/en-US/dynamics365/business-central/inventory-how-register-new-items)

# Credit Card Page

The **Credit Card** page is the main page to enter credit card information for your customer. It can be accessed from you customers (*Navigate > Customer > Credit Cards > Manage > View or Edit*). You can enter new credit cards or update existing credit cards. If a credit card is entered and tokenized, you will only see the last four digits in the field **Card Number**. This is called a *Masked Credit Card Number* and indicates that the credit card data is not stored in Business Central, but at the Gateway.

## General fast tab

[!include[credit-card-fields](includes/credit-card-fields.md)]

## Billing Address fast tab

[!include[credit-card-fields](includes/credit-card-billing-address-fields.md)]

## Fact Boxes

### Credit Card Details

The **Credit Card Details** fact box shows information about the individual credit card. It shows the masked **Card Number** as well as amounts that are currently authorized, charged, refunded, or credited, or authorizations that are expiring soon. You can click on the individual values to drill down into the [Transaction Ledger Entries](page-transaction-entries.md).

### Links

You can assign files or websites to this credit card. Learn more about [Adding Links](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-how-add-link-to-record).

> [!WARNING]
> You are not allowed to store the card's security code or any other credit card related information, such as a paper card authorization form. This will violate PCI compliance requirements.

### Notes

You can enter notes for this credit card. For instance, you can enter information who and when authorized you to charge the cards or if the card was blocked, why it was blocked.

> [!WARNING]
> You are not allowed to store the card's security code or any other credit card related information. This will violate PCI compliance requirements.

## Actions

### Entries

You can see all transactions that were posted against a credit card. These transactions can be authorizations, charges, or refunds. You also can see any failed transactions and their errors. Learn more about [Transaction Ledger Entries](page-transaction-entries.md).

## See Also

- [Credit Card Types](page-credit-card-types.md)
- [Automated Processes](job-queue-setup.md)
- [Transaction Ledger Entries](page-transaction-entries.md)
- [Adding Links](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-how-add-link-to-record)

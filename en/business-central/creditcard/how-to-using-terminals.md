# How To Process Credit Cards with a Terminal

Once you have setup at least one terminal, you can start processing credit cards for sales documents using a terminal. If you have not setup a terminal yet, read more about [Setting Up Terminals](terminal-setup.md).  Processing credit cards using a terminal is the same for all sales documents. The following instructions will be shown using a sales order as an example.

## Sales Document

Before a credit card can be processed using a terminal, the **Payment Method** has to be set to a payment method with the **Payment Type** of **Credit Card**. It is also advised to define a **Payment Term** that does not give a payment discount for early payment, since all transactions will be paid early.

The **Payment Method** could be set to **Credit Card** for credit card payments and **Cash** (or a similar method) for cash payments to identify the source of the payment. Please make sure that no credit card is defined on the sales document.  No payment service should be defined either, since offering the customer to pay the invoice via credit card or PayPal does not make sense in this case – the invoice is already paid when the customer swipes the card.

After entering the sales document and adding all products to be sold, you are ready to process a credit card transaction. You can start this with the action **Swipe Card** on the ribbon.

As soon as the page opens, the status of the terminal is retrieved. If the terminal is connected, the transaction is sent to the terminal. The terminal will then display some instructions to the customer, please follow the instructions on the terminal. Once the transaction is finished, the page is updated and the **Transaction Status** will show *Transaction Complete*. You then can close the page.

If the terminal is not connected, you will see the **Terminal Status** set to *Offline* and a message stating that the terminal is not ready to process transactions. Once you turn on the terminal, the status will change to “connected”. You can then start processing the transaction by clicking the action **Start Transaction**.

If the card cannot be swiped or the chip cannot be read, you can also enter the card information manually and then select the action **Process Card**.

Once the transaction is completed and you close the page, the payment will be posted in the system against the customer ledger and applied to the sales document. You can then post the invoice that is then automatically be closed out by the posted credit card payment.

> [!NOTE]
> Swiped credit cards processed through this process are not saved for the customer. If you want to save credit cards, please define the credit cards on the customer.

## See Also

- [Setting Up Terminals](terminal-setup.md)

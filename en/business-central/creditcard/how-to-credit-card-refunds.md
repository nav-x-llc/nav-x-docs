# How to Process Refunds

There are different reasons why a refund might have to be processed. The customer might have returned the product, you might have created an incorrect invoice, or the wrong bank account or credit card was charged. This are just a few of the reasons. While all of those refunds can be processed the same way, it might be appropriate to create refunds differently, based on the current scenario. We are going to look at the possibility to create refunds from invoices directly, posting credit memos, and just refunding the payment directly from the customer ledger entries to be able to pay with a different payment method.

> [!IMPORTANT]
> NAV-X Credit Card automatically determines, if the transaction can be voided or a refund needs to be processed. If the refund is processed the same day of the charge, the transaction can usually be voided. If a transaction is voided, it will not show up on the customer's statement. Only if it is refunded, the original charge and the refund will be listed on the statement.

## Cancel or Correct Invoices

When need to cancel or correct an invoice, you can use the the functions **Cancel** or **Correct** directly from the posted sales invoice. You can find additional documentation on how to cancel or correct an invoice in the [Microsoft Dynamics 365 Business Central documentation](https://docs.microsoft.com/en-US/dynamics365/financials/sales-how-correct-cancel-sales-invoice).

However, you can only cancel or correct an invoice, if the invoice isn't paid yet. This poses an issue with ACH or credit card payments, since the invoice is paid immediately when it is posted. Therefore, when trying to cancel or correct an invoice that was paid via ACH or credit card, you will now see a warning message explaining that the invoice was paid via ACH or credit card and the payment first has to be refunded. If you select **Yes**, the system will process a refund for the payment method used to pay the invoice and then will cancel or correct the invoice.

## Credit Memos

Credit memos are usually applied to invoices to cancel out an invoice. Sometimes credit memos can also be used to create a **credit on account** for a customer that then can be applied to a later purchase. If you want to refund a transaction to a bank account or credit card, you have to apply the credit memo to an invoice that was paid via ACH or credit card. When the credit memo is posted, the transaction then is automatically refunded to the original payment method used on the applied sales invoice. If you create a partial refund and the original payment was made via multiple bank accounts or cards, you can select one of the original payment methods to refund the money to, up to the amount that the payment method was charged originally.

If you want to refund a credit memo to a bank account or credit card and this credit memo is not applied to an ACH or credit card invoice, you can process the refund of the credit memo through the Customer Ledger Entries as described below, after the credit memo was posted without being applied to an invoice.

## Return Orders

If you process returns via return orders, you can also process ACH or credit card refunds. You can enter a bank account or credit card on the sales return order or you can use the action **Add** on the ribbon. When the return order is posted, it will post a ACH or credit card refund. The process is similar to the Credit Memos process described above.

> [!IMPORTANT]
> You cannot process ACH or credit card refunds for credit memos or return orders, if they are not applied to an invoice that has been paid via bank account or credit card by default. Banks don't always allow a **refund on account** also called **open credit**. If you are certain that you can process open credits, you can enable the **Allow Open Credit** option in the credit card setup. Please contact your gateway representative to understand, if you can or cannot process open credits.

## Customer Ledger Entries

It is also possible to refund a ACH or credit card payment from the Customer Ledger Entries page, which is accessible from the Customer Card or List by selecting **Ledger Entries**. The **Refund to Card** action is only available, if the transaction can be refunded. The following table shows when the action can be refunded.

| Document Type   | Description                                                                                                                             |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **Invoice**     | If the invoice is not paid or applied and has a negative amount.                                                                        |
| **Credit Memo** | If the credit memo is not refunded or applied. Credit Memos can be refunded to a bank account or credit card, even if the original transaction was not an ACH or credit card transaction. This is called an **Open Credit**. |
| **Payment**     | If the payment is open (not applied)                                                                                                    |
| **Refund**      | Never                                                                                                                                   |

If you want to refund money to a bank account or credit card and the original transaction has been paid with ACH or credit card, the refund is processed against the original bank account or credit card. If the original transaction has not been paid via ACH or credit card, the **Refund Credit Card** page is shown, which allows you to enter one or multiple payment methods and the amounts that should be refunded to each account. The process of using multiple accounts for a refund is the same as authorizing multiple accounts for a charge.

## See Also

- [Microsoft Dynamics 365 Business Central documentation](https://docs.microsoft.com/en-US/dynamics365/financials/sales-how-correct-cancel-sales-invoice)

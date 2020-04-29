# How to Pay Posted Invoices

You can define payment methods (bank accounts or credit cards) on the sales and service documents, which then allows the system to automatically charge the bank accounts or credit cards at posting of the invoice. However, customers might be setup with payment terms and want to take advantage of those terms, which means that you will not define a bank account or credit card at order entry.

Customers can call you wanting to pay a posted invoice via ACH or credit card over the phone. If a customer is past due or over the credit limit, you can also require the customer to pay some outstanding invoices right away, before processing more orders. This can be also done via ACH or credit card.

You have different possibilities to pay a posted invoice through ACH or credit card.

> [!IMPORTANT]
> It is important to understand that the payment terms and any eligible payment discounts are respected when paying invoices via ACH or credit card.

## Posted Invoice

You can pay an invoice from the posted invoice list or card. Once you have located the proper posted invoice the customer wants to pay, you can select the action **Charge** to start the process of paying the invoice. This action is only available, if the invoice is still open.

When you select the action **Charge**, the **Charge Payment Methods** page is displayed allowing you to enter one or multiple bank accounts or credit cards. Learn more about the [Charge Payment Methods page](page-authorize-credit-card.md). Once you have entered the amount to be paid on the page and selected the bank accounts or credit cards, the entered amount is charged against the payment methods selected and a payment is posted. The payment is then automatically applied to the invoice. If the invoice was paid in full, the invoice is closed out.

> [!NOTE]
> It is not possible to process partial charges against both bank accounts and credit cards at the same time. If you would want to do this, please process first one of the types and then the next by selecting **Charge** again.

### Print Receipt

It is now possible to print a paper receipt for the invoice for your customers. You can print the receipt from the **Posted Sales Invoices** list as well as from the individual **Posted Sales Invoice** card by choosing the action *Print/Send > Print Receipt*. The print receipt functionality must be activated in the **User Setup** and the report must be defined in the **Report Selections - Credit Card**. Learn more about [User Setup](additional-setups.md#user-setup) and [Report Selections - Credit Card](page-credit-card-report-selections.md).

## Customer Ledger Entries

Another option is to pay an invoice via ACH or credit card from the customer's account. The customer ledger entries show all transactions for a customer, including all paid and unpaid invoices. If the invoice is still open, the action **Charge** is enabled in the ribbon. When selected, you will see the page **Charge Payment Methods** and you can enter one or more bank account or credit card information to pay the invoice. Learn more about the [Charge Payment Methods page](page-authorize-credit-card.md).

Once you have entered the amount to be paid on the page and selected the payment methods, you can select **Ok** and the system charges the appropriate bank accounts or  credit card, posts the payment, and applies it to the invoice.

## Paying multiple invoices at once

If your customer wants to pay multiple invoices at once, you can select invoices to be paid and then select the action **Charge – Multiple Invoices** from the action ribbon. To select multiple records, you have to click on the **show more options** action and select **Select More** or use the *Crtl* or *Shift* keys in combination with your mouse. The action is only available, if at least one invoice is open and only invoices from the same customer are selected.

This will show the **Charge Payment Methods** page. Learn more about the [Charge Payment Methods page](page-authorize-credit-card.md). Once you have entered all bank accounts or credit cards and entered the amount to be paid, the system will charge all entered payment methods and post one payment entry per bank account or credit card. It then will apply all invoices to the payments.

## See Also

- [Page Charge Payment Methods](page-authorize-credit-card.md)
- [User Setup](additional-setups.md#user-setup)
- [Report Selections - Credit Card](page-credit-card-report-selections.md).

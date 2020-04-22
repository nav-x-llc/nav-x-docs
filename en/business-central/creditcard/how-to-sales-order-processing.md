# How to process a Sales Order

If a customer is setup with the ACH or credit card payment method and an order is entered for this customer, the default payment method for this customer is automatically added to the sales order. The information is visible on the **Payment Information** fast tab on the sales order. If a payment method on file is selected, the additional fields are not editable.

You can also enter a new payment method, which isn't stored in the list of payment methods on file yet. For this, you can just enter the required information in the fields. If the other fields are not editable, because you are overwriting an existing payment method, they will be made editable automatically, once you remove the account number.

> [!IMPORTANT]
> If you have turned off the field **Tokenize Manual Cards** in the **Credit Card Setup**, you cannot enter the payment method information on the sales document, you will have to enter the information in the [Authorize Payment Method page](page-authorize-credit-card.md) instead.

If you have set up the NAV-X Credit Card functionality with **Auto-Authorize Credit Card Sales Order** on *Release*, and you process a credit card, that is it. The credit card will be automatically authorized when you release the sales order. An order is typically released when the order entry is completed, indicating that the order is ready for processing. When you then post invoice the order, the credit card is automatically captured at that point. If you have configured the functionality to require the security code, you will have to enter the security code for this credit card at the time of authorizing.

If you have the functionality set up to authorize automatically at the time of shipment, you also do not have to do anything else. When the order is shipped, the credit card is automatically authorized and, if the authorization fails, the shipment is not processed.

If you are processing an ACH payment, the transaction is not authorized. Authorization is only available for credit cards, not for ACH payments. The bank account will be charged based on the setting **Auto-Capture ACH Sales Order** in the **Credit Card Setup**. If it is setup to capture at the time of *Release*, the bank account is charged when the order is released.

If you want to charge multiple bank accounts or cards for this order, you do not define the payment method on the sales order. If no payment method is defined and you release the order (or ship the order, if you set up the system to authorize at the time of shipment), a page **Authorize Payment Method** is displayed. Read more details about the [Authorize Payment Method page](page-authorize-credit-card.md).

> [!IMPORTANT]
> To be PCI compliant, you are not allowed to store the security codes for credit cards in any systems or on paper. If you require to enter security codes for transactions, you should authorize the credit card at the time of order entry, not at the time of posting the order.

If you do not have the system configured to automatically authorize a credit card at the time of releasing the order and you try to release the order, you will see an error message indicating that there is not enough authorized to process the order. In this case, you have to select the action **Authorize** from the ribbon. You can also select this action, if you want to manually authorize the order before releasing for another reason. The **Authorize** action will not be available for ACH payments.

If you have a credit card defined on the order already and you select the **Authorize** action, the system will give you the option to authorize the defined card or to enter multiple cards. If you select not to authorize the full amount against the defined credit card, the **Authorize** page is shown allowing you the entry of multiple cards. Read more details about the [Authorize Payment Method page](page-authorize-credit-card.md).

## Charging a Bank Account or Credit Card

If you want to manually charge the payment method before invoicing the order, you can select the **Charge** action on the ribbon. This will act like the authorization function, but will actually charge the bank account or card. You will see an open payment on the customer's account. This payment is applied to the order and when the order is invoiced, the applied payment automatically closes out the invoice.

## Processing a Sale

If you have configured the system for the *Sale* processing mode, you will not see an authorize action. The only action shown on the order is **Charge**. If you do not charge the payment method before invoicing the order, the system automatically will charge the bank account(s) or credit card(s) defined on the order at the time of invoicing.

## Prepayment Processing

You can setup a customer to require prepayment or you can also set this up for a particular order only. Prepayments can be processed against bank accounts or credit cards as well. If you define a payment method on the order and create a prepayment invoice, the prepayment invoice is then automatically paid via the payment method at the time of posting the invoice. To some extend, the prepayment invoice functionality is similar to the action **Charge** on the sales order itself. However, the important difference is that you cannot produce an invoice at the time of charging a bank account or credit card, unless you use the prepayment functionality.

Read more about [setting up and processing prepayments](https://docs.microsoft.com/en-us/dynamics365/business-central/finance-how-to-create-prepayment-invoices).

## Credit Card Terminals

If you have setup at least one terminal as [described](terminal-setup.md), you can also charge credit cards for a sales order. Since this process is the same process for all different sales documents, Learn more about [processing a credit card using a terminal](how-to-using-terminals.md).

## Processing Sales Document batches

If you have multiple sales documents that need to be authorized or that you want to capture a credit card for, you can use a processing report to do so. All sales documents must have an ACH or credit card payment method defined and either must have a bank account or credit card defined on the order or have a default payment method on the customer. You can start this process by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Process Sales Document Credit Card Transactions**, and then choose the related link.

You can then define filters on the report to limit the amount of documents that are processed. the report will then show a list of all transactions that were processed, the amounts that were required, and the amounts processed, as well as any transactions that failed and the reason for the failure.

|                              |                                                                                                                            |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **Transaction**              | If you want to authorize the credit cards for the sales documents, please select **Authorize**. To charge credit cards, please select **Charge**. If the charge mode is set to *Sale*, you cannot select **Authorize** as a valid option. |
| **Do not use security code** | If you typically have to enter a security code to process a transaction, you can select to accept that you do not want to use the security code entry for this process. Any transactions will be processed without the security code. If you have to enter a security code typically, but do not choose to activate this field, you will receive errors for every single transaction that is missing a security code. |

## See Also

- [Authorize Payment Methods](page-authorize-credit-card.md)
- [Setting up and Processing prepayments](https://docs.microsoft.com/en-us/dynamics365/business-central/finance-how-to-create-prepayment-invoices)

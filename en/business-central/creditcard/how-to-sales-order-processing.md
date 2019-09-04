# How to process Sales Order

If a customer is setup with the credit card payment method and an order is entered for this customer, the default credit card for this customer is automatically added to the sales order. The information is visible on the **Credit Card** fast tab on the sales order. If a credit card on file is selected, the additional fields are not editable.

You can also enter a new credit card, which isn’t stored in the list of credit cards yet. For this, you can just enter the credit card number in the field **Credit Card No.**. If the other fields are not editable, because you are overwriting an existing credit card, they will be made editable automatically, once you enter the new credit card number.

If you have set up the NAV-X Credit Card functionality with **Auto-Authorize on Release**,  that is it. The credit card will be automatically authorized when you release the sales order. An order is typically released when the order entry is completed, indicating that the order is ready for processing. When you then post invoice the order, the credit card is automatically captured at that point. If you have configured the functionality to require the security code, you will have to enter the security code for this credit card at the time of authorizing.

If you have the functionality set up to authorize automatically at the time of shipment, you also do not have to do anything else. When the order is shipped, the credit card is automatically authorized and, if the authorization fails, the shipment is not processed.

If you want to charge multiple cards for this order, you do not define the credit card on the sales order. If no credit card is defined and you release the order (or ship the order, if you set up the system to authorize at the time of shipment), a page **Authorize Credit Card** is displayed. Read more details about the [Authorize Credit Card page](page-authorize-credit-card.md).

> [!IMPORTANT]
> You are not allowed to store the security codes for credit cards in any systems or on paper. If you require to enter security codes for transactions, you should authorize the credit card at the time of order entry, not at the time of posting the order.

If you do not have the system configured to automatically authorize a credit card at the time of releasing the order and you try to release the order, you will see an error message indicating that there is not enough authorized to process the order. In this case, you have to select the action **Authorize Card** from the ribbon. You can also select this action, if you want to manually authorize the order before releasing for another reason.

If you have a credit card defined on the order already and you select the **Authorize Credit Card** action, the system will give you the option to authorize the defined card or to enter multiple cards. If you select not to authorize the full amount against the defined credit card, the **Authorize Credit Card** page is shown allowing you the entry of multiple cards. Read more details about the [Authorize Credit Card page](page-authorize-credit-card.md).

## Charging a Credit Card

If you want to manually charge the credit card before invoicing the order, you can select the **Charge Credit Card** action on the ribbon. This will act like the authorization function, but will actually charge the card. You will see an open payment on the customer’s account. This payment is applied to the order and when the order is invoiced, the applied payment automatically closes out the invoice.

## Processing a Sale

If you have configured the system for the *Sale* processing mode, you will not see an authorize action. The only action shown on the order is **Charge Credit Card**. If you do not charge the card before invoicing the order, the system automatically will charge the credit card(s) defined on the order at the time of invoicing.

## Prepayment Processing

You can setup a customer to require prepayment or you can also set this up for a particular order only. Prepayments can be processed against credit cards as well. If you define a credit card on the order and create a prepayment invoice, the prepayment invoice is then automatically paid via credit card at the time of posting the invoice. To some extend, the prepayment invoice functionality is similar to the action “Charge Credit Card” on the sales order itself. However, the important difference is that you cannot produce an invoice at the time of charging a credit card, unless you use the prepayment functionality.

Read more about [setting up and processing prepayments](https://docs.microsoft.com/en-us/dynamics365/business-central/finance-how-to-create-prepayment-invoices).

## Warehouse Management Processing

When processing orders for warehouse enabled locations, the process as described above is the same with the exception that the credit cards are not authorized at the time of releasing the sales order. When the warehouse shipment is created and then subsequently released, the credit cards for all orders included in the warehouse shipment are authorized at the same time. This is done so that only the proper amount is authorized and not the full order amount.

## Credit Card Terminals

If you have setup at least one terminal as [described](terminal-setup.md), you can also charge credit cards for a sales order. Since this process is the same process for all different sales documents, Learn more about [processing a credit card using a terminal](process-terminals.md).

## Processing Sales Document batches

If you have multiple sales documents that need to be authorized or that you want to capture a credit card for, you can use a processing report to do so. All sales documents must have a credit card payment method defined and either must have a credit card defined on the order or have a default credit card on the customer. You can start this process by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Process Sales Document Credit Card Transactions**, and then choose the related link.

You can then define filters on the report to limit the amount of documents that are processed. the report will then show a list of all transactions that were processed, the amounts that were required, and the amounts processed, as well as any transactions that failed and the reason for the failure.

|                              |                                                                                                                            |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **Transaction**              | If you want to authorize the credit cards for the sales documents, please select **Authorize**. To charge credit cards, please select **Charge**. If the charge mode is set to *Sale*, you cannot select **Authorize** as a valid option. |
| **Do not use security code** | If you typically have to enter a security code to process a transaction, you can select to accept that you do not want to use the security code entry for this process. Any transactions will be processed without the security code. If you have to enter a security code typically, but do not choose to activate this field, you will receive errors for every single transaction that is missing a security code. |

## See Also

- [Authorize Credit Cards](page-authorize-credit-card.md)
- [Setting up and Processing prepayments](https://docs.microsoft.com/en-us/dynamics365/business-central/finance-how-to-create-prepayment-invoices)

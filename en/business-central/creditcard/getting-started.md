# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the credit card setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](permission-setups.md).

## Assisted Setup

### To start the Setup

When you are on the role center and have not completed the setup for the NAV-X Credit Card app, you will see a notification asking "Do you want to get started with NAV-X Credit Card?". Select **Click here to run the setup** to start the Assisted Setup wizard. Alternatively, you can also choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Assisted Setup**, and then choose the related link.

[!include[eula](../includes/eula.md)]

If you have submitted your information on our website already and received the trial merchant account or your live merchant account information already, please check the field **I already have a merchant account**. If not, please enter your email address. Please make sure that the email you are entering is a valid email address, since we will send you the trial information as well as additional information about the sign up process to this email.

## To set the general behavior

The next step allows you to configure the behavior of the credit card functionality. It is already pre-configured with default values, but if those values do not fit your process, please change them. The following table describes each of the fields available.

|                                               |                                                                                                           |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| **Require Security Code**                     | The card security code (also known as the CVV code) is the 3 or 4-digit code on the card. PCI compliance does not allow you saving the security code electronically or on paper. It is recommended to always enter the security code for each transaction and ask the customer for the code. Sometimes, this is not practical, therefore, this setting allows you to change when a security code has to be entered.<br><br>- **Always**: every time a credit card is charged or authorized, the security code must be entered<br>- **First Authorization per Document**: the first time an authorization for one document is requested, the security code is required.<br>- **First Authorization per Card**: the first time an authorization is requested on this card or the initial validation is done for a new card, the security code is required.<br>- **Never**: the security code is never required. This is the least secure option and should not be used. |
| **Charge Mode**                               | When processing credit cards, there are two different ways of processing the card. The right one for you to choose depends on your processes and individual requirements.<br><br>- **Authorize and Charge**: You are authorizing a transaction on a credit card, which means that you are placing a hold on the customer’s credit card for the order amount. Once you ship and invoice the order, the card will be charged. This guarantees that the customer has enough funds available on their credit card while not charging the card before actually shipping the product. This is the preferred method.<br>- **Sale**: If you have a long period between placing the order and shipping it or if you ship and invoice right after the order is placed, you can also select this option. This will not authorize a card at the time of order entry and will only charge the card when the order is invoiced. This could result in declined cards or insufficient funds at the time of shipping and invoicing. |
| **Do not use Address Verification**           | When credit card transactions are processed, the system checks the validity of the billing address defined. If you do not want this, you can turn off the entire Address Verification functionality. |
| **AVS Response for Success**                  | If you are using Address Verification, the system responds with different statuses. You can define here which of the statuses you consider that the verification succeeded. For instance, not always is the full address provided, so you can choose to accept when the zip code matches. |
| **Do not allow Address Verification Failure** | When credit card transaction are processed, the billing address is validated. If the validation comes back with an error (such as that the address doesn’t match or the validation could not be performed), the user gets a confirmation displayed with the error and then can choose to accept the transaction or not. If you do not want to allow a user to make that decision, check this field and any address verification other than *ok* will result in a failure of the transaction. |
| **Perform initial validation for new cards**  | Check this field, if you want to perform a validation of the credit card, when you enter a new credit card. This will authorize a small transaction on the customer’s card and, if the security code is required, you will have to enter the code. If the address verification as well as the card verification in general, you will be alerted and you could choose not to use the card then. The authorization is voided right after the validation.<br>When placing a small authorization on the card, the customer can see a pending charge on their account. This can stay on the customer’s account for up to several days. |
| **Update Authorization when amount changes**  | When this is checked and the amount changes on a document after a credit card was authorized, the existing authorization is voided and a new authorization for the full amount is placed. This allows to have only one charge per document per credit card, but it can keep the original authorized amount on the card as a “pending charge” for several days and therefore reduce the available amount for a customer’s credit card.<br>Please do not authorize credit cards before the order amount is finalized or typically does not change anymore. |
| **Allow Partial Authorization**               | By default, NAV-X Credit Card requires an authorization for the entire amount of the order or invoice, before the document can be processed. If you want to allow customers to only pay a partial amount before the document can be released, you can select this option. |
| **I am using Service Management**             | If you are using Microsoft Dynamics 365 Business Central Premium, which includes Service Management, please check this field. Otherwise, you can leave the field unchecked. If you indicate that you do not use service management, setups related to service management will not be shown in this wizard. |

## To set automation rules

The next step of the Assisted Setup allows you to define setups related to processing of sales documents, such as sales orders or sales invoices. If you have selected that you are using Service Management, you will first see a step for sales documents and then, the next step will be for service documents. If you defined that you are not using Service Management, you will only see the setups for sales documents.

### Sales Documents

|                                           |                                                                                                               |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **Auto-Authorize on Release**             | If this field is checked, the credit card authorization is automatically processed when the order or invoice is released, which typically indicates that the document entry is completed. If you are directly posting a document after entry, the posting will automatically release it right before posting as well. If you do not check this field, you must process the credit card authorization manually. |
| **Auto-Reauthorize on Partial Invoice**   | When an authorization is performed for an order and the order is shipped partially, the credit card is charged for the partial amount. If a charge is processed against an authorization, the remaining amount on the authorization is automatically cancelled. If this setup is checked, a new authorization is automatically created at the time of partially invoicing the order. |
| **Only First Authorization**              | If you have **Auto-Reauthorize on Partial Invoice** checked, the system will automatically reauthorize an order whenever a partial invoice was processed. If you check **Only First Authorization**, the system will only authorize the remaining order after the first invoice posting. |
| **Auto-Authorize on Shipment**            | Instead of processing an authorization automatically at the time of releasing the order, you can also define that the credit card is automatically authorized at the time of shipping an order. This can be useful, if your orders typically change a lot until the order is shipped. This will still ensure that the credit card has sufficient funds for the transaction. |
| **Auto-Capture on Release Sales Invoice** | When processing sales invoices and not using sales orders, the amount will be due at the time of posting the invoice. Typically, an invoice is entered and then posted right away. Therefore, instead of authorizing the charge on the credit card at the time of releasing the invoice and then charging the card at the time of posting the invoice (default process), you can also charge the card directly at the time of release.  |
| **Auto-Capture on Release Sales Order**   | This option is only available when the **Charge Mode** is set to **Sale**. In this case, you can decide, if you want the customer’s credit card automatically be charged with the full order amount when the order is released. |

### Service Documents

|                                         |                                                                                                                 |
|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| **Auto-Authorize on Release**           | If this field is checked, the credit card authorization is automatically processed when the order or invoice is released, which typically indicates that the document entry is completed. If you are directly posting a document after entry, the posting will automatically release it right before posting as well. If you do not check this field, you must process the credit card authorization manually. |
| **Auto-Reauthorize on Partial Invoice** | When an authorization is performed for an order and the order is shipped partially, the credit card is charged for the partial amount. If a charge is processed against an authorization, the remaining amount on the authorization is automatically cancelled. If this setup is checked, a new authorization is automatically created at the time of partially invoicing the order. |
| **Only First Authorization**            | If you have **Auto-Reauthorize on Partial Invoice** checked, the system will automatically reauthorize an order whenever a partial invoice was processed. If you check **Only First Authorization**, the system will only authorize the remaining order after the first invoice posting.
| **Auto-Authorize on Shipment**          | Instead of processing an authorization automatically at the time of releasing the order, you can also define that the credit card is automatically authorized at the time of shipping an order. This can be useful, if your orders typically change a lot until the order is shipped. This will still ensure that the credit card has sufficient funds for the transaction. |

## To set additional authorization rules

The next step of the Assisted Setup allows you to define either a percentage of the sales document amount or a fixed amount, which will be added to each authorization of a credit card to account for fees or charges that are not known at the time of order entry. When defining a **Type** other than **None**, you have to define a G/L account or resource in the field **Line No.**, which then will be used to create an additional line on the document in the amount defined.

If you have selected that you do not use Service Management, this next step will be skipped. This next step of the Assisted Setup allows you to define either a percentage of the sales document amount or a fixed amount, which will be added to each authorization of a credit card to account for fees or charges that are not known at the time of order entry. When defining a **Type** other than **None**, you have to define a G/L account or resource in the field **Line No.**, which then will be used to create an additional line on the document in the amount defined.

## To set connection information

If you have received already your merchant account information from our credit card processor, you can then enter the **Security Id**, **User Id**, and the **Password** in the **Merchant Connection** step of the Assisted Setup. You will only be able process credit card transactions, if you have received this information and entered them in the setup. You can still continue the setup, but you will have to come back to this step, once you have received the information.

> [!WARNING]
> You will receive two sets of credentials from the credit card processor. One set is for the *Live Account* and one for the *Sandbox Account*. You should enter the **Live Credentials** into your production tenant and the **Sandbox Credentials** into your sandbox or test tenant. You should not switch credentials between live and sandbox in one database or company, since the credit cards are tokenized and stored in the actual merchant account on the processor. You will not be able to process credit cards in the system that were entered in another tenant.

If you want to test out functionality, but not actually process any transactions in the gateway, you can check the field **Test Mode**. This field, when checked, will define that the system does not send any transactions to the actual gateway and just provides "success" responses internally for all requests. It is ideally used to, for instance, do some quick tests in a sandbox that contains live credit card information.

## To set multiple merchant accounts

Most companies only will have one credit card merchant account. However, for instance, if you sell to different countries, you can have multiple merchant accounts configured. If you want to enter the information for multiple merchants, please check the field **I want to configure additional merchant accounts**.

If you want to separate the merchant accounts by a dimension code, for instance, by department, you can then select this dimension in the **Merchant Dimension Code**. If you want to separate the merchant accounts by currency or country, please leave this field empty and go to the next step.
You can also, at any time, enter additional merchant accounts following the instructions under Merchant Setup.

If you selected to setup additional merchant accounts, you can enter those in this step. Otherwise, this step won’t be shown. You can, once you defined a description, select the Assist Edit button at the end of the record and select “Edit” to show the Merchant Card and update additional settings. The details are described under [Merchant Setup](merchant-setup.md).

## To define reconciliation accounts

It is recommended to define a bank account in the **Credit Card Reconciliation** step, but you can also define a G/L account. The account is used to record all credit card transactions. When you receive the funds for the credit card purchases, you then can record bank transfers into your bank account. This will allow you to properly record and reconcile the credit card transactions. Learn how to  [setup bank accounts](https://docs.microsoft.com/en-US/dynamics365/business-central/bank-how-setup-bank-accounts).

## To configure workflows

We added workflows for you. You can setup a workflow that alerts someone when a credit card transaction fails, for instance. Together with some additional setups in the Credit Card Setup, you can take the responsibility of dealing with credit card issues from your order processors to your accounting team.
If you want to setup the workflows, please check the field **I want to configure my workflows**.

Please define the users that should be alerted when a credit card transaction fails. You can always change this later in the actual workflow setups.

You are done – as long as you configured everything – you are ready to process credit cards. Please follow our How-to’s on the left to learn how to setup customers for credit cards, enter credit cards, and process transactions.

## To enable encryption

You are starting to store a lot of sensitive information in your database. While the actual credit card data is not stored and is sent to the gateway for tokenization, you still want to make sure that the data stored is not easily accessed. You can do that by encrypting tenant data. The data stored by the NAV-X Credit Card solution uses the latest technology available in Business Central to allow encryption. Learn how to [Manage Data Encryption](https://docs.microsoft.com/en-US/dynamics365/business-central/admin-manage-data-encryption).

## See Also

- [Permission Setups](permission-setups.md)
- [Merchant Setup](merchant-setup.md)
- [Setup Bank Accounts](https://docs.microsoft.com/en-US/dynamics365/business-central/bank-how-setup-bank-accounts)

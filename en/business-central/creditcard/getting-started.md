# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the credit card setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](permission-setups.md).

## Assisted Setup

### To start the Setup

When you are on the role center and have not completed the setup for the NAV-X Credit Card app, you will see a notification asking "Do you want to get started with NAV-X Credit Card?". Select **Click here to run the setup** to start the Assisted Setup wizard. Alternatively, you can also choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Assisted Setup**, and then choose the related link.

[!include[eula](../includes/eula.md)]

## To set the general behavior

The next three steps allow you to configure the behavior of the credit card functionality. They are already pre-configured with default values, but if those values do not fit your process, please change them. The following table describes each of the fields available.

|                                               |                                                                                                           |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| **Require Security Code**                     | The security code (also known as CVV code) is the three or four digit code on the back of the card. You can select between the following options.<br><br>- **Always**: The security code is required for every transaction that is performed. If you have the mode set to "Authorize and Charge", the security code is required during the authorization, not during the charge. This is the most secure configuration, but it will require you to have the security code for each card given to you by your customer every time you process a transaction. To maintain PCI Compliance, you are not allowed to store the security code for a card either in a software system or on any other handwritten notes.<br>- **First Authorization per Document**: The first time you are processing a transaction for a specific document (e.g. order), you are required to enter the security code. If you change the authorized amount (e.g. increase the order amount) or process partial invoices and then re-authorize the remaining balance, you are not required to enter the security code.<br>- **First Transaction per Card**: This setup will only require you to enter the security code once per card to validate that the card is valid. If you have activated the setting "Perform initial validation for new cards", the system asks for the security code at the time of entering the credit card and then not anymore.<br>- **Never**: The security code is never required to be entered. This is typically done when the same customer has a lot of recurring orders and charge the credit card. It is the least secure option and should be avoided, if possible. |
| **Charge Mode**                               | When processing credit cards, there are two different ways of processing the card. The right one for you to choose depends on your processes and individual requirements.<br><br>- **Authorize and Charge**: You are authorizing a transaction on a credit card, which means that you are placing a hold on the customer's credit card for the order amount. Once you ship and invoice the order, the card will be charged. This guarantees that the customer has enough funds available on their credit card while not charging the card before actually shipping the product. This is the preferred method.<br>- **Sale**: If you have a long period between placing the order and shipping it or if you ship and invoice right after the order is placed, you can also select this option. This will not authorize a card at the time of order entry and will only charge the card when the order is invoiced. This could result in declined cards or insufficient funds at the time of shipping and invoicing. |
| **Perform initial validation for new cards**  | Check this field, if you want to perform a validation of the credit card, when you enter a new credit card. This will authorize a small transaction on the customer's card and, if the security code is required, you will have to enter the code. If the address verification as well as the card verification in general, you will be alerted and you could choose not to use the card then. The authorization is voided right after the validation.<br>When placing a small authorization on the card, the customer can see a pending charge on their account. This can stay on the customer's account for up to several days. |
| **Do not use Address Verification**           | When credit card transactions are processed, the system checks the validity of the billing address defined. If you do not want this, you can turn off the entire Address Verification functionality. |
| **AVS Response for Success**                  | If you are using Address Verification, the system responds with different statuses. You can define here which of the statuses you consider that the verification succeeded. For instance, not always is the full address provided, so you can choose to accept when the zip code matches. |
| **Do not allow Address Verification Failure** | When credit card transaction are processed, the billing address is validated. If the validation comes back with an error (such as that the address doesn't match or the validation could not be performed), the user gets a confirmation displayed with the error and then can choose to accept the transaction or not. If you do not want to allow a user to make that decision, check this field and any address verification other than *ok* will result in a failure of the transaction. |
| **Update Authorization when amount changes**  | When you increase the amount of a document, the difference in the original amount and the new amount is authorized against the credit card. This will result in multiple authorizations against the same credit card (which are visible on the customer's credit card statement) and when the credit card is charged, it will result in multiple charges. This can cause questions from your customers.<br><br>When you place a check mark in this field and the transaction amount increases, the system will void the original authorization and create one new authorization with the full amount leading to only one charge at the time of invoicing the order. However, some banks leave the voided authorization as a pending charge for a few days and that could cause the customer not having their full amount available on their credit cards and can also cause issues with your customers.<br><br>It is recommended to have this field checked unless you have constant order changes and customers inquiring about the authorizations that are held in place. |
| **Allow Partial Authorization**               | By default, NAV-X Credit Card requires an authorization for the entire amount of the order or invoice, before the document can be processed. If you want to allow customers to only pay a partial amount before the document can be released, you can select this option. |
| **Use Amount to Ship**                        | When you want to use the **Amount to Ship** on an order, instead of the **Amount to Invoice** to authorize and charge credit cards for orders, please check this field. |
| **Create Credit Memos for Invoice Refunds**   | If this setting is enabled, a credit memo will be created when a refund for an invoice is processed. This will return any products to inventory. If this setting is disabled, a financial credit is processed instead. |
| **Tokenize Manual Cards**                     | When activated, bank accounts and cards that are entered on the individual documents, the cards are automatically tokenized and stored for future use. If this setting is disabled, the bank accounts and credit cards are not tokenized or stored. |
| **I am using Service Management**             | If you are using Microsoft Dynamics 365 Business Central Premium, which includes Service Management, please check this field. Otherwise, you can leave the field unchecked. If you indicate that you do not use service management, setups related to service management will not be shown in this wizard. |

## To set automation rules

The next step of the Assisted Setup allows you to define setups related to processing of sales documents, such as sales orders or sales invoices. If you have selected that you are using Service Management, you will first see a step for sales documents and then, the next step will be for service documents. If you defined that you are not using Service Management, you will only see the setups for sales documents.

### Sales Documents

[!include[credit-card-setup-automation-sales](includes/credit-card-setup-automation-sales.md)]

### Service Documents

[!include[credit-card-setup-automation-service](includes/credit-card-setup-automation-service.md)]

## To set additional authorization rules

The next step of the Assisted Setup allows you to define either a percentage of the sales document amount or a fixed amount, which will be added to each authorization of a credit card to account for fees or charges that are not known at the time of order entry. When defining a **Type** other than **None**, you have to define a G/L account or resource in the field **Line No.**, which then will be used to create an additional line on the document in the amount defined.

If you have selected that you do not use Service Management, this next step will be skipped. This next step of the Assisted Setup allows you to define either a percentage of the sales document amount or a fixed amount, which will be added to each authorization of a credit card to account for fees or charges that are not known at the time of order entry. When defining a **Type** other than **None**, you have to define a G/L account or resource in the field **Line No.**, which then will be used to create an additional line on the document in the amount defined.

## To set connection information

If you have received already your merchant account information from our credit card processor, you can then enter the **Security Id**, **User Id**, and the **Password** in the **Merchant Connection** step of the Assisted Setup. You will only be able process credit card transactions, if you have received this information and entered them in the setup. You can still continue the setup, but you will have to come back to this step, once you have received the information.

Please select the **Default Merchant** from the list of merchants or, if it does not exist yet, please select the option **Select from full list** in the drop down list and then select **New Merchant**. Once you selected the action **New Merchant**, you can select which type of merchant you want to create. a *Test Merchant* is for you to try out the functionality, you cannot process with a test merchant. Once you select the gateway as the new merchant type, you can define either the sandbox or live credentials to use for your gateway connection.

> [!WARNING]
> You will receive two sets of credentials from the credit card processor. One set is for the *Live Account* and one for the *Sandbox Account*. You should enter the **Live Credentials** into your production tenant and the **Sandbox Credentials** into your sandbox or test tenant. This ensures that you can process transactions in your sandbox, but will not actually charge real credit cards.

If you want to test out functionality, but not actually process any transactions in the gateway, you can pick the **Test Merchant** as the default merchant. This will define that the system does not send any transactions to the actual gateway and just provides "success" responses internally for all requests. It is ideally used to, for instance, do some quick tests in a sandbox that contains live credit card information.

Learn more about [Merchant Setup](merchant-setup.md). This will also explain how you can setup multiple merchant accounts, if you want to use different merchants for different currencies, for instance.

## To enable encryption

[!include[credit-card-setup-encryption](includes/credit-card-setup-encryption.md)]

## To enable different features

[!include[credit-card-setup-features](credit-card-setup-features.md)]

## See Also

- [Permission Setups](permission-setups.md)
- [Merchant Setup](merchant-setup.md)
- [Setup Bank Accounts](https://docs.microsoft.com/en-US/dynamics365/business-central/bank-how-setup-bank-accounts)

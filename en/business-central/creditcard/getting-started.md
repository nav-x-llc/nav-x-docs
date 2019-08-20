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
[!include[credit-card-setup-require-cvv](includes/credit-card-setup-require-cvv.md)]
[!include[credit-card-setup-charge-mode](includes/credit-card-setup-charge-mode.md)]
[!include[credit-card-setup-avs](includes/credit-card-setup-avs.md)]
[!include[credit-card-setup-authorization](includes/credit-card-setup-authorization.md)]
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

[!include[credit-card-setup-encryption](includes/credit-card-setup-encryption.md)]

## See Also

- [Permission Setups](permission-setups.md)
- [Merchant Setup](merchant-setup.md)
- [Setup Bank Accounts](https://docs.microsoft.com/en-US/dynamics365/business-central/bank-how-setup-bank-accounts)

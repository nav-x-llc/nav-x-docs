Some of the fields described below are not shown by default. You can access those, if you select **Show More** at the top of the appropriate fast tab.

## General

|                                               |                                                                                                          |
|-----------------------------------------------|----------------------------------------------------------------------------------------------------------|
| **Enable Credit Card**                        | Activates the payment processing functionality. You can setup everything until you are ready for processing and then activate this field |
| **Credit Card Nos.**                          | When you enter new bank accounts or credit cards, an internal unique code is assigned to each card. This code uses this number series. Learn more on [Creating Number Series](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-create-number-series). |
| **Require Security Code**                     | The security code (also known as CVV code) is the three or four digit code on the back of the card. You can select between the following options.<br><br>- **Always**: The security code is required for every transaction that is performed. If you have the mode set to "Authorize and Charge", the security code is required during the authorization, not during the charge. This is the most secure configuration, but it will require you to have the security code for each card given to you by your customer every time you process a transaction. To maintain PCI Compliance, you are not allowed to store the security code for a card either in a software system or on any other handwritten notes.<br>- **First Authorization per Document**: The first time you are processing a transaction for a specific document (e.g. order), you are required to enter the security code. If you change the authorized amount (e.g. increase the order amount) or process partial invoices and then re-authorize the remaining balance, you are not required to enter the security code.<br>- **First Transaction per Card**: This setup will only require you to enter the security code once per card to validate that the card is valid. If you have activated the setting "Perform initial validation for new cards", the system asks for the security code at the time of entering the credit card and then not anymore.<br>- **Never**: The security code is never required to be entered. This is typically done when the same customer has a lot of recurring orders and charge the credit card. It is the least secure option and should be avoided, if possible. |
| **Charge Mode**                               | When processing credit cards, there are two different ways of processing the card. The right one for you to choose depends on your processes and individual requirements.<br><br>- **Authorize and Charge**: You are authorizing a transaction on a credit card, which means that you are placing a hold on the customer's credit card for the order amount. Once you ship and invoice the order, the card will be charged. This guarantees that the customer has enough funds available on their credit card while not charging the card before actually shipping the product. This is the preferred method.<br>- **Sale**: If you have a long period between placing the order and shipping it or if you ship and invoice right after the order is placed, you can also select this option. This will not authorize a card at the time of order entry and will only charge the card when the order is invoiced. This could result in declined cards or insufficient funds at the time of shipping and invoicing.<br><br>When processing ACH transactions, authorizations are not possible and it will always be processed as a **Sale** |
| **Perform initial validation for new cards**  | Check this field, if you want to perform a validation of the credit card, when you enter a new credit card. This will authorize a small transaction on the customer's card and, if the security code is required, you will have to enter the code. If the address verification as well as the card verification in general, you will be alerted and you could choose not to use the card then. The authorization is voided right after the validation.<br>When placing a small authorization on the card, the customer can see a pending charge on their account. This can stay on the customer's account for up to several days.<br><br>This is only performed for Credit Cards, not for Bank Accounts. |
| **Validation Amount**                         | If you have **Perform initial validation for new cards** activated, you can define here the amount that is used for the authorization to validate the card. The default amount is 0.05 in the merchant account's default currency. You can change this amount, but it is recommended to leave this at a small amount. |
| **Display Error on failed Authorization**<br>**Display Error on failed Charge**<br>**Display Error on failed Sale** | These fields are checked by default to display errors to the user when an authorization, a charge, or a sales transaction fail. If you do not want to have your customer service representatives deal with those errors, you can disable these settings and create workflows to alert users in another team, such as the accounting department about failed transactions. Those users then can take care of the interaction with the customer.<br><br>Learn more  on how to [setup workflows for Credit Card](../setup-workflows.md). |
| **Data Retention Period**                     | This setting should typically not be changed. It is part of the PCI compliance enhancements to NAV-X Credit Card and allows you to automatically remove any sensitive information from processed credit card transactions to reduce the amount of sensitive data stored in your system. Even though the data is encrypted when setting up encryption, you should still have the system remove data automatically. |
| **Create Credit Memos for Invoice Refunds**   | If this setting is enabled, a credit memo will be created when a refund for an invoice is processed. This will return any products to inventory. If this setting is disabled, a financial credit is processed instead. |
| **Tokenize Manual Cards**                     | When activated, bank accounts and cards that are entered on the individual documents, the cards are automatically tokenized and stored for future use. If this setting is disabled, the bank accounts and credit cards are not tokenized or stored. |

## Authorization

|                                               |                                                                                                                  |
|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| **Update Authorization when amount changes**  | When you increase the amount of a document, the difference in the original amount and the new amount is authorized against the credit card. This will result in multiple authorizations against the same credit card (which are visible on the customer's credit card statement) and when the credit card is charged, it will result in multiple charges. This can cause questions from your customers.<br><br>When you place a check mark in this field and the transaction amount increases, the system will void the original authorization and create one new authorization with the full amount leading to only one charge at the time of invoicing the order. However, some banks leave the voided authorization as a pending charge for a few days and that could cause the customer not having their full amount available on their credit cards and can also cause issues with your customers.<br><br>It is recommended to have this field checked unless you have constant order changes and customers inquiring about the authorizations that are held in place. |
| **Allow Partial Authorization**               | By default, NAV-X Credit Card requires an authorization for the entire amount of the order or invoice, before the document can be processed. If you want to allow customers to only pay a partial amount before the document can be released, you can select this option. |
| **Use Amount to Ship**                        | When you want to use the **Amount to Ship** on an order, instead of the **Amount to Invoice** to authorize and charge credit cards for orders, please check this field. |
| **Allow Charge above Authorization by**       | If you define a percentage in this field, you can charge more than the authorized amount. This is especially useful for cases where, for instance, freight charges are not exactly known and increase the order amount. |

> [!IMPORTANT]
> Please contact your gateway to determine the proper percentage to use. Different banks allow different values.

## Address Verification

| **Do not use Address Verification**           | When credit card transactions are processed, the system checks the validity of the billing address defined. If you do not want this, you can turn off the entire Address Verification functionality. |
| **AVS Response for Success**                  | If you are using Address Verification, the system responds with different statuses. You can define here which of the statuses you consider that the verification succeeded. For instance, not always is the full address provided, so you can choose to accept when the zip code matches. |
| **Do not allow Address Verification Failure** | When credit card transaction are processed, the billing address is validated. If the validation comes back with an error (such as that the address doesn't match or the validation could not be performed), the user gets a confirmation displayed with the error and then can choose to accept the transaction or not. If you do not want to allow a user to make that decision, check this field and any address verification other than *ok* will result in a failure of the transaction. |

## Automation

### Automation > Sales

[!include[credit-card-setup-automation-sales](credit-card-setup-automation-sales.md)]

### Automation > Service Management

[!include[credit-card-setup-automation-service](credit-card-setup-automation-service.md)]

## Additional Authorization

### Additional Authorization > Sales

[!include[credit-card-setup-add-authorization](credit-card-setup-add-authorization.md)]

### Additional Authorization > Service Management

[!include[credit-card-setup-add-authorization](credit-card-setup-add-authorization.md)]

## Merchant

The information defined in the Merchant fast tab are the values for the primary merchant. If you have multiple merchants, you can either setup the first merchant information here and the remaining merchant information on the merchant setup or define all setups on the merchant setup. Learn more about [Merchant Setups](../merchant-setup.md).

|                             |                                                                                                                             |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| **Merchant Dimension Code** | You can define different merchants to be used based on a dimension value for each transaction. For instance, you could have a different merchant for Wholesale and for Retail sale. If you want to set up multiple merchants based on a dimension, you would define the dimension to select the right merchant in this field.<br><br>You have to choose a dimension that does not change on a transaction basis, if you want to be able to define credit cards in the system that can be reused. If the merchant information associated with a customer changes, you cannot use the credit cards that have been entered for the merchant used before the change. |

## Connection

The Connection fast tab in the Credit Card setup allows you to define the login credentials to your live or sandbox merchant accounts. The information entered here is for your main merchant account. If you have multiple merchants, you can either setup the first merchant information here and the remaining merchant information on the merchant setup or define all setups on the merchant setup. Learn more about [Merchant Setups](../merchant-setup.md).

|                 |                                                                                                                                         |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **Security Id** | The **Security Id** is part of the merchant credentials provided to you by your gateway. Please make sure that you enter the complete information. |
| **User Id**     | The **User Id** is part of the merchant credentials provided to you by your gateway. Please make sure that you enter the complete information. |
| **Password**    | The **Password** is part of the merchant credentials provided to you by your gateway. Please make sure that you enter the complete information. |
| **Test Mode**   | We have added the ability to run transactions in a **Test Mode**, which will not access the actual gateway, but will always allow credit card transactions to be processed. This is different from using *Sandbox Credentials*, which you can use to access your sandbox on the gateway to test with actual credit card transactions. |

> [!IMPORTANT]
> We have changed the visibility of credentials to ensure that it is easier to validate what information was entered. You have to ensure that only the proper users have access to those credentials by applying Business Central permissions to those users properly.

## Posting

The Posting fast tab in the Credit Card setup allows you to define the credit card clearing account for your merchant. A credit card clearing account is used as the balancing account when processing credit card transactions and contains the balance of the "amount due" from the gateway to you. When you receive payments from your credit card gateway, you can transfer the balances from this clearing account to the bank account to properly reconcile credit card payments.

The information entered here is for your main merchant account. If you have multiple merchants, you can either setup the first merchant information here and the remaining merchant information on the merchant setup or define all setups on the merchant setup. Learn more about [Merchant Setups](../merchant-setup.md).

|                              |                                                                                                                            |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **Credit Card Account Type** | You can define, if you want to use a G/L Account or a Bank Account as the credit card clearing account. It is recommended to set this to "Bank Account", since you have advanced reconciliation features available in native Dynamics 365 Business Central for bank accounts. |
| **Credit Card Account No.**  | If you selected **G/L Account** in the previous field, you can select a G/L account from the drop down list and if you have selected **Bank Account**, you can select a Bank account from the drop down list. |
| **Open Credit Allowed**      | If enabled, you will be able to refund invoices to bank accounts or credit cards that originally were not paid via the same payment method. |

> [!IMPORTANT]
> You cannot enable **Open Credit Allowed** without activating the same functionality in the gateway. Typically, it is not advisable to enable this setting unless instructed by the gateway.

## Features

You can enable or disable certain features in your Credit Card functionality. The features are always available with your license, but, if you do not use them, you can turn those off to reduce the amount of functionality that is displayed on the different pages in Business Central to only show the ones that you are actually using.

[!include[credit-card-setup-features](credit-card-setup-features.md)]

## Actions

### Process > Initialize Workflow Setup

If you run through the [Assisted Setup](../getting-started.md) and have selected that you want to setup workflows, this is already completed. If you want to create workflows that notify different users when credit card transactions fail, you can initialize those setups and then configure the users that are receiving notifications in the workflow setup. Learn more about [setting up Workflows for Credit Card](../setup-workflows.md).

### Process > Initialize Credit Card Setup

If you run through the [Assisted Setup](../getting-started.md), this is automatically completed. If you choose to complete the setup through the *Credit Card Setup** instead, please run this function before making any changes to the setup. If you have made changes before running this initializing routine, you will have to make sure that the setups are still up to date.

### Process > Enable Tenant Encryption

[!include[credit-card-setup-encryption](credit-card-setup-encryption.md)]

### Additional > Merchant Accounts

You can define multiple merchant accounts for your credit card transactions. You can, for instance, setup different merchant accounts for different currencies or even based on dimensions on the different transactions. If you have received multiple live credentials from your gateway, please configure them as individual merchant accounts. Learn more about [Merchant Setups](../merchant-setup.md).

### Additional > Currencies

Currencies must be validated to ensure that the proper information is configured for currencies to be used in credit card transactions. Learn more about [Currencies](../additional-setups.md#currencies).

### Additional > Account Types

Account types must be setup for each credit card type as well as bank account type supported. These records are automatically created when the application is originally installed and then setup via a downloaded configuration package. Learn more about [Account Types](../page-credit-card-types.md)

### Additional > Commodity Codes

Commodity codes are required for credit card transactions to ensure that the transactions are processed using the best rates possible. Learn more about [Commodity Codes](../additional-setups.md#commodity-code-setup)

### Additional > Payment Methods

Payment methods are used to define how invoices are paid. You must setup at least one credit card payment method to be able to process credit cards. Learn more about [Payment Methods](../additional-setups.md#payment-method-setup).

### Additional > Units of Measure

Unit of measures have to be configured to be able to be used with credit card transactions. The existing units of measure must be mapped to standard unit of measure codes used by the gateway. Learn More about [Units of Measure](../additional-setups.md#unit-of-measure-setup)

### Additional > Source Code Setup

The source code setup defines the origin of transactions in Business Central. Learn more about [Source Code Setup](../additional-setups.md#source-code-setup).

### Help > Online Help

You can access this documentation directly from within Business Central.

### Help > Start Product Tour

NAV-X Credit Card includes a product tour that can be used in your sandbox environment to walk through some of the features of NAV-X Credit Card. You can start the product tour from here. [Learn more about the Product Tour](../how-to-product-tour.md).

### Help > About

The **About** page provides details about the version of Credit Card as well as important web pages.

## See Also

- [Creating Number Series](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-create-number-series)
- [Setup Workflows for Credit Card](../setup-workflows.md)
- [Merchant Setups](../merchant-setup.md)
- [Assisted Setup](../getting-started.md)
- [Additional Setups](../additional-setups.md)

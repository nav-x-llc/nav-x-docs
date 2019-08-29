Some of the fields described below are not shown by default. You can access those, if you select **Show More** at the top of the appropriate fast tab.

## General

|                                               |                                                                                                          |
|-----------------------------------------------|----------------------------------------------------------------------------------------------------------|
| **Enable Credit Card**                        | Activates the Credit Card functionality. You can setup everything until you are ready for processing and then activate this field |
| **Credit Card Nos.**                          | When you enter new credit cards, an internal unique code is assigned to each card. This code uses this number series. Learn more on [Creating Number Series](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-create-number-series). |
[!include[credit-card-setup-require-cvv](credit-card-setup-require-cvv.md)]
[!include[credit-card-setup-charge-mode](credit-card-setup-charge-mode.md)]
[!include[credit-card-setup-avs](credit-card-setup-avs.md)]
| **Validation Amount**                         | If you have **Perform initial validation for new cards** activated, you can define here the amount that is used for the authorization to validate the card. The default amount is 0.05 in the merchant account’s default currency. You can change this amount, but it is recommended to leave this at a small amount. |
| **Display Error on failed Authorization**<br>**Display Error on failed Charge**<br>**Display Error on failed Sale** | These fields are checked by default to display errors to the user when an authorization, a charge, or a sales transaction fail. If you do not want to have your customer service representatives deal with those errors, you can disable these settings and create workflows to alert users in another team, such as the accounting department about failed transactions. Those users then can take care of the interaction with the customer.<br><br>Learn more  on how to [setup workflows for Credit Card](../setup-workflows.md). |
| **Data Retention Period**                     | This setting should typically not be changed. It is part of the PCI compliance enhancements to NAV-X Credit Card and allows you to automatically remove any sensitive information from processed credit card transactions to reduce the amount of sensitive data stored in your system. Even though the data is encrypted when setting up encryption, you should still have the system remove data automatically. |

## Authorization

[!include[credit-card-setup-authorization](credit-card-setup-authorization.md)]
[!include[credit-card-setup-automation-increase](credit-card-setup-automation-increase.md)]

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

## Posting

The Posting fast tab in the Credit Card setup allows you to define the credit card clearing account for your merchant. A credit card clearing account is used as the balancing account when processing credit card transactions and contains the balance of the “amount due” from the gateway to you. When you receive payments from your credit card gateway, you can transfer the balances from this clearing account to the bank account to properly reconcile credit card payments.

The information entered here is for your main merchant account. If you have multiple merchants, you can either setup the first merchant information here and the remaining merchant information on the merchant setup or define all setups on the merchant setup. Learn more about [Merchant Setups](../merchant-setup.md).

|                              |                                                                                                                            |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **Credit Card Account Type** | You can define, if you want to use a G/L Account or a Bank Account as the credit card clearing account. It is recommended to set this to “Bank Account”, since you have advanced reconciliation features available in native Dynamics 365 Business Central for bank accounts. |
| **Credit Card Account No.**  | If you selected **G/L Account** in the previous field, you can select a G/L account from the drop down list and if you have selected **Bank Account**, you can select a Bank account from the drop down list. |

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

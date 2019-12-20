# Credit Card Merchant Setup

Before you can start processing your customers’ credit card payments, you require a merchant account with our gateway. If you have a live merchant account already, you can skip ahead and either use the [Assisted Setup](getting-started.md) to configure NAV-X Credit Card with the live credentials or follow the steps below to update the Credit Card Setup with this information.

## Live Merchant Application

You can fill out our [contact form](http://dynamics365creditcard.nav-x.com/buy-now/) to initiate the merchant application process. We will contact you and work with you to gather the remaining information needed, explain the fees for you, and answer any questions you have. We will be there for you for every step in the way. If you are processing already credit card transactions with another gateway or even with another software, we can also help you understand the potential savings.

## Merchant Card

[!include[signup-tenant](includes/signup-tenant.md)]

You can start the merchant setup by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Merchant Account**, and then choose the related link. Alternatively, you can also select the action **Merchant Accounts** in the [Credit Card Setup](credit-card-setup.md) page. When you are on the **Merchant Account List**, please click **Edit** to update an existing merchant or select **New** to enter a new merchant account.

### General

|                                          |                                                                                                                |
|------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| **Id**                                   | The **Id** is automatically generated and uniquely identifies the merchant account throughout the system       |
| **Description**                          | Define a description that identifies the merchant. For instance, the merchant that is created automatically when you enter credentials in the **Credit Card Setup** or the **Assisted Setup**, has the description *Default Merchant*. |
| **Authorization Expiration Calculation** | Different banks have different timeframes an authorization is valid for. After this time period, those authorizations expire, releasing the funds. Define the authorization period as a date formula in this field to allow the system to automatically reauthorize the authorizations before they expire.<br><br>Please contact your gateway for the best value to define here. |
| **Merchant Account in Currency Code**    | If the merchant account is using any other currency than the local currency as the base for transactions, please define the currency code here. |
| **Country Code**                         | If this merchant is only valid for a specific country, please define the country code in this field. When selecting the proper merchant to use for a specific transaction or customer, the system will first select the merchant that matches the country code defined before looking for other merchants that could be valid. |
| **Use for Dimension**                    | If you have defined a dimension in the **Merchant Dimension Code** field on the **Credit Card Setup**, you can define a dimension value in this field. This will allow the setup of multiple merchants used for different departments, business lines, or other dimensions.
| **Use for Currency Codes**               | You can define multiple merchant accounts and each merchant account can be defined to be used for transactions in a different currency. This can be useful, if you have different merchant accounts to reduce the amounts of foreign exchange transaction charges. |
| **Blocked**                              | You can block a merchant account. When a merchant account is blocked, it cannot be used in the system.         |

### Authentication

The merchant credentials that are required to be entered below have been provided by Century Business Solutions. If you do not have those credentials anymore, you can request them from their support team at <a href="mailto:support@centurybizsolutions.com">support@centurybizsolutions.com</a>.

|                 |                                                                                                                                   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Security Id** | The **Security Id** is part of the merchant credentials provided to you by your gateway. Please make sure that you enter the complete information. |
| **User Id**     | The **User Id** is part of the merchant credentials provided to you by your gateway. Please make sure that you enter the complete information. |
| **Password**    | The **Password** is part of the merchant credentials provided to you by your gateway. Please make sure that you enter the complete information. |

### Posting

|                              |                                                                                                                            |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **Credit Card Account Type** | You can define a credit card clearing account as a balancing account for all credit card transactions. The clearing account will be used to reconcile transactions with the actual money received from your gateway.<br><br>You can select between a G/L Account and Bank Account. It is recommended to use a bank account as the credit card clearing account, since Dynamics 365 Business Central provides advanced reconciliation functionality for bank accounts, which will make it easier for you to keep track of your credit card processing. |
| **Credit Card Account No.**  | If you selected **G/L Account** in the previous field, you can select a G/L account from the drop down list and if you have selected **Bank Account**, you can select a Bank account from the drop down list. |

### Emails

Before you can configure emails that are sent from NAV-X Credit Card to your customers inviting them to use the EBizCharge Connect Portal, you must setup the [SMTP Email Setup](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email) within Business Central.

|                                       |                                                                                                                   |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| **New Email Body Report Name**        | The **New Email Body** report allows the definition of the email body for emails sent to customers inviting them to sign up for the EBizCharge Connect Portal. You can use the default report provided with the software or create your own report. |
| **New Email Body Report Layout Name** | If you want to customize the wording of the email body for a new customer sign up for the EBizCharge Connect Portal, you can create a new layout for the specific report and update the texts. If you want to use the default body, please do not select any value in this field. |
| **Email Sender Name**                 | Enter the name that you want to show as the sender in an email that is sent to a customer inviting them to sign up for the customer portal. |
| **Email Sender Address**              | Enter the email address that you want to use to send the email from to invite customers to the customer portal. This email has to be accessible from the account that is configured in the **SMTP Email Setup**. |

## Actions

### Report > Source Keys

Before you can connect one or many terminals, you have to configure source keys for a particular merchant. The API keys and Pins can be requested from the gateway or can also be created directly within the gateway portal. If you require more information how to create or request more source keys, please contact the gateway support. Learn more about [Source Keys](page-source-keys.md).

## See Also

- [Assisted Setup](getting-started.md)
- [Live Merchant Signup](http://dynamics365creditcard.nav-x.com/buy-now/)
- [Setting up Email](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email)

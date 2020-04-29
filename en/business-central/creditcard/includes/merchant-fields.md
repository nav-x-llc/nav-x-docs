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
| **Credit Card Account Type** | You can define a clearing account as a balancing account for all ACH and credit card transactions. The clearing account will be used to reconcile transactions with the actual money received from your gateway.<br><br>You can select between a G/L Account and Bank Account. It is recommended to use a bank account as the clearing account, since Dynamics 365 Business Central provides advanced reconciliation functionality for bank accounts, which will make it easier for you to keep track of your payment processing. |
| **Credit Card Account No.**  | If you selected **G/L Account** in the previous field, you can select a G/L account from the drop down list and if you have selected **Bank Account**, you can select a Bank account from the drop down list. |

### Emails

Before you can configure emails that are sent from NAV-X Credit Card to your customers inviting them to use the EBizCharge Connect Portal, you must setup the [SMTP Email Setup](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email) within Business Central.

|                                       |                                                                                                                   |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| **New Email Body Report Name**        | The **New Email Body** report allows the definition of the email body for emails sent to customers inviting them to sign up for the EBizCharge Connect Portal. You can use the default report provided with the software or create your own report. |
| **New Email Body Report Layout Name** | If you want to customize the wording of the email body for a new customer sign up for the EBizCharge Connect Portal, you can create a new layout for the specific report and update the texts. If you want to use the default body, please do not select any value in this field. |
| **Email Sender Name**                 | Enter the name that you want to show as the sender in an email that is sent to a customer inviting them to sign up for the customer portal. |
| **Email Sender Address**              | Enter the email address that you want to use to send the email from to invite customers to the customer portal. This email has to be accessible from the account that is configured in the **SMTP Email Setup**. |
| **Receipt Name**                      | If you want to send receipts for any transactions to an internal person, you must define the name of the recipient. |
| **Receipt E-mail**                    | If you want to send receipts for any transactions to an internal person, you must define the e-mail address of the recipient. You can only enter one e-mail address. |

> [!NOTE]
> It is also possible to define the e-mail receipt setup on the gateway globally. If you have defined this setup on the gateway, please do not define it here or your recipient will receive two receipts for each transaction.

## Actions

### Report > Source Keys

Before you can connect one or many terminals, you have to configure source keys for a particular merchant. The API keys and Pins can be requested from the gateway or can also be created directly within the gateway portal. If you require more information how to create or request more source keys, please contact the gateway support. Learn more about [Source Keys](../page-credit-card-source-keys.md).

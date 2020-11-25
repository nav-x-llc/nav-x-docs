# Frequently Asked Questions

## General

- [Where do I find valid test credit card numbers?](faq-index.md#where-do-i-find-valid-test-credit-card-numbers)
- [How do I settle a batch?](faq-index.md#how-do-i-settle-a-batch)
- [Transferring Credit Card Data from your old system](faq-index.md#transferring-credit-card-data-from-your-old-system)
- [What to do when I create a new sandbox with data from the live system?](faq-index.md#what-to-do-when-i-create-a-new-sandbox-with-data-from-the-live-system)

## Payments

- [How can I pay multiple invoices with a card at once?](faq-index.md#how-can-i-pay-multiple-invoices-with-a-card-at-once)
- [My customers do not want to provide us with their credit card information](faq-index.md#my-customers-do-not-want-to-provide-us-with-their-credit-card-information)

## Notifications

- [How can I turn off notifications about successfully authorized cards?](faq-index.md#how-can-i-turn-off-notifications-about-successfully-authorized-cards)

## System

- [I want to update my version of NAV-X Credit Card](faq-index.md#i-want-to-update-my-version-of-nav-x-credit-card)

## Errors

- [The Merchant Credentials are not defined](faq-index.md#the-merchant-credentials-are-not-defined)
- [An unknown error occurred communicating with the licensing server](faq-index.md#an-unknown-error-occurred-communicating-with-the-licensing-server)
- [Communication with the gateway failed](faq-index.md#communication-with-the-gateway-failed)
- [Unable to update tenant](faq-index.md#unable-to-update-tenant)
- [Unable to see Credit Card functionality](faq-index.md#unable-to-see-credit-card-functionality)

## General Answers

### Where do I find valid test Credit Card numbers

If you have the processing mode configured to “Test”, you cannot process real credit cards. This is done to ensure that you do not charge cards by accident. We have prepared a list of credit card numbers for you that you can use to test transactions. We have a [list of test credit cards](test-credit-cards.md) for you.

### How do I settle a batch

With NAV-X Credit Card it is not necessary to manually close or settle a batch. You can define a time on the gateway to automatically close batches. In fact, batches are completely processed in the background on the gateway and are not required to be dealt with in Microsoft Dynamics 365 Business Central.

### Transferring Credit Card Data from your old system

If you have been using our credit card gateway before with a different software package, you might want to move existing credit cards into the Credit Card solution for Microsoft Dynamics 365 Business Central. As long as you have access to your gateway portal, it does not involve a lot of effort.

From your gateway portal, please get a list of all customers with the two fields *Cust ID* and *Cust Num*. Your gateway support can assist you in obtaining this list. Once you have a list of the customer numbers, you can open up Dynamics 365 Business Central and navigate to the configuration packages. You can create a new configuration package, following the Business Central help information. You then have to define one table in the list of tables. The table to be defined is table 70083430 **NAVX CC Merchant Customer**. You can include all fields and then select the **Export to Excel** button.

Once you have the Excel spreadsheet, you will have to fill in the following fields:

|                          |                                                                                                                                |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Merchant Id**          | If you have only one merchant account, the Merchant Id is always “1”. You can also navigate in Business Central to the merchant account list and retrieve the merchant id from that list, especially, when you use multiple merchant accounts. |
| **Customer No.**         | This is the customer number of the Business Central customer record for each customer that has at least one credit card in the gateway. To be able to map this successfully, you will need to identify the Business Central customer no. for a specific gateway customer. |
| **Gateway Customer No.** | This is the “Cust Num” from the list you exported from the gateway portal. This number will link the Business Central customer to the gateway portal. |
| **Connect Customer No.** | This is the customer number of the EBizConnect portal. Your gateway support will be able to assist you in retrieving a list of these customer numbers. |

Once this is configured, you can re-import the configuration package into Business Central. Once you have imported the data, you can apply it to the database. Then the periodic activities defined in the job queue entries in Business Central will start downloading the credit card information for all customers that have been defined in the table. If you have any new customers and your customers are starting to add credit cards through the portal, this will also pick up any of the new credit cards on each next run of the scheduled job.

### What to do when I create a new sandbox with data from the live system

It is important to be able to have a sandbox that is using live data. This can be used to replicate errors or other issues and trace down the causes. Or, you can even just use it for training. There are two different ways to prepare a new sandbox for use with Credit Card. You can just check the **Test Mode** field in the **Credit Card Setup**. You then have to log out and log back in to have those changes go into effect.

Sometimes, it is important, however, to actually post transactions to the gateway using the sandbox merchant account. You need to prepare the data for this. Please choose ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Credit Card Purge Data**, and then choose the related link to start the report.

> [!WARNING]
> This report is dangerous, if executed in the wrong database. It will remove all credit card data from the database. If you are executing this report, you must be sure that you are using the right database and have a backup of the database before you do it.

## Payment Answers

### How can I pay multiple invoices with a card at once

Customers often have multiple outstanding invoices and want to pay them with credit card at once. This is easy to achieve with NAV-X Credit Card. You can navigate to the **Customer Ledger Entries** for the particular customer and then select the action **Charge Card – multiple Invoices**. This will open a page allowing you to select all invoices you want to pay and then select the one or more credit cards to pay.

### My customers do not want to provide us with their Credit Card information

Customers sometimes are hesitant to provide credit card information over the phone or via email. Your customers still can pay your invoices via credit card. You can send a customer an invitation to sign up to the EBizCharge Connect Portal and customers can securely enter their credit cards there or even pay invoices with the portal.

You can also define the EBizCharge Connect Payment Service on the customer as the default payment service. This will then print a link on all invoices and your customers can follow that link to pay an invoice. For this to work properly, it is suggested to send invoices via email (rendered as PDF) to your customers so that they can click the link.

## Notification Answers

### How can I turn off notifications about successfully authorized cards

When you authorize a credit card, you receive a message saying that the authorization was successful. While it is important to know, if an authorization was successful or not, it also requires an additional click to accept the message. You might want to only see errors in case the authorization did not work and otherwise don’t receive any message. This notification as well as others can be turned off on a user by user basis. Learn [How to Customize Notifications](how-to-customize-notifications.md).

## System Answers

### I want to update my version of NAV-X Credit Card

When we release a new version of NAV-X Credit Card, you will want to upgrade to that version. The upgrade does not happen automatically, unless your environment is upgraded to a new major release. This happens in the Spring and Fall of every year. Between those major upgrades, you will need to manually update your extensions.

To update your extensions, you can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extensions**, and then choose the related link. Alternatively, you can also select *Setup & Extensions > Extensions* from the **Role Center**. Then find the extension called **Credit Card by NAV-X** and click on **Show More Options**, which is represented by the three dots in the upper right corner of the extension. Select **Uninstall** and follow the instructions.

Once you have uninstalled the extension, please make sure that you are again on the **Extensions** page and select *Manage > Extension Marketplace*. You then can enter **NAV-X Credit Card** in the **Search Microsoft AppSource** box. Click on the **Free Trial** button and follow the prompts. You can monitor the status of the installation from **Extensions** by selecting *Manage > Deployment Status*.

You now have installed the latest version of the extension and can start taking advantage of the latest issue fixes and features.

## Error Answers

### The Merchant Credentials are not defined

If you receive the error message "The merchant credentials are not defined" at any time in your process, you must validate that the credentials defined in the system are complete. You can validate and update the merchant credentials in the [Merchant Account Setup](merchant-setup.md#merchant-card).

### An unknown error occurred communicating with the licensing server

From time to time our apps try to communicate with our licensing server to ensure that your subscription is still active. If this is not possible, you will receive an error message. There can be various reasons for this, however, the most common one is that the system does not allow the communication with our servers.

To rectify this, you can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extensions**, and then choose the related link. Alternatively, you can also select *Setup & Extensions > Extensions* from the **Role Center**. Then find the extension called **NAV-X Library by NAV-X** and click on **Show More Options**, which is represented by the three dots in the upper right corner of the extension. Select **Configure**. In the page opened, please ensure that the field **Allow HttpClient Requests** is active.

### Communication with the gateway failed

Our app must be able to communicate with the Credit Card gateway to process your transactions. If you receive error messages stating that a communication with the gateway failed, a possible issue can be that the system does not allow the communication with external services.

To rectify this, you can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extensions**, and then choose the related link. Alternatively, you can also select *Setup & Extensions > Extensions* from the **Role Center**. Then find the extension called **Credit Card by NAV-X** and click on **Show More Options**, which is represented by the three dots in the upper right corner of the extension. Select **Configure**. In the page opened, please ensure that the field **Allow HttpClient Requests** is active.

Please also [Provide details on the errors](../how-to-debug-service-errors.md) that you are receiving.

### Unable to update tenant

When using a version of our NAV-X Library prior to version 2.0.9 and upgrading to a new Business Central version, you might receive the error "Unable to update tenant". This error is caused by Microsoft changing tenant ids at the time of upgrading to a new Business Central version and our system not being able to determine the new Business Central tenant id. Please open a support ticket with us indicating your Azure Active Directory Tenant ID. We will then be able to update this in our systems.

To determine the *Azure AD Tenant Id*, please go to the question mark on the top right in Business Central and Select **Help & Support**. At the bottom under *Troubleshooting*, you will find the **Azure AD tenant**.

Please also [Provide details on the errors](../how-to-debug-service-errors.md) that you are receiving.

### Unable to see Credit Card functionality

There are various reasons why you cannot see the credit card functionality or the credit card setup wizard. We will go through the different reasons why you might be experiencing the issue:

1. You don't have a license
 Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **About NAV-X**, and then choose the related link to open the related page. On this page, you will see the different NAV-X apps that you have installed at the bottom under *Our Installed Apps*. Please validate that the **License Type** is set to **Trial** or **Full** and that the **Expiration Date** is in the future.

 If this is not the case, select the NAV-X App in question and drop down next to *Apps* and then select the **App Registration** action to go through the registration of the product. Please ensure that you log out of Business Central and log back in.
2. You have a license, but the license information is not up to date
 If you have paid for the subscription, but your license information does not show up in the **About NAV-X** page, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **About NAV-X**, and then choose the related link to open the related page. Then select the action **Reset License Information**. If your license then shows up properly, please ensure that you log out and log back in again.
3. You do not have the correct permissions
 If you have the proper license and it shows up properly, please validate that your user has the proper permissions defined. Your user should either have the *SUPER* user role or the permissions provided with the app. Learn more about [Permission Setups](permission-setups.md).
4. You have to sign out and sign back in
 If you make any changes to the license or the permissions, please ensure that you log out of Business Central and log back in. When logging in, your configuration is refreshed and should then enable the Application Area that is used to show or hide the various fields. If you have not enabled credit card processing in the setup yet, you should now see a notification on the role center asking, if you want to start or complete the setup process. You can also select the Action *Setup & Extensions > Assisted Setup* and scroll down to the **NAV-X** group.

 If you cannot see the setup wizard, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Application Area**, and then choose the related link to open the related page. Please search for the application area called *NAV-X Credit Card* and validate that it has a check mark.

If you still have issues, please feel free to [contact us](https://nav-x.com/support/)

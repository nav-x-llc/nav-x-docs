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

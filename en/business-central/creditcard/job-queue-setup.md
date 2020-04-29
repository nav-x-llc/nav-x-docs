# Job Queue Setup

NAV-X Credit Card creates job queue entries for different processes that are running automatically. Those processes are used for various tasks and are described in more detail below. In case you want to adjust the frequency or times when those processes run - or even disable them completely, you must review and update the **Job Queue Entry** provided by us for NAV-X Credit Card. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Job Queue Entries**, and then choose the related link.

You typically do not have to make any changes to those processes, but you should be aware that they are there and that they might need periodic review. If the **Status** of any of the job queue entries for NAV-X Credit Card ever shows the status of **Error**, you can select the action **Show Error** to display the error message for this entry and take corrective action, such as resolving the error and then using the action **Set Status to Ready**.

## Credit Card Periodic Activities

The periodic activities are setup by default to run once a day at midnight. There are various tasks that this process takes care of.

### Reauthorize Transactions

This report reviews all current credit card authorizations and determines, if those are expiring soon. If they are expiring within the next day, the process automatically reauthorizes those transactions. If you do not use authorizations and just process sales, this part of the process does not do anything.

### Remove Sensitive Data

In an effort to reduce the amount of sensitive information that is stored in the database, this process reviews credit card transactions and removes any sensitive data that is not needed anymore. While all that data is encrypted in the database, if you have [encryption enabled](https://docs.microsoft.com/en-US/dynamics365/business-central/admin-manage-data-encryption), it still is good practice to clean up and not even store more data than is actually needed for fully processed transactions.

### Expired Credit Cards

If you have any customer credit cards on file that are expiring, the system will block those automatically so that they don't show up in the list to select credit cards anymore. The credit card will only be blocked, if the expiration month and year are less than the current date and it does not have any open authorizations attached. For instance, if a credit card expires 12/2019, the system will block this credit card starting January 2020.

You have access to all blocked credit cards for a customer through the **Credit Cards list** accessible from the **Customer** page. You can ask the customer for a new expiration date and update the card. After the expiration date has been updated, you can remove the **Blocked** flag and continue using the credit card.

### Removing Credit Cards

If a credit card is expired, the system will remove the credit card token from the system, since it is not valid anymore. This will happen after the **Data Retention Period** has lapsed for a credit card. If you set the **Data Retention Period** for one or two weeks, you still have the opportunity to update the expired credit cards before they will be deleted and then the card will not be deleted anymore. The **Data Retention Period** can be adjusted in the [Credit Card Setup](credit-card-setup.md).

## Payment Import

Any payments that have been processes outside of Business Central, such as payments that came in from the portal, are imported into Business Central with this process. Once imported, the payments are automatically posted as payments in Business Central and, if possible, applied to the proper invoices.

This process is configured to run once an hour by default to ensure that payments are imported at a reasonable time.

## Payment Method Import

Customers can enter their ACH and credit card information through the EBizCharge Connect portal. This way the customer does not have to provide their information over the phone. This process imports these bank accounts and credit cards from the portal into Microsoft Dynamics 365 Business Central so that they can be used to pay invoices.

This process is configured to run once an hour by default to ensure that payment methods are imported at a reasonable time.

## See Also

- [Use Job Queues to Schedule Tasks](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-job-queues-schedule-tasks)
- [Manage Data Encryption](https://docs.microsoft.com/en-US/dynamics365/business-central/admin-manage-data-encryption)
- [Credit Card Setup](credit-card-setup.md)

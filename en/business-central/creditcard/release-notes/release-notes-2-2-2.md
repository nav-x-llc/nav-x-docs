# Release Notes for May 2020 Update - Version 2.2.2

## New Features

### Additional permission sets

We always provided a permission set for our our credit card solution. This permission set is configured to give an user the full permissions to the credit card functionality. However, this also included setup permissions and those might not want to be provided to everyone. We now turned this into a *Credit Card Super User* permission set and added an additional permission set for regular users. Learn more about [permission setups](../permission-setups.md).

### Pay Invoices by Credit Card

We have enhanced our functionality allowing your customers to pay their open invoices via credit card or ACH. It is now possible to configure for each customer individually, if a payment link to pay invoices via credit card should be shown on an invoice. Learn more about [Customer Setups](../how-to-credit-card-customers.md#customer-specific-setups).

### Pay Invoices on the Customer Gateway

We have enhanced our functionality allowing your customers to pay their open invoices through the customer portal. It is now possible to configure for each customer individually, if open invoices should be uploaded to the portal. Learn more about [Customer Setups](../how-to-credit-card-customers.md#customer-specific-setups).

### Email and Print Receipts

You can now send transaction receipts to your customers via email when a transaction is completed. This will allow you, in addition to providing your customers with the invoices, to also provide proof of payment to your customers. Learn more about [Customer Setups](../how-to-credit-card-customers.md#customer-specific-setups).

You can also send receipts to an internal person as validation that a credit card has been charged. Learn more about [Merchant Setups](../merchant-setup.md#emails).

We also added a report so that you can print a receipt at the time you had a *Card Present* transaction, which means that your customer used a terminal to pay. The report can be customized like any other reports or documents in Business Central. The print receipt functionality must be activated in the **User Setup** and the report must be defined in the **Report Selections - Credit Card**. Learn more about [User Setup](../additional-setups.md#user-setup) and [Report Selections - Credit Card](../page-credit-card-report-selections.md).

### Invoice updates

We have created a new *Sales Invoice* report. This report acts as a replacement of the standard sales invoice and can be used to print credit card payment details for invoices. This report can be customized to fit your needs and it has to be setup in the **Report Selections - Credit Card**. Learn more about [Report Selections - Credit Card](../page-credit-card-report-selections.md).

### Improved payment of multiple invoices

It is now possible to select multiple invoices directly from the **Customer Ledger Entries** page and select **Charge - multiple invoices** or from the **Posted Sales Invoices** page and then select **Charge** to pay the invoices.

### General Usability

#### Default Payment Terms

We have added the ability to define **Payment Terms** for the **Payment Methods** used for *Credit Card* or *ACH* payments. If this **Payment Method** is used on a document, the **Payment Terms Code** is automatically updated. This can be used to automatically change the payment terms for an invoice to a term without early payment discounts, for instance. Read more on [setting up Payment Methods](../additional-setups.md#payment-method-setup).

#### Notifications

We have renamed the notifications that we are adding to Business Central to always start with *Credit Card:* to make it easier to find the different notifications. Read more on [customizing notifications](../how-to-customize-notifications.md)

#### Shortcut support

We have started adding shortcuts to our actions. On Sales and Service documents, you can now use shortcuts to process the transactions. Read more on [supported shortcuts](../shortcuts.md)

### Pay by Credit Card

We have now added the functionality to show a payment link on posted invoices to the default reports for Business Central. This can be configured by the setting **Enable Invoice Payment Form** in the [Credit Card Setup](../credit-card-setup.md#features)

## Temporary Bank Accounts and Credit Cards

When a credit card was entered on a sales order and not selected from the drop down list, the credit card was automatically tokenized and added to the customer's list of credit cards for future use. You can now adjust this behavior by enabling or disabling the new setting **Tokenize Manual Cards** in the [Credit Card Setup](../credit-card-setup.md). If this setting is disabled, credit cards entered manually will only be used for this one transaction and will not be saved automatically for future use.

## Issues

### Renaming customers

When customers were renamed, the customers did not get updated in the gateway. Since we are using the Business Central Customer Number to provide an easy reference in the gateway, we have now implemented a renaming functionality that updates the customer numbers in the gateway as well, if a customer is renamed in Business Central.

### Expiration Date update

When the **Expiration Date** was updated in Business Central, it also updated the date in the gateway. However, the updated expiration date was not reflected in Business Central until the credit card information was downloaded from the gateway again. This has been resolved.

### Tax Area

Under certain circumstances, you can receive an error message, if the Tax Area code is empty on your transaction. This has been resolved.

### Payment on account

When the customer's action **Payment on Account** was used and dimension setups were configured to be mandatory, an error could have been shown that the dimension value has not been set, even if those dimension codes were set on the appropriate master records. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-credit-card)

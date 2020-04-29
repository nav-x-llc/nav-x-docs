# Release Notes for April 2020 Update - Version 2.2.1

> [!NOTE]
> This version is only available for Microsoft Dynamics 365 Business Central 2020 Wave 1 or later for Business Central SaaS. For Business Central on premise customers, this version can be installed for earlier versions of Business Central as well.

## New Features

### ACH support

You can now process ACH payments in addition to processing credit cards. This caused updates in all areas of the application and will be illustrated in the different areas of the online help. Please note that a lot of areas have been renamed from *Credit Card...* to *Payment...* If you would like to start processing ACH payments, please contact your gateway's support team to discuss the activation procedures around ACH processing for your account. Once your account has been enabled for ACH payments, please [review the setups](../credit-card-setup.md#general).

### Improved Error Management

Business Central has added the ability to display multiple errors at the time of posting a transaction in recent updates. If posting fails, you will now see a page called **Error Messages** highlighting the different issues that occurred. We have now integrated the authorization and charge functionality into this process. A posting process will fail, if the transaction with the gateway fails. We also have been able to add a rollback of the transaction in the gateway, if the posting process fails. This means that, if the posting process fails, the authorization or the charge in the gateway will be voided as well. This is implemented for the sales process currently.

### Update Customer to Gateway mapping

In case that the mapping information between the Business Central customers and the customers stored in the gateway become out of sync, we have now added a new task that will allow you to recreate the mapping information from the gateway. Read more on [Validate Credit Card Customer Merchant Mapping](../report-validate-credit-card-customer-merchant-mapping.md)

### Improved Refund Handling

You can now process refunds to credit cards or bank accounts as a journal entry only. Until now, it was only possible to actually create a credit memo and therefore also return the inventory back into stock. We have introduced a new setting **Create Credit Memo for Invoice Refunds** this, if disabled, will only refund the financial transaction and not cause a credit memo to return inventory to stock. Read more on [setting up Credit Card](../credit-card-setup.md).

It is now also easily possible to process partial refunds directly from customer ledger entries. When refunding a transaction from a customer ledger entry, you can enter the appropriate amount to be refunded. You can also select the payment customer ledger entry and do not have to select the actual invoice anymore. It is now possible to refund the payment directly.

When creating a credit memo, you can now select a closed invoice in the **Applies-to Document No.**, if the invoice was closed by a credit card payment. If you use the **Copy Document** process to create the credit memo, the **Applies-to Document No.** will automatically be set to the document you copied from. It is now only possible to select one of the credit cards that were used on the original transaction for refund.

### Batch Processing

Batch posting of invoices currently is not working correctly in Business Central. Therefore, we have added our own batch processing functionality that will be removed when the standard Business Central functionality is updated to work properly. The function is implemented on the **Sales Invoices** page and is found under *Actions > Posting > Post Batch with Payment*.

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

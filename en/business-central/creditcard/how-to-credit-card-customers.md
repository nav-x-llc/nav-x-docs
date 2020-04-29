# How To Setup Customers for Payment Methods

If you need information on how to create a new customer, you can find this in the Microsoft Dynamics 365 Business Central [documentation](https://docs.microsoft.com/en-US/dynamics365/financials/sales-how-register-new-customers). We are going to look at the payment specific setups for an already existing customer.

Any customer can pay via ACH or credit card at the time of order entry. However, you can also configure a customer to use bank accounts or credit cards as their default payment method. To do this, navigate to the customer card and scroll to the **Payments** fast tab. On the right of the tab, you see **Show more**, which will display additional fields when clicked. Once you selected **Show more**, the field **Payment Method Code** will be available. If this customer should pay via credit card by default, select the credit card payment method in this field.

If a payment method code is selected that has the **Payment Type** set to **ACH** or **Credit Card**, each order requires a bank account or credit card to be selected or entered, before the order can be posted. If the customer wants to pay a specific order via check or cash, you can change the **Payment Method Code** on the individual document.

We are suggesting that you also validate that the **Payment Terms Code** on the customer is set to a term such as **Cash on Delivery** or **Credit Card** or **ACH**, since you would not want to setup payment discounts for customers when they pay via credit card. This can also be automated by utilizing a field on the **Payment Method** to define the **Payment Terms Code** to be used for the specific **Payment Method**. Learn more details about the [Payment Method Setup](additional-setups.md#payment-method-setup).

Some customers might not want to give you their bank account or credit card information over the phone or email. You can still give those customers the ability to pay their invoices via ACH or credit card. You have two different options to allow customers to pay their invoices via ACH or credit card in case the customer does not want to give you their information over the phone.

## Payment Method Entry via Customer Portal

If you have an email address defined on the customer card, you can send the customer a sign up email to allow the customer to register with the EBizCharge Connect payment portal. A customer can log on to the portal and enter their bank account or credit card information securely on the site. Microsoft Dynamics 365 Business Central then downloads this information from the portal in a tokenized form so that you can use the bank accounts and credit cards to charge orders or invoices, but the customer does not have to email you their information or give them to you via the phone.

The customer will be setup in the portal and an email will be sent to the customer allowing the customer to register at the portal. The customer will need to enter the email address as well as their zip code. Once logged on to the portal, different payment methods can be created. Business Central has an scheduled job running (by default every 60 minutes) to import newly entered bank accounts and credit cards into the system. Once they imported, you can use these payment methods to authorize and charge orders against.

The email sent to the customer is a Microsoft Word document and can be customized. <!-- Learn more about [Customizing Sign up Email](how-to-customize-signup-email.md). -->

## Customer specific setups

The fast tab **Payment Setups** contains different fields that allow a configuration of the credit card functionality customized for each customer. 

|                                 | |
|---------------------------------|-|
| **Enable Invoice Payment Form** | When enabled, a link to a payment form will be shown on each open invoice. If the invoices are sent via email to your customers, the customer can directly click on the link, enter their credit card or ACH information, and pay the invoice conveniently online. To enable this functionality for this customer only, set it to **Yes**. If the value is set to the initial value **Blank**, the setup on the Credit Card Setup defines the behavior. If it is set to **No**, the link will not be displayed. |
| **Upload Invoices to Gateway**  | When enabled, all open invoices will be sent to the customer payment portal. A customer can sign on to the portal and review and pay all open invoices. Once an invoice is paid, the payment details are imported into Business Central and automatically applied to the open invoice. To enable this functionality for this customer only, set it to **Yes**. If the value is set to the initial value **Blank**, the setup on the Credit Card Setup defines the behavior. If it is set to **No**, the invoices will not be uploaded.
If you set the value to **Yes**, you will be asked, if you want to upload all existing open invoices. |
| **Send E-Mail Receipts**        | When enabled, receipts of processed transactions will be sent to the customer via email as soon as the transaction is completed. The email receipt layout can be customized in the gateway. To enable this functionality for this customer only, set it to **Yes**. If the value is set to the initial value **Blank**, the setup on the Credit Card Setup defines the behavior. If it is set to **No**, no email receipts will be sent. |
| **E-Mail Address for Receipts** | If you want to send receipts to your customers via email, you must define the email address for the recipient of the receipt. You can only enter one email address. |
| **E-Mail Receipt Template**     | The gateway allows you to have multiple different templates for email receipts. The templates can be setup and customized on the gateway. You can select a template for this customer. If you do not select a template, the default template will be used. Learn more about [E-Mail templates](page-credit-card-email-receipts.md) |

> [!IMPORTANT]
> It is important that the **Application Method** for the customer is set to **Manual** for any customer that should be able to pay via credit card. This setting is the default for a customer.

## See Also

- [Register New Customers](https://docs.microsoft.com/en-US/dynamics365/financials/sales-how-register-new-customers)
- [Payment Method Setup](additional-setups.md#payment-method-setup)
- [E-Mail Templates](page-credit-card-email-receipts.md)
<!-- - [Customizing Sign up Email](how-to-customize-signup-email.md) -->

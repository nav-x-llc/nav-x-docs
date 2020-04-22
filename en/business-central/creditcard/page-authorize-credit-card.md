# Authorize or Charge Payment Methods Page

If you have the system set up to authorize and charge transactions, you have different ways of authorizing or charging a payment method. You can define a credit card on the document and then release the document, which will authorize the credit card that was defined. If you do not have a credit card defined or if you want to charge multiple cards, you can either release the document without having a card defined or you can select the **Authorize Card** action on the ribbon.

The **Authorize Credit Card** page will be shown to allow you to enter one or multiple credit cards. If you are charging the credit card, for instance, through the **Charge** action on the sales documents, you will see the same page as shown below, but it will be titled **Charge Credit Cards**. The same page is also used when charging bank accounts. Bank accounts cannot be authorized, however, ACH payments can be processed by charging a bank account.

You can select a bank account or credit card from the drop down list in **Account Number** after selecting the **Account Type** to define, if you want to process an ACH or credit card payment. You can also manually enter bank account or credit card information, which then will be tokenized and saved in the system for future use as well, unless you have deactivated the flag **Tokenize Manual Cards** in the [Credit Card Setup](page-credit-card-setup.md). If you only want to enter one bank account or credit card, you then just click the **Ok** button and continue. If you want to enter multiple payment methods, please enter the first account information, define the amount to be charged to this payment method, and click **Add**. Then continue with the next account. You will see multiple accounts in the list at the bottom of the screen.

## Fields

### General

|                         |                                                                                                                                 |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| **Account Type**        | You can select, if you want to process an **ACH** payment or a **Credit Card**.                                                 |
| **Account Number**      | You can select an existing bank account or credit card from the drop down or you can enter new ACH or credit card information. If you select an existing account from the drop down, most fields will become non-editable. The only fields editable will then be the **Security Code** (for Credit Card) and the **Amount to Authorize**. |
| **Routing No.**         | Enter the routing number for the bank account. This is only available when the **Account Type** is set to **ACH**.              |
| **First Name**          | Enter the first name of the account holder. If the account holder has a middle initial, please enter this also in the first name. |
| **Last Name**           | Enter the last name of the account holder.                                                            |
| **Expiration Date**     | Enter the expiration date for this credit card in the form of MM/YY, MMYY, or MM/YYYY. This is only available when the **Account Type** is set to **Credit Card** |
| **Security Code**       | If you are required to enter the security code for the credit card, please enter the three or four digit security code here. This is only available when the **Account Type** is set to **Credit Card** |
| **Type**                | This field displays the type of the credit card and cannot be changed for credit cards. If the **Account Type** is set to **ACH**, please select, if the account is a **Savings** or **Checking** Account |

### Transaction Information

|                           |                                                                                                                               |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| **Transaction Amount**    | This field displays the amount of the transaction and cannot be changed.                                                        |
| **Authorized Amount**     | This field displays the amount that is already authorized and cannot be changed.                                                |
| **Amount entered**        | This field displays the remaining amount to process and cannot be changed.                                                      |
| **Description**           | This is the posting description that can be used to define the reason for this charge. It is only available when processing a **Payment on Account**. |
| **External Document No.** | This is the external document no. that can be used to define the charge. It is only available when processing a **Payment on Account**. |
| **Amount to Authorize**   | This is the amount that should be authorized on this credit card. if you want to split the credit card charge between multiple credit cards, you would enter a partial amount here. This field is defaulted to the full transaction amount or the remaining transaction amount, if other cards are already defined. |
| **Amount to Charge**      | This is the amount that should be charged on this credit card. if you want to split the credit card charge between multiple credit cards, you would enter a partial amount here. This field is defaulted to the full transaction amount or the remaining transaction amount, if other cards are already defined. |

### Billing Address

|                       |                                                                                                                                   |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **Bill-to Address**   | If you are entering a new credit card, you must enter the billing address for this card. This field contains the first address line from the billing address of the credit card. |
| **Bill-to Address 2** | If you are entering a new credit card, you must enter the billing address for this card. This field contains the second address line from the billing address of the credit card. This field is optional. |
| **Bill-to City**      | If you are entering a new credit card, you must enter the billing address for this card. This field contains the city from the billing address of the credit card. |
| **Bill-to State**     | If you are entering a new credit card, you must enter the billing address for this card. This field contains the state from the billing address of the credit card. |
| **Bill-to Zip Cde**   | If you are entering a new credit card, you must enter the billing address for this card. This field contains the Post Code or Zip Code from the billing address of the credit card. |
| **Bill-to Country**   | If you are entering a new credit card, you must enter the billing address for this card. This field contains the country from the billing address of the credit card. |

## See Also

- [Process Payment on Account](how-to-payment-on-account.md)

# Authorize or Charge Credit Card Page

If you have the system set up to authorize and charge transactions, you have different ways of authorizing or charging a card. You can define a credit card on the document and then release the document, which will authorize the credit card that was defined. If you do not have a credit card defined or if you want to charge multiple cards, you can either release the document without having a card defined or you can select the **Authorize Card** action on the ribbon.

The **Authorize Credit Card** page will be shown to allow you to enter one or multiple credit cards. If you are charging the credit card, for instance, through the **Charge Card** action on the sales documents, you will see the same page as shown below, but it will be titled **Charge Credit Cards**.

You can select a credit card from the drop down list in **Card Number** or manually enter credit card information, which then will be tokenized and saved in the system for future use as well. If you only want to enter one credit card, you then just click the **Ok** button and continue. If you want to enter multiple credit cards, please enter the first card information, define the amount to be charged to this card, and click **Add**. Then continue with the next card. You will see multiple cards in the list at the bottom of the screen.

## Fields

### General

|                         |                                                                                                                                 |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| **Card Number**         | You can select an existing credit card from the drop down or you can enter new credit card information. If you select an existing credit card from the drop down, most fields will become non-editable. The only fields editable will then be the **Security Code** and the **Amount to Authorize**. |
| **First Name**          | Enter the first name of the account holder as it appears on the card. If the account holder has a middle initial on the card, please enter this also in the first name. |
| **Last Name**           | Enter the last name of the account holder as it appears on the card.                                                            |
| **Expiration Date**     | Enter the expiration date for this credit card in the form of MM/YY, MMYY, or MM/YYYY.                                          |
| **Security Code**       | If you are required to enter the security code for the credit card, please enter the three or four digit security code here.    |
| **Type**                | This field displays the type of the credit card and cannot be changed.                                                          |

### Transaction Information

|                           |                                                                                                                               |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------|
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

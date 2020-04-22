# How to Customer Credit Card Notifications

NAV-X Credit Card displays several notifications and messages throughout the process. You can customize, if you want to see certain messages or not. This can be done under **My Settings**. Learn more about [notifications in general](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-smart-notifications).

You can access these notifications by opening **My Settings** and then go to **Change when I receive notifications**.

The following notifications can be changed by adding or removing the check mark from the field **Enabled** on the page. All notifications added by NAV-X Credit Card start with *Credit Card:*.

|                                                                                                  |                                                               |
|--------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| **Credit Card: Ask to setup Credit Card**                                                        | If the app is not setup completely, you will receive a notification on the role center. If you have a company that does not process credit cards, you might want to turn off this notification |
| **Credit Card: Ask when a sales document is only partially authorized**                          | If you have partial authorization enabled in the [Credit Card Setup](credit-card-setup.md) and the authorization on the sales order is not enough for the order (taking **Allow Charge above Authorization by** into consideration), the system will ask, if you indeed want to authorize the rest of the order. |
| **Credit Card: Show confirmation to card during post**                                           | If a card is already defined on the document, a question is shown, if this card should be used when capturing a transaction. If you turn off this notification, the question is not shown. |
| **Credit Card: Show confirmation to use card defined on document**                               | If a card is already defined on the document, a question is shown, if this card should be used when authorizing a transaction. |
| **Credit Card: Show confirmation to use the card defined on document instead of swiping a card** | If a card is already defined on the document, a question is shown, if this card should be used instead of the customer swiping a card. If this notification is turned off, the card defined on the document is not used. |
| **Credit Card: Show headline for NAV-X Credit Card documentation**                               | A headline will be displayed on the role center to allow easy access to the online documentation for NAV-X Credit Card. |
| **Credit Card: Show message for successful authorization**                                       | When a credit card has been authorized, a message is shown confirming the success. |
| **Credit Card: Show notification for customer with declined transactions**                       | If you are on a customer card and the customer has credit card transactions that were declined and the orders therefore could not be processed, a notification is shown on the customer card. |
| **Credit Card: Show notification for sales document with declined transactions**                 | If you are on a sales document and a declined transactions led to the document not being authorized or charged, a notification will be displayed. |
| **Credit Card: Show notification for service document with declined transactions**               | If you are on a service document and a declined transaction led to the document not being authorized or charged, a notification will be displayed. |

## See Also

- [Notifications](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-smart-notifications)

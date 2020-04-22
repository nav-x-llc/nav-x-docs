# How To enter new Credit Cards

Credit cards are stored by customer. A customer can have multiple credit cards on file, all credit cards can be used for transactions, unless those credit cards are blocked or expired. New credit cards can be setup from the Customer List by selecting *Customer > Credit Cards* to open the **Credit Card List** and then selecting the action **New**. They can also be setup from the Customer Card by selecting *New Document > Credit Card* action or *Customer > Credit Cards* to open the **Credit Card List** and then selecting the option **New**. The minimum information required to enter a new credit card is displayed on the page.

After you enter the credit card information, the data is sent to the gateway for tokenization. At this time, the type of the credit card is also determined, additionally, a validation of the credit card is performed to determine, if the credit card is a valid card that can be used in transactions.

The actual credit card number is never stored in Microsoft Dynamics 365 Business Central. Only a token, a unique identifier for this credit card, is stored. Once the token is generated, the credit card number is masked.

One of the payment methods (bank accounts and credit cards) per customer can be set to **Default**. A default credit card will automatically be selected for any new sales transactions, if the customer is set to always pay by credit card. Only one payment method can be the default. If another method is already set to **Default**, a warning is displayed and you can select to change the default.

If credit cards should not be used anymore, they can be **Blocked**. This will not allow any transactions against the credit card anymore.

The credit card page and list have a fact box defined, which shows statistics on the credit card. You can drill down to the individual transactions. Alternatively, you can also access the payment transactions through the **Entries** action.

[!include[credit-card-fields](includes/credit-card-fields.md)]

[!include[credit-card-fields](includes/credit-card-billing-address-fields.md)]

> [!NOTE]
> While it is possible to change the expiration date on a credit card when it expired, it is recommended to block the credit card and enter a new credit card with the new expiration date and the new security code. This then ensures that another validation is performed as well.

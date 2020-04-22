# How To enter new Bank Accounts

Bank accounts used for ACH payments are stored by customer. A customer can have multiple bank accounts on file, all bank accounts can be used for transactions, unless those bank accounts are blocked. New bank accounts can be setup from the Customer List by selecting *Customer > Bank Accounts* to open the **Bank Account List** and then selecting the action **New**. They can also be setup from the Customer Card by selecting *New Document > Bank Account* action or *Customer > Bank Accounts* to open the **Bank Account List** and then selecting the option **New**. The minimum information required to enter a new bank account is displayed on the page.

After you enter the bank account information, the data is sent to the gateway for tokenization.

The actual bank account number and routing number are never stored in Microsoft Dynamics 365 Business Central. Only a token, a unique identifier for this bank account, is stored. Once the token is generated, the bank account and routing numbers are masked.

One of the payment methods (bank accounts and credit cards) per customer can be set to **Default**. A default bank account will automatically be selected for any new sales transactions, if the customer is set to pay by bank account. Only one payment method can be the default. If another payment method is already set to **Default**, a warning is displayed and you can select to change the default.

If bank accounts should not be used anymore, they can be **Blocked**. This will not allow any transactions against the bank account anymore.

The bank account page and list have a fact box defined, which shows statistics on the bank account. You can drill down to the individual transactions. Alternatively, you can also access the payment transactions through the **Entries** action.

[!include[bank-account-fields](includes/bank-account-fields.md)]

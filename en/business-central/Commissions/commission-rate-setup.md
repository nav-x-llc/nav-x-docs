# Commission Rate Setup

Commission Rates can be setup from different places. You can access the following page from the Salesperson Group, Salesperson, Customer, Item Category, Item, Resource, G/L Account, and Item Charge. The commission rates are the rules that are in place to calculate commissions for your salespeople.

Please review our videos available on YouTube on [Tiered Commissions](https://youtu.be/3kAhofKshAk) and [Date Driven Commissions](https://youtu.be/0xy5YEADO_I).

## Commission Rules

Commission rates can be defined by Salesperson Group, Salesperson, and also for all salespeople. The system will first determine, if there are any valid rules for the specific salesperson. If not, the system will look for the salesperson group that is defined on the salesperson, if one is defined. If no valid rates are found here either, the system will search for commission rates defined for all salespeople (**Salesperson Code** is left blank).

To determine valid commission rates, the system will only consider commissions that are valid for the defined **Commission Effective Date**. Within this date range, the system will determine first, if there are rules defined for the Customer. If not, the system will search for the **Commission Group**, **Customer Price Group** and then **Customer Discount Group** defined on the customer, and if none are found there, the system will search for commission rates defined for all customers.

Depending on the type of line, the system will look for rates defined for G/L Accounts, Resources, Item Charges, or individual items. If the line contains an item, first the system reviews, if there is a rate defined for the individual item. If not, the system will review, if there is a rate defined for the specific item category defined on the item.

## Commission Rates

[!include[commission-rate-fields](includes/commission-rate-fields.md)]

## See Also

- [Setting up Commission Groups](page-commission-group.md)
- [Setting up Commissions](commission-setup.md)
- [Setting up Dimensions](https://docs.microsoft.com/en-us/dynamics365/business-central/finance-dimensions#setting-up-dimensions)
- [Video: Tiered Commissions on YouTube](https://youtu.be/3kAhofKshAk)
- [Video: Date Driven Commissions on YouTube](https://youtu.be/0xy5YEADO_I)

# Item Setup

When you setup commissions using the Setup Wizard, you might have selected the option already to make all items commissionable. This will mark all items that existed during the setup process as commissionable. Any new items will have to be setup manually to make them commissionable. If any item is not setup to be **Commissionable**, the system will not calculate commissions for this items, even if commission rates are setup for the item.

## Commissions

|                                  |                                                                                                                            |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **Commissionable**               | Defines whether this item is commissionable or not. Each individual item can be configured, if salespeople should receive commissions when this item is sold or not. |
| **Calculate Commissions on**     | The general setup is done in the [Commission Setup](commission-setup.md) and it can also be changed on an individual salesperson. If you have items where commissions should be calculated differently, you can define the different setups here.<br><br>- **blank**: If you select the blank value, the commission calculation for this item will be based on the method defined in the **Commissions Setup** or the **Salesperson Card**.<br>- **Gross Profit**: Commissions are calculated on the difference between Sales Amount and Cost<br>- **Sales**: Commissions are calculated on the sales amount<br>- **Quantity**: The commissions are calculated based on the quantity that is sold. This is primarily important for royalty payments. |
| **Maximum Commission**           | Specifies the maximum commission amount that should be paid for this item within the **Maximum Commission Timeframe**. If the commissions calculated within the time frame is greater than the maximum amount defined, the remaining commission will be marked as ineligible and not paid out. |
| **Maximum Commission Timeframe** | The time frame for which the **Maximum Commission** amount defines the maximum commission that can be paid out.            |
| **Commission Calendar**          | When commissions are calculated based on *Percentage Billable*, this field defines the calendar used to define the working days in a period. It can be defined as a default in the [Commission Setup](commission-setup.md) and overridden here. This can only be configured when the item type is *Service*. |
| **Customized Calendar**          | If you made changes to the calendar defined in **Commission Calendar**, it will show *Yes* in this field otherwise it will show *No*. To make changes to the calendar for this specific item, you can click on the *Yes* or *No* value. It will open the page **Customized Calendar Entries**, which allows you to make changes to the calendar. This can only be configured when the item type is *Service*. |
| **Hours per day**                | Defines the hours per day that are considered billable. It is used to calculate the *Percentage Billable* for this item during a specific period. This can only be configured when the item type is *Service*. |
| **Fixed Commission Margin**      | If you want to define a margin to be used for commission calculations when you calculate commissions based on the *Gross Profit* regardless of the actual costs, you can define a fixed margin here. |

## See Also

- [Item Category Setup](item-category-setup.md)
- [Register New Items](https://docs.microsoft.com/en-us/dynamics365/business-central/inventory-how-register-new-items)
- [Commission Rates](commission-rate-setup.md)
- [Setting up Base Calendars](https://docs.microsoft.com/en-US/dynamics365/business-central/across-how-to-assign-base-calendars)

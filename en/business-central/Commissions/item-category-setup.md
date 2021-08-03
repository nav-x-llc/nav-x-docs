# Item Category Setup

Any item category setups on a specific item category are also valid for all categories below this specific category. It is also possible to define commission rates for an item category, which then are valid for all categories below this and all items included in those categories.

## Commissions

|                                  |                                                                                                                            |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **Calculate Commissions on**     | The general setup is done in the [Commission Setup](commission-setup.md) and it can also be changed on an individual salesperson. If you have item categories where commissions should be calculated differently, you can define the different setups here.<br><br>- **blank**: If you select the blank value, the commission calculation for all items in this item category will be based on the method defined in the **Commissions Setup** or the **Salesperson Card**.<br>- **Gross Profit**: Commissions are calculated on the difference between Sales Amount and Cost<br>- **Sales**: Commissions are calculated on the sales amount<br>- **Quantity**: The commissions are calculated based on the quantity that is sold. This is primarily important for royalty payments. |
| **Commission Calendar**          | When commissions are calculated based on *Percentage Billable*, this field defines the calendar used to define the working days in a period. It can be defined as a default in the [Commission Setup](commission-setup.md) and overridden here. This can be configured on the item category, but will only be used for items with the type *Service*. |
| **Customized Calendar**          | If you made changes to the calendar defined in **Commission Calendar**, it will show *Yes* in this field otherwise it will show *No*. To make changes to the calendar for this specific item category, you can click on the *Yes* or *No* value. It will open the page **Customized Calendar Entries**, which allows you to make changes to the calendar. This can be configured on the item category, but will only be used for items with the type *Service*. |
| **Hours per day**                | Defines the hours per day that are considered billable. It is used to calculate the *Percentage Billable* for this item during a specific period. This can be configured on the item category, but will only be used for items with type *Service*. |

## See Also

- [Commission Rates](commission-rate-setup.md)
- [Setting up Base Calendars](https://docs.microsoft.com/en-US/dynamics365/business-central/across-how-to-assign-base-calendars)

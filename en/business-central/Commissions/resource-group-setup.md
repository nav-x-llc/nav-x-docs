# Resource Group Setup

## Commissions

|                                  |                                                                                                                            |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **Calculate Commissions on**     | The general setup is done in the [Commission Setup](commission-setup.md) and it can also be changed on an individual salesperson. If you have resource groups where commissions should be calculated differently, you can define the different setups here.<br><br>- **blank**: If you select the blank value, the commission calculation for all resources in this resource group will be based on the method defined in the **Commissions Setup** or the **Salesperson Card**.<br>- **Gross Profit**: Commissions are calculated on the difference between Sales Amount and Cost<br>- **Sales**: Commissions are calculated on the sales amount<br>- **Quantity**: The commissions are calculated based on the quantity that is sold. This is primarily important for royalty payments. |
| **Commission Calendar**          | When commissions are calculated based on *Percentage Billable*, this field defines the calendar used to define the working days in a period. It can be defined as a default in the [Commission Setup](commission-setup.md) and overridden here. |
| **Customized Calendar**          | If you made changes to the calendar defined in **Commission Calendar**, it will show *Yes* in this field otherwise it will show *No*. To make changes to the calendar for this specific item category, you can click on the *Yes* or *No* value. It will open the page **Customized Calendar Entries**, which allows you to make changes to the calendar. |
| **Hours per day**                | Defines the hours per day that are considered billable. It is used to calculate the *Percentage Billable* for this item during a specific period. |
| **Fixed Commission Margin**      | If you want to define a margin to be used for commission calculations when you calculate commissions based on the *Gross Profit* regardless of the actual costs, you can define a fixed margin here. |

## See Also

- [Commission Rates](commission-rate-setup.md)
- [Setting up Base Calendars](https://docs.microsoft.com/en-US/dynamics365/business-central/across-how-to-assign-base-calendars)

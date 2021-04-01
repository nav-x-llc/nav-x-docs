# Charge (Item) Setup

When you setup commissions using the Setup Wizard, you might have selected the option already to make all item charges commissionable. This will mark all item charges that existed during the setup process as commissionable. Any new item charges will have to be setup manually to make them commissionable. If any item charge  is not setup to be **Commissionable**, the system will not calculate commissions for this item charge, even if commission rates are setup.

|                                      |                                                                                                                              |
|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| **Commissionable**                   | Defines whether the Charge (Item) is to be included in the commission calculation                                            |
| **Calculate Commissions on**         | The general setup is done in the [Commission Setup](commission-setup.md). If you have Item Charges and want to have the  commission calculated differently, you can define the different setups here.<br><br>- **blank**: If you select the blank value, the commission calculation for this salesperson will be based on the method defined in the **Commissions Setup**.<br>- **Gross Profit**: Commissions are calculated on the difference between Sales Amount and Cost<br>- **Sales**: Commissions are calculated on the sales amount<br>- **Quantity**: The commissions are calculated based on the quantity that is sold. This is primarily important for royalty payments. |
| **Maximum Commission**               | Specifies the maximum commission amount that should be paid to this salesperson within the **Maximum Commission Timeframe**. If the commissions calculated within the time frame is greater than the maximum amount defined, the remaining commission will be marked as ineligible and not paid out. |
| **Maximum Commission Timeframe**     | The time frame for which the **Maximum Commission** amount defines the maximum commission that can be paid out.     |
| **Only include Cost in calculation** | If this is checked, the price of the Item Charge is not included in the commission calculation, but the cost is used to reduce the gross profit for the sales document |

## See Also

- [Setup Item Charges](https://docs.microsoft.com/en-us/dynamics365/business-central/payables-how-assign-item-charges#to-set-up-item-charge-numbers)
- [Commission Rates](commission-rate-setup.md)

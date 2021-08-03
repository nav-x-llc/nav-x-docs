# General Ledger Account Setup

When you setup commissions using the Setup Wizard, you might have selected the option already to make all general ledger accounts commissionable. This will mark all G/L Accounts that existed during the setup process as commissionable. Any new G/L accounts will have to be setup manually to make them commissionable. If any G/L Account is not setup to be **Commissionable**, the system will not calculate commissions for this G/L account, even if commission rates are setup.

## Commissions

|                                  |                                                                                                                            |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **Commissionable**               | Defines whether this G/L Account is commissionable or not. Each individual G/L Account can be configured, if salespeople should receive commissions when this G/L Account is sold or not. |
| **Calculate Commissions on**     | The general setup is done in the [Commission Setup](commission-setup.md) and it can also be changed on an individual salesperson. If you have G/L Accounts where commissions should be calculated differently, you can define the different setups here.<br><br>- **blank**: If you select the blank value, the commission calculation for this G/L Account will be based on the method defined in the **Commissions Setup** or the **Salesperson Card**.<br>- **Gross Profit**: Commissions are calculated on the difference between Sales Amount and Cost<br>- **Sales**: Commissions are calculated on the sales amount<br>- **Quantity**: The commissions are calculated based on the quantity that is sold. This is primarily important for royalty payments. |
| **Maximum Commission**           | Specifies the maximum commission amount that should be paid for this G/L Account within the **Maximum Commission Timeframe**. If the commissions calculated within the time frame is greater than the maximum amount defined, the remaining commission will be marked as ineligible and not paid out. |
| **Maximum Commission Timeframe** | The time frame for which the **Maximum Commission** amount defines the maximum commission that can be paid out.            |
| **Fixed Commission Margin**      | If you want to define a margin to be used for commission calculations when you calculate commissions based on the *Gross Profit* regardless of the actual costs, you can define a fixed margin here. |

## See Also

- [Setting up or changing the Chart of Accounts](https://docs.microsoft.com/en-us/dynamics365/business-central/finance-setup-chart-accounts)
- [Commission Rates](commission-rate-setup.md)

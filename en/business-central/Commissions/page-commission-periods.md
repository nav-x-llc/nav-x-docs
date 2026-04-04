# Page Commission Periods

[!include[signup-tenant](includes/signup-tenant.md)]

**Commission Periods** work similarly to accounting periods in Business Central and allow Commission Managers to define the time periods used in commission calculations. You can access this page by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **commission year**, and then choosing the related link.

|                          |                                                                                                                                                                                                                                          |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Starting Date**        | The date on which this commission period begins.                                                                                                                                                                                         |
| **Name**                 | A descriptive name for the commission period, such as the month or quarter name.                                                                                                                                                         |
| **New Commission Year**  | When checked, this period marks the start of a new commission year. This resets year-to-date accumulated sales totals used in tiered commission calculations.                                                                             |
| **Date Locked**          | When checked, the **Starting Date** for this period cannot be changed. Use this to prevent accidental modifications after commissions have been calculated for the period.                                                                |

## Actions

### Create Year

The **Create Year** action opens the **NAVX Create Commission Year** report, which generates a full year of commission periods at once. This is the recommended way to set up periods for a new commission year rather than creating them one by one.

## Usage

Commission periods are used primarily with tiered or hockey-stick commission structures. When the **Tiered Commission Period** on a salesperson or commission type is configured, the system uses the commission periods defined here to determine the accumulated sales totals for tier calculations. Marking a period as a **New Commission Year** causes the accumulated totals to reset at the start of that period.

## See Also

- [Setting up Salespeople](salesperson-setup.md)
- [Setting up Commission Rates](commission-rate-setup.md)

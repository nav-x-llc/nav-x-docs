# Report Process Manager Commissions

[!include[signup-tenant](includes/signup-tenant.md)]

The *Process Manager Commissions* report is a processing report that calculates and creates commission ledger entries for sales managers based on the performance of their teams during a specified period. No printed output is produced. This report requires the **Commissions by Managers** feature to be enabled in Commission Setup.

You can execute this task by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Process Manager Commissions**, and following the related link.

## Process

The report processes all salespeople who are flagged as **Is Manager** (that is, who have records on the Commission Team Manager page). For each manager, the report looks up the teams they manage, sums the commission ledger entries for the team members within the specified period, and applies the manager's commission rates to calculate the manager's commission amount. A commission ledger entry is then created for the manager.

If a manager commission entry already exists for the period, the report calculates the difference and creates an adjusting entry rather than a duplicate.

> [!IMPORTANT]
> The **Document No. for Manager Commissions** setting in Commission Setup must be configured before running this report.

## Options

You have the following options:

|                      |                                                                                                                  |
|----------------------|------------------------------------------------------------------------------------------------------------------|
| **Manager Code**     | Optionally filter to a specific manager by entering a salesperson code. Leave blank to process all managers.     |
| **Salesperson Group** | Optionally filter to managers who belong to a specific salesperson group.                                       |
| **Period Start**     | The start date of the period for which to calculate manager commissions.                                         |
| **Period End**       | The end date of the period for which to calculate manager commissions.                                           |

## See Also

- [How to Process Manager Commissions](how-to-manager-commission.md)
- [Manager Amounts](page-manager-amounts.md)
- [Commission Team Manager](page-commission-team-manager.md)
- [Salesperson Setup](salesperson-setup.md)

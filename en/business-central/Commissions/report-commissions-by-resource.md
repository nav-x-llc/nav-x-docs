# Report Commissions by Resource

[!include[signup-tenant](includes/signup-tenant.md)]

The *Commissions by Resource* report is the resource equivalent of the [Commissions by Salesperson](report-commission.md) report. It shows commission ledger entries for resources (billable time), grouped by resource, and displays month-to-date (MTD) and year-to-date (YTD) commission totals for each resource. Manager commission entries are also shown when applicable. This report requires the **Allow Commission Payments to Resources** feature to be enabled in Commission Setup.

You can execute this report by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Commissions by Resource**, and following the related link.

## Options

You have the following options:

|                              |                                                                                                                                                         |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Show**                     | Select the level of detail to display. **Salesperson** shows a summary per resource, **Document** shows one line per document, and **Detail** shows full line-by-line detail. |
| **Print Zero Commission Lines** | Enable this option to include commission ledger entries that have a zero commission amount.                                                           |
| **Aged as of**               | The date used for aging calculations. Defaults to the current work date.                                                                                |
| **Aged by**                  | Determines how aging is calculated. You can choose **Commission Date**, **Date Payable**, or **Effective Date**.                                         |
| **Period End Date**          | The end date of the reporting period.                                                                                                                   |
| **No. of Periods**           | The number of periods to include in the report.                                                                                                         |
| **Period Length**            | The type of period used for the report. You can choose **Day**, **Week**, **Month**, **Quarter**, **Year**, **Fiscal Year**, or **Accounting Period**.   |

## Resource filter

You can run the report for all resources at once or filter to a specific resource by entering a resource number in the **No.** filter.

## See Also

- [Report Commissions by Salesperson](report-commission.md)
- [How to Process Billable Time](how-to-billable-time.md)
- [Resource Setup](resource-setup.md)
- [Resource Group Setup](resource-group-setup.md)

# Report Calculate Commissions for All Companies

[!include[signup-tenant](includes/signup-tenant.md)]

The *Calculate Commissions for All Companies* reports are processing reports used when the **Include Commissions from all Companies** feature is enabled in Commission Setup. They aggregate commission ledger entries from all enabled companies (as configured on the Commission Companies page) to evaluate commission tiers for salespeople or resources who work across multiple companies. No printed output is produced.

There are two variants of this report:

- **Calculate Commissions for All Companies - Salespeople**: Processes salespeople.
- **Calculate Commissions for All Companies - Resources**: Processes resources.

You can execute either task by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Calculate Commissions for All Companies**, and following the related link for the appropriate variant.

## Process

The reports only process salespeople or resources who are flagged as **Is Master Company** on the salesperson card, indicating they are the master record in the primary company. The commission tier is then evaluated based on their combined performance across all enabled companies.

These reports are typically run from the primary (master) company after commissions have been processed in all child companies.

## Options

You have the following options:

|                    |                                                                          |
|--------------------|--------------------------------------------------------------------------|
| **Period End Date** | The end date of the period for which commissions will be calculated.    |

## See Also

- [How to Process Multi-Company Commissions](how-to-multi-company-commissions.md)
- [Commission Setup](commission-setup.md)
- [Commission Companies](page-commission-companies.md)
- [Salesperson Setup](salesperson-setup.md)

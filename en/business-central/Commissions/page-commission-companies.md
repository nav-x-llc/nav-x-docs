# Page Commission Companies

[!include[signup-tenant](includes/signup-tenant.md)]

The **Commission Companies** page is used to configure multi-company commission consolidation. When the **Include Commissions from all Companies** feature is enabled in [Commission Setup](commission-setup.md), this page lists all companies in the Business Central environment and allows you to enable commission consolidation for each one. You can access this page by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Commission Companies**, and then choosing the related link.

When consolidation is enabled for a company, the commission calculation for salespeople marked as **Is Master Company** will include that company's sales and worked hours when evaluating commission tiers. This allows salespeople who sell across multiple companies to have their commissions calculated based on their total combined performance across all enabled companies.

> [!NOTE]
> This page is read-only. Companies cannot be inserted or deleted here — the list is automatically populated from the companies registered in the Business Central environment.

> [!IMPORTANT]
> Only Commission Managers can modify this page.

|                              |                                                                                                                                                    |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Company**                  | The internal company name as it exists in Business Central.                                                                                        |
| **Company Display Name**     | The user-facing display name of the company.                                                                                                       |
| **Enable Comm. Consolidation** | When checked, this company's sales data and worked hours will be included in cross-company commission calculations for eligible salespeople.      |

## See Also

- [Working with Multi-Company Commissions](how-to-multi-company-commissions.md)
- [Commission Setup](commission-setup.md)
- [Setting up Salespeople](salesperson-setup.md)

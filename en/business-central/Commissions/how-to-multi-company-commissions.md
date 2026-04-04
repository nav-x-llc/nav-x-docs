# Set Up Multi-Company Commission Consolidation

[!include[signup-tenant](includes/signup-tenant.md)]

When your Business Central environment has multiple companies and your salespeople sell across those companies, you can consolidate commission tier calculations across all companies. This allows a salesperson's total sales volume across all companies to count toward commission tier thresholds.

**Example**: A salesperson sells $80,000 in Company A and $30,000 in Company B. Their commission tier requires $100,000 in sales. Without consolidation, they do not reach the tier in either company. With consolidation, their combined $110,000 in sales puts them in the higher tier.

## Prerequisites

- The NAV-X Commission Management app must be installed and configured in all participating companies.
- Salespeople must be set up in all companies.
- You must designate one company as the master company.

## Step 1: Enable the Feature

In the master company:

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Commission Setup**, and choose the related link.
2. Go to the **Features** FastTab.
3. Enable **Include Commissions from all Companies**.

## Step 2: Configure Commission Companies

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Commission Companies**, and choose the related link.
2. The page lists all companies in your Business Central environment.
3. For each company whose data should contribute to commission calculations, check **Enable Comm. Consolidation**.

## Step 3: Mark the Master Salesperson

The salesperson record in the master company must be designated as the master record:

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Salespeople/Purchasers**, and choose the related link.
2. Open the salesperson card for the salesperson in the master company.
3. Check the **Is Master Company** field.

> [!NOTE]
> Only salespeople marked as **Is Master Company** are processed by the cross-company commission reports.

## Step 4: Run Commission Calculations

After processing commissions in each individual company, run the cross-company calculation from the master company:

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Calculate Commissions for All Companies - Salespeople**, and choose the related link.
2. Set the **Period End Date**.
3. Choose **OK**.

> [!IMPORTANT]
> Always process individual company commissions first before running the all-companies report from the master company. The all-companies report reads commission ledger entries from the child companies.

If you are using resource-based commissions, also run **Calculate Commissions for All Companies - Resources** after completing the resource commission calculations in each company.

## See Also

- [Commission Companies](page-commission-companies.md)
- [Process Commissions for All Companies](report-process-commission-all-companies.md)
- [Commission Setup](commission-setup.md)
- [Salesperson Setup](salesperson-setup.md)

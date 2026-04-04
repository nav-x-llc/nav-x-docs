# Release Notes for March 2026 Update - Version 3.0.288

> [!IMPORTANT]
> Version 3.0 requires Microsoft Dynamics 365 Business Central version 27.0 or later. If you are on an earlier version of Business Central, you must update Business Central before upgrading to version 3.0 of NAV-X Commission Management.

## Resolved Issues

### GL Data Incorrect after Recalculating Commission

When running the Recalculate Posted Sales Document Commissions process, G/L entry data was updated incorrectly. The document number, external document number, and description on G/L entries could be changed to incorrect values from other commission entries. Additionally, the **Calculate Commission on** field on commission ledger entries could incorrectly change from Sales to Gross Profit, and if a commission rate had been modified, the system would not calculate the new commission amount correctly. Furthermore, the salesperson on the commission ledger entry could also change incorrectly during recalculation. All of these issues have been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

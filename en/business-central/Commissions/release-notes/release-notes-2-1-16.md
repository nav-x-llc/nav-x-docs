# Release Notes for January 2021 Update - Version 2.1.16

## Resolved Issues

### Error: no insert permissions for Sales Commission Line

When performing various tasks, such as posting a sales order, if a user had commission user permissions, an error was displayed that the user does not have insert permissions to the Sales Commission Line. This has been corrected.

### Incorrect Commissionable Amount on Sales Commission Line

When commissions are payable upon "Document Entry" and the quantity of an order line is increased, two commission ledger entries are created and the commissionable amount on the Sales Commission Line is not updated. This has been corrected.

### Incorrect commission amount calculation during Item Cost Adjustment

When commissions are calculated based on the Gross Profit and the shipped product's cost is adjusted, an additional commission ledger entry is created. The commission amount is incorrect. This has been corrected and a routine is implemented to update existing records.

### Locking issue when releasing or posting a sales return order

When the performance configuration is set to not to calculate commissions during order entry and a sales return order was released or posted, the process took a long time and could have caused locking issues. The same issue happened when "Recalculate Sales Document Commissions" is executed. This has been corrected.

### When posting purchase order, an error message could appear stating that the General Ledger Entry exists already

When a purchase order is posted and the commission setup is defined to automatically post commissions to the G/L, an error was displayed in certain situations that the General Ledger entry exists already. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

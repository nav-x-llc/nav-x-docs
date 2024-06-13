# Release Notes for August 2023 Patch - Version 2.3.98

## Resolved Issus

### Recalculate posted sales invoices creates incorrect commission entries

When a sales invoice is created with an item, resource, and G/L account, salesperson only defined based on dimensions and not from header, but a salesperson defined on the header. The commissions are calculated correctly on the invoice, but once it's posted, it is also calculating commissions for the salesperson on the header. This has been corrected.

### Item Journal posting negative adjustment

When posting a negative adjustment, probably for an item ledger entry that has an association to a commission ledger entry (credit memo return, for instance), a "Division by Zero" error happens. This has been corrected.

### Commissions are wrong for items with different "Qty. per Unit of Measure"

When an item is used on a sales line and the unit of measure used is not the base unit of measure (or doesn't have a "Qty. per Unit of Measure" = 1), the commission values are multiplied by the "Qty. per Unit of Measure" and therefore multiplying the commission wrongly. This has been corrected.

### Foreign Currency Commissions on Posted Documents

When creating a foreign currency sales document and posting it, the posted document has incorrect values as the values are not calculated into local currency. The information is correct on the commission ledger entries and the unposted document commission lines. This has been corrected.

### Setup Wizard

"Create Zeo Amount... Resources" not part of the setup wizard. This has been corrected.

### Recalculate Commissions for Resources

Recalculating commissions for resources that generate a $0 entry (with $0 entry turned on) causes an error that salesperson doesn't exit. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

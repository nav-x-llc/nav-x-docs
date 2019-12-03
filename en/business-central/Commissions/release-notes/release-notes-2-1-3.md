# Release Notes for Version 2.1.3

## New Features

### Define default commission splits

If you pay commissions to multiple salespeople for different customers, you can now define a salesperson for this commission split and define a commission split on the salesperson. Whenever this salesperson is added to a customer or sales document, the defined commission split will be copied to the customer or sales document. Read more on [setting up default commission splits](../how-to-setup-default-commission-splits.md).

### Historic Commissions

When you setup NAV-X Commission Management, you have often already existing sales documents and posted sales documents that should also be updated with commissions. We provided two new processing reports to allow the easy generation of existing documents and existing posted documents. Read more on [Recalculate Sales Document Commissions](../report-recalculate-sales-document-commissions.md) and [Recalculate Posted Sales Document Commissions](../report-recalculate-posted-sales-document-commissions.md).

## Resolved Issues

### Payment posting against partial invoice with deleted lines on unposted document

When a sales document is partially invoiced, the commission ledger entries are created for this invoice. If you then delete the posted lines from the open sales document and attempt to process a cash receipt, the cash receipt failed with the error message "Sales Line XXX does not exist". This has been corrected.

### The field "Commissionable" was placed incorrectly on the "Item Charges" page

The field **Commissionable** was placed at the bottom of the **Item Charges** page instead of being part of the individual records. This has been corrected.

### Report Layouts missing

In the previous version, the report layouts for the different reports included in NAV-X Commission Management were missing. This has been corrected.

### When invoice is closed at the time of payment, commission ledger entries have wrong status

If you post a sales document and it is paid via credit card or cash, the invoice is closed at the time of posting. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

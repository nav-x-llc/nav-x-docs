# Release Notes for April 2024 Patch - Version 2.3.180

## Resolved Issues

### Partial Application of Credit Memos to Posted Invoices

When Credit Memos are applied to a Posted Invoice and the invoice is not closed completely, the commission ledger entries were not updated properly. The status was set to payable for the entire entries, even though only a portion of the invoice has been closed. A credit memo should not be counted as a normal payment. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

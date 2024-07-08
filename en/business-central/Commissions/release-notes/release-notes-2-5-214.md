# Release Notes for July 2024 Patch - Version 2.5.214

## Resolved Issues

### Business Central 25 compatibility

The Commission Management app has been updated to be compatible with Business Central 25, which will be released October 2024.

### Commissionable Amount for Resource incorrect when posting

When a sales document is created, the **Commissionable Amount** for Resources is showing correctly the amount. When the invoice is posted, the **Commissionable Amount** is incorrectly changed to the **Commissionable Quantity**. This has been corrected.

### Date Payable - inconsistent between Close v Payment date

When an invoice is posted with a later date than the payment (which can happen for deposits, for instance) and the **Commission Payable On** is set to *Date Paid*, the **Date Payable** on the Commission Ledger Entries is incorrectly set to the posting date of the invoice and not the earlier payment date. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

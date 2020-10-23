# Release Notes for August 2020 Update - Version 2.2.6

## Issues

### Customer Ledger Entry "0" does not exist

If posted invoices exist without a customer ledger entry, an error was displayed stating that customer ledger entry 0 does not exist. This can, for instance, happen when date compression is used. This has been corrected.

### Pre-Authorization resulted in "Invalid Card Number"

Under certain conditions, a pre-authorization returned "Invalid Card Number" although the card number was valid and the pre-authorization went through properly. A pre-authorization is done when new credit cards are entered and the card is validated, if the setup is configured this way. This has been resolved.

### Batch posting

Under certain circumstances, when credit card invoices are batch posted, the posting and payment failed and no error was shown. This has been corrected.

### NavIndirectValue cannot be converted to NavRecordRef

During payment processing, an error sometimes was displayed stating "NavIndirectValue cannot be converted to NavRecordRef". This has been corrected.

### Tax calculation values wrong when using external tax engine

When using an external tax calculation engine, the tax was calculated properly and the total amount was properly authorized, but then, the order was updated incorrectly and the tax was removed. All known issues have been corrected.

### "Please register your copy..." in the Job Queue

When the "Periodic Activities" are executed on the Job Queue, sometimes, the error was shown stating "Please register your copy of NAV-X Credit Card". This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-credit-card)

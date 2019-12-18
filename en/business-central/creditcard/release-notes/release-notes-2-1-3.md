# Release Notes for December 2019 Update - Version 2.1.3

## Resolved issues

### Batch Processing

Under certain conditions, batch processing transactions (posting multiple invoices) could fail with an authorization left open, but the invoice completely posted. We have changed the batch processing behavior to catch more errors beforehand to ensure that the invoices don't get posted without credit cards being charged.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-credit-card)

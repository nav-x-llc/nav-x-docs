# Release Notes for September 2025 Update - Version 2.6.276

## Resolved Issues

### Salesperson Commission Payable Upon Override

When a salesperson card had a different value for **Commission Payable Upon** than the global Commission Setup, the system's internal function for determining whether commissions should be calculated was not using the correct salesperson-level setting. This resulted in commissions being calculated at the wrong time for salespeople with overridden payment timing. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

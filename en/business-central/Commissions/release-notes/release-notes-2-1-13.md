# Release Notes for July 2020 Update - Version 2.1.13

> [!NOTE]
> This version is only available for Microsoft Dynamics 365 Business Central 16.3 or later on Business Central SaaS. For Business Central on premise customers, this version can be installed for earlier versions of Business Central as well.

## New Features

### Performance Improvements

We have added additional functionality to change when commissions are calculated to improve performance at the time of order entry. We have now new settings available to define when the commissions are calculated. Read more on [Commission Setup](../commission-setup.md#performance).

## Resolved Issues

### Division by Zero

In different scenarios it was possible to receive a "division by zero" error. This was, for instance, occurring when a line with a 100% line discount was entered. All known instances have been resolved.

### Individual Salesperson Commission with Salesperson Groups

If you utilize **Salesperson Groups** to define commission rates and have salesperson specific commission rates defined as overrides, the salesperson specific commissions were not taken into account. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

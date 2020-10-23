# Release Notes for October 2020 Update - Version 2.2.10

> [!NOTE]
> This version is only available for Microsoft Dynamics 365 Business Central 2020 Wave 2 or later for Business Central SaaS. For Business Central on premise customers, this version can be installed for earlier versions of Business Central as well.

## Issues

### Partial invoice, no second charge to card

Under certain conditions it could happen that an order that is partially invoiced and paid by credit card, will not charge the card for the next invoice. This has been corrected.

### Entering amount for partial payment

When the setup was set to allow partial payments, but not use the shipment amount, the system did not ask for the amount to be charged against the order, but captured the full amount. This has been corrected.

### Invoice Payments do not reflect on portal

Depending on how payments were applied to invoices in the system, invoices uploaded to the EBizCharge Connect Portal were not updated properly and showed open although they were fully paid. This has been corrected.

### FIlter warning when creating a new Credit Card

When creating a new credit card or bank account from the Authorization page, a filter warning was displayed on the card at the time of record creation. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-credit-card)

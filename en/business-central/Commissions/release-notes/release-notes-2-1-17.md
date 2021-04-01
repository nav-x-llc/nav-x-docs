# Release Notes for January 2021 Update - Version 2.1.17

## New Features

### Tiered Commissions for order

When tiered commissions are entered without a tiered commission period, the commission tier is calculated based on the order amount, not only on the order line. This would combine the sales of multiple lines on the order of the same item, if the commission rate is set per item. If the commission rate is set with no entity, the entire order amount is considered.

## Resolved Issues

### Commission Payable on Order Entry

Adjusted calculation of order entry commission. When an order was open, but commissions were paid already, the commissions were marked as payable again when the order was updated.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

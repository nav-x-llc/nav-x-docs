# How to cancel Back Orders

## Order Processing

When an order is created, the field **Auto Cancel Backorder** found on the *Shipping and Billing* fast tab is filled out based on defaults on the **Sell-to Customer** or **Ship-to Code**. This field can also be set manually by the user when entering the order. The field must be checked before the Sales Order is posted to have the order cancelled.

## Posting an order

When the order is posted and not the full order quantity is shipped and invoiced, the remaining order is cancelled once the shipped quantity is invoiced. This can be done by separately shipping inventory and then later posting the invoice for the shipped quantities. It can also be done by shipping and invoicing together.

If the field **Archive Order before cancelling** in the *Sales & Receivables Setup* is enabled, the order is archived with the original quantity before it is cancelled. This allows for users to be able to review the original order as well as to restore it and ship the remaining quantities.

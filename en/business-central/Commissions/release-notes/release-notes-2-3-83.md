# Release Notes for June 2023 Update - Version 2.3.83

## New Features

### Quarterly Commission type with catch up

It is now possible to define *Quarterly* and *Half-Year* minimum amount type timeframes. Additionally, a new setup defines that commissions can be paid out, even if the salesperson did not reach the minimum in a specific period, as long as the salesperson reached the combined target from the current and the last period. This is called "catch up commissions".

### Adjust position of "Commissions" action

The **Commissions** action is moved to a common place in all master records.

### Customer Posting Groups to allow definition of "Resource G/L posting accounts"

It is now possible to define different General Ledger Accounts for commissions paid to *Resources*.

## Resolved Issus

### Ship-to Commission Issue

Commission Rates setup by Customer, Ship-to Code, Salesperson, Dim 1, & Dim 2. The Salesperson from the Customer is unable to be changed on the order as any change to the Commission Split reverts back to the original Salesperson from the Customer Card. This has been corrected.

### Credit Memo Commission Recalculate issues

Recalculate of Commissions on the Posted Sales Credit memos is not functioning correctly for either recalculate method. Process, Recalculate Commissions from the Posted SCM page calculates incorrectly. Running Recalculate Posted Sales Document Commission report with the Sales Credit Memo option active, does not create or update Commissions in the Commission Ledger Entries when the report is run. This has been corrected.

### Commission dimensions posting from lines to GL Entries

When posting from a Sales Order/Invoice, the GL Entries for calculated Commissions are posted with the Dimensions & Dimension Set ID from the Header of the Order. Line Dimensions used to identify the Commission Rate used in the calculation of the Commission Amount are not recorded in the commission GL entries. This has been corrected.

### Posted Credit Memo - recalculate

Recalculating Commissions on posted credit memos does not update the commission splits properly. This has been corrected.

### Post and Send error

When selecting the action *Post and Send* on Sales Documents, an error is displayed: "You must enable commissions before you can use this function". This has been corrected.

### Service Items

Service Items do not have cost on commission ledger entries. When invoicing service items, the cost is only in "non-inventoriable" cost and therefore might not go into the cost field on the commission ledger entries. This has been corrected.

### Commission payable at Cash Receipt

When processing a cash receipt for an invoice with no amount, the commission ledger entries are not marked as payable. This has been corrected.

### Posted Credit Memo

The **Salesperson Name** field is editable on the commission lines. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

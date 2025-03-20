# Release Notes for March 2025 Update - Version 2.6.269

## New Features

### Salesperson Group

The length of the field **Salesperson Group** has been extended from 10 characters to 20.

### Commission Factors

It is now possible to set up **Commission Factors** and define those on Sales Documents. The Commission Factors can change the gross profit by adding or subtracting an additional cost amount or cost percentage. They can be used to make a sales line non commissionable. And Commission Factors can also be used to change the commission rate by adding or removing commission percentages.

### Commission Factors on Payment Methods

You can also define **Commission Factors** on *Payment Methods* to adjust the commissions depending on how the payment is made. The payment method can also be defined on the payment, not only on the Sales Document. This can be used to adjust commissions based when a credit card is used.

## Resolved Issues

### Unlicensed Users - Commission Splits

When purchasing the app through AppSource directly as a transactable app, it was not possible to adjust commission splits on sales documents for users that do not have a license assigned to them. This has been corrected.

### Unit Cost adjustment

When a sales order is posted with a unit cost that is adjusted through the adjust cost routine, the *Commission Ledger Entry* has the correct unit cost, but the posted document still shows the old cost. This has been corrected.

### Commission Posting Date Issue

When the *Recalculate Posted Sales Document Commissions* process is ran for invoices in a closed/inactive period, an error message was shown stating that the posting date is not within your range of allowed posting dates. This has been corrected.

### Adding manual Commission Lines to Sales Documents

When manually commission lines were added to Sales Documents without adding a Commission Split, the **Document Type** and **Doc. Line Type No.** was not filled out. The **Commission Amount** was also not set correctly. This has been corrected.

### Applied payments are not changing Commission Status

When an invoice is the applying entry and a payment is applied to the invoice via the *Apply Entries* page, the **Commission Status** was not updated. This has been corrected.

### Permission Issues

During the **Commission Setup** a user can select the *Update Sales Documents* action, which will update posted documents. An error message was displayed that the user doesn't have modify permissions. This has been corrected.

### Incorrect Commission Ledger Entries created when sales line split used

When sales line commission split is defined for multiple commission types, system creates multiple commission ledger entries with incorrect split definitions and amounts. This has been corrected.

### Commission Ledger Entry amount - Recalculate

When the **Commission Amount** on a *Commission Ledger Entry* is 0 and the recalculation of the commission lines is run for posted lines, the amount is not updated. This has been corrected.

### Purchase Line Description Not Populated

When running Process Commissions (Salesperson) to create Purchase Invoices for Commissions, the Description/Comment field is not populated when running the report with the Group Invoice Lines by option set to Salesperson or Document. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

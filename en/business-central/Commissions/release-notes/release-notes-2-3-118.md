# Release Notes for October 2023 Update - Version 2.3.118

## New Features

### Commission Quantity

A new field has been added to the *Commission Ledger Entries* to show the **Commissionable Quantity** for a specific sales line.

### Data Administration

Functionality has been added to the *Data Administration* section to allow the data cleanup for *Commission Ledger Entries*, *Commission Lines*, *Posted Commission Lines*, *Commission Splits*, *Posted Commission Splits*, and *Expired Commission Rates*.

### Summary Version of Process Commissions report

It is now possible to print the results of the *Process Commissions* report in a summary version, showing only one line per salesperson.

### Salesperson Group on Commission Rates

The **Salesperson Group** field now is visible on the *Commission Rates*.

### Reason Codes on Commission Ledger Entries

The *Reason Code* field from *Credit Memos* now is copied from any credit memos to the created *Commission Ledger Entries*.

### Combined Commission Targets for multiple componies

If a salesperson sells in multiple companies, it is now possible to allow the setup of a combined sales target for different commission rates.

## Resolved Issus

### Recalculate Commissions: Quantity in new Commission Ledger Entries

Running Recalculate Document Commission (Sales & Posted Sales) reports do not populate the Quantity field in the Commission Ledger Entries when the report is run. This has been corrected.

### Wrong Caption on General Journal Lines

In the Gen. Journal, when selecting the Line Action, the Caption for the Commissions functions shows as Commission Rates. Selecting Commission Rates opens the Journal Line Commissions page. This has been corrected.

### Wrong Commission Split for manual changes

On a Sales Order for a Customer with No Salesperson assigned in the header, Commission Split calculations change to 100% when adding the Commission Split Lines manually. This has been corrected.

### Table is not supported error

On a Sales Order for a Customer with No Salesperson assigned, users get error message when trying to add the Commission Lines manually. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

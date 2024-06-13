# Release Notes for April 2024 Update - Version 2.4.189

## New Features

### Entered/Changed by

The existing fields defining when a rate was most recently entered or modified and by whom are now split to allow the separate view of when the rates were first created and then, when the last change was done.

### Commission Rates by Shortcut Dimensions

In addition to defining different commission rates by global dimensions, it is now possible to also define different commission rates for all remaining shortcut dimensions. It is now possible to use 8 different dimension codes to define different commission rates.

## Resolved Issus

### Starting Date on Commission Ledger Entries

The **Starting Date** field on the *Commission Ledger Entry* table is not populated for records when the **Recipient Type** is *Resource*. This has been corrected.

### Edit Commission Ledger Entries and Splits

When a user is setup with the ability to edit *Commission Ledger Entries* and *Commission Splits*, but only has *NAVX COMMISSION USER* permissions, the system does not allow editing the entries and splits. This has been corrected.

### Calculate Commissions for All Companies

When the process to calculate commissions for all companies is run, an error might be displayed stating that a customer doesn't exist. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

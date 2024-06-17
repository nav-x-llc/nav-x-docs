# Release Notes for June 2024 Update - Version 2.5.210

## New Features

### Shortcut Dimensions

It is possible to define **Commission Rates** not only by global, but also by shortcut dimensions. The page **Commission Rates** now shows all global and shortcut dimensions for all shortcut dimensions that are defined in the *General Ledger Setup*.

### Exclude Documents and Lines

It is now possible to select on the page whether a specific document line is **Commissionable**. It is also possible to define on the document header level whether the entire document is **Commissionable** or not.

## Resolved Issues

### Permission Error: recalculate posted sales document commission

When running the Recalculate Posted Sales Document Commissions report, an error message “Sorry, the current permissions prevented the action. (TableData 70020074 NAVX Posted Sales Comm. Line Posted Sales Commission Line Insert: Commission Management)” is received. This has been corrected.

### Resource Entry: The default implementation of the interface cannot be used

When a salesperson and resource are setup with the same code, the error "The default implementation of the interface cannot be used" is displayed when commissions are calculated. This has been corrected.

### Posted Commission Split

The **Split** field was not visible, unless the *Commission Rates* are hidden. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

# Release Notes for March 2021 Update - Version 2.1.20

## New Features

### Commission Journal Template

We added the ability to access all batches from the template. This will allow creating new batches, but also open batches from the template.

### Creating Journals at Setup

When the app is installed, we are now creating the default journals that are typically required.

### Allow reducing gross-profit based commissions based on charges on the order

You can now add **Charge (Item)** lines to the order to reduce the gross profit of other lines based on the unit cost of the charge. Read more at [Charge (Item) Setup](../item-charge-setup.md).

### Commissions by Salesperson Report

We added the reason code as a column to the report and adjusted the width of some columns.

## Resolved Issues

### Zero Commission Lines not shown on Commissions by Salesperson Report

Even though the flag was selected to include Zero Commission lines, the zero commission lines were not displayed. This has been corrected.

### Charts enabled without license

When installing the app first, the commission chart was added and, if selected, causes licensing issues and removed the standard charts. The commission chart is now only enabled when the app is licensed and permissions are set properly.

### Updated translations

We have updated the automatically generated translation files to correct some typos in the English version. We also have updated the translations into other languages.

### Commission Rates for blank salespeople is not used

Under certain circumstances, commission rates are not used when the salesperson code is blank. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

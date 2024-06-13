# Release Notes for July 2023 Update - Version 2.3.91

## New Features

### Salesperson Commission Report for Resources

A new report has been created to provide an overview of commissions paid to individual resources.

### Manager Commissions - different rates per team

It is now possible for one sales manager to manage multiple sales teams and have different commission structures defined for each team.

## Resolved Issus

### Resource Commissions and Salesperson Commissions: Only calculates resource commissions

When a resource on a sales line is configured to calculate commissions and the sales header has a salesperson split defined, the commissions are only calculated for the resource and not for the salesperson. It should calculate for both, if "Do not use Commission Splits defined on the header" is not checked. This has been corrected.

### Process Commissions - Cust. Post Group error

When running Process Commission report, client receives error message “The Customer Posting Group does not exist. Identification fields and values: Code = ‘’ “. The error triggers even when filters are set to run the report for an individual salesperson. This has been corrected.

### Commission not calculated when Starting Date is populated in Comm. Rate entry

When a Commission Rate entry has a Start Date populated, the Rate is not found to be applied to the Document Commission Entry. This has been corrected.

### Sales Order Salesperson unable to be changed from Customer default in Commission Split

Commission Rates setup by Customer, Ship-to Code, Salesperson, Dim 1, & Dim 2. The Salesperson from the Customer is unable to be changed on the order as any change to the Commission Split reverts back to the original Salesperson from the Customer Card. This has been corrected.

### Cust. Posting Group Error : Process Commission report

When running Process Commission report, client receives error message “The Customer Posting Group does not exist. Identification fields and values: Code = ‘’ “. The error triggers even when filters are set to run the report for an individual salesperson. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

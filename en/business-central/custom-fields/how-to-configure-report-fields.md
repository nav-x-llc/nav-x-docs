# How to Configure Custom Fields on Reports

Several standard Business Central reports have been extended to optionally display custom fields. You control which fields appear on each report through the **Report Visibility** configuration in the Custom Fields app.

## Supported Reports

The following reports can display custom fields:

| Report                          | Tables Supported                     |
| ------------------------------- | ------------------------------------ |
| Sales Order Status              | Item, Sales Line                     |
| Standard Sales - Order Conf.    | Sales Header, Sales Line             |
| Standard Sales - Invoice        | Sales Header, Sales Line             |
| Standard Sales - Credit Memo    | Sales Header, Sales Line             |
| Purchase Order                  | Purchase Header                      |
| Purchase - Invoice              | Purchase Header                      |
| Purchase - Credit Memo          | Purchase Header                      |
| General Journal - Test          | Gen. Journal Line                    |

Each report can show any combination of field types (Code, Boolean, Decimal, Integer, Date, Time, DateTime, Text) and field numbers that have been defined and activated for that report.

## Before You Start

- The custom fields you want to show on the report must already be defined on the [Custom Fields Definitions](page-customfield-definitions.md) page.
- You must have the **NAVX CFLD SETUP** permission set or *SUPER* to change report visibility.

## Steps

### Option 1: From the Custom Fields Definitions Page

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Custom Fields Definitions**, and choose the related link.
2. Select the field you want to show on a report.
3. Choose the **Report Visibility** action in the ribbon.
4. The [Custom Fields Report Visibility](page-customfield-report-visibility.md) page opens, filtered to the selected field.
5. Enable the toggle next to each report where you want the field to appear.
6. Close the page. The field will now print on the selected reports.

### Option 2: From the Report Visibility (All Fields) Action

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Custom Fields Definitions**, and choose the related link.
2. Choose the **Report Visibility (All Fields)** action in the ribbon.
3. The [Custom Fields Report Visibility](page-customfield-report-visibility.md) page opens showing all fields across all tables.
4. Enable the toggle next to each report/field combination you want to activate.
5. Close the page.

## Tips

- Only fields whose **Table** matches a table used in the report can be activated for that report. For example, only fields defined on the *Sales Header* or *Sales Line* table can appear on the Standard Sales - Invoice report.
- If a field is not visible on the report after enabling it, verify that the field has a value on the document and that the field's **Editable** setting is correct.
- Report field visibility is separate from page visibility. Enabling a field on a report does not automatically add it to the document page, and vice versa.

## See Also

- [Custom Fields Report Visibility Page](page-customfield-report-visibility.md)
- [Custom Fields Definitions Page](page-customfield-definitions.md)
- [Sales Order Status Report](report-sales-order-status.md)
- [Standard Sales - Invoice Report](report-standard-sales-invoice.md)
- [Purchase Order Report](report-purchase-order.md)
- [General Journal - Test Report](report-general-journal-test.md)

# Report Process Commission

This report is the cornerstone of the month end commission process. You can execute this task by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Process Commission**, and following the related link. Learn on how this report integrates in the [Month End Process](how-to-month-end-process.md).

## Options

You have the following options:

|                                     |                                                                                                                     |
|-------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| **Create Purchase Invoices**        | Any external salespeople that will be paid through an A/P check run need to have a **Vendor No.** defined on the salesperson card. If you turn on this option, purchase invoices will be created for your salespeople. |
| **Group Invoice Lines by**          | You can define the level of detail that you want to show on the purchase invoice. You can create invoice lines by **Customer Posting Group**, **Document**, or **Detail**, which then will add an invoice line for each **Commission Ledger Entry**. |
| **Create Employee Payment Journal** | Any internal salespeople that will be paid through an employee payment journal need to be setup as an **Employee** by defining the **Salesperson Code** on the **Employee Card**. A payment journal for each employee then will be created. |
| **Employee Journal Template**       | Select the journal template you want the payment lines created in.                                                  |
| **Employee Journal Batch**          | Select the journal batch you want the payment lines created in.                                                     |
| **Journal Document No.**            | Define the document number that will be used for the payment lines. This can be the month and year, for instance.   |
| **Process Manual Commissions**      | If you do not have integrated payroll for your internal salespeople, you need to mark commission ledger entries as processed. This will be done by selecting the flag **Process Manual Commissions**. |
| **Last Payable Date**               | Define the month end as the **Last Payable Date**. This will filter the **Commission Ledger Entries** to only include those that were not processed and are prior to the **Last Payable Date**. |
| **Posting Date**                    | Define the **Posting Date** that will be used for purchase invoices or employee journal lines as the posting date.  |
| **Print Zero Commission Lines**     | If you want to show any non-commissionable lines on the report, select the flag **Print Zero Commission Lines**.    |

## Salesperson/Purchaser filter

You can run the report for all salespeople at once or you can also run the report one salesperson at a time by entering a salesperson code in the **Code** filter. This is especially useful, if you want to generate a report that you can send to your salespeople manually.

## See Also

- [Salesperson Setup](salesperson-setup.md)
- [Month End Process](how-to-month-end-process.md)

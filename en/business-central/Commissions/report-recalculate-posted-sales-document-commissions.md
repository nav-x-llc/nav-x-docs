# Report Recalculate Posted Sales Document Commissions

This report can assist you in adding commissions to your posted sales documents. It can also be used to recalculate commissions for your posted sales invoices and credit memos when you made a change to your commissions and want to mass update your history. You must have your commission splits and salesperson commission rates defined before executing this report.

 You can execute this task by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Recalculate Posted Sales Document Commissions**, and following the related link.

## Options

You have the following options:

|                             |                                                                                                                             |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| **Update Commission Split** | The commission split on your sales documents will be updated with the now current defined commission splits on the customers for the sales documents |
| **Calculate Commissions**   | Commissions will be recalculated based on the now current commission rates for the salespeople defined on the sales documents. If **Commission Ledger Entries** were already posted, updates to those entries will be created |
| **Posting Date**            | If existing **Commission Ledger Entries** exist, the system will post the adjustments to the existing entries with the posting date defined. You must select a posting date that you can post to. |
| **Journal Template**        | Select the **Commission Journal Template** that will be used to create the journal entries.                                 |
| **Journal Batch**           | Select the **Commission Journal Batch** that will be used to create the journal entries. It is suggested to create a separate batch for this task and to define a **Reason Code** in this batch. |

## Sales Invoice Header filter

You can run the report for all posted sales invoices or you can filter on specific **Nos.** or **Sell-to Customer No.**.

## Sales Credit Memo Header filter

You can run the report for all posted sales credit memos or you can filter on specific **Nos.** or **Sell-to Customer No.**.

## Process

After clicking on **OK**, the report will execute. The report will update the **Commission Split** and the **Sales Commission Lines** for all documents included in the filter, if you defined in the options to do so. A **Commission Journal** will be filled with adjustments to those entries to reflect the new commission rates. You then can review and post the **Commission Journal** to generate correcting **Commission Ledger Entries**.

## See Also

- [Commission Journal](page-commission-journal.md)

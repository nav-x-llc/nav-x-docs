# Report Recalculate Commission Processing

This report can assist you in recalculating commissions for posted transactions based on conditions defined on the **Commission Rate Specifications**. It can be run manually before commissions are processed or it can be setup on the job scheduler to have it automatically run. You must have your commission splits and salesperson commission rates defined before executing this report.

 You can execute this task by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Recalculate Commission Processing**, and following the related link.

## Options

You have the following options:

|                             |                                                                                                                             |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| **Processing Period**       | You can select between **Last** and **Current** Period. If you run this report after the period is over, you will need to select *Last* Period to calculate the commissions properly. |
| **Posting Date**            | This will define the posting date that is used, if the posting is not allowed anymore in the original period for any adjustments to commission rates. |

## Process

After clicking on **OK**, the report will execute. The report will review all posted transactions in the selected period and will recalculate the commission rates based on the tiered commission setups. If adjustments are to be made, additional **Commission Ledger Entries** are created and the document commissions are updated with the values.

# Page Commission Journal

Commissions are posted to the commission ledger at the time when sales or service documents are posted in Business Central. But you can also adjust commissions that have been posted to the commission ledger entries already. Additionally, you can also record manual commissions through the **Commission Journal**, for instance, if you want to bring in history or had missing commission rates.

The information that you enter in a journal is temporary and can be changed while it is in the journal. When you post the journal, the information is transferred to **Commission Ledger Entries**, where it cannot be changed. You can, however, post additional journal entries to further adjust the posted commissions.

[!NOTE]
The commission journal shows only a limited number of fields on the journal line by default. If you want to see additional fields, you can choose to customize the page.

## Using Journal Templates and Batches

There are several commission journal templates. Each journal template can be used to default different reasons for adjustments as well as different source codes.

For each journal template, you can set up your own personal journal as a journal batch. For example, you can define your own journal batch for the commission journal that has your personal layout and settings.

## Field Descriptions

Hover over the individual fields to see a short description.

|                                |                                                                                                                         |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **Posting Date**               | The **Posting Date** defines the date that the commission adjustment or commission entry will be payable. When the commission process at the end of that period is executed, the commission adjustment will be included. If the commission adjustment is in the path, it will be processed at the end of the current period. You cannot post into dates that are not allowed in the Accounting or User Setup. |
| **Salesperson Code**           | By defining the **Salesperson Code**, the commission entered in the journal line is associated with this salesperson and will become part of that salesperson's commission payments. |
| **Salesperson Name**           | The name of the salesperson selected in the **Salesperson Code** is displayed. This field is not editable.              |
| **Document Type**              | Commissions can be associated with specific documents. The **Document Type** defines the type of the document. It can be a posted document or an unposted document, such as a sales order |
| **Document No.**               | The number of the document that the commission entry will be associated with                                            |
| **Description**                | The description is a free text field that can be used to define a reason for the adjustment or other notes              |
| **Commission Rate**            | The commission rate defines the actual percentage that will be used to calculate the commission. Based on the setups,  the **Line Amount** and **Line Cost** are used to define the **Commissionable Amount**. The rate is then applied to the **Commissionable Amount** to calculate the actual **Commission Amount**. |
| **Commission Rate Type**       | The commission rate can be defined as a fixed amount or a percentage                                                    |
| **Base %**                     | The **Base %** is used to define, if the salesperson receives the full commission that is entered in this journal line or only a percentage of it. |
| **Line Amount**                | The sales amount for the document that is defined. It is used in combination with other fields to determine the **Commissionable Amount**. |
| **Line Cost**                  | The sales cost for the document that is defined. It is used in combination with other fields to determine the **Commissionable Amount**. |
| **Commissionable Amount**      | This defines the amount the **Commission Rate** is applied to to calculate the actual commission.                       |
| **Commission Amount**          |
| **Reason Code**                | You can setup reason codes to define the reason for an adjustment and apply different reasons to different journal lines. It is only used in reporting and the history to determine why a specific adjustment was made. |
| **Apply to Comm. Ledg. Entry** | When selecting a commission ledger entry, most of the other fields are filled out automatically. By applying a journal line to a commission ledger entry, you can adjust the commission for this journal entry. |

## See Also

- [Commission Ledger Entries](page-commission-ledger-entries.md)
- [Specifying Posting Periods](https://docs.microsoft.com/en-us/dynamics365/business-central/finance-how-specify-posting-periods)

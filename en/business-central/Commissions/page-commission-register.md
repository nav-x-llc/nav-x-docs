# Page Commission Registers

Whenever a commission is posted, a **Commission Ledger Entry** is created. For each transaction, a new record is created in the **Commission Register** to record details about that posting. If you are posting manual adjustments to commissions through the **Commission Journal**, a new record is also created in the **Commission Register**. The fields are described below.

|                        |                                                                                                      |
|------------------------|------------------------------------------------------------------------------------------------------|
| **No.**                | A sequential number defining the unique identifier of this commission register.                      |
| **Creation Date**      | The date the transaction was posted and the register was created.                                    |
| **User Id**            | The Id of the user who posted the commission.                                                        |
| **Source Code**        | The source of the commission posting. It typically contains the source code for Commission Postings. |
| **Journal Batch Name** | If the transaction was posted through the **Commission Journal**, the batch name is displayed here   |
| **From Entry No.**     | The starting entry number of the **Commission Ledger Entries** included in this register             |
| **To Entry No.**       | The last entry number of the **Commission Ledger Entries** included in this register                 |

## Actions

You can use the action **Commission Ledger** to display a list of all **Commission Ledger Entries** part of the selected **Commission Register**.

## See Also

- [Commission Ledger Entries](page-commission-ledger-entries.md)
- [How to manually adjust commissions](how-to-manually-adjust-commissions.md)

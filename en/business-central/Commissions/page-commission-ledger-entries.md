# Page Commission Ledger Entries

The **Commission Ledger Entries** page contains all commission transactions for each salesperson and is used as the main resource to calculate commission payments due to a salesperson. New **Commission Ledger Entries** cannot directly be created, the entries are automatically created when posting sales transactions or when posting a **Commission Journal**.

The page can also be access directly when you choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Commission Ledger Entries**, and then choose the related link. This will then show all available entries in the company. It can be used, for instance, to easily export the data to Microsoft Excel and create custom reports.

|                                       |                                                                                                                  |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------|
| **Document Type**                     | The type of the transaction that is responsible for this commission entry.                                       |
| **Document No.**                      | The document number of the transaction that is responsible for this commission entry.                            |
| **Sell-to Customer No.**              | The Sell-to Customer of the transaction. The customer number is used to determine the proper rate.               |
| **Ship-to Code**                      | The address the shipment went to. It is used to determine the proper rate.                                       |
| **Ship-to Name**                      | Displays the name defined on the ship to address.                                                                |
| **Bill-to Customer No.**              | The customer the invoice or credit memo was sent to.                                                             |
| **Salesperson Code**                  | The salesperson this commission is for.                                                                          |
| **Salesperson Name**                  | Displays the salesperson's name.                                                                                 |
| **Minimum Amount Type**               | The **Minimum Amount Type** from the original commission rate that was the basis for this entry.                 |
| **Commission Rate Type**              | The **Commission Rate Type** from the original commission rate that was the basis for this entry.                |
| **Commission Rate**                   | The **Commission Rate** from the original commission rate that was the basis for this entry.                     |
| **Document Line Type**                | The **Type** from the original document line. It is used to determine the proper rate.                           |
| **Document Line Type No.**            | The **No.** from the original document line. It is used to determine the proper rate.                            |
| **Manager Commission**                | Specifies whether the entry originated from the manager's commission calculation.                                |
| **Entity Type**                       | The **Entity Type** from the original commission rate that was the basis for this entry.                         |
| **No.**                               | The **No.** from the original commission rate that was the basis for this entry.                                 |
| **Effective Date**                    | The date that was calculated as the **Commission Effective Date**.                                               |
| **Sales Amount**                      | The total **Sales Amount** for the document line that was the basis for this entry.                              |
| **Cost Amount**                       | The total **Cost Amount** for the document line that was the basis for this entry.                               |
| **Gross Profit %**                    | The **Gross Profit %** calculated from the **Sales Amount** and the **Cost Amount**.                             |
| **Commission Amt. (Actual) ($)**      | The actual commission amount that is or will be paid to the salesperson.                                         |
| **Commission Amt. Posted to G/L ($)** | Defines the amount that was posted to the general ledger.                                                        |
| **Commission Status**                 | Defines, if the commission is already payable or has been paid. It can also define that the commission entry is ineligible and, for instance, was only created to track total sales amounts. |
| **On Hold**                           | Specifies whether the current entry is placed on hold. It can be placed on hold manually by a user or automatically through the system. For instance, if the invoice is overdue and should not be paid, it will be set to on hold automatically. |
| **Placed On Hold By**                 | The user that set the entry **On Hold**                                                                          |
| **Placed On Hold On**                 | The Date and Time the entry was set **On Hold**                                                                  |
| **Date Payable**                      | If the **Commission Status** is set to **Payable** or a later status, the **Date Payable** contains the date that the status was changed. |
| **Commission Processed**              | Defines whether the current commission entry is already paid out.                                                |
| **Document Status**                   | Specifies whether the original transaction is (partially) shipped or invoiced, or (partially) paid.              |
| **Maximum Commission Limit**          | Specifies whether the entry was adjusted by the **Maximum Commission Limit**.                                    |
| **Days Overdue**                      | Specifies the number of **Days Overdue**.                                                                        |
| **Entry No.**                         | Specifies the entry number. It is a sequential number to ensure that no entries were deteled.                    |

## See Also

- [Adjusting Commissions](how-to-manually-adjust-commissions.md)
- [Commission Journal](page-commission-journal.md)

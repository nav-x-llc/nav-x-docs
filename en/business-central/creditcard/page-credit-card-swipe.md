# Page Swipe Credit Card

The page **Charge Credit Cards** can be opened from a document to process a transaction by having the customer swipe a credit card at a physical terminal. Those transactions are also called *Card Present* transactions.

> [!NOTE]
> You must have a **Terminal Id** defined on the **User Setup** for each user who might be processing card present transactions. The terminal defined will be the one that is used by the system to process the credit card.

When the page opens, the information is automatically sent to the terminal so that the customer can swipe their credit card. If the transaction cannot be completed, an error message will be shown in the field **Error**. You can try to process it again by selecting the action *Start Transaction*. If the terminal is not active when the page is opened, the **Error** will be shown immediately. You can turn on the terminal and the status will update automatically. Then you can use the action *Start Transaction* to charge the card.

You can also manually process a card, for instance, when the chip or the magnetic strip is not readable. This can be done by filling out the information on the page manually and then select the action *Process Card*. The fields to be filled out will be described in the table below.

## Credit Card Information

|                         |                                                                                                                                        |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| **Account Number**      | You can select an existing credit card from the drop down or you can enter new credit card information. If you select an existing account from the drop down, most fields will become non-editable. The only fields editable will then be the **Security Code** (for Credit Card) and the **Amount to Charge**. |
| **First Name**          | Enter the first name of the account holder as shown on the card.                                                                       |
| **Last Name**           | Enter the last name of the account holder as shown on the card.                                                                        |
| **Expiration Date**     | Enter the expiration date for this credit card in the form of MM/YY, MMYY, or MM/YYYY as shown on the card.                            |
| **Security Code**       | If you are required to enter the security code for the credit card, please enter the three or four digit security code here.           |
| **Type**                | This field displays the type of the credit card and cannot be changed.                                                                 |

## Transaction Information

|                         |                                                                                                                                        |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| **Transaction Amount**  | The **Transaction Amount* is the amount to be charged on the document. This amount will be sent to the terminal automatically when the page opens. |
| **Amount to Charge**    | If you want to charge a smaller amount, you can reduce the amount and then either use the *Start Transaction* action or *Process Card* |

## Terminal

|                         |                                                                                                                                        |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| **Id**                  | This field displays the terminal that is used for the transaction processing. This terminal is defined on the **User Setup**.          |
| **Name**                | Displays the name on the terminal as setup when the terminal was registered.                                                           |
| **Error**               | If an error happened during the communication with the terminal, the error is displayed here.                                          |
| **Terminal Status**     | The status of the terminal is displayed here. For instance, it can show, if the terminal is offline or connected.                      |
| **Transaction Status**  | This field displays the status of the current transaction and will show, if the transaction is still in progress or if it is completed. |

## See Also

- [User Setup](additional-setups.md#user-setup)
- [Terminal Setup](terminal-setup.md)

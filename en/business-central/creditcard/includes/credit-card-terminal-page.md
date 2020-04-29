### General

|                         |                                                                                                                                 |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| **Id**                  | The **Id** is automatically assigned and defines the terminal uniquely in the system.                                           |
| **Name**                | Enter a  **Name** to describe where this terminal is located or what the terminal is for.                                       |
| **Default Transaction** | If you use the terminal for credit card purchases and have customers pick up their goods or services at that time, you should set the **Default Transaction** to **Sale**. If you want to just hold a certain amount on the credit card until you then later charge the card, you should choose **Authorization**. |
| **Status**              | The **Status** is a read only field indicating the status of the terminal. You can refresh this status by selecting **Update Status**. |

### Settings

|                                   |                                                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| **Timeout (sec)**                 | Defines the time out that is used when the terminal tries to communicate with the gateway. If the terminal does not receive a response within the specified time, the transaction will be cancelled. The default is 30 seconds.
| **Enable Chip Processing**        | Enables the Chip reader. This can be used to processing of credit cards containing a chip.                            |
| **Enable Pin Entry**              | Enables PIN debit for swiped transactions. This is mainly used for Debit Card transactions.                           |
| **Enable Contactless Processing** | Enables NFC reader. This can be used to allow customers to just tap the credit card on the terminal.                  |

### Information

The **Information fast tab** displays read only information about the terminal.
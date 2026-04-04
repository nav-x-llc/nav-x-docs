# How to Process Commission Draws

[!include[signup-tenant](includes/signup-tenant.md)]

A commission draw — sometimes called a "draw against commissions" — is a minimum guaranteed payment made to a salesperson each period. If the salesperson's earned commissions for the period are less than the draw amount, the system pays the draw amount and records the difference as a debt against future commissions. When earned commissions exceed the draw amount, the salesperson receives only the earned amount; no additional draw payment is made.

## Prerequisites

Before processing commission draws, ensure the following are configured in [Commission Setup](commission-setup.md):

- **Commission Draw Reason Code** must be defined on the **Reason Codes** FastTab. This reason code is used to identify draw entries in the Commission Ledger Entries.
- **Document No. for Commission Draws** must be defined on the **Commission Processing** FastTab. This controls the numbering of payment documents created for draws.
- The salesperson must be enabled for Commission Management on the [Salesperson Card](salesperson-setup.md).

## Step 1: Configure the Salesperson Card

For each salesperson who should receive a commission draw, open their **Salesperson Card** and fill in the draw fields:

|                              |                                                                                                                                                                                                                            |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Commission Draw Amount**   | The minimum guaranteed commission amount per period.                                                                                                                                                                       |
| **Commission Draw Period**   | The frequency of the draw: Day, Week, Month, Quarter, or Year.                                                                                                                                                             |
| **Commission Draw Start**    | Optional. The date from which the draw begins. Leave blank to apply immediately.                                                                                                                                           |
| **Commission Draw End**      | Optional. The date on which the draw expires. Leave blank to apply indefinitely.                                                                                                                                           |
| **Pay Commission Draw**      | When enabled, the system automatically creates a payment document for the draw amount: a Purchase Invoice for vendor-type salespeople, a Sales Credit Memo for customer-type salespeople, or an Employee Journal line for employee-type salespeople. |

## Step 2: Run Commission Draw Processing

The **Commission Draw Processing** report evaluates all eligible salespeople for a given date range and posts draw entries where earned commissions fall short of the draw amount.

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Commission Draw Processing**, and choose the related link.
2. Set the **Start Date** and **End Date** to define the period you want to process.
3. Optionally, use the **Salesperson/Purchaser** filter to process only specific salespeople.
4. Choose **OK** to run the report.

The report performs the following actions for each eligible salesperson:

- Checks the total draw entries already posted for the period by looking for Commission Ledger Entries with the **Commission Draw Reason Code**.
- If the draw has already been fully posted for the period, the salesperson is skipped.
- If the draw has not been fully posted, the report posts the difference as a Commission Journal entry using the Commission Draw Reason Code.
- If **Pay Commission Draw** is enabled on the salesperson, the report also creates the appropriate payment document and marks the draw entry as **Paid**.

> [!NOTE]
> Draw entries are identifiable in [Commission Ledger Entries](page-commission-ledger-entries.md) by the **Commission Draw Reason Code** configured in Commission Setup.

> [!IMPORTANT]
> Run Commission Draw Processing after you have processed regular commissions for the period so that the system can compare the draw amount against the actual earned commissions.

## See Also

- [Salesperson Setup](salesperson-setup.md)
- [Commission Setup](commission-setup.md)
- [Commission Ledger Entries](page-commission-ledger-entries.md)
- [How to perform Month End Processes](how-to-month-end-process.md)

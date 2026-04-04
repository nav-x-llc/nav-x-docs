# Report Update Commission Hold

[!include[signup-tenant](includes/signup-tenant.md)]

The *Update Commission Hold* report is a processing report that batch-updates the hold status on commission ledger entries. It reviews all unprocessed commission ledger entries that are in **Payable** status and have a **Date Payable** on or before the specified end date. No printed output is produced.

You can execute this task by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Commission Hold**, and following the related link.

## Process

For each qualifying commission ledger entry, the report applies the following logic:

- If the entry is **On Hold** and the hold was not set manually (**Manual Hold** = false), the hold is automatically removed.
- If the entry is **not On Hold**, the system evaluates whether the entry should be placed on hold based on the current customer payment status (for example, past due invoices) and adds a hold if appropriate.

This report is typically run as part of the month-end process to ensure commission holds are correctly applied before commissions are processed. It is called programmatically with a payable end date parameter and has no user-configurable request page options.

## See Also

- [Month End Process](how-to-month-end-process.md)
- [Commission Ledger Entries](page-commission-ledger-entries.md)
- [Report Process Commission](report-process-commission.md)

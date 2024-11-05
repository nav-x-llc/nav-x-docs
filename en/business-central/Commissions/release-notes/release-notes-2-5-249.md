# Release Notes for November 2024 Update - Version 2.5.249

## New Features

### Automate Recalculate Commissions

The process *Recalculate Commissions* is a process that was intended to be used for the original data migration and go-live. However, we have seen this process being used in day to day operations to ensure that commissions are created correctly, for instance, when transactions are being imported instead of manually entered. Therefore, we have added the ability to schedule the process as a recurring *Job Queue Entry*.

### Paying Open Commissions

It is now possible to manually mark *Commission Ledger Entries* that are *open* as payable and pay those out before the commission ledger entries are payable. It is also possible to reverse this manual update.

## Resolved Issues

### Manual Commission Amount update

When updating the **Commission Amount** on a document commission manually, the **Commission Amount** is reset to the automatically calculated value at the time of releasing or posting the document. This has been corrected.

### Unlicensed Users

When purchasing the app through AppSource directly as a transactable app, the commission functionality on documents and master records is not visible for unlicensed users. This has been corrected.

### Effective Date empty

Under various circumstances, the **Effective Date** was not filled out correctly or was completely blank. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

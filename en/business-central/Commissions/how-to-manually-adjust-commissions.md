# How to manually adjust commissions

The commission calculations are all done automatically and there is typically no need to adjust those after the fact. However, it can always happen that you forget to add a salesperson to a specific sales order and then have no commission calculated. It can also happen that the setup is wrong and you need to adjust the already calculated commissions. Or, you are just starting using NAV-X Commission Management and want to import the commissions to be paid based on already processed transactions.

## The Commission Journal

The **Commission Journal** is the central place used to adjust any commissions or add additional commissions. You can access the **Commission Journal** when you choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Commission Journal**, and follow the related link. The individual fields are described on the [Commission Journal Page](page-commission-journal.md).

The Journal is organized in different batches. You can create a new batch per user, for each month, or even for each individual transaction. Or you can just use one batch. It is recommended to organize your adjustment postings using different batches so that you can make sure that you create all adjustments necessary and review them before posting. To create a new batch, you click on the lookup for the **Batch Name** and select **New** in the opening page.

## Adjusting existing entries

To adjust **Commission Ledger Entries** that were posted already, you can select the proper entry in the **Apply To Comm. Ledg. Entry** field. When you select an entry, all other fields are filled out based on the values from the selected commission ledger entry. You want to then change the posting date and the additional fields, such as the **Commission Rate** or the **Commission Amount**. We also recommend entering a **Reason Code**, which will be posted to the **Commission Ledger Entries** and it will explain the reason for this adjustment. You can also enter a custom **Description** to define more.

> [!IMPORTANT]
> If you want to reduce the commission amount, enter a negative amount in the **Commission Amount** field. This will reduce the amount by the entered amount. If you want to increase the commission amount, enter a positive amount in the **Commission Amount** field.

## Adding new commissions

If you want to add additional commissions to specific posted transactions, you must fill out the different fields manually. When you define a **Document Type** and **Document No.**, you assign the commission for the specific **Salesperson Code** to this document. We recommend defining a **Reason Code** for any adjustments to define the reason for this adjustment.

## See Also

- [Commission Journal Page](page-commission-journal.md)

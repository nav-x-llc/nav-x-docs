# Extending the Commission Management functionality

## Adding custom fields to the Commission Ledger Entries

It might be necessary to add new fields to the **Commission Ledger Entries** to allow custom fields to be displayed and possibly included in reports. This can be done using the following methodology. To be able to implement this, you will need to generate a dependent app using the following entry in the "dependencies" section of your app's *app.json* file:

```al
        {
            "id": "f003e3aa-fc6b-4d1f-abd3-e1eec0aaabaf",
            "name": "Commission Management",
            "publisher": "NAV-X"
        }
```

### Add new fields

Add the new fields to the following to the following tables:

- NAVX Commission Line (Table 70013704)
- NAVX Posted Sales Comm. Line (Table 70020074)
- NAVX Comm. Journal Line (Table 70020078)
- NAVX Comm. Ledg. Entry (Table 70020093)

> [!NOTE]
> Please ensure that the fields you are adding to the tables have the same field number in each of the tables as well as the same type and length.

If you want to display those fields, please also add those to the following pages:

- NAVX Posted Sales Comm. Lines (Page 70020074)
- NAVX Sales Commission Lines (Page 70020076)
- NAVX Commission Journal (Page 70020085)
- NAVX Commission Ledger Entries (Page 70020071)

### Fill data during commission calculation

To ensure that the data is filled in during the creation of the Commission Lines or during the recalculation of posted documents, events are available for you to subscribe to. The records provided have all the data to retrieve the current record (e.g. the Sales Header or Sales Lines). In the event subscriber, please assign the correct value to the new fields you created.

The following events are available in Codeunit "NAVX Commission Calculation" (Codeunit 70020094):

```al
OnAfterFinishCommissionLine(var NAVXCommissionLine: Record "NAVX Commission Line")
```

```al
OnAfterFinishPostedCommissionLine(var NAVXPostedSalesCommLine: Record "NAVX Posted Sales Comm. Line")
```

### Posting Process

When sales documents are posted, the commission lines are transferred to the posted commission lines. This is done automatically, if the fields have the same numbers in both tables (**NAVX Commission Line** and **NAVX Posted Sales Comm. Line**). Therefore, no actions are required for this part.

The **Commission Ledger Entries** are posted through the **Commission Journal**. This process also transfers the new fields from the **Commission Lines** to the **Commission Journal** and then to the **Commission Ledger Entry** automatically, if the fields have the same numbers in all tables. Therefore, no actions are required for this part.

If you require to fill in the data at this point or update the data in your custom fields, you can subscribe to an event that is made available in the Codeunit "NAVX Commission Management" (Codeunit 70020070).

```al
OnAfterCopyFromCommissionJournalLine(var NAVXCommLedgEntry: Record "NAVX Comm. Ledg. Entry"; NAVXCommJournalLine: Record "NAVX Comm. Journal Line")
```

This concludes the changes that need to be made to post custom fields onto the **Commission Ledger Entries**.

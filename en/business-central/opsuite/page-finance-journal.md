# Page OpSuite Integration Finance

If you purchased the *Standard* plan, the only integration available is to integrate the financial summary from OpSuite™ to Business Central. The data being imported from OpSuite™ is imported into the **OpSuite Integration Finance** page.

The page can be access directly when you choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **OpSuite Integration Finance**, and then choose the related link.

The following fields are available:

|                |                                                                                                                                      |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------|
| **Batch Date** | This field is not editable and shows the date for the financial data imported from OpSuite™.                                         |
| **Status**     | This field is not editable and shows the status for the batch. The following statuses are available:<br><br>- New: The batch is created, but the data could not be imported<br>- Imported: The batch is imported and ready for processing<br>- Completed: The batch is completely processed<br>-G/L Account Mapping Missing:<br> not all categories have a G/L Account mapped. The mapping has to be completed before the batch can be processed<br>- Error: An error has occured |

## Actions

### Process Batch

If the status is *Imported*, the **Process Batch** action will create a general journal with the imported data. If the setup is configured to automatically post the journal, the data is automatically posted to the General Ledger.

### Reset Mapping

The process will attempt to apply G/L accounts defined in the [OpSuite Gnereal Ledger Mapping](page-gl-map.md) to all categories included in the batch. If the mapping is successful, the status will be changed to *Imported*.

### Show Lines

Display the detailed lines that show the categories and amounts imported.

### Show G/L Entries

Once the batch is *Completed*, the G/L Entries posted can be shown.

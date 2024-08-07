# How to process the Financial Summary Integration

## Manually running the Synchronization

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon and enter *OpSuite Manual Synchronization* and select the related link. This will start the process [Opsuite Manual Synchronization](report-manual-synchronization.md). You can then select the synchronizations you want to run. The options available depend on the plan you purchased. If you purchased the *Standard* plan, the only option available is *From OpSuite*, which will download the financial summary data from OpSuite™ into Business Central.

Once the synchronization is done, a confirmation message will inform you about it.

## Reviewing imported data

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon and enter *OpSuite Integration Finance* and select the related link. This will show the [OpSuite Integration Finance](page-finance-journal.md) page. You will see the individual batches that have been imported by date. Please then review the batches to determine, if the batches can be processed or if they have any issues.

If the batches can be processed, the status would show *Imported*. If the batches have an error, they show a different status. One of those statuses can be *G/L Account Mapping Missing*. This status indicates that the setup to map the imported data to the right Business Central General Ledger Accounts. If this is the case, there are two different options on how to resolve those.

One of the options is to go to the [OpSuite General Ledger Map](page-gl-map.md) and update the mappings. Once the mappings have been completed, select the action **Reset Mapping** on the *OpSuite Integration Finance* page. This will reprocess the data and map the imported data to the correct General Ledger Accounts. If all of the mappings have been completed, the status will change to *Imported*.

The other option is to select the action **Show Lines* to display the [OpSuite Integration Finance Lines](page-finance-journal.md) page. You can then update the General Ledger Accounts on this page. However, if you update the accounts on the lines, the next imported batch will have the same mapping issues again. Once all of the lines have General Ledger Accounts assigned, the status will also change to *Imported*.

## Processing the Batch

If the status is *Imported*, you can continue to process the data. This can be done by selecting the action **Process Batch**. If the **Post Financial Data automatically** setup is checked, the batch processing will create General Ledger Journals and also post them. This means, if the batch processes correctly, the financial data is available in the Chart of Accounts. The process is completed.

## Posting General Journal

if the **Post Financial Data automatically** setup is not checked, the batch processing only creates the General Journal defined in the **OpSuite Integration Setup**. You can then open the journal, review it, and then post it manually.

## See Also

- [OpSuite Integration Finance Page](page-finance-journal.md)
- [OpSuite General Ledger Map Page](page-gl-map.md)

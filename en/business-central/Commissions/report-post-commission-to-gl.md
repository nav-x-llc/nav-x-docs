# Report Post Commission To G/L

[!include[post-cost-to-gl-report](includes/post-cost-to-gl-report.md)]

The request page for the report allows you to define two options. You can define, if you want to **Post** the transactions or just view them. If you do not check the flag **Post**, you can run this report as a test report to preview the transactions that will be posted when the flag **Post** is checked. The second option allows you to **Print Zero Commission Lines** in the report. By default, only lines that have commissions will be printed to show the General Ledger impact.

You can filter the **Commission Ledger Entries** to only post the cost for commissions for certain documents or salespeople. You also can define a filter for the **Effective Date** for the commissions. You should always filter to stop at the month end that you are processing at this time. You can go past the month end or post all transactions for multiple months, but to be able to have a clean separation between the different months, you want to only post transactions to the General Ledger for a particular month.

The posting respects the **Allow Posting From** and **Allow Posting To** dates configured in Business Central. If the transaction would be posted in a date range that is not allowed, it will post the transaction in the first date that is allowed.

> [!IMPORTANT]
> The report will not post any transactions in preview mode, so to post the actual transactions to the G/L, you have to select **Print**. You can print it to a PDF, if you want to save a tree.

## Automating the posting

If you do not want to post transactions any time you post a commission transaction, but also do not want to perform this step manually every month end, you can schedule this report on the **Job Queue**. You can setup the report to be run automatically at specific dates. Learn more on how to **[Use Job Queues to Schedule Tasks](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-job-queues-schedule-tasks)**

## See Also

- [Specify Posting Periods](https://docs.microsoft.com/en-us/dynamics365/business-central/finance-how-specify-posting-periods)
- [Use Job Queues to Schedule Tasks](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-job-queues-schedule-tasks)

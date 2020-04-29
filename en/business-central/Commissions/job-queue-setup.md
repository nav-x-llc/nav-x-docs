# Job Queue Setup

When you want to send commission reports to your salespeople automatically, you must review and activate the **Job Queue Entry** provided by us for this feature. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Job Queue Entries**, and then choose the related link.

You will find a **Job Queue Entry** for *Report Send Salesperson Email* that has the **Status** set to **On Hold**. Please select this row and then choose the action **Edit**. By default, it is configured to run once a day between 8 am and midnight in your local timezone. You can review those settings and change them to have the report run during different days and different times. We do recommend not changing the **No. of Minutes between Runs**, since it is not necessary to run this report more than once a day.

The report automatically validates, if it is the proper date to execute the email functionality as defined in the setup. So, you will need to make sure that the report is executed once a day or it will not send emails out.

Once you have made the appropriate changes, you can **Set Status to Ready**. This action will start running the report now based on your settings and then send out emails automatically.

## See Also

- [Use Job Queues to Schedule Tasks](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-job-queues-schedule-tasks)

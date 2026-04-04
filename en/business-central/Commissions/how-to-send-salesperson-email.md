# Send Commission Statements to Salespeople

[!include[signup-tenant](includes/signup-tenant.md)]

NAV-X Commission Management can email commission statements to your salespeople automatically. Each email contains the salesperson's commission report as a PDF attachment. This can be run manually on demand or automated via the Job Queue.

## Prerequisites

1. Email must be configured in Business Central. See [Set Up Email](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email) in the Business Central documentation.
2. Each salesperson must have an **E-Mail** address configured on their Salesperson card and must be enabled for Commission Management.

## Step 1: Configure Email Settings in Commission Setup

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Commission Setup**, and choose the related link.
2. Go to the **Reporting** FastTab.
3. Configure the following fields:

|                                  |                                                                                                                                                                                      |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **New Email Body Report Name**   | Select the report used to generate the HTML body of the email. The default NAV-X report is pre-configured.                                                                           |
| **New Email Body Layout Name**   | Optionally select a custom Word layout for the email body. Leave blank to use the report's default layout.                                                                           |
| **Send Email Every**             | The number of periods between automated email sends. Enter 1 to send once per period.                                                                                                |
| **Send Email Period**            | The period type: Day, Week, Month, Quarter, or Year.                                                                                                                                 |
| **Process By**                   | Controls the level of detail in the attached PDF: **Salesperson** (summary totals), **Document** (one line per document), or **Detail** (full line-by-line detail).                  |
| **Print Zero Commission Lines**  | Whether to include lines with zero commission amounts in the attached report.                                                                                                        |
| **Aged by**                      | How commission entries are aged in the report: Commission Date, Date Payable, or Effective Date.                                                                                     |
| **No. of Periods**               | The number of periods to display in the report.                                                                                                                                      |
| **Period Length**                | The period type for the report: Day, Week, Month, Quarter, Year, Fiscal Year, or Accounting Period.                                                                                  |
| **Period End Date**              | Optional date formula to calculate the period end date automatically.                                                                                                                |

## Step 2: Send Emails Manually

To send commission statement emails on demand:

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Send Salesperson Email**, and choose the related link.
2. Optionally filter to specific salesperson codes using the **Code** filter to limit who receives the email.
3. Choose **OK** to send the emails immediately.

> [!TIP]
> Test the configuration by first filtering to a single salesperson code before sending to all salespeople.

## Step 3: Automate via Job Queue (Optional)

To send emails on a regular automated schedule:

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Job Queue Entries**, and choose the related link.
2. Find or create a Job Queue entry for the **Send Salesperson Email** report.
3. Set the recurrence schedule and activate the entry.

When run from the Job Queue, the report checks the **Send Email Every** and **Send Email Period** settings in Commission Setup to determine whether it is time to send emails. If emails were sent recently within the configured frequency, the report skips sending until the next scheduled time.

> [!NOTE]
> The email subject is automatically set to: *Commission Report for [Salesperson Name] - [Company Name] for [Date]*.

## See Also

- [Send Salesperson Email Report](report-send-salesperson-email.md)
- [Commission Setup](commission-setup.md)
- [Job Queue Setup](job-queue-setup.md)
- [Commissions by Salesperson](report-commission.md)

# Report Send Salesperson Email

[!include[signup-tenant](includes/signup-tenant.md)]

The *Send Salesperson Email* report is a processing report that sends the commission statement report to each salesperson via email as a PDF attachment. No printed output is produced. This report requires email to be configured in Business Central and requires the **New Email Body Report** to be configured in Commission Setup.

You can execute this task by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Send Salesperson Email**, and following the related link.

## Process

The report sends an email to every enabled salesperson who has an email address configured. The email body is generated from the report defined in **New Email Body Report Name** in Commission Setup, using the layout defined in **New Email Body Layout Name**. The commission report (Commissions by Salesperson) is attached as a PDF.

The email subject is automatically set to:

`Commission Report for [Salesperson Name] - [Company Name] for [Today's Date]`

When run manually from the request page, the report sends emails immediately regardless of the frequency settings. When run from the Job Queue in automated mode, the report respects the **Send Email Every** and **Send Email Period** settings in Commission Setup to control how often emails are sent.

## Salesperson/Purchaser filter

You can send emails to all eligible salespeople at once or limit which salespeople receive the email by entering a salesperson code in the **Code** filter.

## Prerequisites

Before using this report, ensure the following are configured:

1. Email accounts are set up in Business Central (SMTP or Microsoft 365).
2. **New Email Body Report Name** is defined on the Reporting FastTab in Commission Setup.
3. Optionally, **New Email Body Layout Name** is configured for a custom email body layout.
4. Report settings such as **Process By**, **Aged By**, **No. of Periods**, and related options are configured in Commission Setup.

## See Also

- [Commission Setup](commission-setup.md)
- [Job Queue Setup](job-queue-setup.md)
- [Report Commissions by Salesperson](report-commission.md)
- [How to Send Salesperson Emails](how-to-send-salesperson-email.md)

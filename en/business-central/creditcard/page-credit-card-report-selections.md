# Page Report Selections - Credit Card

We have different custom reports that are printed in different scenarios. To use those reports, you must configure those reports in the report selections. To activate those reports in Business Central, please choose ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Report Selections - Credit Card**, and then choose the related link.

The custom Posted Sales Invoice report that we provide with the Credit Card app contains details of the credit card payments applied to the posted invoice to show your customers which credit cards were used and which amount was charged to the invoices.

|                                  |                                                                                                                               |
|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| **Usage**                         | You can switch between the different usages by selecting one of the existing options. For each of those options, you can define multiple reports to be printed. The available options are:<br><br>- Customer Receipt<br>-Merchant Receipt<br>-Posted Sales Invoice |
| **Report ID**                     | The unique identifier to define the report. The current available reports are:<br><br>- Customer Receipt: Report 70083431<br>- Merchant Receipt: Report 70083432<br>- Posted Sales Invoice: Report 70083433 |
| **Report Caption**                | Displays the name of the report                                                                                              |
| **Use for Email Body**            | Specifies that summarized information, such as invoice number, due date, and payment service link, will be inserted in the body of the email that you send. |
| **Use for Email Attachment**      | Specifies that the related document will be attached to the email.                                                           |
| **Email Body Layout Code**        | Specifies the ID of the email body layout that is used.                                                                      |
| **Email Body Layout Description** | Specifies a description of the email body layout that is used.                                                               |

> [!WARNING]
> If you setup a report to be used for the **Posted Sales Invoice** and you have multiple reports specified in the standard **Report Selections - Sales**, please ensure that you are using the same **Sequence No.** (this field is not available on the page by default). The reports defined here replace the report already existing in the **Report Selections - Sales**.

Every salesperson wants to know how much commission they are earning in a specific time period. The **Commissions by Salesperson** report is meant to be a self service report for the individual salespeople as well as review for management. Based on security setups as described in the [Additional Setup](../additional-setups.md#user-setup), salespeople can run the report themselves without any concerns that anyone else could see their commission amounts.

If your salespeople do not have access to Business Central, you can send this report to each of your salespeople automatically via email. This has to be set up once in the [Commission Setup](../commission-setup.md#reporting). Reports then will be e-mailed automatically based on the defined frequency.

Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Commissions by Salesperson**, and then choose the related link to start the report.

## Request Page

When you start the **Commissions by Salesperson** report, you will see a request page that provides you with the ability to define how the report should be printed and what details should be shown.

### Options

|                                  |                                                                                                                       |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| **Show** | - **Salesperson**: No detail is going to be sent. Only one line per salesperson is going to be displayed.<br>- **Document**: One line per document will be displayed on the report, showing totals per document.<br>- **Detail**: Full Details will be shown on the report. A line per line will be displayed with detailed commission information. |
| **Print Zero Commission Lines**  | The report can display year to date information about accumulated commission amounts. With this field, you can define what date is used to summarize the commission amounts. |
| **Aged As Of**                   | Define the ending date of the aging period defined in the field **Aged by**. This aging date will be used to display *Month to Date* as well as *Year to Date* information about the total commission amounts. |
| **Aged by**                      | The report can display year to date information about accumulated commission amounts. With this field, you can define what date is used to summarize the commission amounts.<br><br>- **Commission Date**: The commission date is the posting date of a commission ledger entry.<br>- **Date Payable**: The date a commission is payable depends on the setup when commissions become payable.<br>- **Effective Date**: The effective date is defined based on the commission setup. |

### Salesperson/Purchaser

You can define various filters to limit the salespeople that are printed in the report. If you are a **Commission Manager**, you can print the report for multiple salespeople and then filter which salespeople to include in the report. If you are not a **Commission Manager**, any filters placed here to define the salespeople to show will be overwritten by the system to only show your own commission.

## Printing Options

Just like with any other report in Business Central, you can choose how you want the results displayed. You can select to only see an on screen preview, generate a PDF, print the report to a printer, or also schedule the report to run at a later time and get notified when the report is available. Please follow the standard Business Central documentation to learn more [Working with Reports and Batch Jobs](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-work-report).

## See Also

- [Setting up Salespeople](../additional-setups.md#user-setup)
- [Setting up Report Emailing](../commission-setup.md#reporting)
- [Working with Reports and Batch Jobs](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-work-report)

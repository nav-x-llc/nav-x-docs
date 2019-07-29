## General

The **General** fast tab defines the general system behavior and the commission rules. Each field is described below

|                                             |                                                                                                            |
|---------------------------------------------|------------------------------------------------------------------------------------------------------------|
| **Enable Commission**                       | Activates the Commission Management functionality. You can setup everything until you are ready for processing |
| **Calculate Commissions on**                | You can select the basis for the commission calculations. Depending on the value that you select here, the commission rates will be applied to different base amounts. You can define defaults here and then also override this setup on each salesperson.<br><br>- **Gross Profit**: Commissions are calculated on the difference between **Sales Amount** and **Cost**.<br>- **Sales**: Commissions are calculated on the sales amount.<br>- **Quantity**: The commissions are calculated based on the quantity that is sold. This is primarily important for royalty payments. |
| **Commission Effective Date**               | - **Date Entered**: The work date the sales transaction is entered<br>- **Order Date**: The date the order was placed. This is the “Order Date” on the sales document.<br>- **Shipment Date**: The date the order will be shipped. This is based on the **Shipment Date** field on the sales document.<br>- **Invoice Date**: The date the document will be posted. This is based on the “Posting Date” field on the sales document.<br>- **Due Date**: The commission rates will be determined based on the **Due Date** of the document.<br>- **Date Paid**: The commissions rates will be determined based on the actual date the invoice is paid. Initially, the due date will be used to determine the commission rates, which then will be adjusted to different rates when the invoice is paid. This can only be used when **Commission Payable On** is set to **Cash Receipt** |
| **Commission Payable On**                   | You can define different settings based on when commissions become payable to the salespeople.<br><br>- **Order Entry**: As soon as sales document is entered<br>- **Shipment**: When the shipment is posted, the shipped portion of the document will have payable commissions<br>- **Invoice**: When the invoice is posted, the commission on the invoice amount becomes payable.<br>- **Cash Receipt**:The commission for the paid amount of an invoice becomes payable. |
| **Invoice Paid Adjust. Reason Code**        | If the **Commission Effective Date** is set to **Date Paid**, you must enter a reason code that will be used to post the adjusting **Commission Ledger Entries** required to adjust the commissions to the rates effective when the invoice is paid. |
| **Auto. Commission Post to G/L**            | Defines, if you want the system to accrue commissions in general ledger accounts. If you activate “Automatic Commission Posting to G/L”, the system will post the commissions against liability and expense accounts when they are created and paid. If you disable this setting, you can still run a processing report at month’s end that will post the commission transactions to the G/L. |
| **Use only most specific Commission Rates** | By selecting **Use only most specific Commission Rates**, you can define different rates on different levels of the hierarchy. The system will always use the most specific rate setup when retrieving the commission rates. |
| **Prevent Negative Commissions**            | By default, commissions are calculated on positive and negative lines on a sales transaction, which means that a specific sales transaction could turn into a negative total commission or a commission claw back. If you want to not claw back commissions from your salespeople in this scenario, place a check mark in this field. Whenever credit memos are processed, those credit memos result in negative commissions. This field does not affect the commission calculation for credit memos. |
| **Prevent Negative Total Commissions**      | If a salesperson sold less during a period than the credit memos processed for this salesperson’s customers, the commission amount could be negative at the end of the period. If you do not want to claw back commissions from your salespeople in this scenario, you can activate the field. |
| **Create Zero Amount Ledger Entries**       | If you want to use tiered or “Hockey Stick” commissions, you will have to activate the check mark in this field. This will create commission ledger entries, even if a salesperson does not receive a commission for a specific sale, but is involved in the sale. This then will be counted towards the total sales amount in a given period. |

## Filter Criteria

The **Filter Criteria** fast tab enables you to customize what the system considers a *commissionable document*. Most fields are only available, if you choose **Cash Receipt** as the point in time when commissions will become payable.

|                                                    |                                                                                                    |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **Process only fully paid invoices**               | Only fully paid invoices will make commissions payable.                                            |
| **Exclude Past Due invoices**                      | If an invoice is paid late, the invoice will not produce commissions, even if it is paid eventually. |
| **Exclude Customers with Past Due invoices**       | When a customer has an invoice that is past due, no commission will be paid for this customer. It will be paid when no invoices are past due anymore. |
| **Exclude Customers with Past Due invoices for**   | When customers with past due invoices should be excluded, this allows adding a grace period. For instance, *only exclude customers that have a past due invoice that is more than 90 days past due*. |
| **Exclude Customers if Past Due is more than (%)** | Customers with past due invoices will only be excluded, if the amount past due is greater than a percentage of the full outstanding amount. |
| **Exclude Credit Memos from Commissions**          | You can select, if you want to include or exclude credit memos from commission calculations. If credit memos are included, negative commissions will be calculated on credit memos and these commissions will be charged back to the salesperson. Credit memos lower the salesperson’s commissions in the month that they are posted. |
| **Sales Growth Period**                            | Our Commission Management app has the ability to define commission rates based on the growth of sales over time. To define the period length that is used to calculate the sales growth over the different periods, you can define the **Sales Growth Period** as **Day**, **Week**, **Month**, **Quarter**, or **Year**. |
| **Initial Rate per Campaign**                      | Customers with past due invoices will only be excluded, if the amount past due is greater than a percentage of the full outstanding amount. |
| **Initial Rate per Ship-to**                       | Customers with past due invoices will only be excluded, if the amount past due is greater than a percentage of the full outstanding amount. |
| **Initial Rate per Salesperson**                   | Customers with past due invoices will only be excluded, if the amount past due is greater than a percentage of the full outstanding amount. |
| **Initial Rate per Entity**                        | Customers with past due invoices will only be excluded, if the amount past due is greater than a percentage of the full outstanding amount. |

## Reporting

The **Reporting** fast tab enables you to configure sending commission reports automatically via email to your salespeople. You have to configure the [SMTP Mail Setup](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email) before you can send emails automatically to your salespeople. The automatic emailing functionality is processed through a job defined on the job queue. To review and activate the job, please review the [job queue setup](../job-queue-setup.md).

|                                                    |                                                                                                    |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **New Email  Body Report Name**                    | A Standard Report is defined that will be used to create the email body that is sent to your salespeople. You can create your own report to include additional information or you can update the layout and define it in the next field |
| **New Email  Body Layout Name**                    | If no layout is defined, the default layout of the report defined above is used. The layout defines the actual content of the email body that is sent to your salespeople. |
| **Send Email Date Formula**                        | WYou can define when the reports should be sent out. The default formula defined will send the emails on the last day of each month (CM+1M-1D). To always send the emails on the fifth of a month, you can use (D5) as the date formula. [Learn more about using date formulas](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-enter-date-ranges#using-date-formulas) |
| **Process By**                                     | - **Salesperson**: No detail is going to be sent. Only one line per salesperson is going to be displayed.<br>- **Document**: One line per document will be displayed on the report, showing totals per document.<br>- **Detail**: Full Details will be shown on the report. A line per line will be displayed with detailed commission information. |
| **Print Zero Commission Lines**                    | The report can display year to date information about accumulated commission amounts. With this field, you can define what date is used to summarize the commission amounts. |
| **Aged by**                                        | The report can display year to date information about accumulated commission amounts. With this field, you can define what date is used to summarize the commission amounts.<br><br>- **Commission Date**: The commission date is the posting date of a commission ledger entry.<br>- **Date Payable**: The date a commission is payable depends on the setup when commissions become payable.<br>- **Effective Date**: The effective date is defined based on the commission setup. |

## Features

The **Features** fast tab enables you to disable features that you are not using to show a simplified user interface. You can also always [personalize your user interface](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-personalization-user) to your liking using the standard features provided by Business Central.

|                                                 |                                                                                                       |
|-------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Commissions by Campaigns**                    | You can define different commission rates per sales campaigns that you are running. Only when this campaign is defined on the document, the rate is calculated from the specific rates defined for this campaign. If you do not anticipate using this feature, please make sure that this is not checked. |
| **Commissions by Managers**                     | You can define commission calculations for sales managers that receive commission payments based on the performance of their team. You can define different commission rates per sales campaigns that you are running. Only when this campaign is defined on the document, the rate is calculated from the specific rates defined for this campaign. If you do not anticipate using this feature, please make sure that this is not checked. |
| **Different Commissions for overdue Documents** | You can define that commissions are reduced for overdue invoices. If a customer does not pay an outstanding invoice on time, you can define different percentages to define how much the commissions are reduced based on the days overdue. If you do not anticipate using this feature, please make sure that this is not checked. |
| **Different Commissions by Dimensions**         | You can define different commission rates based on the dimension values for global dimensions 1 and 2. If you do not anticipate using this feature, please make sure that this is not checked. |
| **Use Maximum Commission Limits**               | You can define maximum amounts that will be paid as commission per period. This can limit the commission a salesperson can receive per period based on different filter criteria. If you do not anticipate using this feature, please make sure that this is not checked. |

## Actions

### Process > Auto-Assign Salespeople

When initially setting up your new Commission Management System, you most likely have already salespeople assigned to your customers. NAV-X Commissions allows the definition of an unlimited amount of salespeople responsible for a customer. Therefore, this functionality is provided for you to be able to use the existing salesperson assignment as the default salesperson for your existing customers. A salesperson commission split is defined for each customer with the salesperson defined in the “Salesperson Code” on the Customer Card. The split percentage is defined as 100 %.

### Help > Online Help

You can access this documentation directly from within Business Central.

### Help > Start Product Tour

NAV-X Commissions includes a product tour that can be used in your sandbox environment to walk through some of the features of NAV-X Commissions. You can start the product tour from here. [Learn more about the Product Tour](../how-to-product-tour.md).

## See Also

- [Working with layouts](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-manage-report-layouts)
- [SMTP Mail Setup](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email)
- [Job Queue Setup](../job-queue-setup.md)
- [Learn more about using date formulas](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-enter-date-ranges#using-date-formulas)
- [Personalize your user interface](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-personalization-user)
- [Working with Dimensions](https://docs.microsoft.com/en-us/dynamics365/business-central/finance-dimensions)
- [Learn more about using date formulas](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-enter-date-ranges#using-date-formulas)

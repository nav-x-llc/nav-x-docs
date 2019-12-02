# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the commission setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](permission-setups.md).

## Assisted Setup

### To start the Setup

When you are on the role center and have not completed the setup for the NAV-X Commission Management app, you will see a notification asking "Do you want to get started with NAV-X Commission Management?". Select **Click here to run the setup** to start the Assisted Setup wizard. Alternatively, you can also choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Assisted Setup**, and then choose the related link.

[!include[eula](../includes/eula.md)]

The wizard opens the first step, which displays a welcome text. You can move forward by clicking on “Next”. The next step allows you to configure the date that is used to select the commissions rates. You can define date sensitive rates that are valid for a certain time period only. This is done in the **Commission Effective Date**, which can have the following values. Hover over a field to read a short description.

|                   |                                                                                                                                      |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| **Date Entered**  | The work date the sales transaction is entered                                                                                       |
| **Order Date**    | The date the order was placed. This is the **Order Date** on the sales document                                                      |
| **Shipment Date** | The date the order will be shipped. This is based on the **Shipment Date** on the sales document                                     |
| **Invoice Date**  | The date the document will be posted. This is based on the **Posting Date** on the sales document                                    |
| **Due Date**      | The commission rates will be determined based on the **Due Date** of the document.                                                   |
| **Date Paid**     | The commissions rates will be determined based on the actual date the invoice is paid. Initially, the due date will be used to determine the commission rates, which then will be adjusted to different rates when the invoice is paid. This can only be used when **Commission Payable On** is set to **Cash Receipt**. |

### To set Commission Rules

The next step of the Assisted Setup allows you to define the rules when commissions are given and what documents would be excluded. Most fields are only available, if you choose **Cash Receipt** as the point in time when commissions will become payable.

|                                                    |                                                                                                    |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **Commission Payable On**                          | You can define different settings based on when commissions become payable to the salespeople.<br><br>- **Order Entry**: As soon as sales document is entered<br>- **Shipment**: When the shipment is posted, the shipped portion of the document will have payable commissions<br>- **Invoice**: When the invoice is posted, the commission on the invoice amount becomes payable.<br>- **Cash Receipt**:The commission for the paid amount of an invoice becomes payable. |
| **Invoice Paid Adjust. Reason Code**               | If the **Commission Effective Date** is set to **Date Paid**, you must enter a reason code that will be used to post the adjusting **Commission Ledger Entries** required to adjust the commissions to the rates effective when the invoice is paid. |
| **Process only fully paid invoices**               | Only fully paid invoices will make commissions payable.                                            |
| **Exclude Past Due invoices**                      | If an invoice is paid late, the invoice will not produce commissions, even if it is paid eventually. |
| **Exclude Customers with Past Due invoices**       | When a customer has an invoice that is past due, no commission will be paid for this customer. It will be paid when no invoices are past due anymore. |
| **Exclude Customers with Past Due invoices for**   | When customers with past due invoices should be excluded, this allows adding a grace period. For instance, *only exclude customers that have a past due invoice that is more than 90 days past due*. |
| **Exclude Customers if Past Due is more than (%)** | Customers with past due invoices will only be excluded, if the amount past due is greater than a percentage of the full outstanding amount. |
| **Exclude Credit Memos from Commissions**          | You can select, if you want to include or exclude credit memos from commission calculations. If credit memos are included, negative commissions will be calculated on credit memos and these commissions will be charged back to the salesperson. Credit memos lower the salesperson’s commissions in the month that they are posted. |

On the next step of the wizard, you can define, if you will have different commission rates for an initial purchase a customer makes and for all subsequent purchases. You can define the commission base by selecting the appropriate option for **Calculate Commissions on** in the following step. Additionally, you can define a restriction and setup a **Minimum Gross Profit % for Commissions** to prevent salespeople from reducing the prices below a certain threshold.

> [!IMPORTANT]
> This setting will only prevent salespeople from receiving commissions for a sales with a gross profit below the **Minimum Gross Profit % for Commissions**, but it will not prevent the actual sale. You can setup different workflow or approval rules in Business Central to accommodate this feature.

### To integrate the General Ledger

In the next step of the assisted setup, you can define, if you want the system to accrue commissions in general ledger accounts. Select **Automatic Commission Posting to G/L** to start posting commissions against liability and expense accounts when they are created and paid. Without the direct posting of commission transactions to the general ledger, you can still run a [processing report at month’s end](how-to-month-end-process.md#post-cost-to-gl) that will post the commission transactions to the G/L.

Before you move on to the next step, please select **Accounts** in the bottom of the wizard. This will open the *Customer Posting Groups* for you and you can enter a Commission Liability and Expense account for each Customer Posting Group. This is required to be entered before you can post commissions to the G/L. You can consult the Business Central documentation to learn more about [Customer Posting Groups](https://docs.microsoft.com/en-US/dynamics365/business-central/finance-posting-groups).

### To configure additional settings

By selecting **Use only most specific Commission Rates**, you can define different rates on different levels of the hierarchy. The system will always use the most specific rate setup when retrieving the commission rates.

If you want to use tiered or *Hockey Stick* commissions, you must select **Create Zero Amount Ledger Entries**. This will create commission ledger entries, even if a salesperson does not receive a commission for a specific sale, but is involved in the sale. This then will be counted towards the total sales amount in a given period.

By default, commissions are calculated on positive and negative lines on a sales transaction, which means that a specific sales transaction could turn into a negative total commission or a commission claw back. If you want to not claw back commissions from your salespeople in this scenario, activate the field “Prevent Negative Commission”. Whenever credit memos are processed, those credit memos result in negative commissions. Even with “Prevent Negative Commission” activated, it does still calculate the commissions for credit memos.

If a salesperson sold less during a period than the credit memos processed for this salesperson’s customers, the commission amount could be negative at the end of the period. If you do not want to claw back commissions from your salespeople in this scenario, you can activate the field “Prevent Negative Total Commission”.

The NAV-X Commission Management app has rich functionality, grouped into different features. If you do not anticipate using some of the features, you can turn those features off. If you plan on using specific features, you can turn those on. This can be changed at any time. Turning a feature off removes the associated actions from the pages and menus and hides fields that only are used in conjunction with these features. This allows a cleaner and simpler user interface to let you focus more on your specific tasks.

### To send commission reports via email

You can automatically send commission reports to your salespeople via email. This way, you do not have to manually send out reports and also do not require your salespeople to log on to the system to review their commissions. If you choose to **Enable Automatic Emailing**, you have to configure the [SMTP Mail Setup](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email). The automatic emailing functionality is processed through a job defined on the job queue. To review and activate the job, please review the [job queue setup](job-queue-setup.md). Hover over the fields to read a short description or review the [Commission Report](report-commission.md) request page settings for further details on the different settings.

### To manage user setups

Each user can see their own commissions, based on the **Salespers./Purch. Code** defined in the **User Setup** page. However, normal users cannot modify commissions or process commissions. Only commission managers have the rights to modify commission rates, process commissions at month end, and see all commissions. This following page will allow you to define the users that are commission managers. Just activate **Commission Manager** for each user that should have those rights.

You can always make those changes later as defined in the [additional setups](additional-setups.md).

You can define for each Item, Resource, G/L Account, and Item Charge, if one is commissionable or not. Initially, a new item, for instance, is not commissionable. You can change this at the time you are [importing commissions](how-to-import-commissions.md) or you can also define how all of your existing records are configured. This will be implemented at the end of the wizard. With these last setups, you are done. As long as you configured everything: you are ready to process commissions. Please follow our How-To’s on the left to learn how to perform the different tasks.

> [!IMPORTANT]
> If you have a large number of items, Resources, G/L Accounts, or Item Charges, this process can take a while. It can take several hours, if you have several tens of thousands of records.
> During this process, several tables are locked in the system and therefore system might not be available for other users. It is recommended to perform this task outside of normal business hours.

## See Also

- [Additional Setups](additional-setups.md)
- [Salesperson Setup](salesperson-setup.md)
- [Item Setup](item-setup.md)
- [Commission Rate Setup](commission-rate-setup.md)
- [How to process Sales Documents](how-to-process-sales-documents.md)

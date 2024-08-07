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
| **Process only fully paid invoices**               | Only fully paid invoices will make commissions payable.                                            |
| **Exclude Past Due invoices**                      | If an invoice is paid late, the invoice will not produce commissions, even if it is paid eventually. |
| **Exclude Customers with Past Due invoices**       | When a customer has an invoice that is past due, no commission will be paid for this customer. It will be paid when no invoices are past due anymore. |
| **Exclude Customers with Past Due invoices for**   | When customers with past due invoices should be excluded, this allows adding a grace period. For instance, *only exclude customers that have a past due invoice that is more than 90 days past due*. |
| **Exclude Customers if Past Due is more than (%)** | Customers with past due invoices will only be excluded, if the amount past due is greater than a percentage of the full outstanding amount. |
| **Include Current Document**                       | If this field is enabled, the next commission tier is reached, when this current document brings the total sales over the commission tier minimum. |

When you click **Next**, additional setups can be defined that.

|                                                        |                                                                                                    |
|--------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **Exclude Credit Memos from Commissions**              | You can select, if you want to include or exclude credit memos from commission calculations. If credit memos are included, negative commissions will be calculated on credit memos and these commissions will be charged back to the salesperson. Credit memos lower the salesperson’s commissions in the month that they are posted. |
| **Do not synchronize Commission Split**                | If this field is enabled, the *Commission Split* will not be copied from the Customer or Ship-to Addresses, but will be defined based on the **Salesperson Code** on the sales document or the **Commission Split Mappings**. Read more about [Commission Split Mappings](page-commission-split-mapping.md). |
| **Do not use Commission Splits defined on the header** | If this field is enabled, the *Commission Split* will ony be calculated based on the Commission Splits defined on the document lines. |
| **Commission Calendar**                                | When commissions are calculated based on *Percentage Billable*, this field defines the calendar used to define the working days in a period. This can also be overwritten on Resources, Resource Groups, Items, or Item Categories. |
| **Work Date for Resources**                            | When commissions are calculated based on *Percentage Billable*, the date used as the **Commission Effective Date** can be defined in this field. Any date fields from the *Sales Lines* can be picked. |

### Reason Codes

The next step of the Assisted Setup provides configuration options for different reason codes used throughout the system.

|                                                    |                                                                                                    |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **Invoice Paid Adjust. Reason Code**               | If the **Commission Effective Date** is set to **Date Paid**, you must enter a reason code that will be used to post the adjusting **Commission Ledger Entries** required to adjust the commissions to the rates effective when the invoice is paid. |
| **Recalculate Adjust. Reason Code**                | Define the reason code that will be applied to any commission ledger entries when the entry is created due to a recalculation of the commissions using one of the processes in the system. |
| **Commission Draw Reason Code**                    | When using the commission draw functionality, this reason code is used on commission ledger entries to identify those entries as commission draw commission ledger entries. Read more about [Commission Draws](how-to-commission-draw.md) |

### Initial Rates

On the next step of the wizard, you can define, if you will have different commission rates for an initial purchase a customer makes and for all subsequent purchases.

|                                  |                                                                                                                            |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| **Initial Rate per Campaign**    | If an *Initial Rate* is utilized, should each campaign be treated as a separate "initial sale"?.                           |
| **Initial Rate per Ship-to**     | If an *Initial Rate* is utilized, is the initial rate applied for each initial purchase of an individual ship-to address or only for the customer as a whole? |
| **Initial Rate per Salesperson** | If an *Initial Rate* is utilized, should each different salesperson's first sale to this customer be treated as an initial sale? |
| **Initial Rate per Entity**      | If an *Initial Rate* is utilized, should each item (or resource, G/L account) be treated as a separate initial sale?       |
| **Initial Rate Starting Date**   | Defines how the system will calculate the starting date of what constitutes an initial sale. The options are:<br><br>- Document Date: The initial rate time frame starts from the time that the first order/transaction was entered.<br>- Shipment Date: The initial rate timeframe start from the time that the first shipment was sent to the customer.<br>- Invoice Date: The initial rate time frame starts from the date the first invoice was posted. |
| **Initial Rate Duration**        | Together with the field **Initial Rate Period** this defines the time frame for the initial sale commissions. If the fields **Initial Rate Starting Date**, **Initial Rate Duration**, and **Initial Rate Period** are empty, only the first sale qualifies for the additional commission rates. |
| **Initial Rate Period**          | Together with the field **Initial Rate Period** this defines the time frame for the initial sale commissions. The possible options are:<br><br>- Day<br>- Week<br>- Month<br>- Quarter<br>- Year |
| **Add Initial Commission**       | If this field is enabled, the initial commission defined will be added to the normal commissions rather than it replacing the normal commissions. |

### Commission Calculation

The next step of the wizard allows you to configure the overall commission calculations.

|                                                    |                                                                                                    |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **Calculate Commissions on**                       | You can select the basis for the commission calculations. Depending on the value that you select here, the commission rates will be applied to different base amounts. You can define defaults here and then also override this setup on each salesperson.<br><br>- **Gross Profit**: Commissions are calculated on the difference between **Sales Amount** and **Cost**.<br>- **Sales**: Commissions are calculated on the sales amount.<br>- **Quantity**: The commissions are calculated based on the quantity that is sold. This is primarily important for royalty payments. |
| **Sales Growth Period**                            | Our Commission Management app has the ability to define commission rates based on the growth of sales over time. To define the period length that is used to calculate the sales growth over the different periods, you can define the **Sales Growth Period** as **Day**, **Week**, **Month**, **Quarter**, or **Year**. |
| **Minimum Gross Profit % for Commissions**         | Specifies the minimum gross profit that is required for commissions to be calculated on a single document line. If the gross profit is below the margin, salespeople do not receive commission on the transaction. This can be used to prevent salespeople from "price dumping" to make sales. |

> [!IMPORTANT]
> The setting **Minimum Gross Profit % for Commissions** will only prevent salespeople from receiving commissions for a sales with a gross profit below the **Minimum Gross Profit % for Commissions**, but it will not prevent the actual sale. You can setup different workflow or approval rules in Business Central to accommodate this feature.

### To integrate the General Ledger

In the next step of the assisted setup, you can define, if you want the system to accrue commissions in general ledger accounts. Select **Automatic Commission Posting to G/L** to start posting commissions against liability and expense accounts when they are created and paid. Without the direct posting of commission transactions to the general ledger, you can still run a [processing report at month’s end](how-to-month-end-process.md#post-cost-to-gl) that will post the commission transactions to the G/L.

### To configure additional settings

By selecting **Use only most specific Commission Rates**, you can define different rates on different levels of the hierarchy. The system will always use the most specific rate setup when retrieving the commission rates.

If you want to use tiered or *Hockey Stick* commissions, you must select **Create Zero Amount Ledger Entries**. This will create commission ledger entries, even if a salesperson does not receive a commission for a specific sale, but is involved in the sale. This then will be counted towards the total sales amount in a given period. **Create Zero Amount Ledger Entries for Resources** can be used to define whether commission ledger entries should be created for Resources, even if the resource doesn't receive a commission for the specific work. The resource must be defined on the document.

By default, commissions are calculated on positive and negative lines on a sales transaction, which means that a specific sales transaction could turn into a negative total commission or a commission claw back. If you want to not claw back commissions from your salespeople in this scenario, activate the field **Prevent Negative Commission** on the next step. Whenever credit memos are processed, those credit memos result in negative commissions. Even with “Prevent Negative Commission” activated, it does still calculate the commissions for credit memos.

If a salesperson sold less during a period than the credit memos processed for this salesperson’s customers, the commission amount could be negative at the end of the period. If you do not want to claw back commissions from your salespeople in this scenario, you can activate the field **Prevent Negative Total Commission**.

### To configure Commission Management Features

The NAV-X Commission Management app has rich functionality, grouped into different features that can be seen on the next two steps. If you do not anticipate using some of the features, you can turn those features off. If you plan on using specific features, you can turn those on. This can be changed at any time. Turning a feature off removes the associated actions from the pages and menus and hides fields that only are used in conjunction with these features. This allows a cleaner and simpler user interface to let you focus more on your specific tasks.

|                                                                |                                                                                            |
|----------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| **Commissions by Campaigns**                                   | You can define different commission rates per sales campaigns that you are running. Only when this campaign is defined on the document, the rate is calculated from the specific rates defined for this campaign. If you do not anticipate using this feature, please make sure that this is not checked. |
| **Commissions by Managers**                                    | You can define commission calculations for sales managers that receive commission payments based on the performance of their team. You can define different commission rates per sales campaigns that you are running. Only when this campaign is defined on the document, the rate is calculated from the specific rates defined for this campaign. If you do not anticipate using this feature, please make sure that this is not checked. |
| **Different Commissions for overdue Documents**                | You can define that commissions are reduced for overdue invoices. If a customer does not pay an outstanding invoice on time, you can define different percentages to define how much the commissions are reduced based on the days overdue. If you do not anticipate using this feature, please make sure that this is not checked. |
| **Different Commissions based on initial sale for a customer** | You can calculate different commissions for the initial sale for a new customer. This can be used to incentivize salespeople to sign up new customers. |
| **Different Commissions by Dimensions**                        | You can define different commission rates based on the dimension values for global dimensions 1 and 2. If you do not anticipate using this feature, please make sure that this is not checked. |
| **Use Maximum Commission Limits**                              | You can define maximum amounts that will be paid as commission per period. This can limit the commission a salesperson can receive per period based on different filter criteria. If you do not anticipate using this feature, please make sure that this is not checked. |
| **Use Commission Types**                                       | Commission types are tags on different commission rates to classify commissions. These types are posted to the **Commission Ledger Entries** and can be used for reporting. They do not have any other functionality in the system. |
| **Use Recalculate Period**                                     | If sales for a specific salesperson reaches the next commission tier, the commission for already posted and possibly paid commissions can be recalculated to increase the commission rates based on the new commission rate for this tier. |
| **Use Time Based Commission**                                  | If you are calculating commissions based on hours billed, activate this field |
| **Allow Commission Payments to Resources**                     | If you are calculating commissions based on hours billed and want to configure resources to be paid for the commissions instead of using salespeople, activate this field |
| **Include Commissions from all Companies**                     | If the salespeople selling or resources are working for multiple companies within your Business Central environment, you can activate this field to accummulate the sales and worked hours from all companies to apply commission tiers based on the combined numbers. |

### Defaults

You can configure default settings for **Items**, **Resources**, **Item Charges**, and **G/L Accounts**. If you activate any of the fields, the system will configure new Items, Resources, Item Charges, or G/L Accounts marked as **Commissionable**.

### Performance Optimization

Typically, no configuration is needed here. If you have a lot of orders being imported or entered at the same time, you can configure different rules as to when commissions are calculated.

|                                                 |                                                                                                               |
|-------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **Don't calculate commissions on transactions** | This turns off any automatic commission calculation completely. To calculate commissions, you will have to run the **Recalculate Sales Document Commissions** or **Recalculate Posted Sales Document Commissions**. |
| **No Calculation During Document Entry**        | If you notice decreased performance during order entry, you can activate this switch. It will then not calculate any commissions automatically anymore during the document entry, but will make the following switches available to activate. If none of these switches are activated, commissions are not automatically calculated and will have to be calculated manually. |
| **Calculation During Document Release**         | This switch can only be activated, if **No Calculation During Document Entry** is enabled. If this is set, the commissions for the current document are automatically calculated at the time of document release. |
| **Calculation before Posting**                  | This switch can only be activated, if **No Calculation During Document Entry** is enabled. If this is set, the commissions for the current document are automatically calculated at the time of posting the document. |

### To calculate commissions for Journal Entries

If you are importing financial transactions from other systems and want to calculate commissions on those transactions, you can activate the field **Calculation Commissions on General Journal**. You then will have to define a field within the General Journal Line that will define the customer. This can be done in the field **Take Customer from General Journal Line Field**. The field, for instance the **Description** field, can contain the customer number or a portion of the customer name. The system will search within the customer list to find a match and will take the first customer that matches the information.

### To send commission reports via email

You can automatically send commission reports to your salespeople via email. This way, you do not have to manually send out reports and also do not require your salespeople to log on to the system to review their commissions. If you choose to **Enable Automatic Emailing**, you have to configure the [Email Setup](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email). you must assign the *Commission Report* Scenario to the **Email Connector** you want to use to send out the emails. The automatic emailing functionality is processed through a job defined on the job queue. To review and activate the job, please review the [Job Queue Setup](job-queue-setup.md). Hover over the fields to read a short description or review the [Commission Report](report-commission.md) request page settings for further details on the different settings.

### To manage Posting Accounts

In the next step of the wizard, you can select different G/L Accounts for the commission liabilities and commission expenses. When commissions are processed, these accounts are used to post the commissions to the general ledger. One setup can be done per customer posting group. If you want to use different G/L Accounts for different salespeople, you can define this on the individual salesperson's setup card. Read more on [Salesperson setups](salesperson-setup.md).

### To manage user setups

Each user can see their own commissions, based on the **Salespers./Purch. Code** defined in the **User Setup** page. However, normal users cannot modify commissions or process commissions. Only commission managers have the rights to modify commission rates, process commissions at month end, and see all commissions. This following page will allow you to define the users that are commission managers. Just activate **Commission Manager** for each user that should have those rights.

Additional user configurations can be defined to define what a specific user can see:

|                                       |                                                                                                                        |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Show All Commissions**              | When a user is not a *Commission Manager*, only their own commissions are shown to the user. If this field is activated, the user can see all commissions |
| **Hide Costs, Amounts, Gross Profit** | If this field is activated, Costs, Amounts, and Gross Profits are hidden on all Commission Lines, Posted Commission Lines, and also Commission Ledger Entries. |
| **Hide Commission Amounts**           | If this field is activated, Commission Amounts are hidden on all Commission Lines, Posted Commission Lines, and also Commission Ledger Entries. |
| **Hide Commission Rates**             | If this field is activated, Commission Rates are hidden on all  Commission Lines, Posted Commission Lines, and also Commission Ledger Entries. |
| **Edit Commission Ledger Entries**    | If this field is activated, certain fields can be edited on Commission Ledger Entries.                                 |
| **Edit Commission Splits**            | If this field is activated, **Commission Splits** can be edited.                                                       |

You can always make those changes later as defined in the [additional setups](additional-setups.md).

### To manage salespeople

You can define certain salespeople to be eligible for commissions or excluded. if you exclude a salesperson, you cannot calculate commissions for this person, regardless of the commission rate setups.

### Document Number for Commission Invoices

Commissions can be paid to salespeople via purchase invoices or sales credit memos as well as some other ways. If you pay a salesperson their commissions via purchase invoice or sales credit memo, you can now define the document number that is used as the **External Document No.** on these documents. This can be done in the field **Document No. for Processing Commissions**. The following values are accepted:

- %1: Day
- %2: Month (numeric)
- %3: Year (four digit)
- %4: Month (Name)
- %5: Salesperson No.

For instance, you can define "COMM %4 %3", which will then be translated into "COMM OCTOBER 2020", for instance.

Additionally, you can define the **Document No. for Manager Commissions**, which will generate a document number when posting manager commission amounts into the Commission Ledger Entries. This is done on a monthly basis. The same parameters as described above can be used. For manager commissions, the **Manager Customer Posting Group** also must be defined so that manager commission amounts can be posted to the General Ledger.

You can define for each Item, Resource, G/L Account, and Item Charge, if one is commissionable or not. Initially, a new item, for instance, is not commissionable. You can change this at the time you are [importing commissions](how-to-import-commissions.md) or you can also define how all of your existing records are configured. This will be implemented at the end of the wizard. With these last setups, you are done. As long as you configured everything: you are ready to process commissions. Please follow our How-To’s on the left to learn how to perform the different tasks.

> [!IMPORTANT]
> If you have a large number of items, Resources, G/L Accounts, or Item Charges, this process can take a while. It can take several hours, if you have several tens of thousands of records.
> During this process, several tables are locked in the system and therefore system might not be available for other users. It is recommended to perform this task outside of normal business hours.

## See Also

- [Additional Setups](additional-setups.md)
- [Salesperson Setup](salesperson-setup.md)
- [G/L Account Setup](gl-account-setup.md)
- [Item Setup](item-setup.md)
- [Item Category Setup](item-category-setup.md)
- [Resource Setup](resource-setup.md)
- [Resource Group Setup](resource-group-setup.md)
- [Commission Rate Setup](commission-rate-setup.md)
- [How to process Sales Documents](how-to-process-sales-documents.md)

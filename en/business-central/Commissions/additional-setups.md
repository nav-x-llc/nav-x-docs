# Additional Setups

While the NAV-X Commission Management setup performs most of the setups for you, you might want to understand and review the setups to be able to make changes when needed. All setups described below can be reached by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon and entering the headings below.

## User Setup

The **User Setup** should be reviewed or updated for each user working with commissions or entering orders. For each user, who should be able to update commission rates or perform the month end procedures, you have to have a **User Setup** record defined and the field **Commission Manager** checked.

Each salesperson with access to the system should not have this field checked and must have their **Salesp./Purch. Code** defined in the **User Setup**.  NAV-X Commission Management restricts access to functionality and data, in addition to permission setups, also with the **User Setup**. If a user is not setup as **Commission Manager**, they only can see their commissions throughout the system. This is done by using the **Salesp./Purch. Code** in the **User Setup** and filter any pages and reports to that value.

## Customer Posting Groups

When commissions are calculated and you have defined that the commissions should be accrued in the general ledger, you must define a commission liability and commission expense account. You also need this setup for the processing report to post costs to the General Ledger and to pay commissions at the end of the month.

You should create a new liability and a new expense account in the chart of accounts for this. You can then enter those account numbers in the last two fields on the Customer Posting Groups page. More information on how to [create new General Ledger Accounts](https://docs.microsoft.com/en-US/dynamics365/business-central/finance-setup-chart-accounts) are available in the Business Central documentation.

## Salesperson Groups

If you have a large number of salespeople and/or complex commission structures, you might want to consider setting up Salesperson Groups. If multiple salespeople have the same commission rates, you can assign those salespeople to the same group and then enter the commission rates on the Salesperson Group level, instead of the individual salesperson. This will reduce commission rate management efforts and will make changing rates easier.

## See Also

- [Creating new General Ledger Accounts](https://docs.microsoft.com/en-US/dynamics365/business-central/finance-setup-chart-accounts)
- [User Setup](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-how-users-permissions#to-set-up-user-time-constraints)
- [Commission Setup](commission-setup.md)

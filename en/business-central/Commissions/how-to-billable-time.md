# How to Calculate Commissions on Billable Time

If you are in the service industry and sell your work based on hours billed, you also want to ensure that you incentivize your salespeople and your billable resources accordingly. It is very common that billable resources receive a certain percentage for each hour billed. Additionally, bonuses or additional commissions will be paid to the billable resources, if they exceed a certain percentage of hours billed based on the hours available in a period. This page will describe the setups that are required to calculate commissions based on billable time.

## The General Setup

When you pay commissions for time billed to your billable resources, you typically would set **Calculate Commissions on** to either *Gross Profit* or *Sales*. Additionally, you want to turn on the feature **Use Time Based Commission**. If you pay bonuses on top of normal commissions, you also want to turn on **Use Commission Types**. Typically, the resource also receives commission only on their own billable time or, for a department manager, based on the billable time of their team. Therefore, you also would want to enable **Do not synchronize Commission Split**.

If you use a standard formula to calculate the total billable hours per period, you can defined the **Commission Calendar** in the commission setup. If you want to calculate the billable hours based on the actual working days for each employee (based on vacation time or if an employee only works a few days a week), you can override this below.

## The Billable Resources

Each employee receiving commissions must be setup as a salesperson. The salesperson is the main entity that is used to calculate all commissions. In addition, you often have the individual employees configured either as resources or items of the type *Service*. If you use the time entry functionality in Business Central, you most likely have resources already setup. However, this is not required.

If you have resources or items configured, you will have to define the **Commission Calendar**, if it is different than the base calendar you defined in the **Commission Setup**. It is important to define the **Hours per day** on the individual resource or item to calculate the proper billable hours in a period.

If you do not want to setup each employee as a resource, for instance, when you don't use the time entry functionality built into Business Central, you only have to configure the work types as a resource or item of type *Service*. This would need to be done to ensure that you can bill for the proper time for your employees. For those work types, you also would need to define the **Commission Calendar** and the **Hours per day**. You also want to define a dimension code called *Resource* or *Employee* or similar and a value for each of your billable resources.

## Commission Split

Now that you have defined the general setups, the billable resources as salespeople, and the hours billed each day, you have to define how the salespeople receive their commission. This is done through the **Commission Split Mapping**. You will need to define one row for each of your billable resources and for each of your billable resources, you define a **Line Mapping Filter**.

The actual filter depends on how you have your employees configured. If you have your employees defined as an individual resource or item of type *Service*, you will set the filter for each of the rows to *Type = Item* and then define the resource or item number in the field *No.*. This will ensure that the right salesperson is used when the time is invoiced.

If you have your work types only defined as resources or items of type *Service*, you will need to define the dimension and proper dimension value that you configured above in each sales line. It is recommended that you define this dimension as one of the shortcut dimensions so that it is easier to enter that on the sales lines. The filter you have to define in the **Commission Split Mapping** would be defined in the field **Dimension Mapping Filter**. For each of your employees, you will define *Dimension Code* as the dimension your created above and *Dimension Value* as the value your created for the employee. If you then define the work type on the sales line and select the employee who did the work in the dimension, the proper salesperson is selected on the sales line commission split.

## Commission Rates

Now, the last part is configuring the commission rates and associated setups. If all your billable resources have the same commission plan, you can define a **Salesperson Group** and assign this on the individual salespeople. The **Salesperson Group** enables you to define the rate structure once and apply it to all of the salespeople (billable employees) you want to calculate commissions for.

If you have more than one commission type, such as normal commissions and quarterly or annual bonuses, you will also need to define multiple **Commission Types** and the appropriate periods (select *Quarter* for bonuses paid out quarterly, for instance). If you pay fixed bonuses based on certain billable hour percentages, you also want to select **Single Payment only per Commission period**.

You can now define the commission rates either on the individual salesperson or on the salesperson group. You can restrict certain customers from being commissionable by entering a 0% commission for those. The main commissions would have to be entered by defining the proper **Commission Type** and the **Commission Rate**. If you have commission tiers, you want to also enter the **Minimum Amount** and select the **Minimum Amount Type**.

In the following example, we have salespeople receiving 5% commission for each hour billed and then receive a quarterly bonus of $500, if they exceed 80% hours billed, $1,000 when they exceed 100% hours billed in the quarter, and $2,000, if they exceed 100% hours billed for the year.

There are three commission types defined:

| **Code**  | **Description**    | **Tiered Commission Period** | **Single Payment only per Commission Period** |
|-----------|--------------------|:----------------------------:|:---------------------------------------------:|
| NORMAL    | Normal Commissions | " " (Blank)                  | No                                            |
| QUARTERLY | Quarterly Bonus    | Quarter                      | Yes                                           |
| ANNUAL    | Annual Bonus       | Year                         | Yes                                           |

These are the commission rates defined:

| **Commission Type** | **Minimum Amount** | **Minimum Amount Type** | **Commission Rate** | **Commission Rate Type** |
|---------------------|-------------------:|-------------------------|--------------------:|--------------------------|
| NORMAL              | 0                  | Amount                  | 5                   | Percentage               |
| QUARTERLY           | 80                 | Percentage Billable     | 500                 | Fixed Amount             |
| QUARTERLY           | 100                | Percentage Billable     | 1,000               | Fixed Amount             |
| ANNUAL              | 100                | Percentage Billable     | 2,000               | Fixed Amount             |

## See Also

- [Commission Journal Page](page-commission-journal.md)

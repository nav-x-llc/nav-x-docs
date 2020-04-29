# Page Manager Commission

You can define commissions for sales managers to receive commissions based on their team's performance. With the page **Manager Commission** you can define the commission rates managers will receive based on the performance of their team. You can access this page from the **Salespeople/Purchasers** list or **Salespeople/Purchasers Card** using the action **Manager Amounts** (*Salespeople > Manager Amounts*).

> [!IMPORTANT]
> **Manager Amounts** is only shown as an action, if you have turned on **Commissions for Managers** in the **Features** fast tab in the [Commission Setup](page-commission-setup.md)

|                      |                                                                                                                                   |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **Code**             | The **Code** is the salesperson code that the entered salespeople are associated with.                                            |
| **Start Date**       | If a **Start Date** is defined, the rate will only be valid, if the **Commission Effective Date** is the same or greater than the **Start Date**. |
| **End Date**         | If an **End Date** is left blank, the rate will only be valid, if the **Commission Effective Date** is the same or less than the **End Date**. |
| **Minimum Amount**   | Defining a **Minimum Amount** allows the definition of tiered commissions or *Hockey Stick* commissions. The rate will only be valid, if the calculated amount (based on the time frame and the amount type defined on the **Salesperson Card**) is the same or greater than the amount defined here. The total performance of the **Associated Salespeople** is used to calculate the amount. |
| **Commission Type**  | - **Percentage**: Defines that the **Commission Rate** is a percentage.<br>- **Fixed Amount**: Defines that the **Commission Rate** is a fixed amount. |
| **Amount**           | The commission rate is the actual percentage that is used to calculate the commission, if the **Commission Rate Type** is set to **Percentage**. The calculation is: **Commissionable Amount** * **Commission Rate** / 100 = **Commission Amount**.<br><br>If the **Commission Rate Type** is a **Fixed Amount**, the **Commission Rate** defines this amount. |

## See Also

- [Working with Manager Commissions](how-to-manager-commission.md)
- [Setting up Salespeople](salesperson-setup.md)

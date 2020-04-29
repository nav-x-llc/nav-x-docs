# Page Commission Rate Reduction based on Days Overdue

If commissions are payable when an invoice is paid, you can define different commission rates based on the days that the invoice was overdue. When your salespeople are also responsible to help with collection efforts, you might want to provide an incentive to your salespeople to get payments collected quickly. Therefore, you have the ability to define **Commission Rate Reductions** for specific customers or customer groups and specific salespeople. You can define different rate reductions based on how many days an invoice is late.

If you want to reduce the commission rate from the normal 5 % to 4 %, if an invoice is paid 30 days ore more late, you can define a 1 % rate reduction in this page. When the invoice is paid, the system will then determine the rate reduction that is valid for this this scenario and will post a separate commission ledger entry reducing the overall commission by the defined amount. An extra **Commission Ledger Entry** is posted to keep track of the history and show details. If a **Commission Ledger Entry** was posted due to a rate reduction based on this setup, the field **Days Overdue** in the **Commission Ledger Entry** will contain the number of days the invoice was overdue when it was paid.

|                               |                                                                                                                          |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| **Customer Type**             | - **blank**: Rates defined with a blank customer type are valid for all customers<br>- **Customer Discount Group**: Rates are valid for all customers with this **Customer Discount Group**<br>- **Customer Price Group**: Rates are valid for all customers with this **Customer Price Group**<br>- **Commission Group**: Rates are valid for all customers with this **Commission Group** |
| **Customer No.**              | Depending on the **Customer Type**, this field defines the **Customer Discount Group**, the **Customer Price Group**, **Commission Group**, or the **Customer** number the rate is valid for. |
| **Ship-to Code**              | If a **Ship-to Code** is defined, rates are only valid, if the product is shipped to this ship-to address.               |
| **Salesperson Code**          | The salesperson that will receive the commission defined here. If the **Salesperson Code** is left blank, the rate will be valid for all salespeople. |
| **Salesperson Name**          | Displays the name of the salesperson                                                                                     |
| **Starting Date**             | If a **Starting Date** is defined, the rate will only be valid, if the **Commission Effective Date** is the same or greater than the **Starting Date**. |
| **Ending Date**               | If an **Ending Date** is left blank, the rate will only be valid, if the **Commission Effective Date** is the same or less than the **Ending Date**. |
| **Days Overdue**              | The reduced rate will only be in effect, if the specific invoice was paid more than a number of days late                |
| **Reduce Commission Rate By** | The amount the rate will be reduced by. It is either specified as a percentage or a fix amount                           |
| **Commission Rate Type**      | - **Percentage**: Defines that the **Commission Rate** is a percentage.<br>- **Fixed Amount**: Defines that the **Commission Rate** is a fixed amount. |

## See Also

- [Commission Setup](commission-setup.md)
- [Setting up Commission Rates](commission-rate-setup.md)

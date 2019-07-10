# Salesperson Setup

## Salesperson Card

Before you can calculate and process commissions, you have to complete some basic setups. One of the tasks is to define how salespeople’s commission is calculated and how the individual salesperson gets paid. You can access the Salesperson card choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Salespeople/Purchasers**, and then choose the related link.

[!NOTE]
The field **Commission %** in the **General** fast tab on the *Salesperson Card* will not be used by NAV-X Commissions. Therefore, this field is automatically hidden. If you have previously defined any values in this field, they will still be there, but not utilized by your new Commission Management System. This is a standard field in Microsoft Dynamics 365 Business Central that only provides very limited functionality.

|                              |                                                                                                                           |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| **Vendor No.**               | If this salesperson is an external sales office or it is setup to calculate royalties, you can setup a vendor for this salesperson and define the number for that vendor here. If a vendor number is defined on the salesperson, the monthly commission calculation will create purchase invoices for your review and posting . Once they are posted, you can pay this salesperson through your normal Accounts Payables payment process directly from within Microsoft Dynamics 365 Business Central. |
| **Calculate Commissions on** | The general setup is done in the [Commission Setup](commission-setup.md). If you have salespeople who’s commission is calculated differently, you can define the different setups here.<br><br>- **blank**: If you select the blank value, the commission calculation for this salesperson will be based on the method defined in the **Commissions Setup**.<br>- **Gross Profit**: Commissions are calculated on the difference between Sales Amount and Cost<br>- **Sales**: Commissions are calculated on the sales amount<br>- **Quantity**: The commissions are calculated based on the quantity that is sold. This is primarily important for royalty payments. |
| **Amount Date Calculation**  | You can setup tiered commission rates, sometimes also called *hockey stick* commissions. To be able to define that a salesperson receives a higher commission based on accumulated sales or other values in a period, you have to define the period here.<br><br>For instance, if you will pay the salesperson a higher commission, if their sales for a month is above a certain amount, you would define **1M** for one month. If you are paying different rates based on the performance in a quarter, you would define **1Q** or one quarter.<br><br>If you do not pay tiered commissions, this field can be left blank. |
| **Amount Type**              | This field only has to be filled out when the field **Amount Date Calculation** is filled out. This field defines what amount is used to calculate whether the salesperson receives a tiered commission.<br><br>- **Sales Amount**: The salesperson receives additional commissions, if the sales for a certain period is exceeding a specified amount.<br>- **Gross Profit**: The salesperson receives additional commissions, if the gross profit for a certain period exceeds a specified amount. The gross profit is calculated as **Sales Amount** – **Cost**.<br>- **Gross Profit %**: The salesperson receives additional commissions, if the gross profit percentage is above a certain amount in a given period. |
| **Salesperson Group**        | If you have multiple salespeople that receive the same commission rates, you can setup a new Salesperson Group and define the commission rates on the salesperson group level, instead of manually for each salesperson. The salesperson group is defined here to group the salespeople together to receive the same rates. |

## Employee Card

If you have internal salespeople, so salespeople that are employees, you can setup each salesperson as an employee and can then allow the system to process the commission payments the same way that you process the rest of your payroll. During the monthly processing of commissions, the system determines, if salespeople should be paid through a vendor or employee. If **Vendor No.** is filled out on the **Salesperson Card**, the salesperson will be paid via vendor check, otherwise, the system will check, if an employee is configured as a salesperson.

Create an employee card for each salesperson. You can find information on how to create Employees here. Once the employee is created, please link the Employee with the salesperson card by selecting the proper salesperson in the **Salesperson/Purchaser**.

## See Also

- [Setup Salespeople](https://docs.microsoft.com/en-us/dynamics365/business-central/sales-how-setup-salespeople)
- [Register Employees](https://docs.microsoft.com/en-us/dynamics365/business-central/hr-how-register-employees)

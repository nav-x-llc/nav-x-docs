# How To Setup National Accounts Customers

If you need information on how to create a new customer, you can find this in the Microsoft Dynamics 365 Business Central [documentation](https://docs.microsoft.com/en-US/dynamics365/financials/sales-how-register-new-customers). We are going to look at the National Accounts specific setups for an already existing customer.

It is recommended to create a new customer for the **National Account** customer, but you can take an existing customer and convert it into a **National Account**. The reason why you might want to use an existing customer is that the open balances on the National Account then can be paid by applying open credit memos from child customers or apply open credit memos or payments from the national account to any existing child customers.

A customer is turned into a **National Account** by adding child customers. You add child customers by selecting the action *Customer > National Accounts* from the **Customer Card**. Enter each customer that will be part of the National Account in the shown list page. Once at least one child customer is added, the field **National Account** is checked on the customer card for the **National Account Customer**.

When an existing customer is added to a National Account customer or turned into a National Account itself, all open *Customer Ledger Entries* are marked as part of the **National Account** and therefore will be available for payment or processing through the National Account.

## See Also

- [Register New Customers](https://docs.microsoft.com/en-US/dynamics365/financials/sales-how-register-new-customers)

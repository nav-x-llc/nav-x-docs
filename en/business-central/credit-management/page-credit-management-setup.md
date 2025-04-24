# Page Credit Management Setup

## General

Each field available in the **General** fast tab of the setup page is described in the table below.

|                                             | |
|---------------------------------------------|-|
| **Enable Credit Manager**                   | You can perform all setups first and then activate the credit management functionality by placing a check mark in this field |
| **Credit Limit Of Zero Means**              | If a customer has a credit limit set of *0*, it can mean either<br><br>- The customer has **No Limit** and must prepay all orders<br>- The customer has an **infinite limit** |
| **Hold If Over Credit Limit by %**          | You can define a percentage that the credit limit has to be exceeded by first, before orders for this customer are placed on hold. |
| **Hold If Past Due Longer Than**            | You can define a time frame that an invoice has to be overdue, before orders for this customer are placed on hold. |
| **Place On Hold For**                       | It is possible to place sales orders on hold for<br><br>- **Credit Limit**<br>- **Past Due** or<br>- **All**, which means for both credit limit and past due. |
| **Auto approve, if now below credit limit** | If invoices get paid and a customer is now below the maximum credit limit, you can choose to have the app automatically approve those orders. |
| **Auto Post Sales Order**                   | When an order is approved, you can select to have the order automatically posted. |
| **Auto Post Sales Invoice**                 | When an invoice is approved, you can select to have the invoice automatically posted. |

## Actions

When you first configure the NAV-X Credit Management app and you did not already use the **Assisted Setup** wizard, you will have to run **Initialize Credit Management**. It will set the setup to default values and also create the workflows for Credit Management.

In case you want to uninstall the functionality, please select the action **Uninstall Credit Management**. This will remove the workflows that have been created initially. You do not have to run this function, you can also remove the workflows manually. We added this functionality to make it easier for you.

> [!IMPORTANT]
> Please do not use the **Initialize Credit Management** action after you already have done setups. This will overwrite setups you have done already and you will have to redo those setups.

## See Also

- [Learn more about using date formulas](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-enter-date-ranges#using-date-formulas)

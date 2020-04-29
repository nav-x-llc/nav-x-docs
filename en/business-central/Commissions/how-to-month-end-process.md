# How to perform Month End Processes

Any time you post a sales transaction such as a Sales Order or Credit Memo, the system automatically creates **Commission Ledger Entries** and updates their status throughout your normal processes. This is all done in the background and you do not have to do anything. When it is time to pay commissions to your salespeople, there are some manual processes that need to be done.

We could automate those processes and then you would not have to touch anything, but we did not want to make everything completely automated for the simple fact that there would not be any way that you could review the commissions that are going to be paid to your salespeople and therefore would not be able to find any setup issues or other issues that you would want to take care of before the commissions are paid out.

## Post Cost to G/L

[!include[post-cost-to-gl-report](includes/post-cost-to-gl-report.md)]

This will show the request page for the task **[Post Commission To G/L](report-post-commission-to-gl.md)**. If you want to run a test report to see what the General Ledger impact will be, you can run the report without checking the flag **Post**. The report will then show the details, but will not post anything. Once you are satisfied, you can select the **Post** flag and print the report.

> [!NOTE]
> The report will not post any transactions in preview mode, so to post the actual transactions to the G/L, you have to select **Print**. You can print it to a PDF, if you want to save a tree.

## Process Commissions

### Process regular Commissions

To process commissions and pay those to the salespeople, you choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Process Commission**, and follow the related link. This task provides you with various options that are described in more detail in the [Process Commission Report](report-process-commission.md). You can pay external salespeople via normal A/P check runs and internal salespeople through integrated payroll or manually as well.

Regardless on how you process commissions, you need to define the **Last Payable Date** on the report options as well as the **Posting Date**. The **Last Payable Date** should be set to the month end that you are processing.

#### Processing external Salespeople

To process external salespeople, you must have a **Vendor No.** defined on the [**Salesperson Card**](salesperson-setup.md). When you then check the option **Create Purchase Invoices**, the system will create a purchase invoice for each salesperson with the appropriate details and leaves these purchase invoices open for your review. You can review those purchase invoices and then post the invoices. Once they are posted, they will be included in the next A/P check run automatically.

#### Processing internal Salespeople

If you have internal salespeople that you want to pay through an integrated payroll system, you must define a **Salesperson Code** for each **Employee** representing a salesperson. When you then choose to **Create Employee Payment Journal** and define the appropriate details, the system will create an employee payment journal line for each salesperson. You can then review this journal and post it. This will create **Employee Payment Ledger Entries** that can be picked up by your integrated payroll solution.

If you do not have payroll integrated, but you want to still produce a report to enter details into your payroll system for payment, we recommend exporting the **Commission Ledger Entries** to Excel and using this export for your standalone payroll system. Once this payment information is entered into your payroll, you want to select **Process Manual Commissions**. This will mark all Commission Ledger Entries as paid without creating purchase invoices or employee payment ledger entries.

### Process Manager Commissions

If you have manager commissions that should be paid to sales managers, the system automatically processes those at the time of running the **Process Commission** task. You do not have to perform any additional steps.

## Send out Commission Reports

You can print the report and provide those details to your salespeople. We recommend printing to PDF at that point so that you can split this easily or send the document via email. If you want to automate this task, you can also configure **[Automatic Emailing](commission-setup.md)** in the setup. This will then send an email with the commission report attached at a given time and day.

## See Also

- [Commission Setup](commission-setup.md)
- [Post Commission To G/L](report-post-commission-to-gl.md)
- [Setup Salesperson](salesperson-setup.md)

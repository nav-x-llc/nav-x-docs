# How To Process Sales Orders

## Entering Sales Documents

While you enter sales orders or sales invoices, you can see the credit status of a customer immediately right underneath the **Lines** in the field **Customer Credit Status**. The same information is also shown in the **Credit Management** fact box. The status is automatically updated when lines are entered and recalculated based on the updated order or invoice amount.

## Releasing Sales Documents

At the time of releasing the order, the NAV-X Credit Management app will perform a final credit check and will either let the document be released or will place the document on hold. If the document fails the credit check, a page is displayed with the total customer credit status, explaining why the document would be placed on hold. If you do not want to place the order on hold, you can select **No** and the release process is cancelled. You can still make changes to the document. However, you will not be able to release the order without approval, unless you reduce the order amount so that the customer's total outstanding amount is below the credit limit and/or the customer pays outstanding invoices.

When the document is actually placed on hold, you will see the status of the sales document in the **Credit Management** fast tab. It will show the last user that tried to release the order as well as when the release was attempted. Additionally, you will see, if the order is **On Hold Above Limit** or **On Hold Past Due**.

At the same time, an approval request will be sent to the defined approver for this sales document. Your process is now complete until the order is approved and removed from hold.

## See Also

- [Use Approval Workflows](https://docs.microsoft.com/en-US/dynamics365/business-central/across-how-use-approval-workflows)

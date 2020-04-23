# Report Credit Card Payment Import

Customers can sign on to the customer portal and pay open invoices via the customer portal using existing or newly entered credit cards. Customers also can pay an invoice through the Payment Page that can be accessed via a link on unposted invoices that are sent to your customers via email.

These payments have to be imported into Business Central again so that they can be applied to the open invoices.  The process is setup to run automatically on the job queue, so this process typically should not be needed to be executed.

You can start the process by choosing ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Credit Card Payment Import**, and then choose the related link.

Once you select **OK**, the process will import all open payments from the gateway. These payments will be applied to the open invoices and the invoices will be closed out. Once these payments are successfully applied to the invoices in Business Central, the payment will be marked as applied in the gateway as well and the paid invoice is updated and removed from the list of open invoices in the customer portal.

# Report Credit Card Purge Data for Sandbox

If you create a sandbox environment as a copy from the production environment, you will have all the data and setups in the sandbox environment. This includes your customers' live credit card information as well as the credentials to access the live merchant account on the gateway. This can result in accidentally charging your customers' credit cards when testing some functionality. Therefore, you want to use this process to remove the live information from the credit card app.

You can start the process by choosing ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Credit Card Purge Data for Sandbox**, and then choose the related link.

Once you click **OK**, you will have to confirm twice that you actually want to do this to ensure that you don't run this process by accident. The app then will remove all payment methods, all payment entries, and the credentials from the sandbox environment.

> [!NOTE]
> After you removed all data, you have to go into the [Credit Card Setup](credit-card-setup.md) and enter the test credentials that you have received from the gateway. You can then use the process [Payment Method Import](report-payment-method-import.md) to import any payment methods that are already defined in the gateway from previous testing.

## See Also

- [Credit Card Setup](credit-card-setup.md)
- [Payment Method Import](report-payment-method-import.md)

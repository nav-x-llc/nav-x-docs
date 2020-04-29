# Credit Card Trial Setup

Before you can try out NAV-X Credit Card, you need a test merchant account. If you have one already, you can skip ahead and either use the [Assisted Setup](getting-started.md) to configure NAV-X Credit Card with the test credentials or follow the steps below to update the [Credit Card Setup](credit-card-setup.md) with this information.

## Requesting Test Merchant Credentials

If you want to try out NAV-X Credit Card with our free trial, you can request test merchant credentials on our [Free Trial](http://dynamics365creditcard.nav-x.com/free-trial/) page. If you have not yet signed up for a Microsoft Dynamics 365 Business Central tenant, you can sign up for a free trial at the [Microsoft Dynamics 365 Trial](https://trials.dynamics.com/Dynamics365/Signup/businesscentral) page. Once you have your solution provisioned, you can add the NAV-X Credit Card app directly from the [AppSource marketplace](https://appsource.microsoft.com/en-us/product/dynamics-365-for-financials/PUBID.navx%7CAID.1b9fd790-1e26-43e2-8071-eaad88403002%7CPAPPID.344c6727-ea41-41fa-9b56-2fba703813b8). If you have questions about the installation process of an app through Microsoft AppSource, you can review the Microsoft Dynamics 365 Business Central [documentation](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-extensions).

Once the app is installed and you start the Assisted Setup, you will be asked to enter your email address. This email address is used to send you test merchant credentials as well as contacting you about an application for a live merchant. If you already requested test credentials, you do not have to fill in this email address.

Please note that we have to generate keys for you for testing, this can take a day or two, but we will get back to you as soon as possible in the order of received requests.

## Entering Test Merchant Credentials

To start the NAV-X Credit Card Setup, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Credit Card Setup**, and then choose the related link. You can also find the setup in the **Manual Setup** (*Setup & Extensions > Manual Setup*). Please select **Credit Card Setup** from the options.

The Credit Card Setup has a fast tab called **Connection**. This fast tab contains fields with **Security Id**, **User Id**, and the **Password** required to connect to a merchant account. You can enter the test merchant credentials in those fields to try out the functionality. You can also enter live merchant credentials in those fields, if you have received them from the gateway already.

> [!IMPORTANT]
> You cannot switch between merchant credentials and still use credit cards entered, if those credentials are for different merchant accounts. For instance, test and live merchants are different merchants. Please make sure that you use the sandbox for testing purposes.

## See Also

- [Assisted Setup](getting-started.md)
- [Credit Card Setup](credit-card-setup.md)
- [Free Trial](http://dynamics365creditcard.nav-x.com/free-trial/)

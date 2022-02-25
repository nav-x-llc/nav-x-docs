# Credit Card Trial Setup

Before you can try out NAV-X Credit Card, you need a test merchant account. If you have one already, you can skip ahead and either use the [Assisted Setup](getting-started.md) to configure NAV-X Credit Card with the test credentials or follow the steps below to update the [Credit Card Setup](credit-card-setup.md) with this information.

## Requesting Test Merchant Credentials

If you want to try out NAV-X Credit Card with our free trial, you can request test merchant credentials on our [Free Trial](http://dynamics365creditcard.nav-x.com/free-trial/) page. If you have not yet signed up for a Microsoft Dynamics 365 Business Central tenant, you can sign up for a free trial at the [Microsoft Dynamics 365 Trial](https://trials.dynamics.com/Dynamics365/Signup/businesscentral) page. Once you have your solution provisioned, you can add the NAV-X Credit Card app directly from the [AppSource marketplace](https://appsource.microsoft.com/en-us/product/dynamics-365-for-financials/PUBID.navx%7CAID.1b9fd790-1e26-43e2-8071-eaad88403002%7CPAPPID.344c6727-ea41-41fa-9b56-2fba703813b8). If you have questions about the installation process of an app through Microsoft AppSource, you can review the Microsoft Dynamics 365 Business Central [documentation](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-extensions).

## Entering Test Merchant Credentials

To enter your test merchant credentials, you can create a new merchant or you can also update an existing merchant. To manage merchants and update their information, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Merchant Accounts**, and then choose the related link.

The Merchant Account list shows all merchants that are setup. Based on the "Merchant Type" and the "Description", you can select the proper merchant that is already created and enter your test credentials. If you do not have a merchant created yet that you can use, please [create a new merchant](merchant-setup.md#enter-new-merchant).

Please open the Merchant Card by clicking on the description or selecting the action **Setup**. You will not be able to enter credentials in a *Test merchant*. If you are on a merchant for the gateway, however, you find a fast tab called **Authentication**. This fast tab contains fields with **Security Id**, **User Id**, and the **Password** required to connect to a merchant account. You can enter the test merchant credentials in those fields to try out the functionality. 

> [!IMPORTANT]
> Once the merchant is updated, you must validate the actual merchant being used on transactions. You can find the **Default Merchant** defined on the [Credit Card Setup](credit-card-setup.md).

## See Also

- [Assisted Setup](getting-started.md)
- [Credit Card Setup](credit-card-setup.md)
- [Free Trial](http://dynamics365creditcard.nav-x.com/free-trial/)
- [Merchant Accounts](merchant-setup.md)

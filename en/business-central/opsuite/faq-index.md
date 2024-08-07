# Frequently Asked Questions

## System

- [I want to update my version of NAV-X OpSuite Integration](faq-index.md#i-want-to-update-my-version-of-nav-x-opsuite-integration)
- [!include[faq-system-questions](../includes/faq-system-questions.md)]

## Errors

- [An unknown error occurred communicating with the licensing server](faq-index.md#an-unknown-error-occurred-communicating-with-the-licensing-server)
- [Unable to update tenant](faq-index.md#unable-to-update-tenant)
- [Unable to see Commission Management functionality](faq-index.md#unable-to-see-opsuite-integration-functionality)

## System Answers

### I want to update my version of NAV-X OpSuite Integration

When we release a new version of NAV-X OpSuite™ Integration, you will want to upgrade to that version. The upgrade does not happen automatically, unless your environment is upgraded to a new major release. This happens in the Spring and Fall of every year. Between those major upgrades, you will need to manually update your extensions.

To update your extensions, you can log on to the *Business Central Admin Center* and select your environment. The environment would be either the production environment or one of the sandboxes you have the app installed in. After selecting the proper environment, you can then display all apps that are installed. If you have an app with an update available, it will show there and you can easily update it directly from there. More details are described in the [Microsoft Documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-apps).

As an alternative, you can also update the app directly from within Business Central. This is a little bit more work, though. To update your extensions, you can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extensions**, and then choose the related link. Alternatively, you can also select *Setup & Extensions > Extensions* from the **Role Center**. Then find the extension called **NAV-X OpSuite™ Integration** and click on **Show More Options**, which is represented by the three dots in the upper right corner of the extension. Select **Uninstall** and follow the instructions.

Once you have uninstalled the extension, please make sure that you are again on the **Extensions** page and select *Manage > Extension Marketplace*. You then can enter **NAV-X OpSuite™ Integration** in the **Search Microsoft AppSource** box. Click on the **Free Trial** button and follow the prompts. You can monitor the status of the installation from **Extensions** by selecting *Manage > Deployment Status*.

You now have installed the latest version of the extension and can start taking advantage of the latest issue fixes and features.

[!include[faq-system-answers](../includes/faq-system-answers.md)]

## Errors Answers

### An unknown error occurred communicating with the licensing server

From time to time our apps try to communicate with our licensing server to ensure that your subscription is still active. If this is not possible, you will receive an error message. There can be various reasons for this, however, the most common one is that the system does not allow the communication with our servers.

To rectify this, you can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extensions**, and then choose the related link. Alternatively, you can also select *Setup & Extensions > Extensions* from the **Role Center**. Then find the extension called **NAV-X Library by NAV-X** and click on **Show More Options**, which is represented by the three dots in the upper right corner of the extension. Select **Configure**. In the page opened, please ensure that the field **Allow HttpClient Requests** is active.

Please also [Provide details on the errors](../how-to-debug-service-errors.md) that you are receiving.

### Unable to update tenant

When using a version of our NAV-X Library prior to version 2.0.9 and upgrading to a new Business Central version, you might receive the error "Unable to update tenant". This error is caused by Microsoft changing tenant ids at the time of upgrading to a new Business Central version and our system not being able to determine the new Business Central tenant id. Please open a support ticket with us indicating your Azure Active Directory Tenant ID. We will then be able to update this in our systems.

To determine the *Azure AD Tenant Id*, please go to the question mark on the top right in Business Central and Select **Help & Support**. At the bottom under *Troubleshooting*, you will find the **Azure AD tenant**.

Please also [Provide details on the errors](../how-to-debug-service-errors.md) that you are receiving.

### Unable to see OpSuite Integration functionality

Here are various reasons why you cannot see the NAV-X OpSuite™ Integration functionality. We will go through the different reasons why you might be experiencing the issue:

1. You don't have a license
 Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **About NAV-X**, and then choose the related link to open the related page. On this page, you will see the different NAV-X apps that you have installed at the bottom under *Our Installed Apps*. Please validate that the **License Type** is set to **Trial** or **Full** and that the **Expiration Date** is in the future.

 If you do not have a license, your system administrator can validate within the Microsoft Admin Center, if you have a license assigned or if additional licenses are available to be assigned to you. If no additional licenses are available, you can buy extra licenses directly through AppSource.
2. You have a license, but the license information is not up to date
 If you have paid for the subscription, but your license information does not show up in the **About NAV-X** page, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **About NAV-X**, and then choose the related link to open the related page. Then select the action **Reset License Information**. If your license then shows up properly, please ensure that you log out and log back in again.
3. You do not have the correct permissions
 If you have the proper license and it shows up properly, please validate that your user has the proper permissions defined. Your user should either have the *SUPER* user role or the permissions provided with the app. Learn more about [Permission Setups](permission-setups.md).
4. You have to sign out and sign back in
 If you make any changes to the license or the permissions, please ensure that you log out of Business Central and log back in. When logging in, your configuration is refreshed and should then enable the Application Area that is used to show or hide the various fields. If you have not enabled credit card processing in the setup yet, you should now see a notification on the role center asking, if you want to start or complete the setup process. You can also select the Action *Setup & Extensions > Assisted Setup* and scroll down to the **NAV-X** group.

 If you cannot see the setup wizard, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Application Area**, and then choose the related link to open the related page. Please search for the application area called *NAV-X Warehouse Productivity* and validate that it has a check mark.

If you still have issues, please feel free to [contact us](https://nav-x.com/support/)

# Frequently Asked Questions

## General

- [I want to change when my commissions are payable](faq-index.md#i-want-to-change-when-my-commissions-are-payable)

## System

- [I want to update my version of NAV-X Commission Management](faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

## Errors

- [An unknown error occurred communicating with the licensing server](faq-index.md#an-unknown-error-occurred-communicating-with-the-licensing-server)
- [Unable to update tenant](faq-index.md#unable-to-update-tenant)

## General Answers

### I want to change when my commissions are payable

You can make changes to the **[Commission Setup](commission-setup.md)** at any time. However, when you make changes, those changes only apply to any future transactions. When you, for instance, have your commissions set to be payable at *Cash Receipt* and change that to *Invoice*, any new commission transactions will be payable when the invoice is posted. Any existing commission transactions will not become payable. Therefore, it is not suggested to make those changes when you have a lot of open commission ledger entries.

## System Answers

### I want to update my version of NAV-X Commission Management

When we release a new version of NAV-X Commission Management, you will want to upgrade to that version. The upgrade does not happen automatically, unless your environment is upgraded to a new major release. This happens in the Spring and Fall of every year. Between those major upgrades, you will need to manually update your extensions.

To update your extensions, you can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extensions**, and then choose the related link. Alternatively, you can also select *Setup & Extensions > Extensions* from the **Role Center**. Then find the extension called **Commission Management by NAV-X** and click on **Show More Options**, which is represented by the three dots in the upper right corner of the extension. Select **Uninstall** and follow the instructions.

Once you have uninstalled the extension, please make sure that you are again on the **Extensions** page and select *Manage > Extension Marketplace*. You then can enter **NAV-X Commission Management** in the **Search Microsoft AppSource** box. Click on the **Free Trial** button and follow the prompts. You can monitor the status of the installation from **Extensions** by selecting *Manage > Deployment Status*.

You now have installed the latest version of the extension and can start taking advantage of the latest issue fixes and features.

## Errors Answers

### An unknown error occurred communicating with the licensing server

From time to time our apps try to communicate with our licensing server to ensure that your subscription is still active. If this is not possible, you will receive an error message. There can be various reasons for this, however, the most common one is that the system does not allow the communication with our servers.

To rectify this, you can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extensions**, and then choose the related link. Alternatively, you can also select *Setup & Extensions > Extensions* from the **Role Center**. Then find the extension called **NAV-X Library by NAV-X** and click on **Show More Options**, which is represented by the three dots in the upper right corner of the extension. Select **Configure**. In the page opened, please ensure that the field **Allow HttpClient Requests** is active.

Please also [Provide details on the errors](../how-to-debug-service-errors.md) that you are receiving.

### Unable to update tenant

When using a version of our NAV-X Library prior to version 2.0.9 and upgrading to a new Business Central version, you might receive the error "Unable to update tenant". This error is caused by Microsoft changing tenant ids at the time of upgrading to a new Business Central version and our system not being able to determine the new Business Central tenant id. Please open a support ticket with us indicating your Azure Active Directory Tenant ID. We will then be able to update this in our systems.

To determine the *Azure AD Tenant Id*, please go to the question mark on the top right in Business Central and Select **Help & Support**. At the bottom under *Troubleshooting*, you will find the **Azure AD tenant**.


Please also [Provide details on the errors](../how-to-debug-service-errors.md) that you are receiving.

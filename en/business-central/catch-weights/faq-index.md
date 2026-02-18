# Frequently Asked Questions

## General

- [What is the difference between base and alternate units of measure?](#what-is-the-difference-between-base-and-alternate-units-of-measure)
- [Can I change the alternate unit of measure after setting up an item?](#can-i-change-the-alternate-unit-of-measure-after-setting-up-an-item)
- [How do I use catch weights in different transactions?](#how-do-i-use-catch-weights-in-different-transactions)

## Pricing

- [What is the difference between Default and Alternate Unit of Measure pricing?](#what-is-the-difference-between-default-and-alternate-unit-of-measure-pricing)
- [Can I have different pricing methods for different items?](#can-i-have-different-pricing-methods-for-different-items)

## Quantities and Variances

- [What is quantity tolerance and how is it used?](#what-is-quantity-tolerance-and-how-is-it-used)
- [What happens if there's a variance between the base and alternate quantities?](#what-happens-if-theres-a-variance-between-the-base-and-alternate-quantities)

## System

- [I want to update my version of Catch Weights by NAV-X](#i-want-to-update-my-version-of-catch-weights-by-nav-x)
- [!include[faq-system-questions](../includes/faq-system-questions.md)]

## Errors

- [An unknown error occurred communicating with the licensing server](#an-unknown-error-occurred-communicating-with-the-licensing-server)
- [I do not see catch weight fields in my documents](#i-do-not-see-catch-weight-fields-in-my-documents)

## General Answers

### What is the difference between base and alternate units of measure?

The **base unit of measure** is the standard unit defined on the item (e.g., "PALLET"). The **alternate unit of measure** is the catch weight unit (e.g., "KG"). When you use catch weights, quantities are tracked in both units simultaneously, allowing you to manage inventory in the unit that makes sense for your business while maintaining the standard base unit.

### Can I change the alternate unit of measure after setting up an item?

Yes, you can change the alternate unit of measure on an item at any time, but it is recommended to make this change when the item has zero or minimal inventory to avoid confusion with existing inventory levels.

### How do I use catch weights in different transactions?

Once catch weights are enabled and an item is configured with an alternate unit of measure, the alternate quantity fields automatically appear in:

- Sales and purchase documents
- Item journals
- Warehouse activities (picks, putaways, movements)
- Item tracking (lot and serial number entry)
- Physical inventory journals

Simply enter the quantity in the alternate unit field, and the system will calculate the corresponding base quantity based on the unit of measure conversion.

## Pricing Answers

### What is the difference between Default and Alternate Unit of Measure pricing?

- **Default pricing** - Unit prices are based on the base unit of measure. The system divides the price by the conversion factor to determine the price per alternate unit.
- **Alternate Unit of Measure pricing** - Unit prices are defined per the alternate catch weight unit, simplifying pricing for items sold by weight or measure.

Choose the method that matches how your vendor quotes and customers purchase items.

### Can I have different pricing methods for different items?

Yes. You can set a global default in Catch Weight Setup, but override it for individual items by setting the Catch Weight Sales Pricing or Catch Weight Purchase Pricing fields on the item card.

## Quantities and Variances Answers

### What is quantity tolerance and how is it used?

Quantity tolerance is a percentage value that defines an acceptable variance between the calculated base quantity and the actual catch weight quantity. For example, if tolerance is set to 5%, and the calculated quantity is 100 but the actual catch weight quantity is 103, the system recognizes this as within tolerance (3% variance).

The tolerance helps handle rounding differences and natural weight variations in goods. You can set a default tolerance in Catch Weight Setup and override it per item.

### What happens if there's a variance between the base and alternate quantities?

The system tracks both quantities independently. If a variance exceeds the configured tolerance:

- You may need to manually adjust one quantity to match the other
- Consider creating an inventory variance entry if stock counts reveal true discrepancies
- Review the tolerance settings for items that frequently have variance issues

## System Answers

### I want to update my version of Catch Weights by NAV-X

When we release a new version of the NAV-X Catch Weights Application, you will want to upgrade to that version. The upgrade does not happen automatically, unless your environment is upgraded to a new major release or you have your environment configured to upgrade apps also during minor updates. This happens in the Spring and Fall of every year. Between those major upgrades, you will need to manually update your extensions.

To update your extensions, you can log on to the *Business Central Admin Center* and select your environment. The environment would be either the production environment or one of the sandboxes you have the app installed in. After selecting the proper environment, you can then display all apps that are installed. If you have an app with an update available, it will show there and you can easily update it directly from there. More details are described in the [Microsoft Documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-apps).

You now have installed the latest version of the extension and can start taking advantage of the latest issue fixes and features.

[!include[faq-system-answers](../includes/faq-system-answers.md)]

## Errors Answers

### An unknown error occurred communicating with the licensing server

This error indicates a connectivity issue with the NAV-X licensing system. Please verify:

1. Your internet connection is stable
2. Your firewall allows access to external services
3. Try restarting your Business Central session

If the problem persists, please contact [NAV-X Support](https://nav-x.com/support/).

### I do not see catch weight fields in my documents

If catch weight fields are not appearing in your sales orders, purchase orders, or other documents, please check:

1. Catch Weight Management is enabled (Catch Weight Setup > Enable Catch Weight Management)
2. The item has an alternate unit of measure configured
3. Your user account has the correct permissions assigned (NAVX CWM STANDARD permission set)
4. Try closing and reopening the document page

If the issue persists, contact [NAV-X Support](https://nav-x.com/support/).

### Allow HttpClient Requests for licensing server communication

From time to time our apps try to communicate with our licensing server to ensure that your subscription is still active. If this is not possible, you will receive an error message. There can be various reasons for this, however, the most common one is that the system does not allow the communication with our servers.

To rectify this, you can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extensions**, and then choose the related link. Alternatively, you can also select *Setup & Extensions > Extensions* from the **Role Center**. Then find the extension called **NAV-X Library by NAV-X** and click on **Show More Options**, which is represented by the three dots in the upper right corner of the extension. Select **Configure**. In the page opened, please ensure that the field **Allow HttpClient Requests** is active.

Please also [Provide details on the errors](../how-to-debug-service-errors.md) that you are receiving.

### Unable to see Custom Fields by NAV-X functionality

There are various reasons why you cannot see the Custom Fields by NAV-X functionality. We will go through the different reasons why you might be experiencing the issue:

1. You don't have a license

   Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **About NAV-X**, and then choose the related link to open the related page. On this page, you will see the different NAV-X apps that you have installed at the bottom under *Our Installed Apps*. Please validate that the **License Type** is set to **Trial** or **Full** and that the **Expiration Date** is in the future.

2. You have a license, but the license information is not up to date

   If you have paid for the subscription, but your license information does not show up in the **About NAV-X** page, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **About NAV-X**, and then choose the related link to open the related page. Then select the action **Reset License Information**. If your license then shows up properly, please ensure that you log out and log back in again.

3. You do not have the correct permissions

   If you have the proper license and it shows up properly, please validate that your user has the proper permissions defined. Your user should either have the *SUPER* user role or the permissions provided with the app. Learn more about [Permission Setups](permission-setups.md).

4. You have to sign out and sign back in

   If you make any changes to the license or the permissions, please ensure that you log out of Business Central and log back in. When logging in, your configuration is refreshed and should then enable the Application Area that is used to show or hide the various fields. If you have not enabled credit card processing in the setup yet, you should now see a notification on the role center asking, if you want to start or complete the setup process. You can also select the Action *Setup & Extensions > Assisted Setup* and scroll down to the **NAV-X** group.

   If you cannot see the setup, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Application Area**, and then choose the related link to open the related page. Please search for the application area called *NAV-X Custom Fields* and validate that it has a check mark.

If you still have issues, please feel free to [contact us](https://nav-x.com/support/)

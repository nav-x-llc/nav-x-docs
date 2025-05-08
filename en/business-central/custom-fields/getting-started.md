# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the Custom Fields Setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](permission-setups.md).

## To start the Setup

When you are on the role center and have not completed the setup for the NAV-X Custom Fields app, you will see a notification asking "Do you want to get started with NAV-X Custom Fields?". Select **Click here to run the setup** to start the Setup. Alternatively, you can also choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Custom Fields Setup**, and then choose the related link.

[!include[eula](../includes/eula.md)]

Currently, the only option on the *Custom Fields Setup* is the ability to **Enable Custom Field Management**. If this is checked, the functionality can be used.

## To set up the Custom Fields

To setup the different custom fields that will be used, please open the page **Custom Fields Definitions**. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Custom Fields Setup**, and then choose the related link.

Here you can setup the custom fields you want to use and where you want to use them. The following fields can be configured:

[!include[table-definition](includes/table-definition.md)]

Read more details about the [Custom Fields Definitions page](page-customfield-definitions.md).

Once this is defined, the initial setup is completed and the fields can be used. However, there are several other things that can be defined to allow even further customization.

## Custom Values

For *Code* fields, you can define a list of custom values. If those are defined, those values are the only values that can be used and entering other values will display an error message. The following fields can be configured:

| | |
|-|-|
| Value | The value that will be entered or shown in the custom field when it is used. |
| Description | The description of the code. |

Read more details about the [Custom Values Page](page-customfield-custom-values.md).

## Custom Lookup

If existing tables should be used as lookup tables for a new custom field, then the lookup can be defined using the **Custom Lookup** action.

Read more details about the [Custom Fields Lookup Page](page-customfield-lookup.md).

## Copy Field Values To Different Tables

When you define custom fields for master data, such as *Items*, these field values can then be copied to different transactions. The individual fields are shown in the rows and entities that the fields can be copied to are in the columns.

Read more details about the [Custom Fields Copy To Page](page-customfield-copy-to.md).

## Field Name Translations

If you have users in different languages, you can setup translations for the field names. The current language is always automatically added as a translation. Based on the language defined in your settings in Business Central, the proper translation will be used. If the language isn't defined in the translation, the default language will be used.

Read more details about the [Custom Fields Translations Page](page-customfield-translations.md)

## Visibility of Fields

If you setup fields, they are always shown by default on specific pages already. However, if you want to add the fields to more pages or remove fields from some pages, you can configure different pages. However, only pages that are shown in the visibility list can be activated.

Read more details about the [Custom Fields Visibility Page](page-customfield-visibility.md).

## Report Visibility

Some reports have configuration options to allow displaying the fields via a configuration. Read more details about the [Custom Fields Report Visibility Page](page-customfield-report-visibility.md). Following is a list of different reports that can display fields:

- [Sales Order Status](report-sales-order-status.md)

## See Also

- [Custom Fields Definitions page](page-customfield-definitions.md)
- [Custom Values Page](page-customfield-custom-values.md)
- [Custom Fields Lookup Page](page-customfield-lookup.md)
- [Custom Fields Copy To Page](page-customfield-copy-to.md)
- [Custom Fields Translations Page](page-customfield-translations.md)
- [Custom Fields Visibility Page](page-customfield-visibility.md)
- [Custom Fields Report Visibility Page](page-customfield-report-visibility.md)

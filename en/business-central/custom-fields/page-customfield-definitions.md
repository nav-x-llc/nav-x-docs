# Page Custom Fields Definitions

Custom Fields must be defined before they can be used. This page can be access directly when you choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Custom Fields Definitions**, and then choose the related link.

Here you can setup the custom fields you want to use and where you want to use them. The following fields can be configured:

[!include[table-definition](includes/table-definition.md)]

## Supported Tables

The following tables are currently supported:

- Bank Account
- Customer
- General Journal
- Item
- Purchase Header
- Purchase Line
- Sales Header
- Sales Line
- Vendor

## Supported Field Types

The following field types are currently supported:

- Code
- Boolean
- Decimal
- Text

## Maximum Length

The maximum length is only possible to be configured for Code and Text fields. If the **Max. Length** is 0, then the maximum length of the field is defined as follows:

| Field Type | Field No. | Max. Length |
|-|-|-|
| Code | 1 | 20 |
| Code | 2 | 20 |
| Code | 3 | 50 |
| Code | 4 | 50 |
| Code | 5 | 50 |

## Actions

### Values action

For *Code* fields, you can define a list of valid options in a separate table. These then will be the only options that you can enter in the fields on the pages. Every other entry will cause an error.

Please see more details on the [Custom Values Page](page-customfield-custom-values.md).

### Copy To action

When you define fields, you can also define that those fields are copied to other pages. When you select the *Copy To* action, the page opens filtered on the **Table** of the current record and will allow you to define the tables the fields should be copied to for the entire table. The page will only show allowed actions, for instance:

| Copy From | Copy To |
|-|-|
| Item | Sales Line |

Please see more details on the [Custom Fields Copy To Page](page-customfield-copy-to.md).

### Custom Lookup action

When you define fields, you can also define that those fields can only have a value from a different table (lookup table). While you can define values for those lookups through the **Values** action, you can also select existing tables within Business Central by defining *Custom Lookups*.

Please see more details on the [Custom Fields Lookup Page](page-customfield-lookup.md).

### Translations action

If you have users in different languages, you can setup translations for the field names. The current language is always automatically added as a translation. Based on the language defined in your settings in Business Central, the proper translation will be used. If the language isn't defined in the translation, the default language will be used.

Please see more details on the [Custom Fields Translations Page](page-customfield-translations.md).

### Visibility action

If you setup fields, they are always shown by default on specific pages already. However, if you want to add the fields to more pages or remove fields from some pages, you can configure different pages. However, only pages that are shown in the visibility list can be activated.

> [!NOTE]
> Opening the *Custom Fields Visibility* page from this action will open the page for the current field only. See [Visibility (All Fields)](page-customfield-definitions.md#visibility-all-fields) below.

Please see more details on the [Custom Fields Visibility Page](page-customfield-visibility.md).

### Report Visibility action

Some reports have configuration options to allow displaying the fields via a configuration. Following is a list of different reports that can display fields:

- [Sales Order Status](report-sales-order-status.md)

> [!NOTE]
> Opening the *Report Visibility* page from this action will open the page for the current field only. See [Report Visibility (All Fields)](page-customfield-definitions.md#report-visibility-all-fields) below.

Please see more details on the [Custom Fields Report Visibility Page](page-customfield-report-visibility.md).

### Visibility (All Fields)

If you setup fields, they are always shown by default on specific pages already. However, if you want to add the fields to more pages or remove fields from some pages, you can configure different pages. However, only pages that are shown in the visibility list can be activated.

Please see more details on the [Custom Fields Visibility Page](page-customfield-visibility.md).

### Report Visibility (All Fields)

Some reports have configuration options to allow displaying the fields via a configuration.

Please see more details on the [Custom Fields Report Visibility Page](page-customfield-report-visibility.md).

## See Also

- [Custom Values Page](page-customfield-custom-values.md)
- [Custom Fields Copy To Page](page-customfield-copy-to.md)
- [Custom Fields Lookup Page](page-customfield-lookup.md)
- [Custom Fields Translations Page](page-customfield-translations.md)
- [Custom Fields Visibility Page](page-customfield-visibility.md)
- [Custom Fields Report Visibility Page](page-customfield-report-visibility.md)

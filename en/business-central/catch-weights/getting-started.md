# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be set up before you begin using Catch Weights to ensure that users can access the setup and use the functionality properly. You can find more information under [Permission Setups](permission-setups.md).

## Enable Catch Weight Management

When you are on the role center and have not completed the setup for the NAV-X Catch Weights app, you will see a notification asking "Do you want to get started with Catch Weights?". Select **Click here to run the setup** to begin. Alternatively, you can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Catch Weight Setup**, and then choose the related link.

[!include[eula](../includes/eula.md)]

The *Catch Weight Setup* page contains the key configuration options for the application. The main setting is **Enable Catch Weight Management**, which must be checked to activate the functionality.

## Configure Basic Settings

On the Catch Weight Setup page, you can configure:

- **Enable Catch Weight Management** - Activates the catch weight functionality across Business Central
- **Catch Weight Sales Pricing** - Determines whether sales prices are based on the base unit or the alternate (catch weight) unit of measure
- **Catch Weight Purchase Pricing** - Determines whether purchase prices are based on the base unit or the alternate unit of measure
- **Default Alt. Quantity Tolerance %** - Sets the default tolerance percentage for handling quantity variances between base and alternate units

Learn more about pricing options in [How to set up pricing for catch weight items](how-to-setup-pricing.md).

## Set Up Unit of Measure Groups

Define which units of measure can be used as catch weight units across your items. You can organize them into groups and optionally limit which units can be used as catch weights for items assigned to a specific group.

Read more details in the [Unit of Measure Groups page](page-catchweight-uom-groups.md) or see [How to set up UOM groups](how-to-setup-uom-groups.md).

## Configure Items for Catch Weights

For each item you want to track in dual units of measure:

1. Open the **Item Card**
2. In the Catch Weights section, select the alternate unit of measure in the **Alternate Unit of Measure** field
3. Optionally configure:
   - **Catch Weight Sales Pricing** - Override the global setting for this specific item
   - **Catch Weight Purchase Pricing** - Override the global setting for this specific item

Learn more in [How to set up catch weights for an item](how-to-setup-catch-weights-item.md).

## Configure Unit of Measure Details

For each item's unit of measure, you can configure:

- **Catch Weight Rounding Type** - The rounding method to use for this UOM (Standard, Down, Up, Nearest)
- **Catch Weight Rounding Precision** - The decimal places to which quantities should be rounded
- **Catch Weight UOM Group** - Link the unit of measure to a group for consistency across items

## Next Steps

Once the basic setup is complete, you can start using Catch Weights in your daily operations:

- [How to use catch weights in sales and purchase orders](how-to-use-catch-weights-sales-purchase.md)
- [How to manage catch weights in warehouse locations](how-to-catch-weights-warehouse-locations.md)
- [How to manage catch weights with lot tracking](how-to-catch-weights-lot-tracking.md)
- [How to handle catch weight variances](how-to-handle-catch-weight-variances.md)

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

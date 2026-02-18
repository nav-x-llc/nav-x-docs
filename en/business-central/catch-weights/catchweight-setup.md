# Catch Weights Setup

The Catch Weights Setup page contains the core configuration settings for the NAV-X Catch Weights application. This page is accessed through the setup notification or by searching for "Catch Weight Setup" in the search bar.

## Enable Catch Weights

The primary setting that activates all Catch Weights functionality is:

- **Enable Catch Weight Management** - When checked, this enables the entire Catch Weights feature set across Business Central, including alternate quantity fields in documents, journals, and warehouse activities.

## Configure Pricing Methods

Catch Weights supports two pricing approaches:

### Sales Pricing

- **Default** - Sales prices are based on the base unit of measure. Quantities are converted from the alternate unit to the base unit for pricing calculations.
- **Alternate Unit of Measure** - Sales prices are based on the alternate (catch weight) unit of measure.

### Purchase Pricing

- **Default** - Purchase prices are based on the base unit of measure.
- **Alternate Unit of Measure** - Purchase prices are based on the alternate (catch weight) unit of measure.

See [How to set up pricing for catch weight items](how-to-setup-pricing.md) for detailed guidance on choosing the right pricing method.

## Configure Tolerance Settings

- **Default Alt. Quantity Tolerance %** - Sets the default tolerance percentage for handling rounding and quantity variances. When the alternate quantity is within this tolerance, the system can automatically adjust outstanding quantities to match the calculated alternate quantity.

See [How to handle catch weight variances](how-to-handle-catch-weight-variances.md) for more information.

## Configure Unit of Measure Groups

- **Default UOM Group Blank** - When checked, new item unit of measures will be created without a unit of measure group assignment by default. This allows more flexibility when setting up items.

See [How to set up UOM groups](how-to-setup-uom-groups.md) for more details.

## See Also

- [Getting Started](getting-started.md)
- [Unit of Measure Groups](page-catchweight-uom-groups.md)
- [How to set up pricing for catch weight items](how-to-setup-pricing.md)

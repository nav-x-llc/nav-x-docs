# How to Set Up Catch Weights for an Item

Before you can use catch weights, you need to configure items with an alternate unit of measure. This article walks you through the process.

## Prerequisites

- [Catch Weight Management is enabled](page-catchweight-setup.md)
- The alternate unit of measure you plan to use exists in Business Central
- You have the appropriate permissions (NAVX CWM SETUP)

## Set Up an Item for Catch Weights

1. Open the **Item List** or **Item Card**
2. Find the item you want to configure and open it
3. On the **Item Card**, locate the **Catch Weights** section (near the bottom of the page)
4. In the **Alternate Unit of Measure** field, enter the code of the unit of measure you want to use as the catch weight unit (e.g., "KG" for kilogram)
5. Verify the alternate unit is correct by checking the **Item Unit of Measure** table to ensure the conversion factor is configured

## Configure Item-Level Pricing (Optional)

By default, items use the pricing method defined in Catch Weight Setup. To override this for a specific item:

1. In the **Catch Weight Sales Pricing** field, select:
   - **Default** - Use base unit pricing
   - **Alternate Unit of Measure** - Use catch weight unit pricing

2. In the **Catch Weight Purchase Pricing** field, select:
   - **Default** - Use base unit pricing
   - **Alternate Unit of Measure** - Use catch weight unit pricing

## Configure Item-Level Tolerance (Optional)

1. In the **Alt. Quantity Tolerance %** field, enter the tolerance percentage for this item
2. This overrides the default tolerance set in Catch Weight Setup

## Set Up Unit of Measure Conversion

When you set an alternate unit of measure, you need to ensure the conversion factor is configured:

1. Select **Item Units of Measure** from the Item Card
2. Find or create the alternate unit
3. In the **Qty. per Unit of Measure** field, enter the conversion factor
   - Example: If 1 PALLET = 20 BOXES, enter 20
4. Optionally configure:
   - **Catch Weight Rounding** - Rounding method for catch weight calculations
   - **Catch Weight Rounding Precision** - Number of decimal places for rounding
   - **Catch Weight UOM Group** - Assign the unit to a group for organization

## Verify the Setup

After setting up catch weights for an item:

1. Open a **Sales Order** or **Purchase Order**
2. Add the item to a line
3. You should see an **Alt. Qty.** field next to the **Quantity** field
4. The system will automatically calculate the alternate quantity based on your entry

## Example Scenario

You have a beverage item sold by the case (CS) but tracked by the bottle (BTL):

1. Open the Item Card for the beverage
2. Set **Alternate Unit of Measure** to "BTL"
3. Go to **Item Units of Measure**
4. For the "CS" unit, set **Qty. per Unit of Measure** to 12 (12 bottles per case)
5. For the "BTL" unit, set **Qty. per Unit of Measure** to 1
6. Now when you sell 10 CS, the system automatically shows 120 BTL in the alternate quantity

## Troubleshooting

### The Alt. Qty. field doesn't appear in documents

- Verify Catch Weight Management is enabled in Setup
- Confirm the item has an alternate unit of measure configured
- Check that your user has the NAVX CWM STANDARD permission set

### The alternate quantity doesn't calculate correctly

- Verify the conversion factor in the Item Units of Measure is correct
- Check the rounding settings for the unit of measure
- If using rounding, the calculated quantity may differ slightly due to precision

## See Also

- [Getting Started](getting-started.md)
- [How to set up UOM groups](how-to-setup-uom-groups.md)
- [How to set up pricing for catch weight items](how-to-setup-pricing.md)
- [Unit of Measure Groups](page-catchweight-uom-groups.md)

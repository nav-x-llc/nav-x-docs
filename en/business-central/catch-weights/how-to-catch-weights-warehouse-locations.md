# How to Manage Catch Weights in Warehouse Locations

When your Business Central installation includes warehouse management, catch weights are integrated throughout the warehouse workflows including picks, putaways, and movements. This article explains how to use catch weights in warehouse operations.

## Prerequisites

- Catch Weights enabled in Catch Weight Setup
- Warehouse Management is configured in your Business Central
- Items are configured with alternate units of measure
- Your warehouse location is set up for either Bin Mandatory or other warehouse configurations

## Understanding Warehouse Catch Weights

In warehouse operations, you track both quantities:

| Scenario | Example |
| --- | --- |
| Performing a pick | Pick 8 CS, which represents 96 BTL |
| Recording a putaway | Put away 96 BTL, which is 8 CS |
| Counting inventory | Physical inventory shows 500 BTL on hand = 41.67 CS |
| Bin management | Bin contains 96 BTL quantity (shown as 8 CS with Alt. Qty. of 96) |
| Performing a pick | Pick 8 CS, which represents 96 BTL |
| Recording a putaway | Put away 96 BTL, which is 8 CS |
| Counting inventory | Physical inventory shows 500 BTL on hand = 41.67 CS |
| Bin management | Bin contains 96 BTL quantity (shown as 8 CS with Alt. Qty. of 96) |

## Working with Warehouse Picks

### Creating a Pick from Sales Orders

1. Create a Sales Order with items that have catch weights
2. Post or release the order (depending on warehouse configuration)
3. Create a **Warehouse Pick** (or it's automatically created with the order)
4. The pick lines show:
   - **Qty. to Handle** (base unit)
   - **NAVX CWM Qty. to Handle** (alternate unit)
   - **Qty. Handled** and corresponding catch weight quantity

### Performing the Pick

1. On the **Warehouse Pick**, go to the line for the catch weight item
2. In **Qty. to Handle**, enter the quantity you're picking in the base unit
3. Or in **NAVX CWM Qty. to Handle**, enter the quantity in the catch weight unit
4. The system automatically calculates the corresponding quantity
5. Verify the **Qty. Handled** updates correctly
6. Complete other lines
7. Post the pick

### Example: Pick 20 Boxes = 240 Bottles

- Item: Beverage bottles (Base Unit: BOX, Alternate: BTL, 1 BOX = 12 BTL)
- Pick task: Get 240 BTL from bin to ship to customer

**Process:**

1. Open the Warehouse Pick
2. On the beverage line:
   - **Qty. to Handle**: 20 (boxes)
   - **NAVX CWM Qty. to Handle**: 240 (bottles)
3. Verify both quantities match the conversion
4. Pick the items
5. Post the pick

## Working with Warehouse Putaways

### Creating Putaway from Receipts

1. Post a **Purchase Receipt** with catch weight items
2. Create or automatically generate a **Warehouse Putaway**
3. The putaway lines show quantities in both units

### Performing the Putaway

1. On the **Warehouse Putaway**, find the catch weight item line
2. In the **Qty. to Handle** field, enter the base unit quantity
3. Or in **NAVX CWM Qty. to Handle**, enter the catch weight quantity
4. Specify the **Bin Code** where you're putting away the item
5. The system tracks both the base and alternate quantities in the bin
6. Post the putaway

### Example: Put Away 500 KG = 500 Liters of Liquid

- Item: Beverage liquid (Base Unit: L, Alternate: KG, 1 KG ≈ 1 L)
- Receiving 500 L of beverage

**Process:**

1. Open the Warehouse Putaway
2. On the beverage line:
   - **Qty. to Handle**: 500 (liters - base unit)
   - **NAVX CWM Qty. to Handle**: 500 (kilograms - alternate)
3. Assign to appropriate bin
4. Post the putaway

## Working with Warehouse Movements

When moving items between bins, both quantities are tracked:

### Creating a Movement

1. Create a **Warehouse Movement** for the catch weight item
2. Specify the **From Bin** and **To Bin**
3. The movement lines show quantities in both units

### Performing the Movement

1. On the **Warehouse Movement** line:
   - Enter **Qty. to Handle** in the base unit
   - Or enter **NAVX CWM Qty. to Handle** in the alternate unit
   - The system calculates the corresponding quantity
2. Verify bin contents update correctly when the movement is posted

## Managing Bin Contents with Catch Weights

### Viewing Bin Contents

1. Open the **Bin Contents** page (from Warehouse > Bins > Bin Contents)
2. You see catch weight items with:
   - **Quantity** (in base unit)
   - **Unit of Measure Code** (base unit code)
   - **NAVX CWM Alt Qty.** (in alternate unit)

### Understanding Catch Weight Bin Tracking

Key points about catch weights in bins:

- Both quantities (base and alternate) are tracked simultaneously
- When you perform a pick, putaway, or movement, both update
- The bin can contain multiple units of the same item if needed
- Physical counts should verify quantities in both units

### Example: Bin Content Report

Your beverage bin might show:

| Item | Qty | UoM | Alt. Qty | Alt. UoM |
| --- | --- | --- | --- | --- |
| Beverage | 8 | CS | 96 | BTL |

This means the bin contains 8 cases = 96 bottles.

## Physical Inventory with Catch Weights

### Creating a Physical Inventory Journal

1. Create a **Physical Inventory Journal**
2. Add the catch weight item lines
3. Go to the warehouse location and count

### Recording Physical Counts

1. For each item, you need to count in one unit (typically the catch weight unit)
2. In the **NAVX CWM Alt. Qty. (Entered)** field, enter your actual count in the alternate unit
3. The system automatically calculates the base quantity
4. Variance between recorded and system quantities is calculated
5. Post the journal to update inventory

### Example: Physical Count

Your system shows 96 BTL. You count 95 BTL in the bin:

1. In **NAVX CWM Alt. Qty. (Entered)**, enter 95
2. The **Quantity (Entered)** auto-calculates to ~7.92 CS
3. Variance: -1 BTL
4. Post the journal to adjust inventory

## Registered Activities (Historical)

Posted or registered warehouse activities show both quantities:

- **Registered Pick** - Shows quantities picked in both units
- **Registered Putaway** - Shows quantities put away in both units
- **Registered Movement** - Shows quantities moved in both units

To view historical activities:

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon
2. Enter "Registered Picks" (or Putaways, Movements)
3. View the quantities in both units

## Tips for Warehouse Operations

1. **Pick by alternate unit** - If your pickers work better with catch weight units, enter in the **NAVX CWM Qty. to Handle** field
2. **Use handheld devices** - Mobile warehouse solutions support both quantity fields
3. **Train staff** - Ensure warehouse staff understand both units and when to use each
4. **Verify conversions** - Before large operations, verify conversion factors are correct
5. **Monitor variances** - Track recurring quantity discrepancies and investigate root causes

## Handling Quantity Discrepancies

If picked or put away quantities don't match:

1. Check the conversion factor is correct
2. Verify rounding settings aren't causing unexpected results
3. Review the tolerance setting - variances within tolerance may be accepted
4. Investigate if items were mishandled or miscounted

See [How to handle catch weight variances](how-to-handle-catch-weight-variances.md) for detailed variance management.

## Troubleshooting

### Catch weight quantity fields don't appear in picks/putaways

- Verify Catch Weight Management is enabled
- Confirm the item has an alternate unit assigned
- Check user permissions (NAVX CWM STANDARD required)

### Quantities don't match between base and alternate units

- Review the Item Unit of Measure conversion factor
- Check rounding configuration for the units involved
- Verify the alternate unit assignment on the item

### I can't post a warehouse activity due to quantity mismatch

- Ensure quantities are within the configured tolerance
- If quantities are significantly different, review the conversion factor
- Consider creating a quantity variance entry for overage

## See Also

- [Getting Started](getting-started.md)
- [How to set up catch weights for an item](how-to-setup-catch-weights-item.md)
- [How to manage catch weights with lot tracking](how-to-catch-weights-lot-tracking.md)
- [How to handle catch weight variances](how-to-handle-catch-weight-variances.md)

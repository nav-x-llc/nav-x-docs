# How to Manage Catch Weights with Lot Tracking

When your catch weight items use lot tracking (or serial number tracking), you can track catch weight quantities at the lot level. This article explains how to work with catch weights and item tracking together.

## Prerequisites

- Catch Weights enabled in Catch Weight Setup
- Items are configured with:
  - Alternate units of measure
  - Lot Tracking (via Item Tracking Code)
- Lot tracking is required on documents (Sales, Purchase, or both)

## Setting Up Lot Tracking for Catch Weight Items

### Configure Item Tracking Code

1. Open the **Item Tracking Codes** page
2. Create or modify a tracking code:
   - Set **Lot Nos.** to enable lot tracking
   - Set **Warranty Date Formula** if needed (e.g., shelf life)
   - Set **Expiration Date Formula** if needed
3. Save the code

### Assign Tracking Code to Item

1. Open the **Item Card** for your catch weight item
2. Set the **Item Tracking Code** to the code you created
3. Assign the **Alternate Unit of Measure** (if not already set)
4. Save

Now the item requires lot tracking on documents and you can track catch weight quantities per lot.

## Adding Lot-Tracked Items to Documents

### Sales Orders with Lot Tracking

1. Create a **Sales Order**
2. Add a line for the lot-tracked, catch-weight item
3. In the **Quantity** or **Alt. Qty.** field, enter the total quantity needed
   - The system knows tracking is required
4. Before posting, you must specify lot details:
   - Select **Item Tracking Lines** from the actions
5. On the Item Tracking Lines page:
   - **Lot No.** - The lot/batch number for this shipment
   - **Warranty Date** - Expiration/warranty date if configured
   - **Qty. to Handle** - Quantity in the base unit
   - **NAVX CWM Qty. to Handle** - Quantity in the catch weight unit
   - Enter both or the system calculates one from the other

### Example: Selling Beverages with Lot Number

- Item: Bottled Beverage (Base Unit: CS, Alternate: BTL, 1 CS = 12 BTL, Lot Tracking Required)
- Customer order: 240 bottles from specific lot

**Process:**

1. Create Sales Order
2. Add beverage item line with Qty: 20 CS (or Alt. Qty: 240 BTL)
3. Select **Item Tracking Lines**
4. New line:
   - **Lot No.**: LOT-2025-001
   - **Qty. to Handle**: 20 CS
   - **NAVX CWM Qty. to Handle**: 240 BTL
   - **Warranty Date**: 2025-12-31
5. The system now knows to ship 240 bottles from lot LOT-2025-001
6. Post the order

## Using Item Tracking Lines with Catch Weights

### Understanding the Tracking Table

When you open **Item Tracking Lines** for a catch weight item, you see:

| Field | Description |
| --- | --- |
| **Item No.** | The item being tracked |
| **Lot No.** | The lot/batch identifier |
| **Qty. to Handle (Base)** | Quantity in the base unit |
| **NAVX CWM Qty. to Handle** | Quantity in the alternate unit |
| **Warranty Date** | Expiration date for lot (if configured) |
| **Expiration Date** | Lot expiration date (if configured) |

### Entering Tracking Information

#### Option 1: Enter Base Quantity

1. In **Qty. to Handle**, enter the quantity in the base unit
2. The system auto-calculates **NAVX CWM Qty. to Handle**
3. Tab through other fields

#### Option 2: Enter Alternate Quantity

1. In **NAVX CWM Qty. to Handle**, enter the quantity in the catch weight unit
2. The system auto-calculates **Qty. to Handle**
3. Tab through other fields

#### Option 3: Use Auto-Entry (if configured)

- If your system has auto-entry enabled, lots may auto-populate
- You still verify the quantities in both units

### Multiple Lots on One Document

If a document pulls from multiple lots:

1. Create separate tracking lines for each lot
2. Each line shows its own quantity in both units
3. The total of all lines matches the document line quantity
4. Example: Order 240 bottles, but from 2 lots:
   - Line 1: LOT-001, 120 BTL
   - Line 2: LOT-002, 120 BTL
   - Total document quantity: 240 BTL

## Purchase Documents with Lot Tracking

### Recording Lot Information from Supplier

When receiving catch weight items with lot tracking:

1. Create a **Purchase Order** or **Purchase Receipt**
2. Add the catch weight item line
3. Before posting, open **Item Tracking Lines**
4. Enter lot information received from supplier:
   - **Lot No.** - Supplier's lot/batch number
   - **Qty. to Handle** or **NAVX CWM Qty. to Handle** - Quantity received
   - **Warranty/Expiration Date** - From supplier documentation
5. Post the receipt

### Example: Receiving Beverages with Tracking

- Supplier sends 500 bottles from lot ABC123
- Base unit: CS, Alternate: BTL, 1 CS = 12 BTL

**Process:**

1. Create Purchase Receipt
2. Add beverage item, Qty: ~41.67 CS (or Alt. Qty: 500 BTL)
3. Select **Item Tracking Lines**
4. Enter:
   - **Lot No.**: ABC123
   - **Qty. to Handle**: 41.67 CS
   - **NAVX CWM Qty. to Handle**: 500 BTL
   - **Expiration Date**: 2025-12-31
5. Post the receipt

## Warehouse Operations with Catch Weights and Lot Tracking

### Picks from Lot-Tracked Inventory

When creating a warehouse pick for a lot-tracked, catch-weight item:

1. The system often auto-suggests the lot based on FIFO or other lot selection rules
2. You see quantities in both units:
   - **Qty. to Handle** (base unit)
   - **NAVX CWM Qty. to Handle** (alternate unit)
3. Verify the lot and quantities
4. Post the pick with both quantities tracked

### Putaways to Specific Lots

When putting away lot-tracked, catch-weight items:

1. The warehouse putaway line shows both quantities
2. Assign the lot number if not already specified
3. Specify the bin and both quantities
4. Post the putaway - inventory now tracks this lot in this bin at the catch weight level

## Inventory Availability by Lot

To see catch weight availability by lot:

1. Open the **Item Availability by Lot No.** page
2. Filter for your catch weight item
3. View quantities by lot:
   - Shows base unit quantities
   - Also displays alternate quantities if configured
4. This helps when allocating to sales orders or checking shelf life

## Traceability and Lot Reporting

### Tracing Items Back to Source

Use the standard Business Central tracing features to track catch weight items by lot:

1. Go to **Item Tracing** or **Value Entries**
2. Filter by your catch weight item
3. View both base and alternate quantities in the history
4. Trace items received in a specific lot to customer shipments

### Quantity Match Between Lots

When reconciling inventory:

1. Physical count items by lot
2. Compare to system quantities in both units (base and alternate)
3. Investigate variances that exceed tolerance
4. Adjust quantities as needed

## Combining Lot Tracking with Item Tracking

### Serial Numbers + Lots

If items require both lot and serial number tracking:

1. The tracking page has columns for both
2. Each serial number can be assigned to a specific lot
3. Quantities are tracked at the individual serial level
4. Catch weights work with both lot and serial tracking

## Troubleshooting

### Item Tracking Lines doesn't show catch weight quantities

- Verify **Catch Weight Management** is enabled
- Check that the item has an **Alternate Unit of Measure** assigned
- Confirm you're working with a document type that uses item tracking

### The lot field doesn't populate automatically

- Check that the **Item Tracking Code** is correctly assigned to the item
- Verify **Lot Tracking** is enabled in the tracking code
- Ensure the document has the lot tracking requirement set correctly

### Quantities don't match between tracking lines and document

- Check the conversion factor between units
- Verify rounding settings aren't causing discrepancies
- Confirm the quantity entered is correct for the unit

### I can't post due to quantity tracking mismatch

- Ensure the total tracked quantities match the document line quantity (within tolerance)
- Check that all required lots are entered
- Verify lot numbers are correctly formatted

## Best Practices

1. **Always verify lots** - Confirm lot details before posting documents
2. **Use expiration dates** - Ensure shelf-life tracking is enabled and populated
3. **Track in alternate unit** - Consider tracking in the catch weight unit for more granular control
4. **Monitor tolerance** - Ensure tolerance settings account for lot-level variances
5. **Regular reconciliation** - Periodically reconcile lot quantities in both units

## See Also

- [Getting Started](getting-started.md)
- [How to set up catch weights for an item](how-to-setup-catch-weights-item.md)
- [How to manage catch weights in warehouse locations](how-to-catch-weights-warehouse-locations.md)
- [How to handle catch weight variances](how-to-handle-catch-weight-variances.md)

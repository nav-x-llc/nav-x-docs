# How to Use Catch Weights in Sales and Purchase Documents

Once your items are configured with catch weights, you can start using them in daily transactions. This article explains how to work with dual quantities in sales and purchase documents.

## Understanding Dual Quantities in Documents

When you add a catch weight item to a sales order, purchase order, or other document, you'll see:

| Field | Description |
| --- | --- |
| **Quantity** | The quantity in the base unit of measure (the standard item unit) |
| **Unit of Measure Code** | Always shows the base unit |
| **Alt. Qty.** | The quantity in the alternate (catch weight) unit of measure |

The system automatically calculates one based on the other using the configured conversion factor.

## Adding Items to Sales Documents

### Sales Orders, Quotes, and Invoices

1. Open or create a **Sales Order**, **Sales Quote**, or **Sales Invoice**
2. Add a **New Line**
3. In the **Type** field, select **Item**
4. In the **No.** field, select the item (it must have an alternate unit configured)
5. You now see both **Quantity** and **Alt. Qty.** fields:
   - **Enter Base Quantity** - Type in the **Quantity** field (base unit), and **Alt. Qty.** calculates automatically
   - **Enter Alternate Quantity** - Type in the **Alt. Qty.** field, and **Quantity** calculates automatically
6. The system calculates the corresponding unit price based on your pricing method
7. Continue adding lines and complete the document as normal

### Example: Sales Order for Beverage

You sell bottled beverages by the case (CS) but track by bottle (BTL):

- 1 CS = 12 BTL
- Customer wants 100 BTL

**Steps:**

1. Create a Sales Order for the customer
2. Add a line for the beverage item
3. In the **Alt. Qty.** field, enter 100
4. The **Quantity** field automatically shows 8.33 CS
5. Based on your pricing, the unit price displays per case or per bottle
6. The line amount automatically calculates

## Adding Items to Purchase Documents

### Purchase Orders, Quotes, and Invoices

The process is identical to sales documents:

1. Open or create a **Purchase Order**, **Purchase Quote**, or **Purchase Invoice**
2. Add a **New Line**
3. Select the item (with catch weight configured)
4. Enter quantity in either **Quantity** or **Alt. Qty.**
5. The system calculates the alternate quantity and pricing
6. Complete the document

### Example: Purchase Order for Beverages

Your supplier sells beverages at $8 per bottle:

- You need 500 bottles for a special order
- Your tracking unit is cases (1 CS = 12 BTL)

**Steps:**

1. Create a Purchase Order with the supplier
2. Add the beverage item line
3. In **Alt. Qty.**, enter 500
4. The **Quantity** shows approximately 41.67 CS
5. The line amount calculates at $8/BTL × 500 = $4,000

## Viewing Quantity Information

### Item Tracking for Lot/Serial Numbers

If your item uses lot or serial number tracking:

1. On the document line, select **Item Tracking Lines** from the actions
2. The tracking page shows both base and alternate quantities
3. When entering tracking information, you can specify quantities in either unit
4. The system aligns tracked quantities with document quantities

See [How to manage catch weights with lot tracking](how-to-catch-weights-lot-tracking.md) for detailed instructions.

### Availability Information

To view catch weight availability:

1. On the document line, select **Availability** from the actions
2. The availability view includes alternate quantity information
3. You can toggle between viewing availability in the base or alternate unit

## Modifying Quantities

You can change quantities at any time:

1. On a document line, modify the **Quantity** field
2. The **Alt. Qty.** automatically recalculates
3. Or modify **Alt. Qty.** and **Quantity** recalculates
4. Unit prices and line amounts update automatically

## Posted Document Quantities

After posting a document (order, invoice, receipt, shipment):

1. The posted document displays both quantities
2. **Alt. Qty.** field shows the catch weight quantity that was posted
3. This allows you to verify what was received, shipped, or invoiced in both units

To view posted documents:

- Posted Sales ShipmentsPosted Sales Invoices
- Posted Purchase Receipts
- Posted Purchase Invoices

## Handling Rounding and Variances

The system calculates alternate quantities based on the conversion factor. Rounding may occur:

### Understanding Rounding

- **Quantity rounding** - The base quantity is rounded according to the unit's settings
- **Alt. Qty. rounding** - The alternate quantity is rounded according to its unit's settings
- **Differences** - The rounded values may have small variances

### When Rounding Occurs

Rounding happens in these scenarios:

- Entering 100 BTL when the base unit is CS (100 ÷ 12 = 8.33, displayed as 8.33 or rounded based on settings)
- Calculating alternate quantity from a base quantity that doesn't divide evenly
- Using units with configured rounding precision

### Accepting Variances

The configured tolerance percentage allows the system to handle minor variances:

1. If a variance falls within the tolerance, it's considered acceptable
2. The system may automatically adjust outstanding quantities
3. Variances exceeding tolerance require manual review

See [How to handle catch weight variances](how-to-handle-catch-weight-variances.md) for variance handling details.

## Overview: Document Quantity States

| Scenario | Base Qty | Alt. Qty. | Status |
| --- | --- | --- | --- |
| New line, user enters 100 in Alt. Qty. | Auto-calculated | 100 | Ready to post |
| User changes Quantity | Modified | Auto-calculated | Updated |
| User enters variance in Alt. Qty. | May need adjustment | Differs from calculated | Potentially flagged |
| Document posted | Posted amount | Posted amount | Locked in ledger |

## Tips and Shortcuts

1. **Use Tab to switch fields** - When entering quantities, press Tab to move between Quantity and Alt. Qty.
2. **View both units side-by-side** - Scroll right to see all quantity columns
3. **Copy from previous line** - Create similar lines with the same catch weight items and modify only quantities
4. **Batch operations** - If using "Get Receipt Lines" or similar functions, catch weights are automatically included

## Troubleshooting

### Alt. Qty. field doesn't appear

- Verify the item has an alternate unit of measure assigned
- Check that Catch Weight Management is enabled
- Confirm your user has NAVX CWM STANDARD permissions

### Quantities don't calculate automatically

- Check the conversion factor in Item Units of Measure
- Verify rounding settings aren't causing unexpected results
- Ensure the alternate unit is correctly assigned to the item

### Posted quantities seem wrong

- Review the conversion factor used at the time of posting
- Check if rounding was applied
- Verify that the correct units were used in the source document

## See Also

- [Getting Started](getting-started.md)
- [How to set up catch weights for an item](how-to-setup-catch-weights-item.md)
- [How to handle catch weight variances](how-to-handle-catch-weight-variances.md)
- [How to manage catch weights with lot tracking](how-to-catch-weights-lot-tracking.md)

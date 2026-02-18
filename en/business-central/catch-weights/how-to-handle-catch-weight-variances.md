# How to Handle Catch Weight Variances

As you work with dual units of measure, you may encounter variances between the base quantity and the alternate (catch weight) quantity. This article explains how to understand, manage, and resolve these variances.

## Understanding Catch Weight Variances

A **variance** occurs when the calculated quantity in one unit doesn't match the actual or expected quantity in the other unit.

### Types of Variances

| Variance Type | Cause | Example |
| --- | --- | --- |
| **Rounding variance** | Mathematical rounding when converting between units | 100 BTL ÷ 12 = 8.33 CS (rounded to 8.33) |
| **Natural weight variance** | Normal loss of weight in perishable goods | Fruit loses 2% weight from harvest to delivery |
| **Measurement variance** | Inaccuracy in scales or measuring equipment | Actual weight measured as 99.5 kg instead of 100 kg |
| **Handling loss** | Spillage, breakage, or waste during operations | Liquid loss during transfer between containers |
| **Count variance** | Discrepancy between counted items and system quantities | Physical count shows 95 items, system shows 100 |

## Configuring Tolerance

The **Alt. Quantity Tolerance %** setting defines acceptable variances. Quantities within this tolerance are considered normal; those exceeding it may need investigation.

### Set Global Tolerance

1. Open **Catch Weight Setup**
2. In **Default Alt. Quantity Tolerance %**, enter a percentage (e.g., 5)
3. This tolerance applies to all items globally
4. Save

### Override Tolerance Per Item

For items with known variance patterns:

1. Open the **Item Card**
2. In the **Alt. Quantity Tolerance %** field, enter a specific tolerance
3. This overrides the global setting for this item
4. Save

### Example: Setting Tolerance

For beverage items where 2-3% loss is normal:

- Global tolerance: 5%
- Item-specific override: Set to 3% for beverages
- Variances up to 3% are automatically accepted
- Variances over 3% on beverages require review

## Detecting Variances

Variances surface in several scenarios:

### During Document Entry

When you manually enter both base and alternate quantities (instead of having one calculate the other):

1. On a document line, enter **Quantity** (base unit): 10 CS
2. Also enter **Alt. Qty.** (alternate unit): 95 BTL
3. System expects 120 BTL (10 × 12 conversion factor)
4. Actual is 95 BTL
5. Variance: -25 BTL (exceeds typical tolerance)
6. System may flag this for review

### During Physical Inventory

When counting inventory:

1. Create **Physical Inventory Journal**
2. System shows: 100 BTL expected
3. You count: 95 BTL actual
4. Variance: -5 BTL (within typical 5% tolerance)
5. Enter the actual count
6. The variance is recorded when you post

### In Ledger Entries

When reviewing posted transactions:

1. Open **Item Ledger Entries** or **Warehouse Entries**
2. Find a catch weight transaction
3. Review both **Quantity** (base) and alternate quantity
4. Calculate if the ratio matches the conversion factor
5. If not, a variance occurred

## Investigating Variances

### Step 1: Verify Conversion Factors

Before assuming a real variance, verify your units are correctly configured:

1. Open the **Item Card** for the variance item
2. Check the **Item Units of Measure**:
   - Find the alternate unit (catch weight unit)
   - Review **Qty. per Unit of Measure** field
   - Example: If stored as 1.2 instead of 1.0, all quantities will be 20% off
3. If incorrect, you may need to adjust historical data

### Step 2: Check Rounding Configuration

Variances can be created by rounding settings:

1. On the **Item Units of Measure**, find the alternate unit
2. Review:
   - **Catch Weight Rounding Type** - Direction (nearest, down, up)
   - **Catch Weight Rounding Precision** - Decimal places
3. Example: Rounding to whole units can create 0.5 unit variances per entry
4. Adjust rounding if too aggressive

### Step 3: Review the Original Document

Go back to the source document:

1. Find the **Posted Document** (Posted Receipt, Posted Invoice, Posted Shipment)
2. Review both quantities as they were posted
3. Check if different units were used than expected
4. Verify line-by-line that quantities are reasonable

### Step 4: Assess if Within Tolerance

Calculate the variance percentage:

**Formula:**

```plaintext
Variance % = (Actual - Expected) / Expected × 100
```

**Example:**

```plaintext
Expected: 100 BTL (8.33 CS × 12)
Actual: 95 BTL
Variance: (95 - 100) / 100 × 100 = -5%
Tolerance: 5%
Result: Within tolerance - acceptable
```

### Resolving Variances

Variances Within Tolerance: Accept and Document

If variance is within the configured tolerance:

1. This is expected and acceptable
2. No correction is needed
3. Document in your records why the variance occurred (if tracking is important)
4. Monitor if variances consistently trend in one direction

### Variances Exceeding Tolerance: Investigate Further

If variance exceeds tolerance, you need to determine the cause and correct it:

#### Option A: Adjust Quantity in Current Period

If variance occurred recently and inventory is still active:

1. Create an **Item General Journal** entry
2. Set Document Type: **Variance**
3. Enter the item and variance quantity
4. In the **Reason Code**, document why (e.g., "WEIGHT-LOSS", "COUNT-ERROR")
5. Post the journal to adjust inventory

#### Option B: Create Inventory Adjustment for Future Accuracy

If variance will recur (e.g., 2% normal loss on perishables):

1. Document the expected variance
2. Adjust the tolerance setting for the item
3. Create a procedure or note for staff explaining the variance

#### Option C: Review and Correct Root Cause

Investigate the underlying issue:

1. **Measurement error** - Recalibrate scales
2. **Conversion factor error** - Correct the Item Unit of Measure setup
3. **Handling loss** - Improve procedures to reduce loss
4. **Counting error** - Train staff or improve counting procedures

## Correcting Quantity Entries

### Correct Before Posting

If you catch a variance before posting a document:

1. On the document line, modify **Quantity** or **Alt. Qty.**
2. Allow the system to recalculate the other
3. Verify the recalculated value is correct
4. Post the corrected document

### Correct After Posting (Item Journal Adjustment)

If you discover a variance after posting:

1. Create an **Item General Journal**
2. Select the same item
3. Enter **Quantity Adjustment**:
   - In the **Quantity** field for base unit correction
   - Or configure to adjust in alternate unit
4. Post the adjustment

### Example: Correcting a Received Quantity

Supplier sent 500 BTL, but you entered 600 BTL:

1. Create an Item General Journal
2. Item: Beverage
3. Quantity: -100 BTL (negative to reduce)
4. Reason Code: RECEIVING-ERROR
5. Post to correct inventory

## Tracking Variances Over Time

### Use Reports to Monitor Trends

1. Open **Item Ledger Entries** report
2. Filter for catch weight items
3. Analyze quantities in both units over time
4. Look for patterns (e.g., consistent 2% loss over multiple receipts)

### Create a Variance Dashboard (Optional)

For high-value items, track variances:

1. By supplier (supplier's packaging)
2. By location (warehouse efficiency)
3. By time period (seasonal patterns)
4. By department (handling practices)

## Best Practices for Managing Variances

1. **Set appropriate tolerance** - Not too loose (hide real problems) or too tight (constant flagging)
2. **Document known variances** - Note items expected to have variances (perishables, liquids)
3. **Train staff** - Ensure team understands both units and why variances matter
4. **Regular review** - Periodically review variance reports for trends
5. **Immediate investigation** - For high-value items, investigate variances quickly
6. **Correct promptly** - Adjust inventory soon after discovering variances
7. **Preventive measures** - Implement processes to reduce recurrence

## Common Scenarios and Solutions

### Scenario 1: Supplier Shortage

**Situation:** You ordered 100 CS, but supplier only sent 95 CS (equivalent to 1,140 BTL instead of 1,200)

**Solution:**

1. Receive the 95 CS as posted
2. Create an Item Journal to reduce expected quantity by 60 BTL
3. Document as "SUPPLIER-SHORT"
4. Verify invoice matches received quantity

### Scenario 2: Spillage in Warehouse

**Situation:** Received 50 L of liquid, but 1 L was spilled during putaway. System shows 50 L, actual is 49 L

**Solution:**

1. Create Item Journal adjustment: -1 L
2. Reason Code: "SPILLAGE"
3. This reflects actual inventory level
4. Review if equipment needs repair or staff needs training

### Scenario 3. Rounding Creates Discrepancy

**Situation:** 100 Units ÷ 3 = 33.33. If rounding to whole units, system shows 33 but calculation expected more.

**Solution:**

1. Review rounding configuration
2. Increase rounding precision if needed
3. Accept small rounding variances as inherent to the conversion
4. Set tolerance to account for rounding

## Troubleshooting

### I can't locate where a variance originated

- Check the Item Ledger Entries for recent transactions
- Review warehouse activity history
- Search for posted documents with the item
- Look for journal entries that adjusted quantities

### The tolerance setting isn't preventing variances from flagging

- Verify the tolerance is set on the correct item (not just globally)
- Check the variance % calculation - it might exceed tolerance
- Increase tolerance if the current setting is too low

### I'm seeing variances on items that should be exact counts

- Check if rounding is being applied (should be off for count items)
- Verify the conversion factor is a whole number
- Review if item tracking is affecting quantities

## See Also

- [Getting Started](getting-started.md)
- [How to set up catch weights for an item](how-to-setup-catch-weights-item.md)
- [Catch Weights Setup](page-catchweight-setup.md)
- [How to manage catch weights in warehouse locations](how-to-catch-weights-warehouse-locations.md)

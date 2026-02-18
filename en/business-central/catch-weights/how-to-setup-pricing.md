# How to Set Up Pricing for Catch Weight Items

Catch Weights supports two pricing approaches - Default (base unit) and Alternate Unit of Measure (catch weight unit). This article guides you through selecting the right method and configuring pricing for your items.

## Understanding the Two Pricing Methods

### Default Pricing (Base Unit)

- Unit prices are posted in the base unit of measure
- The system calculates the price per catch weight unit by dividing the base price by the conversion factor
- Best when vendors quote prices in the base unit and conversion factors are straightforward
- Example: A vendor quotes $10 per palletload. If 1 pallet = 20 boxes, the system calculates $0.50 per box

### Alternate Unit of Measure Pricing (Catch Weight Unit)

- Unit prices are posted in the catch weight unit
- Prices directly correspond to the catch weight unit on documents
- Best when vendors quote prices directly in the catch weight unit or it's more convenient for your business
- Example: Your supplier quotes $0.50 per box directly, which is the price you enter

## Set Global Pricing Defaults

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon
2. Enter **Catch Weight Setup**
3. For **Sales Pricing**, select:
   - **Default** - All sales use base unit pricing (unless overridden per item)
   - **Alternate Unit of Measure** - All sales use catch weight unit pricing
4. For **Purchase Pricing**, select:
   - **Default** - All purchases use base unit pricing
   - **Alternate Unit of Measure** - All purchases use catch weight unit pricing
5. Save

## Override Pricing for Individual Items

Global settings apply to all items, but you can override them per item:

1. Open the **Item Card**
2. In the **Catch Weights** section:
   - **Catch Weight Sales Pricing** - Override global sales pricing for this item
   - **Catch Weight Purchase Pricing** - Override global purchase pricing for this item
3. Select the desired method, or leave blank to use the global default
4. Save

## Choose the Right Method for Your Business

### Use Default Pricing When

- Vendors primarily quote prices in the base unit (pallets, cases, bulk quantities)
- Your conversion factors are stable and well-documented
- Your base pricing system is complex and already established
- Example: Food distributors buying bulk items quoted in standard units

### Use Alternate Unit Pricing When

- Vendors quote prices directly in the catch weight unit (per kg, per liter, per box)
- The catch weight unit is the primary sales/purchase unit for the business
- You want pricing to be more transparent and directly match customer quotes
- Example: A beverage wholesaler quoting by bottle or case

## Examples

### Example 1: Beverage Sales (Default Pricing)

You sell beverages by the case (CS) but track by the bottle (BTL):

- 1 CS = 12 BTL
- Vendor sells at $12 per CS (base unit pricing)
- Customer buys 100 BTL

**Setup:**

- Global Sales Pricing: **Default**
- Item has Alternate UoM: **BTL**
- Sales Price: $12/CS

**Document Entry:**

- Customer orders 100 BTL
- System shows: Qty 8.33 CS (100 BTL ÷ 12) at $12/CS = $100

### Example 2: Coffee Sales (Alternate Unit Pricing)

You sell coffee by the bag (BAG) but measure weight in kilograms (KG):

- 1 BAG = 1 KG
- Vendor charges $8 per KG
- Customer buys 50 KG

**Setup:**

- Global Sales Pricing: **Alternate Unit of Measure**
- Item has Alternate UoM: **KG**
- Sales Price: $8/KG

**Document Entry:**

- Customer orders 50 KG
- System shows: Qty 50 KG at $8/KG = $400

## Register Sales and Purchase Prices

Once you've selected your pricing method, register prices using the standard pricing pages:

### Sales Prices

1. Open an **Item Card**
2. Select **Sales Prices** from the actions
3. Enter:
   - **Effective Date** - When this price starts
   - **Unit of Measure Code** - The unit the price is for:
     - Use the base unit code for **Default** pricing
     - Use the alternate unit code for **Alternate Unit** pricing
   - **Unit Price** - The price per unit
4. Save

### Purchase Prices

1. Open a **Vendor Card**
2. Select **Purchase Prices** from the actions
3. Enter:
   - **Item Number** - The item code
   - **Unit of Measure Code** - The unit the price is for
   - **Direct Unit Cost** - The cost per unit
4. Save

## Handle Rounding and Precision

When using Default pricing, the system calculates the per-unit price by dividing. This can result in rounding:

1. Configure rounding on the **Item Units of Measure**:
   - **Catch Weight Rounding Type** - Choose rounding direction
   - **Catch Weight Rounding Precision** - Set decimal places
2. Prices will be rounded according to these settings

## Verify Pricing in Documents

After setting up pricing, verify it works correctly:

1. Create a **Sales Order**
2. Add an item with catch weight pricing
3. Enter a quantity in either the base or alternate unit
4. Verify the **Unit Price** field shows the correct price
5. Check that the **Amount** is calculated correctly

## Switch Pricing Methods

If you need to change pricing methods:

1. Review all sales and purchase prices currently registered
2. Change the global setting in Catch Weight Setup
3. Update item-level overrides as needed
4. Update any sales or purchase prices that need adjustment
5. Check active documents to ensure prices are still correct

## Best Practices

1. **Document your choice** - Write down which method you use and why
2. **Be consistent** - Use the same method for related items
3. **Review historical data** - Ensure your choice aligns with how you've been quoting prices
4. **Test with a pilot item** - Before rolling out to many items, test pricing calculations
5. **Keep prices synchronized** - If you use both units, maintain accurate conversion factors

## Troubleshooting

### Prices seem incorrect

- Verify the unit of measure code in the price record matches your item's unit setup
- Check that the conversion factor between units is correct
- Review rounding settings if using Default pricing

### I can't find the pricing page

- Make sure the item is configured with an alternate unit of measure
- Some pricing pages hide if not all prerequisites are met

### Prices aren't calculated for catch weight items

- Verify that Catch Weight Management is enabled
- Check that the item has an alternate unit of measure assigned
- Ensure the correct pricing method is selected (global or item-level)

## See Also

- [Getting Started](getting-started.md)
- [How to set up catch weights for an item](how-to-setup-catch-weights-item.md)
- [Catch Weights Setup](page-catchweight-setup.md)

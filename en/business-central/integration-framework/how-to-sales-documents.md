# How to Import Sales Documents

This guide explains how to create multi-line sales documents (orders, invoices, quotes) using the Integration Framework.

## What is Sales Document Import?

Sales document import **creates sales orders, invoices, or quotes with multiple line items** from structured source data.

**Before:** Import individual customer or item records

**Now:** Import complete sales orders with:

- Header information (customer, order date, etc.)
- Multiple line items (each with quantity, price, etc.)
- Automatic document creation and line number assignment

## When to Use Sales Document Import

Use for:

- **Sales Order Import** - Suppliers or partners send purchase orders
- **Invoice Import** - Create invoices from external systems
- **Sales Quote Import** - Batch create quotations from leads
- **Return Orders** - Process bulk returns with multiple line items
- **Conversion from Legacy System** - Migrate purchase data from old system

## How Sales Document Import Works

### Data Structure

Sales document import requires **two types of records** in source:

**1. Header Records** - One per document

```text
OrderNo | CustomerCode | OrderDate
---     | ---          | ---
SO001   | CUST_100     | 2024-01-15
SO002   | CUST_101     | 2024-01-16
```

**2. Line Records** - Multiple per document

```text
OrderNo | LineNo | ItemCode | Qty | Price
---     | ---    | ---      | --- | ---
SO001   | 1      | ITEM_A   | 10  | 100.00
SO001   | 2      | ITEM_B   | 5   | 50.00
SO002   | 1      | ITEM_C   | 20  | 75.00
```

### Processing Flow

```text
File Input (Orders + Lines)
    ↓
Parse by Order Number
    ↓
Group: Lines with same OrderNo
    ↓
For each Order:
  1. Create Sales Header
  2. Create Sales Lines
    ↓
Result: Order SO001 with 2 lines, Order SO002 with 1 line
```

## Setting Up Sales Document Import

### Step 1: Configure Integration for Document Creation

1. Create new **Integration** record
2. Set: **Integration Type** - Sales Order (or Sales Invoice, Sales Quote)
3. Set: **Header Table** - Sales Header
4. Set: **Create New Document** - Yes

### Step 2: Map Header Fields

Header fields create the document:

**Fields to map from source:**

```text
OrderNo → Document No. (or auto-assigned)
CustomerCode → Bill-to Customer No. (with lookup)
OrderDate → Order Date
DeliveryDate → Requested Delivery Date (optional)
ShippingAgent → Shipping Agent Code (optional)
Currency → Currency Code (optional)
```

**Header Example Configuration:**

```text
Mapping 1: OrderNo → Document No.
  Source Field: OrderNo
  Destination: Sales Header.No.
  Validate: Yes (must be unique)

Mapping 2: CustomerCode → Bill-to Customer No.
  Source Field: CustomerCode
  Get Value From Lookup: Yes
  Lookup Table: Customer
  Lookup Field: Your Reference
  Return Field: No.
  Validate: Yes

Mapping 3: OrderDate → Order Date
  Source Field: OrderDate
  Destination: Sales Header.Order Date
  Validate: Yes
```

### Step 3: Map Line Fields

Line fields populate each document line:

**Fields to map for each line:**

```text
ItemCode → Item No. (with lookup)
Qty → Quantity
UnitPrice → Unit Price
Discount → Line Discount %
```

**Line Example Configuration:**

```text
Mapping 4: ItemCode → Item No.
  Source Field: ItemCode
  Get Value From Lookup: Yes
  Lookup Table: Item
  Lookup Field: Vendor Item Code
  Return Field: No.
  Validate: Yes

Mapping 5: Quantity → Quantity
  Source Field: Qty
  Destination: Sales Line.Quantity
  Validate: Yes (must be > 0)

Mapping 6: Price → Unit Price
  Source Field: UnitPrice
  Destination: Sales Line.Unit Price Excl. Tax
  Validate: Yes
```

### Step 4: Configure Record Grouping

System needs to know how to group lines by document:

1. On Integration record: Set **Document Header Field** = "OrderNo"
2. System groups all records with same OrderNo together
3. First record with new OrderNo = Creates header
4. Records with same OrderNo = Creates lines

## Complete Sales Order Import Example

### Source File (CSV)

```text
OrderNo,CustomerCode,OrderDate,ItemCode,Qty,UnitPrice
SO001,CUST_100,2024-01-15,ITEM_A,10,100.00
SO001,CUST_100,2024-01-15,ITEM_B,5,50.00
SO002,CUST_101,2024-01-16,ITEM_C,20,75.00
SO002,CUST_101,2024-01-16,ITEM_A,8,100.00
```

### Integration Mappings

**Header Mappings** (created once per unique OrderNo):

```text
Mapping 1: OrderNo → Sales Header.No.
Mapping 2: CustomerCode → Sales Header.Bill-to Customer No.
           (with Customer lookup)
Mapping 3: OrderDate → Sales Header.Order Date
           (constant: use Document Type Sales Order)
```

**Line Mappings** (created for each CSV row):

```text
Mapping 4: ItemCode → Sales Line.No.
           (with Item lookup)
Mapping 5: Qty → Sales Line.Quantity
Mapping 6: UnitPrice → Sales Line.Unit Price Excl. Tax
```

### Processing

```text
Import creates:

Header 1: Sales Order SO001
  Customer: CUST_100
  Order Date: 2024-01-15
  Line 1: Item ITEM_A, Qty 10 @ 100.00 each
  Line 2: Item ITEM_B, Qty 5 @ 50.00 each
  Total: 1,250.00

Header 2: Sales Order SO002
  Customer: CUST_101
  Order Date: 2024-01-16
  Line 1: Item ITEM_C, Qty 20 @ 75.00 each
  Line 2: Item ITEM_A, Qty 8 @ 100.00 each
  Total: 2,300.00
```

## Advanced Features

### Automatic Line Numbers

**Need:** Document lines numbered 10, 20, 30...

**Solution:** Use **Line Number** field mapping:

```text
Mapping: Auto Line Numbers
  Destination: Sales Line.Line No.
  Field Type: Line Number
  
Result:
  Line 1: No. = 10
  Line 2: No. = 20
  Line 3: No. = 30
```

### Headers Without Lines

**Scenario:** Import some orders without line details (added later)

**Solution:**

1. Keep header mappings
2. Only process records with header data
3. Skip line mappings temporarily
4. Headers created without lines

### Conditional Line Creation

**Scenario:** Only create lines if quantity > 0

**Configuration:**

1. Set line quantity mapping: **Validate Destination Field** = Yes
2. If Qty = 0 or empty:
   - Validation fails
   - Line not created
   - Record marked as Error

### Multiple Document Types

Create sales orders AND invoices in same import:

1. Create **Integration Type: Sales Order**
2. Create separate **Integration Type: Sales Invoice**
3. Configure each with own mappings
4. Run independently

## Special Considerations

### Grouping by Document

**Critical:** Same **Document Header Field** value = Same document

**Example:**

```text
Source data:
OrderNo: SO001 (appears 3 times)
→ Creates 1 header + 3 lines

OrderNo: SO002 (appears 2 times)
→ Creates 1 header + 2 lines
```

### Line Sequence

Lines created **in source file order**:

```text
First SO001 row → Line 10
Second SO001 row → Line 20
Third SO001 row → Line 30
```

**Manual adjustment:** Edit line numbers in BC (10, 20, 30) after import

### Validation During Document Creation

When importing with validation enabled:

1. **Header validation** - Customer exists, date valid, etc.
2. **Line validation** - Item exists, quantity numeric, price valid
3. **Document rules** - BC validates header+lines as document

**If any validation fails:**

- Record marked Error
- Header and lines NOT created
- Can reprocess after fixing data

### Pricing and Amounts

**Source provides:**

- Unit Price (price per item)
- Line Discount %

**BC calculates:**

- Line Amount = Qty × Unit Price
- Line Discount Amount = Line Amount × Discount %
- Totals calculated per order

### Shipping and Delivery

**Optional header fields:**

```text
Requested Delivery Date → Sales Header.Requested Delivery Date
Shipping Agent Code → Sales Header.Shipping Agent Code
Shipping Method Code → Sales Header.Shipping Method Code
```

### Purchase vs Sales

**This guide:** Sales documents (customer orders)

**For Purchase Documents:** Similar process using Purchase Header/Purchase Line

## Best Practices for Document Imports

1. **Test with Small Sample** - Import 2-3 orders before full batch
2. **Verify Grouping** - Confirm orders grouped correctly before processing
3. **Check Customer Data** - Ensure all customers exist before import
4. **Check Item Data** - Ensure all items exist before import
5. **Validate Pricing** - Review calculated totals for accuracy
6. **Use Lookups** - Use lookups for customer and item codes
7. **Enable Validation** - Validate critical fields (customer, item, qty)
8. **Document Assumptions** - Document which fields map to which BC fields
9. **Review First Results** - Check first completed order in BC
10. **Monitor Errors** - Review all errors before declaring success

## Common Issues and Solutions

### Issue 1: Headers Created Without Lines

**Cause:** Line mapping sources missing or wrong

**Solution:**

```text
Check:
1. Are line field values present in source?
2. Are line mappings configured?
3. Are lookups finding correct items?

Fix:
1. Verify source data has item codes
2. Verify item lookup configured
3. Verify item exists in BC
```

### Issue 2: Duplicate Orders Created

**Cause:** Same OrderNo processed multiple times

**Solution:**

```text
Check:
1. Is Document Header Field correct?
2. Are duplicate rows in source?

Fix:
1. Verify Document Header Field = OrderNo
2. Remove duplicate rows from source
3. Re-import fresh
```

### Issue 3: Wrong Line Item Assigned

**Cause:** Item lookup returning wrong item

**Solution:**

```text
Check:
1. Are item codes exact match?
2. Is lookup field correct?

Fix:
1. Verify source item code = BC item code
2. Verify lookup using correct field
3. Test lookup manually in BC
```

### Issue 4: Missing Line Numbers

**Cause:** Line No. field not mapped

**Solution:**

```text
Check:
1. Is Line No. field mapped?

Fix:
1. Add field mapping for Line No.
2. Set Field Type = Line Number
3. Re-import
4. Lines will have 10, 20, 30...
```

## Multi-Currency Documents

For international orders with different currencies:

**Configuration:**

```text
Source Field: Currency
Destination: Sales Header.Currency Code
Validate: Yes (currency must exist)

Pricing Conversion:
  BC handles conversion automatically
  Unit Price in source currency
  BC converts per exchange rates
```

## Workflow After Import

**After successful document import:**

1. **Review Orders** - Open Sales Order list
2. **Check Totals** - Verify amounts calculated correctly
3. **Confirm Posting** - Orders ready for posting to ledger
4. **Update Status** - Change status if import changed it
5. **Send Confirmations** - Email orders to customers if needed

## Troubleshooting Document Import

### "No documents created"

**Check:**

- File has header data (not empty CustomerCode)
- Document Header Field configured
- Header mappings all configured
- Source file parsed correctly

### "Documents created but no lines"

**Check:**

- Line mappings configured
- Line item codes exist
- Lookup finding items correctly
- No validation failures on lines

### "Wrong customer on order"

**Check:**

- Customer lookup finding correct customer
- Source customer code matches lookup
- Customer exists in BC with correct code

### "Order total wrong"

**Check:**

- Unit Price field mapped correctly
- Quantity field mapped correctly
- Currency correct if multi-currency
- BC has correct pricing configured

## Next Steps

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Validate Data](how-to-data-validation.md)
- [How to Handle Errors](how-to-error-handling.md)
- [How to Import Excel Files](how-to-excel-import.md)

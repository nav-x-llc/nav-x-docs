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

### Step 1: Create and Configure the Integration

1. Create new **Integration** record
2. Set: **Name** - Descriptive name (e.g., "Sales Orders from Vendor A")
3. Set: **Integration Type** - The source file format:
   - **Excel** - Import from .xlsx files
   - **CSV** - Import from comma/semicolon-delimited files
   - **Text** - Import from delimited or fixed-length text files
4. Set: **Direction** - Import (for importing sales documents)
5. Configure file-parsing options if using Text files (delimiters, formatting, etc.)

### Step 2: Define Integration Fields

Define each field from your source file (Excel columns, CSV columns, or text file fields):

1. From the **NAV-X Integrations** page, click **Fields** action
2. Add a new row for each source field
3. Specify:
   - **Name** - Source field name (e.g., "OrderNo", "CustomerCode")
   - **Source Column** - Where to find the data (Excel column letter/number, CSV column number, or text position)
   - **Column Type** - Standard (normal value) or Constant (fixed value for all records)
   - For constants only: **Constant Value** - The fixed value to use

#### Example Fields for Sales Order Import

```text
Field 1: Name = "OrderNo"
         Source Column = "A" (or "1")
         Column Type = Standard

Field 2: Name = "CustomerCode"  
         Source Column = "B" (or "2")
         Column Type = Standard

Field 3: Name = "OrderDate"
         Source Column = "C" (or "3")
         Column Type = Standard

Field 4: Name = "PostingDate"
         Source Column = "D" (or "4")
         Column Type = Standard

Field 5: Name = "ItemCode"
         Source Column = "E" (or "5") 
         Column Type = Standard

Field 6: Name = "Quantity"
         Source Column = "F" (or "6")
         Column Type = Standard

Field 7: Name = "UnitPrice"
         Source Column = "G" (or "7")
         Column Type = Standard

Field 8: Name = "DocumentType"
         Column Type = Constant
         Constant Value = "Order"

Field 9: Name = "SalesLineType"
         Column Type = Constant
         Constant Value = "Item"
```

### Step 3: Map Fields to Business Central Tables

Now map your integration fields to the actual Business Central tables and fields where data will be created:

1. From the **NAV-X Integrations** page, click **Mappings** action
2. For each header field, create a mapping to **Sales Header** table:
   - **Source Field** - Which integration field (from step 2)
   - **Destination Table** - Sales Header
   - **Destination Field** - Which BC field
   - **Validate** - Enable to check field validity

#### Header Field Mappings (Document Level)

These mappings are created ONCE and apply to the document header:

```text
Mapping 1: OrderNo → Sales Header.No.
  Source Field: OrderNo
  Destination Table: Sales Header
  Destination Field No.: No.
  Validate: Yes (must be unique)
  **Create New Document: YES** (This is the grouping field!)

Mapping 2: CustomerCode → Sales Header.Bill-to Customer No.
  Source Field: CustomerCode
  Destination Table: Sales Header
  Destination Field No.: Bill-to Customer No.
  Get Value From Lookup: Yes
  Lookup Table No.: Customer
  Lookup Field: Your Reference  
  Validate: Yes

Mapping 3: OrderDate → Sales Header.Order Date
  Source Field: OrderDate
  Destination Table: Sales Header
  Destination Field No.: Order Date
  Validate: Yes

Mapping 4: PostingDate → Sales Header.Posting Date
  Source Field: PostingDate
  Destination Table: Sales Header
  Destination Field No.: Posting Date
  Validate: Yes

Mapping 5: DocumentType → Sales Header.Document Type
  Source Field: DocumentType
  Destination Table: Sales Header
  Destination Field No.: Document Type
  Validate: Yes
```

#### Line Field Mappings (Detail Level)

These mappings are created for each source row and create Sales Lines:

```text
Mapping 6: ItemCode → Sales Line.No.
  Source Field: ItemCode
  Destination Table: Sales Line
  Destination Field No.: No.
  Get Value From Lookup: Yes
  Lookup Table No.: Item
  Lookup Field: Vendor Item Code
  Validate: Yes

Mapping 7: Quantity → Sales Line.Quantity
  Source Field: Quantity
  Destination Table: Sales Line
  Destination Field No.: Quantity
  Validate: Yes

Mapping 8: UnitPrice → Sales Line.Unit Price Excl. Tax
  Source Field: UnitPrice
  Destination Table: Sales Line
  Destination Field No.: Unit Price Excl. Tax
  Validate: Yes

Mapping 9: Auto Line Numbers → Sales Line.Line No.
  Source Field: [Leave blank - this is auto-generated]
  Destination Table: Sales Line
  Destination Field No.: Line No.
  Column Type: Line Numbers

Mapping 10: SalesLineType (Constant) → Sales Line.Type
  Source Field: SalesLineType
  Destination Table: Sales Line
  Destination Field No.: Type
  Value: "Item"
  Validate: Yes
```

### Step 4: Configure Document Grouping

The integration framework groups rows into documents automatically based on a **grouping field**. When this field's value changes, a new document is created.

**How Document Grouping Works:**

```text
Source Data (sorted by OrderNo):
OrderNo | ItemCode | Qty
SO001   | ITEM_A   | 10
SO001   | ITEM_B   | 5      ← Same OrderNo = Same Document
SO002   | ITEM_A   | 8      ← New OrderNo = New Document
```

**Configuration:**

1. Review the integration fields you created - one field will be the "grouping field"
2. For this example, **OrderNo** is the grouping field
3. When OrderNo value changes between rows:
   - System creates a new Sales Header
   - All rows with that OrderNo become lines on that header

**Result:**

```text
Document 1: Sales Order SO001
  - Line 1: Item ITEM_A, Qty 10
  - Line 2: Item ITEM_B, Qty 5

Document 2: Sales Order SO002
  - Line 1: Item ITEM_A, Qty 8
```

> **Important:** The source file MUST be sorted by the grouping field (OrderNo in this example) for proper document creation.

## Using Constant Values

Constant values allow you to specify fixed values that apply to **every record** in the import, without requiring source data.

### When to Use Constant Values

**Use constants for:**

- **Document Type** - All orders same type ("Order", "Invoice", "Quote")
- **Line Type** - All lines same type ("Item", "G/L Account", etc.) - for sales lines
- **Salesperson** - All orders from same salesperson
- **Company Defaults** - Standard currency, payment terms, cost center, etc.
- **Status Fields** - Initial status for all imported documents
- **Comments** - Standard notes or descriptions

**Do NOT use constants for:**

- **Dates that should source from file** - Use Standard column type to pull from source
- **Line Numbers** - Use the special "Line Numbers" column type for auto-generation (10, 20, 30...)
- **Fields where data comes from source/lookups** - Use Standard column type instead

### How to Set Up Constant Values

#### Step 1: Create Integration Field as Constant

1. Go to **Integrations** → Select your integration → **Fields**
2. Add new field:
   - **Name** - Any descriptive name (e.g., "DocumentType")
   - **Column Type** - **Constant** (not Standard)
   - **Constant Value** - The fixed value (e.g., "Order")
   - Leave **Source Column** blank (no source data needed)

#### Step 2: Map to Destination Field

1. Go to **Mappings**
2. Create mapping just like a normal field:
   - **Source Field** - Your constant field from step 1
   - **Destination Table** - The BC table (Sales Header, etc.)
   - **Destination Field** - The field to populate (Document Type, Line Type, etc.)
   - **Validate** - Enable to ensure value is valid before import

### Example: Constant Values for Sales Orders

**Source File:**

```text
OrderNo,CustomerCode,OrderDate,PostingDate,ItemCode,Qty,UnitPrice
SO001,CUST_100,2024-01-15,2024-02-01,ITEM_A,10,100.00
SO001,CUST_100,2024-01-15,2024-02-01,ITEM_B,5,50.00
SO002,CUST_101,2024-01-16,2024-02-01,ITEM_C,20,75.00
```

Notice: Posting Date comes from source data now. Document Type and Line Type are constants (don't appear in source).

**Integration Fields:**

| Name | Column Type | Constant Value | Source Column |
| ------ | ------------- | ----------------- | --- |
| OrderNo | Standard | | A |
| CustomerCode | Standard | | B |
| OrderDate | Standard | | C |
| PostingDate | Standard | | D |
| ItemCode | Standard | | E |
| Quantity | Standard | | F |
| UnitPrice | Standard | | G |
| DocumentType | **Constant** | Order | *(leave blank)* |
| SalesLineType | **Constant** | Item | *(leave blank)* |

**Integration Mappings:**

Header mappings:

```text
Mapping: DocumentType (Constant) → Sales Header.Document Type
  Source Field: DocumentType
  Value: "Order"
  Destination Table: Sales Header
  Destination Field: Document Type

Mapping: PostingDate (From Source) → Sales Header.Posting Date
  Source Field: PostingDate
  Destination Table: Sales Header
  Destination Field: Posting Date
```

Line mappings:

```text
Mapping: SalesLineType (Constant) → Sales Line.Type
  Source Field: SalesLineType
  Value: "Item"
  Destination Table: Sales Line
  Destination Field: Type
```

**Result:**

- Every imported sales order will have Document Type = "Order"
- Posting Date comes from the source file (per row)
- Every sales line will be of Type = "Item"

---

## Configuring the Create New Document Flag (Critical!)

The **Create New Document** flag is the **most critical configuration** for multi-line document imports. Without it, the system won't know when to create a new document header.

### What is the Create New Document Flag?

The **Create New Document** flag is a boolean setting on each field mapping that designates:

1. **Which field identifies a unique document** (Order Number, Invoice Number, etc.)
2. **When to create a new document header** - Whenever this field's value changes
3. **How to group lines into documents** - All lines with same field value = same document

### How It Works

**Example Source Data (already sorted by OrderNo):**

```text
OrderNo | ItemCode | Qty
--------|----------|----
SO001   | ITEM_A   | 10
SO001   | ITEM_B   | 5      ← Same OrderNo = Same Document (SO001 header created once)
SO002   | ITEM_C   | 20     ← Different OrderNo = New Document (SO002 header created)
SO002   | ITEM_A   | 8      ← Back to SO002 = Same SO002 Document
```

**Processing:**

1. **Row 1:** OrderNo = "SO001" → Create Sales Header SO001, Create Line 1
2. **Row 2:** OrderNo = "SO001" (same) → Reuse SO001 header, Create Line 2
3. **Row 3:** OrderNo = "SO002" (different) → Create Sales Header SO002, Create Line 1
4. **Row 4:** OrderNo = "SO002" (same) → Reuse SO002 header, Create Line 2

### Configuration

**In Integration Mappings:**

1. Navigate to your Integration record
2. Open **Mappings** action
3. Find the mapping for your document grouping field (e.g., OrderNo → Sales Header.No.)
4. **Set: "Create New Document" = YES** ← This is the flag!

**Example - OrderNo Mapping:**

```text
Mapping: OrderNo → Sales Header.No.
  Source Field: OrderNo
  Destination Table: Sales Header
  Destination Field: No.
  Create New Document: ***YES*** ← HERE IS THE FLAG
  Validate: Yes
```

### Important Rules

⚠️ **CRITICAL Rules:**

1. **Only ONE mapping per integration** can have "Create New Document" = YES
   - Cannot have multiple grouping fields
   - Choose the field that identifies unique documents

2. **Source file MUST be sorted** by the grouping field
   - If not sorted, same document split across multiple headers
   - ✅ CORRECT: All SO001 rows together, then SO002, then SO003
   - ❌ WRONG: SO001, SO002, SO001 (SO001 split into 2 headers)

3. **This field goes to the header table** (e.g., Sales Header.No., not Sales Line)
   - Maps to primary key of header
   - Uniquely identifies each document

### What Happens Without the Flag

**If you forget to set "Create New Document" = YES:**

```text
Result: Only FIRST row processed as header
  Document 1: SO001 with Line 1 only
  Rows 2, 3, 4: Processed as ERRORS (can't create document header for existing line)
  
Error Message: "Header not found" or "Document already exists"
```

### What Happens With Wrong Sorting

**If source file is NOT sorted by grouping field:**

```text
File (wrong sort):
  SO001 | ITEM_A | 10
  SO002 | ITEM_C | 20
  SO001 | ITEM_B | 5      ← Out of order!

Result: 
  Document 1: SO001 with Line 1 only (ITEM_A)
  Document 2: SO002 with Line 1 only (ITEM_C)
  Document 3: NEW SO001 with Line 1 only (ITEM_B) ← WRONG! Creates duplicate header
  
Now you have TWO Sales Order SO001 in the system!
```

**Solution:** Sort source file **before import** by the grouping field.

### Summary Checklist

Before running an import with multiple lines per document:

- ✅ Identified the field that uniquely identifies documents (Order Number, Invoice No., etc.)
- ✅ Created mapping for that field to the header table
- ✅ **SET "Create New Document" = YES on that mapping**
- ✅ Confirmed only ONE mapping has this flag = YES
- ✅ Sorted source file by the grouping field
- ✅ Created all other mappings for header and line fields
- ✅ Tested with small sample (2-3 orders) before full import

---

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

To import both sales orders AND invoices from the same source file type:

1. Create **Integration 1**: Name = "Sales Orders from Vendor"
   - Integration Type = Excel (or CSV, Text, etc.)
   - Maps to Sales Header with Document Type = "Order"
2. Create **Integration 2**: Name = "Sales Invoices from Vendor"
   - Integration Type = Excel (same file format)
   - Maps to Sales Header with Document Type = "Invoice"
3. Configure each integration with own fields and mappings
4. Run each integration independently against the appropriate source file

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

## Processing Modes: Blocking vs Non-Blocking

When you run an import, the Integration Framework can process records in two different modes. Understanding these modes helps you choose the best approach for your workflow.

### Immediate (Blocking) Processing

**How it works:**

- Records process **during the import** in your user session
- Your screen shows progress with a wait cursor
- You **cannot work** until processing completes
- After completion, you see results immediately

**When to use:**

- **Small imports** - Under 100-500 records
- **Quick turnarounds** - Need results before continuing other work
- **Testing/validation** - Want to verify immediately if import succeeded
- **Interactive workflows** - User will wait for results

**Example timeline:**

```text
10:00 AM - User starts import
10:00-10:02 AM - System processes records (user session blocked)
10:02 AM - Processing complete, results shown
10:02+ AM - User can continue working
```

### Deferred Job Queue (Non-Blocking) Processing

**How it works:**

- Records **queue to background processing** immediately
- Your screen returns control quickly
- Processing happens **asynchronously** in a background session
- You **can continue working** while processing runs
- You receive notification when processing completes
- You can check results anytime from Integration Records page

**When to use:**

- **Large imports** - 1000+ records or complex lookups
- **Batch processing** - Scheduled imports (Job Queue)
- **User experience** - Users shouldn't wait for long operations
- **Non-critical timing** - Acceptable if processing takes hours

**Example timeline:**

```text
10:00 AM - User starts import
10:00:05 AM - Records queue to background, user screen returns control
10:00+ AM - User can open other documents, create orders, etc.
Background - System processes records (separate session)
10:15 AM - Processing completes
10:15 AM - User gets notification: "Import completed: 500 orders created"
```

### How to Choose Processing Mode

**For Sales Document Imports:**

| Scenario | Recommended | Reason |
| ---------- | ------------- | -------- |
| 50 orders | Immediate | Quick processing, user can verify results |
| 500 orders | Deferred | Avoid user waiting 1-2 minutes |
| 5000 orders | Deferred | User shouldn't wait 30+ minutes |
| Scheduled nightly | Deferred | Run in background via Job Queue |
| Manual ad-hoc import | Immediate | User present and can verify |

### Configuring Processing Mode

1. Open your **Integration** record
2. Set: **Processing Execution Mode**
   - **Immediate (Synchronous)** - Blocking mode
   - **Deferred Job Queue (Asynchronous)** - Non-blocking mode
3. Save

### Running an Import with Your Chosen Mode

After import completes, you'll see a dialog with options:

**The dialog offers:**

1. **Process now (wait for completion)** - Immediate mode
2. **Process in background (continue working)** - Deferred mode  
3. **Open import results** - View the Integration Records page

Select based on your preference and the configured Processing Execution Mode will determine how it runs.

### Monitoring Background Processing

When using deferred processing:

1. You can **check status anytime** by opening:
   - **NAV-X Integration Records** page
   - Filter by your integration and import entry
   - View Status column: "Ready", "Processing", "Completed", "Error"

2. **Notification banner** appears when background processing completes
   - Shows success count and error count
   - Allows you to open results immediately

3. **Re-process errors** if needed:
   - Records with Status = "Error" can be fixed and reprocessed
   - Keep the same Entry No. to reprocess that batch

---

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

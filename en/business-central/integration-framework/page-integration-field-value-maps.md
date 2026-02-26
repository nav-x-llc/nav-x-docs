# Integration Field Value Maps Page

**Page Name:** NAV-X Field Value Maps  
**Purpose:** Configure value mapping/translation for converting imported field values to Business Central values  
**Version:** NAV-X Integration Framework v1.3.0+  
**Application Area:** NAV-X Integration Framework  

## Overview

The **Field Value Maps** page allows you to create **lookup mappings** for source data values that need to be translated to corresponding Business Central field values. This is useful when source system codes differ from Business Central codes.

## When You Use This Page

- **Value translation required:** Source file has codes that don't match BC tables
- **Vendor codes → BC Item codes:** Map external item codes to your item numbers
- **Department codes → GL Accounts:** Map source department IDs to your GL account structure
- **Status codes → BC statuses:** Map external status values to BC status options
- **Location codes → Warehouse locations:** Map source location IDs to your shipping locations
- **Large lookups:** Instead of adding records to BC, dynamically map on import

## Quick Example

**Scenario:** Importing orders from an external system

**Problem:**

- Source system uses: `"WIDGET_A"`, `"WIDGET_B"`, `"GADGET_X"`
- Your BC uses item codes: `"WID-100"`, `"WID-101"`, `"GAD-050"`

**Solution:** Create field value maps:

| Imported Value | Mapped Value |
| --- | --- |
| WIDGET_A | WID-100 |
| WIDGET_B | WID-101 |
| GADGET_X | GAD-050 |

**Result:** During import, when source says "WIDGET_A", it gets converted to "WID-100" for lookup

## How It Works

### Basic Process

```text
Source File Value → Field Value Map Lookup → BC Destination Value
    "WIDGET_A"     →  Look up in map table  →  "WID-100"
    "CUST_100"     →  Look up in map table  →  "C001" (Customer No.)
    "LOC_SHIP"     →  Look up in map table  →  "WAREHOUSE-MAIN"
```

### With Integration Framework

1. **Source file contains:** External code (e.g., `"WIDGET_A"`)
2. **Integration configuration:**
   - Field mapping: Map this field to BC Item.No.
   - **Enable: "Use Field Value Mapping"** = Yes
   - **Configure field value maps:** Create entries below
3. **During import:** Value `"WIDGET_A"` is looked up in field value maps
4. **Result:** Converted value `"WID-100"` used for lookup in Business Central

## Key Fields

### Value Fields

| Field | Purpose |
| ------- | --------- |
| **Value** | The imported value to match (external system code) |
| **Mapped Value** | The corresponding Business Central value (internal code) |

### How Fields Work

**Value** - The source system value:

```text
Examples:
  "WIDGET_A" (from external vendor system)
  "CUST_100" (external customer code)
  "X01" (external location code)
```

**Mapped Value** - Your BC value:

```text
Examples:
  "WID-100" (your item number)
  "C001" (your customer number)
  "MAIN" (your warehouse code)
```

## Accessing Field Value Maps

### From Integration Mappings

Field value maps are accessed through the **Integration Mappings** page:

1. Open **NAV-X Integrations** page
2. Select integration → Click **Mappings** action
3. Select a mapping line where you need value translation
4. Look for field: **"Use Field Value Mapping"** = Yes
5. Click on mapping line, then find **Field Value Maps** action or button
6. Opens this page filtered to the current mapping

### Direct Access

Open from the:

- **NAV-X Integration Setup** page (admin configuration)
- Menu: **Integrations → Field Value Maps**
- Directly from any integration mapping configuration

## Setting Up Value Maps

### Step 1: Enable Value Mapping on Field Mapping

1. Open your Integration → **Mappings** action
2. Select the mapping that needs value translation
3. Set: **"Use Field Value Mapping"** = **Yes**
4. Save

### Step 2: Create Value Map Entries

1. The **Field Value Maps** action becomes available
2. Click **Field Value Maps** action on that mapping
3. Page opens filtered to this mapping's value map entries
4. Add new lines:
   - **Value** = The external/source value
   - **Mapped Value** = The BC value to use

### Step 3: Complete Value Mapping Set

Ensure all possible values from source are mapped:

```text
If source can be: A, B, or C
Create maps for all three:
  Value="A" → Mapped Value="..." 
  Value="B" → Mapped Value="..."
  Value="C" → Mapped Value="..."
```

### Step 4: Test

Import a sample record:

- Verify source value gets converted
- Confirm lookup finds correct BC value
- Check created record has correct mapped value

## Example Scenarios

### Scenario 1: Item Code Translation

**Use Case:** Import sales orders, but vendor uses different item codes than you do

**Source Data:**

```text
OrderNo | ItemCode | Qty
SO001   | ACME_A   | 10
SO001   | ACME_B   | 5
SO002   | XYZ_100  | 20
```

**Your BC Items:**

```text
Item No. | Vendor Item Code
100      | ACME_A
101      | ACME_B
200      | XYZ_100
```

**Field Value Maps Needed:**

| Value | Mapped Value |
| ------- | --- |
| ACME_A | 100 |
| ACME_B | 101 |
| XYZ_100 | 200 |

**Configuration:**

1. Create mapping: ItemCode → Sales Line.No.
2. Get Value From Lookup: Yes
3. Lookup Table: Item
4. Use Field Value Mapping: **YES**
5. Create field value maps (table above)

**During Import:**

```text
Row 1: ItemCode="ACME_A" 
  → Map to "100" 
  → Look up Item "100" 
  → Create line for Item 100 ✓

Row 3: ItemCode="XYZ_100"
  → Map to "200"
  → Look up Item "200"
  → Create line for Item 200 ✓
```

### Scenario 2: Customer Code Translation

**Use Case:** Partner company sends orders with their customer numbers, you need to translate to your customer numbers

**Source Data:**

```text
OrderNo | CustomerCode | Amount
PO001   | ACME_DIST_1   | 5000
PO002   | SUPPLIER_XYZ  | 3500
```

**Your BC Customers:**

```text
No. | Name | Ship-to Code
C001 | ACME Distribution | ACME_DIST_1
C002 | XYZ Suppliers | XYZ_SUP
```

**Field Value Maps:**

| Value | Mapped Value |
| ------- | --- |
| ACME_DIST_1 | C001 |
| SUPPLIER_XYZ | C002 |

**Result:** Orders automatically assign correct customer numbers

### Scenario 3: Status Code Translation

**Use Case:** Imported records have status values that need conversion

**Source:** Status codes are "0", "1", "2"  
**BC:** Expects status values "Draft", "Released", "Closed"

**Field Value Maps:**

| Value | Mapped Value |
| ------- | --- |
| 0 | Draft |
| 1 | Released |
| 2 | Closed |

**Implementation:**

1. Mapping: SourceStatus → RecordStatus
2. Use Field Value Mapping: Yes
3. Create maps above
4. During import, "0" becomes "Draft", "1" becomes "Released", etc.

## Important Considerations

### Best Practices

1. **Completeness:** Map ALL possible source values
   - If source has "A", "B", "C" - map all three
   - Unmapped values cause lookup failures

2. **Accuracy:** Values are **case-sensitive**
   - `"ITEM_A"` ≠ `"Item_A"`
   - `"C001"` ≠ `"C01"`
   - Be precise in your mapping

3. **Validation:** Test before large imports
   - Import 5-10 records first
   - Verify correct values assigned
   - Check BC records correct

4. **Documentation:** Keep mapping list accessible
   - Export to Excel for reference
   - Share with team importing data
   - Update when new codes added to source system

### Common Mistakes

❌ **Mistake 1:** Incomplete mappings

```text
Source has: A, B, C, D
Maps only: A, B, C
Result: D causes import error
```

❌ **Mistake 2:** Mapped to codes that don't exist in BC

```text
Map: "WIDGET_A" → "WID-999"
But WID-999 doesn't exist in Items
Result: Lookup fails, record marked Error
```

❌ **Mistake 3:** Wrong direction mapping

```text
Wrong: Map your item codes to vendor codes
Right: Map vendor codes to your item codes
```

❌ **Mistake 4:** Case mismatch

```text
Source sends: "item_a" (lowercase)
Mapped to: "ITEM_A" (uppercase)
But BC Item No. is: "Item_A" (mixed case)
Result: Lookup fails due to case mismatch
```

## Managing Value Maps

### Viewing All Mappings

1. Open Integration Setup → Field Value Maps (admin view)
2. See all value maps across all integrations
3. Filter by integration/field mapping for specific set

### Updating Existing Maps

1. Click on Value field
2. Edit Mapped Value
3. Save

Changes apply to next import using that mapping

### Deleting Maps

Only delete if:

- Value no longer appears in source data
- Code removed from external system
- Value maps to code that no longer exists in BC

### Exporting for Reference

1. Open Field Value Maps
2. Select all lines (Ctrl+A)
3. Copy to Excel
4. Share with import team
5. Use as reference guide

## Troubleshooting

### Question: Import fails with "Field lookup failed"?

**Possible causes:**

- Value not mapped in field value maps
- Mapped value doesn't exist in BC lookup table
- Case mismatch between source and map

**Solution:**

1. Identify the value causing error (from error message)
2. Check if value is in your maps
3. If missing, add it
4. If exists, verify mapped value exists in BC
5. Check case match: map must exactly match BC record

**Example:**

```text
Error: "Item 'WID-100' not found"
Debug:
  1. Is "WID-100" in your Item list? 
     → No: Add the item first
     → Yes: Verify exact spelling/case
```

### Question: Same source value maps to different locations?

**Scenario:** Need to map `"DEFAULT_LOC"` to different BC locations depending on context

**Limitation:** Field Value Maps map 1:1 only

**Workaround:**

- Use different Integration Mappings for different locations
- Each mapping has own field value maps
- Run separate imports for each location context

### Question: How do I make mappings for huge code lists?

**Scenario:** 1000+ source codes to map to BC codes

**Solution Options:**

1. **Direct lookup without mapping:**
   - If source codes ARE your BC codes
   - Skip field value mapping
   - Lookups work directly

2. **Bulk import:**
   - Create BC records with source codes as alternates
   - Then use lookups to find BC records
   - Use Item.Vendor Item Code lookup instead of Item No.

3. **External mapping table:**
   - Create custom BC table for code translation
   - Load all 1000+ mappings via import
   - Reference in formula or custom code

4. **Phased approach:**
   - Import first 200 unique values
   - Create mappings
   - Run import
   - Add more mappings for additional values as encountered

## Related Information

- [Integration Mappings Page](page-integration-mappings.md) - Configure field mappings with value translation
- [Field Mappings Guide](how-to-field-mappings.md) - How to set up field mappings
- [Lookup Configuration](how-to-field-mappings.md#using-lookups) - How lookups work with field value maps
- [Integration Records Page](page-integration-records.md) - View results of translated imports

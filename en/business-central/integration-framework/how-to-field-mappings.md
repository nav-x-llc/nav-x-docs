# How to Set Up Field Mappings

This guide explains how to create and configure field mappings between source data and Business Central tables.

## What Are Field Mappings?

Field mappings tell the integration framework **which source fields go into which Business Central fields**. Each mapping can include validation, lookups, and special handling.

## Prerequisites

- Integration created with Integration Fields defined
- Business Central table identified where data will go
- Field names and types understood

## Creating a Basic Field Mapping

### Step 1: Access Integration Mappings

1. Open your **Integration** record
2. Click **Integration Mappings**
3. Click **New**

### Step 2: Configure the Mapping

Complete these fields:

| Field | Description | Example |
| --- | --- | --- |
| **Source Field** | Field from Integration Fields | "Customer Code" |
| **Destination Table** | BC table receiving data | "Customer" |
| **Destination Field** | BC field to populate | "No." |
| **Sequence** | Processing order (optional) | 10, 20, 30 |

### Step 3: Enable Validation (Optional)

- **Validate** - Enable to validate field value exists/is correct
- Validation uses field properties in BC to check data

### Step 4: Save Mapping

Click OK to save the mapping.

## Mapping Types

### Type 1: Direct Field Mapping

**Purpose:** Copy source value directly to BC field

**Configuration:**

```text
Source Field: "Customer Code"
Destination Table: Customer
Destination Field: "No."
Validate: Yes (verify customer exists)
```

**Result:** Source value copied as-is to BC field

**Use When:**

- Field names match between systems
- Value format compatible
- No translation needed

### Type 2: Constant Fields

**Purpose:** Use fixed value for all records, not from source

**Configuration:**

```text
Source: "Currency Code" (Constant column type)
Constant Value: "USD"
Destination Table: Customer
Destination Field: "Currency Code"
```

**Result:** All records get "USD" regardless of source

**Use When:**

- Same value for all records
- Not in source data
- Common across all imports

### Type 3: Line Number Fields

**Purpose:** Auto-generate sequential numbers (for document lines)

**Configuration:**

```text
Source Field: (Configure as "Line Number" column type)
Destination Table: "Sales Line"
Destination Field: "Line No."
```

**Result:** Auto-numbered 10000, 20000, 30000, etc.

**Use When:**

- Creating multiple lines per document
- Line numbers not in source
- Need sequential numbering

## Advanced Mapping: Field Value Mapping (Lookups)

Use lookups when source values need translation to BC values.

### Scenario: Customer Code Lookup

**Problem:** Source file has external customer IDs, BC needs internal customer numbers.

**Example:**

```text
Source file contains:
  CUST_EXT_001 → Need to find BC customer "10001"
  CUST_EXT_002 → Need to find BC customer "10002"
```

**Configuration:**

1. On the mapping, enable:
   - **Get Value From Lookup** - Yes

2. Set lookup details:
   - **Lookup Table** - Customer
   - **Lookup Field** - "External ID"
   - **Return Field** - "No."

3. How it works:
   - Takes source value ("CUST_EXT_001")
   - Searches Customer table's External ID field
   - Finds matching customer
   - Returns that customer's "No." field

**Result:**

```text
Source: CUST_EXT_001 → Found in Customer.ExternalID → Returns "10001"
Mapped to Customer.No.: "10001"
```

### Scenario: Status Code Mapping

**Problem:** Source uses codes A, B, C but BC expects "Active", "Blocked", "Closed"

**Configuration:**

Create a mapping table (e.g., Integration Lookup) with:

```text
Source Value → BC Value
A → Active
B → Blocked
C → Closed
```

Then in the Integration Mapping:

- **Get Value From Lookup** - Yes
- **Lookup Table** - Custom mapping table
- **Lookup Field** - Source Code field
- **Return Field** - BC Status field

## Mapping Validation

Enable validation to catch errors before processing:

### Within Mapping

- **Validate** - Enable on mapping to validate BC field rules

### Field-Level Rules

Validation checks:

- Field exists in destination table
- Value passes BC validation
- Required fields have values
- Data type matches field

### Handling Validation Errors

If validation fails:

- Record marked as **Error** status
- Error message stored
- Can be reviewed and reprocessed

## Sequence and Processing Order

Use **Sequence** to control mapping order:

```text
Sequence 10: Customer.No. (primary key)
Sequence 20: Customer.Name
Sequence 30: Customer."Currency Code"
Sequence 40: Customer."Customer Posting Group"
Sequence 50: Customer.Address
```

**Why order matters:**

- Primary keys must map first
- Dependent fields after key fields
- Lookups using keys after key mapping
- Usually process in ascending sequence order

## Field Mapping Examples

### Example 1: Simple Customer Import

**Source:** Excel with columns: Code, Name, City

**Mappings:**

```text
Code → Customer.No.
Name → Customer.Name
City → Customer.City
```

Each field maps directly.

### Example 2: Sales Order with Lookups

**Source:** CSV with: OrderNo, CustomerCode, ItemCode, Qty

**Mappings:**

```text
OrderNo → Sales Header.No. (Sequence: 10)

CustomerCode → Sales Header."Bill-to Customer No." (Sequence: 20)
  With Lookup:
    Lookup Table: Customer
    Lookup Field: "External Code"
    Return Field: "No."

ItemCode → Sales Line.No. (Sequence: 30)
  With Lookup:
    Lookup Table: Item  
    Lookup Field: "Vendor Item Code"
    Return Field: "No."

Qty → Sales Line.Quantity (Sequence: 40)
```

### Example 3: Multi-Line Document

**Source:** Text file with order lines

**Mappings:**

```text
Sequence 10: OrderNo → Sales Header.No.
Sequence 20: LineCount → Sales Line."Line No."
  (Column Type: Line Number, auto-numbered)
Sequence 30: ItemCode → Sales Line."No." (with lookup)
Sequence 40: Qty → Sales Line.Quantity
Sequence 50: Price → Sales Line."Unit Price"
Sequence 60: DiscPct → Sales Line."Line Discount %"
```

## Troubleshooting Mapping Issues

### Issue: "Field not found" error

- **Cause** - Destination field doesn't exist or is misspelled
- **Solution** - Verify field exists in BC table
- **Check** - Use BC Field List or table design

### Issue: "Lookup value not found"

- **Cause** - Source value doesn't exist in lookup table
- **Solution** - Verify lookup values match exactly (case-sensitive)
- **Debug** - Check lookup table for matching values

### Issue: Validation failing on every row

- **Cause** - Field rules not met (e.g., required field empty)
- **Solution** - Adjust source data to meet BC field requirements
- **Alternative** - Make field not required in BC if possible

### Issue: Wrong data in mapped field

- **Cause** - Incorrect sequence order or wrong mapping
- **Solution** - Verify mapping configuration and sequence
- **Check** - Review Integration Records to see mapped values

## Best Practices

1. **Map Keys First** - Sequence primary keys before dependent fields
2. **Validate Critical Fields** - Enable validation for important fields
3. **Use Lookups** - Prefer lookups for code translation
4. **Document Mappings** - Document complex mapping logic
5. **Test Mappings** - Test with sample data before full import
6. **Check Sequence** - Verify processing sequence is correct
7. **Handle Errors** - Plan for error review and reprocessing
8. **Backup First** - Backup BC data before processing large imports
9. **Review Carefully** - Review error messages to understand issues
10. **Use Constants** - Use constant fields for fixed values per import

## Next Steps

- [How to Use Field Value Mapping](how-to-field-value-mapping.md)
- [How to Validate Data](how-to-data-validation.md)
- [How to Handle Errors](how-to-error-handling.md)

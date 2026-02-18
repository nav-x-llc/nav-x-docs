# How to Use Field Value Mapping (Lookups)

This guide explains how to use field value mappings to translate source values into Business Central values using lookups.

## What is Field Value Mapping?

Field value mapping (lookup) allows you to **translate source data values into Business Central values** by searching another table for a matching value.

**Example:**

- Source file has: `"SALES_REP_JOHN"`
- BC Employee table has: Employee "E001" with External Code "SALES_REP_JOHN"
- Lookup translates: `"SALES_REP_JOHN"` → `"E001"`

## When to Use Lookups

Use lookups when:

- **Code Translation** - External system uses different codes than BC
- **Employee Matching** - Match external employee IDs to BC employees
- **Department Mapping** - Map external department codes to BC departments
- **Item Lookup** - Match vendor item numbers to BC item numbers
- **Customer Matching** - Match external customer numbers to BC customers

## How Lookups Work

```text
Source Data → Lookup Value → Search BC Table → Find Match → Return Mapped Value
    ↓              ↓                ↓              ↓              ↓
  "CUST_001"  Customer    Customer Table    "10001"        "10001"
            "External ID" "External ID"   matches
```

## Configuring a Lookup

### Step 1: Identify the Lookup Table

First, identify which BC table contains the matching values:

| Scenario | Table | Lookup Field | Return Field |
| --- | --- | --- | --- |
| Employee Code | Employee | "External Employee Code" | "No." |
| Customer Number | Customer | "Your Reference" | "No." |
| Item Number | Item | "Vendor Item Code" | "No." |
| Department Code | Department | "Code" | "Name" |
| Salesperson | Salesperson/Purchaser | "External Code" | "Code" |

### Step 2: Add Lookup to Mapping

On the **Integration Mapping** record:

1. Enable: **Get Value From Lookup** - Yes
2. Set: **Lookup Table** - Select the BC table (e.g., "Customer")
3. Set: **Lookup Field** - Field to search in (e.g., "Your Reference")
4. Set: **Return Field** - Field to extract result (e.g., "No.")

### Step 3: How It Processes

When processing:

1. Takes source value (e.g., "CUST_001")
2. Searches **Lookup Table** (Customer)
3. Finds row where **Lookup Field** ("Your Reference") = "CUST_001"
4. Returns value from **Return Field** ("No.") - e.g., "10001"
5. Stores returned value in destination field

## Common Lookup Scenarios

### Scenario 1: Customer Code Translation

**Problem:** Source file uses customer codes like "EXT_CUSTOMER_123" but BC expects internal customer numbers "10001".

**Setup:**

First, in BC, add external code to customer:

- Customer "10001" got "Your Reference" = "EXT_CUSTOMER_123"

**Mapping:**

```text
Source Field: "Customer Code"
Destination Table: Sales Header
Destination Field: "Bill-to Customer No."

Lookup Configuration:
  Get Value From Lookup: Yes
  Lookup Table: Customer
  Lookup Field: "Your Reference"
  Return Field: "No."
```

**Processing:**

```text
Source: "EXT_CUSTOMER_123"
→ Search Customer."Your Reference" for "EXT_CUSTOMER_123"
→ Found in Customer "10001"
→ Write "10001" to Sales Header."Bill-to Customer No."
```

### Scenario 2: Employee/Salesperson Matching

**Problem:** Source has salesperson external IDs; BC has employee numbers.

**Setup:**

- Employee "E001" has "Search Name" = "SALES_JOHN"
- Employee "E002" has "Search Name" = "SALES_JANE"

**Mapping:**

```text
Source Field: "Salesperson Code"
Destination Table: Sales Line
Destination Field: "Salesperson Code"

Lookup Configuration:
  Get Value From Lookup: Yes
  Lookup Table: Salesperson/Purchaser
  Lookup Field: "Search Name"
  Return Field: "Code"
```

**Processing:**

```text
Source: "SALES_JOHN"
→ Search Salesperson."Search Name" = "SALES_JOHN"
→ Found: "E001"
→ Write "E001" to Sales Line."Salesperson Code"
```

### Scenario 3: Item Lookup by Vendor Code

**Problem:** Supplier sends item numbers (vendor SKUs) but BC uses internal item numbers.

**Setup:**

- Item "IT001" has "Vendor Item Code" = "VEN_SKU_4521"
- Item "IT002" has "Vendor Item Code" = "VEN_SKU_4522"

**Mapping:**

```text
Source Field: "Item Code"
Destination Table: Sales Line
Destination Field: "No."

Lookup Configuration:
  Get Value From Lookup: Yes
  Lookup Table: Item
  Lookup Field: "Vendor Item Code"
  Return Field: "No."
```

**Processing:**

```text
Source: "VEN_SKU_4521"
→ Search Item."Vendor Item Code" = "VEN_SKU_4521"
→ Found: "IT001"
→ Write "IT001" to Sales Line."No."
```

### Scenario 4: Lookup with Custom Field

**Problem:** You have a custom lookup table for status code mapping.

**Custom Table Setup:**

- Create table "Integration Lookup" with fields:
  - "Source Code" = "A"
  - "BC Code" = "10"
  - "Source Code" = "B"
  - "BC Code" = "20"

**Mapping:**

```text
Source Field: "Status Code"
Destination Table: Customer
Destination Field: "Customer Posting Group"

Lookup Configuration:
  Get Value From Lookup: Yes
  Lookup Table: Integration Lookup
  Lookup Field: "Source Code"
  Return Field: "BC Code"
```

**Processing:**

```text
Source: "A"
→ Search Integration Lookup."Source Code" = "A"
→ Return Integration Lookup."BC Code" = "10"
```

## Multiple Lookups in One Import

You may use multiple lookups in a single integration:

**Example:**

```text
Mapping 1: Customer Code → (lookup) → Customer.No.
Mapping 2: Item Code → (lookup) → Item.No.
Mapping 3: Salesperson → (lookup) → Salesperson.Code
Mapping 4: Status → (lookup) → Status Code
```

Each mapping can have its own lookup configuration.

## Handling Lookup Failures

### When Lookup Value Not Found

If source value doesn't exist in lookup table:

1. **Status:** Record marked as **Error**
2. **Error Message:** "Value not found in lookup table: [value]"
3. **Action:** Can be reviewed and reprocessed after fixing

**Example:**

```text
Lookup for "CUST_999" in Customer."Your Reference"
→ No matching customer found
→ Record status: Error
→ Error message: 'CUST_999' not found in lookup
```

### Debugging Lookup Issues

**Check 1: Does lookup table have the value?**

```text
Open Customer list
Search for Your Reference containing the source value
If not found → Add to customer or fix source value
```

**Check 2: Is lookup field correct?**

```text
Verify field exists in lookup table
Verify field contains expected values
Try alternative field if available
```

**Check 3: Is value exact match?**

```text
Lookups are case-sensitive (usually)
Check for leading/trailing spaces
"CUST001" ≠ "cust001" (if case-sensitive)
```

**Check 4: Is return field correct?**

```text
Verify return field exists
Check what values are in return field
Ensure values compatible with destination field
```

## Best Practices for Lookups

1. **Prepare Lookup Data First** - Ensure BC table has all source values before import
2. **Use Unique Lookup Fields** - Use fields that uniquely identify records
3. **Document Mappings** - Document which field is lookup source
4. **Test with Samples** - Test lookups with sample data first
5. **Validate Lookups** - Manually check few source-to-destination mappings before full import
6. **Error Review** - Review "not found" errors before reprocessing
7. **Maintain Lookup Tables** - Keep lookup tables up-to-date
8. **Alternative Fields** - Know backup fields if primary lookup field missing
9. **Avoid Null Values** - Don't use empty/null values in lookup fields
10. **Case Sensitivity** - Test whether lookups are case-sensitive for your system

## Creating Lookup Tables for Complex Mappings

For scenarios not covered by standard BC tables, create a custom Integration Lookup table:

**Table Fields:**

```text
Field 1: "Source Code" (Text[20])
Field 2: "BC Code" (Text[20])
Field 3: "Description" (Text[100])
```

**Example Data:**

```text
Source Code: "STATUS_A"  → BC Code: "Active"
Source Code: "STATUS_B"  → BC Code: "Blocked"
Source Code: "STATUS_C"  → BC Code: "Closed"
```

Then use in mapping:

- Lookup Table: "Integration Lookup"
- Lookup Field: "Source Code"
- Return Field: "BC Code"

## Performance Considerations

- Lookups perform **exact match searches** in BC table
- Performance is fast for tables with <100K records
- For very large lookup tables, ensure BC table has proper indexes
- Multiple lookups in single import processed sequentially (not parallel)

## Next Steps

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Validate Data](how-to-data-validation.md)
- [How to Handle Errors](how-to-error-handling.md)

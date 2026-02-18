# How to Validate Data

This guide explains how to set up and use data validation in the Integration Framework to ensure imported data meets Business Central requirements.

## What is Data Validation?

Data validation **verifies that imported data meets Business Central field rules** before processing.

Validation checks:

- Required fields are populated
- Field values match expected data types
- Values fall within allowed ranges
- Foreign key relationships exist
- Custom business rules are met

## When to Use Validation

Enable validation when:

- **New Customer Import** - Verify all required customer fields present
- **Sales Order Import** - Ensure ordered items exist in Item table
- **Vendor Import** - Verify vendor information meets company requirements
- **Product Master** - Confirm all items have pricing and stock setup
- **Document Import** - Verify line items and quantities valid

## How Validation Works

**Without Validation:**

```text
Source Data → Create in BC → BC Auto-Creates Record
Results: May create incomplete or invalid records
```

**With Validation:**

```text
Source Data → Validate Against Rules → Validation Succeeds
                                                ↓
                                         Create in BC

Source Data → Validate Against Rules → Validation Fails
                                                ↓
                                    Mark as Error/Hold
```

## Setting Up Validation

### Step 1: Enable Validation in Mapping

On each **Integration Mapping** record:

1. Open field mapping
2. Check: **Validate Destination Field** - Yes
3. System will now validate this field before import

### Step 2: Field Validation Rules

When validation enabled, system checks:

| Check | Example | Fails If |
| --- | --- | --- |
| **Required** | Name field | Value is empty |
| **Data Type** | Decimal number | Text "ABC" provided |
| **Length** | Code (20 chars max) | "LONGTEXTEXCEEDS20CHARS" |
| **Lookup** | Customer No. | Customer doesn't exist |
| **Decimal Places** | Price (2 decimals) | "10.5" with 1 decimal |
| **Range** | Percentage 0-100 | "-5" or "150" |

## Common Validation Scenarios

### Scenario 1: Customer Master Import Validation

**Requirement:** New customer import must have valid:

- No. (Customer number)
- Name (Customer name - required)
- Address (required)
- Salesperson Code (if provided, must exist)

**Field Mappings with Validation:**

```text
Mapping 1: Source "CustNo" → Destination "No."
  Validate Destination Field: Yes
  (Validates: Code format, length)

Mapping 2: Source "CustName" → Destination "Name"
  Validate Destination Field: Yes
  (Validates: Required, text type, length)

Mapping 3: Source "Address" → Destination "Address"
  Validate Destination Field: Yes
  (Validates: Required, text type)

Mapping 4: Source "Salesperson" → Destination "Salesperson Code"
  Get Value From Lookup: Yes
  Lookup Table: Salesperson/Purchaser
  Lookup Field: Code
  Return Field: Code
  (Validates: Salesperson exists)
```

**Processing:**

```text
Record 1: Valid customer data
  → All fields validate successfully
  → Status: Completed

Record 2: Missing required "Address"
  → Address validation fails
  → Status: Error
  → Message: "Address is required"
  
Record 3: Salesperson "E999" doesn't exist
  → Lookup fails (salesperson not found)
  → Status: Error
  → Message: "Salesperson not found"
```

### Scenario 2: Sales Order Import with Line Validation

**Requirement:** Sales orders must have:

- Valid customer on header
- Valid item on each line
- Quantity > 0
- Unit price valid

**Field Mappings with Validation:**

```text
Header Mappings:
  Customer No. → Get Value From Lookup (Customer table)
    Validate: Yes
  Order Date
    Validate: Yes (Date format)

Line Mappings:
  Item No. → Get Value From Lookup (Item table)
    Validate: Yes
  Quantity → (numeric, > 0)
    Validate: Yes
  Unit Price → (decimal with 2 places)
    Validate: Yes
```

**Processing:**

```text
Order 1: All items exist, quantities valid
  → Validates successfully
  → Status: Completed

Order 2: Line 1 has item "UNKNOWN_ITEM"
  → Item lookup fails
  → Status: Error
  → Message: "Item UNKNOWN_ITEM not found"

Order 3: Line 2 has quantity "ABC"
  → Quantity must be numeric
  → Status: Error
  → Message: "Quantity must be a number"
```

### Scenario 3: Inventory Item Setup Validation

**Requirement:** New items must have:

- Item No. (unique code)
- Description (required)
- Base Unit of Measure (required, must exist)
- Item Category (if provided, must exist)
- Inventory Account (must exist)

**Field Mappings with Validation:**

```text
Item No.
  Validate: Yes (Unique code)

Description
  Validate: Yes (Required text)

Base Unit of Measure
  Get Value From Lookup (Unit of Measure table)
  Validate: Yes

Item Category Code
  Get Value From Lookup (Item Category table)
  Validate: Yes (Or empty if optional)

Inventory Posting Group
  Get Value From Lookup (Inventory Posting Group table)
  Validate: Yes
```

## Validation Error Handling

### When Validation Fails

**Record Status:** Changes to **Error**

**Error Message:** Displays validation reason:

- "Field [Name] is required"
- "Value [ABC] is not valid for field [Code]"
- "[CUST999] not found in lookup table"
- "Field [Price] must be numeric"

**Record Processing:** Stops - record not created

### Reviewing Validation Errors

1. Open **Integration Record** with Status = Error
2. View **Error Details** field for validation message
3. Fix issue in source data
4. Set status back to "Ready"
5. Run **Reprocess Errors** from Integration Process
6. Records revalidated and processed

### Recovering from Validation Failures

#### Option 1: Fix Source Data

```text
Original: Customer with missing address
Fix: Add address to source file
Reprocess: Import runs validation again
Result: Valid address now validates successfully
```

#### Option 2: Fix BC Reference Data

```text
Original: Item lookup fails (item doesn't exist)
Fix: Create item in BC with required information
Reprocess: Import runs lookup again
Result: Item now found, validates successfully
```

#### Option 3: Adjust Field Mappings

```text
Original: Field validation too strict
Option: Disable validation for optional fields
Result: Only required fields validated
```

## Validation and Lookup Combination

Validation + Lookup = **Referential Integrity**

### Example

```text
Field Mapping: Order Item No.
  Get Value From Lookup: Item table, Code field
  Validate Destination Field: Yes

Processing:
1. Takes source item code (e.g., "VEN_123")
2. Looks up in Item table (finds "IT001")
3. Validates (confirms IT001 exists and is valid)
4. Writes "IT001" to order line

If item lookup fails → Validation fails automatically
```

## Best Practices for Data Validation

1. **Enable for Critical Fields** - Always validate required and lookup fields
2. **Test Validation** - Test with sample invalid data
3. **Document Rules** - Document which fields have validation enabled
4. **Provide Good Error Messages** - Review error messages for clarity
5. **Fix Reference Data First** - Ensure BC has all referenced data before import
6. **Review Error Summary** - After import, review all errors before reprocessing
7. **Gradual Validation** - Start with validation, incrementally add more rules
8. **Validate Keys First** - Enable validation for key fields first (Customer No., Item No.)
9. **Optional vs Required** - Know which fields are required vs optional in BC
10. **Use Lookups for References** - Always use lookups for foreign keys (Item, Customer, etc.)

## Common Validation Issues and Solutions

### Issue 1: "Field is Required" Errors

**Cause:** Source data missing values for required BC fields

**Solution:**

```text
Option 1: Populate field in source data
Option 2: Use Constant field mapping for all records
Option 3: Disable validation if field optional in BC
```

**Example:**

```text
Field: Unit of Measure (required in BC)
Source: Not provided in source file
Solution: Use Constant mapping = "EACH" for all records
```

### Issue 2: Lookup Failures During Validation

**Cause:** Referenced record doesn't exist in BC

**Solution:**

```text
Option 1: Create referenced record in BC first
Option 2: Verify lookup field and return field correct
Option 3: Check source data format matches BC
```

**Example:**

```text
Lookup: Item lookup fails for "ITEM_999"
Solution: Create Item "ITEM_999" in BC first, then reprocess
```

### Issue 3: Data Type Mismatch

**Cause:** Source value wrong type for BC field

**Solution:**

```text
Option 1: Fix source data to correct type
Option 2: Preprocess source data (text to number conversion)
Option 3: Use field mapping with data conversion
```

**Example:**

```text
Field: Quantity (must be decimal)
Source: "ABC"
Solution: Fix source to numeric value (e.g., "10")
```

### Issue 4: Decimal/Number Format Issues

**Cause:** Number format not matching BC field precision

**Solution:**

```text
Option 1: Adjust decimal places in source
Option 2: Check field decimal place settings in BC
Option 3: Use regional settings (comma vs period)
```

**Example:**

```text
Price field (2 decimals): "10.5"
System expects: "10.50"
Solution: Ensure source provides 2 decimal places
```

## Validation Performance

- Validation adds small processing time per field
- Complex lookups during validation slower than simple field validation
- For large imports: Consider validating sample first, then full import
- Mass validation can temporarily increase BC server load

## Advanced: Custom Validation

For complex business rules beyond standard field validation:

**Option 1:** Use field mapping with constants for validation
**Option 2:** Create custom AL extension for advanced validation rules
**Option 3:** Implement validation in custom table triggers

## Next Steps

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Use Field Lookups](how-to-field-value-mapping.md)
- [How to Handle Errors](how-to-error-handling.md)

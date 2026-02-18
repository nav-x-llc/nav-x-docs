# How to Create an Excel Import Integration

This guide walks you through creating and configuring an integration to import Excel files into Business Central.

## Prerequisites

- **Permission** - You have NAVX IF STANDARD or NAVX IF ALL permission set
- **Excel File** - You have an Excel file (.xlsx) with data to import
- **Target Table** - You know which Business Central table will receive the data

## Step-by-Step Process

### Step 1: Create a New Integration

1. Navigate to **Integration Framework** → **Integrations**
2. Click **New**
3. Complete the following fields:
   - **Code** - Unique identifier (e.g., "CUSTOMER_IMPORT")
   - **Description** - Clear name (e.g., "Customer Master from Excel")
   - **Integration Type** - Select **Excel**
   - **Direction** - Select **Import**

### Step 2: Configure Column Mapping

1. From the Integration, click **Integration Fields**
2. For each column in your Excel file:
   - Click **New**
   - **Source Column** - Enter column letter (e.g., "A", "B", "C") or number (1, 2, 3)
   - **Column Name** - Enter the field name (e.g., "Customer Code", "Customer Name")
   - **Column Type** - Select **Standard** for regular data columns

3. **Optional**: For fixed values that aren't in the Excel file:
   - **Column Type** - Select **Constant**
   - **Constant Value** - Enter the fixed value (e.g., "USD" for currency code)

### Step 3: Map Fields to Business Central

1. From the Integration, click **Integration Mappings**
2. For each field, create a mapping:
   - **Source Field** - Select the source field from Step 2
   - **Destination Table** - Select target table (e.g., "Customer")
   - **Destination Field** - Select BC field that receives the data
   - **Validate** - Enable to validate field values during import

3. **Optional - For lookups** (e.g., matching Customer No. codes):
   - **Get Value From Lookup** - Enable
   - **Lookup Table** - Select lookup table
   - **Lookup Field** - Select field to match against
   - **Return Field** - Select field value to use

### Step 4: Configure Excel Import Settings

1. Back on the Integration header, set these options:
   - **Skip Header Lines** - Set to 1 (for typical Excel with header row)
   - **Skip Footer Lines** - Set as needed
   - **Auto Process** - Enable to automatically process after import

### Step 5: Import and Review Data

1. Click **Import** on the Integrations list
2. Select your Excel file (.xlsx)
3. Review the imported records on the **Integration Records** page
   - Status shows **New** or **Ready to Process**
   - Verify data accuracy

### Step 6: Process Data into Business Central

1. Select records to process (or all records)
2. Click **Process** or **Process All**
3. Records move to **Completed** or **Error** status
4. If errors exist, click **Show Errors** to view details

## Key Features for Excel Import

### Header Row Handling

If your Excel file has column headers:

- Set **Skip Header Lines** to 1
- The headers are skipped during data processing
- Your source column references (A, B, C) map to the actual data rows

### Data Type Handling

Excel import automatically handles:

- **Text** - Imported as-is
- **Numbers** - Converted to appropriate format (integer, decimal)
- **Dates** - Must be in BC recognizable format
- **Empty cells** - Treated as empty values
- **Mixed types** - Column treated as text

### Working with Multiple Sheets

To import from a specific sheet:

1. Create separate integrations for each sheet
2. Reference the sheet contents in distinct field mappings
3. Process sheets independently or in sequence

## Common Scenarios

### Scenario 1: Customer Master Import

**Excel structure:**

- Column A: Customer Code
- Column B: Customer Name
- Column C: Phone Number
- Column D: Fixed value: "USD" (currency)

**Configuration:**

```text
Integration Type: Excel
Source Fields:
  - Field 1: "Customer Code" (Column A, Standard)
  - Field 2: "Customer Name" (Column B, Standard)
  - Field 3: "Phone" (Column C, Standard)
  - Field 4: "Currency Code" (Constant = USD)

Mappings:
  - "Customer Code" → Customer.No.
  - "Customer Name" → Customer.Name
  - "Phone" → Customer."Phone No."
  - "Currency Code" → Customer."Currency Code"
```

### Scenario 2: Sales Order with Lookups

**Excel structure:**

- Column A: Order Code (business key)
- Column B: Customer Code (lookup to Customer.No.)
- Column C: Item Code (lookup to Item.Code)
- Column D: Quantity

**Configuration:**

```text
Mapping for Customer Code field:
  - Get Value From Lookup: Yes
  - Lookup Table: Customer
  - Lookup Field: "Business ID"
  - Return Field: "No."

Mapping for Item Code field:
  - Get Value From Lookup: Yes
  - Lookup Table: Item
  - Lookup Field: "Vendor Item Code"
  - Return Field: "No."
```

## Troubleshooting

### Issue: "Data type mismatch" errors

- **Cause** - Excel column contains mixed data types
- **Solution** - Format Excel column consistently (e.g., all text or all numbers)
- **Validation** - Check Excel cell formatting before export

### Issue: "Field not found" errors

- **Cause** - Incorrect mapping to Business Central field
- **Solution** - Verify field exists in target table and is accessible
- **Check** - Column type and field properties in Business Central

### Issue: Lookup values not matching

- **Cause** - Source value doesn't exist in lookup table
- **Solution** - Verify lookup values match exactly (case-sensitive by default)
- **Debug** - Check lookup field values in destination table

### Issue: Empty cells causing errors

- **Cause** - Required field receives empty value
- **Solution** - Pre-fill Excel with required values or make field optional
- **Alternative** - Use Constant field type to provide default values

## Best Practices

1. **Validate Before Import** - Check Excel data format and values match Business Central expectations
2. **Test with Sample** - Import small sample first before large datasets
3. **Use Headers** - Include descriptive headers in Excel for clarity (set skip = 1)
4. **Error Review** - Always review error messages before reprocessing
5. **Backup First** - Ensure data backup before processing large imports
6. **Map Carefully** - Double-check field mappings to prevent incorrect data placement
7. **Enable Validation** - Use field validation in mappings to catch errors early
8. **Use Lookups** - Prefer lookups for codes/keys rather than manual entry

## Next Steps

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Use Field Value Mapping](how-to-field-value-mapping.md)
- [How to Handle Errors](how-to-error-handling.md)

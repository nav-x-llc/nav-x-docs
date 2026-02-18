# How to Create a CSV Import Integration

This guide walks you through creating and configuring an integration to import CSV (Comma-Separated Values) files into Business Central.

## Prerequisites

- **Permission** - You have NAVX IF STANDARD or NAVX IF ALL permission set
- **CSV File** - You have a CSV file (.csv) with data to import
- **Target Table** - You know which Business Central table will receive the data

## CSV Format Overview

A typical CSV file looks like:

```csv
CustomerCode,CustomerName,PhoneNumber
CUST001,Contoso Inc,555-0100
CUST002,Northwind Traders,555-0101
CUST003,Fabrikam Inc,555-0102
```

Key characteristics:

- **Delimiter** - Comma separates fields (can be configured to semicolon, pipe, tab, etc.)
- **First Row Optional** - Can be headers or data
- **Field Values** - Plain text, no quotes needed unless value contains delimiter
- **Line Endings** - CRLF (Windows) or LF (Mac/Linux) supported

## Step-by-Step Process

### Step 1: Create a New Integration

1. Navigate to **Integration Framework** → **Integrations**
2. Click **New**
3. Complete the following fields:
   - **Code** - Unique identifier (e.g., "VENDOR_CSV_IMPORT")
   - **Description** - Clear name (e.g., "Vendor Master from CSV")
   - **Integration Type** - Select **CSV**
   - **Direction** - Select **Import**

### Step 2: Configure CSV Delimiters

1. On the Integration, set these fields:
   - **Field Delimiter Type** - Select **Comma** (or appropriate delimiter)
   - **Record Delimiter Type** - Select **CRLF** (Windows) or **LF** (Unix/Mac)
   - **Skip Characters** - 0 (unless file has encoding markers like BOM)

2. **For custom delimiters** (if not using standard delimiters):
   - **Field Delimiter Type** - Select **Custom**
   - **Field Delimiter** - Enter your custom delimiter (e.g., "~" or "|")

### Step 3: Configure Column Mapping

1. From the Integration, click **Integration Fields**
2. For each column in your CSV file (in order):
   - Click **New**
   - **Source Column** - Enter column position (1, 2, 3, etc.)
   - **Column Name** - Enter the field name (e.g., "Vendor Code", "Vendor Name")
   - **Column Type** - Select **Standard** for regular data columns

3. **Optional**: For fixed values:
   - **Column Type** - Select **Constant**
   - **Constant Value** - Enter the fixed value

### Step 4: Map Fields to Business Central

1. From the Integration, click **Integration Mappings**
2. For each field, create a mapping:
   - **Source Field** - Select the source field from Step 3
   - **Destination Table** - Select target table (e.g., "Vendor")
   - **Destination Field** - Select BC field
   - **Validate** - Enable to validate field values

### Step 5: Configure CSV Import Settings

1. Back on Integration header:
   - **Skip Header Lines** - Set to 1 (if first row contains headers), 0 (if first row is data)
   - **Skip Footer Lines** - Set as needed
   - **Auto Process** - Enable if you want automatic processing

### Step 6: Prepare Your CSV File

CSV file preparation checklist:

- [ ] First row contains headers (if Skip Header = 1)
- [ ] All rows have same number of columns (matching Source Columns)
- [ ] Special characters escaped properly (commas in quotes: `"Smith, John"`)
- [ ] Empty fields represented as empty (no spaces)
- [ ] Dates in Business Central recognizable format
- [ ] Text values without unnecessary quotes

**Example CSV with quoted fields:**

```csv
CustomerCode,CustomerName,Address
CUST001,"Contoso Inc",123 Main Street
CUST002,"Smith, John & Associates","555 Oak Lane, Suite 10"
CUST003,Northwind Traders,789 Pine Road
```

### Step 7: Import and Review

1. Click **Import** on Integrations list
2. Select your CSV file (.csv)
3. System parses CSV based on configured delimiters
4. Review records on **Integration Records** page

### Step 8: Process Data

1. Select records or click **Process All**
2. Records move to **Completed** or **Error** status
3. Review errors if any

## CSV Delimiter Types

| Delimiter Type | Character | Use Case |
| --- | --- | --- |
| **Comma** | `,` | Standard CSV files (RFC 4180) |
| **Semicolon** | `;` | European CSV files (Excel default in some locales) |
| **Pipe** | `\|` | Data containing commas or tabs |
| **Tab** | `\t` (↔) | Tab-separated values (TSV) |
| **Space** | ` ` | Space-separated (whitespace-separated) |
| **Custom** | User-defined | Non-standard delimiters |

## CSV Record Delimiter Options

| Delimiter Type | Description |
| --- | --- |
| **CRLF** | Windows line ending (Carriage Return + Line Feed) - **Default** |
| **LF** | Unix/Mac line ending (Line Feed only) |
| **CR** | Older Mac format (Carriage Return only) |
| **Custom** | User-specified delimiter (e.g., semicolon between records) |

## Special Cases

### Empty Fields in CSV

CSV handles empty fields:

```csv
CustomerCode,CustomerName,Balance
CUST001,Contoso Inc,1000
CUST002,,0
CUST003,Northwind Traders,2500
```

The empty field in row 2 (missing customer name) is imported as empty. Map validation to catch required fields.

### Fields with Delimiter Characters

When a field **contains the delimiter character**, use quotes:

```csv
CustomerCode,CustomerName,Description
CUST001,Contoso Inc,"Main office, New York"
CUST002,Smith & Associates,"Products: Paper, Ink, Pens"
```

System automatically handles quoted fields during import.

### Quoted Fields with Quotes

Escape embedded quotes with double quotes:

```csv
CustomerCode,CustomerName
CUST001,"Contoso ""Corp"" Inc"
CUST002,"Smith's & Sons Ltd"
```

Result:

- CUST001: `Contoso "Corp" Inc`
- CUST002: `Smith's & Sons Ltd`

### Large CSV Files

CSV files with 1000+ records work without issues:

- System parses entire file into memory first
- Processes records individually
- Errors tracked per-record
- Failed records can be corrected and reprocessed

## Common Scenarios

### Scenario 1: Basic Vendor Import

**CSV file (vendor.csv):**

```csv
VendorCode,VendorName,VendorGroup
VEND001,Supplier A,DOMESTIC
VEND002,Supplier B,DOMESTIC
VEND003,Supplier C,INTERNATIONAL
```

**Configuration:**

```text
Integration Type: CSV
Field Delimiter Type: Comma
Record Delimiter Type: CRLF
Skip Header Lines: 1

Source Fields:
  - Field 1: "Vendor Code" (Column 1, Standard)
  - Field 2: "Vendor Name" (Column 2, Standard)
  - Field 3: "Vendor Group" (Column 3, Standard)

Mappings:
  - "Vendor Code" → Vendor.No.
  - "Vendor Name" → Vendor.Name
  - "Vendor Group" → Vendor."Vendor Posting Group"
```

### Scenario 2: European CSV (Semicolon-Delimited)

**CSV file (customers_eu.csv):**

```csv
CustNo;CustName;City;Country
C001;Contoso GmbH;Berlin;DE
C002;Northwind SARL;Paris;FR
C003;Fabrikam NV;Antwerp;BE
```

**Configuration:**

```text
Field Delimiter Type: Semicolon
Record Delimiter Type: CRLF
Skip Header Lines: 1

Source Fields:
  - Field 1: "Customer No." (Column 1)
  - Field 2: "Customer Name" (Column 2)
  - Field 3: "City" (Column 3)
  - Field 4: "Country Code" (Column 4)
```

### Scenario 3: Tab-Separated with Mixed Content

**CSV file (items.csv) - actually TSV:**

```csv
ItemCode ItemName Category Price
IT001 Widget A PROD 99.99
IT002 Service B SERV 150.00
IT003 License C SOFT 299.99
```

**Configuration:**

```text
Field Delimiter Type: Tab
Skip Header Lines: 1

Source Fields:
  - Field 1: "Item Code"
  - Field 2: "Item Name"
  - Field 3: "Category"
  - Field 4: "Price"
```

## Troubleshooting

### Issue: "Wrong number of columns" error

- **Cause** - CSV rows have inconsistent column counts
- **Solution** - Verify all rows have same number of delimiters
- **Check** - Open CSV in text editor to verify delimiter consistency

### Issue: "No records found" after import

- **Cause** - Wrong record delimiter setting
- **Solution** - Change Record Delimiter Type to match your file (CRLF, LF, or CR)
- **Verify** - Check file encoding (should be UTF-8 or ASCII)

### Issue: Data overlapping or in wrong columns

- **Cause** - Wrong field delimiter setting
- **Solution** - Verify delimiter matches actual file separator
- **Example** - If using comma but file has semicolons, change to Semicolon

### Issue: Quoted field values losing quotes

- **Cause** - This is correct behavior; quotes are field delimiters
- **Expected** - Value `"Smith, John"` → Result: `Smith, John` (quotes removed)
- **Double Quotes** - Use `""` inside quoted field to escape: `"Jones ""Jr"" Ltd"` → `Jones "Jr" Ltd`

### Issue: Special characters showing as ?

- **Cause** - File encoding mismatch (CSV encoded as Latin-1, expecting UTF-8)
- **Solution** - Re-export CSV as UTF-8 encoding
- **Verify** - Check file properties or re-export from source system

## Best Practices

1. **Use Standard Delimiters** - Stick to comma or semicolon unless required otherwise
2. **Include Headers** - Use first row as headers for clarity (set Skip Header = 1)
3. **Consistent Columns** - Ensure all rows have same number of fields
4. **Quote Complex Values** - Use quotes for fields containing delimiters or commas
5. **UTF-8 Encoding** - Export CSV as UTF-8 to avoid special character issues
6. **Test First** - Import small sample before large files
7. **Validate Fields** - Enable validation for critical fields in mappings
8. **Error Review** - Check error messages before reprocessing
9. **Backup Data** - Backup Business Central data before large imports
10. **Document Mapping** - Document which CSV columns map to which BC fields

## Performance

- **File Size** - CSV files of 10,000+ records process without performance impact
- **Processing** - System processes records one at a time for error tracking
- **Memory** - File is read entirely into memory (consider breaking very large files >100MB)
- **Job Queue** - Enable Auto Process and schedule via job queue for background processing

## Next Steps

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Use Field Value Mapping](how-to-field-value-mapping.md)
- [How to Create Fixed-Length Text Import](how-to-fixed-length-text-import.md)
- [How to Create Flexible Text Import](how-to-flexible-text-import.md)

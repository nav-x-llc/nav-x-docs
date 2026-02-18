# How to Create a Flexible-Length Text File Import

This guide walks you through creating flexible-length text file imports for non-standard delimited data.

## What is Flexible-Length Text?

Flexible-length text allows **variable-length fields separated by custom delimiters** (not fixed character positions). Values can have different lengths on each row.

**Example:**

```text
John|Contoso Inc|USA
Jane|Smith & Associates Ltd|Canada
Bob|XYZ Corp|Mexico
```

Each record has same number of fields, but different widths. Field separator is `|` (pipe).

## Prerequisites

- **Text File** - .txt file with delimited data
- **Identified Delimiters** - What separates fields (comma, pipe, tab, etc.)
- **Line Endings** - How records end (CRLF, LF, CR)
- **Field Count** - Consistent number of fields per record

## Step-by-Step Process

### Step 1: Create Integration

1. Navigate to **Integration Framework** → **Integrations**
2. Click **New**
3. Complete:
   - **Code** - Unique identifier (e.g., "CONTACTS_TEXT_FLEX")
   - **Description** - Clear name
   - **Integration Type** - Select **Text**
   - **Direction** - Select **Import**

### Step 2: Configure Text Parsing

1. On Integration header, set:
   - **Text Parsing Type** - Select **Flexible Length**
   - **Field Delimiter Type** - Select delimiter type:
     - **Comma** - For CSV-like files
     - **Semicolon** - For European formats
     - **Pipe** - For pipe-separated (`|`)
     - **Tab** - For tab-separated files
     - **Space** - For space-separated fields
     - **Custom** - For non-standard delimiter

2. If using custom delimiter:
   - **Field Delimiter** - Enter the actual character (e.g., "~")

3. Set **Record Delimiter Type**:
   - **CRLF** - Windows (default)
   - **LF** - Unix/Mac
   - **CR** - Older Mac
   - **Custom** - Non-standard line separator

4. **Optional - Quoted Fields**:
   - **Field Surround Character** - Set to `"` if file uses quoted fields
   - **Escape Character** - Set to `\` for escaping quotes in values

### Step 3: Configure Fields

1. Click **Integration Fields**
2. For each data column (in order):
   - Click **New**
   - **Source Column** - Enter column position (1, 2, 3, etc.)
   - **Column Name** - Enter field name
   - **Column Type** - Select **Standard**

3. **Example (3 columns):**
   - Field 1: "FirstName" (Column 1)
   - Field 2: "CompanyName" (Column 2)
   - Field 3: "Country" (Column 3)

### Step 4: Map to Business Central

1. Click **Integration Mappings**
2. Create mapping for each field:
   - **Source Field** - Select source field
   - **Destination Table** - Select BC table
   - **Destination Field** - Select BC field

### Step 5: Import and Process

1. Click **Import** on Integrations list
2. Select text file (.txt)
3. Review on **Integration Records** page
4. Click **Process All** to import

## Special Considerations

### 1. Quoted Fields

When text values **contain the delimiter character**, use quotes:

**File:**

```text
John|"Smith, Jr."|USA
Jane|"Wilson & Associates"|Canada
```

**Configuration:**

- **Field Delimiter Type** - Pipe
- **Field Surround Character** - `"`
- **Escape Character** - Leave blank or `\`

**Result:**

- Field 1: John, Field 2: Smith, Jr., Field 3: USA
- Field 1: Jane, Field 2: Wilson & Associates, Field 3: Canada

### 2. Escaped Quotes in Values

When quotes are **inside a quoted field**, use escape character:

**File:**

```text
"Product ""Deluxe"" Model"|500|PROD
"Widget ""XL"" Size"|250|ITEM
```

**Configuration:**

- **Field Surround Character** - `"`
- **Escape Character** - `\` (or `"` for CSV-style double-quote escaping)

**Result:**

- Product "Deluxe" Model (quotes preserved in value)
- Widget "XL" Size (quotes preserved in value)

### 3. Empty Fields

Empty fields are preserved between delimiters:

**File:**

```text
John||USA
Jane|Smith|Canada
```

**Result:**

- Row 1: John, [EMPTY], USA
- Row 2: Jane, Smith, Canada

Empty field values are imported as empty. Validation catches missing required fields.

### 4. Variable Field Counts Per Row

Each row can have **different number of fields**:

**File:**

```text
John|Contoso Inc|USA|Sales
Jane|Smith Ltd|Canada
Bob|XYZ Corp|Mexico|Development|Manager
```

**Handling:**

- Row 1: Fields 1-4 (4 fields)
- Row 2: Fields 1-3 (missing field 4)
- Row 3: Fields 1-5 (5 fields, extras ignored)

Define **maximum expected fields**. Missing fields treated as empty. Extra fields ignored.

### 5. Line Endings

Different systems use different line endings:

| Type | Bytes | System |
| --- | --- | --- |
| **CRLF** | `\r\n` | Windows (default) |
| **LF** | `\n` | Unix, Mac, Linux |
| **CR** | `\r` | Old Mac systems |

**Configuration:**

- Windows files: Set **Record Delimiter Type** = CRLF
- Unix/Linux files: Set **Record Delimiter Type** = LF
- **Wrong setting** = "No records found" error

### 6. Character Encoding

System supports multiple encodings:

| Encoding | Use When |
| --- | --- ||
| **UTF-8** | Universal, includes special characters |
| **ASCII** | Plain text, English only |
| **UTF-16** | Some export systems use this |

**BOM Handling:**

- Byte Order Mark (BOM) automatically removed
- No action required from user
- System detects and removes UTF-8, UTF-16 BOMs

### 7. Trailing Delimiters

Trailing delimiters create empty columns:

**File:**

```text
John|Smith|USA|
Jane|Wilson|Canada|
```

**Result:**

- Field 4 (empty) is created for each row
- Define Field 4 if needed, otherwise extra columns ignored

### 8. Special Character Handling

**Tab character** - Configure as delimiter:

- **Field Delimiter Type** - Select **Tab**
- File uses actual tab characters between fields

**Custom delimiters** - Examples:

- Tilde: `~`
- Hash: `#`
- Caret: `^`
- Any single character

## Common Scenarios

### Scenario 1: Pipe-Separated Employee Data

**Data (employees.txt):**

```text
EMP001|John Smith|Sales|EMEA
EMP002|Jane Wilson|Marketing|APAC
EMP003|Bob Johnson|Support|AMER
```

**Configuration:**

```text
Text Parsing Type: Flexible Length
Field Delimiter Type: Pipe
Record Delimiter Type: CRLF

Fields:
  - Field 1: "Employee Code" (Column 1, Standard)
  - Field 2: "Employee Name" (Column 2, Standard)
  - Field 3: "Department" (Column 3, Standard)
  - Field 4: "Region" (Column 4, Standard)

Mappings:
  - "Employee Code" → Employee."No."
  - "Employee Name" → Employee.Name
  - "Department" → Employee."Department Code"
  - "Region" → Employee."Region Code"
```

### Scenario 2: European Format with Semicolon

**Data (customers_eu.txt):**

```text
C001;Contoso GmbH;Berlin
C002;Northwind SARL;Paris
C003;Fabrikam NV;Antwerp
```

**Configuration:**

```text
Field Delimiter Type: Semicolon
Record Delimiter Type: LF (for Unix files)

Fields:
  - Field 1: "Customer Code"
  - Field 2: "Customer Name"
  - Field 3: "City"
```

### Scenario 3: Quoted Fields with Commas

**Data (orders.txt):**

```text
ORD001,"Smith, John & Associates",USA,10000
ORD002,"Wilson & Co Ltd","Canada",5000
ORD003,"Brown, Johnson & Partners",Mexico,7500
```

**Configuration:**

```text
Field Delimiter Type: Comma
Field Surround Character: " (double quote)

Fields:
  - Field 1: "Order Code"
  - Field 2: "Customer Name"
  - Field 3: "Country"
  - Field 4: "Amount"
```

### Scenario 4: Tab-Separated (TSV)

**Data (items.txt):**

```text
IT001 Widget A 100 ACTIVE
IT002 Service B 200 ACTIVE
IT003 License C 300 INACTIVE
```

**Configuration:**

```text
Field Delimiter Type: Tab
Skip Header Lines: 0 (no header row)

Fields:
  - Field 1: "Item Code"
  - Field 2: "Item Name"
  - Field 3: "Price"
  - Field 4: "Status"
```

## Troubleshooting

### Issue: "No records found" after import

- **Cause** - Wrong record delimiter setting
- **Solution** - Check OS where file was created:
  - Windows → CRLF
  - Mac/Linux → LF
- **Verify** - Open file in text editor; count line breaks

### Issue: Data combined into single field

- **Cause** - Wrong field delimiter setting
- **Solution** - Verify delimiter matches actual file separator
- **Check** - Open file in text editor to see actual separators

### Issue: Quote characters appearing in data

- **Cause** - Not configured quote handling when file has quoted fields
- **Solution** - Set **Field Surround Character** to `"`
- **Result** - Quotes removed from output, content extracted

### Issue: Extra empty columns

- **Cause** - Trailing delimiters creating empty fields
- **Solution** - Ignore extra empty columns or define mappings for them
- **Expected** - CSV standard behavior with trailing delimiters

### Issue: "Must define at least one field" error

- **Cause** - No fields defined in Integration Fields
- **Solution** - Click **Integration Fields** and create field definitions for each column

## Best Practices

1. **Know Your Delimiters** - Identify exact delimiter characters first
2. **Verify Line Endings** - Check file origin (Windows=CRLF, Unix=LF)
3. **Test Small Files First** - Validate configuration with small dataset
4. **Use Standard Delimiters** - Prefer comma, semicolon, pipe, tab
5. **Quote Complex Values** - Automatically handle fields with delimiters
6. **Escape Quotes** - Use escape character for embedded quotes: `"value ""quoted"" here"`
7. **Enable Validation** - Enable in mappings to catch errors early
8. **Document Delimiters** - Document which delimiters configuration uses
9. **Review Errors** - Check error details before reprocessing
10. **Backup First** - Backup BC data before large imports

## Next Steps

- [How to Create Fixed-Length Text Import](how-to-fixed-length-text-import.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Handle Errors](how-to-error-handling.md)

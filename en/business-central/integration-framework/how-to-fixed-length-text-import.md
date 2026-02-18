# How to Create a Fixed-Length Text File Import

This guide walks you through creating fixed-length text file imports where each field occupies a specific character position and length.

## What is Fixed-Length Text?

Fixed-length format uses **character positions** to define field boundaries. Each field occupies exact positions, regardless of actual value length.

**Example:**

```text
Positions:    1234567890123456789012345678901234567890
Data:         John      Contoso Inc  United States
Jane          Smith     Wilson Ltd   Canada
James         Brown     XYZ Corp     Mexico
```

- Characters 1-10: First Name (padded to 10 chars)
- Characters 11-25: Company (padded to 15 chars)
- Characters 26-40: Country (padded to 15 chars)

## Prerequisites

- **Text File** - .txt file with fixed-width data
- **Field Positions** - Know start position of each field
- **Field Lengths** - Know length of each field
- **Line Format** - Consistent line lengths and format

## Step-by-Step Process

### Step 1: Analyze the Text File

Open text file in a monospace font editor to understand structure:

```text
Start=1, Length=4: ORDER
Start=5, Length=2: TYPE
Start=7, Length=10: CUSTOMER
Start=17, Length=15: PRODUCT
Start=32, Length=8: QTY
```

**Note:** Use file ruler or copy into Excel to identify exact positions.

### Step 2: Create Integration

1. Navigate to **Integration Framework** → **Integrations**
2. Click **New**
3. Complete:
   - **Code** - Unique identifier (e.g., "ORDERS_TEXT_FIXED")
   - **Description** - Clear name
   - **Integration Type** - Select **Text**
   - **Direction** - Select **Import**

### Step 3: Configure Text Parsing

1. On Integration header:
   - **Text Parsing Type** - Select **Flexible Length** (confusing name, but required first)
   - Change **Text Parsing Type** to **Fixed Length**

   When you change to Fixed Length:
   - Field delimiters are automatically cleared
   - Preparation for position-based field definition

2. Set **Record Delimiter Type**:
   - **CRLF** - Windows (default)
   - **LF** - Unix/Mac
   - **CR** - Older Mac

3. **Sorting Order** - Used for field lookup (leave as default or match Integration No.)

### Step 4: Define Fields with Positions

1. Click **Integration Fields**
2. For each field:
   - Click **New**
   - **Source Column** - Will auto-populate (matches Field No.)
   - **Column Name** - Enter field name
   - **Column Type** - Select **Standard**
   - **Start Position** - Enter first character position (e.g., 1, 11, 26)
   - **Field Length** - Enter number of characters (e.g., 10, 15, 8)

### Step 5: Example Field Definition

For the example file above:

| Field No. | Column Name | Start Position | Field Length |
| --- | --- | --- | --- |
| 1 | Order Code | 1 | 4 |
| 2 | Order Type | 5 | 2 |
| 3 | Customer Code | 7 | 10 |
| 4 | Product Code | 17 | 15 |
| 5 | Quantity | 32 | 8 |

**Note:** Positions can overlap or have gaps. Define only fields you need.

### Step 6: Map to Business Central

1. Click **Integration Mappings**
2. Create mapping for each field:
   - **Source Field** - Select from Step 4
   - **Destination Table** - Select BC table
   - **Destination Field** - Select BC field
   - **Validate** - Enable for validation

### Step 7: Configure Remaining Options

1. Set optional fields:
   - **Skip Header Lines** - Usually 0 for fixed-length files
   - **Skip Footer Lines** - Set if file has summary rows at end
   - **Auto Process** - Enable if you want automatic processing

### Step 8: Import and Process

1. Click **Import** on Integrations list
2. Select text file (.txt)
3. System extracts fields based on positions
4. Review on **Integration Records** page
5. Click **Process All** to import into BC

## Special Considerations

### 1. Start Position and Length

**Correctly calculated:**

- Start Position 1, Length 10 = Characters 1-10
- Start Position 11, Length 15 = Characters 11-25
- Start Position 26, Length 8 = Characters 26-33

**Incorrect (common mistake):**

- Start Position 1, Length 10 = Characters 1-11 (off by one)
- Always count character positions, not array indices

### 2. Overlapping Fields

Fields can **skip or overlap** based on your needs:

**File (40 chars per line):**

```text
123456789012345678901234567890123456789012345
Field A (1-5)  Field B (6-20)        Field C (21-40)
ABCDE Field B Data         Field C Data is here
FGHIJ Another Field B      Another Field C
```

**Configuration:**

```text
Field 1: Start=1, Length=5
Field 2: Start=6, Length=15
Field 3: Start=21, Length=20
```

**Gaps allowed:**

- Positions 1-5, 6-20, 21-40 = No gap
- Positions 1-5, 10-20, 25-40 = Gap at 6-9 and 21-24 (ignored)

### 3. Whitespace Padding

Fixed-length files typically use spaces for padding:

**File:**

```text
John      Smith     
Jane      Wilson    
Bob       Johnson   
```

**Handling:**

- Extracted as: "John      " (with spaces)
- BC field validation may ignore trailing spaces
- Use BC field settings to trim whitespace if needed

**Alternative:**

- Some fixed-length systems use zeros: "John000000"
- Configurable via BC field type and length

### 4. Partial Line Handling

If a line is **shorter than expected**:

- Fields requesting positions beyond end treat as empty
- If line is "ABC" and you request Start=5, Length=5 → Empty value
- Validation catches required field missing

### 5. Longer Than Expected

If a line is **longer than used fields**:

- Extra characters beyond your defined fields are ignored
- No error occurs
- Extraction only uses defined start/length positions

### 6. Empty Lines

Empty lines are **skipped automatically**:

- System ignores lines with no content
- Useful for files with blank separator lines between records
- Does not affect record count

### 7. Line Ending Handling

Line endings are detected based on **Record Delimiter Type**:

| Setting | Result |
| --- | --- |
| CRLF | Split on `\r\n` (Windows, default) |
| LF | Split on `\n` (Unix/Mac) |
| CR | Split on `\r` (Older systems) |

**Wrong setting** → "No records found" error

- Verify file origin and set accordingly

### 8. Special Characters in Fixed Positions

**Tab characters** - Treated as single character:

- If file uses tabs for formatting, tabs count as 1 character position
- Adjust Start Position accordingly

**Special chars** - All characters occupy 1 position:

- Numbers, letters, symbols, spaces all = 1 position
- Unicode characters may be multiple bytes but count as 1 position

## Common Scenarios

### Scenario 1: Standard Financial Import

**File structure (each line 40 characters):**

```text
Positions:  1-6     7-10    11-20           21-30       31-40
Content:    AcctNo  Type    Description     Amount      CostCtr
            100100  1       Sales Revenue   500000.00   CC001
            100200  2       Sales Return    -50000.00   CC001
            100300  1       Service Fee     25000.00    CC002
```

**Configuration:**

```text
Field 1: "Account Number"
  Start Position: 1
  Field Length: 6

Field 2: "Transaction Type"
  Start Position: 7
  Field Length: 4

Field 3: "Description"
  Start Position: 11
  Field Length: 10

Field 4: "Amount"
  Start Position: 21
  Field Length: 10

Field 5: "Cost Center"
  Start Position: 31
  Field Length: 10
```

### Scenario 2: Legacy Mainframe Format

**File structure (COBOL-style fixed format):**

```text
EDEMP001 JOHN      SMITH     SALES   20001
EDEMP002 JANE      WILSON    MARK    20002
EDEMP003 BOB       JOHNSON   SUPPORT 20003
```

Positions:

- 1-5: Record Type (EDEMP)
- 6-12: Employee ID
- 13-22: First Name
- 23-32: Last Name
- 33-40: Department
- 41-45: Cost Center

**Configuration:**

```text
Field 1: Employee Code, Start=6, Length=7
Field 2: First Name, Start=13, Length=10
Field 3: Last Name, Start=23, Length=10
Field 4: Department, Start=33, Length=8
Field 5: Cost Center, Start=41, Length=5
```

### Scenario 3: Mixed Length with Gaps

**Bank statement format:**

```text
TRNHDR00120250218001                    CTZ
TRNACC00100    00001234567890            
TRNAMT000100000000001500.00CREDITCAH
TRNMMO00CUSTOMER DEPOSIT                
```

Each transaction group is ~45 characters, with different record types at positions 1-8.

**Configuration:**

```text
Parse based on positions:
- Positions 1-8: Record Type
- Positions 9-20: Sequence
- Positions 21-40: Data field
- Positions 41-45: Indicator
```

## Troubleshooting

### Issue: "No records found"

- **Cause** - Wrong record delimiter or file format
- **Solution** - Verify record delimiter matches file line endings
- **Check** - Try different Record Delimiter Type (CRLF, LF, CR)

### Issue: Data in wrong columns

- **Cause** - Incorrect start position or field length
- **Solution** - Re-check field positions in file
- **Verify** - Count characters manually or use ruler in editor

### Issue: Fields showing truncated

- **Cause** - Field length too short
- **Solution** - Increase Field Length to capture full value
- **Example** - If field should be 15 chars but set to 10, only 10 extracted

### Issue: Extra spaces in extracted values

- **Cause** - Padding spaces included with value
- **Solution** - This is normal fixed-length behavior
- **Action** - BC field validation or trim whitespace if needed

### Issue: Mapping errors for large fields

- **Cause** - Field length larger than BC field capacity
- **Solution** - Check BC field max length and adjust extraction if needed
- **Alternative** - Define longer field and map to BC field type allowing length

## Best Practices

1. **Verify Positions** - Double-check start position and length manually
2. **Use Monospace Font** - Edit file in monospace editor (Notepad++, VS Code)
3. **Test Small File** - Validate with sample before full import
4. **Document Format** - Document file format for future reference
5. **Handle Line Endings** - Verify and set correct Record Delimiter Type
6. **Empty Lines** - OK to have empty lines; system skips them
7. **Extra Characters** - OK to have extra characters beyond defined fields
8. **Gaps Allowed** - OK to have gaps between defined field positions
9. **Enable Validation** - Enable field validation in mappings
10. **Review Errors** - Check error details to debug position/length issues

## Performance

- **File Size** - Fixed-length files of 100K+ lines process without issues
- **Position Calculation** - Fast character extraction by position
- **Memory** - Entire file read into memory (consider breaking very large files >100MB)
- **Processing** - Records processed one at a time for error tracking

## Next Steps

- [How to Create Flexible-Length Text Import](how-to-flexible-text-import.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Handle Errors](how-to-error-handling.md)

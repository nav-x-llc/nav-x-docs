# Page NAV-X Integration Fields

The **Integration Fields** page defines the fields that will be extracted from your source file (Excel, CSV, or Text). Each field definition specifies where the data comes from and how to process it.

**To open:** From the NAV-X Integrations page, select an integration and click the **Fields** action.

## Overview

Integration fields represent:

- **Columns in Excel** (A, B, C, etc.)
- **Columns in CSV** (1, 2, 3, etc.)
- **Fixed positions in Text files** (character offset and length)
- **Constant values** (fixed data applied to all rows)
- **Auto-generated values** (line numbers, entry numbers)

## Key Fields

### Basic Information

| Field | Purpose |
| ------- | --------- |
| **Field No.** | Sequence number for display and processing order |
| **Title** | Field name (for reference; doesn't need to match source) |
| **Column Type** | How the field value is generated (see below) |

### Standard Column Configuration

For **Column Type = Standard** (data from source):

| Field | Purpose | Used For |
| ------- | --------- | ---------- |
| **Source Column** | Where to find the value in source | Excel: A, B, C... / CSV: 1, 2, 3... / Text: Column number |

### Text-Specific Configuration (Fixed-Width)

When Integration Type = Text AND Fixed Width Format = Yes:

| Field | Purpose | Example |
| ------- | --------- | --------- |
| **Start Position** | First character position (1-based) | Position 1 for field starting at column 1 |
| **Field Length** | Number of characters | 5 for a 5-character field |

**Example Fixed-Width Text:**

```text
Position: 1     5     10    15    20
Data:     ACME  001   50.00 2024-01-15
Field:    Name  ID    Price Date
Config:   Start=1, Len=5; Start=6, Len=3; Start=9, Len=5; Start=14, Len=10
```

### Constant Configuration

For **Column Type = Constant**:

| Field | Purpose |
| ------- | --------- |
| **Constant Value** | Fixed value applied to every row |
| **Source Column** | Leave blank (not used for constants) |

### Multi-Row Configuration

| Field | Purpose | When Used |
| ------- | --------- | ----------- |
| **Create Multiple Records** | Split comma-separated values into multiple rows | When source has comma-separated lists |
| **Value Separator** | Delimiter for splitting values | Usually comma (,) when enabled |

**Example:** If source has `"A, B, C"` and "Create Multiple Records" = Yes, creates 3 rows with values A, B, C respectively.

## Column Type Values

### Standard

**Purpose:** Extract value from source file

**Configuration:**

- Set Source Column (Excel: A/B/C, CSV: 1/2/3, Text: column number)
- For fixed-width text: Also set Start Position and Field Length

**Use when:** Most source fields

**Example:**

```text
Title: ItemCode
Column Type: Standard
Source Column: C (Excel) or 3 (CSV)
```

### Constant

**Purpose:** Apply same fixed value to every record

**Configuration:**

- Leave Source Column blank
- Set Constant Value to the fixed value

**Use when:**

- Document Type (all "Order")
- Status (all "Open")
- Company or department (all same)

**Example:**

```text
Title: DocumentType
Column Type: Constant
Constant Value: Order
Source Column: (blank)
```

### Line Numbers (New in v1.3.0)

**Purpose:** Auto-generate line numbers (10, 20, 30...)

**Configuration:**

- Leave Source Column blank
- No Constant Value needed
- System auto-generates incrementing by 10

**Use when:** Sales Line.Line No., Purchase Line.Line No.

**Result:**

```text
Row 1 → Line No. = 10
Row 2 → Line No. = 20
Row 3 → Line No. = 30
```

### Entry Numbers (New in v1.3.0)

**Purpose:** Auto-generate sequential entry numbers (1, 2, 3...)

**Configuration:**

- Leave Source Column blank
- System auto-generates incrementing by 1

**Use when:** Custom entry numbers, sequence tracking

**Result:**

```text
Row 1 → Entry No. = 1
Row 2 → Entry No. = 2
Row 3 → Entry No. = 3
```

### Formula (New in v1.3.0)

**Purpose:** Combine and transform values using formulas

**Configuration:**

- Specify formula using field references
- Example: `=[OrderDate] + 30 days`
- Example: `=UPPER([CustomerCode])`

**Use when:** Calculated fields, concatenation, transformations

**Example:**

```text
Title: DueDate
Column Type: Formula
Formula: =[OrderDate] + 30
```

## Using Start Position and Field Length

**For fixed-width text imports only** (when Integration Type = Text and Fixed Width Format = Yes):

### How It Works

Source text file with fixed positions:

```text
Column:  1         2         3         4
Pos:     123456789012345678901234567890123456789
Data:    ACME12345John Smith    2024-01-15  USD
Field:   Company   ID Code Name            Date Currency
```

**Configuration for each field:**

| Field | Start Position | Field Length |
| ------- | --- | --- |
| Company | 1 | 8 |
| ID Code | 9 | 5 |
| Name | 14 | 16 |
| Date | 30 | 10 |
| Currency | 40 | 3 |

**During import:**

- Company: Extract 8 characters starting at position 1 → "ACME12"
- ID Code: Extract 5 characters starting at position 9 → "345Jo"
- Etc.

### Position Numbering

- **1-based:** First character is position 1 (not 0)
- **Inclusive:** Both start and end positions included in extraction
- **Consecutive:** Typically one field ends where next begins (no gaps)

## Settings and Options

### Column Type Examples by Integration Type

**Excel Integration:**

```json
Field 1: Title=OrderNo, Column Type=Standard, Source Column=A
Field 2: Title=CustomerCode, Column Type=Standard, Source Column=B
Field 3: Title=DocumentType, Column Type=Constant, Constant Value=Order
Field 4: Title=LineNo, Column Type=Line Numbers
```

**CSV Integration:**

```json
Field 1: Title=OrderNo, Column Type=Standard, Source Column=1
Field 2: Title=CustomerCode, Column Type=Standard, Source Column=2
Field 3: Title=DocumentType, Column Type=Constant, Constant Value=Order
Field 4: Title=LineNo, Column Type=Line Numbers
```

**Text (Fixed-Width) Integration:**

```json
Field 1: Title=OrderNo, Column Type=Standard, Start Position=1, Field Length=8
Field 2: Title=CustomerCode, Column Type=Standard, Start Position=9, Field Length=6
Field 3: Title=OrderDate, Column Type=Standard, Start Position=15, Field Length=10
Field 4: Title=DocumentType, Column Type=Constant, Constant Value=Order
Field 5: Title=LineNo, Column Type=Line Numbers
```

## Best Practices

1. **Define fields in logical order** - Field No. determines processing sequence
2. **Use descriptive titles** - Helps with troubleshooting and documentation
3. **Validate Column Type selection**:
   - Will value come from file? → Standard
   - Same value always? → Constant
   - Auto-generate numbers? → Line Numbers or Entry Numbers
   - Transform values? → Formula
4. **For fixed-width text:** Carefully verify Start Position and Field Length match source
5. **Test with sample** before full import
6. **Document assumptions** about source file structure

## Examples

### Example 1: Sales Order Import (Excel)

```text
Title                 Column Type  Source Column  Constant Value
OrderNo               Standard     A              
CustomerCode          Standard     B              
OrderDate             Standard     C              
ItemCode              Standard     D              
Quantity              Standard     E              
UnitPrice             Standard     F              
DocumentType          Constant                    Order
SalesLineType         Constant                    Item
LineNo               Line Numbers   
```

### Example 2: Legacy Vendor Invoice (Fixed-Width Text)

```text
Title                 Column Type  Start Pos  Field Length  Constant Value
VendorNo              Standard     1          6             
VendorName            Standard     7          30            
InvoiceNo             Standard     37         10            
InvoiceDate           Standard     47         10            
Amount                Standard     57         12            
Currency              Constant                              USD
Status                Constant                              Open
EntryNo               Entry Numbers
```

### Example 3: CSV Price List with Auto-Calculations

```text
Title                 Column Type  Source Column  Constant Value
ItemCode              Standard     1              
Description           Standard     2              
BasePrice             Standard     3              
DiscountPercent       Standard     4              
FinalPrice            Formula      =[BasePrice] * (1 - [DiscountPercent]/100)
CurrencyCode          Constant                    USD
EntrySequence         Entry Numbers
```

## See Also

- [Integrations Page](page-integrations.md)
- [Integration Mappings page](page-integration-mappings.md) - Map fields to BC tables
- [How to Import Sales Documents](how-to-sales-documents.md) - Multi-line document example
- [How to Set Up Field Mappings](how-to-field-mappings.md) - Advanced mapping techniques

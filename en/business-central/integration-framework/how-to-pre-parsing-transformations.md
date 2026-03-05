# How to Set Up Field Pre-Parsing Transformations

This guide explains how to configure pre-parsing transformations to clean and transform source data before it is processed into Business Central.

## What are Pre-Parsing Transformations?

Pre-parsing transformations allow you to **clean and transform source data before it is processed into Business Central**. These transformations run on the raw source values immediately after parsing, before any field mapping or record creation occurs. This ensures that data entering your BC tables is already in the correct format.

**Key Benefit:**

- **Source data stays untouched** - You do not need to modify source files
- **Consistent data quality** - Transformations apply automatically on every import
- **Configurable per field** - Each integration field can have its own transformation rules

## Available Transformations

### Default Value If Empty

Provides a **fallback value** when the source field is blank or empty.

**Configuration:**

1. Open the **Integration Fields** page for your integration
2. Select the field
3. Set **Default Value** to the value to use when the source is blank

**Example:**

```text
Field: Payment Terms Code
Default Value: NET30

Source value: "" (empty) -> Transformed value: "NET30"
Source value: "NET60"    -> Transformed value: "NET60" (unchanged)
```

### Trim Start

Removes characters from the **beginning** of the source value.

**Two modes available:**

- **Flexible:** Specify a set of characters to trim. Any characters in the set found at the start of the value are removed.
- **Fixed:** Remove a fixed number of characters from the start.

**Example (Flexible):**

```text
Field: Item No.
Trim Start Characters: "0" (trim leading zeros)

Source value: "000123" -> Transformed value: "123"
Source value: "456"    -> Transformed value: "456" (unchanged)
```

**Example (Fixed):**

```text
Field: Reference Code
Trim Start Length: 3

Source value: "PFX-12345" -> Transformed value: "-12345"
Source value: "AB"        -> Transformed value: "" (empty, fewer chars than trim length)
```

### Trim End

Removes characters from the **end** of the source value. Works the same as Trim Start but applied to the trailing portion.

**Two modes available:**

- **Flexible:** Specify a set of characters to trim from the end.
- **Fixed:** Remove a fixed number of characters from the end.

**Example (Flexible):**

```text
Field: Description
Trim End Characters: " " (trim trailing spaces)

Source value: "Widget A   " -> Transformed value: "Widget A"
```

**Example (Fixed):**

```text
Field: External Code
Trim End Length: 2

Source value: "ITEM-001-XX" -> Transformed value: "ITEM-001-"
```

### Character Replacements

Applies **ordered find-and-replace rules** to the field value. Each replacement rule specifies a search string and a replacement string, and rules execute in the defined order.

**Configuration:**

1. Open the **Integration Fields** page for your integration
2. Select the field
3. Click the **Character Replacements** action
4. Add one or more replacement rules with Find and Replace values
5. Set the order of execution

**Example:**

```text
Field: Address Line 1
Rule 1: Find "St." -> Replace "Street"
Rule 2: Find "Ave." -> Replace "Avenue"
Rule 3: Find "Blvd." -> Replace "Boulevard"

Source value: "123 Main St."  -> Transformed value: "123 Main Street"
Source value: "456 Oak Ave."  -> Transformed value: "456 Oak Avenue"
```

Rules execute in order, so the output of one rule becomes the input for the next.

### Case Conversion

Converts the case of the source value.

**Options:**

- **Upper Case:** Converts all characters to uppercase
- **Lower Case:** Converts all characters to lowercase
- **Title Case:** Capitalizes the first letter of each word

**Example:**

```text
Field: Customer Name
Case Conversion: Title Case

Source value: "contoso ltd"     -> Transformed value: "Contoso Ltd"
Source value: "FABRIKAM INC"   -> Transformed value: "Fabrikam Inc"
Source value: "northwind Co"   -> Transformed value: "Northwind Co"
```

### Padding

Pads the value to a **target length** with a specified character, applied to either the left or right side.

**Configuration:**

- **Pad Character:** The character to use for padding
- **Pad Length:** The target length of the resulting value
- **Pad Direction:** Left or Right

**Example (Left Padding):**

```text
Field: G/L Account No.
Pad Character: "0"
Pad Length: 8
Pad Direction: Left

Source value: "1234"   -> Transformed value: "00001234"
Source value: "567890" -> Transformed value: "00567890"
Source value: "12345678" -> Transformed value: "12345678" (already at target length)
```

**Example (Right Padding):**

```text
Field: Item Category Code
Pad Character: " "
Pad Length: 10
Pad Direction: Right

Source value: "FURN"   -> Transformed value: "FURN      "
```

### Rounding

Rounds **decimal values** with configurable precision and direction.

**Configuration:**

- **Rounding Precision:** The decimal precision to round to (e.g., 0.01 for two decimal places)
- **Rounding Direction:** Nearest, Up, or Down

**Example:**

```text
Field: Unit Price
Rounding Precision: 0.01
Rounding Direction: Nearest

Source value: "12.345"  -> Transformed value: "12.35"
Source value: "12.344"  -> Transformed value: "12.34"
Source value: "12.3"    -> Transformed value: "12.30"
```

```text
Field: Quantity
Rounding Precision: 1
Rounding Direction: Up

Source value: "10.1" -> Transformed value: "11"
Source value: "10.0" -> Transformed value: "10"
```

> **Note:** Rounding is applied after multi-record splits, not during the main transformation sequence. This ensures that rounding operates on the final split values.

## Transformation Order

When multiple transformations are configured on the same field, they execute in a fixed order:

```text
1. Default Value If Empty
       |
2. Trim Start
       |
3. Trim End
       |
4. Character Replacements
       |
5. Case Conversion
       |
6. Padding
       |
(after multi-record splits)
       |
7. Rounding
```

Each transformation receives the output of the previous one. For example, if you configure both Trim Start and Case Conversion, the value is first trimmed and then case-converted.

**Example of chained transformations:**

```text
Field: Account No.
Default Value: "0000"
Trim Start Characters: " " (trim leading spaces)
Pad Character: "0"
Pad Length: 6
Pad Direction: Left

Source value: "  42"
  Step 1 (Default): "  42" (not empty, skip)
  Step 2 (Trim Start): "42"
  Step 3 (Trim End): "42" (nothing to trim)
  Step 4 (Char Replacements): "42" (none configured)
  Step 5 (Case Conversion): "42" (none configured)
  Step 6 (Padding): "000042"
Final value: "000042"
```

## Configuring Transformations on Integration Fields

All pre-parsing transformations are configured on the **Integration Fields** page:

1. Open the **Integrations** page
2. Select your integration
3. Open the **Integration Fields** page
4. Select the field you want to configure
5. Set the transformation properties on the field card
6. For Character Replacements, use the **Character Replacements** action to define rules

## Example Scenarios

### Trimming Whitespace from All Fields

```text
Problem: Source system exports values with leading/trailing spaces
Solution: Configure Trim Start and Trim End with space character on affected fields

Field: Customer Name
  Trim Start Characters: " "
  Trim End Characters: " "

Source: "  Contoso Ltd  " -> Result: "Contoso Ltd"
```

### Padding Account Numbers

```text
Problem: Source exports account numbers without leading zeros, BC requires 8 digits
Solution: Configure left padding with zeros

Field: G/L Account No.
  Pad Character: "0"
  Pad Length: 8
  Pad Direction: Left

Source: "4110" -> Result: "00004110"
```

### Converting Case for Consistency

```text
Problem: Source data has inconsistent casing
Solution: Apply case conversion

Field: City
  Case Conversion: Upper Case

Source: "Seattle" -> Result: "SEATTLE"
Source: "new york" -> Result: "NEW YORK"
```

### Replacing Characters in Descriptions

```text
Problem: Source uses abbreviations, BC requires full words
Solution: Configure character replacements

Field: Description
  Character Replacement 1: Find "qty" -> Replace "Quantity"
  Character Replacement 2: Find "ea" -> Replace "Each"

Source: "10 qty ea" -> Result: "10 Quantity Each"
```

## See Also

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Set Up Field Value Mapping](how-to-field-value-mapping.md)
- [How to Validate Data](how-to-data-validation.md)
- [How to Handle Errors](how-to-error-handling.md)
- [Getting Started](getting-started.md)

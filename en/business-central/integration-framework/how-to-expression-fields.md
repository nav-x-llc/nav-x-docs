# How to Use Expression Fields

This guide explains how to use the **Expression** column type to define calculated fields in your integrations. Expression fields evaluate a formula at import or export time, combining source values, field references, and built-in functions to produce a derived value.

## What Are Expression Fields?

An expression field is a special type of integration field that, instead of mapping directly to a source column, computes its value using a formula. The formula can:

- Reference other fields in the same source row using `[FieldName]` syntax
- Apply mathematical operations (`+`, `-`, `*`, `/`)
- Use built-in functions for rounding, formatting, string manipulation, and conditional logic
- Delegate to a custom AL codeunit for complex calculations that cannot be expressed as a formula

**Common use cases:**

- Combine first name and last name columns into a single full name field
- Calculate a unit price from a total price and quantity in the source data
- Format a date string from the source into a BC-compatible date
- Apply a conditional: use a discount field only when its value is above zero
- Concatenate an item code with a variant code to create a composite lookup key

## Prerequisites

- You have an integration with field mappings configured
- You have the **NAVX IF ALL** permission set

## Adding an Expression Field

1. Open the integration and navigate to the **Integration Fields** page (choose **Fields** from the action bar)
2. Choose **New** to create a new field
3. Set the **Column Type** to **Expression**
4. The **Expression Formula** field appears — enter your formula here
5. Set the **BC Field No.** to the target Business Central field that should receive the computed value

## Expression Formula Syntax

### Field References

Use `[FieldName]` to insert the value of another field from the same source row. The field name must match the **Source Field Name** of another integration field exactly (case-insensitive).

```
[FirstName] & ' ' & [LastName]
```

### Arithmetic Operators

| Operator | Operation |
| --- | --- |
| `+` | Addition (numbers) or concatenation (text) |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `(` `)` | Grouping (controls operator precedence) |

**Example — calculate unit price:**

```
[TotalPrice] / [Quantity]
```

**Example — apply a markup percentage:**

```
[CostPrice] * (1 + [MarkupPct] / 100)
```

### String Concatenation

Use `&` to concatenate text values (equivalent to `+` for strings):

```
[ItemNo] & '-' & [VariantCode]
```

## Built-In Functions

| Function | Syntax | Description |
| --- | --- | --- |
| `ROUND` | `ROUND(number, precision)` | Rounds a number to the specified decimal places. `ROUND([Price], 2)` |
| `ABS` | `ABS(number)` | Returns the absolute value. `ABS([Discount])` |
| `IF` | `IF(condition, true_value, false_value)` | Returns one of two values based on a condition. `IF([Qty] > 0, [Price], 0)` |
| `MAX` | `MAX(a, b)` | Returns the larger of two values. `MAX([MinQty], [OrderQty])` |
| `MIN` | `MIN(a, b)` | Returns the smaller of two values. `MIN([Stock], [RequestedQty])` |
| `FORMAT` | `FORMAT(value, format_string)` | Formats a value using a BC format string. `FORMAT([EntryDate], 0, '<Year4>-<Month,2>-<Day,2>')` |
| `CONCAT` | `CONCAT(a, b, ...)` | Concatenates two or more values. `CONCAT([Code], '-', [Suffix])` |
| `LEFT` | `LEFT(text, length)` | Returns the leftmost N characters. `LEFT([Description], 50)` |
| `RIGHT` | `RIGHT(text, length)` | Returns the rightmost N characters. `RIGHT([AccountNo], 4)` |
| `LEN` | `LEN(text)` | Returns the length of a text value. `LEN([ProductCode])` |
| `UPPERCASE` | `UPPERCASE(text)` | Converts text to uppercase. `UPPERCASE([CountryCode])` |
| `LOWERCASE` | `LOWERCASE(text)` | Converts text to lowercase. `LOWERCASE([Email])` |
| `TRIM` | `TRIM(text)` | Removes leading and trailing spaces. `TRIM([Name])` |
| `REPLACE` | `REPLACE(text, find, replacement)` | Replaces all occurrences of a substring. `REPLACE([Phone], '-', '')` |

### IF Function Examples

Simple condition — use zero when quantity is missing:

```
IF([Qty] = '', 0, [Qty])
```

Nested conditions — categorize by amount:

```
IF([Amount] > 10000, 'Large', IF([Amount] > 1000, 'Medium', 'Small'))
```

### Comparison Operators in IF Conditions

| Operator | Meaning |
| --- | --- |
| `=` | Equal to |
| `<>` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

## Operator Precedence

Standard mathematical precedence applies: multiplication and division before addition and subtraction. Use parentheses to override:

```
([Price] + [Tax]) * [Quantity]
```

Without parentheses, `[Price] + [Tax] * [Quantity]` would multiply Tax by Quantity first.

## Using a Custom Calculation Codeunit

For complex logic that cannot be expressed in a formula (external lookups, multi-step calculations, custom formatting), use a custom AL codeunit instead of a formula:

1. Set **Column Type** to **Expression**
2. Leave **Expression Formula** empty
3. Set **Calc. Codeunit ID** to the ID of your codeunit
4. Your codeunit must implement the `IFCalcField` interface:

```al
codeunit 50100 "My Calc Field" implements IFCalcField
{
    procedure Calculate(SourceRow: JsonObject; FieldName: Text): Text
    begin
        // SourceRow contains all fields from the current source row
        // Return the calculated value as Text
    end;
}
```

The codeunit receives the full source row as a JSON object so it can access any field, perform lookups, or call external services.

## Expression Fields on Export

Expression fields work on both import and export:

- **Import:** The formula is evaluated using values from the source data row; the result is written to the target BC field
- **Export:** The formula is evaluated using values from the BC record being exported; the result is written to the output row

On export, `[FieldName]` references BC field names from the Integration Fields mapping, not source column names.

## Troubleshooting

### "Field reference not found: [FieldName]"

The field name in brackets does not match any **Source Field Name** in the integration's field list. Check spelling and case.

### "Division by zero" Error

A `[Quantity]` or similar divisor field contains zero for some rows. Use an IF guard:

```
IF([Quantity] = 0, 0, [TotalPrice] / [Quantity])
```

### Formula Returns Empty Result

The formula evaluated to an empty or null value. Add a default using IF:

```
IF([Discount] = '', 0, [Discount])
```

## See Also

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Use Pre-Parsing Transformations](how-to-pre-parsing-transformations.md)
- [How to Set Up Validation Rules](how-to-validation-rules.md)
- [Integration Fields Page](page-integration-fields.md)

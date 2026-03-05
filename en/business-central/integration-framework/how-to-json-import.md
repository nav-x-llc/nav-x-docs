# How to Create a JSON Import Integration

This guide walks you through creating and configuring an integration to import JSON (JavaScript Object Notation) files into Business Central.

## Prerequisites

- **Permission** - You have NAVX IF STANDARD or NAVX IF ALL permission set
- **JSON File** - You have a JSON file (.json) with data to import
- **Target Table** - You know which Business Central table will receive the data

## What is JSON Import

JSON is a lightweight, text-based data format widely used in modern data exchange. The Integration Framework supports importing JSON files, allowing you to bring data from APIs, web services, and other systems directly into Business Central without manual conversion.

## When to Use JSON Import

JSON import is the right choice when:

- **API Responses** - You receive data from REST APIs or web services in JSON format
- **Modern Data Exchange** - Your trading partners or internal systems export data as JSON
- **Nested Data Structures** - Your source data contains hierarchical or nested objects that would be difficult to represent in flat CSV or Excel files
- **Web Application Data** - You need to import data exported from web-based applications
- **Configuration Data** - You need to import structured configuration or reference data

## JSON Structure Overview

JSON files can contain different structures. The Integration Framework handles three common patterns:

### Flat Arrays

A simple list of objects with no nesting:

```json
[
  { "code": "CUST001", "name": "Contoso Inc", "phone": "555-0100" },
  { "code": "CUST002", "name": "Northwind Traders", "phone": "555-0101" }
]
```

### Nested Objects

Objects containing child objects with additional detail:

```json
[
  {
    "orderNo": "SO-1001",
    "customer": {
      "name": "Contoso Inc",
      "address": {
        "city": "Seattle",
        "state": "WA"
      }
    },
    "amount": 1500.00
  }
]
```

### Arrays Within Objects

Objects containing child arrays (e.g., order lines within an order):

```json
{
  "data": {
    "invoices": [
      {
        "invoiceNo": "INV-001",
        "customer": "Contoso Inc",
        "lines": [
          { "item": "WIDGET-A", "qty": 10, "price": 25.00 },
          { "item": "WIDGET-B", "qty": 5, "price": 50.00 }
        ]
      }
    ]
  }
}
```

## Step-by-Step Process

### Step 1: Create a New Integration

1. Navigate to **Integration Framework** > **Integrations**
2. Click **New**
3. Complete the following fields:
   - **Code** - Unique identifier (e.g., "ORDER_JSON_IMPORT")
   - **Description** - Clear name (e.g., "Sales Orders from JSON")
   - **Integration Type** - Select **Json**
   - **Direction** - Select **Import**

### Step 2: Upload a JSON Sample File

1. On the Integration, click **Upload JSON Sample**
2. Select a representative JSON file that contains the structure you expect to import
3. The system stores the sample for field discovery and path validation

The sample file does not need to contain all possible data, but it should reflect the full structure of the JSON you will import, including any nested objects and arrays.

### Step 3: Set JSON Root Path

If your data array is nested inside a wrapper object, you must specify the path to the root array.

1. On the Integration, set the **JSON Root Path** field
2. Use dot-notation to specify the path to the array of records

**Examples:**

| JSON Structure | JSON Root Path |
| --- | --- |
| Top-level array `[ {...}, {...} ]` | *(leave blank)* |
| `{ "data": [ {...}, {...} ] }` | `data` |
| `{ "data": { "invoices": [ {...} ] } }` | `data.invoices` |
| `{ "response": { "body": { "records": [ {...} ] } } }` | `response.body.records` |

### Step 4: Set JSON Array Path for Child Arrays

If your JSON objects contain child arrays that you want to flatten into individual rows, set the **JSON Array Path**.

1. On the Integration, set the **JSON Array Path** field
2. Enter the property name of the child array within each record

**Example:** For an order with line items, set JSON Array Path to `lines`. This tells the system to expand each line item into its own row, duplicating the parent order values.

### Step 5: Discover Fields from Sample

1. From the Integration, click **Suggest Fields from Sample**
2. The system analyzes the uploaded JSON sample and creates integration fields automatically
3. Review the suggested fields on the **Integration Fields** page
4. Remove any fields you do not need
5. Add any constant fields required for your mapping

### Step 6: Map Fields to Business Central

1. From the Integration, click **Integration Mappings**
2. For each field, create a mapping:
   - **Source Field** - Select the source field from Step 5
   - **Destination Table** - Select target table (e.g., "Customer")
   - **Destination Field** - Select BC field that receives the data
   - **Validate** - Enable to validate field values during import

3. **Optional - For lookups** (e.g., matching code values):
   - **Get Value From Lookup** - Enable
   - **Lookup Table** - Select lookup table
   - **Lookup Field** - Select field to match against
   - **Return Field** - Select field value to use

### Step 7: Import and Review Data

1. Click **Import** on the Integrations list
2. Select your JSON file (.json)
3. System parses JSON based on configured root path and array path
4. Review the imported records on the **Integration Records** page

### Step 8: Process Data into Business Central

1. Select records to process (or all records)
2. Click **Process** or **Process All**
3. Records move to **Completed** or **Error** status
4. If errors exist, click **Show Errors** to view details

## JSON Path Configuration

The Integration Framework uses dot-notation paths to reference values within JSON objects. Each integration field has a **JSON Path** property that specifies where to find the value in the JSON structure.

### Path Examples

| JSON Path | Description | Example Value |
| --- | --- | --- |
| `name` | Simple top-level property | `"Contoso Inc"` |
| `email` | Simple top-level property | `"info@contoso.com"` |
| `customer.name` | Nested object property | `"Contoso Inc"` |
| `address.city` | Nested object property | `"Seattle"` |
| `order.customer.address.city` | Deep nested property | `"Seattle"` |
| `lines.item` | Property within child array element | `"WIDGET-A"` |

### Setting JSON Path on Integration Fields

1. Navigate to **Integration Fields** from the Integration
2. For each field, the **JSON Path** column shows the dot-notation path
3. When fields are suggested from sample, paths are set automatically
4. You can manually edit the path if needed

### JSON Path Lookup Page

To discover available paths from your sample file:

1. From the Integration Fields page, use the **JSON Path Lookup** page
2. The page displays all available paths found in the uploaded JSON sample
3. Select a path to assign it to a field
4. This is useful when your JSON structure is complex or deeply nested

## JSON Array Handling

When your JSON contains child arrays (e.g., line items within an order), you can control how those arrays are processed. Three modes are available:

### Flatten

Expand each child array element into its own row. Parent-level values are duplicated for each child row.

**Input:**

```json
{
  "orderNo": "SO-1001",
  "customer": "Contoso Inc",
  "lines": [
    { "item": "WIDGET-A", "qty": 10 },
    { "item": "WIDGET-B", "qty": 5 }
  ]
}
```

**Result (2 rows):**

| orderNo | customer | item | qty |
| --- | --- | --- | --- |
| SO-1001 | Contoso Inc | WIDGET-A | 10 |
| SO-1001 | Contoso Inc | WIDGET-B | 5 |

Use Flatten when you need to create individual records for each child element (e.g., sales order lines).

### Concatenate

Join all child array values into a single string with a separator.

**Result (1 row):**

| orderNo | customer | items |
| --- | --- | --- |
| SO-1001 | Contoso Inc | WIDGET-A, WIDGET-B |

Use Concatenate when you need a summary of child values in a single field.

### First

Take only the first element from the child array.

**Result (1 row):**

| orderNo | customer | item | qty |
| --- | --- | --- | --- |
| SO-1001 | Contoso Inc | WIDGET-A | 10 |

Use First when you only need the primary or first child element.

## Field Mapping for JSON

JSON field mapping follows the same principles as other integration types, with these JSON-specific considerations:

- **Automatic Discovery** - Use "Suggest Fields from Sample" to create fields automatically from your JSON sample
- **Nested Values** - Fields from nested objects are accessible via dot-notation paths
- **Data Types** - JSON natively supports strings, numbers, booleans, and null values; the framework converts these to appropriate Business Central data types
- **Constant Fields** - Use Column Type **Constant** for values not present in the JSON (e.g., a fixed document type or posting group)

## JSON Validation

Before processing, the system performs validation checks specific to JSON imports:

- **Valid JSON** - The file must contain valid JSON syntax
- **Root Path Exists** - If a JSON Root Path is configured, the specified path must exist in the file
- **Array Expected** - The root path (or top level if blank) must resolve to an array of objects
- **Required Fields** - All mapped required fields must have values in each record
- **Data Type Compatibility** - JSON values must be compatible with the target Business Central field types
- **Path Resolution** - All configured JSON paths must resolve to values in the imported data

## Common Scenarios

### Scenario 1: Flat JSON Array (Customer List)

**JSON file (customers.json):**

```json
[
  { "code": "CUST001", "name": "Contoso Inc", "phone": "555-0100", "city": "Seattle" },
  { "code": "CUST002", "name": "Northwind Traders", "phone": "555-0101", "city": "Chicago" },
  { "code": "CUST003", "name": "Fabrikam Inc", "phone": "555-0102", "city": "Dallas" }
]
```

**Configuration:**

```text
Integration Type: Json
JSON Root Path: (blank)
JSON Array Path: (blank)

Source Fields:
  - Field 1: "Customer Code" (JSON Path: code)
  - Field 2: "Customer Name" (JSON Path: name)
  - Field 3: "Phone" (JSON Path: phone)
  - Field 4: "City" (JSON Path: city)

Mappings:
  - "Customer Code" -> Customer.No.
  - "Customer Name" -> Customer.Name
  - "Phone" -> Customer."Phone No."
  - "City" -> Customer.City
```

### Scenario 2: Nested Objects (Orders with Customer Details)

**JSON file (orders.json):**

```json
{
  "data": {
    "orders": [
      {
        "orderNo": "SO-1001",
        "orderDate": "2026-03-01",
        "customer": {
          "code": "CUST001",
          "name": "Contoso Inc"
        },
        "totalAmount": 1500.00
      },
      {
        "orderNo": "SO-1002",
        "orderDate": "2026-03-02",
        "customer": {
          "code": "CUST002",
          "name": "Northwind Traders"
        },
        "totalAmount": 2300.00
      }
    ]
  }
}
```

**Configuration:**

```text
Integration Type: Json
JSON Root Path: data.orders
JSON Array Path: (blank)

Source Fields:
  - Field 1: "Order No." (JSON Path: orderNo)
  - Field 2: "Order Date" (JSON Path: orderDate)
  - Field 3: "Customer Code" (JSON Path: customer.code)
  - Field 4: "Customer Name" (JSON Path: customer.name)
  - Field 5: "Total Amount" (JSON Path: totalAmount)

Mappings:
  - "Order No." -> Sales Header."No."
  - "Order Date" -> Sales Header."Order Date"
  - "Customer Code" -> Sales Header."Sell-to Customer No."
  - "Customer Name" -> Sales Header."Sell-to Customer Name"
  - "Total Amount" -> (validation only)
```

### Scenario 3: Nested Arrays (Orders with Line Items using Flatten)

**JSON file (order_lines.json):**

```json
{
  "orders": [
    {
      "orderNo": "SO-1001",
      "customer": "CUST001",
      "lines": [
        { "itemNo": "ITEM-A", "quantity": 10, "unitPrice": 25.00 },
        { "itemNo": "ITEM-B", "quantity": 5, "unitPrice": 50.00 }
      ]
    },
    {
      "orderNo": "SO-1002",
      "customer": "CUST002",
      "lines": [
        { "itemNo": "ITEM-C", "quantity": 20, "unitPrice": 15.00 }
      ]
    }
  ]
}
```

**Configuration:**

```text
Integration Type: Json
JSON Root Path: orders
JSON Array Path: lines
Array Handling: Flatten

Source Fields:
  - Field 1: "Order No." (JSON Path: orderNo)
  - Field 2: "Customer" (JSON Path: customer)
  - Field 3: "Item No." (JSON Path: lines.itemNo)
  - Field 4: "Quantity" (JSON Path: lines.quantity)
  - Field 5: "Unit Price" (JSON Path: lines.unitPrice)

Result after flattening (3 rows):
  Row 1: SO-1001, CUST001, ITEM-A, 10, 25.00
  Row 2: SO-1001, CUST001, ITEM-B, 5, 50.00
  Row 3: SO-1002, CUST002, ITEM-C, 20, 15.00

Mappings:
  - "Order No." -> Sales Line."Document No."
  - "Customer" -> Sales Line."Sell-to Customer No."
  - "Item No." -> Sales Line."No."
  - "Quantity" -> Sales Line.Quantity
  - "Unit Price" -> Sales Line."Unit Price"
```

## Troubleshooting

### Issue: "Invalid JSON" error on import

- **Cause** - The file contains malformed JSON syntax (missing brackets, trailing commas, unquoted keys)
- **Solution** - Validate your JSON file using a JSON validator before importing
- **Check** - Open the file in a text editor and verify proper JSON formatting

### Issue: "Root path not found" error

- **Cause** - The JSON Root Path does not match the actual structure of the file
- **Solution** - Verify the JSON Root Path matches your file structure exactly (case-sensitive)
- **Check** - Open the JSON file and trace the path from the root to your data array

### Issue: "No records found" after import

- **Cause** - The root path resolves to an empty array or the path is incorrect
- **Solution** - Verify the JSON Root Path points to an array containing objects
- **Verify** - Upload a new JSON sample and use JSON Path Lookup to confirm available paths

### Issue: Fields importing as blank

- **Cause** - JSON Path on the integration field does not match the property name in the file
- **Solution** - Check that JSON Path values are case-sensitive and match the JSON property names exactly
- **Debug** - Use the JSON Path Lookup page to verify correct paths from your sample

### Issue: Nested array data missing or duplicated

- **Cause** - JSON Array Path is not set or is set incorrectly
- **Solution** - Set the JSON Array Path to the exact property name of the child array (e.g., `lines`)
- **Verify** - Confirm the array handling mode (Flatten, Concatenate, First) matches your requirements

### Issue: Date or number format errors

- **Cause** - JSON values are in a format that Business Central cannot parse
- **Solution** - Ensure dates are in ISO 8601 format (YYYY-MM-DD) and numbers use dot as decimal separator
- **Check** - Verify JSON values are proper JSON types (numbers without quotes, dates as strings)

## Best Practices

1. **Upload a Representative Sample** - Include all object types, nested structures, and array elements in your sample file so field discovery is complete
2. **Use Suggest Fields from Sample** - Let the system auto-discover fields rather than creating them manually to avoid path errors
3. **Set Root Path Correctly** - Verify the JSON Root Path before importing to avoid "path not found" errors
4. **Test with Small Files** - Import a small JSON file first to verify paths and mappings before processing large datasets
5. **Validate JSON Before Import** - Use a JSON validator to confirm file syntax before uploading
6. **Use Flatten for Line Items** - When importing documents with line items (orders, invoices), use Flatten mode to create individual rows
7. **Enable Field Validation** - Use validation in mappings to catch data errors early in the process
8. **Review Error Messages** - Check error details on failed records before reprocessing
9. **Keep Paths Simple** - Where possible, simplify your JSON structure before import to reduce deep nesting
10. **Document Your Paths** - Maintain a reference of JSON paths and their corresponding Business Central fields for each integration

## Next Steps

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Use Field Value Mapping](how-to-field-value-mapping.md)
- [How to Handle Errors](how-to-error-handling.md)
- [How to Set Up Data Validation](how-to-data-validation.md)

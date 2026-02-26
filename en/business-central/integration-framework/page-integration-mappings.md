# Page NAV-X Integration Mappings

The **Integration Mappings** page defines how source fields are mapped to Business Central table fields. Each mapping specifies the destination table and field, plus optional lookup and validation settings.

**To open:** From the NAV-X Integrations page, select an integration and click the **Mappings** action.

## Overview

Integration mappings connect:

- **Source:** Integration fields (from your file)
- **Destination:** Business Central tables and fields (where data is created)
- **Lookups:** Optional master record lookups for code translation
- **Validation:** Post-import data validation
- **Grouping:** Multi-document configurations via "Create New Document" flag

## Key Fields

### Basic Mapping

| Field | Purpose | Required |
| ------- | --------- | ---------- |
| **Field No.** | References the Integration Field (from Fields page) | Yes |
| **Field Name** | Integration field name (display; read-only) | No |
| **Destination Table No.** | BC table number to receive this field value | Yes |
| **Destination Table Name** | BC table name (display; read-only) | No |
| **Destination Field No.** | BC field number to receive the value | Yes |
| **Destination Field Name** | BC field name (display; read-only) | No |

### Lookup Configuration

For translating codes to master records:

| Field | Purpose | When Used |
| ------- | --------- | ----------- |
| **Get Value From Lookup** | Enable to look up a master record | When field is a code requiring lookup |
| **Lookup Table No.** | Table containing the lookup records | With Get Value From Lookup = Yes |
| **Lookup Field No.** | Field in lookup table to match imported value | With Get Value From Lookup = Yes |

**Example:**

```text
Mapping: CustomerCode → Sales Header.Bill-to Customer No.
  Get Value From Lookup: Yes
  Lookup Table No.: 18 (Customer)
  Lookup Field No.: 11 (Your Reference)
  
When importing: "CUST_100" looks up Customer where Your Reference = "CUST_100"
```

### Value Mapping (New in v1.3.0)

| Field | Purpose | When Used |
| ------- | --------- | ----------- |
| **Use Field Value Mapping** | Translate source values to BC values before lookup | When codes differ between systems |

**Example:**

```text
Mapping: ItemCode → Sales Line.No.
  Use Field Value Mapping: Yes
  
Field Value Maps:
  ACME_A → WID-100
  ACME_B → WID-101

When importing: "ACME_A" translates to "WID-100", then looks up Item WID-100
```

Access field value maps by clicking the action on this mapping.

### Validation

| Field | Purpose | Effect |
| ------- | --------- | -------- |
| **Validate** | Check and enforce field validation rules | Ensures imported values follow BC rules |

**When validation runs:**

1. All record fields collected
2. Validation executed in Field No. order
3. If validation fails: Record marked Error, not created

**Use when:** Critical fields requiring BC validation (No., Customer No., Item No., etc.)

### Multi-Document Configuration (Critical!)

| Field | Purpose | Critical Notes |
| ------- | --------- | --- |
| **Create New Document** | Mark grouping field for multi-line imports | ⚠️ **Only ONE per integration** |

**Purpose:** Designates which field identifies unique documents. When this field's value changes, a new document header is created.

**Example - Sales Orders:**

```text
Mapping: OrderNo → Sales Header.No.
  Create New Document: YES ← THE FLAG

Result: When OrderNo changes from SO001 to SO002, new Sales Header created
```

**Critical Rules:**

1. **Only ONE mapping** per integration has this = YES
2. **Must be a header-level field** (Sales Header, Purchase Header, etc.)
3. **Source file MUST be sorted** by this field for correct results
4. **Declares grouping for all lines** under this header

**Without this flag:** Only first row processed as header, remaining rows fail

See [How to Import Sales Documents](how-to-sales-documents.md) for detailed multi-document setup.

## Field Details

### Get Value From Lookup

When this field = **Yes**:

1. **Lookup process:**
   - Source value (e.g., "CUST_100") extracted from file
   - Lookup table (e.g., Customer) searched
   - Search field (e.g., Your Reference) matched against value
   - BC field (Bill-to Customer No.) populated with found No.

2. **If lookup succeeds:**
   - Found No. used for field value
   - Record creation proceeds

3. **If lookup fails:**
   - Record marked with Error status
   - Error message: "Code not found in lookup table"
   - Record not created

4. **Configuration:**
   - Lookup Table No.: Which table to search
   - Lookup Field No.: Which field in lookup table to match against

### Use Field Value Mapping

When this field = **Yes**:

1. **Translation process:**
   - Source value (e.g., "ACME_A") extracted
   - Field Value Maps table searched
   - Matching "Value" found
   - Returns "Mapped Value" (e.g., "WID-100")
   - Mapped value used for further processing

2. **Can combine with Lookup:**
   - Field Value Mapping translates first
   - Then Lookup finds the translated value
   - Example: "ACME_A" → "WID-100" → Look up Item WID-100

3. **Access field value maps:**
   - Select mapping line
   - Click action: **Field Value Maps**
   - Add/edit translation pairs

See [Field Value Maps Page](page-integration-field-value-maps.md) for complete field value mapping documentation.

### Validate Destination Field

Purpose: Enforce Business Central validation rules on imported values

**Effect:**

- Full table field validation runs
- Type checking, allowed values, custom validations
- If validation fails: Record marked Error, not created

**Use for:**

- Primary keys (No.)
- Lookups requiring valid master records
- Status/Enum fields with restricted values
- Date fields requiring date format validation

## Processing Order

Mappings are processed by **Field No.** order:

```text
Processing sequence:
1. Mapping with Field No. 1 (OrderNo)
2. Mapping with Field No. 2 (CustomerCode)
3. Mapping with Field No. 3 (OrderDate)
4. ... continue in order ...
```

**Important:** Validation runs AFTER all fields are collected, in Field No. order.

## Actions

### Field Value Maps

Opens value mapping configuration for this mapping.

Only available when **Use Field Value Mapping** = Yes.

See [Field Value Maps Page](page-integration-field-value-maps.md) for details.

## Setting Up Mappings

### Step 1: Identify Source and Destination

```text
For each source field:
  1. Which Integration Field? (from Fields page)
  2. Which BC table?
  3. Which BC field?
```

### Step 2: Basic Mapping

```text
1. Click Mappings action from Integration
2. New line:
   - Field No.: Select from Integration Fields
   - Destination Table No.: Enter BC table (18=Customer, 23=Vendor, etc.)
   - Destination Field No.: Enter BC field
3. Save
```

### Step 3: Add Lookups (if needed)

```text
For fields that reference master records:
  1. Set: Get Value From Lookup = Yes
  2. Set: Lookup Table No. = Master table (Customer, Item, etc.)
  3. Set: Lookup Field No. = Field to match against
  4. Save
```

### Step 4: Add Value Mapping (if needed)

```text
When source codes differ from BC codes:
  1. Set: Use Field Value Mapping = Yes
  2. Click: Field Value Maps action
  3. Add translation entries
  4. Save
```

### Step 5: Enable Validation

```text
For critical fields:
  1. Set: Validate = Yes
  2. This ensures imported values follow BC rules
  3. Invalid values cause Error status
```

### Step 6: Set Grouping (for multi-document)

```text
For multi-line documents (Sales Orders, Invoices):
  1. Identify the document-grouping field (OrderNo, InvoiceNo)
  2. On that mapping: Set Create New Document = Yes
  3. Ensure source file is sorted by this field
```

## Examples

### Example 1: Simple Customer Import

```text
Field No. 1: CustomerCode → Customer.No.
  Get Value From Lookup: No
  Validate: Yes
  Create New Document: No

Field No. 2: CustomerName → Customer.Name
  Get Value From Lookup: No
  Validate: No
  Create New Document: No
```

### Example 2: Sales Order with Lookups

```text
Field No. 1: OrderNo → Sales Header.No.
  Get Value From Lookup: No
  Validate: Yes
  Create New Document: YES ← GROUPING FIELD

Field No. 2: CustomerCode → Sales Header.Bill-to Customer No.
  Get Value From Lookup: Yes
  Lookup Table: Customer (18)
  Lookup Field: Your Reference (11)
  Validate: Yes
  Create New Document: No

Field No. 3: ItemCode → Sales Line.No.
  Get Value From Lookup: Yes
  Lookup Table: Item (27)
  Lookup Field: Vendor Item Code (27)
  Validate: Yes
  Create New Document: No

Field No. 4: Quantity → Sales Line.Quantity
  Get Value From Lookup: No
  Validate: Yes
  Create New Document: No
```

### Example 3: With Value Mapping

```text
Field No. 1: VendorItemCode → Purchase Line.No.
  Get Value From Lookup: Yes
  Lookup Table: Item (27)
  Lookup Field: Item No. (1)
  Use Field Value Mapping: YES ← TRANSLATE FIRST
  Validate: Yes
  Create New Document: No

Field Value Maps:
  ACME_A → A-100
  ACME_B → A-101
  WIDGET → W-001

Result: "ACME_A" → "A-100" → Looks up Item A-100 ✓
```

## Troubleshooting

### Records marked Error: "Lookup failed"

**Cause:** Value not found in lookup table

**Solution:**

1. Check source value exactly matches lookup field
2. Verify lookup table and field are correct
3. If using Value Mapping, ensure all source values mapped
4. Ensure master records exist in BC

### Records marked Error: "Validation failed"

**Cause:** Imported value violates BC rules

**Solution:**

1. Check field validation rules in BC
2. Ensure source values comply with rules
3. For codes: Ensure code exists and is active
4. For dates: Ensure dates are in valid format

### Lookups finding wrong record

**Cause:** Multiple records match lookup value, or lookup field incorrect

**Solution:**

1. Verify lookup field contains unique values
2. Test lookup manually in Business Central
3. Consider using Value Mapping for disambiguation
4. If needed, add secondary lookups

## See Also

- [Integrations Page](page-integrations.md)
- [Integration Fields page](page-integration-fields.md)
- [Field Value Maps page](page-integration-field-value-maps.md) - Value translation setup
- [Integration Records page](page-integration-records.md)
- [How to Import Sales Documents](how-to-sales-documents.md) - Multi-line example with Create New Document
- [How to Set Up Field Mappings](how-to-field-mappings.md) - Advanced mapping techniques

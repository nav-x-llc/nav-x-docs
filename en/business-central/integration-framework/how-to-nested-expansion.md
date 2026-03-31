# How to Use Nested Record Expansion

This guide explains how to configure an integration to expand nested arrays within JSON or XML source data, so that child records embedded inside parent records are extracted and imported as separate rows.

## What Is Nested Record Expansion?

Many JSON and XML APIs return hierarchical data where related records are embedded inside their parent. For example, a `GET /orders` endpoint might return:

```json
[
  {
    "orderId": "ORD-001",
    "customer": "C001",
    "lines": [
      {"sku": "ITEM-A", "qty": 5, "price": 10.00},
      {"sku": "ITEM-B", "qty": 2, "price": 25.00}
    ]
  }
]
```

Without nested expansion, an integration reading this response would see the entire `lines` array as a single text blob. With nested expansion, the framework extracts each element of `lines` as an individual row and links it back to its parent order — ready for import into a child table like Sales Line.

## Nested Expansion vs. Composite Documents

These two features are complementary:

| | Nested Expansion | Composite Documents |
| --- | --- | --- |
| **Purpose** | Extract child rows from within a parent record's source data | Import parent + children in one transaction |
| **Configured on** | The child integration | The parent integration |
| **Used together** | Yes — enable Nested Expansion on the child and Document Mode on the parent for full composite import |

For a complete composite document import using nested JSON/XML data, configure both: Document Mode on the parent, and Nested Data Path on the child. See [How to Import Composite Documents](how-to-composite-documents.md).

## Prerequisites

- You have a parent integration configured for the top-level records
- You have a child integration configured for the nested records, with field mappings for the child-level fields
- The source data is JSON or XML with an array of child records embedded in each parent record
- You have the **NAVX IF ALL** permission set

## Configuring Nested Expansion on the Child Integration

1. Open the **child** integration record on the **Integrations** page
2. In the **Nested Expansion** section, configure the following fields:

| Field | Description |
| --- | --- |
| **Nested Data Path** | The dot-notation path within each parent record to the array of child records. For example: `lines`, `items.orderLines`, `details` |
| **Parent Key Source** | How the parent key value is obtained and linked to child rows (see [Parent Key Source](#parent-key-source) below) |
| **Parent Key Field No.** | For **Field** mode: the field number in the parent integration whose value is used as the key |
| **Parent Key Source Path** | For **Source Value** mode: the JSON/XML path within the parent record to extract the key value (e.g., `orderId`) |
| **Parent Link Field No.** | The field number in the **child** integration that receives the parent key value |

## Parent Key Source

The **Parent Key Source** controls how the framework identifies the parent record and passes its key to child rows:

### Primary Key

The framework uses the Business Central primary key of the parent record created during the import (e.g., the auto-generated Document No. for a new Sales Header).

Use this when the parent record's BC primary key is generated during import (e.g., when BC assigns a document number) and child rows need to reference that generated key.

### Field

The parent key is taken from a specific field in the parent integration's source data. Configure **Parent Key Field No.** to point to that field.

Use this when the parent key exists in the source data and should be passed as-is to child rows (e.g., the external order ID is stored in both parent and child tables).

### Source Value

The parent key is extracted from a specific path within the parent record's raw source data (JSON/XML). Configure **Parent Key Source Path** with the dot-notation path (e.g., `orderId`, `header.documentNumber`).

Use this for REST API sources where the parent key is a top-level field in the JSON object, and you want to extract it without creating a dedicated field mapping for it.

## Dot-Notation Path Syntax

Nested Data Path and Parent Key Source Path use dot-notation to navigate JSON or XML structures:

| Source | Path Example | Accesses |
| --- | --- | --- |
| JSON object property | `lines` | `record.lines` |
| Nested JSON property | `items.orderLines` | `record.items.orderLines` |
| XML element | `Lines/Line` | `<Lines><Line>` child elements |
| XML attribute | `Lines/@count` | `count` attribute on the `<Lines>` element |

For JSON, the path navigates object properties using `.` as a separator. For XML, use `/` to navigate element hierarchy and `@` to access attributes.

## Examples

### Example 1: JSON API — Orders with Embedded Lines

**Source data:**

```json
[
  {
    "orderId": "ORD-001",
    "vendorId": "V001",
    "lines": [
      {"itemNo": "ITEM-A", "qty": 5},
      {"itemNo": "ITEM-B", "qty": 2}
    ]
  }
]
```

**Parent Integration (Sorting Order 1000):**

- Target: Purchase Header
- Document Mode: enabled
- Field mappings: `orderId` → No., `vendorId` → Buy-from Vendor No.

**Child Integration (Sorting Order 1001) — Nested Expansion settings:**

| Field | Value |
| --- | --- |
| Nested Data Path | `lines` |
| Parent Key Source | Source Value |
| Parent Key Source Path | `orderId` |
| Parent Link Field No. | Field mapped to Document No. |

**Result:** For order ORD-001, the framework extracts 2 line rows, injects `orderId = "ORD-001"` into the Parent Link field of each, and imports them as Purchase Lines linked to the parent header.

---

### Example 2: XML — Inventory Feed with Locations

**Source data:**

```xml
<Items>
  <Item id="ITEM-A">
    <Locations>
      <Location code="EAST" qty="100"/>
      <Location code="WEST" qty="50"/>
    </Locations>
  </Item>
</Items>
```

**Child Integration — Nested Expansion settings:**

| Field | Value |
| --- | --- |
| Nested Data Path | `Locations/Location` |
| Parent Key Source | Source Value |
| Parent Key Source Path | `@id` (attribute on the `<Item>` element) |
| Parent Link Field No. | Field mapped to Item No. |

**Result:** For item ITEM-A, two location rows are extracted (EAST and WEST), each linked to ITEM-A via the Parent Link field.

## How Expansion Works in the Pipeline

When the import pipeline processes a parent record:

1. The framework reads the parent record's raw source data
2. It navigates to the **Nested Data Path** and extracts the child array
3. For each element in the array, it creates a child row and resolves the parent key (using the configured **Parent Key Source**)
4. The parent key value is injected into the child row's **Parent Link Field**
5. The child rows are passed to the child integration's import pipeline

If the child integration is linked as a [Composite Document](how-to-composite-documents.md) child, all rows are processed within the parent's transaction.

## Troubleshooting

### No Child Rows Are Extracted

- Verify the **Nested Data Path** is correct by inspecting the raw API/file response
- For JSON: paths are case-sensitive. `Lines` and `lines` are different
- For XML: ensure the path uses the correct element names and `/` separators

### "Parent key not found at path" Error

The **Parent Key Source Path** does not exist in the parent record's source data. Inspect the raw source to confirm the path, then update the configuration.

### Child Rows Are Imported Without a Parent Link

The **Parent Link Field No.** is not configured on the child integration. Without it, child rows have no reference to their parent record and may fail BC validation.

## See Also

- [How to Import Composite Documents](how-to-composite-documents.md)
- [How to Set Up REST API Import](how-to-rest-api-import.md)
- [How to Import JSON Files](how-to-json-import.md)
- [How to Use Expression Fields](how-to-expression-fields.md)
- [Integration Fields Page](page-integration-fields.md)

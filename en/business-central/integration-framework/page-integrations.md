# Page NAV-X Integrations

The **NAV-X Integrations** page is where you define and configure integration configurations. Each integration specifies one source file type, field definitions, and mappings to Business Central tables.

**To open:** Use the search function (search for "NAV-X Integrations") or navigate via the Integration Framework menu.

## Overview

An integration configuration includes:

- **Source identification:** Integration Type (Excel, CSV, or Text)
- **Direction:** Import or Export
- **Field definitions:** Which fields to extract from source  
- **Field mappings:** How to map source fields to BC tables
- **Processing settings:** How and when to process records
- **Post-processing settings:** Optional custom business logic after record creation

## Key Fields

### Basic Information

| Field | Purpose | Note |
| ------- | --------- | ------ |
| **Name** | Descriptive integration name | Required; must be unique |
| **Sorting Order** | Unique numeric identifier | Auto-assigned; tracks integration version |
| **Direction** | Import or Export | Only Import supported in v1.3.0 |

### Source Configuration

| Field | Purpose | Values |
| ------- | --------- | -------- |
| **Integration Type** | Source file format | **Excel** - .xlsx files, **CSV** - comma/semicolon-delimited text, **Text** - fixed-width or delimited text |
| **Delimiter (CSV)** | Field separator for CSV files | Comma, Semicolon, Tab, Space (only for CSV) |
| **Text Encoding (Text)** | Text file character encoding | UTF-8, Windows-1252, etc. (only for Text) |
| **Field Delimiter (Text)** | Field separator for delimited text | Comma, Semicolon, Tab, Custom (only for Text) |
| **Record Delimiter (Text)** | Line separator | CRLF, LF (only for Text) |
| **Fixed Width Format (Text)** | Fixed-position text parsing | Enable for fixed-length text files (only for Text) |

### Processing Configuration

| Field | Purpose | Values | New in v1.3.0 |
| ------- | --------- | -------- | --- |
| **Processing Execution Mode** | When to process records | **Immediate (Synchronous)** = User waits for completion, **Deferred Job Queue (Asynchronous)** = Background processing | ✅ Yes |
| **Post-Processing Trigger** | When custom codeunit executes | **Per Document**, **After Processing**, **Job Queue** | ✅ Yes |
| **Post-Processing Codeunit (ID)** | Custom logic codeunit ID | Numeric codeunit ID | ✅ Yes |

## Field Details

### Integration Type

Specifies the source file format:

#### Excel (.xlsx)

- Use for: Spreadsheet imports
- Features: Column headers, multiple sheets possible
- Configuration: Column letters/numbers map to fields
- Best for: Ad-hoc imports, small to medium volumes

#### CSV (Comma-Separated Values)

- Use for: Delimited text from external systems
- Features: Flexible delimiter (comma, semicolon, tab)
- Configuration: Column numbers (1, 2, 3...) map to fields
- Best for: Batch imports, system-to-system exports
- Example: `Name,Email,Phone` with delimiter=Comma

#### Text (Fixed-Width or Delimited)

- Use for: Legacy systems, government/banking formats
- Features: Fixed position parsing OR custom delimiter
- Configuration:
  - Fixed: Start Position and Field Length for each field
  - Delimited: Field delimiter configuration
- Best for: Legacy system compatibility, complex text formats

### Processing Execution Mode (New in v1.3.0)

#### Immediate (Synchronous)

- Records process during your user session
- Your screen shows progress—you cannot work
- Results available immediately after completion
- Use for: Small imports (< 500 records), manual ad-hoc imports
- Example: Import 50 orders, wait 30 seconds, results ready

#### Deferred Job Queue (Asynchronous)

- Records queue to background processing immediately
- Your screen returns control—you can continue working
- Processing occurs in background session
- Requires: Job Queue Entry configured for post-processing
- Use for: Large imports (> 1000 records), scheduled batch jobs
- Example: Import 5000 orders, control returns in 5 seconds, background processes over next hour

### Post-Processing Trigger (New in v1.3.0)

Determines when custom business logic executes after records created:

#### Per Document

- When: Immediately after each document header created
- Use for: Operations that group related records
- Example: When each sales order created, recalculate totals

#### After Processing

- When: After all records created, before user control returns
- Use for: Bulk operations across all imported data
- Example: Recalculate inventory after all items imported

#### Job Queue

- When: Asynchronously via background processing
- Requires Job Queue Entry
- Use for: Heavy computations, time-consuming operations
- Example: Validate all orders against complex business rules in background

### Post-Processing Configuration (New in v1.3.0)

#### Post-Processing Codeunit (ID)

- Specify the codeunit ID that contains custom logic
- Codeunit must follow Integration Framework conventions
- Leave blank if no post-processing needed

See [Post-Processing Framework Guide](how-to-post-processing.md) for details on creating custom post-processing codeunits.

## Actions

### Fields

Opens the [Integration Fields page](page-integration-fields.md) to define which fields to extract from your source file and their data types.

### Mappings

Opens the [Integration Mappings page](page-integration-mappings.md) to map extracted fields to Business Central tables and fields.

### Records

Opens the [Integration Records page](page-integration-records.md) to view imported data awaiting processing, currently processing, or showing errors.

### Background Entry

Opens the job queue entry associated with this integration (if using background processing).

### Import

Opens file browser to select source file for import. Available only for Import direction integrations.

**Process:**

1. Click **Import...**
2. Select source file (Excel, CSV, or Text)
3. File contents loaded into Integration Records
4. Prompted: "Process records now?"
   - **Yes:** Processing starts immediately
   - **No:** Records available for review in Integration Records page

### Process Records

After records imported and reviewed, click to process (create BC records).

**Processing flow:**

1. Records move from "Ready" → "Processing" → "Completed" (or "Error")
2. Depends on **Processing Execution Mode**:
   - **Immediate:** Wait for completion
   - **Deferred:** Returns control, processes in background
3. Post-processing runs based on **Post-Processing Trigger** configuration

## Setting Up an Integration

### Step 1: Create Integration

1. New line on NAV-X Integrations page
2. Enter: **Name** (descriptive)
3. Set: **Direction** = Import
4. Set: **Integration Type** = Excel/CSV/Text
5. If CSV: Set delimiter
6. If Text: Set encoding, delimiters, fixed-width options
7. Save

### Step 2: Define Fields

1. Click **Fields** action
2. Add row for each source field
3. Configure source column, data type, constants if needed

### Step 3: Create Mappings

1. Click **Mappings** action
2. Map each field to BC destination table/field

### Step 4: Configure Processing

1. Set **Processing Execution Mode**:
   - Immediate: For small imports, user waits
   - Deferred: For large imports, background processing
2. If Post-Processing needed:
   - Set **Post-Processing Trigger**
   - Set **Post-Processing Codeunit (ID)**

### Step 5: Import Data

1. Click **Import...** action
2. Select source file
3. Click **Process records** when ready

## Examples

### Example 1: Simple Excel Import

**Configuration:**

```text
Name: Customer List from Spreadsheet
Direction: Import
Integration Type: Excel
Processing Execution Mode: Immediate (small file)
```

**Fields:** CustomerNo, CustomerName, City, Country  
**Mappings:** Customer.No., Customer.Name, Customer.City, Customer.Country Code  
**Result:** Creates customer records from spreadsheet

### Example 2: Large CSV Batch Import

**Configuration:**

```text
Name: Sales Orders from ERP
Direction: Import
Integration Type: CSV
Delimiter: Semicolon
Processing Execution Mode: Deferred Job Queue
Post-Processing Trigger: Per Document
Post-Processing Codeunit: Custom Order Validation
```

**Fields:** OrderNo, CustomerCode, ItemCode, Quantity  
**Mappings:** Maps to Sales Header and Sales Lines  
**Result:**

- Records queued to background
- Each order processed as document created
- Custom validation runs per document
- User can continue working

### Example 3: Legacy Text Format Import

**Configuration:**

```text
Name: Vendor Invoices from Legacy System
Direction: Import
Integration Type: Text
Fixed Width Format: Yes
Text Encoding: Windows-1252
Field Delimiter: (N/A - fixed width)
Processing Execution Mode: Deferred Job Queue
Post-Processing Trigger: Job Queue
Post-Processing Codeunit: Invoice Posting and Payment Setup
```

**Fields:**

- VendorNo (Pos. 1-5)
- Currency (Pos. 6-8)
- Amount (Pos. 9-17)
- InvoiceDate (Pos. 18-25)

**Mappings:** Maps to Purchase Invoice Header  
**Result:**

- Legacy text parsed by fixed positions
- Invoices created and post-processing queued
- Background processes validate and posts invoices

## See Also

- [How to Import Sales Documents](how-to-sales-documents.md)
- [Integration Fields page](page-integration-fields.md)
- [Integration Mappings page](page-integration-mappings.md)
- [Integration Records page](page-integration-records.md)
- [Post-Processing Framework](how-to-post-processing.md) - New in v1.3.0
- [Background Processing Modes](how-to-background-processing.md) - New in v1.3.0

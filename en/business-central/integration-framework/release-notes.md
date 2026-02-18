# Release Notes for NAV-X Integration Framework

We release new versions of our software from time to time with enhancements, new features, and bug fixes. When you log in to Business Central, system will display a notification if a new version becomes available.

## v1.2.0 (February 2026)

**Added:**

### Fixed-Length Text File Import Feature

- **Position-Based Field Extraction** - Define fixed-length fields by start position and field length
- **Text Parsing Type** - New option for text file imports: Fixed Length (position-based) vs. Flexible Length (delimiter-based)
- **Integration Field Enhancement** - New fields:
  - "Start Position" (character position where field begins)
  - "Field Length" (length of field in characters)
  - Auto-populated mapping using Field No. as column reference
- **Excel Buffer Mapping** - Fixed-length parser uses Field No. as column for direct field linkage
- **IFFlexible Codeunit** - New procedures:
  - `PopulateExcelBufferFromFixedLengthTextStream()` - Fixed-length parser
  - `ExtractFixedLengthField()` - Field extraction with edge case handling

#### Flexible Text Import Feature

- **Delimited Text File Support** - Import data from text files with customizable field and record delimiters
- **Flexible Delimiter Configuration** - Support for:
  - Predefined delimiters: Tab, Comma, Pipe, Semicolon, Colon, Space
  - Custom delimiters (configurable)
  - Custom record delimiters: Line Feed, Carriage Return, CRLF, custom
- **Field Surround Character Support** - Handle quoted fields with escape sequences (e.g., `""` for escaped quotes)
- **Escape Character Support** - Configure escape sequences for embedded surround characters
- **Byte Order Mark (BOM) Removal** - Support for:
  - UTF-8, UTF-16 LE/BE, UTF-32 LE/BE BOM removal
  - Automatic detection and removal

#### Comprehensive Unit Tests

- **BOM Handling Tests** - 15 test procedures
  - UTF-8, UTF-16 LE/BE, UTF-32 LE/BE BOM removal
  - Large file handling (100K lines with BOMs)
  - Data integrity verification
- **General Parsing Tests** - 28 test procedures
  - Comma, semicolon, TAB, colon, space, pipe, custom delimiters
  - Quoted field handling with escape characters
  - Empty and edge case handling
  - Multi-line record delimiters
  - Skip header/footer lines functionality
- **Fixed-Length Text Parsing Tests** - 13 unit tests
  - Field extraction with varying lengths
  - Position validation (start position and field length)
  - Edge cases (short lines, exact matches, long lines)
  - Empty line handling
  - Custom record delimiters
  - Large dataset handling (50-100 records)
- **Integration Tests** - End-to-end parsing validation
  - Variable field counts
  - Quoted fields across formats
  - Custom delimiters
  - Large datasets (1000+ records)

### Changed

- **Parameter Types** - Delimiter and special character parameters now use `Text` type for proper special character support
- **BOM Detection** - Refactored `RemoveBomIfPresent()` with dictionary-based approach
- **Field Unquoting** - Improved handling of multi-character surround sequences and escaped characters
- **Text Parsing Type Validation** - Clear delimiter settings when switching parsing types:
  - Fixed Length: Clears field delimiters, sets defaults
  - Flexible Length: Resets to comma delimiter

### Fixed

- **UTF-32 BOM Detection** - Fixed issue with UTF-32 LE/BE BOM processing with null bytes
- **Special Character Handling** - Resolved issue where special characters like CRLF and TAB were not properly stored
- **Quote Handling in Quoted Fields** - Fixed bug where closing surround character was not properly removed when field value ended with escaped surround characters
- **Empty Line Handling** - Empty lines are now properly skipped during parsing
- **Trailing Delimiter Handling** - Trailing delimiters create appropriate empty columns per CSV standards

---

## v1.0.26 (December 2025)

**Added:**

### Sales Document Import Feature

- **Document-Based Imports** - Import multiple lines as complete documents (Sales Orders, Invoices, etc.)
- **Multi-Line Support** - Group integration records into documents based on common identifiers
- **Create New Document Flag** - Automatically create new document when identifier changes

**Enhanced:**

- **Field Mapping Extensions** - Enhanced mapping capabilities for document scenarios
- **Integration Record Status** - Improved tracking for document-level operations

---

## v1.0.18 (September 2025)

**Added:**

### Excel Spreadsheet Import Feature

- **Excel File Support** - Import data directly from Excel worksheets (.xlsx files)
- **First Row Header Support** - Configure whether first row contains field headers
- **Column Mapping** - Map Excel columns to Integration Fields by column letter or position
- **Data Preview** - Preview Excel data before import mapping
- **Multiple Sheet Support** - Process data from named Excel worksheets

**Enhanced:**

- **File Upload Interface** - Improved file selection and handling
- **Data Type Detection** - Better handling of mixed data types in Excel columns
- **Empty Cell Handling** - Proper treatment of empty cells and null values

---

## v1.0.15 (June 2025)

**Added:**

### Foundation Features

- **Integration Framework Foundation** - Core integration processing engine
- **Integration Records** - Create and manage integration data import records
- **Field Mapping** - Map source fields to Business Central table fields
- **Field Value Mapping** - Lookup-based field value translation
- **Integration Status Tracking** - Status: New, Ready, Processing, Completed, Error
- **Error Handling** - Collect and track integration errors
- **Email Notifications** - Send failure notifications to configured email address
- **Job Queue Integration** - Schedule processing via Business Central job queue
- **Line Number Support** - Automatic line number generation for document lines
- **Constant Fields** - Define fixed value fields in integrations
- **Validation Rules** - Field-level validation during import
- **Intermediate Tables** - Staging tables for BC-bound data
- **Permission Sets** - NAVX IF STANDARD, NAVX IF ALL
- **Extensible Architecture** - Event-based extension points for customization

### Supported Platforms

- **Editions** - Essential and Premium editions of Microsoft Dynamics 365 Business Central
- **Countries** - Canada, USA
- **Languages** - English (Australia, Canada, Great Britain, United States)

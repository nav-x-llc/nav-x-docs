# Release Notes for February 2026 Update - Version 1.2.0

## New Features

### Fixed-Length Text File Import

A new **Fixed-Length** text parsing type has been added for text file imports, allowing position-based field extraction. You can define fixed-length fields by specifying a **Start Position** (character position where the field begins) and **Field Length** (length of field in characters).

The fixed-length parser uses the Field No. as the column reference for direct field linkage via the Excel Buffer mapping.

### Flexible Text File Import

Support has been added for importing data from **delimited text files** with customizable field and record delimiters.

**Predefined delimiters** are available: Tab, Comma, Pipe, Semicolon, Colon, and Space. You can also configure custom delimiters.

**Record delimiters** can be configured as: Line Feed, Carriage Return, CRLF, or a custom value.

**Field Surround Character Support** handles quoted fields with escape sequences (e.g., `""` for escaped quotes). You can also configure escape sequences for embedded surround characters.

**Byte Order Mark (BOM) Removal** is supported for UTF-8, UTF-16 LE/BE, and UTF-32 LE/BE with automatic detection and removal.

## Resolved Issues

### UTF-32 BOM Detection

Fixed an issue with UTF-32 LE/BE BOM processing where null bytes were not properly handled.

### Special Character Handling

Resolved an issue where special characters like CRLF and TAB were not properly stored in delimiter and special character parameters.

### Quote Handling in Quoted Fields

Fixed a bug where the closing surround character was not properly removed when a field value ended with escaped surround characters.

### Empty Line Handling

Empty lines are now properly skipped during parsing instead of creating empty records.

### Trailing Delimiter Handling

Trailing delimiters now correctly create appropriate empty columns per CSV standards.

## See Also

- [How to update my extensions](../faq-index.md)

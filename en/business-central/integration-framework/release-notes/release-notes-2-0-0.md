# Release Notes for March 2026 Update - Version 2.0.0

Version 2.0.0 is a major release that introduces a large set of enterprise integration features across data routing, export orchestration, file handling, multi-company support, and advanced field processing.

## New Features

### Orchestrator — Multi-Entity Routing and Export

The **Orchestrator** replaces the legacy Entity Routes configuration with a more powerful and flexible routing engine for both imports and exports.

On **import**, the Orchestrator inspects each incoming row or section (worksheet tab, JSON path, XML element) and routes it to the correct integration based on configurable conditions. This allows a single file or API response to populate multiple BC tables in one run without custom code.

On **export**, the Orchestrator coordinates multiple integrations writing to different sections of the same output — for example, different worksheets of an Excel workbook or different sections of a ZIP archive.

**Condition operators** for routing rules include: `=`, `<>`, `Contains`, `Starts With`, `Ends With`, `Is Empty`, `Is Not Empty`. Multiple conditions per route are evaluated with AND logic. Routes are evaluated in **Processing Order**; the first matching route wins.

Upgrade code automatically migrates existing Entity Route configurations to the new Orchestrator format.

### Composite Documents — Parent/Child Import Orchestration

**Composite Documents** allow a single import to create a Business Central document (header + lines) from a structured source file or API response in a single, all-or-nothing transaction.

A **parent** integration handles the document header. **Child integrations** are defined on the parent and handle line-level data. The framework passes the newly created parent record's key to each child integration so that lines are linked to the correct document automatically.

If any child integration fails, the entire composite document is rolled back — preventing orphaned headers without lines and lines without a header.

### File Pickup and Archiving

A new **File Sources** configuration allows the Integration Framework to automatically pick up files from network shares, SFTP servers, Azure Blob Storage, and SharePoint — without manual file uploads.

**File Source** records define the location, connection credentials, file matching pattern, and minimum file age. **Pickup Tracks** provide per-integration filtering so multiple integrations can read from the same File Source directory using different file name patterns.

After successful processing, files are automatically **archived**:

- **Inline** — moved to a configurable archive subfolder within the same File Source location
- **External** — copied to a separate File Source configured as an archive destination
- **None** — file is deleted after processing

Archive entries are linked back to the Import Log record for traceability, and files can be **re-imported** directly from the archive if reprocessing is needed. Archive retention is managed automatically by the Business Central retention policy framework.

### Export File Destinations

Exports can now be delivered to **multiple destinations** in a single run. Each integration can define any combination of:

- **File Source** — write the output to a network share, SFTP, Azure Blob, or SharePoint location
- **Email** — send the output as an email attachment
- **Download** — make the output available as an in-browser download in Business Central

File name placeholders are supported in destination paths: `{date}`, `{datetime}`, `{integrationcode}`. Per-destination results are recorded in the export log, so you can see exactly which destinations succeeded and which failed for each run.

### Multi-Company Integration

The **Multi-Company** feature allows a single integration to synchronize data across multiple Business Central companies in a single operation.

**Company Links** define which companies participate in the integration. Each company link can have a **Company-Specific Override** for connection details, allowing the same integration to call different API endpoints or use different credentials per company.

Two execution modes are available:

- **Centralized** — one company drives the entire multi-company run, executing the integration for all linked companies sequentially
- **Distributed** — each company runs the integration independently using its own Job Queue, coordinated by a root task

Per-company health indicators on the Integrations page show the last run status, last run time, and last error for each company at a glance.

### Compression — GZip and ZIP Support

The Integration Framework now transparently handles compressed data in both REST API and file-based integrations:

- **Accept Compressed Responses** — adds `Accept-Encoding: gzip` to REST API requests and automatically decompresses GZip responses before parsing
- **Compress Request Body** — compresses outgoing REST API POST/PUT bodies with GZip and adds `Content-Encoding: gzip` to the request headers
- **ZIP Archive Extraction** — automatically detects and extracts ZIP archives when importing from file sources, using configurable entry patterns and index selection
- **GZip Single File Detection** — `.gz` files (single-file GZip, not ZIP) are automatically decompressed before processing with no configuration required
- **Output Compression** — file-based exports can produce GZip or ZIP compressed output

Magic byte detection is used throughout — compressed files are identified by their binary signature, not their file extension.

### Expression Fields

A new **Expression** column type allows calculated values to be defined in field mappings using a formula language — without custom AL code.

Expressions can reference other source fields using `[FieldName]` syntax, combine values with arithmetic operators (`+`, `-`, `*`, `/`), and call 14 built-in functions:

| Function | Description |
| --- | --- |
| `TEXT(value)` | Convert to text |
| `DECIMAL(value)` | Convert to decimal |
| `INTEGER(value)` | Convert to integer |
| `DATE(value)` | Convert to date |
| `UPPERCASE(text)` | Convert to uppercase |
| `LOWERCASE(text)` | Convert to lowercase |
| `TRIM(text)` | Remove leading and trailing whitespace |
| `LEN(text)` | Length of text |
| `SUBSTR(text, start, length)` | Extract substring |
| `CONCAT(a, b, ...)` | Concatenate multiple values |
| `IF(cond, true, false)` | Conditional expression |
| `TODAY()` | Current date |
| `NOW()` | Current date and time |
| `FORMAT(value, format)` | Format a value |

For complex scenarios not expressible in the formula language, a custom **Calculation Codeunit** can be plugged in via the `ICalcField` interface.

### Nested Record Expansion

**Nested Record Expansion** handles source data that contains arrays nested within records — for example, a JSON order that contains a `lines` array with multiple line items.

Configure the **Nested Data Path** (dot-notation path to the nested array) and the **Parent Key Source** (how the parent record's key is passed to each expanded row):

- **Primary Key** — the BC primary key of the created parent record
- **Field** — the value of a specific source field on the parent row
- **Source Value** — the value of a configured source field at the time the parent was processed

Each nested array entry is processed as its own row through the standard import pipeline, linked to the parent by the configured key.

### Identity Registry — Bidirectional Sync with External Systems

The **Identity Registry** solves the core challenge of bidirectional sync: knowing whether to call `POST` (create) or `PUT`/`PATCH` (update) when exporting a BC record to a REST API.

When a BC record is first exported, the framework calls `POST` and captures the external ID from the API response (**Response ID JSON Path** field). On subsequent exports of the same record, the framework looks up the stored external ID and calls `PUT` or `PATCH` instead.

On import, the Identity Registry registers the external ID alongside the BC record key, so that future exports can immediately route correctly without a round-trip to the API.

The **Direction** lifecycle progresses automatically: `Export` (only outbound) → `Both` (bidirectional, after the first successful import).

### Export Response Writeback

**Export Response Writeback** maps fields from a REST API response back to the originating BC record after a successful export call.

Common use cases include capturing a fulfillment reference number, external transaction ID, marketplace listing URL, or estimated delivery date from the API response and writing them directly to BC fields — without requiring a separate import integration.

Writeback mappings are configured on the REST API Endpoint Card with the **Response JSON Path** (dot-notation path to the value in the response), the **Target Table** and **Target Field** in BC, and optionally **Use Validate** to run BC field validation logic when writing. Writeback failures are logged as warnings but never fail the export itself.

### Binary Fields — Images and Documents

A new **Binary** column type handles Media, MediaSet, and Blob fields in Business Central — enabling import and export of images, PDFs, and other binary content.

Four binary modes are supported:

- **Base64 Decode** (Import) — decodes a Base64-encoded string from the source and writes it to a BC binary field
- **Base64 Encode** (Export) — reads a BC binary field and encodes its content as Base64 for the output
- **URL Download** (Import) — downloads binary content from a URL in the source data and writes it to a BC binary field
- **URL Upload** (Export) — uploads BC binary content to an external URL and writes the returned URL to the output field

Optional **Max Size (KB)** limits prevent unexpectedly large files from consuming database storage.

### Enhanced Lookup Resolution

The field lookup system has been significantly extended with new failure-handling options and conditional filtering:

**Lookup Fail Action** controls what happens when no match is found in the lookup table:
- **Error** (default) — the row is rejected
- **Use Default** — a configured fallback value is used instead
- **Skip Row** — the row is silently discarded
- **Keep Original** — the source value is written as-is without translation

**Lookup Filter Field** narrows the lookup search to a subset of rows matching a field condition. The filter value can reference other source fields using `[FieldName]` syntax — the value is substituted at runtime from the current row — enabling context-sensitive lookups such as "look up item by vendor item code, but only within the current row's vendor."

### Webhook Subscriptions — Outbound Registration

The Integration Framework can now **register webhook subscriptions with external APIs** on your behalf, eliminating the need to manually configure webhooks in external systems.

When you create a Webhook Subscription record, the framework:

1. Sends a registration `POST` to the external API's webhook registration endpoint with a BC-hosted callback URL
2. Completes the **challenge-response verification** that many APIs require to confirm ownership of the callback URL
3. Stores the subscription in the **Webhook Subscriptions** page with its current status: Inactive, Pending, Active, Expired, or Failed

Subscriptions can be configured with an HMAC secret so that incoming webhook payloads from the external system are verified before processing. Subscription renewal (re-registration before expiry) can be automated via Job Queue.

### Lifecycle State Machine — Workflow Engine

A new **Workflow Engine** enables modeling multi-step business process lifecycles as state machines attached to integrations.

A **Workflow** defines a set of **States** and **Transitions** between them. Each transition specifies:

- **Trigger Type** — what causes the transition to be evaluated: Manual (user action), On Import, On Export, On Webhook, On Scheduled Poll (the framework polls an external API endpoint on a timer), or On BC Event (a BC table event fires)
- **Conditions** — optional guards that must be true for the transition to fire
- **From State / To State** — the state change that occurs when the transition fires

One **Workflow Instance** per BC record tracks that record's current state and full transition history. States can have **Timeout** configurations — if a record remains in a state beyond the configured hours, a timeout transition fires automatically via Job Queue.

## See Also

- [How to update my extensions](../faq-index.md)

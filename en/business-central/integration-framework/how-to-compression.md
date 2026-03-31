# How to Use Compression

This guide explains how to configure the Integration Framework to compress outgoing data and decompress incoming data, supporting GZip and ZIP formats across REST API calls and file-based imports and exports.

## What Is Compression Support?

The Integration Framework can transparently handle compressed data in three scenarios:

- **Decompress incoming REST API responses** — when an API returns GZip-compressed payloads
- **Compress outgoing REST API request bodies** — when an API expects GZip-compressed POST/PUT bodies
- **Extract files from ZIP archives** — when a file source delivers ZIP files containing one or more data files

Compression is detected automatically where possible using magic byte detection (the framework inspects the first bytes of a response to determine if it is compressed, rather than relying solely on HTTP headers).

## Configuring REST API Compression

### Decompressing API Responses (Import)

Most REST APIs that support GZip compression negotiate it via the `Accept-Encoding` header. When enabled, the API returns compressed responses and the framework decompresses them transparently.

1. Open the **REST API Endpoint Card** for the integration's endpoint
2. In the **Compression** section, enable **Accept Compressed Responses**
3. Optionally set **Compression Algorithm** to **GZip** (default) or **Deflate**

When enabled, the framework adds `Accept-Encoding: gzip` to each request and automatically decompresses any compressed responses before parsing.

**When to use:** APIs that serve large datasets (product catalogs, price lists, inventory feeds) often support GZip compression to reduce transfer size. Enable this to speed up large imports and reduce bandwidth.

### Compressing API Request Bodies (Export)

Some APIs accept or require compressed request bodies for large payloads.

1. On the **REST API Endpoint Card**, enable **Compress Request Body**
2. Set **Compression Algorithm** to **GZip**

When enabled, the framework compresses the JSON request body before sending and adds `Content-Encoding: gzip` to the request headers.

**When to use:** For large export payloads (sending thousands of records in a single POST). Not all APIs support compressed request bodies — check the API's documentation before enabling.

## Importing Files from ZIP Archives

When a file source deposits ZIP archive files, the Integration Framework can extract the contents automatically rather than requiring you to unzip files manually.

### Configuring ZIP Extraction

1. Open the **Integration** record for the file-based integration
2. In the **File Options** section, enable **Extract ZIP Archive**
3. Configure the following fields:

| Field | Description |
| --- | --- |
| **ZIP Entry Pattern** | A wildcard pattern matching the files to extract from the ZIP (e.g., `*.csv`, `data-*.json`, `prices.xlsx`). Leave empty to extract all files |
| **ZIP Entry Index** | For ZIPs containing multiple files, the 1-based index of the entry to use (e.g., `1` for the first file). Use `0` to process all matching entries |

### How ZIP Extraction Works

When the import pipeline receives a file:

1. The framework inspects the first bytes (magic byte detection) — if the file is a ZIP archive, extraction mode activates automatically
2. Entries matching the **ZIP Entry Pattern** are extracted in order
3. Each extracted entry is processed through the standard import pipeline as if it were a standalone file
4. If multiple matching entries are found and **ZIP Entry Index** is `0`, each is imported as a separate run

> **Note:** Magic byte detection means extraction activates even if the file has the wrong extension (e.g., a `.dat` file that is actually a ZIP). This is by design for robustness.

### GZip-Compressed Single Files

Some systems deliver `.gz` files (a single file compressed with GZip, not a ZIP archive). The framework detects these automatically and decompresses the content before processing — no special configuration is needed.

## Exporting Compressed Files

For file-based exports that should produce compressed output:

1. Open the **Integration** record
2. In the **File Options** section, set **Output Compression** to **GZip** or **ZIP**

When set to **GZip**, the output file is compressed as a `.gz` file. When set to **ZIP**, the output is wrapped in a ZIP archive with a single entry.

The compressed output is written to all configured [Export File Destinations](how-to-export-destinations.md).

## Troubleshooting

### "Invalid compressed data" Error

The response or file claims to be compressed (via Content-Encoding header or magic bytes) but the content is malformed or truncated. This usually indicates a network issue during download. Retry the import. If it persists, disable **Accept Compressed Responses** to receive uncompressed data and confirm the content is valid.

### ZIP Contains Multiple Files but Only One Is Imported

Set **ZIP Entry Index** to `0` to process all matching entries, or verify that **ZIP Entry Pattern** matches all intended files.

### API Does Not Support Compressed Request Bodies

The API returns a `400 Bad Request` or `415 Unsupported Media Type` error when **Compress Request Body** is enabled. Disable it — not all APIs accept compressed bodies. Check the API documentation for supported content encodings.

## See Also

- [How to Set Up REST API Import](how-to-rest-api-import.md)
- [How to Set Up File Pickup and Archiving](how-to-file-pickup.md)
- [How to Set Up Export File Destinations](how-to-export-destinations.md)
- [REST API Endpoint Card](page-rest-api-endpoint-card.md)

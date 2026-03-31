# How to Use Binary Fields

This guide explains how to use the **Binary** column type to import and export image, document, and binary data between external sources and Business Central fields that store binary content (Media, MediaSet, and Blob fields).

## What Are Binary Fields?

The Binary column type handles data that cannot be represented as plain text — images, PDFs, documents, and other binary content. The Integration Framework supports four modes for working with binary data:

| Binary Mode | Direction | Description |
| --- | --- | --- |
| **Base64 Decode** | Import | Source field contains Base64-encoded binary data; decode it and write to a BC binary field |
| **Base64 Encode** | Export | BC binary field contains binary data; encode it as Base64 and write to the output |
| **URL Download** | Import | Source field contains a URL; download the binary content from that URL and write to a BC binary field |
| **URL Upload** | Export | BC binary field contains binary data; upload it to a URL and write the URL back to the output |

## Prerequisites

- You have an integration configured with field mappings
- The target BC fields are of type **Media**, **MediaSet**, or **Blob**
- For URL Download/Upload modes: the URLs are accessible from the Business Central server
- You have the **NAVX IF ALL** permission set

## Adding a Binary Field Mapping

1. Open the integration and navigate to the **Integration Fields** page (choose **Fields** from the action bar)
2. Choose **New** to add a field
3. Set **Column Type** to **Binary**
4. Set **Binary Mode** to the appropriate mode for your scenario
5. Set **BC Field No.** to the target BC Media, MediaSet, or Blob field

Additional configuration fields appear based on the Binary Mode selected.

## Configuring Each Binary Mode

### Base64 Decode (Import)

Use when the source data contains Base64-encoded binary content — for example, a JSON API that encodes images as Base64 strings within the JSON payload.

| Field | Description |
| --- | --- |
| **Source Field Name** | The source column containing the Base64-encoded string |
| **Max Size (KB)** | Optional maximum file size limit. Rows with content exceeding this size are rejected with an error |

The framework decodes the Base64 string and writes the binary content to the BC field.

**Example source data:**
```json
{"productId": "ITEM-001", "image": "iVBORw0KGgoAAAANSUhEUgAA..."}
```

---

### Base64 Encode (Export)

Use when the export output format expects Base64-encoded binary content — for example, sending product images to an API that accepts them as Base64 strings in a JSON payload.

No additional configuration beyond the BC field reference. The framework reads the BC binary field, encodes its content as a Base64 string, and writes it to the output field.

---

### URL Download (Import)

Use when the source data contains a URL pointing to a binary file — for example, a product feed that provides image URLs rather than embedded image data.

| Field | Description |
| --- | --- |
| **Source Field Name** | The source column containing the URL |
| **Max Size (KB)** | Optional maximum file size limit for the downloaded content |
| **Download Timeout (sec)** | Maximum time to wait for the download. Default: 30 seconds |
| **Connection Code** | Optional REST API connection to use for authenticated downloads. Leave empty for public URLs |

The framework downloads the file from the URL and writes the binary content to the BC field.

---

### URL Upload (Export)

Use when the export process should upload binary content from BC to an external storage location and include the resulting URL in the export output.

| Field | Description |
| --- | --- |
| **Upload URL** | The endpoint URL to POST the binary content to |
| **Connection Code** | The REST API connection for authenticated uploads |
| **Response URL Path** | The JSON path in the upload response that contains the URL of the uploaded file (e.g., `url`, `data.fileUrl`) |

The framework reads the BC binary field, uploads the content to the specified URL, extracts the returned URL from the response, and writes that URL to the output field.

## Supported BC Field Types

| BC Field Type | Supported Binary Modes | Notes |
| --- | --- | --- |
| **Media** | Base64 Decode, URL Download | Single image/file. Most common for item pictures, customer photos |
| **MediaSet** | Base64 Decode, URL Download | Multiple images/files. Imports add to the set; existing media is not removed |
| **Blob** | All four modes | Raw binary storage. Use for documents, PDFs, arbitrary binary data |

## File Size Validation

The **Max Size (KB)** field on Base64 Decode and URL Download modes limits the size of imported binary content. When a row exceeds the limit:

- The row is rejected with an error message indicating the actual size and the limit
- Other rows in the same import run are unaffected

This prevents unexpectedly large files from consuming database storage.

## Troubleshooting

### "Base64 decode failed" Error

The source field value is not valid Base64. Common causes:
- The string contains extra whitespace or line breaks (some APIs wrap Base64 at 76 characters)
- The source field is a URL rather than embedded Base64 — use **URL Download** mode instead

### "Download failed: connection timeout"

The URL is unreachable from the Business Central server. Verify:
- The URL is publicly accessible (or use a **Connection Code** for authenticated URLs)
- Increase **Download Timeout** if the server is slow to respond
- Check whether BC server outbound internet access is permitted in your environment

### "File exceeds max size limit"

Increase **Max Size (KB)** or filter out oversized files in the source before import.

### Media Field Is Not Updating

BC Media fields do not overwrite existing content by default on modify — they add to the MediaSet. If you need to replace the existing image, add a [Post-Processing](how-to-post-processing.md) step to clear the existing media before the write.

## See Also

- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [How to Set Up REST API Import](how-to-rest-api-import.md)
- [How to Set Up Post-Processing](how-to-post-processing.md)
- [Integration Fields Page](page-integration-fields.md)

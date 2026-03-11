# Page REST API Headers

The **REST API Headers** page defines default headers and query parameters that are sent with every request using a REST API connection. This is a sub-page embedded within the [REST API Connection Card](page-rest-api-connection-card.md).

**To open:** Open a [REST API Connection Card](page-rest-api-connection-card.md). The headers list appears in the **Default Headers & Query Parameters** section at the bottom of the card.

## Overview

Use this page to configure headers (e.g., `Accept`, `Content-Type`, custom headers) and query parameters (e.g., `api_version=2`) that should be included in all API requests for this connection. Endpoint-specific headers can be defined separately on the [REST API Endpoint Headers](page-rest-api-endpoint-headers.md) page.

Values marked as secret are stored securely in isolated storage and are masked after saving.

## Key Fields

| Field | Description |
| ------- | ----------- |
| **Type** | Whether this entry is a **Header** or a **Query Parameter**. |
| **Name** | The name of the header or query parameter. |
| **Value** | The value of the header or query parameter. Secret values are masked after saving. |
| **Is Secret** | Whether the value is stored securely in isolated storage. Enable this for sensitive values such as tokens or keys. |
| **Description** | A description for this header or query parameter. |

## See Also

- [REST API Connection Card](page-rest-api-connection-card.md)
- [REST API Endpoint Headers](page-rest-api-endpoint-headers.md)

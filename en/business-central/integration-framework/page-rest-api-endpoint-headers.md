# Page REST API Endpoint Headers

The **REST API Endpoint Headers** page defines headers and query parameters that are specific to a single REST API endpoint. These are sent in addition to the connection-level default headers. This is a sub-page embedded within the [REST API Endpoint Card](page-rest-api-endpoint-card.md).

**To open:** Open a [REST API Endpoint Card](page-rest-api-endpoint-card.md). The headers list appears in the **Headers & Query Parameters** section.

## Overview

Use this page to configure endpoint-specific headers and query parameters that supplement the connection-level defaults defined on the [REST API Headers](page-rest-api-headers.md) page. For example, you might set a specific `Accept` header or add query parameters unique to one endpoint.

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

- [REST API Endpoint Card](page-rest-api-endpoint-card.md)
- [REST API Headers](page-rest-api-headers.md)
- [REST API Connection Card](page-rest-api-connection-card.md)

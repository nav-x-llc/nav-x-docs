# Page REST API Aggregations

The **REST API Aggregations** page defines secondary endpoints whose data is merged into the primary endpoint's results using join keys. This is a sub-page embedded within the [REST API Endpoint Card](page-rest-api-endpoint-card.md).

**To open:** Open a [REST API Endpoint Card](page-rest-api-endpoint-card.md). The aggregation sources list appears in the **Data Aggregation** section, which is visible for root (parent) endpoints only.

## Overview

Aggregation allows you to combine data from multiple REST API endpoints into a single result set before importing into Business Central. For example, you might fetch orders from one endpoint and customer details from another, then merge them by a shared key (such as `customerId`).

Each aggregation source specifies:

- A secondary endpoint to fetch data from
- A join type (Left Join or Inner Join)
- Key fields in both the primary and secondary responses for matching

## Key Fields

| Field | Description |
| ------- | ----------- |
| **Source Endpoint Sort Order** | The sorting order of the secondary REST API integration to merge data from. |
| **Join Type** | The join type. **Left Join** keeps all primary rows even without a match in the secondary data. **Inner Join** removes primary rows that have no match. |
| **Primary Key JSON Path** | The JSON path in the primary endpoint response to extract the join key (e.g., `customerId`). |
| **Foreign Key JSON Path** | The JSON path in the secondary endpoint response to extract the matching key (e.g., `id`). |
| **Fetch Order** | The order in which secondary endpoints are fetched and merged. Lower numbers are processed first. |

## Example

**Scenario:** Merge customer names into an orders response.

```text
Primary endpoint: /orders (returns [{orderId: 1, customerId: "C001", amount: 100}])
Secondary endpoint: /customers (returns [{id: "C001", name: "Contoso"}])

Aggregation configuration:
  Source Endpoint Sort Order: [sorting order of customer integration]
  Join Type: Left Join
  Primary Key JSON Path: customerId
  Foreign Key JSON Path: id
  Fetch Order: 1
```

Result: Order rows are enriched with customer fields before import.

## See Also

- [REST API Endpoint Card](page-rest-api-endpoint-card.md)
- [REST API Connection Card](page-rest-api-connection-card.md)
- [Integrations Page](page-integrations.md)

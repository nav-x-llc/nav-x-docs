# How to Set Up REST API Sync Protocol and Entity Routing

This guide explains how to orchestrate multi-step API workflows using endpoint chaining and data aggregation in the NAV-X Integration Framework.

## What Is the Sync Protocol?

The sync protocol enables you to build multi-step API workflows where data from multiple related API endpoints is fetched and combined into a single import. The framework supports two patterns:

- **Endpoint Chaining:** A parent endpoint fetches a list of records, then for each parent record, child endpoints fetch related detail data. Parent and child rows are interleaved in the import buffer (e.g., fetch orders, then for each order fetch its line items).
- **Data Aggregation:** Multiple independent endpoints are fetched and merged horizontally by matching join keys (e.g., fetch customers from one endpoint and their account balances from another, then merge by customer ID).

## When to Use Each Pattern

|Scenario|Use Chaining|Use Aggregation|
|-|-|-|
|Fetch headers and their line items from separate endpoints|Yes|-|
|Fetch a master record and its nested details via separate API calls|Yes|-|
|Combine data from two independent API sources by a shared key|-|Yes|
|Enrich primary data with supplementary data from a different API|-|Yes|
|Parent record ID is needed to construct the child endpoint URL|Yes|-|
|Both datasets use a common key but have no parent-child URL relationship|-|Yes|

## Endpoint Chaining

### How Chaining Works

```text
Fetch all parent data from root endpoint (with pagination)
    |
For each parent record:
    |
    +-- Write parent row to import buffer
    |
    +-- For each child endpoint (ordered by Chain Order):
        |
        +-- Resolve child URL using {{parent.<path>}} placeholders
        |
        +-- Fetch child data (with pagination)
        |
        +-- Write child rows to import buffer
    |
Import pipeline processes interleaved parent + child rows
```

The result is an interleaved dataset where each parent row is immediately followed by its child rows, which maps naturally to Business Central's header/line document structure.

### Configuring Endpoint Chaining

#### Step 1: Configure the Root (Parent) Endpoint

1. Open the **REST API Endpoint** card for the parent endpoint
2. Set the **Connection Code**, **Resource Path**, and **Response Data Path** as usual
3. Leave **Parent Endpoint Sort Order** at **0** (this marks it as a root endpoint)

#### Step 2: Create a Child Endpoint

1. Create a new REST API Endpoint for the child data
2. Set the **Parent Endpoint Sort Order** to the Sorting Order of the root endpoint
3. The **Chain Configuration** section becomes visible

#### Step 3: Configure the Chain Configuration

|Field|Description|Example|
|-|-|-|
|**Parent Endpoint Sort Order**|The Sorting Order of the parent endpoint. Non-zero values make this a child endpoint.|`1000`|
|**Parent Key JSON Path**|The JSON path in the parent response to extract the key value used for URL resolution.|`id`|
|**Child URL Template**|The URL template for child API calls. Use `{{parent.<jsonpath>}}` placeholders to insert values from the parent response.|`/orders/{{parent.id}}/lines`|
|**Chain Order**|Execution order among sibling child endpoints. Lower numbers execute first.|`1`|
|**Max Child Calls**|Maximum number of child API calls to prevent runaway execution. Default is 500.|`500`|

#### Step 4: Set the Connection and Response Data Path

1. Set the **Connection Code** for the child endpoint (can be the same or a different connection)
2. Set the **Response Data Path** for the child endpoint response

#### Step 5: Run the Parent Integration

Run the import from the parent integration. The framework automatically:

1. Fetches all parent data (handling pagination)
2. For each parent record, resolves the child URL by replacing `{{parent.<path>}}` placeholders with actual values
3. Fetches child data for each parent (handling pagination per child call)
4. Interleaves parent and child rows in the import buffer
5. Processes all rows through the standard import pipeline

> **Important:** Child endpoints cannot be run directly. Always run the parent integration; it orchestrates all child fetches automatically.

### Chaining Example: Orders and Line Items

**Parent Endpoint (Sorting Order 1000):**

|Field|Value|
|-|-|
|Connection Code|MYAPI|
|Resource Path|`/api/v1/orders?status=open`|
|Response Data Path|`data`|
|Parent Endpoint Sort Order|0 (root)|

**Child Endpoint (Sorting Order 1001):**

|Field|Value|
|-|-|
|Connection Code|MYAPI|
|Parent Endpoint Sort Order|1000|
|Parent Key JSON Path|`id`|
|Child URL Template|`/api/v1/orders/{{parent.id}}/lines`|
|Response Data Path|`data`|
|Chain Order|1|
|Max Child Calls|500|

**Result:** For each order, the framework fetches its line items and produces an interleaved dataset suitable for Sales Header + Sales Line import.

### Error Handling in Chains

When a child API call fails:

- The error is logged to telemetry
- The framework continues processing the remaining parent records by default
- You can subscribe to the `OnChildFetchError` event to customize error handling (e.g., stop processing on the first error)
- If the Max Child Calls limit is reached for an endpoint, remaining parent rows skip that child endpoint and a warning is logged

## Data Aggregation

### How Aggregation Works

```text
Fetch all primary endpoint data
    |
For each aggregation source (ordered by Fetch Order):
    |
    +-- Fetch secondary endpoint data
    |
    +-- Index secondary data by Foreign Key
    |
    +-- For each primary record:
        |
        +-- Extract join key from primary record (Primary Key JSON Path)
        |
        +-- Look up matching secondary record by Foreign Key
        |
        +-- Merge secondary fields into primary record
    |
Build import buffer from merged dataset
```

### Configuring Data Aggregation

#### Step 1: Configure the Primary Endpoint

1. Open the **REST API Endpoint** card for the primary integration
2. Configure the endpoint normally (Connection Code, Resource Path, Response Data Path)
3. Ensure **Parent Endpoint Sort Order** is **0** (root endpoint)

#### Step 2: Add Aggregation Sources

In the **Data Aggregation** section of the endpoint card, add one or more aggregation source records:

|Field|Description|Example|
|-|-|-|
|**Source Endpoint Sorting Order**|The Sorting Order of the secondary integration whose endpoint provides the data to merge.|`2000`|
|**Join Type**|**Left Join** keeps all primary records even without a match. **Inner Join** removes primary records that have no matching secondary record.|`Left Join`|
|**Primary Key JSON Path**|The JSON path in the primary record to extract the join key.|`customerId`|
|**Foreign Key JSON Path**|The JSON path in the secondary record to index by.|`id`|
|**Fetch Order**|The order in which secondary sources are fetched and merged. Lower numbers are processed first.|`1`|

#### Step 3: Configure the Secondary Integration

The secondary integration referenced by **Source Endpoint Sorting Order** must:

1. Be a REST API type integration
2. Have its own endpoint configured with Connection Code and Resource Path
3. Not reference itself as an aggregation source

#### Step 4: Run the Primary Integration

Run the import from the primary integration. The framework fetches data from all sources and merges them.

### Aggregation Example: Customers with Account Balances

**Primary Endpoint (Integration 1000):**

|Field|Value|
|-|-|
|Resource Path|`/api/v1/customers`|
|Response Data Path|`customers`|

Returns: `[{"id": "C001", "name": "Contoso", "city": "Atlanta"}, ...]`

**Secondary Endpoint (Integration 2000):**

|Field|Value|
|-|-|
|Resource Path|`/api/v1/balances`|
|Response Data Path|`balances`|

Returns: `[{"customerId": "C001", "balance": 15000.00, "currency": "USD"}, ...]`

**Aggregation Source on Primary Endpoint:**

|Field|Value|
|-|-|
|Source Endpoint Sorting Order|2000|
|Join Type|Left Join|
|Primary Key JSON Path|`id`|
|Foreign Key JSON Path|`customerId`|
|Fetch Order|1|

**Result:** Each customer record is enriched with `balance` and `currency` fields from the balances API. Customers without a matching balance record retain their original fields (Left Join behavior).

### Join Types

|Join Type|Behavior|
|-|-|
|**Left Join**|All primary records are kept. If no matching secondary record is found, the primary record remains unchanged.|
|**Inner Join**|Only primary records with a matching secondary record are kept. Unmatched primary records are removed from the dataset.|

### Field Name Conflicts

When merging secondary data into primary data, if a secondary field has the same name as an existing primary field, the secondary field is prefixed with `_merged_` to avoid overwriting. For example, if both sources have a field called `name`, the secondary field becomes `_merged_name` in the merged dataset.

## Use Cases

### Multi-Entity Document Import

Fetch sales order headers from one endpoint and line items from another, interleaving them for document import:

- Parent endpoint: `/api/orders` (maps to Sales Header)
- Child endpoint: `/api/orders/{{parent.id}}/lines` (maps to Sales Line)

### Data Enrichment

Enrich a customer list with credit scores from a separate credit-check API:

- Primary endpoint: `/api/customers` (customer master data)
- Aggregation source: `/api/credit-scores` (credit data keyed by customer ID)

### Multi-Source Inventory Sync

Combine inventory levels from multiple warehouses into a single dataset:

- Primary endpoint: `/api/warehouse-a/inventory`
- Aggregation source 1: `/api/warehouse-b/inventory` (merge by item SKU)
- Aggregation source 2: `/api/warehouse-c/inventory` (merge by item SKU)

## Troubleshooting

### "This endpoint is configured as a child endpoint and cannot be run directly"

You attempted to run a child endpoint directly. Run the parent integration instead; it orchestrates all child fetches.

### "Cannot resolve placeholder {{parent.path}}" Error

The JSON path in the `{{parent.<path>}}` placeholder does not exist in the parent JSON object. Verify the path matches the parent response structure.

### "Maximum child calls reached" Warning

The framework hit the **Max Child Calls** limit for a child endpoint. Increase the limit if you expect more parent records, or reduce the dataset with filters on the parent endpoint.

### "Cannot reference the same integration as the primary endpoint"

You attempted to add the primary endpoint as its own aggregation source. The Source Endpoint Sorting Order must reference a different integration.

## Dynamic Sync API (BC as a Data Provider)

In addition to consuming external APIs, the Integration Framework can expose Business Central data as a REST API that external systems consume. The **Dynamic Sync API** lets external systems pull BC data on demand — either all records or only records that have changed since the last sync.

This is the inverse of the standard REST API import: instead of BC fetching from an external system, an external system fetches from BC.

### Response Modes

The Sync API supports two response modes, configured on the integration:

| Mode | Description | When to Use |
| --- | --- | --- |
| **Changes Only** | Returns only records that have been inserted, modified, or deleted since the external system's last successful sync | Incremental sync, delta feeds, high-volume datasets where only changed records matter |
| **Full Dataset** | Returns all matching records on every call, regardless of prior sync state | Stateless integrations, initial full loads, external systems that manage their own change tracking |

### Pagination

All Sync API responses support **server-side pagination** using `top` and `skip` parameters on the `getChanges` action:

| Parameter | Description | Example |
| --- | --- | --- |
| `top` | Maximum number of records to return in this response | `100` |
| `skip` | Number of records to skip (for offset-based pagination) | `200` |

An external system can page through results by incrementing `skip` until fewer records than `top` are returned, indicating the last page.

### Staging Modes

The Sync API supports two staging modes that control how export data is prepared:

| Mode | Description | Trade-off |
| --- | --- | --- |
| **Database** | Export data is staged to a persistent table before being returned | Supports large datasets; data survives between requests |
| **In-Memory** | Export data is staged in a temporary in-memory table and returned in a single response | Zero database footprint; ideal for small, fast responses |

For most API scenarios, **In-Memory** mode is recommended to avoid leaving staging data in the database.

### Configuring the Sync API Integration

1. Open the **Integration** record of type **REST API**
2. In the **Sync API** section, configure:

| Field | Description |
| --- | --- |
| **Expose as Sync API** | Enable to make this integration available as a Sync API endpoint |
| **Response Mode** | **Changes Only** or **Full Dataset** |
| **Staging Mode** | **Database** or **In-Memory** |
| **API Version** | The API version exposed (default: `v2.0`) |

1. Configure **Integration Fields** and **Integration Mappings** as for any export integration — these define which BC fields are included in the API response

### Calling the Sync API

External systems call the Sync API using a standard OData-style action:

```text
POST /api/navx/integrationFramework/v2.0/integrations(<sortingOrder>)/Microsoft.NAV.getChanges
Content-Type: application/json

{
  "top": 100,
  "skip": 0
}
```

The response is a JSON array of records based on the integration's field mappings and the configured response mode.

### Changes Only Mode — Sync State

When using **Changes Only** mode, the framework tracks which records have been delivered to each external system using a sync state record. The external system receives a **sync token** (or cursor) in the response that it must include in its next request to advance the sync window.

The sync state ensures that:

- Records inserted or modified since the last sync are included
- Deleted records are reported (with a deletion marker)
- No record is returned twice for the same external system

## See Also

- [How to Set Up REST API Webhooks](how-to-rest-api-webhooks.md)
- [How to Set Up REST API GraphQL Queries](how-to-rest-api-graphql.md)
- [How to Use Copilot for REST API Setup](how-to-rest-api-copilot.md)
- [How to Use Background Processing](how-to-background-processing.md)

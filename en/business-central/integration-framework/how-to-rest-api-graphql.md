# How to Set Up REST API GraphQL Queries

This guide explains how to configure a REST API endpoint to use GraphQL queries for fetching data from external systems that expose a GraphQL API.

## When to Use GraphQL vs REST

|Scenario|Use REST|Use GraphQL|
|-|-|-|
|API provides standard REST endpoints|Yes|-|
|API only exposes a GraphQL endpoint|-|Yes|
|You need to fetch deeply nested data in one call|-|Yes|
|You want to select specific fields to reduce payload size|-|Yes|
|API uses cursor-based pagination natively|-|Yes|
|Simple flat data retrieval|Yes|-|

GraphQL is common in modern APIs such as Shopify (Admin API), GitHub, and many headless CMS platforms.

## How GraphQL Differs from Standard REST

In a standard REST integration, the framework sends an HTTP GET request to a resource URL and receives a JSON response. With GraphQL:

1. All requests use **HTTP POST** to a single endpoint (e.g., `/graphql`)
2. The request body contains a structured JSON with `query` and `variables` fields
3. The server returns HTTP 200 even when errors occur; errors are reported in an `errors` array in the response body
4. Pagination typically uses cursor-based navigation with `pageInfo` objects

## Prerequisites

Before configuring a GraphQL endpoint, ensure:

1. You have a **REST API Connection** configured with the correct Base URL and authentication
2. You have a **REST API** type integration with fields and mappings defined
3. You know the GraphQL schema of the external API (query structure, available fields, pagination pattern)

## Step-by-Step Guide

### Step 1: Open the REST API Endpoint Card

1. Open your **Integration** record
2. Navigate to the **REST API Endpoint** card for this integration

### Step 2: Enable GraphQL Mode

1. Set **Is GraphQL** to **Yes**
2. The framework automatically:
   - Sets **HTTP Method** to **POST** (read-only when GraphQL is enabled)
   - Sets **Pagination Type** to **GraphQL Cursor** (read-only when GraphQL is enabled)
3. Set the **Connection Code** to your REST API Connection
4. Set the **Resource Path** to the GraphQL endpoint path (e.g., `/admin/api/2024-01/graphql.json`)

### Step 3: Configure the Response Data Path

Set the **Response Data Path** to the JSON path pointing to the data array in the GraphQL response.

For example, if the GraphQL response looks like:

```json
{
  "data": {
    "orders": {
      "edges": [
        { "node": { "id": "123", "name": "#1001" } },
        { "node": { "id": "456", "name": "#1002" } }
      ],
      "pageInfo": {
        "hasNextPage": true,
        "endCursor": "eyJsYXN0X2lkIjo0NTZ9"
      }
    }
  }
}
```

Set **Response Data Path** to `data.orders.edges` to extract the array of order nodes.

### Step 4: Write the GraphQL Query

In the **GraphQL** section of the endpoint card, enter your query in the **GraphQL Query** field. This is a multi-line text field where you write the full GraphQL query string.

Example query for fetching orders from Shopify:

```graphql
query ($first: Int!, $after: String) {
  orders(first: $first, after: $after) {
    edges {
      node {
        id
        name
        email
        totalPriceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
        createdAt
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

### Step 5: Configure GraphQL Variables

In the **GraphQL Variables** field, enter a JSON object with the variables referenced in your query.

Example:

```json
{"first": 50}
```

The framework automatically injects the cursor variable (e.g., `after`) when paginating. You do not need to include the cursor variable in the initial variables JSON; the framework handles it.

### Step 6: Configure Cursor-Based Pagination

Set the following fields to enable automatic pagination through all pages of results:

|Field|Description|Example|
|-|-|-|
|**Cursor JSON Path**|The JSON path to the end cursor value in the response.|`data.orders.pageInfo.endCursor`|
|**HasNextPage JSON Path**|The JSON path to the `hasNextPage` boolean in the response.|`data.orders.pageInfo.hasNextPage`|
|**Cursor Variable Name**|The GraphQL variable name used for the cursor. Defaults to `after`.|`after`|
|**Page Size**|The number of records per page (should match the `first` variable).|`50`|
|**Max Pages**|Safety limit to prevent infinite pagination loops.|`100`|

When the framework fetches data, it:

1. Sends the initial query with your configured variables
2. Checks the `hasNextPage` value in the response
3. If more pages exist, extracts the `endCursor` value
4. Injects the cursor into the variables JSON under the configured variable name
5. Repeats until `hasNextPage` is false or `Max Pages` is reached

### Step 7: Test the Integration

Run the integration import to verify the GraphQL query returns data and the response is correctly parsed into integration records.

## How Response Data Is Parsed

The framework processes GraphQL responses through the following pipeline:

```text
GraphQL response received (HTTP 200)
    |
Check for "errors" array in response
    |-- If errors found: extract first error message and raise error
    |
Extract data array using Response Data Path
    |
Parse each JSON object into the integration's Excel Buffer
    |
Import pipeline maps fields to BC tables
    |
Records created in Business Central
```

GraphQL APIs always return HTTP 200, even on errors. The framework inspects the response body for an `errors` array and surfaces the first error message if found.

## Examples

### Example 1: Shopify Orders

**Connection:** Shopify Admin API (Bearer token authentication)

**Endpoint Configuration:**

|Field|Value|
|-|-|
|Connection Code|SHOPIFY|
|Resource Path|`/admin/api/2024-01/graphql.json`|
|Is GraphQL|Yes|
|Response Data Path|`data.orders.edges`|
|Cursor JSON Path|`data.orders.pageInfo.endCursor`|
|HasNextPage JSON Path|`data.orders.pageInfo.hasNextPage`|
|Cursor Variable Name|`after`|

**GraphQL Query:**

```graphql
query ($first: Int!, $after: String) {
  orders(first: $first, after: $after, query: "fulfillment_status:unfulfilled") {
    edges {
      node {
        id
        name
        email
        createdAt
        totalPriceSet { shopMoney { amount currencyCode } }
        lineItems(first: 50) {
          edges {
            node { title quantity sku }
          }
        }
      }
    }
    pageInfo { hasNextPage endCursor }
  }
}
```

**GraphQL Variables:** `{"first": 50}`

### Example 2: GitHub Repositories

**Connection:** GitHub API (Bearer token authentication)

**Endpoint Configuration:**

|Field|Value|
|-|-|
|Connection Code|GITHUB|
|Resource Path|`/graphql`|
|Is GraphQL|Yes|
|Response Data Path|`data.organization.repositories.nodes`|
|Cursor JSON Path|`data.organization.repositories.pageInfo.endCursor`|
|HasNextPage JSON Path|`data.organization.repositories.pageInfo.hasNextPage`|

**GraphQL Query:**

```graphql
query ($org: String!, $first: Int!, $after: String) {
  organization(login: $org) {
    repositories(first: $first, after: $after) {
      nodes {
        name
        description
        stargazerCount
        updatedAt
      }
      pageInfo { hasNextPage endCursor }
    }
  }
}
```

**GraphQL Variables:** `{"org": "my-organization", "first": 100}`

## Troubleshooting

### "GraphQL query is empty" Error

The **GraphQL Query** field on the endpoint is blank. Enter a valid GraphQL query string.

### "GraphQL error: ..." Message

The external API returned an error in the response body. Review the error message for details. Common causes include:
- Invalid query syntax
- Requesting fields that do not exist in the schema
- Authentication or permission errors
- Rate limiting

### No Data Returned

- Verify the **Response Data Path** correctly points to the data array in the response
- Test the GraphQL query directly against the API (using a tool like Postman or GraphiQL) to confirm it returns data
- Check that the **GraphQL Variables** JSON is valid and contains all required variables

### Pagination Stops Early

- Ensure **HasNextPage JSON Path** correctly points to the `hasNextPage` boolean
- Ensure **Cursor JSON Path** correctly points to the end cursor value
- Check that **Max Pages** is set high enough for your data volume

## See Also

- [How to Set Up REST API Webhooks](how-to-rest-api-webhooks.md)
- [How to Set Up REST API Sync Protocol](how-to-rest-api-sync-protocol.md)
- [How to Use Copilot for REST API Setup](how-to-rest-api-copilot.md)
- [How to Import from JSON Files](how-to-json-import.md)

# How to Use the Orchestrator

This guide explains how to use the Orchestrator to route a single import or export across multiple integrations based on the content of the source data. Use it when a single data file or API response contains different types of records that each need to be mapped to different Business Central tables.

## What Is the Orchestrator?

The Orchestrator is a higher-level coordinator that sits above individual integrations. Instead of running each integration separately against its own data source, you run the Orchestrator once — it fetches the data (or reads the file) and then routes each record to the appropriate integration based on a condition.

**Example scenarios:**

- An API returns a mix of customers and vendors in a single JSON array. The Orchestrator routes records with `"type": "customer"` to your Customer integration and `"type": "vendor"` to your Vendor integration
- An Excel workbook has one worksheet per document type (orders, invoices, credit memos). The Orchestrator routes each worksheet to the matching integration
- A supplier sends a single flat file with line types in the first column: `H` for header, `L` for line item. The Orchestrator routes `H` rows to the Sales Header integration and `L` rows to the Sales Line integration

> **Note:** The Orchestrator replaces the legacy **Entity Route** pattern (previously configured on REST API endpoints). If you are upgrading from an earlier version of the Integration Framework, your entity routes are migrated to Orchestrator routes automatically.

## Concepts

### Orchestrator

An Orchestrator is a named configuration that defines:

- The **data source** (a file format or REST API endpoint) to read from
- An ordered list of **routes** that match records to integrations

### Route

A Route links a matching condition to a target integration. When the Orchestrator processes a record, it evaluates routes in **Processing Order** and assigns the record to the first matching route.

A route with no condition matches all records (catch-all route). Place catch-all routes last.

## Prerequisites

- You have two or more integrations configured for the different record types you want to route
- You have the **NAVX IF ALL** permission set

## Step-by-Step Guide

### Step 1: Create an Orchestrator

1. Search for **NAVX IF Orchestrators** in Tell Me
2. Choose **New** to open the **Orchestrator Card**
3. Configure the general fields:

   | Field | Description |
   | --- | --- |
   | **Code** | A unique code for this orchestrator (e.g., `SUPPLIER-FEED`) |
   | **Description** | A description of what this orchestrator does |
   | **Source Type** | The format of the incoming data: **Excel**, **JSON**, **XML**, **CSV**, **Text**, or **REST API** |
   | **Enabled** | Turn on to allow the orchestrator to run |

### Step 2: Configure the Data Source

The **Source Configuration** section varies by **Source Type**:

#### Excel

| Field | Description |
| --- | --- |
| **Route by Worksheet** | When enabled, each worksheet is matched to a route by worksheet name instead of by row content |

For Excel, routes match either by worksheet name (when **Route by Worksheet** is on) or by a column value in each row.

#### JSON / XML

| Field | Description |
| --- | --- |
| **Root Data Path** | The JSON/XML path to the array of records at the root level (e.g., `data.records`). Leave empty if the root is the array |
| **Route Key Path** | The JSON/XML path within each record to extract the routing key (e.g., `type`, `record_type`, `entity`) |

#### CSV / Text

| Field | Description |
| --- | --- |
| **Route Column Index** | The column position (1-based) containing the routing key value |

#### REST API

| Field | Description |
| --- | --- |
| **Connection Code** | The REST API connection to use |
| **Resource Path** | The API endpoint to call |
| **Response Data Path** | The JSON path to the data array in the API response |
| **Route Key Path** | The JSON path within each record to extract the routing key |

### Step 3: Add Routes

In the **Routes** section of the Orchestrator Card, add a route for each integration:

| Field | Description |
| --- | --- |
| **Processing Order** | The order in which routes are evaluated. Lower numbers are checked first |
| **Description** | A description of what this route handles |
| **Integration Sorting Order** | The target integration that processes records matching this route |
| **Route Condition** | The value to match against the routing key (e.g., `customer`, `H`, `Orders`). Leave empty for a catch-all route |
| **Condition Operator** | The comparison operator: `=`, `<>`, `Contains`, `Starts With`, `Ends With`, `Is Empty`, `Is Not Empty` |

#### Excel Worksheet Routing

When **Route by Worksheet** is enabled, set **Route Condition** to the exact worksheet name (e.g., `Sales Orders`, `Invoices`).

### Step 4: Test the Orchestrator

1. On the **Orchestrator Card**, choose **Run Import** (or **Run Export**)
2. For file-based orchestrators, select the source file when prompted
3. The orchestrator processes the data and routes each record to the matched integration
4. Check the **Import Log** for each target integration to see results per route

### Step 5: Schedule the Orchestrator

To run the orchestrator on a schedule:

1. On the **Orchestrator Card**, choose **Schedule**
2. Configure the Job Queue entry — interval, start time, and category
3. The Job Queue runs the orchestrator automatically at the configured times

You can also set up separate schedules for import and export via the **Schedule Import** and **Schedule Export** actions.

## Routing Logic

The Orchestrator evaluates routes in **Processing Order** and applies **first-match semantics**:

- The first route whose condition matches the record's routing key wins
- If no route matches, the record is skipped (logged as unrouted)
- A route with no condition (empty **Route Condition**) matches all records — place these last

### Condition Operators

| Operator | Matches when routing key value… |
| --- | --- |
| `=` | Exactly equals the Route Condition value |
| `<>` | Does not equal the Route Condition value |
| `Contains` | Contains the Route Condition value as a substring |
| `Starts With` | Begins with the Route Condition value |
| `Ends With` | Ends with the Route Condition value |
| `Is Empty` | Is blank or null |
| `Is Not Empty` | Has any non-blank value |

### Multi-Condition Routes

A route can have multiple conditions that are evaluated together:

| Logic | Behavior |
| --- | --- |
| **All Match** | All conditions on this route must be satisfied (AND logic) |
| **Any Match** | At least one condition must be satisfied (OR logic) |

## Export Mode

The Orchestrator supports export as well as import. In export mode:

- Each route defines an integration that stages data from a specific BC source
- All route datasets are combined into a single output (one file or one API call)
- For Excel exports, each route's data is written to a separate worksheet

Configure export routes identically to import routes; the integration's mapping determines the BC source.

## Upgrading from Entity Routes

If you used **REST API Entity Routes** in an earlier version of the Integration Framework:

- Entity routes are automatically migrated to Orchestrator routes during the upgrade
- The migrated orchestrator uses the same connection and response path as your original REST integration
- Review the migrated routes to confirm the routing keys and conditions are correct
- Remove any deprecated entity route configuration from the original REST API endpoint card after confirming the orchestrator works correctly

## Troubleshooting

### Records Are Not Being Routed

- Confirm the **Route Key Path** points to the correct field in the source data
- Check that at least one route's **Route Condition** matches the actual values in the data
- Use a catch-all route (empty condition, last in processing order) to capture unmatched records in a "review" integration

### All Records Go to the Catch-All Route

The **Route Key Path** may be incorrect. Test by importing a small sample file and inspecting the raw JSON/XML to confirm the path.

### Excel Worksheets Not Being Matched

When **Route by Worksheet** is enabled, the **Route Condition** must match the worksheet name exactly (case-sensitive). Check for trailing spaces in worksheet names.

## See Also

- [Orchestrator Page](page-orchestrator.md)
- [Orchestrator Routes Page](page-orchestrator-routes.md)
- [How to Set Up REST API Import](how-to-rest-api-import.md)
- [How to Import Sales Documents](how-to-sales-documents.md)
- [How to Use Background Processing](how-to-background-processing.md)

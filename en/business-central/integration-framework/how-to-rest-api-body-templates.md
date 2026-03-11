# How to Configure REST API Request Body Templates

This guide explains how to create and configure request body templates for REST API integrations that require sending data in the request body.

## Prerequisites

- **Permission** - You have NAVX IF STANDARD or NAVX IF ALL permission set
- **REST API Integration** - You have a REST API integration with an endpoint configured
- **API Documentation** - You know the request body format expected by the target API

## What Are Request Body Templates?

When calling REST APIs that use POST, PUT, or PATCH methods, you often need to send a structured request body (typically JSON) with the API call. Request body templates let you define the body structure once and use variable placeholders that are resolved at runtime with dynamic values.

The Integration Framework stores the request body template on the REST API endpoint. At execution time, it reads the template, replaces all `{{variableName}}` placeholders with their resolved values, and sends the result as the HTTP request body.

## When to Use Request Body Templates

Request body templates are the right choice when:

- **POST Requests** - The API expects data in the request body to create resources or trigger actions
- **PUT/PATCH Requests** - The API requires a body to update existing resources
- **Search APIs** - The API accepts search criteria or filters as a JSON body rather than query parameters
- **GraphQL Endpoints** - The API expects a query structure in the body
- **Dynamic Payloads** - The body content needs to change based on dates, configuration values, or Business Central data

## Template Syntax

### Placeholder Format

Use double curly braces to mark variable placeholders in your template:

```text
{{variableName}}
```

The framework scans the template text for all occurrences of `{{...}}` and replaces each one with the resolved value of the named variable.

### Template Example

A JSON request body template might look like this:

```json
{
  "query": {
    "dateFrom": "{{startDate}}",
    "dateTo": "{{endDate}}",
    "status": "{{orderStatus}}",
    "warehouse": "{{warehouseCode}}"
  }
}
```

At runtime, if the variables resolve to specific values, the sent body becomes:

```json
{
  "query": {
    "dateFrom": "2026-03-01",
    "dateTo": "2026-03-11",
    "status": "open",
    "warehouse": "WH-EAST"
  }
}
```

## Step-by-Step Process

### Step 1: Identify the Required Body Structure

1. Review the target API documentation
2. Note which fields are required and which are optional
3. Identify which values should be static and which should be dynamic

### Step 2: Open the REST API Endpoint

1. Navigate to **Integration Framework** > **Integrations**
2. Open your REST API integration
3. Go to the **REST API Endpoint** configuration
4. Verify the **HTTP Method** is set to **POST**, **PUT**, or **PATCH**

### Step 3: Enter the Request Body Template

1. On the endpoint, locate the **Request Body** field
2. Enter the full body template text including `{{variableName}}` placeholders for any dynamic values
3. Use valid JSON syntax if the API expects JSON

### Step 4: Define Template Variables

1. On the endpoint page, open the **Template Variables** section
2. For each placeholder used in the body template, create a matching variable:

| Field | Description |
| --- | --- |
| **Variable Name** | Must match the placeholder name exactly (e.g., `startDate` for `{{startDate}}`) |
| **Variable Type** | How the value is resolved (Static, Date, DateTime, Last Sync Date, Last Sync Date/Time, Record Field, Custom) |
| **Static Value** | The fixed value to substitute (only when Variable Type is Static) |
| **Date Format** | The format string for date/time variables (e.g., `yyyy-MM-dd`) |

For details on each variable type, see [How to Configure REST API Template Variables](how-to-rest-api-template-variables.md).

### Step 5: Test the Integration

1. Run the integration with a small dataset or in test mode
2. Verify the API receives the expected body content
3. Check for errors related to unresolved placeholders or invalid body format

## Common Body Template Patterns

### Pattern 1: Date Range Filter

Use date variables to send a time window to the API:

```json
{
  "filters": {
    "from": "{{syncFromDate}}",
    "to": "{{syncToDate}}"
  }
}
```

**Variables:**

| Variable Name | Variable Type | Date Format |
| --- | --- | --- |
| `syncFromDate` | Last Sync Date | `yyyy-MM-dd` |
| `syncToDate` | Date | `yyyy-MM-dd` |

### Pattern 2: Incremental Sync with Last Sync Timestamp

Fetch only records modified since the last successful sync:

```json
{
  "modifiedSince": "{{lastSync}}"
}
```

**Variables:**

| Variable Name | Variable Type | Date Format |
| --- | --- | --- |
| `lastSync` | Last Sync Date/Time | `yyyy-MM-ddTHH:mm:ss` |

The Last Sync Date/Time variable type automatically retrieves the completion timestamp from the most recent successful import log entry for this integration.

### Pattern 3: Static Configuration Values

Send fixed configuration alongside dynamic values:

```json
{
  "apiVersion": "{{version}}",
  "companyId": "{{companyId}}",
  "updatedAfter": "{{lastSync}}"
}
```

**Variables:**

| Variable Name | Variable Type | Details |
| --- | --- | --- |
| `version` | Static | Static Value: `2.0` |
| `companyId` | Static | Static Value: `CRONUS-001` |
| `lastSync` | Last Sync Date/Time | Date Format: `yyyy-MM-ddTHH:mm:ss` |

### Pattern 4: Values from Business Central Tables

Pull a value from a Business Central record into the body:

```json
{
  "locationCode": "{{defaultLocation}}",
  "currency": "{{companyCurrency}}"
}
```

**Variables:**

| Variable Name | Variable Type | Source Table | Source Field | Filter |
| --- | --- | --- | --- | --- |
| `defaultLocation` | Record Field | Inventory Setup | Location Code | *(none)* |
| `companyCurrency` | Record Field | General Ledger Setup | LCY Code | *(none)* |

For details on configuring Record Field variables, see [How to Configure REST API Template Variables](how-to-rest-api-template-variables.md).

## Variable Resolution Order

When the integration runs, the body template is processed as follows:

1. The template text is read from the endpoint
2. The framework scans for `{{variableName}}` placeholders from left to right
3. For each placeholder, it looks up the matching template variable record
4. The variable is resolved based on its type (static value, formatted date, record field lookup, etc.)
5. The placeholder is replaced with the resolved text
6. After all placeholders are resolved, the final body text is sent with the HTTP request

If a placeholder has no matching variable defined, it is replaced with an empty string.

## Troubleshooting

### Issue: API returns "invalid request body" error

- **Cause** - The template produces malformed JSON after variable substitution
- **Solution** - Verify that resolved values do not break JSON syntax (e.g., strings must be quoted, numbers must not be quoted)
- **Check** - Review the template to ensure placeholder positions produce valid JSON

### Issue: Placeholder not replaced (literal `{{variableName}}` sent to API)

- **Cause** - The variable name in the template does not match any defined template variable
- **Solution** - Verify the Variable Name field matches the placeholder exactly, including capitalization

### Issue: Date value is empty

- **Cause** - For Last Sync Date/Time variables, there is no previous successful import log entry
- **Solution** - Run an initial sync or use a Static variable with a starting date for the first run

### Issue: Record Field variable returns blank

- **Cause** - The source table and field are not configured, or the filter returns no records
- **Solution** - Verify the Source Table No., Source Field No., and Filter Expression are correct

## Best Practices

1. **Use Valid JSON** - Ensure your template produces valid JSON after all substitutions
2. **Name Variables Clearly** - Use descriptive names like `syncFromDate` rather than `var1`
3. **Test Incrementally** - Start with static values, then replace with variables one at a time
4. **Use Last Sync Variables** - For incremental sync patterns, use Last Sync Date or Last Sync Date/Time to avoid refetching all data
5. **Document Your Templates** - Keep notes on which placeholders map to which API fields
6. **Handle First Run** - Plan for the scenario where Last Sync variables have no previous value

## See Also

- [How to Configure REST API Template Variables](how-to-rest-api-template-variables.md)
- [How to Set Up Chained REST API Calls](how-to-rest-api-chained-calls.md)
- [How to Configure REST API Aggregation](how-to-rest-api-aggregation.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)

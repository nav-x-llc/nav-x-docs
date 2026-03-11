# How to Configure REST API Template Variables

This guide explains how to create and configure template variables for REST API integrations. Template variables provide dynamic values that are substituted into URL paths and request body templates at runtime.

## Prerequisites

- **Permission** - You have NAVX IF STANDARD or NAVX IF ALL permission set
- **REST API Integration** - You have a REST API integration with an endpoint configured
- **Placeholders Identified** - You know which `{{variableName}}` placeholders are used in your endpoint URL or request body template

## What Are Template Variables?

Template variables are named values that the Integration Framework resolves at runtime and substitutes into `{{variableName}}` placeholders. They can appear in two places:

- **Request Body Templates** - Dynamic values inside the HTTP request body (for POST/PUT/PATCH calls)
- **Endpoint URL Paths** - Dynamic segments in the resource path of the API endpoint

Each variable has a name that must match a placeholder and a type that determines how its value is resolved.

## Variable Types

The Integration Framework supports the following variable types:

| Variable Type | Description | Resolved Value |
| --- | --- | --- |
| **Static** | A fixed text value that does not change between runs | The value entered in the Static Value field |
| **Date** | Today's date formatted using the specified format string | Current date (e.g., `2026-03-11`) |
| **Date/Time** | Current date and time formatted using the specified format string | Current date/time (e.g., `2026-03-11T14:30:00`) |
| **Last Sync Date** | The date of the last successful import, formatted using the specified format string | Date portion of the last completed import timestamp |
| **Last Sync Date/Time** | The full timestamp of the last successful import, formatted using the specified format string | Full timestamp of the last completed import |
| **Record Field** | A value read from a specific field in a Business Central table | The field value from the first record matching the configured filter |
| **Custom** | Reserved for custom resolution through AL event subscribers | Empty by default; resolved via the OnBeforeResolveVariable event |

## Step-by-Step Process

### Step 1: Open Template Variables

1. Navigate to **Integration Framework** > **Integrations**
2. Open your REST API integration
3. Go to the **REST API Endpoint** configuration
4. Locate the **Template Variables** section (list part on the endpoint page)

### Step 2: Create a Variable

1. In the Template Variables list, add a new line
2. Complete the following fields:

| Field | Description |
| --- | --- |
| **Variable Name** | The name used in `{{variableName}}` placeholders. Must match exactly, including capitalization. |
| **Variable Type** | Select how the value is resolved (see Variable Types above). |

### Step 3: Configure Type-Specific Fields

Depending on the selected Variable Type, additional fields become editable:

#### For Static Variables

| Field | Description | Example |
| --- | --- | --- |
| **Static Value** | The fixed text value to substitute | `active`, `USD`, `2.0` |

#### For Date and Date/Time Variables

| Field | Description | Example |
| --- | --- | --- |
| **Date Format** | Format string controlling the output format | `yyyy-MM-dd`, `yyyy-MM-ddTHH:mm:ss` |

#### For Last Sync Date and Last Sync Date/Time Variables

| Field | Description | Example |
| --- | --- | --- |
| **Date Format** | Format string controlling the output format | `yyyy-MM-dd`, `yyyy-MM-ddTHH:mm:ss` |

The system automatically looks up the most recent successful import log entry for the integration and uses its completion timestamp.

#### For Record Field Variables

| Field | Description | Example |
| --- | --- | --- |
| **Source Table No.** | The Business Central table to read from | 98 (General Ledger Setup) |
| **Source Table Name** | Displays the table name (read-only, calculated) | General Ledger Setup |
| **Source Field No.** | The field within the table whose value is used | 7 (LCY Code) |
| **Filter Expression** | Optional filter to identify a specific record. Use the assist edit button to open the filter page. | *(blank for single-record tables)* |

### Step 4: Verify Placeholder Matching

Ensure every `{{variableName}}` placeholder in your URL path or request body template has a corresponding variable defined with the same name. Unmatched placeholders resolve to an empty string.

## Date Format Strings

The Date Format field uses the following tokens:

| Token | Description | Example Output |
| --- | --- | --- |
| `yyyy` | Four-digit year | `2026` |
| `MM` | Two-digit month (zero-padded) | `03` |
| `dd` | Two-digit day (zero-padded) | `11` |
| `HH` | Two-digit hour in 24-hour format (zero-padded) | `14` |
| `mm` | Two-digit minute (zero-padded) | `30` |
| `ss` | Two-digit second (zero-padded) | `00` |

**Common format strings:**

| Format String | Example Output |
| --- | --- |
| `yyyy-MM-dd` | `2026-03-11` |
| `yyyy-MM-ddTHH:mm:ss` | `2026-03-11T14:30:00` |
| `MM/dd/yyyy` | `03/11/2026` |
| `yyyyMMdd` | `20260311` |

If no date format is specified, the system defaults to `yyyy-MM-dd`.

## Using Variables in Endpoint URL Paths

Template variables are not limited to request body templates. The framework also resolves `{{variableName}}` placeholders in the endpoint resource path before making the API call.

### Example: Dynamic URL Segments

**Resource Path:**

```text
/api/v2/orders?status={{orderStatus}}&since={{lastSync}}
```

**Variables:**

| Variable Name | Variable Type | Details |
| --- | --- | --- |
| `orderStatus` | Static | Static Value: `open` |
| `lastSync` | Last Sync Date/Time | Date Format: `yyyy-MM-ddTHH:mm:ss` |

**Resolved URL at runtime:**

```text
/api/v2/orders?status=open&since=2026-03-10T08:00:00
```

### Example: Tenant or Company in URL

**Resource Path:**

```text
/api/{{tenantId}}/inventory/items
```

**Variables:**

| Variable Name | Variable Type | Details |
| --- | --- | --- |
| `tenantId` | Record Field | Source Table: Company Information, Source Field: Registration No. |

## Configuring Record Field Variables

Record Field variables let you pull a value from any Business Central table at runtime. This is useful for referencing setup values, company information, or other configuration data.

### Step 1: Set Variable Type to Record Field

Select **Record Field** in the Variable Type field. This enables the Source Table No., Source Field No., and Filter Expression fields.

### Step 2: Select the Source Table

1. In the **Source Table No.** field, enter or look up the table number
2. The **Source Table Name** field displays the table name automatically

### Step 3: Select the Source Field

1. In the **Source Field No.** field, enter or look up the field number within the selected table
2. The field value from the first matching record will be used as the resolved value

### Step 4: Set a Filter (Optional)

If the table contains multiple records and you need a specific one:

1. Click the **assist edit** button on the **Filter Expression** field
2. The filter page opens for the selected table
3. Set filters to identify the record you need (e.g., filter on a code or type field)
4. Click OK to save the filter

The system applies the filter, finds the first matching record, and reads the specified field value.

### Example: Read Default Location Code

| Field | Value |
| --- | --- |
| Variable Name | `warehouseCode` |
| Variable Type | Record Field |
| Source Table No. | 313 (Inventory Setup) |
| Source Field No. | 2 (Location Code) |
| Filter Expression | *(blank - single record table)* |

### Example: Read a Specific Customer's External ID

| Field | Value |
| --- | --- |
| Variable Name | `externalId` |
| Variable Type | Record Field |
| Source Table No. | 18 (Customer) |
| Source Field No. | 1 (No.) |
| Filter Expression | WHERE(Name=FILTER(Contoso*)) |

## Examples

### Example 1: Incremental Sync with Date Variables

Fetch orders modified since the last sync using URL parameters:

**Resource Path:**

```text
/api/orders?modifiedAfter={{lastModified}}&status={{status}}
```

**Variables:**

| Variable Name | Variable Type | Date Format | Static Value |
| --- | --- | --- | --- |
| `lastModified` | Last Sync Date/Time | `yyyy-MM-ddTHH:mm:ss` | |
| `status` | Static | | `shipped` |

### Example 2: Request Body with Mixed Variable Types

Send a search request with dynamic date range and static parameters:

**Request Body Template:**

```json
{
  "search": {
    "dateFrom": "{{fromDate}}",
    "dateTo": "{{toDate}}",
    "warehouse": "{{warehouse}}",
    "includeArchived": false
  }
}
```

**Variables:**

| Variable Name | Variable Type | Date Format | Static Value | Source Table |
| --- | --- | --- | --- | --- |
| `fromDate` | Last Sync Date | `yyyy-MM-dd` | | |
| `toDate` | Date | `yyyy-MM-dd` | | |
| `warehouse` | Record Field | | | Inventory Setup |

### Example 3: Custom Variable Resolution via AL Code

For scenarios where built-in types are not sufficient, use the Custom type and subscribe to the OnBeforeResolveVariable event in AL code to provide a value programmatically.

| Variable Name | Variable Type |
| --- | --- |
| `customToken` | Custom |

The Custom type resolves to an empty string by default. An AL event subscriber must handle the OnBeforeResolveVariable integration event to set the resolved value.

## Troubleshooting

### Issue: Variable resolves to empty string

- **Cause** - Variable Name does not match the placeholder, or the variable type returns no value
- **Solution** - Verify the Variable Name matches the placeholder exactly (case-sensitive). For Record Field types, verify the table, field, and filter return a record.

### Issue: Date format is incorrect

- **Cause** - The Date Format string does not match the API's expected format
- **Solution** - Review the API documentation and adjust the Date Format field. Use `yyyy-MM-ddTHH:mm:ss` for ISO 8601 timestamps.

### Issue: Last Sync Date/Time is empty on first run

- **Cause** - No previous successful import log entry exists for this integration
- **Solution** - For the first run, consider using a Static variable with a known starting date, or handle the empty value in your API logic.

### Issue: Record Field variable returns wrong value

- **Cause** - The Filter Expression does not isolate the intended record, or the first matching record is not the expected one
- **Solution** - Use the assist edit on Filter Expression to refine the filter. Verify with the filter page that the correct record appears first.

## Best Practices

1. **Match Names Exactly** - Variable names are case-sensitive and must match placeholders precisely
2. **Use Descriptive Names** - Name variables after their purpose (e.g., `syncFromDate`) rather than generic labels
3. **Default Date Format** - If no format is specified, the system uses `yyyy-MM-dd`; always specify the format explicitly for clarity
4. **Test Record Field Variables** - Verify that the table, field, and filter combination returns the expected value before running the integration
5. **Plan for First Run** - When using Last Sync variables, account for the initial run where no sync history exists
6. **Use Filters Carefully** - For Record Field variables on multi-record tables, always set a Filter Expression to ensure the correct record is selected
7. **Keep Templates Readable** - Use meaningful placeholder names in templates to make them self-documenting

## See Also

- [How to Configure REST API Request Body Templates](how-to-rest-api-body-templates.md)
- [How to Set Up Chained REST API Calls](how-to-rest-api-chained-calls.md)
- [How to Configure REST API Aggregation](how-to-rest-api-aggregation.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)

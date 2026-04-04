# How to Set Up a Custom Lookup

A *Custom Lookup* lets you point a custom field at an existing Business Central table so that users can search and select from real data rather than a manually maintained list of values. For example, you could point a custom Code field on a Sales Line to the *Location* table, so users always pick from valid locations.

## Before You Start

- The custom field must already be defined on the [Custom Fields Definitions](page-customfield-definitions.md) page.
- Custom Lookups only apply to **Code** and **Text** field types.
- Make sure the field type of the lookup field in Business Central matches the type of your custom field. Mismatched types can cause runtime errors.

## Steps

### 1. Open the Custom Lookup Page

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Custom Fields Definitions**, and choose the related link.
2. Select the custom field you want to configure a lookup for.
3. Choose the **Custom Lookup** action in the ribbon.

### 2. Configure the Lookup Table and Field

On the **Custom Fields Lookup** page:

1. In **Custom Lookup Table**, enter or select the Business Central table number you want to use as the lookup source (for example, *14* for Location, *18* for Customer).
2. In **Custom Lookup Field**, select the field from that table whose value will be stored in and displayed from the custom field.
3. Optionally, in **Custom Lookup Page**, select the page to open when the user clicks the lookup button. If left blank, Business Central uses the default lookup page for the table where one exists.

> [!WARNING]
> The data type of the **Custom Lookup Field** must match the type of your custom field. For example, a custom Code(20) field requires a lookup field that is also Code(20) or shorter.

### 3. Add Filters (Optional)

Once the lookup table and field are set, the **Custom Filters** section at the bottom of the page becomes available. Filters limit which records appear in the lookup list.

For each filter row:

1. Set **Source Field No.** to the field from the lookup table you want to filter on.
2. Set **Relation Type**:
   - Choose *Filter* to apply a fixed, constant value.
   - Choose *Field* to filter dynamically based on a field value from the current record.
3. If **Relation Type** is *Filter*, enter the constant value in **Value**.
4. If **Relation Type** is *Field*, select the matching field from the lookup table in **Filter Field No.**.

You can add multiple filter rows. All filter rows are applied together (AND logic).

### 4. Test the Lookup

Close the setup page. Navigate to a record that uses the custom field (for example, a Sales Order line if you defined the field on Sales Line) and click the lookup button next to the custom field. The lookup should open showing only the filtered records from the configured table.

## Example: Limit a Custom Field to Active Items Only

Suppose you have a custom Code field on Sales Header and want it to look up only non-blocked customers:

1. Set **Custom Lookup Table** to *18* (Customer).
2. Set **Custom Lookup Field** to *No.* (the customer number).
3. Set **Custom Lookup Page** to *22* (Customer List).
4. In the filters section, add a row:
   - **Source Field No.**: *39* (Blocked)
   - **Relation Type**: *Filter*
   - **Value**: leave blank (meaning "not blocked")

## See Also

- [Custom Fields Lookup Page](page-customfield-lookup.md)
- [Custom Fields Definitions Page](page-customfield-definitions.md)
- [Getting Started](getting-started.md)

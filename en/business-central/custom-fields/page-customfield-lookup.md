# Page Custom Fields Lookup

When you define fields, you can also define that those fields can only have a value from a different table (lookup table). The configuration of the existing lookup table can be done via the **Custom Fields Lookup** page that can be accessed as an action from the **Custom Fields Definitions** page.

When you open the **Custom Fields Lookup** page from the **Custom Fields Definitions** page, it will allow you to define the relationship to an existing table within Business Central.

The following fields are available on the page.

| Field | Description |
| --- | --- |
| **Custom Lookup Table** | The table number within Business Central. |
| **Custom Lookup Field** | The field that should be used for the lookup. |
| **Custom Lookup Page** | The page that should be used for the lookup. If the page number is left empty, the default page will be used. Not all tables have a default lookup page defined in Business Central. |

> [!WARNING]
> It is your responsibility to review that the field type matches the field type of the custom field when selecting a **Custom Lookup Field**. If the type doesn't match, you might receive runtime errors.

## Custom Lookup Filters

Once you have configured the **Custom Lookup Table** and **Custom Lookup Field**, a **Custom Filters** section becomes available at the bottom of the page. Filters allow you to restrict which records appear in the lookup list when a user searches for a value.

Each filter row has the following fields:

| Field | Description |
| --- | --- |
| **Source Field No.** | The field from the lookup table whose value will be shown or matched. |
| **Relation Type** | How the filter is applied. *Filter* applies a constant value; *Field* matches against a field value from the current record being edited. |
| **Value** | The constant filter value to apply (only used when **Relation Type** is *Filter*). |
| **Filter Field No.** | The field from the lookup table to match against (only used when **Relation Type** is *Field*). |

### Examples

- To show only active customers in a customer lookup, set **Source Field No.** to the *Blocked* field, **Relation Type** to *Filter*, and **Value** to blank (not blocked).
- To filter items by the location entered on the current document header, set **Relation Type** to *Field* and map **Filter Field No.** to the location field on the item table.

You can add multiple filter rows to apply more than one constraint at the same time.

## See Also

- [Custom Fields Definitions Page](page-customfield-definitions.md)
- [How to Set Up a Custom Lookup](how-to-setup-custom-lookup.md)

# Page Custom Fields Lookup

When you define fields, you can also define that those fields can only have a value from a different table (lookup table). The configuration of the existing lookup table can be done via the **Custom Fields Lookup** page that can be accessed as an action from the **Custom Fields Definitions** page.

When you open the **Custom Fields Lookup** page from the **Custom Fields Definitions** page, it will allow you to define the relationship to an existing table within Business Central.

The following fields are available on the page.

| Field | Description |
|-|-|
| **Custom Lookup Table** | The table number within Business Central. |
| **Custom Lookup Field** | The field that should be used for the lookup. |
| **Custom Lookup Page** | The page that should be used for the lookup. If the page number is left empty, the default page will be used. Not all tables have a default lookup page defined in Business Central. |

> [!WARNING]
> It is your responsibility to review that the field type matches the field type of the custom field when selecting a **Custom Lookup Field**. If the type doesn't match, you might receive runtime errors.

## See Also

- [Custom Fields Definitions Page](page-customfield-definitions.md)

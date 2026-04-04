# Page Custom Fields Values

After you defined specific custom fields, you can define allowed values for **Code** fields. Defining allowed values will then limit the possible values that can be entered into the field. If the entered value is not part of the list of allowed values, an error will be displayed. The behavior is the same as a *standard lookup field* in Business Central, such as the *Location Code* on a *Sales Order*.

The configuration of the allowed values can be done via the **Custom Fields Values** page that can be accessed as an action from the **Custom Fields Definitions** page.

When you open the **Custom Fields Values** page from the **Custom Fields Definitions** page, it will show the already defined values for the current field in the *Custom Fields Definitions* page. You can add more records, delete records, or change records.

The following fields are available on the page.

| Field | Description |
| --- | --- |
| **Value** | The code field that will be the allowed value in this field |
| **Description** | A description explaining what the code is for |
| **Global Dimension 1 Code** | Visible when the field has **Set Dimensions** enabled. Defines the Global Dimension 1 value that will be automatically applied to the record when this value is selected. |
| **Global Dimension 2 Code** | Visible when the field has **Set Dimensions** enabled. Defines the Global Dimension 2 value that will be automatically applied to the record when this value is selected. |

## Dimensions

If the custom field has **Set Dimensions** enabled on the [Custom Fields Definitions](page-customfield-definitions.md) page, you can also assign additional dimension values (beyond the two global dimensions) to each custom value. To do this, select a value and choose the **Dimensions** action in the ribbon (keyboard shortcut: Alt+D). This opens the standard Business Central dimension editor for that value.

When a user selects this value in the custom field on a record, all configured dimensions are automatically applied to that record.

## See Also

- [Custom Fields Definitions Page](page-customfield-definitions.md)
- [How to Use Set Dimensions with Custom Fields](how-to-set-dimensions.md)

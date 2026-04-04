# How to Use Set Dimensions with Custom Fields

The **Set Dimensions** feature lets you automatically apply dimension values to a record whenever a user selects a specific custom field value. For example, when a user selects the value *MARKETING* in a custom Code field on a Sales Order, the system can automatically set *Department = MARKETING* on the order.

This only applies to **Code** and **Text** field types.

## Before You Start

- The custom field must already be defined on the [Custom Fields Definitions](page-customfield-definitions.md) page.
- The field must be of type **Code** or **Text**.
- You must have dimensions configured in Business Central (choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Dimensions**, and choose the related link).

## Steps

### 1. Enable Set Dimensions on the Field

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Custom Fields Definitions**, and choose the related link.
2. Select the custom field you want to configure.
3. Enable the **Set Dimensions** toggle.
4. Close or move to the next step.

### 2. Define Custom Values for the Field

The dimension mapping is configured per value, so you must define the allowed values first.

1. With the custom field selected on the **Custom Fields Definitions** page, choose the **Values** action.
2. Add each value your users will select (for example: *MARKETING*, *SALES*, *IT*).
3. Fill in the **Description** for each value.

### 3. Assign Dimensions to Each Value

On the **Custom Fields Values** page:

**For Global Dimensions:**

The two global dimensions (typically Department and Project) are shown directly as columns on the values list. Enter the appropriate dimension value code directly in the **Global Dimension 1 Code** and/or **Global Dimension 2 Code** columns for each value row.

**For Other Dimensions:**

1. Select the value row.
2. Choose the **Dimensions** action in the ribbon (keyboard shortcut: Alt+D).
3. The standard dimension editor opens. Add each dimension and its value.
4. Close the dimension editor.

Repeat for each value that should trigger dimension assignment.

### 4. Test the Feature

Navigate to a record that uses the custom field (for example, a Sales Order if the field is defined on Sales Header). Select a value in the custom field. The dimension values configured for that value should be automatically applied to the record's dimensions.

> [!NOTE]
> If the record already has a dimension value set, the custom field dimension assignment will overwrite it. Make sure your users are aware of this behavior.

## See Also

- [Custom Fields Values Page](page-customfield-custom-values.md)
- [Custom Fields Definitions Page](page-customfield-definitions.md)
- [Getting Started](getting-started.md)

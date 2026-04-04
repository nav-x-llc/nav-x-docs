# How to Control Which Pages Show Custom Fields

When you define a custom field, it is automatically shown on a default set of pages for that table. For example, a field defined on the *Sales Header* table will appear on the Sales Order page by default. You can customize this behavior — adding the field to additional pages or hiding it from pages where it appears by default.

## Before You Start

- The custom field must already be defined on the [Custom Fields Definitions](page-customfield-definitions.md) page.
- Only pages that are included in the visibility list can be toggled. If a page you need is not listed, contact NAV-X support to request it.

## To Change Visibility for a Single Field

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Custom Fields Definitions**, and choose the related link.
2. Select the custom field whose visibility you want to change.
3. Choose the **Visibility** action in the ribbon.
4. The [Custom Fields Visibility](page-customfield-visibility.md) page opens, filtered to the selected field. It lists all pages where this field can be shown.
5. Enable or disable the **Visible** toggle for each page as needed.
6. Close the page. Changes take effect immediately.

## To Change Visibility Across All Fields at Once

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Custom Fields Definitions**, and choose the related link.
2. Choose the **Visibility (All Fields)** action in the ribbon.
3. The [Custom Fields Visibility](page-customfield-visibility.md) page opens showing all fields across all tables without filtering.
4. Toggle the **Visible** column for any field/page combination you want to change.
5. Close the page.

## Tips

- If you want a field to appear on a document page (such as Sales Order) but not on the posted document page (such as Posted Sales Invoice), disable the **Visible** toggle for the posted page only. The field value is still stored and can be seen in the posted document if visibility is re-enabled later.
- Visibility settings are company-specific. If you have multiple companies, you must configure visibility separately in each.
- Changing visibility does not delete any data. Values entered into a field remain stored even when the field is hidden.

## See Also

- [Custom Fields Visibility Page](page-customfield-visibility.md)
- [Custom Fields Definitions Page](page-customfield-definitions.md)
- [Getting Started](getting-started.md)

# Set Up Non-Commissionable Items and Exceptions

[!include[signup-tenant](includes/signup-tenant.md)]

By default, items are commissionable or non-commissionable based on the **Commissionable** flag set on the item, item category, resource, G/L account, or item charge. The **Non-Commissionable Mapping** page provides a way to define exceptions to these default rules — either to exclude specific combinations from commission, or to create commissionable exceptions within a broader non-commissionable rule.

## When to Use Non-Commissionable Mapping vs. Item Setup

Use the **Commissionable** field directly on the [Item Card](item-setup.md) when an item should always be non-commissionable for all customers and salespeople.

Use **Non-Commissionable Mapping** when exceptions depend on combinations — for example, a specific item is non-commissionable when sold with a certain dimension value, or all items of a certain category should be excluded for a particular scenario.

## Setting Up Non-Commissionable Exceptions

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Non Commissionable Mapping**, and choose the related link.
2. Choose **New** to create an exception record.
3. Fill in the filter criteria:

|                        |                                                                                                                                                                                         |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Entity Type**        | The type of entity to target: Item, Item Category, Resource, Resource Group, G/L Account, or Item Charge. Leave blank to apply to all entity types.                                    |
| **Entity No.**         | The specific item, resource, or other entity number. Leave blank to apply to all entities of the selected type.                                                                         |
| **Dimension fields**   | Optionally restrict the rule to lines that have specific Global Dimension or Shortcut Dimension values. These fields are only visible when **Commissions by Dimensions** is enabled in Commission Setup. |
| **Commissionable**     | Set to **No** to mark matching lines as non-commissionable. Set to **Yes** to create a commissionable exception within a broader non-commissionable rule.                                |

4. Save the record.

> [!NOTE]
> Setting **Commissionable** to **Yes** creates a positive exception — useful when an item category is non-commissionable but you want one specific item within that category to still earn commission.

> [!IMPORTANT]
> Only Commission Managers can create or modify Non-Commissionable Mapping records.

## See Also

- [Non Commissionable Mapping](page-non-commissionable-mapping.md)
- [Item Setup](item-setup.md)
- [Item Category Setup](item-category-setup.md)
- [Commission Rate Setup](commission-rate-setup.md)

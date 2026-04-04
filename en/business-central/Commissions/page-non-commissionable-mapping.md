# Page Non-Commissionable Mapping

[!include[signup-tenant](includes/signup-tenant.md)]

The **Non-Commissionable Mapping** page defines exceptions to the normal commissionability rules. Any sales line that matches a record on this page will have its commissionability overridden by the value in the **Commissionable** field, regardless of what is configured on the item, customer, salesperson, or other setup. You can access this page by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Non-Commissionable Mapping**, and then choosing the related link.

This page is useful when you want most items or entities to be commissionable by default but need to exclude specific combinations — for example, a specific item sold to a specific customer, or all lines posted to a certain G/L account. It can also be used in reverse: to define specific combinations that are commissionable within a broader non-commissionable rule.

> [!NOTE]
> The dimension columns (Global Dimension 1 Code through Shortcut Dimension 8 Code) are only visible when **Commissions by Dimensions** is enabled in [Commission Setup](commission-setup.md).

> [!IMPORTANT]
> Only Commission Managers can edit this page.

|                                                          |                                                                                                                                                                                                                                                  |
|----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Global Dimension 1 Code**                              | Optionally restricts the mapping to lines with this Global Dimension 1 value. Leave blank to match any value.                                                                                                                                    |
| **Global Dimension 2 Code**                              | Optionally restricts the mapping to lines with this Global Dimension 2 value. Leave blank to match any value.                                                                                                                                    |
| **Shortcut Dimension 3 Code – Shortcut Dimension 8 Code** | Optionally restricts the mapping to lines with specific values for Shortcut Dimensions 3 through 8. Leave blank to match any value.                                                                                                              |
| **Entity Type**                                          | The type of entity this mapping applies to. Options include **Item**, **Item Category**, **Resource**, **Resource Group**, **G/L Account**, **Item Charge**, or blank to apply to all lines regardless of entity type.                            |
| **Entity No.**                                           | The specific entity number within the selected **Entity Type**. If left blank while an **Entity Type** is selected, the mapping applies to all entities of that type.                                                                            |
| **Commissionable**                                       | Whether lines matching this record should generate a commission. Select **Yes** to mark matching lines as commissionable, or **No** to mark them as non-commissionable. This allows the page to be used both to exclude specific lines and to define commissionable exceptions within a broader exclusion rule. |

## See Also

- [Setting up Non-Commissionable Items](how-to-setup-non-commissionable-items.md)
- [Setting up Commission Rates](commission-rate-setup.md)
- [Additional Setups](additional-setups.md)

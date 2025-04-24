# Page NAV-X Integration Mappings

After you defined and integration, you must define the fields mappings between the outside system and Business Central. This can be done on this page, which you open from the **NAV-X Integrations** page by invoking the action *Mappings*.

The following fields are available on the page.

| Field | Description |
|-|-|
| **Field No.** | The number of the field that is defined in the **Integration Fields** page. |
| **Field Name** | The name of the field. This is not editable. |
| **Destination Table No.** | The Business Central table the field should be stored in. |
| **Destination Table Name** | The table caption for the Business Central table. This is not editable. |
| **Destination Field No.** | The field number of the field from the Business Central table **Destination Table No.**. |
| **Destination Field Name** | The field caption for the Business Central table field. This is not editable. |
| **Validate** | If this field is checked, the system will validate the data when it's saved in Business Central. The validation will be performed in the order of the **Field No.**, but not until all values in the record are filled out. |

> [!NOTE]
> Currently, you can only define one **Destination Table No.**. Multiple tables are not supported as of now.

## See Also

- [Integrations Page](page-integrations.md)

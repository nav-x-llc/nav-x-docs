# Page NAV-X Integration Table Fields

Each pre-defined integration can define which system is the owner of certain data. This is configured in the **NAV-X Integration Table Configuration** page. The page can be opened by by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **NAV-X Integration Table Configuration**, and then choose the related link. For each field of each of those tables, the direction of the integration as well as the system that owns the data can also be defined.

The following fields are available on the page.

| Field | Description |
|-|-|
| **Field No.** | Field number for which the ownership is configured. This field is not editable. |
| **Name** | The name of the field. This field is not editable. |
| **Direction** | Describes the integration and the setup. This field is not editable. The following options are available:<br><br>- Disabled: The integration will not use this table.<br>- from Business Central: The data is only exported.<br>- to Business Central :The data is only imported.<br>-Bi-Directional: The data is imported and exported. |
| **Master** | If the data has changed in Business Central as well as in the external system, this field defines how the conflicts are resolved:<br><br>- Business Central: The value from Business Central is used.<br>- external System: The value in Business Central is overwritten by the value from the external system. |

## See Also

- [NAV-X Integration Table Configuration page](page-integration-table.md)

# Page NAV-X Integration Fields

After you defined and integration, you must define the fields that are used in the outside system. This can be done on this page, which you open from the **NAV-X Integrations** page by invoking the action *Fields*.

The following fields are available on the page.

| Field | Description |
|-|-|
| **Field No.** | The number of the field. This defines the display order as well as the processing order. |
| **Title** | The name of the field. This does not have to match the field name in the outside system. |
| **Column Type** | The column type defines how the value is generated.<br><br>- Constant: A constant value that will always be used.<br>- Standard: The value will be taken from the outside system. |
| **Source Column** | The column identifier in the outside system. If this is an Excel sheet, the column should be the Excel column name (A, B, C...). |
| **Create Multiple Records** | Together with the **Value Separator**, this defines whether the value should be split and create multiple records. If the value is comma separated and this field is checked, multiple rows are created using the field values for the other fields and the separated values from this field. |
| **Value Separator** | When the field **Create Multiple Records** is checked, this field will be used to separate the values in the source column into multiple distinct rows. |
| **Constant Value** | If the **Column Type** is *Constant*, the **Constant Value** will be used for each row. |

## See Also

- [Integrations Page](page-integrations.md)

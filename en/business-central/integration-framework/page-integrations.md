# Page NAV-X Integrations

Before you can use the Integration Framework, you need to define the actual integration. The page can be opened by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **NAV-X Integrations**, and then choose the related link.

The following fields are available on the page. The fields are non editable.

[!include[table-definition](includes/table-definition.md)]

> [!NOTE]
> Currently, it is only possible to create **Excel** integrations that are **Imported** into Business Central, but we will be adding more in the future.

## Actions

### Fields action

Once the general integration is defined, fields in the data source need to be configured. This can be done by invoking the action **Fields** and opening the [Integration Fields page](page-integration-fields.md).

### Mappings action

After the integration and the fields in the outside data source are created, these fields need to be mapped to tables and fields within Business Central. This can be done by invoking the action **Mappings** and opening the [Integration Mappings page](page-integration-mappings.md).

### Records action

The **Records** action opens the [Integration Records page](page-integration-records.md), which shows the data that is ready to be processed, has been processed, or is in an error state.

### Import... action

The **Import...** action is only available when the integration has the **Direction** *Import*. It will allow you to choose a file that then gets imported into the [Integration Records page](page-integration-records.md) page. After the import is completed, the application will ask you, if you want to process the records that were imported immediately. If you select *Yes*, the import is completed and the data within Business Central is updated. If you select *No*, the [Integration Records page](page-integration-records.md) can be opened and the data reviewed.

## See Also

- [Integration Fields page](page-integration-fields.md)
- [Integration Mappings page](page-integration-mappings.md)
- [Integration Records page](page-integration-records.md)

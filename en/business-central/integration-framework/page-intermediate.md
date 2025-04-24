# Page NAV-X Integration to Business Central

The NAV-X Integration Framework provides a convenient way of accessing all import integrations from one single spot. In addition to integrations defined in the **NAV-X Integrations** page, predefined integrations can also be added by installing additional apps. All integrations that import data to Business Central and use the NAV-X Integration Framework will be shown in the page **NAV-X Integrations to Business Central** page.

The page can be opened by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **NAV-X Integrations to Business Central**, and then choose the related link. The page is read only and lists all defined integrations that allow exporting data from Business Central.

The following fields are available on the page. The fields are non editable.

| Field | Description |
|-|-|
| **Title** | The name of the integration |
| **Description** | An explanation of what the integration does |

> [!NOTE]
> You can click on the title of the integration to open a page showing all integration records that are ready to be processed.

## Actions

### Synchronize

The integration first collects the data to be imported in an intermediate table. This table shows all records that are ready to be saved in Business Central. The action *Synchronize* will process all of those records and transform and import them.

### Import

The *Import* action will process the import of data from the outside system into the intermediate tables. The records will be ready to be processed once they are imported.

## See Also

- [NAV-X Integrations Page](page-integrations.md)

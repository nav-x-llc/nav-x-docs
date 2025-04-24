# Page NAV-X Integration from Business Central

The NAV-X Integration Framework provides a convenient way of accessing all export integrations from one single spot. In addition to integrations defined in the **NAV-X Integrations** page, predefined integrations can also be added by installing additional apps. All integrations that export data from Business Central and use the NAV-X Integration Framework will be shown in the page **NAV-X Integrations from Business Central** page.

The page can be opened by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **NAV-X Integrations from Business Central**, and then choose the related link. The page is read only and lists all defined integrations that allow exporting data from Business Central.

The following fields are available on the page. The fields are non editable.

| Field | Description |
|-|-|
| **Title** | The name of the integration |
| **Description** | An explanation of what the integration does |

> [!NOTE]
> You can click on the title of the integration to open a page showing all integration records that are ready to be processed.

## Actions

### Synchronize

The integration first collects the data to be exported in an intermediate table. This table shows all records that are ready to be exported. The action *Synchronize* will process all of those records and export them.

## See Also

- [NAV-X Integrations Page](page-integrations.md)

# Getting Started

[!include[signup-tenant](../includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](../permission-setups.md).

## Setup

### To start the Setup

You can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Locations**, and then choose the related link.

[!include[eula](../../includes/eula-page.md)]

The **Location Card** contains the fast tab *Warehouse* and the group *Assembly* within the fast tab. A new field **Always pick full units for Assembly components" is available. If enabled, any pick for an Assembly Component will be a full quantity of Unit of Measure that is used on the Warehouse Item Journal. If the quantity required on an Assembly Order is resulting in a partial Quantity on the Pick, the quantity used to pick is rounded down.

> [!NOTE]
> When processing a Warehouse Pick for an Assembly Order, it is important to keep the option **Breakbulk Filter** on the *Create Pick* process off.

## See Also

- [Permission Setups](../permission-setups.md)

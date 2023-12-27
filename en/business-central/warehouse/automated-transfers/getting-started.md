# Getting Started

[!include[signup-tenant](../includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](../permission-setups.md).

## Setup

### To start the Setup

You can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Locations**, and then choose the related link. The configuration of the functionality has to be done for every location where warehouse adjustment details should be maintained.

[!include[eula](../../includes/eula-page.md)]

The **Location** card contains the fast tab *Warehouse Automation*. New fields have been added to this fast tab.

|                                                   |                                                                                          |
|---------------------------------------------------|------------------------------------------------------------------------------------------|
| **Create Warehouse Shipment for Transfer**        | If enabled, a transfer order will automatically have a Warehouse Shipment created when the transfer order is released. |
| **Auto-Post Warehouse Shipment for Transfer**     | If enabled, the transfer order's Warehouse Shipment will automatically be posted for a transfer order when the order is released. |
| **Create Warehouse Pick for Transfer**            | If enabled, a warehouse pick is automatically created for a Warehouse Shipment for a transfer order when the order is released. |
| **Auto-Register Warehouse Pick for Transfer**     | If enabled, the warehouse pick is automatically registered after it's created for a transfer order when the transfer order is released. |
| **Zone Filter for Auto. Transfer Picks**          | If a **Zone Filter** is defined, warehouse picks are only using inventory from the zones included in the filter when a Warehouse Pick is created for an automatically processed transfer order. |
| **Allow Partial Auto. Transfers**                 | If enabled, transfer orders are automatically processed during a release, even if the entire quantity is not available. |
| **Create Warehouse Receipt for Transfer**         | If enabled, a Warehouse Receipt will automatically be created for a transfer order when the transfer order is released and after the shipment of the transfer order is completely processed. |
| **Auto-Post Warehouse Receipt for Transfer**      | If enabled, the Warehouse Receipt is automatically posted once it is created during the automatic transfer order processing. |
| **Create Warehouse Put-Away for Transfer**        | If enabled, the Warehouse Put-Away is autoamtically created after the Warehouse Receipt is posted during the automatic transfer order processing. |
| **Auto-Register Warehouse Put-Away for Transfer** | If enabled, the Warehouse Put-Away is automatically registered after it is created during the automatic transfer order processing. |
| **Use same Bin for Put-Away from Pick**           | If enabled, the Bin used in the Put-Away is set to the same Bin the inventory is taken from during the Pick in an automatic transfer order processing. |
| **Create Bins for Put-Away**                      | If enabled, the Bin is created in the Location and Zone for the Put-Away, if it does not exist yet. |

## See Also

- [Permission Setups](../permission-setups.md)
- [Setting up Sales](https://learn.microsoft.com/en-US/dynamics365/business-central/sales-setup-sales)

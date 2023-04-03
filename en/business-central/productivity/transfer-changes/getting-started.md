# Getting Started

[!include[signup-tenant](../includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](../permission-setups.md).

## Setup

### To start the Setup

You can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Inventory Setup**, and then choose the related link.

[!include[eula](../../includes/eula-page.md)]

The **Inventory Setup** contains the fast tab *General*. You can define the following fields.

|                                  |                                                                         |
|----------------------------------|-------------------------------------------------------------------------|
| **Default Assigned User ID**     | If enabled, the **Assigned to User ID** field on transfer orders is shown by default and not found under *show more*. When a transfer order is created or modified, the **Assigned to User ID** field is set automatically to the current user, if the field is empty. |
| **Show Created/Modified Fields** | Enables displaying the information when a document was created and last modified and by whom for all unposted transfer orders |

> [!NOTE]
> The field **Assigned to User ID** requires the User being setup in the **User Setup** or it cannot be selected. Due to this requirement, we automatically define the user in the **User Setup**, if the user doesn't exist there yet. Any additional required setups must be made manually.

## See Also

- [Permission Setups](../permission-setups.md)
- [Setting up Sales](https://learn.microsoft.com/en-US/dynamics365/business-central/sales-setup-sales)

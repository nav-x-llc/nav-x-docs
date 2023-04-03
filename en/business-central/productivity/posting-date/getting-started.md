# Getting Started

[!include[signup-tenant](../includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](../permission-setups.md).

## Setup

### To start the Setup

#### On Sales Documents

You can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Sales & Receivables Setup**, and then choose the related link.

[!include[eula](../../includes/eula-page.md)]

The **Sales & Receivables Setup** contains the fast tab *General*. The field **Force Posting Date** can be found below the *Default Posting Date* field on the setup. It can have one of the following options:

|                      |                                                                                          |
|----------------------|------------------------------------------------------------------------------------------|
| **None**             | The posting date will not be updated during posting of the Sales Document.               |
| **Work Date**        | The posting date will be updated to the current work date when posting a Sales Document. |
| **System Date**      | The posting date will be updated to today's date when posting a Sales Document.          |

> [!NOTE]
> When posting sales documents in a batch, the **Posting Date** that is defined in the batch posting functionality will take precedence over this setup.

#### On Purchase Documents

You can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Purchases & Payables Setup**, and then choose the related link.

[!include[eula](../../includes/eula-page.md)]

The **Purchases & Payables Setup** contains the fast tab *General*. The field **Force Posting Date** can be found below the *Default Posting Date* field on the setup. It can have one of the following options:

|                      |                                                                                             |
|----------------------|---------------------------------------------------------------------------------------------|
| **None**             | The posting date will not be updated during posting of the Purchase Document.               |
| **Work Date**        | The posting date will be updated to the current work date when posting a Purchase Document. |
| **System Date**      | The posting date will be updated to today's date when posting a Purchase Document.          |

> [!NOTE]
> When posting purchase documents in a batch, the **Posting Date** that is defined in the batch posting functionality will take precedence over this setup.

#### On Transfer Orders

You can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Inventory Setup**, and then choose the related link.

[!include[eula](../../includes/eula-page.md)]

The **Inventory Setup** contains the fast tab *General*. The field **Force Posting Date** can be found at the end of the fast tab. It can have one of the following options:

|                      |                                                                                                                                        |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| **None**             | The posting date will not be updated during posting of the Transfer Order. It will be updated separately when posting the shipment as well as the receipt. |
| **Work Date**        | The posting date will be updated to the current work date when posting a Transfer Order. It will be updated separately when posting the shipment as well as the receipt. |
| **System Date**      | The posting date will be updated to today's date when posting a Transfer Order. It will be updated separately when posting the shipment as well as the receipt. |

> [!NOTE]
> When posting transfer orders in a batch, the **Posting Date** that is defined in the batch posting functionality will take precedence over this setup.

## See Also

- [Permission Setups](../permission-setups.md)
- [Setting up Sales](https://learn.microsoft.com/en-US/dynamics365/business-central/sales-setup-sales)

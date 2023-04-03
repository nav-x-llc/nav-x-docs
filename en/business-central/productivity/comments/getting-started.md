# Getting Started

[!include[signup-tenant](../includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](../permission-setups.md).

## Setup

### To start the Setup

You can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Sales & Receivables Setup**, and then choose the related link.

[!include[eula](../../includes/eula-page.md)]

The **Sales & Receivables Setup** contains the fast tab *Copy Comments*. You can define the following fields.

|                           |                                                                         |
|---------------------------|-------------------------------------------------------------------------|
| **to Sales Quote**        | Enables copying of comments from the Customer to the Sales Quote.       |
| **to Sales Order**        | Enables copying of comments from the Customer to the Sales Order        |
| **to Sales Invoice**      | Enables copying of comments from the Customer to the Sales Invoice      |
| **to Sales Credit Memo**  | Enables copying of comments from the Customer to the Sales Credit Memo  |
| **to Sales Return Order** | Enables copying of comments from the Customer to the Sales Return Order |

The options for each of those fields are

- *None*: No comments will be copied to the sales document.
- *With Code filled out*: All comments that have a code filled out on the **Comment Sheet** will be copied to the sales document.
- *Based on Flags*: All comments that have the appropriate *Print on...* flags set will be copied to the sales document.
- *All*: All comments will be copied to the sales document.

> [!NOTE]
> The comments from the **Sell-to Customer** will be copied to the appropriate Sales Document. If the Sell-to Customer is changed on the sales document, the comments copied from the previous Sell-to Customer are deleted, if they were not manually updated.

## See Also

- [Permission Setups](../permission-setups.md)
- [Setting up Sales](https://learn.microsoft.com/en-US/dynamics365/business-central/sales-setup-sales)

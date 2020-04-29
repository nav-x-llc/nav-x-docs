# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the credit management setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](permission-setups.md).

## Assisted Setup

### To start the Setup

When you are on the role center and have not completed the setup for the NAV-X Credit Management app, you will see a notification asking "Do you want to get started with NAV-X Credit Management?". Select **Click here to run the setup** to start the Assisted Setup wizard. Alternatively, you can also choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Assisted Setup**, and then choose the related link.

[!include[eula](../includes/eula.md)]

The wizard opens the first step, which displays a welcome text. You can move forward by clicking on “Next”. The next step allows you to configure the general behavior of the system. You can define that orders should be placed on hold for the customer exceeding the **Credit Limit**, having an **Overdue Balance** or for **All** (both, credit limit or overdue balance).

By default, Business Central assumes that a **Credit Limit** of zero means that the customer has infinite credit. You can choose, if the default behavior should be kept by selecting **Infinite Limit** for the field **Credit Limit Of Zero Means**. If you want to use a credit limit of zero indicating that the customer has **No Limit**, please select the proper value.

When orders are released from credit hold, you can require the entry of comments by the person that is approving the order. You can activate the field **Show Comm. on Cr.Mgt. Release**. If you want to automatically post orders or invoices at the time of approving an order, you can select **Auto Post Sales Order** or **Auto Post Sales Invoice**.

### Adjusting the restrictions

The next steps of the Assisted Setup allows you to define, if orders should only be placed on **Hold If Over Credit Limit by %**; you can define a percentage of the credit limit that has to be reached before orders start being placed on hold. Additionally, you can define, if orders only should be placed on **Hold If Past Due Longer Than** a time period. You can define a date formula that determines the time frame that an invoice has to be overdue, before orders are being placed on hold.

## Additional Setups

The following step of the Assisted Setup displays different actions on the bottom of the page to setup additional setups. You can define **Approvers** that are allowed to approve orders placed on hold. You can define **Payment Methods** that should be excluded from credit checks, for instance, *Credit Card* or *COD* would be payment methods that should be excluded from credit checks, since customers pay before receiving the product. You can also define **Credit Managers** - users who can adjust credit limits or bypass credit checks for specific customers. You must define at least one **Approver**, before you can advance to the next step.

> [!NOTE]
> You can also change those setups also at a later point. They are available through the individual pages as shown in the [Additional Setups](additional-setups.md) section of the help.
>
> Approvers must also be setup as **Workflow Users**, which you can do by clicking on the *lookup* of the **User Name** field in the **Approver User Setup** page and then select **New**.

With these last setups, you are done. As long as you configured everything: you are ready to manage your customers' credits more efficiently. Please follow our How-to’s on the left to learn how to perform the different tasks.

## See Also

- [Additional Setups](additional-setups.md)
- [Permission Setups](permission-setups.md)
- [Set Up Workflow Users](https://docs.microsoft.com/en-US/dynamics365/business-central/across-how-to-set-up-workflow-users)
- [Set Up Approval Users](https://docs.microsoft.com/en-US/dynamics365/business-central/across-how-to-set-up-approval-users)

# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the National Accounts setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](permission-setups.md).

## Assisted Setup

### To start the Setup

When you are on the role center and have not completed the setup for the NAV-X National Accounts app, you will see a notification asking "Do you want to get started with NAV-X National Accounts?". Select **Click here to run the setup** to start the Assisted Setup wizard. Alternatively, you can also choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Assisted Setup**, and then choose the related link.

[!include[eula](../includes/eula.md)]

## To set up customer posting groups

The next step allows you to configure a new General Ledger account on the customer posting groups. This General Ledger Account is required due to the complex posting of applications between different customers and is called the **Cash Receipt (Interim)** Account. As it is an interim account, this is used during the posting only and the balance should always be zero.

## To set rules

The next step of the Assisted Setup allows you to define whether you want to allow **Cross Payment Posting** or not. Cross payment posting defines the ability to allow the application of payments or credit memos on one child customer to another (a child customer is a customer assigned to the National Account customer) as long as they are assigned to the same National Account.

## See Also

- [Permission Setups](permission-setups.md)
- [Merchant Setup](merchant-setup.md)
- [Setup Bank Accounts](https://docs.microsoft.com/en-US/dynamics365/business-central/bank-how-setup-bank-accounts)

# Permission Setups

You can manage users and permissions within Business Central. You need to assign permission sets to users based on their role as described below. You can learn more about [assigning permission sets to users or user groups](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-how-users-permissions#to-assign-permission-sets-to-users-or-user-groups) in the Microsoft Business Central documentation.

## Permissions for All Users

All users require the **NAVX LIBRARY** permission set (NAV-X Library) assigned.

## Permissions for FTP Connector Users

Any user who will set up or manage FTP/SFTP accounts requires the **FTPSTANDARD** permission set assigned. This permission set provides:

- Access to FTP/SFTP account configuration
- Ability to run the account setup wizard
- Ability to view and edit account details
- Ability to test connections

Users who only use FTP/SFTP storage as a back-end (for example, through Business Central's document attachment or report output features) do not need any additional permissions beyond their standard Business Central role — the connector operates transparently in the background.

## See Also

- [Managing Users and Permissions](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-how-users-permissions)
- [Getting Started](getting-started.md)

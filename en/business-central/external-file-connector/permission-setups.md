# Permission Setups

You can manage users and permissions within Business Central. You need to assign permission sets to users based on their role as described below. You can learn more about [assigning permission sets to users or user groups](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-how-users-permissions#to-assign-permission-sets-to-users-or-user-groups) in the Microsoft Business Central documentation.

## Permissions for All Users

All users require the **NAVX LIBRARY** permission set (NAV-X Library) assigned.

## Permissions for External File Storage Users

Any user who will attach files to documents, open attachments, or use the *Pick from External Storage* action requires the **NAVX EFS STANDARD** permission set assigned.

Users with standard Business Central roles (D365 Basic, D365 Bus Full Access, D365 Bus Premium, D365 Full Access) have the necessary permissions automatically included — no additional assignment is needed for those users.

## Permissions for External File Storage Administrators

Setting up External File Storage — configuring the folder path template, assigning file accounts to scenarios, and managing accounts — requires the **NAVX EFS STANDARD** permission set in addition to the permissions provided by your storage connector app.

> [!NOTE]
> The **NAVX EFS STANDARD** permission set covers access to External File Storage itself. To create and manage file accounts for a specific connector (FTP, Datto Workplace, etc.), users also need the permission set for that connector app. See the connector's permission setup documentation for details.

## See Also

- [Managing Users and Permissions](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-how-users-permissions)
- [Getting Started](getting-started.md)

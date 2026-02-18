# Permission Setups

You can manage users and permissions within Business Central. You need to assign permission sets to users based on their role as described below. You can learn more about [assigning permission sets to users or user groups](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-how-users-permissions#to-assign-permission-sets-to-users-or-user-groups) in the Microsoft Business Central documentation.

## Permissions for all users

All users require the role with the ID *NAVX LIBRARY* and description *NAV-X Library* assigned.

## Permissions for Custom Fields users

Any user who is going to access areas where custom fields are enabled requires additional permissions configured. The permission set *NAVX CFLD STANDARD* and description *NAV-X Custom Fields Standard Permissions* will have to be assigned to those users.

To make permission assignment easier, the permission set for users is automatically added to the following standard permission sets:

- D365 BUS FULL ACCESS
- D365 READ
- D365 TEAM MEMBER

## Permissions for Custom Fields administrators

Any user involved in setting up the Custom Fields functionality requires an additional permission set configured. The permission set *NAVX CFLD SETUP* and description *NAV-X Custom Fields Setup* has to be assigned to those users. This assignment should be done before the Custom Fields setup is started.

## See Also

- [Managing Users and Permissions](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-how-users-permissions)

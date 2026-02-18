# Permission Setups

You can manage users and permissions within Business Central. You need to assign permission sets to users based on their role as described below. You can learn more about [assigning permission sets to users or user groups](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-how-users-permissions#to-assign-permission-sets-to-users-or-user-groups) in the Microsoft Business Central documentation.

## Permissions for all users

All users require the role with the ID *NAVX LIBRARY* and description *NAV-X Library* assigned.

## Permissions for Catch Weights users

Any user who is going to use catch weights in their daily work (entering quantities in documents, completing warehouse activities, etc.) requires the permission set *NAVX CWM STANDARD* with the description *NAV-X Catch Weight Standard Permissions*. This permission set allows users to view and use catch weight functionality but not modify settings.

## Permissions for Catch Weights administrators

Any user involved in setting up the Catch Weights functionality requires an additional permission set configured. The permission set *NAVX CWM SETUP* with the description *NAV-X Catch Weight Setup Permissions* must be assigned to these users. This assignment should be done before the Catch Weights setup is started. This permission set includes all permissions from the standard user set plus administrative capabilities.

## See Also

- [Managing Users and Permissions](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-how-users-permissions)

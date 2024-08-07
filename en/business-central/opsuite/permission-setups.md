# Permission Setups

You can manage users and permissions within Business Central. You need to assign permission sets to users based on their role as described below. You can learn more about [assigning permission sets to users or user groups](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-how-users-permissions#to-assign-permission-sets-to-users-or-user-groups) in the Microsoft Business Central documentation.

## Permissions for all users

All users require the role *NAV-X LIBRARY* assigned. it will automatically done at the time of installation of the app, so all users that exist at this time will have this this role already assigned. However, any new users will require this role to be setup when the user is created.

## Permissions for OpSuite™ users

The user account processing the synchronization on the Job Queue as well as any user processing any of the data manually (for instance, if the Financial Summary data should not be automatically posted) must have one of the following permission sets assigned: *NAVX OPS STANDARD NO*, *NAVX OPS PREMIUM NO*, or *NAVX OPS PLATINUM NO*. Which one of the permission sets you choose depends on the plan you purchased for those users. 

## Permissions for OpSuite™ Administrators

Any user involved in setting up the OpSuite™ functionality must have the permission set *NAVX OPSUITE SE* assigned in addition to one of the permission sets defined above for the normal OpSuite™ user.

## See Also

- [Managing Users and Permissions](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-how-users-permissions)

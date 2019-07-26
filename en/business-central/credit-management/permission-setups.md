# Permission Setups

You can manage users and permissions within Business Central. You need to assign permission sets to users based on their role as described below. You can learn more about [assigning permission sets to users or user groups](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-how-users-permissions#to-assign-permission-sets-to-users-or-user-groups) in the Microsoft Business Central documentation.

## Permissions for all users

All users require the role *NAV-X LIBRARY* assigned. it will automatically done at the time of installation of the app, so all users that exist at this time will have this this role already assigned. However, any new users will require this role to be setup when the user is created.

## Permissions for Credit Management users

Any user who is involved in using the credit management functionality as well as entering or posting sales documents requires additional permissions configured. The permission set *CFCM-ALL* will have to be assigned to those users. This assignment should be done before the credit management setup is started.

## Permissions for Credit Management setup users

Any user involved in configuring the credit management functionality requires the commission *CFCM-SETUP* assigned. This permission set has to be given to users setting up the functionality in addition to *CFCM-ALL*.

## See Also

- [Managing Users and Permissions](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-how-users-permissions)

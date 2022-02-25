# Permission Setups

You can manage users and permissions within Business Central. You need to assign permission sets to users based on their role as described below. You can learn more about [assigning permission sets to users or user groups](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-how-users-permissions#to-assign-permission-sets-to-users-or-user-groups) in the Microsoft Business Central documentation.

## Permissions for all users

All users require the role with the ID *NAVX LIBRARY* and description *NAV-X Library* assigned.

## Permissions for Credit Card users

Any user who is involved in setting up the credit card functionality as well as entering or posting sales documents and processing credit cards requires additional permissions configured. The permission set *NAVX CREDIT CARD U* and description *NAV-X Credit Card User* will have to be assigned to those users. This assignment should be done before the credit card setup is started.

## Permissions for Credit Card administrators

Any user involved in setting up the credit card functionality requires an additional permission set configured. The permission set *NAVX CREDIT CARD S* and description *NAV-X Credit Card Super* has to be assigned to those users. This assignment should be done before the credit card setup is started.

## See Also

- [Managing Users and Permissions](https://docs.microsoft.com/en-us/dynamics365/business-central/ui-how-users-permissions)

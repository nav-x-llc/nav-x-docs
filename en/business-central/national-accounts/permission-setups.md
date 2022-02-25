# Permission Setups

You can manage users and permissions within Business Central. You need to assign permission sets to users based on their role as described below. You can learn more about [assigning permission sets to users or user groups](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-how-users-permissions#to-assign-permission-sets-to-users-or-user-groups) in the Microsoft Business Central documentation.

## Permissions for all users

All users require the role with the ID *NAVX LIBRARY* and description *NAV-X Library* assigned.

## Permissions for National Accounts users

Any user who is involved in creating customers, posting cash receipts, applying customer ledger entries, or other processing requires additional permissions configured. The permission set *NAVX NAT ACCOUNTS U* and description *NAV-X National Accounts User* will have to be assigned to those users.

## Permissions for National Accounts administrators

Any user involved in setting up the national accounts functionality and setting up National Accounts customers requires an additional permission set configured. The permission set *NAVX NAT ACCOUNTS S* and description *NAV-X National Accounts Super* has to be assigned to those users. This assignment should be done before the National Accounts setup is started.

## See Also

- [Managing Users and Permissions](https://docs.microsoft.com/en-US/dynamics365/business-central/ui-how-users-permissions)

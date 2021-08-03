# Release Notes for August 2021 Update - Version 2.1.28

## New Features

### Changes to User Interface

We have moved actions on certain pages to make the interface more consistent. We have also promoted several actions to provide access to important functions quicker.

### Line level Commission Splits

It is now possible to define different commission splits for different lines. This can be used to define salespeople eligible for commissions on different lines, even if the same items are sold.

### Commission Split Mapping for lines

It is now possible to define commission split mappings for sales lines to automatically define salespeople based on information from the lines. It was previously only possible to define mappings for header fields. Read more about [Commission Split Mappings](../page-commission-split-mapping.md).

### Commission Split Mapping based on Dimensions

It is now possible to define commission split mappings for sales documents based on any dimensions defined on the sales document. Read more about [Commission Split Mappings](../page-commission-split-mapping.md).

### Commission Splits from Customers or Ship-to Addresses

You can now turn off the automatic definition of salespeople based on the commission split defined on the customer or ship-to address. If this is done, the commission split will be defined based on the **Salesperson Code** field on the Sales Header or the mappings defined. Read more about [Setting up Commissions](../commission-setup.md).

### Multiple Commissions based on Commission Types

When multiple commission types are defined on the commission rates, commission lines will be created for each commission type separately for each document. Read more about [Commission Types](../page-commission-types.md).

### Different periods for tiered commissions

You can define different periods for different commission types. This, for instance, will allow the calculation of quarterly bonuses as well as annual bonuses. Read more about [Commission Types](../page-commission-types.md).

### One time commissions per period

You can now define different commissions to be paid only once per period. This allows paying a specific bonus only once per period instead of adding the commission to every single transaction in the period. Read more about [Commission Types](../page-commission-types.md).

### Calculate Commissions for time billing

We have added an additional way of calculating commissions. You can now calculate commissions for hours billed and define commission tiers based on the percentage of billable hours per time period. The billable hours per time period can be defined based on daily billable hours and working day calendars. Read more about [How to calculate commissions based on billable time](../how-to-billable-time.md).

### Sales teams

We have updated the implementation of sales teams. We are now using the standard sales teams that can be defined in Business Central. It is also possible now to define multiple sales teams one salesperson is responsible for and gets commissions calculated for. Additionally, it is also possible to define now different commission types for the different sales managers to pay multiple commissions. Read more about [Manager Commissions](../how-to-manager-commission.md).

### Turning off Initial Commissions for a specific customer or salesperson

You can now define on a customer level and salesperson level, if salespeople are eligible for initial commission payments on a specific customer or salesperson. Read more about [Setting up Commissions](../commission-setup.md#initial-rates).

### Initial Commissions as additional Commissions

We added a new setup that allows to define that the initial commissions defined do not replace the normal commissions, but are added to the commission payments for customers. Read more about [Initial Commissions](../commission-setup.md#initial-rates)

## Resolved Issues

### Customer Commission Split with blank salesperson

When a commission split was defined on a customer and the commission split was empty, the empty record was added to the commission split on the sales document. This has been corrected.

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-commission-management)

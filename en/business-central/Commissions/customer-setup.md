# Customer Setup

## Customer Card

You can customize the commission management functionality for each customer. You can access the Customer Card by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Customers**, and then choose the related link. From the *Customer List*, select the individual customer you want to setup.

### General

|                      |                                                                                                                                     |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| **Commission Group** | Commission rates can be defined for an individual customer, a ship-to address, or a group of customers. One way to group customers is to assign a **Commission Group** to multiple customers. Read more about [Commission Groups](page-commission-group.md) |

### Commissions

|                                         |                                                                                                                  |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------|
| **Do not synchronize Commission Split** | By default, the records defined in the **Commission Split** page define the salespeople that are responsible for this customer. If you do not want to use the *Commission Split* functionality, but want to have the responsible salesperson only defined by the field **Salesperson Code** or by a defined [Commission Mapping](page-commission-split-mapping.md), you can deactivate this functionality. The general setup is defined in the [Commission Setup](commission-setup.md), but it can be overridden on each customer. If you have the field set to " " (blank, default), the behavior is dictated by the **Commission Setup**. If you choose **Yes**, you will turn off the *Commission Split* functionality for this customer and if you select **No**, you will turn it on. |
| **Do not calculate initial Commission** | Initial commissions can be defined to provide an incentive to salespeople to onboard new customers. If a specific customer should not be eligible to calculate initial commissions, you can activate this field. This setup can also be defined on the *Salesperson Card* to turn off initial commission calculation for a specific salesperson. Read more about [Commissions Rates](commission-rate-setup.md). |
| **Add Initial Commission**              | Initial commissions typically replace the normal commissions that would be calculated. However, if you want to define the initial commissions in addition to the normal commissions, you can configure this for an individual customer. The general setup is defined in the [Commission Setup](commission-setup.md), but it can be overridden on each customer. If you have the field set to " " (blank, default), the behavior is dictated by the **Commission Setup**. If you choose **Yes**, you will calculate initial commissions in addition to the normal commissions. If you select **No**, initial commissions will replace the normal commissions. |

### Actions

#### Commission Split action

*Commission Splits* define the salespeople that are responsible for the customer and also define the percentage, if salespeople split the commissions for a sale. The standard field **Salesperson Code** is only indirectly used in the Commission Management functionality. If you define the **Salesperson Code**, it will update the *Commission Splits*, but the salesperson code does not define the actual salesperson responsible for the sale.

If you want to use the **Salesperson Code** as the field to define the salesperson responsible for the customer, you have to set **Do not synchronize Commission Split** to **Yes** on the customer or activate the same field on the *Commission Setup*.

It is also possible to define a salesperson as a template that has multiple salespeople assigned. In this case, when selecting this *Salesperson Template*, you will automatically add multiple responsible salespeople to the commission split. Learn more about [setting up default commission splits](how-to-setup-default-commission-splits.md).

You can find action **Commission Split** in the **Customer** action group. It will open the [Commission Split page](page-commission-salesperson-split.md) and allows you to enter or update salespeople responsible for this customer.

#### Commissions action

*Commission Rates* can be defined from various places throughout the application. You can define rates from the Salesperson, Item, Resource, G/L Account, and other places. You can also define or see all rates for this specific customer from the customer card by choosing the **Commissions** action, which is available from the **Customer** action group.

This page will not show all rates that are effective for this customer, but just the rates defined for this specific customer. If, for instance, you have a rate defined for the customer group that is assigned to this customer, you will not see this rate in the page.

Learn more about [Commission Rate Setup](commission-rate-setup.md).

## Ship-to Address Card

You can also define **Commission Splits** and **Commission Rates** for specific *Ship-to Addresses*. If you define different setups for each *Ship-to Address*, this will override the defaults defined on the customer, if the Ship-to Address is selected on the sales transaction.

## See Also

- [Commission Groups](page-commission-group.md)
- [Commission Mapping](page-commission-split-mapping.md)
- [Commission Setup](commission-setup.md)
- [Commission Rate Setup](commission-rate-setup.md)
- [Commission Split page](page-commission-salesperson-split.md)
- [Setting up default commission splits](how-to-setup-default-commission-splits.md)

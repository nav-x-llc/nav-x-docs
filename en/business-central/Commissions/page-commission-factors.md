# Page Commission Factors

[!include[signup-tenant](includes/signup-tenant.md)]

**Commission Factors** allow fine-grained adjustments to how commissions are calculated on individual sales document lines. Introduced in version 2.6.269, a commission factor can mark a line as non-commissionable, adjust the cost used in gross-profit-based commission calculations, or directly adjust the commission rate percentage. You can access this page by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Commission Factors**, and then choosing the related link.

Commission factors can be assigned directly on sales document lines. They can also be assigned to **Payment Methods**, so that the payment method selected on a sales document automatically influences the commission calculation for all lines on that document.

|                                |                                                                                                                                                                                                                                                         |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Code**                       | A unique identifier for the commission factor.                                                                                                                                                                                                          |
| **Description**                | A descriptive label to help users identify the purpose of this factor.                                                                                                                                                                                  |
| **Non-Commissionable**         | When checked, any sales line assigned this factor will not generate a commission, regardless of any other commission settings. Enabling this field disables the **Cost Adjustment** and **Commission Rate Adjustment** fields, as they are not applicable. |
| **Commission Rate Adjustment** | The value to add to or subtract from the commission rate. How this value is applied depends on the **Commission Rate Type** setting.                                                                                                                     |
| **Commission Rate Type**       | Defines how the **Commission Rate Adjustment** is applied:<br><br>- **Percentage Points**: The adjustment is added to or subtracted from the commission rate percentage. For example, a rate of 5% with an adjustment of -1 results in a rate of 4%.<br>- **Fixed Amount**: The adjustment is a fixed monetary amount that is added to or subtracted from the commission amount. |
| **Cost Adjustment**            | The value to add to or subtract from the cost of the sales line. Changing the cost changes the gross profit, which in turn affects commission calculations that are based on gross profit.                                                               |
| **Cost Adjustment Type**       | Defines how the **Cost Adjustment** is applied:<br><br>- **Percentage**: The cost is increased or decreased by a percentage of the line amount.<br>- **Fixed Amount**: A fixed monetary amount is added to or subtracted from the cost.                 |

## See Also

- [Working with Commission Factors](how-to-use-commission-factors.md)
- [Commission Setup](commission-setup.md)

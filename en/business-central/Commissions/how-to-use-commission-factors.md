# Set Up and Use Commission Factors

[!include[signup-tenant](includes/signup-tenant.md)]

Commission Factors (introduced in version 2.6.269) allow you to define adjustments that modify how commissions are calculated on individual sales document lines. Common uses include:

- Marking specific lines as non-commissionable
- Adding overhead costs that reduce the gross profit base for commission calculation
- Adjusting the commission rate up or down for specific situations
- Adjusting commissions based on payment method (e.g., reducing commission when a credit card is used due to processing fees)

## Step 1: Define Commission Factors

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Commission Factors**, and choose the related link.
2. Choose **New** to create a new factor.
3. Fill in the fields:

|                                  |                                                                                                                                                                                                                         |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Code**                         | A short code to identify the factor (for example, OVERHEAD, CREDITCARD, or NONCOMM).                                                                                                                                   |
| **Description**                  | Descriptive text shown to users when selecting the factor.                                                                                                                                                              |
| **Non-Commissionable**           | Check this if the factor should mark the line as completely non-commissionable. All other adjustment fields will be disabled when this is checked.                                                                       |
| **Commission Rate Adjustment**   | The amount to add or subtract from the calculated commission rate. Used together with **Commission Rate Type**.                                                                                                          |
| **Commission Rate Type**         | How the Commission Rate Adjustment is applied. **Percentage Points** adds or subtracts from the commission rate percentage (for example, a rate of 5% with an adjustment of -1 becomes 4%). **Fixed Amount** adds or subtracts a fixed amount from the commission amount. |
| **Cost Adjustment**              | The amount to add or subtract from the cost of the line, which changes the gross profit. Used together with **Cost Adjustment Type**.                                                                                   |
| **Cost Adjustment Type**         | How the cost adjustment is applied. **Percentage** increases or decreases cost by a percentage of the line amount (for example, entering 5 adds 5% of the line amount to the cost, reducing gross profit). **Fixed Amount** adds or subtracts a fixed monetary amount. |

## Step 2: Apply Commission Factors on Sales Documents

On any sales document line, a **Commission Factor** field is available. Assign the factor code to a line to apply the adjustment when commissions are calculated for that line.

> [!TIP]
> Commission Factors are most useful for recurring adjustments that apply to specific types of sales, such as always adding a freight overhead percentage or marking certain special-order items as non-commissionable.

## Step 3: Apply Commission Factors on Payment Methods (Optional)

You can link a Commission Factor to a Payment Method so that any sale using that payment method automatically adjusts commissions:

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Payment Methods**, and choose the related link.
2. Open a payment method (for example, CREDIT CARD).
3. In the **Commission Factor** field, select the factor to apply.
4. When a sales document uses this payment method, the commission factor is applied to all commission calculations for that document.

> [!NOTE]
> The Commission Factor on the Payment Method applies in addition to any Commission Factor set directly on the sales line.

## See Also

- [Commission Factors](page-commission-factors.md)
- [Commission Setup](commission-setup.md)
- [Commission Rate Setup](commission-rate-setup.md)
- [Non Commissionable Mapping](page-non-commissionable-mapping.md)

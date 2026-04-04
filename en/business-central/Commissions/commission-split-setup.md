# Commission Split Setup

[!include[signup-tenant](includes/signup-tenant.md)]

Commission Splits define which salespeople receive commission on a sale and in what proportion. NAV-X Commission Management supports an unlimited number of salespeople splitting commission on a single sale.

## How Commission Splits Are Determined

When a sales document is created, the system determines the commission split in the following priority order:

1. **Commission Split defined directly on the sales document** (manually added or copied from the customer)
2. **Commission Split Mappings** (rule-based automatic assignment)
3. **Salesperson Code on the sales document header** (fallback — 100% to the header salesperson)

## Setting Up Default Commission Splits on Customers

You can define the default salespeople who should receive commission when selling to a specific customer:

1. Open the **Customer Card** for the customer.
2. Navigate to the **Commissions** FastTab, or choose the **Commission Split** action.
3. Add one or more salespeople with their split percentages.
4. Save the customer card.

When a sales document is created for this customer, the commission split is automatically copied from the customer card.

> [!NOTE]
> If **Do not synchronize Commission Split** is enabled in [Commission Setup](commission-setup.md), the split is not copied from the customer card. Instead, it will be derived from [Commission Split Mappings](page-commission-split-mapping.md) or the salesperson code on the document.

## Viewing and Modifying Commission Splits on Sales Documents

On any sales document (order, invoice, quote, return order), you can view and modify the commission split:

1. Open the sales document.
2. Choose the **Commission Split** action (typically in the **Related** menu).
3. Review the automatically assigned salespeople.
4. Add, remove, or change salesperson codes and split percentages as needed.

Commission splits can be defined at the **header level** (applies to all lines) or at the **line level** (applies to individual document lines). Line-level splits override header-level splits for that specific line.

> [!TIP]
> If **Limit Maximum Commission Split to 100%** is enabled in Commission Setup, the system will warn you if the total split percentage exceeds 100%.

## Commission Split Mappings

For businesses with complex split rules (for example, different salespeople receive commission based on the item category sold or the ship-to region), use **Commission Split Mappings**:

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Commission Split Mappings**, and choose the related link.
2. Create records that define when a specific salesperson should be added to or replace the existing commission split.
3. Each mapping can filter by customer, item, dimension, ship-to address, and other criteria.

## Auto-Assigning Salespeople to Customers

When initially setting up the system, you can automatically create commission splits from the existing **Salesperson Code** on all customers. From **Commission Setup**, choose **Process > Auto-Assign Salespeople**. This creates a 100% commission split for the assigned salesperson on each customer.

## See Also

- [Commission Split Mappings](page-commission-split-mapping.md)
- [Salesperson Split](page-commission-salesperson-split.md)
- [Customer Setup](customer-setup.md)
- [Commission Setup](commission-setup.md)
- [How to Set Up Default Commission Splits](how-to-setup-default-commission-splits.md)

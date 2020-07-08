# Page Gateway Sales Document

You can synchronize sales orders from Business Central to our gateway and back. This enables you to import sales orders from various eCommerce Platforms or other systems, as long as the other system synchronizes the orders into our gateway. We automatically import any sales orders from the gateway and export any orders to the gateway. During the import, there might be issues that cannot be resolved immediately due to data issues.

The **Gateway Sales Document** is an intermediate storage for these imported sales orders to allow you to review and update the imported orders and then process them, in case there were errors.

To access the **Gateway Sales Documents**, please choose ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Gateway Sales Document**, and then choose the related link.

## Document Header

|                           |                                                                                                                                      |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| **No.**                   | The sales order number defined in the system that the order originated in. If the order originated outside of Business Central, this order number will be used as the document number for the sales order. If the number series for sales orders does not allow manual numbers, the next number will be used automatically and not the order number defined in here. |
| **Bill-to Customer No.**  | The billing customer number                                                                                                          |
| **Sell-to Customer No.**  | The sell-to customer number                                                                                                          |
| **External Document No.** | The customer's purchase order number, if one is defined.                                                                             |
| **Order Date**            | The date the order was created.                                                                                                      |
| **Due Date**              | The date the order is due.                                                                                                           |
| **Amount**                | The total order amount. This will be used to validate that the amount of the created sales order matches the total amount calculated in the originating system. |
| **Tax Amount**            | The total tax amount. This will be used to validate that the taxes of the created sales order match the total taxes calculated in the originating system. |
| **Amount Due**            | The total amount due.                                                                                                                |
| **Currency Code**         | The currency of the order.                                                                                                           |
| **Last Updated**          | The date and time the order was last updated in the gateway.                                                                         |
| **Error**                 | If this field is checked, the document was not able to be processed and an error exists.                                             |
| **Processed**             | If this field is checked, the document was successfully processed.                                                                   |

## Document Lines

|                           |                                                                                                                                      |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| **Line No.**              | The line number of this order line in the originating system.                                                                        |
| **No.**                   | The item number for the current line.                                                                                                |
| **Description**           | The description from the originating order.                                                                                          |
| **Description 2**         | The second part of the description from the originating order.                                                                       |
| **Quantity**              | The quantity based on the **Unit of Measure Code** for the item ordered.                                                             |
| **Unit of Measure Code**  | The unit of measure for the item ordered.                                                                                            |
| **Unit Price**            | The unit price based on the **Unit of Measure Code**.                                                                                |
| **Line Amount**           | The total line amount. This will be used to validate that the order in Business Central matches the amounts from the originating system |
| **Line Discount Amount**  | The discount amount on the line. This will be used to validate that the order in Business Central matches the amounts from originating system |
| **Tax Amount**            | The tax amount for the line. This will be used to validate that the order in Business Central matches the amounts from the originating system |
| **Tax Liable**            | Defines whether the item is taxable.                                                                                                 |
| **Tax Rate**              | The tax rate for the item.                                                                                                           |

## Actions

### Process

In case the document has **Errors**, you can select this action to re-process the order and see the detailed error messages. You then can fix the errors and reprocess the order again.

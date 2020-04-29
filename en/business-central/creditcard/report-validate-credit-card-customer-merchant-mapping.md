# Report Validate Credit Card Customer Merchant Mapping

Customer in Business Central are stored in the gateway to store the payment methods. Since the gateway uses a different numbering schema, a mapping exists that maps the Business Central customers to the gateway customers. Sometimes it might be necessary to ensure that this mapping is accurate. Our support team might instruct you to execute this process, in case it is necessary.

You can start the process by choosing ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Validate Credit Card Customer Merchant Mapping**, and then choose the related link.

## Options

|                                 |                                                                                                                                |
|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Show Error after processing** | If you enable this option, an error will be raised after the report was run and some mappings were incorrect. Please see the notes below for further information. |

## NAVX CC Merchant Customer

You can place various filters to limit the number of customers that are processed. Typically, it is advised to run the process without any filters, but you can use the field **Customer No.** to filter on a range of customers.

> [!INFORMATION]
> You can setup this process to run periodically on the job queue. If you run the report from a job queue, you want to enable **Show Error after processing**. This will set the job queue entry to an error state so that you can review what the error was.

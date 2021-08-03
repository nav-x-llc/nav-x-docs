# Page Commission Split Mappings

You can define multiple salespeople responsible for a sale. All salespeople defined in the **Commission Split Mappings** will receive commissions as defined in the **Commission Rates**. The **Commission Split Mappings** will define the **Commission Split** on each sales document based on the values on the sales document. Commission splits now can be defined on Sales Documents specifically for each Sales Line.

Any field that is available on the sales header or sales line can be used as a filter to define a responsible salesperson. This also includes any fields added by any other Apps or custom fields added by you. By using the **Dimension Mapping Filter**, you can also define the responsible salesperson based on a specific dimension and its value or values.

You can define different split percentages for each salesperson. The split is used to only give partial commission for a specific sale to an individual salesperson. You can define a **Split** between zero and 100 percent. The **Split** defines the percentage of the total amount, based on **Calculate Commission On**, that will be paid as commission to the salesperson.

If you want to control the commission split via mappings, it is recommended setting **Do not synchronize Commission Split** on the setup.

|                              |                                                                                                                                |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Salesperson Code**         | The salesperson that will receive all or a partial credit for a transaction.                                                   |
| **Salesperson Name**         | The name of the salesperson that is selected as the **Salesperson Code**.                                                      |
| **Mapping Filter**           | Define the filter rules based on the sales document header that determine, if this salesperson is responsible for a specific sales transaction |
| **Line Mapping Filter**      | Define the filter rules based on the sales document lines that determine, if the salesperson is responsible for a specific sales transaction or a specific line on a sales transaction |
| **Dimension Mapping Filter** | Define the filter rules based on dimensions associated with the sales document header or lines that determine, if the salesperson is responsible for a specific sales transaction or a specific line on a sales transaction |
| **Split**                    | The **Split** defines the percentage of the total amount, based on **Calculate Commission On**, that will be paid as commission to the salesperson. |

## See Also

- [Setting up Commission Rates](commission-rate-setup.md)
- [Setting up Commission Management](commission-setup.md)

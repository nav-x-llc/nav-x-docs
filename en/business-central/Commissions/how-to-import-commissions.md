# How To Import Commissions

When you first setup Commission Management by NAV-X, you have to perform the required setups for the system to understand your commission rules. However, you also have to setup the actual commission rates. If you have only a few different commission rates, it is probably very easy to configure those from within the system from the **Salesperson Card** or any of the master record pages, such as the **Customer Card**.

If you, however, have a lot of different commission rates depending on the different salespeople, the different items, categories, customers, or even date ranges, it might be easier to import the commission rates instead of manually entering them.

## Configuration Package

For that, we have created a configuration package that is automatically installed when you install the commission management app. You can find this by choosing  the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Configuration Package**, and follow the related link. The configuration package is called **NAV-X Commissions**.

You can highlight this configuration package and then select *Package -> Export to Excel* to export the data to Microsoft Excel and open the spreadsheet. The spreadsheet contains all tables that need to be setup and that have some relevance to the Commission Management app. You can, for instance, change the setup of the salespeople, make items commissionable, or other tasks. The different tabs in the spreadsheet correlate to the different pages in Business Central.

## Commission Setups

When you have a lot of salespeople, you can add these different salespeople to Business Central and then export the configuration package to make changes to those. You can define fields for the Salespeople in the **SalespersonPurchaser** tab. The different splits for salespeople can be defined on the **Salesperson Split** tab. The commission rates can be defined on the **Commission Rate Specification** tab.

### Salesperson Split

It is important to understand the salesperson split data to be able to define the proper setups. This tab contains the salesperson split for customers as well as sales documents. By defining the field **Table No.**, **Type**, **Subtype**, **No.**, **Sub Code**, and **Occurrence**, you can define the salespeople splits for customers as well as for sales documents.

You must define **18** as your **Table No.** when wanting to setup salesperson splits for customers. The field **No.** contains the customer number. When you want to define a salesperson split for a specific ship-to address, you define **222** as the table number and the customer number in the field **No.**. The ship-to address code will be defined in the field **Sub Code**.

## Importing Commission History

When you first start using Commission Management by NAV-X, you might have already paid commissions or commission sales data that you want to import so that you can pay proper commissions through the new app. This is especially important when you pay commissions based on sales growth. The tab **Commission Journal Line** is used for this. You can find the individual fields described in the [Commission Journal Page](page-commission-journal.md).

The **Journal Template Name** and the **Journal Batch Name** describe what batch you want to use for the initial import. It is recommended to create a new batch for this so that you can keep all data contained in one batch until it is ready to post. The **Journal Template Name** should be set to the value **COMMISSION** and the **Journal Batch Name** should be set to the batch name that you created for this import. For each line that you are creating in the tab, you have to define a unique **Line No.**. You can either start at 1 and then sequentially increase the number or you can start at 10,000 and then increase by another 10,000 each time you create a new line so that it's easier for you to insert lines in between the different existing lines.

## See Also

- [Prepare a Configuration Package](https://docs.microsoft.com/en-us/dynamics365/business-central/admin-how-to-prepare-a-configuration-package)
- [Commission Rate Setup](commission-rate-setup.md)
- [Commission Journal](page-commission-journal.md)

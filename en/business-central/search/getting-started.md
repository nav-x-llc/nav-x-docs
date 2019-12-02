# Getting Started

[!include[signup-tenant](includes/signup-tenant.md)]

## Permission Setup

Permissions for the app must be setup before the Search setup is started to ensure that the users can access the setup and also use the functionality properly once the setup is completed. You can find more information under [Permission Setups](permission-setups.md).

## Assisted Setup

### To start the Setup

When you are on the role center and have not completed the setup for the NAV-X Search app, you will see a notification asking "Do you want to get started with NAV-X Search?". Select **Click here to run the setup** to start the Assisted Setup wizard. Alternatively, you can also choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Assisted Setup**, and then choose the related link.

[!include[eula](../includes/eula.md)]

When you start the Assisted Setup for NAV-X Search, a welcome message will be displayed to inform you that you are about to setup your search experience. Please select **Next** to start setting up NAV-X Search.

The next step of the Assisted Setup is also informational. When you select **Next**, the setup will initialize the tables that are included in your search experience by default. The setup will process all existing tables in your environment and determine, if they should be included. This will take 10 to 20 seconds, so please be patient.

### Search Tables

Once the Assisted Setup advances to the next step, you will see a list of tables that was selected by default to be included in your search experience. You can now start making changes to this list. You can simply delete tables from the list. If a table is not listed, it will not be available for search. If you want to include data in the search that is not available yet, you can scroll to the end of the list and insert a new table by clicking on the Lookup button on the field **Table Name”. You then can pick a new table from the list. Alternatively, you can also just enter the table name in this field.

The last configuration is the **No. of Fields included** column, which shows you, if any fields are selected already for your search experience for this table. You can click on the number in this field and then add additional fields to the list or remove fields from the list. Any fields listed are accessible during search.

### Search Document Tables

Once you have completed your selection, you can advance to the next step by selecting **Next**. Don’t worry, you can always come back to this or go directly to those setups through the **Manual Setup** page, which is accessible from the search box on the top.

The next step of the Assisted Setup is similar to the last step, but it will allow you to configure document tables that are included in your search experience. A document table is a table in which, for instance, sales or purchase documents are stored. One table contains usually multiple document types, which is why you will see the same table multiple times. For instance, table *Sales Header* contains all open sales documents, such as quotes, orders, return orders, unposted invoices or credit memos. The configuration of these tables is the same as in the previous step.

### Complete the Setup

When you are satisfied with your selection of document tables, you can select **Next**, which will bring you to the last step of the Assisted Setup. As with the search tables, you can also make changes to the document search tables at any point from this Assisted Setup or from the Manual Setup.

The next step is the final step of the Assisted Setup and will just inform you that you have completed the setup. Please select **Finish**.

## See Also

- [Permission Setups](permission-setups.md)

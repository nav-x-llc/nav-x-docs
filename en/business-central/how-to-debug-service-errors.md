# How To Gather Error Details

There might be times when you receive error messages that the app could not communicate with an external service, such as our licensing server or also the credit card gateway. We are happy to assist you with this, but we will need certain details. Please gather the information described below and then submit the information to us.

## Activate service debugging

To activate debugging temporarily, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon and enter *About NAV-X*. Then choose the relevant link.

On the **About NAv-X** page, please activate the field **Debugging**. This will temporarily turn on tracking of all external service requests.

> [!IMPORTANT]
> Since this will store potentially sensitive information in the database, we suggest activating permissions in Business Central to only allow access to a certain number of users to the page **About NAV-X** and table **Rest Log Entries** (or **NAV-X Rest Log Entries**).

After this is activated, please perform the same task again that you have received the error before.

## Gathering details

Please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon and enter "Rest Log Entries". Then choose the relevant link. This will open up a list of all external service calls that were made.

Please locate the entries that were created when you received the error by filtering on **Date Time Created** on the time the error happened. Additionally, please filter on **ResponseHttpStatusCode** not equaling 200 (*<>200*). The list of all the resulting entries is a list of all errors. Please export those to Microsoft Excel.

Additionally, for all records, please go to *Report > Show Request Message* and copy the text out of the text box and place it into the correct row in Excel at the end of the columns. Also, please go to *Report > Show Response Message* and copy the text out of the text box and place it into the correct row in Excel at the end of the columns.

## Submit the errors to NAV-X

Please send an email to our [support team](mailto://support@nav-x.com) with the description of hte error as well as the Excel Spreadsheet containing the details.

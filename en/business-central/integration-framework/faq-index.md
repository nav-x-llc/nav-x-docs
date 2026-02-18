# Frequently Asked Questions

## General

- [What import file formats are supported?](faq-index.md#what-import-file-formats-are-supported)
- [Can I import to any Business Central table?](faq-index.md#can-i-import-to-any-business-central-table)
- [Do I need custom development to use Integration Framework?](faq-index.md#do-i-need-custom-development-to-use-integration-framework)
- [Can I schedule imports to run automatically?](faq-index.md#can-i-schedule-imports-to-run-automatically)

## Data Mapping

- [How do I translate source codes to Business Central codes?](faq-index.md#how-do-i-translate-source-codes-to-business-central-codes)
- [Can I import multi-line documents like sales orders?](faq-index.md#can-i-import-multi-line-documents-like-sales-orders)
- [What happens if a lookup value is not found?](faq-index.md#what-happens-if-a-lookup-value-is-not-found)

## Errors & Troubleshooting

- [What happens if there are errors during import?](faq-index.md#what-happens-if-there-are-errors-during-import)
- [Can I reprocess records that failed?](faq-index.md#can-i-reprocess-records-that-failed)
- [Why did my import say "No records found"?](faq-index.md#why-did-my-import-say-no-records-found)

## System

- [I want to update my version of NAV-X Integration Framework](faq-index.md#i-want-to-update-my-version-of-nav-x-integration-framework)
- [!include[faq-system-questions](../includes/faq-system-questions.md)]

## Errors

- [An unknown error occurred communicating with the licensing server](faq-index.md#an-unknown-error-occurred-communicating-with-the-licensing-server)
- [Unable to see NAV-X Intregration Framework functionality](faq-index.md#unable-to-see-nav-x-integration-framework-functionality)

## General Answers

### What import file formats are supported?

NAV-X Integration Framework supports four different import file formats:

1. **Excel** (.xlsx files) - Import data from Excel spreadsheets with column-based mapping
2. **CSV** (.csv files) - Import comma or custom delimiter-separated values
3. **Flexible-Length Text** - Import text files with custom field delimiters and quoted field support
4. **Fixed-Length Text** - Import positional text files from mainframe or legacy systems

For detailed setup instructions, see:

- [How to Import Excel Files](how-to-excel-import.md)
- [How to Import CSV Files](how-to-csv-import.md)
- [How to Import Flexible-Length Text](how-to-flexible-text-import.md)
- [How to Import Fixed-Length Text](how-to-fixed-length-text-import.md)

### Can I import to any Business Central table?

Yes. The Integration Framework works with any table in Business Central, including:

- Standard Business Central tables (Customer, Item, Vendor, etc.)
- ISV extension tables
- Custom tables you have created

Simply configure the integration with the destination table and set up your field mappings accordingly.

### Do I need custom development to use Integration Framework?

No. The Integration Framework is designed to allow integrations without requiring any custom development. You configure integrations entirely through the user interface by:

- Setting up field mappings
- Configuring lookup tables
- Defining validation rules
- Scheduling automated processing

### Can I schedule imports to run automatically?

Yes. Integrations can be scheduled to run automatically using the Business Central Job Queue. This allows you to:

- Set up recurring automated imports
- Run imports on a schedule (daily, weekly, etc.)
- Process files without manual intervention
- Receive email notifications on completion or errors

## Data Mapping Answers

### How do I translate source codes to Business Central codes?

Use **field value mapping** (lookups). This feature allows you to:

1. Specify a lookup table (e.g., Customer table)
2. Define which field to search (e.g., "Your Reference")
3. Define what value to return (e.g., "No.")

The system will search the lookup table for your source code and return the corresponding Business Central code.

Example: Source has "CUST_001" → Search Customer."Your Reference" → Return Customer "10001"

For detailed instructions, see [How to Use Field Lookups](how-to-field-value-mapping.md).

### Can I import multi-line documents like sales orders?

Yes. The Integration Framework supports importing complete sales documents with line items, including:

- Sales Orders with multiple line items
- Sales Invoices with line detail
- Sales Quotes with multiple products
- Return Orders with multiple lines

Each document header is created once, and lines are automatically grouped and created for that document.

For detailed instructions, see [How to Import Sales Documents](how-to-sales-documents.md).

### What happens if a lookup value is not found?

If a lookup value is not found:

- The individual record is marked with Status = **Error**
- An error message is recorded: "[Value] not found in lookup table"
- The record is not processed
- Other records in the import continue processing normally

You can then fix the issue (by creating the missing reference in Business Central) and reprocess the error records.

See [How to Handle Errors](how-to-error-handling.md) for recovery steps.

## Errors & Troubleshooting Answers

### What happens if there are errors during import?

The Integration Framework distinguishes between two types of errors:

**File-Level Errors** (Critical)

- Occur during file parsing (wrong delimiter, encoding, etc.)
- **Entire import fails** - no records created
- All records remain Status = Ready

**Record-Level Errors** (Recoverable)

- Occur during individual record processing (validation, lookup failure, etc.)
- **Only that record fails** - marked as Error
- Other records continue processing normally

### Can I reprocess records that failed?

Yes. To reprocess failed records:

1. Open the Integration Process
2. Filter records with Status = Error
3. Fix the underlying issue (in source data or Business Central)
4. Change record Status to "Ready"
5. Click **Reprocess Errors** action
6. Records are revalidated and processed

See [How to Handle Errors](how-to-error-handling.md) for detailed recovery procedures.

### Why did my import say "No records found"?

This indicates a file-level parsing failure. The most common causes are:

- **Wrong delimiter configured** - Your CSV is semicolon-delimited but system expects comma
- **Wrong record delimiter** - Your file uses LF but system expects CRLF
- **Wrong text parsing type** - Your file is flexible-length but configured as fixed-length
- **Corrupted file** - File cannot be read or is malformed

**Solution:**

1. Open your source file in Notepad to identify actual delimiters
2. Update Integration configuration to match actual file format
3. Retry import

See [How to Validate Data](how-to-data-validation.md) for import prerequisites and [How to Handle Errors](how-to-error-handling.md) for troubleshooting file parsing issues.

## System Answers

### I want to update my version of NAV-X Integration Framework

When we release a new version of the NAV-X Integration Framework Application, you will want to upgrade to that version. The upgrade does not happen automatically, unless your environment is upgraded to a new major release or you have your enviornment configured to upgrade apps also during minor updates. This happens in the Spring and Fall of every year. Between those major upgrades, you will need to manually update your extensions.

To update your extensions, you can log on to the *Business Central Admin Center* and select your environment. The environment would be either the production environment or one of the sandboxes you have the app installed in. After selecting the proper environment, you can then display all apps that are installed. If you have an app with an update available, it will show there and you can easily update it directly from there. More details are described in the [Microsoft Documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-apps).

You now have installed the latest version of the extension and can start taking advantage of the latest issue fixes and features.

[!include[faq-system-answers](../includes/faq-system-answers.md)]

## Errors Answers

### An unknown error occurred communicating with the licensing server

From time to time our apps try to communicate with our licensing server to ensure that your subscription is still active. If this is not possible, you will receive an error message. There can be various reasons for this, however, the most common one is that the system does not allow the communication with our servers.

To rectify this, you can choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extensions**, and then choose the related link. Alternatively, you can also select *Setup & Extensions > Extensions* from the **Role Center**. Then find the extension called **NAV-X Library by NAV-X** and click on **Show More Options**, which is represented by the three dots in the upper right corner of the extension. Select **Configure**. In the page opened, please ensure that the field **Allow HttpClient Requests** is active.

Please also [Provide details on the errors](../how-to-debug-service-errors.md) that you are receiving.

### Unable to see NAV-X Integration Framework functionality

There are various reasons why you cannot see the NAV-X Integration Framework functionality. We will go through the different reasons why you might be experiencing the issue:

1. You don't have a license
 Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **About NAV-X**, and then choose the related link to open the related page. On this page, you will see the different NAV-X apps that you have installed at the bottom under *Our Installed Apps*. Please validate that the **License Type** is set to **Trial** or **Full** and that the **Expiration Date** is in the future.
2. You have a license, but the license information is not up to date
 If you have paid for the subscription, but your license information does not show up in the **About NAV-X** page, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **About NAV-X**, and then choose the related link to open the related page. Then select the action **Reset License Information**. If your license then shows up properly, please ensure that you log out and log back in again.
3. You do not have the correct permissions
 If you have the proper license and it shows up properly, please validate that your user has the proper permissions defined. Your user should either have the *SUPER* user role or the permissions provided with the app. Learn more about [Permission Setups](permission-setups.md).
4. You have to sign out and sign back in
 If you make any changes to the license or the permissions, please ensure that you log out of Business Central and log back in. When logging in, your configuration is refreshed and should then enable the Application Area that is used to show or hide the various fields. If you have not enabled credit card processing in the setup yet, you should now see a notification on the role center asking, if you want to start or complete the setup process. You can also select the Action *Setup & Extensions > Assisted Setup* and scroll down to the **NAV-X** group.

 If you cannot see the setup, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Application Area**, and then choose the related link to open the related page. Please search for the application area called *NAV-X Integration Framework* and validate that it has a check mark.

If you still have issues, please feel free to [contact us](https://nav-x.com/support/)

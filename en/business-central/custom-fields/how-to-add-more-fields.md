# How to Add More Than 5 Custom Fields

The base **Custom Fields by NAV-X** app provides 5 custom fields per table per field type. If you need more than 5 fields of the same type on a single table, you can install the **Custom Fields Extension Pack 1** and/or **Custom Fields Extension Pack 2** apps from AppSource.

- **Extension Pack 1** adds field numbers 6–10
- **Extension Pack 2** adds field numbers 11–15

This gives you a maximum of 15 custom fields per field type per table when both packs are installed.

## Before You Start

- You must have the **Custom Fields by NAV-X** base app already installed and licensed.
- You must have administrator access to your Business Central environment (or access to the Business Central Admin Center).

## Steps

### 1. Install the Extension Package from AppSource

1. Open **Microsoft AppSource** at [appsource.microsoft.com](https://appsource.microsoft.com).
2. Search for **Custom Fields Extension Pack 1** (or Pack 2) by NAV-X.
3. Select **Get it now** and sign in with your Microsoft account if prompted.
4. Select the Business Central environment to install the app into and confirm the installation.

Alternatively, you can install directly from Business Central:

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extension Marketplace**, and choose the related link.
2. Search for *Custom Fields Extension Pack* and select the package you want.
3. Choose **Get it now** and follow the prompts.

### 2. Sign Out and Sign Back In

After the extension package is installed, sign out of Business Central and sign back in. This refreshes your session so the new field numbers are visible.

### 3. Define Custom Fields Using the New Field Numbers

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Custom Fields Definitions**, and choose the related link.
2. Create a new line and select the **Table** you want to add the field to.
3. Select the **Type** for the field (Code, Boolean, Decimal, etc.).
4. In the **Field No.** dropdown, you will now see field numbers 6–10 (and 11–15 if Extension Pack 2 is installed) in addition to the base fields 1–5.
5. Select the desired field number and fill in the **Field Name** and any other configuration options.
6. Choose **OK** to save.

The new field is now available on all the pages where that table's custom fields are shown.

## See Also

- [Extension Packages](extension-packages.md)
- [Custom Fields Definitions Page](page-customfield-definitions.md)
- [Getting Started](getting-started.md)

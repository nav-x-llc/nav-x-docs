# Extension Packages

The base **Custom Fields by NAV-X** app supports up to 5 custom fields per table per field type. If your business requires more than 5 fields of the same type on a table, you can install one or both extension packages to increase that limit.

## What Are Extension Packages?

Extension packages are separate apps published by NAV-X that extend the Custom Fields app by registering additional field number slots. Each package adds 5 more field numbers, following the same pattern as the base app.

| Package                         | Field Numbers | AppSource |
| ------------------------------- | ------------- | --------- |
| Custom Fields (base app)        | 1 – 5         |           |
| Custom Fields Extension Pack 1  | 6 – 10        |           |
| Custom Fields Extension Pack 2  | 11 – 15       |           |

> [!NOTE]
> Extension Pack 2 can be installed independently of Extension Pack 1, but it is generally recommended to install them in order.

## Custom Fields Extension Pack 1

**Custom Fields Extension Pack 1** registers field numbers 6 through 10 for use with the Custom Fields app. Once installed, these field numbers appear in the **Field No.** dropdown on the [Custom Fields Definitions](page-customfield-definitions.md) page alongside the base app's fields 1–5.

### Maximum Length for Extension Pack 1 Code Fields

When the **Max. Length** is 0, the default maximum length for Code fields in Extension Pack 1 is:

| Field No. | Max. Length |
| --------- | ----------- |
| 6         | 20          |
| 7         | 20          |
| 8         | 50          |
| 9         | 50          |
| 10        | 50          |

## Custom Fields Extension Pack 2

**Custom Fields Extension Pack 2** registers field numbers 11 through 15 for use with the Custom Fields app. Once installed, field numbers 11–15 appear in the **Field No.** dropdown in addition to all previously available field numbers.

### Maximum Length for Extension Pack 2 Code Fields

When the **Max. Length** is 0, the default maximum length for Code fields in Extension Pack 2 is:

| Field No. | Max. Length |
| --------- | ----------- |
| 11        | 20          |
| 12        | 20          |
| 13        | 50          |
| 14        | 50          |
| 15        | 50          |

## Installing an Extension Package

Extension packages are installed the same way as any other Business Central app:

1. Open **Microsoft AppSource** and search for *Custom Fields Extension Pack 1* or *Custom Fields Extension Pack 2* by NAV-X.
2. Select **Get it now** and follow the installation prompts.
3. After installation, sign out of Business Central and sign back in.
4. The new field numbers are immediately available on the [Custom Fields Definitions](page-customfield-definitions.md) page.

> [!IMPORTANT]
> A valid license for **Custom Fields by NAV-X** is required before installing an extension package. The extension packages do not function without the base app.

## See Also

- [Custom Fields Definitions Page](page-customfield-definitions.md)
- [How to Add More Than 5 Custom Fields](how-to-add-more-fields.md)
- [Getting Started](getting-started.md)

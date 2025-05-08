# Page Custom Fields Copy To

After you defined specific custom fields, you can define whether those fields should be transferred to different tables. For instance, when you define a custom field on an *Item*, you want this to be transferred to the *Sales Lines* when the item is entered on a *Sales Document*. This can be done via the **Custom Fields Copy To** page that can be accessed as an action from the **Custom Fields Definitions** page.

When you open the **Custom Fields Copy To** page from the **Custom Fields Definitions** page, it will be filtered on the *Table* that is currently selected and will allow you to configure the behavior for each of the fields of that *Table*.

The following fields are available on the page. The fields are non editable.

| Field | Description |
|-|-|
| **Table** | The table the field is configured for |
| **Type** | The field type |
| **Field No.** | The number of the custom field |
| **Field Name** | The name of the field as defined in the *Custom Fields Definitions* |

The remaining fields define which tables you want to copy the individual field to. The table below shows the different combinations that fields can be copied to.

| Copy From Table | Copy To Table |
|-|-|
| Bank Account | General Journal |
| Customer | Sales Header |
| | General Journal |
| Item | Purchase Line |
| | Sales Line |
| Purchase Header | Purchase Line |
| Sales Header | Sales Line |
| Vendor | Sales Header |
| | General Journal |

## See Also

- [Custom Fields Definitions Page](page-customfield-definitions.md)

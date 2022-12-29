# Page Release Restrictions - Sales

When a Sales Document is completely entered and it is ready for processing, the status will be set to *released*. The page **Release Restrictions - Sales** can be used to configure validity checks for the Sales Document, for instance, to ensure that all necessary fields are filled out.

The page can be accessed by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, entering **Release Restrictions - Sales**, and then selecting the related link.

|                          |                                                                                                                                    |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Document Type**        | Select the document type you want to define release restrictions for. Any of the lines below are only valid for the **Document Type** selected here. |
| **Type**                 | The **Type** defines whether a field from the *header* or *lines* of a document is examined                                        |
| **Field No.**            | Select the field that you want to define a restriction for. The field can be selected by choosing it from the look-up page, entering the field number, or by typing in a partial field name |
| **Conditions (Header)**  | If the field is a *header field*, filter conditions can be entered only here. If the field is a *line field*, filter conditions can be entered here and also for the **Condiitons (Line)**. The conditions entered in the look-up are filters that will be applied. For instance, you can define that any item with a specific number must have a specific field filled out when the document is for a specific customer. For this, you define the customer as the filter on the **Conditions (Header)** and the Item on the **Conditions (Line)**. |
| **Conditions (Line)**    | If the field is a *header field*, this field is not available. If the field is a *line field*, filter conditions can be entered here and also for the **Condiitons (Header)**. The conditions entered in the look-up are filters that will be applied. For instance, you can define that any item with a specific number must have a specific field filled out. |
| **Validation Type**      | You can select one of the following values:<br><br>- **Must be Blank**: The field must not have a value defined.<br>- **Must not be Blank**: The field cannot be blank.<br>- **Must be Value**: The field must contain the defined value<br>-**Must not be Value**: The field can have any value other than the value defined in the **Value** field.<br>- **Must not exist**: The value of the field cannot exist in any of the configured tables in the **Value** field. |
| **Value**                | Define the value that is used as a comparison. This field is only available when the **Validation Type** is either *Must be Value* or *Must not be Value*. If the **Validation Type** is *Must not exist*, different tables and fields can be defined together with filters. |
| **Custom Error Message** | If the validation fails, a default error message is displayed. If you want to customize your error message, you can define a message here. This will be displayed then instead of the default message. You can use parameters to specify either the field name (%1) or field value (%2). |

> [!NOTE]
> For numeric fields, a zero (0) is considered a blank value. For check marks (boolean fields), *No* is considered to be a blank value. If the field is an option field, the first option is considered blank.

## Actions

### Restriction Line

The **Release Restriction Line** page can be opened to enter different table conditions that must be met. This action is only available, if the **Validation Type** is set to *Must Exist* or *Must Not Exist*.

## See Also

- [Page Release Restrictions Line](page-release-restrictions-line.md)
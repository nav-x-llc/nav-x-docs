# Page Release Restrictions Line

The *Release Restrictions Line* can be used to define different tables and filters for those tables that are tested at the time of releasing a document. This way, you can, for instance, test whether an *External Document No.* has be used before for the same customer.

The page can be accessed from the **Release Restrictions (Sales)** page and by clicking on *(View filter details)* in the field **Value** or from the action **Release Restriction Line**. The page can only be opened when the **Validation Type** is either *Must Exist* or *Must Not Exist*.

|                          |                                                                                                                                    |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Target Table No.**     | The **Target Table No.** defines the table you want to test. You can either enter the table number or the name of the table.       |
| **Target Field No.**     | The **Field No.** within the **Target Table No.** that is validated against the current document that is being released.           |
| **Relation**             | This field allows the definition of filters that are applied to the **Target Table No.** when the current document is released.    |

> [!NOTE]
> If the **Validation Type** is set to *Must Exist*, records must exist in all tables that are defined in the lines. If the **Validation Type** is set to *Must Not Exist*, at least one of the tables defined must have records in the criteria.

> [!IMPORTANT]
> If you do not define a separate relation in the **Release Restriction Relations** for the field defined in the **Target Field No.**, a filter is automatically applied to this field to set it equal to the same field in the current document, as long as this field exists in both tables. If you want to define a custom filter for this field, define a relation for this field in the **Release Restriction Relations**.

## Actions

### Restriction Relation

The **Release Restriction Relation** page can be opened to enter different filter criteria for the table that is selected. Those filters will be applied at the time of releasing the document and validate whether a record exists or doesn't exist in this table.

## See Also

- [Page Release Restriction Relations](page-release-restrictions-relation.md)

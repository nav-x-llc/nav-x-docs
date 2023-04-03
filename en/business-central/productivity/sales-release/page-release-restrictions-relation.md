# Page Release Restriction Relations

The *Release Restrictions Relation* can be used to define different filters for tables defined in the **Release Restriction Lines**. Those filters are applied to the table using the values defined while the current document is released.

The page can be accessed from the **Release Restrictions Line** page and by clicking on *(View filter details)* in the field **Relation** or by selecting the action **Release Restriction**.

|                          |                                                                                                                                    |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Filter Field No.**     | Defines the field the filter defined below should be applied to.                                                                   |
| **Relation Type**        | If the **Relation Type** is set to *Equals Field*, you can define a field from the source document. The value from this field in the document is then used to apply the filter to the table.
If the **Relation Type** is set to *Is Filter*, you can define a hardcoded filter. |
| **Filter Type**          | The filter type defines the filter that will be applied to the record. You can use any of the common filter criteria, such as *Equals*, *Less Than*, *Greater Than*, or others |
| **Filter Value**         | You can define a filter criteria, if the **Relation Type** is *Is Filter* or the related field from the current document, if the **Relation Type** is set to *Equals Field* |
| **Date Formula**         | If the **Filter Field No.** is a date field, you can define a date formula in this field that is applied to the field using the value from the defined field in the current document. |

# How to apply restrictions

Restrictions can be defined that will cause the release of a document to fail. The restrictions can be test, if fields are empty or not empty, have a specific value, or you can also define, if a record exists in another table with a specific value. We will look at a few examples to explain different setup scenarios.

## Example: Do not release Sales Order, if no External Document No. is defined

In the **Release Restrictions (Sales)** page, you can define restrictions for different document types. If you want to define restrictions for the release of a *Sales Order*, you must select *Order* in the **Document Type** field. To restrict the release of a sales order, if no *External Document No.* is defined, you must define the following criteria.

| **Type** | **Field No.**         | **Conditions (Header)** | **Conditions (Line)** | **Validation Type** | **Custom Error Message** |
|----------|-----------------------|-------------------------|-----------------------|---------------------|--------------------------|
| Header   | External Document No. |                         |                       | Must Not Be Blank   |                          |

## Example: Do not release Sales Order, if External Document No. was used within the last month in a Sales Order or Posted Sales Invoice

To prevent the release of a Sales Order, if the **External Document No.** used in another sales order or any sales invoice or posted sales invoice, you will have to setup a more advanced scenario.

### Release Restrictions

| **Type** | **Field No.**         | **Conditions (Header)** | **Conditions (Line)** | **Validation Type**                  | **Custom Error Message** |
|----------|-----------------------|-------------------------|-----------------------|--------------------------------------|--------------------------|
| Header   | External Document No. |                         |                       | Must not exit and field not be empty | The %1 %2 has been used in a different document already. |

### Release Restriction Lines

| **Target Table No.** | **Target Field No.**  |
|----------------------|-----------------------|
| Sales Header         | External Document No. |
| Sales Invoice Header | External Document No. |

### Release Restriction Relation for Sales Header

| **Filter Field No.** | **Relation Type** | **Filter Type**       | **Filter Value**     | **Date Formula** |
|----------------------|-------------------|-----------------------|----------------------|------------------|
| Document Type        | Filter            | Equal To              | Order|Invoice        |                  |
| Sell-to Customer No. | Field             | Equal To              | Sell-to Customer No. |                  |
| No.                  | Filter            | Not Equal to          | No.                  |                  |
| Order Date           | Field             | Greater Than or Equal | Order Date           | -1M              |

### Release Restriction Relation for Sales Invoice Header

| **Filter Field No.** | **Relation Type** | **Filter Type**       | **Filter Value**     | **Date Formula** |
|----------------------|-------------------|-----------------------|----------------------|------------------|
| Sell-to Customer No. | Field             | Equal To              | Sell-to Customer No. |                  |
| Order Date           | Field             | Greater Than or Equal | Order Date           | -1M              |

Once you release a sales order with these settings, the sales order will not be release, if the external document number was already used in any sales order, sales invoice, or posted sales invoice with an order date within the last month.

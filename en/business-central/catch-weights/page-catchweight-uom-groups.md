# Unit of Measure Groups Page

The **Unit of Measure Groups** page allows you to organize units of measure into logical groups and optionally restrict which units of measure can be used as catch weight units for items assigned to a group.

## How to Access

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon
2. Enter **Unit of Measure Groups**
3. Choose the related link

Alternatively, access this page from the Catch Weights Setup page.

## Fields

| Field | Description |
| --- | --- |
| **Code** | A unique identifier for the unit of measure group (e.g., "WEIGHT", "VOLUME", "COUNT"). This code is used when assigning items to groups. |
| **Description** | A descriptive name for the group that explains the purpose or types of units it contains (e.g., "Weight-Based Units", "Volumetric Units"). |
| **Limit Catch Weight Unit of Measure** | When enabled, only units of measure assigned to this group can be used as catch weight units for items in the group. This ensures consistency and prevents mismatched unit assignments. |

## Usage Guidelines

### Best Practices for Organizing UOM Groups

1. **Create groups by measurement type** - Group similar measurement units together:
   - Weight units (KG, LB, G)
   - Volume units (L, GAL, ML)
   - Count-based units (PAIR, DOZEN, CASE)

2. **Use the Limit feature** - When limiting is enabled:
   - Items assigned to the group can only use catch weight units from that group
   - Prevents accidental assignment of incompatible units (e.g., assigning a volume unit as the catch weight for weight-tracked items)

3. **Leave blank if flexible** - If you want items to be able to use any unit of measure as a catch weight, create a group without limiting enabled or leave items unassigned to a group.

## Create a New Unit of Measure Group

1. On the Unit of Measure Groups page, select **New**
2. Enter a **Code** (e.g., "WEIGHT")
3. Enter a **Description** (e.g., "Weight-Based Units")
4. Optionally enable **Limit Catch Weight Unit of Measure** if you want to restrict units
5. Select **OK**

## Assign Units of Measure to Groups

To assign a unit of measure to a group:

1. Go to the **Units of Measure** page
2. Find the unit you want to assign
3. In the **Catch Weight UOM Group** field, enter the group code
4. Optionally set the **Catch Weight Rounding** type and **Catch Weight Rounding Precision**
5. Save the changes

Alternatively, you can assign the group when setting up item units of measure on the **Item Units of Measure** page.

## See Also

- [Getting Started](getting-started.md)
- [Catch Weights Setup](page-catchweight-setup.md)
- [How to set up UOM groups](how-to-setup-uom-groups.md)

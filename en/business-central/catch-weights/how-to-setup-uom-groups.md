# How to Set Up Unit of Measure Groups

Unit of Measure (UOM) Groups help you organize and enforce consistency in which units of measure can be used as catch weights. This article explains how to create and use UOM groups effectively.

## Understanding UOM Groups

Unit of Measure Groups serve two purposes:

1. **Organization** - Group similar units of measure (e.g., all weight units, all volume units)
2. **Restriction** - Optionally limit which units can be used as catch weights for items assigned to a group

## Create a New UOM Group

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon
2. Enter **Unit of Measure Groups**
3. Choose **New**
4. In the **Code** field, enter a unique identifier (e.g., "WEIGHT", "VOLUME", "COUNT")
5. In the **Description** field, enter a descriptive name (e.g., "Weight-Based Units", "Volumetric Units")
6. To restrict units, check **Limit Catch Weight Unit of Measure**
7. Choose **OK**

## Assign Units of Measure to a Group

### From the Units of Measure Page

1. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon
2. Enter **Units of Measure**
3. Find the unit you want to assign
4. In the **Catch Weight UOM Group** field, enter the group code
5. Save

### From the Item Units of Measure Page

When setting up an item's unit of measure:

1. Open an **Item Card**
2. Select **Item Units of Measure** from the actions
3. Find or create the unit
4. In the **Catch Weight UOM Group** field, enter the group code
5. Optionally configure rounding settings
6. Save

## Recommended UOM Group Structure

Here are some suggested groupings based on common business needs:

### Weight-Based Group

```plaintext
Code: WEIGHT
Description: Weight-Based Units
Units: KG, LB, G, MG, OZ, TON
```

### Volume-Based Group

```plaintext
Code: VOLUME
Description: Volumetric Units
Units: L, ML, GAL, QT, PT, FL OZ
```

### Count-Based Group

```plaintext
Code: COUNT
Description: Count-Based Units
Units: PIECE, PAIR, DOZEN, GROSS, CASE, BOX
```

### Length-Based Group

```plaintext
Code: LENGTH
Description: Length-Based Units
Units: M, CM, MM, IN, FT, YD
```

## Set Up Restrictions Using Limit

When **Limit Catch Weight Unit of Measure** is enabled:

- Items assigned to this group can **only** use units from this group as catch weights
- This prevents accidental use of incompatible units
- For example, if your WEIGHT group includes only weight units, items assigned to it cannot use volume units

### Example: Preventing Incompatible Units

You have a liquid beverage sold by the liter (L):

1. Create a VOLUME group without any weight units
2. Assign your beverage item's unit of measure (L) to the VOLUME group with limiting enabled
3. If someone tries to set the alternate unit to a weight unit, the system will prevent it

## Configure Rounding for UOM Groups

When assigning units to groups, you can also configure how quantities should be rounded:

1. Go to the unit's record (Units of Measure page)
2. Set the **Catch Weight Rounding** type:
   - **Standard** - Round to nearest value
   - **Down** - Always round down (floor)
   - **Up** - Always round up (ceiling)
3. Set the **Catch Weight Rounding Precision** (decimal places)

Example: For a unit where quantities should be rounded to 2 decimal places, set Precision to 2.

## Best Practices

1. **Keep groups simple** - Use clear, self-explanatory codes that reflect the unit types
2. **Document your structure** - Write down how you've organized groups for consistency
3. **Use limiting strategically** - Enable limiting only when you need to enforce unit compatibility
4. **Review before mass assignment** - Test a group's configuration with a few items before applying it widely
5. **Default group handling** - If you want flexibility, leave items unassigned to a group

## Modify an Existing UOM Group

1. Go to **Unit of Measure Groups**
2. Find the group (search by Code)
3. Edit the **Description** if needed
4. Modify the **Limit Catch Weight Unit of Measure** setting
5. Save

## Delete a UOM Group

1. Go to **Unit of Measure Groups**
2. Find the group
3. Select **Delete** (if no units are assigned to it)

**Note:** You cannot delete a group that has units assigned to it. First, reassign those units to a different group or remove the group assignment.

## Troubleshooting

### Units aren't showing in my group

- Verify units are assigned in the **Catch Weight UOM Group** field on the Units of Measure page
- Check that the group code matches exactly

### I can't restrict a group's units

- Enable **Limit Catch Weight Unit of Measure** on the group
- Ensure the units you want to allow are assigned to the group

### I'm getting errors when assigning units

- Verify the unit exists in the Units of Measure list
- Check that there are no spelling mistakes in the group code

## See Also

- [Getting Started](getting-started.md)
- [How to set up catch weights for an item](how-to-setup-catch-weights-item.md)
- [Unit of Measure Groups](page-catchweight-uom-groups.md)

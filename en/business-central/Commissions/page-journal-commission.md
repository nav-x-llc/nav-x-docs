# Page Journal Commission

The **Journal Commission** page displays commission information for the current General Journal transaction. It can be accessed from the General Journal by selecting the action **Commissions** (*Page > Commissions*) or (*Line > Commissions*). The page can also be opened from the **General Journal Batch** and then displays the commissions for the entire batch.

The **General** fast tab shows information about the General Journal Line as well as the total **Commissionable Amount**, and the **Commission Amount**. If you are a commission manager, you can see commissions for all salespeople and also make changes to those commissions. If you are not a commission manager, you can only see your own commissions.

[!include[sales-commission-fields](includes/sales-commission-fields.md)]

## Manual Commissions

You can make changes to the system calculated commissions by overwriting one of the values, such as the commission rate or the commission amount. Whenever you change a system calculated commission, the field **System Created** will be unchecked to identify that this is a commission that will not be updated when you select the **Calculate Commissions** action on the sales document.

In addition to updating existing commissions, you can also create new commissions. You can enter a new line and define any commission for any salesperson. This is important, if you want to give commission to a certain salesperson as an exception.

> [!NOTE]
> If you are using the *Gross Profit* to calculate commissions, you will have to enter the **Line Cost** on each line as the cost cannot be defined on the General Journal.

## See Also

- [Setting up Commission Rates](commission-rate-setup.md)

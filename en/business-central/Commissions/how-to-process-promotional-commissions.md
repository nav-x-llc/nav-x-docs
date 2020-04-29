# How To Process Promotional Commissions

Sometimes, you run specific promotions, for instance, you are discounting certain items that are about to be discontinued. In this case, if you are paying commissions based on the sales price, you might actually have issues, since your gross profit for this transaction is lower. You then want to adjust commissions paid for these promotions. This is not only possible for commissions calculated on *Sales*, but also on any of the other possible options.

Please also watch our video describing how to setup and process [tiered commissions on YouTube](https://youtu.be/3kAhofKshAk).
## Campaigns

### Setting up Campaign Commissions

Promotions are handled in Business Central via **Campaigns**. You can learn more about this in the [Walkthrough](https://docs.microsoft.com/en-us/dynamics365/business-central/walkthrough-conducting-a-sales-campaign). After you have set up a **Campaign**, you can add special commission rates for this campaign. You can also add or change the commission rates after the fact. To change commission rates, please choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Campaign**, and follow the related link.

Select **Commissions** *(Navigate > Campaign > Commissions)* from the **Commission List** or **Commission Page**. This page allows you entering any commissions that are specific for this campaign only. You do not have to enter a starting date or ending date, if the commissions are the same for the entire duration of the campaign. The fields of the page are described in detail in the [Commissions Rate Page](page-commission-rates.md).

> [!NOTE]
> NAV-X Commission Management only works with the standard Business Central promotions. If you have any add-on apps that are providing promotion management differently, please [contact us](https://docs.nav-x.com/support/) so that we can evaluate, if we can integrate our Commission Management Solution with the add-on that you are using.

> [!IMPORTANT]
> The **Commissions** is only shown as an action, if you have turned on **Commissions by Campaigns** in the **Features** fast tab in the [Commission Setup](page-commission-setup.md)

### Entering Sales Documents with Campaign Commissions

When you enter sales documents, for instance a sales order, you enter the document the same way you usually enter it. When you select the sales campaign on the document, the campaign specific pricing will be selected. At the same time, your Commission Management app will also update the commissions by selecting the campaign commissions that are valid for this campaign only. You can then process the sales order the same way you usually do. The commissions will be posted as usual and will be paid as part of normal commission processing.

> [!NOTE]
> The campaign commissions are only applied to the sales document, if you enter the **Campaign No.** on the document.

## Other promotion types

### Setting up Promotional Commissions

Instead of using campaigns, you can also define different commission rates for specific date ranges from the salespeople, customers, items, or other areas you typically define commission rates. You can learn more about entering **Commission Rates** in our [Commission Rate Setup](commission-rate-setup.md) page.

### Entering Sales Document with Promotional Commissions

Based on the **Effective Date** calculation defined on the **Commission Setup**, the proper commission rates are calculated. When you enter a sales document and the dates on the document fit into the date range defined for the promotional commissions, the commissions that you entered as promotional commissions are selected. You can then process the sales document as usual.

## See Also

- [Walkthrough: Conducting a Sales Campaign](https://docs.microsoft.com/en-us/dynamics365/business-central/walkthrough-conducting-a-sales-campaign)
- [Sell Products](https://docs.microsoft.com/en-us/dynamics365/business-central/sales-how-sell-products)
- [Page Commission Rates](page-commission-rates.md)
- [Video: Tiered Commissions on YouTube](https://youtu.be/3kAhofKshAk)
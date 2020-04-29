# Extending the Commission Management functionality

While we try to provide a broad variety of commission calculation options and hope that we can provide you with the functionality that you require, not all companies have the same commission rules. If you do not find the proper commission calculation, you can also extend the functionality yourself or work with your partner to extend the functionality.

You can also always send us an email or [contact us](https://docs.nav-x.com/support/) on our website to suggest a feature request. We cannot guarantee that we can implement this request or when we could release it, but we try our best to accommodate our customers. If we can see the feature request being useful for a variety of our customers, we will do our best to incorporate this request in one of the next versions. If we cannot accommodate you or if you need the functionality earlier, you can create a dependant app that is dependant on our NAV-X Commission Management app and extends the calculation options.

For this to be possible, we have made the following adjustments.

1. Options - Our drop down lists are extensible enumerations. This means that you can add easily your own options to the existing fields such as the **Commission Type** that allows you to define what the base of the commission calculation is.

2. Events - We have added events before and after the commission calculation steps that allow you to override the functionality and implement your own logic. All these events follow the *Handled Pattern*. This means that you can set the **Handled** parameter to *true* and then our Commission Management functionality will skip the standard implementation and only goes with your customizations.

> [!NOTE]
> Please be aware that we cannot provide support for customizations that have been done to your system. If you decide to extend the commission management functionality, we can only provide support for the standard functionality that we offer. We always try our best to provide you with assistance even for customizations, but we cannot develop or fix customizations for you.

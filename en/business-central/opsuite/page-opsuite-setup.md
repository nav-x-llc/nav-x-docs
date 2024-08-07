---
canonical_url: https://docs.nav-x.com/en/business-central/opsuite/opsuite-setup.html
---
# Page OpSuite™ Integration

## General

In the *General* fast tab, you can define your authorization to allow Business Central to connect to OpSuite™. The credentials can be found in OpSuite™ under *Setup -> API Subscriptions*. You will need to configure a subscription for the user you want to use here and can define the access level that user has. You cannot define more than one user for the integration, so this API Subscription in OpSuite™ requires access to all data that you want to transmit.

[!include[authorization_part](includes/authorization_part.md)]

## Integration

In the *Integration* fast tab, you can define the specific integrations that you want to use and how the integration should work. Only the integrations included in the plan you have purchased are shown.

[!include[integration_part](includes/integration_part.md)]

## Number Series

*Number Series* are used within Business Central to generate internal document numbers for data processed. For instance, if you want to have only the financial summary synchronized between OpSuite™ and Business Central, you would have to define a number series that is used to post the General Journal transactions.

[!include[numberseries_part](includes/numberseries_part.md)]

## Financial Integration

Details can be setup for the *Financial Integration*. This integration only synchronizes financial summary (sales, cost of goods sold, inventory, and payments) from OpSuite™ into Business Central. Details cannot be synchronized. This fast tab is only active, if you have the **Standard** plan purchased.

[!include[financialintegration_part](includes/financialintegration_part.md)]

## Notifications

When the integration is running on the Job Queue as a scheduled task, you can define in the *Notifications* fast tab whether you want to receive an email, if the automatic integration failed.

[!include[notifications_part](includes/error_handling_part.md)]

## Actions

### Validate Connection

After defining the **User Name** and **Password**, you can use the *Validate Connection* action to validate that the entries are correct. The system will check, if the integration can log into the OpSuite™ API correctly.

## See Also

- [Job Queue Setup](job-queue-setup.md)
- [Business Central Email Integration](additional-setups.md#email-setup)

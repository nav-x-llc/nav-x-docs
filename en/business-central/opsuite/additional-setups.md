# Additional Setups

While the NAV-X OpSuite™ Integration setup performs most of the setups for you, you might want to understand and review the setups to be able to make changes when needed. All setups described below can be reached by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon and entering the headings below.

## Email Setup

if you want to receive notifications via email when an error is received in the automated processing of the synchronization between OpSuite™ and Business Central, you will need to setup the Email functionality. Please follow the standard guide to [set up email](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email).

After the setup is completed, please access the **Email Scenario Assignment** by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon and entering *Email Scenario Assignment*. On the **Email Scenario Assignment** list, please select the function **Assign scenarios** for the email account you have setup for the sending of the failure notifications. Typically, it would be setup as the *Current User*.

In the list **Assign scenarios to account...*, please search for the scenario called *OpSuite Error Email* and assign this to the email account.

## Job Queue

[!include[job-queue](includes/job-queue-part.md)]

## See Also

- [Email Setup](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email)
- [Job Queue Setup](job-queue-setup.md)
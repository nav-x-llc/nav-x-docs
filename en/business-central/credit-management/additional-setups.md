# Additional Setups

While the NAV-X Credit Management setup performs most of the setups for you, you might want to understand and review the setups to be able to make changes when needed. All setups described below can be reached by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon and entering the headings below.

## User Setup

The **User Setup** should be reviewed or updated for each user allowed to approve orders on hold or update credit limits for customers. For each user, who should be able to perform these tasks, you have to have a **User Setup** record defined and the field **Credit Manager** checked.

## Approval User Setup

Each user releasing sales orders or approving sales orders on hold should be configured as an approver in the **Approval User Setup**. You can define different approvers for different users. A user who should be able to approve sales orders on hold, should be setup in the **Workflow User Group** called *CREDITAPPROVER*. This group is automatically setup when you finish the **Assisted Setup**.

## Payment Methods

For each **Payment Method** you can choose, if you want to turn off the credit check or have it activated. By default, credit check is activated for each **Payment Method**. To deactivate the credit check for a specific **Payment Method** select **Bypass Credit Check** for a particular record.

## See Also

- [Setting Up Workflows](https://docs.microsoft.com/en-US/dynamics365/business-central/across-set-up-workflows)
- [Set Up Workflow Users](https://docs.microsoft.com/en-US/dynamics365/business-central/across-how-to-set-up-workflow-users)
- [Set Up Approval Users](https://docs.microsoft.com/en-US/dynamics365/business-central/across-how-to-set-up-approval-users)

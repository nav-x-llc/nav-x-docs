# Page: Set Up Datto Workplace Account (Wizard)

The **Set Up Datto Workplace Account** wizard guides you through connecting a Datto Workplace organization to Business Central in four steps.

**To open:** From the **File Accounts** page (search for **External File Storage**), choose **Add Account**, select **Datto Workplace**, and choose **OK**.

## Steps

### Step 1: Welcome

Displays an introduction and lists the prerequisites needed to complete the wizard:

- Your Datto Workplace domain region and data center cell (from the Datto Workplace Admin Portal)
- A Datto Workplace API user account with Client ID and password

Choose **Next** to proceed.

### Step 2: Connection

Configure the connection to your Datto Workplace organization.

| Field | Description |
| --- | --- |
| **Domain** | The Datto Workplace regional domain for your organization. Select from the dropdown. See the [Domain Reference](how-to-add-account.md#domain-reference) for available options |
| **Cell** | The data center cell number within the selected domain (1–18) |
| **Client ID** | The username of the Datto Workplace API user |
| **Password** | The Client Secret (password) for the API user. The value is masked and stored in isolated storage — not in the database |

All four fields are required. Choosing **Next** validates that no fields are empty before proceeding.

### Step 3: Account Name

| Field | Description |
| --- | --- |
| **Name** | A descriptive name for this account. Appears in the File Accounts list and in all storage selectors throughout Business Central. For example: `Datto Workplace - Production` |

The name is required. Choosing **Next** validates the name before proceeding.

### Step 4: Test and Finish

Displays a read-only summary of the configured account and provides the option to test the connection.

| Field | Description |
| --- | --- |
| **Account Name** | The name entered in Step 3 |
| **Domain** | The domain selected in Step 2 |
| **Cell** | The cell selected in Step 2 |
| **Client ID** | The Client ID entered in Step 2 |
| **Connection Status** | Shows the result of the last connection test: blank (not yet tested), **Connection successful**, or **Connection failed: [error message]** |

## Actions

| Action | Description |
| --- | --- |
| **Back** | Returns to the previous step. Available on all steps except Welcome |
| **Next** | Validates the current step and advances to the next. Available on all steps except Test and Finish |
| **Test Connection** | Calls the Datto Workplace API to verify credentials. Available on the Test and Finish step only. Updates the **Connection Status** field |
| **Finish** | Saves the account and closes the wizard. Available on the Test and Finish step. Enabled regardless of whether the connection test was run |

## See Also

- [How to Add a Datto Workplace Account](how-to-add-account.md)
- [Account Card](page-account-card.md)

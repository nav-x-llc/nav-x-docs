# How to Set Up API Access in Datto Workplace

This guide explains how to create an API integration in the Datto Workplace Admin Portal to obtain the credentials required by the Business Central connector: the **Endpoint URL**, **Client ID**, and **Client Secret**.

> **Note:** Kaseya Support can confirm that your Datto Workplace API integration is operational, but cannot assist with configuring third-party integrations such as the Business Central connector.

## Prerequisites

- A **Datto Workplace** account with **Administrator** or **Super Administrator** privileges
- Access to **Workplace Online** (the web-based admin portal for your organization)

## Step 1: Open Integration Settings

1. Sign in to **Workplace Online** with an Administrator or Super Administrator account
2. In the left navigation, go to **Configuration** → **Integrations**
3. The Integrations page lists all integrations currently configured for your team

## Step 2: Add a New API Integration

1. Choose **+ Add Integration**
2. In the popup window that opens, select **API** from the list of integration types
3. Choose **Add**

The **Manage API Integration** page opens.

## Step 3: Name the Integration

1. In the **Integration Name** field, enter a descriptive name for this integration — for example, `Business Central` or `BC - Production`

   The Integration Name appears on the integration tile and in folder sharing dialogs within Datto Workplace, so choose a name that identifies the purpose clearly.

2. Optionally, enter a **Description** with additional context

3. Choose **Save**

## Step 4: Copy the Credentials

After saving, three fields are displayed on the integration tile. Copy all three values — you will need them when setting up the account in Business Central:

| Field | Description | Used In Business Central |
| --- | --- | --- |
| **Endpoint URL** | The full API base URL for your Datto Workplace organization | Used to determine **Domain** and **Cell** (see below) |
| **Client ID** | The unique identifier for this API integration | Enter in the **Client ID** field of the BC account wizard |
| **Client Secret** | The secret key used to authenticate API calls | Enter in the **Password** field of the BC account wizard |

> **Security:** Treat the Client Secret like a password. If it is compromised, delete the integration immediately and create a new one with a new Client Secret.

## Step 5: Determine Your Domain and Cell from the Endpoint URL

The **Endpoint URL** shown in Datto Workplace encodes both the **Domain** and **Cell** that you need to configure in Business Central.

The URL format is:

```text
https://{domain}/{cell}/api/v1
```

**Example:**

```text
https://us.workplace.datto.com/5/api/v1
```

From this URL:
- **Domain** = `us.workplace.datto.com` → select **US Workplace** in Business Central
- **Cell** = `5` → select **5** in Business Central

Use this table to map the domain portion of the URL to the correct **Domain** dropdown option in Business Central:

| Endpoint URL domain | Business Central Domain option |
| --- | --- |
| `us.fileprotection.datto.com` | US FileProtection |
| `eu.fileprotection.datto.com` | EU FileProtection |
| `ca.fileprotection.datto.com` | CA FileProtection |
| `au.fileprotection.datto.com` | AU FileProtection |
| `us.workplace.datto.com` | US Workplace |
| `eu.workplace.datto.com` | EU Workplace |
| `ca.workplace.datto.com` | CA Workplace |
| `au.workplace.datto.com` | AU Workplace |

The number between the domain and `/api/v1` in the Endpoint URL is your **Cell** number. Select that number in the **Cell** dropdown in Business Central.

## Step 6: Use the Credentials in Business Central

You now have everything needed to set up the account in Business Central:

| Business Central field | Value from Datto Workplace |
| --- | --- |
| **Domain** | Determined from the Endpoint URL domain (see table above) |
| **Cell** | The number between the domain and `/api/v1` in the Endpoint URL |
| **Client ID** | The **Client ID** from the integration tile |
| **Password** | The **Client Secret** from the integration tile |

Proceed to [How to Add a Datto Workplace Account](how-to-add-account.md) to complete the setup in Business Central.

## Managing Existing API Integrations

To view or update an existing API integration:

1. Go to **Workplace Online** → **Configuration** → **Integrations**
2. Locate the API integration tile
3. Choose **Setup / Manage** on the tile to re-open the integration and view the Endpoint URL, Client ID, and Client Secret

### Rotating the Client Secret

Datto Workplace does not provide a built-in secret rotation action. To replace a compromised or expired Client Secret:

1. Delete the existing API integration (choose the **X** button on the tile and confirm)
2. Create a new API integration following the steps above — a new Client ID and Client Secret are generated
3. Update the Business Central account with the new credentials (see [How to Manage Accounts](how-to-manage-accounts.md))

### Deleting an API Integration

On the Integrations page, choose the gray **X** button on the API integration tile. Confirm the deletion. Once deleted, any Business Central account using those credentials will no longer be able to connect to Datto Workplace until new credentials are configured.

## Troubleshooting

### I Cannot See the API Option When Adding an Integration

Your Workplace account does not have Administrator or Super Administrator privileges. Contact your Datto Workplace administrator to create the API integration, or to elevate your account role.

### The Endpoint URL Does Not Match Any Domain in Business Central

Verify that you are looking at the Endpoint URL on the **API** integration tile (not a different integration type such as SaaS Protection). The URL should follow the format `https://{domain}/{cell}/api/v1`. If the URL looks different, contact Kaseya Support to confirm the correct API endpoint for your account.

### The Client Secret Is No Longer Visible

For security, Datto Workplace does not display the Client Secret after you navigate away from the integration tile. If you need the Client Secret again:

- If you saved it securely when first created, use the saved value
- If it is no longer available, delete the integration and create a new one to generate a fresh Client ID and Client Secret, then update Business Central accordingly

## See Also

- [How to Add a Datto Workplace Account](how-to-add-account.md)
- [How to Manage Accounts](how-to-manage-accounts.md)
- [Getting Started](getting-started.md)
- [Datto Workplace API Integration documentation](https://help.workplace.datto.com/help/Content/3_ONLINE/Configuration/API%20Integrations.htm)

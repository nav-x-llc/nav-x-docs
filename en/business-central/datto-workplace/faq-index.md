# Frequently Asked Questions

## Setup

- [What do I need before I can set up the connector?](#what-do-i-need-before-i-can-set-up-the-connector)
- [Where do I find my domain and cell in Datto Workplace?](#where-do-i-find-my-domain-and-cell-in-datto-workplace)
- [Can I set up multiple Datto Workplace accounts?](#can-i-set-up-multiple-datto-workplace-accounts)

## Usage

- [Which Business Central features work with Datto Workplace storage?](#which-business-central-features-work-with-datto-workplace-storage)
- [How are Datto Workplace Projects represented in Business Central?](#how-are-datto-workplace-projects-represented-in-business-central)
- [Can I use this connector with the NAV-X Integration Framework?](#can-i-use-this-connector-with-the-nav-x-integration-framework)

## Security

- [Where are my credentials stored?](#where-are-my-credentials-stored)
- [How does Business Central authenticate with Datto Workplace?](#how-does-business-central-authenticate-with-datto-workplace)

## Errors & Troubleshooting

- [The connection test fails — what should I check?](#the-connection-test-fails--what-should-i-check)
- [I cannot see the Datto Workplace option when adding a file account](#i-cannot-see-the-datto-workplace-option-when-adding-a-file-account)
- [I want to update my version of the connector](#i-want-to-update-my-version-of-the-connector)

---

## Setup Answers

### What do I need before I can set up the connector?

You need:

1. A Datto Workplace account with API access enabled
2. A Datto Workplace API user with a **Client ID** and **Client Secret**
3. Your organization's **Domain** (regional) and **Cell** (data center) values — available in the Datto Workplace Admin Portal
4. Business Central 2025 Release Wave 1 (version 27.0) or later
5. The **NAVX DC STANDARD** permission set assigned to your BC user

### Where do I find my domain and cell in Datto Workplace?

Log in to the Datto Workplace Admin Portal and navigate to **API Settings** or **Account Information**. The domain and cell number are displayed there. You can also identify the domain from the URL you use to access Datto Workplace — for example, `us.workplace.datto.com` corresponds to the **US Workplace** domain option.

### Can I set up multiple Datto Workplace accounts?

Yes. You can add as many accounts as needed — each pointing to a different Datto Workplace organization, user, or for different purposes. All enabled accounts appear in the File Accounts list and are available as storage options wherever Datto Workplace storage can be selected.

---

## Usage Answers

### Which Business Central features work with Datto Workplace storage?

Any Business Central feature that uses the **External File Storage** system can use Datto Workplace as its storage back-end. This includes document attachments, report output destinations, and — when used with the NAV-X Integration Framework — file pickup (import) and archiving (export) operations.

### How are Datto Workplace Projects represented in Business Central?

Datto Workplace **Projects** appear as top-level folders in Business Central's file browser and in path-based file operations. Inside each Project, the folder hierarchy is navigable as nested subdirectories. For example, a file stored at `My Project / Finance / Invoices / INV-001.pdf` is accessible via the path `My Project/Finance/Invoices/INV-001.pdf`.

The connector automatically resolves Project names and folder paths to the Datto Workplace internal IDs — you work with human-readable paths, not numeric identifiers.

### Can I use this connector with the NAV-X Integration Framework?

Yes. When the Datto Workplace Connector is installed alongside the [NAV-X Integration Framework](../integration-framework/index.md), Datto Workplace accounts can be selected as File Sources for file pickup and as archive or export file destinations. This allows the Integration Framework to automatically pick up files deposited in a Datto Workplace folder, process them, and archive or write output back to Datto Workplace — with no manual file transfers required.

---

## Security Answers

### Where are my credentials stored?

The Client Secret (password) is stored in Business Central's **Isolated Storage** — a per-company, encrypted key-value store that is separate from the database. The credential is never written to any database table and cannot be read back or displayed in the UI after it is saved. When an account is deleted, the stored credential is automatically removed from Isolated Storage.

### How does Business Central authenticate with Datto Workplace?

The connector uses **HTTP Basic Authentication**. The Client ID and Client Secret are combined as `ClientID:ClientSecret`, Base64-encoded, and sent in the `Authorization: Basic <token>` HTTP header on every API call. This is the authentication method required by the Datto Workplace Public REST API.

---

## Errors & Troubleshooting Answers

### The connection test fails — what should I check?

1. **Verify Domain and Cell** — confirm they match the values shown in the Datto Workplace Admin Portal exactly. A common mistake is selecting the wrong region (e.g., EU instead of US) or the wrong cell number.
2. **Verify credentials** — re-enter the Client ID and Client Secret. If the secret was recently rotated, update it on the Account Card and test again.
3. **Check API user permissions** — confirm the API user in Datto Workplace has permission to list Projects and access files.
4. **Check outbound internet access** — Business Central (cloud) normally has unrestricted outbound access, but if you are on an on-premises or private cloud deployment, confirm that connections to the Datto Workplace domain are allowed.

### I cannot see the Datto Workplace option when adding a file account

- Confirm the **External File Storage - Datto Workplace Connector** app is installed. Choose the ![Tell me what you want to do](/images/magnifying-glass.gif) icon, enter **Extensions**, and verify the app appears in the list.
- Confirm your user has the **NAVX DC STANDARD** permission set assigned. See [Permission Setups](permission-setups.md).
- Sign out and sign back in to Business Central — permission changes require a fresh session to take effect.

### I want to update my version of the connector

When we release a new version, you will receive an in-product notification in Business Central. To update manually, log in to the *Business Central Admin Center*, select your environment, open the installed apps list, and apply the available update. For detailed steps, see the [Microsoft documentation on managing apps](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-apps).

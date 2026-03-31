# Release Notes for March 2026 Update - Version 1.8.0

## New Features

### OAuth2 Authorization Code Authentication

A new **OAuth2 Authorization Code** authentication type is available on the REST API Connection Card. This flow supports APIs that require a user to log in and grant access through an external authorization page — as opposed to the machine-to-machine OAuth2 Client Credentials flow.

The authorization process follows the **Authorization Code with PKCE** standard:

1. Choose **Start Authorization** to open the external authorization URL in your browser
2. Log in and grant access — the external system redirects back to Business Central with an authorization code
3. The framework exchanges the code for access and refresh tokens automatically

Tokens are cached and refreshed automatically before expiry. The **Manage Authorization** action group on the Connection Card provides actions to start, test, refresh, and revoke the authorization.

### Auto-Map Engine — Automatic Field Mapping Suggestions

A new **Auto-Map** action on the Integration Fields page analyzes your source data fields and the Business Central table fields configured for the integration, and suggests the most likely field mappings automatically.

The engine applies five matching strategies in sequence, stopping at the first match:

1. **Exact** — field names match exactly (case-insensitive)
2. **Normalized** — punctuation, spaces, and underscores are stripped before comparison
3. **Token** — names are split into words and matched token by token
4. **Abbreviation Expansion** — 24 built-in abbreviations are expanded before comparison (`Qty` → `Quantity`, `Cust` → `Customer`, `Amt` → `Amount`, etc.)
5. **Levenshtein Distance** — edit distance similarity catches minor typos and near-matches

Each suggestion is assigned a **confidence score** (0–100) and displayed with color coding: green (high confidence, safe to accept), yellow (medium confidence, review before accepting), red (low confidence, likely incorrect).

The **Auto-Map Preview** page shows all suggestions in one place. Accept individual suggestions, change the suggested field by picking from a lookup, or skip fields you don't want mapped. Choose **Apply Mappings** to create only the accepted suggestions.

### Configuration Versioning

The Integration Framework now automatically saves a **version snapshot** of each integration's configuration whenever a meaningful change is detected. Changes are debounced (a 30-second grace period after the last edit) and only saved when the configuration has actually changed (SHA-256 hash comparison).

The **Version History** page shows all saved versions with timestamps and change counts. Selecting any version and choosing **Compare** opens a **Version Diff** page that highlights each change with color coding:

- **Green** — a setting was added
- **Yellow** — a setting was modified (shows old value and new value)
- **Red** — a setting was removed

Choose **Restore** on any historical version to roll the integration configuration back to that point. The number of versions retained is configurable in Integration Framework Setup (**Max Versions** setting).

### Bulk Import API

The **Bulk Import API** enables external systems to submit large datasets to Business Central for background processing without waiting for the import to complete. Instead of a synchronous response, callers receive a **Request ID** and can poll for status.

The Bulk Import API lifecycle:

1. External system POSTs data to the BC API endpoint — receives a `requestId` immediately
2. BC queues the import as a Job Queue task
3. External system polls `GET /BulkImportRequests(requestId)` to check status
4. Status progresses: `Pending` → `Processing` → `Completed` or `Failed`
5. On completion, the full result (rows processed, errors) is available in the response

Bulk Import Requests are retained for **30 days** and then automatically cleaned up by the retention policy.

### Idempotency for REST API Exports

A new **Idempotency** feature prevents duplicate API calls when a failed export run is retried. Each outgoing API call is assigned a unique **idempotency key** based on the BC record's primary key and optionally a hash of its field values. Before making each call, the framework checks the **Idempotency Log** — if a matching key exists from a previous successful call, the call is skipped.

Two key generation strategies are available:

- **Primary Key** — a record is only sent once, regardless of subsequent data changes. Best when the API is idempotent (PUT/PATCH upsert) and the Identity Registry handles update routing.
- **Primary Key + Hash** — a record is re-sent if its data has changed since the last successful call. Best for full-sync scenarios where unchanged records should be skipped but changed records should be re-sent.

Idempotency log entries are retained for **7 days** (configurable in Integration Framework Setup).

### Webhook Security — HMAC Signature Verification

Incoming webhook receivers can now be secured with three layers of protection:

**HMAC Signature Verification** — the framework verifies that the incoming webhook payload was signed by the expected sender using a shared secret. SHA-256, SHA-1, and SHA-512 algorithms are supported. The signature header name and any prefix format (`sha256=...`) are configurable per receiver.

**Timestamp Validation** — when the webhook sender includes a request timestamp header, the framework rejects requests where the timestamp is older than a configurable tolerance (default: 5 minutes), preventing replay attacks.

**IP Allowlist** — restrict incoming webhooks to a list of IP addresses or CIDR ranges. Requests from addresses not on the allowlist are rejected before signature verification.

All three checks can be combined. When all are configured, they are evaluated in order: IP allowlist → timestamp → signature.

## See Also

- [How to update my extensions](../faq-index.md)

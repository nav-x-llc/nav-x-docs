# How to Set Up Integration Alerts

This guide explains how to configure alerts so that Business Central notifies users automatically when an integration run meets specific conditions — for example, when imports fail, complete with errors, or process an unusually large or small number of records.

## What Are Integration Alerts?

Integration alerts are rules that evaluate the outcome of each import or export run and send a notification when the rule condition is met. You configure alerts per integration; they fire automatically after every run without any manual action.

**Common alert scenarios:**

- Get notified by email whenever an import run produces errors
- Send a BC notification when an integration processes zero records (potential data source problem)
- Alert when the number of imported records exceeds an expected threshold (possible duplicate submission)
- Notify a team member when a scheduled nightly import fails completely

## Prerequisites

- You have an integration configured and running
- For **Email** alerts, outgoing email is configured in Business Central (SMTP or Microsoft 365)
- You have the **NAVX IF ALL** permission set

## Opening Alert Configs

1. Open the **Integrations** page and select an integration
2. Choose **Alerts** from the action bar

The **Alert Configs** page opens filtered to the selected integration. You can also search for **NAVX IF Alert Configs** in Tell Me to see alerts across all integrations.

## Creating an Alert

Choose **New** on the **Alert Configs** page to create a new alert and open the **Alert Config Card**.

### General Fields

| Field | Description |
| --- | --- |
| **Integration Sorting Order** | The integration this alert belongs to (pre-filled when opened from the integration) |
| **Description** | A descriptive name for the alert (e.g., "Notify on import errors") |
| **Enabled** | Turn off to temporarily disable the alert without deleting it |
| **Alert Type** | The condition that triggers the alert (see [Alert Types](#alert-types) below) |
| **Alert Channel** | How the notification is sent: **BC Notification**, **Email**, or **Both** |
| **Cooldown (minutes)** | Minimum time between alerts of this type. Prevents alert flooding when the same condition occurs on many consecutive runs. Set to `0` to alert on every occurrence |

### Recipient Fields

| Field | Description |
| --- | --- |
| **Recipient User ID** | The BC user to notify (for **BC Notification** and **Email** channels). Leave empty to notify the user who runs the integration |
| **Recipient Email** | An explicit email address to notify. Used when the recipient is not a BC user, or to notify a distribution list. Only relevant when **Alert Channel** is **Email** or **Both** |

## Alert Types

### Any Error

Fires when one or more rows in the import or export run produced an error.

No additional configuration fields.

**Use this to:** Be notified of any data quality or processing failure in a run.

---

### All Errors

Fires when every row in the import or export run produced an error — meaning the entire run failed without a single successful record.

No additional configuration fields.

**Use this to:** Detect complete integration failures, such as a malformed source file or authentication breakdown, separate from runs that have a few bad rows mixed in.

---

### Zero Records

Fires when the import or export run processed zero records — the source data was empty.

No additional configuration fields.

**Use this to:** Detect when a data source has stopped producing data, which may indicate an upstream problem (API outage, empty export from a partner system, misconfigured scheduler).

---

### Record Count Above Threshold

Fires when the number of records processed exceeds a configured maximum.

| Field | Description |
| --- | --- |
| **Record Count Threshold** | The minimum number of records that triggers this alert (inclusive) |

**Use this to:** Detect unexpected bulk submissions that may indicate a duplicate file was sent or a feed is producing more records than expected.

---

### Record Count Below Threshold

Fires when the number of records processed is below a configured minimum.

| Field | Description |
| --- | --- |
| **Record Count Threshold** | The minimum number of records expected. Alert fires if the actual count is below this (exclusive) |

**Use this to:** Ensure a regular data feed delivers at least a minimum expected volume. For example, a daily order feed that normally delivers 50+ orders should alert if it delivers fewer than 10.

## Alert Channels

### BC Notification

Sends a notification in the Business Central notification center (the bell icon in the top bar). The recipient sees the notification the next time they log in or immediately if they are logged in.

### Email

Sends an email to the **Recipient Email** address or, if empty, to the email address on the **Recipient User ID** record. Requires outgoing email to be configured in BC.

### Both

Sends both a BC notification and an email.

## Cooldown

The **Cooldown (minutes)** field prevents alert flooding. If a condition fires repeatedly (for example, an integration runs every 5 minutes and always has errors), setting a cooldown of 60 minutes means you receive at most one alert per hour instead of one every 5 minutes.

Set **Cooldown** to `0` to alert on every occurrence with no suppression.

## Testing an Alert

To verify your alert configuration is correct before relying on it:

1. Open the **Alert Config Card** for the alert
2. Choose **Test Alert** from the action bar
3. A test notification is sent immediately via the configured channel, regardless of integration run state
4. Confirm the notification arrives at the expected destination

## Example: Email Alert on Import Errors

**Scenario:** A nightly inventory sync runs at 2 AM. You want to receive an email if any rows fail.

| Field | Value |
| --- | --- |
| Description | Inventory sync errors |
| Alert Type | Any Error |
| Alert Channel | Email |
| Recipient Email | warehouse-team@contoso.com |
| Cooldown | 240 (alert at most once every 4 hours) |
| Enabled | Yes |

## Example: BC Notification When Zero Records Received

**Scenario:** An order feed from a marketplace should always contain at least one order per run. Alert the integration owner if the feed is empty.

| Field | Value |
| --- | --- |
| Description | Order feed empty |
| Alert Type | Zero Records |
| Alert Channel | BC Notification |
| Recipient User ID | JSMITH |
| Cooldown | 60 |
| Enabled | Yes |

## See Also

- [How to Use Background Processing](how-to-background-processing.md)
- [How to Use Import Logging](how-to-import-logging.md)
- [Alert Configs Page](page-alert-configs.md)
- [How to Handle Errors](how-to-error-handling.md)

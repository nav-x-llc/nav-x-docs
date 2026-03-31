# Page Alert Configs

The **Alert Configs** page lists all notification alerts configured for integrations. Each record defines a condition that, when met after an import or export run, automatically sends a notification via BC notification, email, or both.

**To open:** From the [Integrations page](page-integrations.md), select an integration and choose **Alerts** from the action bar. Or search for **NAVX IF Alert Configs** in Tell Me to view alerts across all integrations.

## Overview

See [How to Set Up Integration Alerts](how-to-alerts.md) for a full configuration walkthrough.

## Key Fields (List)

| Field | Description |
| --- | --- |
| **Integration Sorting Order** | The integration this alert belongs to |
| **Description** | A descriptive name for the alert |
| **Alert Type** | The condition that triggers the alert |
| **Alert Channel** | How the notification is delivered: BC Notification, Email, or Both |
| **Enabled** | Whether the alert is active |
| **Cooldown (minutes)** | Minimum minutes between repeated alerts of this type |

## Alert Config Card Fields

### General

| Field | Description |
| --- | --- |
| **Integration Sorting Order** | The integration this alert belongs to |
| **Description** | A descriptive name for the alert |
| **Enabled** | Turn off to temporarily disable the alert without deleting it |
| **Alert Type** | The condition that triggers this alert (see types below) |
| **Alert Channel** | **BC Notification**, **Email**, or **Both** |
| **Cooldown (minutes)** | Minimum time between repeated alert notifications. `0` means alert on every occurrence |

### Recipients

| Field | Description |
| --- | --- |
| **Recipient User ID** | The BC user to receive the notification. Leave empty to notify the user running the integration |
| **Recipient Email** | An explicit email address to notify. Can be a distribution list address |

### Type-Specific Fields

| Alert Type | Additional Fields |
| --- | --- |
| Record Count Above Threshold | **Record Count Threshold** — alert fires when count ≥ this value |
| Record Count Below Threshold | **Record Count Threshold** — alert fires when count < this value |
| Any Error | None |
| All Errors | None |
| Zero Records | None |

## Alert Types Reference

| Alert Type | Fires When |
| --- | --- |
| **Any Error** | One or more rows in the run produced an error |
| **All Errors** | Every row in the run produced an error (complete failure) |
| **Zero Records** | The run processed zero records |
| **Record Count Above Threshold** | Records processed ≥ configured threshold |
| **Record Count Below Threshold** | Records processed < configured threshold |

## Actions

### Test Alert

Sends a test notification immediately via the configured alert channel, regardless of integration run state. Use this to verify that notifications are delivered to the correct recipient.

## See Also

- [How to Set Up Integration Alerts](how-to-alerts.md)
- [Integrations Page](page-integrations.md)
- [How to Use Import Logging](how-to-import-logging.md)

# Page NAV-X Integration Setups

The **Integration Setups** page provides access to configuration settings for the Integration Framework and individual integrations.

**To open:** Use the search function (search for "NAV-X Integration Setups") or navigate via the Integration Framework menu.

## Overview

Two types of setups are available:

1. **NAV-X Integration Setup** - Framework-level configuration
2. **Individual Integration Setups** - Per-integration settings (one per integration configuration)

## General Framework Setup

**Setup Name:** NAV-X Integration Setup

Controls global behavior and security settings for all integrations.

### Common Settings

Typical configuration options include:

| Setting | Purpose | Default |
| --------- | --------- | --------- |
| **Enable Post-Processing** | Global switch for post-processing features | Yes (v1.3.0+) |
| **Background Processing Enabled** | Allow Job Queue deferred processing | Yes (v1.3.0+) |
| **Field Value Mapping Enabled** | Enable code translation/mapping feature | Yes (v1.3.0+) |
| **Audit Trail** | Log all import/process operations | Yes |
| **Error Notification** | Notify admin of import errors | Yes |

### Advanced Settings

| Setting | Purpose |
| --------- | --------- |
| **Max Retry Attempts** | How many times to retry failed records |
| **Retention Period** | Days to keep completed imports before cleanup |
| **Log Level** | Verbosity of diagnostic logging |

## Individual Integration Setups

**One setup per integration** for specific configuration of that integration's behavior.

### Integration-Specific Settings

| Setting | Purpose | Notes |
| --------- | --------- | ------- |
| **Codeunit for Pre-Processing** | Custom logic before import processing | Optional |
| **Codeunit for Post-Processing** | Custom logic after records created | Set on Integration record directly (v1.3.0+) |
| **Enable Duplicate Detection** | Check for duplicate records before creating | Per-integration control |
| **Default Processing Mode** | Immediate or Deferred for this integration | Set on Integration record directly (v1.3.0+) |
| **Error Handling Mode** | How to handle failed records | Skip/Log/Ask |

## Accessing Setup Pages

### From Integration List

1. Open **NAV-X Integrations** page
2. Select an integration
3. Look for **Setup** action or link
4. Opens that integration's setup page

### From Setup Navigation

1. Open **NAV-X Integration Setups** page
2. See list of all available setups
3. Click on Title to open specific setup

**Setups shown:**

- NAV-X Integration Setup (general)
- [Integration Name] Setup (one per integration)
- Post-Processing Setup (v1.3.0+)
- Field Value Mapping Setup (v1.3.0+)

## Configuration Guidelines

### Best Practices

1. **Review general setup** before creating first integration
2. **Configure per-integration settings** matching your workflow
3. **Test with small import** before enabling background processing
4. **Document custom codeunits** for your organization
5. **Review error handling** to match your retry strategy
6. **Enable audit trail** for compliance/troubleshooting

### Workflow Recommendations

**For Small, Ad-Hoc Imports:**

```text
General Setup:
  - Processing Mode: Immediate (default)
  - Error Handling: Ask
  - Notifications: Enabled

Integration Setup:
  - Post-Processing: Off
  - Duplicate Detection: On
```

**For Large Batch Imports:**

```text
General Setup:
  - Processing Mode: Deferred Job Queue
  - Error Handling: Log
  - Notifications: Enabled (for completion)

Integration Setup:
  - Post-Processing: On (if needed)
  - Duplicate Detection: On
  - Retry Attempts: 3
```

**For Scheduled Integrations:**

```text
General Setup:
  - Background Processing: Required
  - Job Queue: Configured
  - Audit Trail: Enabled

Integration Setup:
  - Post-Processing: Per Document (immediate validation)
  - Error Notifications: Admin email
  - Retention: 90 days
```

## Version 1.3.0 Updates

New in v1.3.0:

| Feature | Setting | Location |
| --------- | --------- | ---------- |
| Post-Processing Framework | Codeunit ID + Trigger Type | Integration record |
| Background Processing | Execution Mode (Immediate/Deferred) | Integration record |
| Field Value Mapping | Enable mapping per-field | Integration Field page |
| Multi-Document Support | Create New Document flag | Integration Mapping |
| Error Classification | Error Type field | Integration Record |

These settings are primarily configured at the Integration level (on the Integration record itself) rather than on centralized setup pages.

## Legacy Setups (Pre-v1.3.0)

Older setups that may still exist but are superseded:

| Old Setting | Replaced By (v1.3.0) |
| -------- | --- |
| Processing Codeunit ID | Processing Execution Mode + Post-Processing Framework |
| Single Export Direction | Bidirectional support (future) |

## Troubleshooting Setup Issues

### "Setting not found" error?

**Cause:** Setup page accessed before setup created

**Solution:**

1. Verify setup name spelled correctly
2. Ensure setup exists (may need creation)
3. Check permissions to access setup table

### Settings not applying?

**Cause:** Configuration not saved or wrong level

**Solution:**

1. Verify settings saved (**Save** button clicked)
2. Check if setting is global or per-integration
3. Verify integrations reloaded after setup change

### Can't find specific setting?

**Research:**

1. Check Integration Type configuration (Integrations page)
2. Check Post-Processing settings (Integration record)
3. Check Field Mapping configuration (Mappings page)
4. Check specific Integration Fields (for Column Types)

Many v1.3.0 settings moved to specific configuration pages rather than centralized setup.

## See Also

- [Integrations Page](page-integrations.md) - Integration configuration
- [General Setup Page](page-setup.md) - Framework-level settings
- [How to Configure Integrations](how-to-configure-integrations.md) - Setup walkthrough
- [Post-Processing Framework](how-to-post-processing.md) - New in v1.3.0
- [Background Processing Modes](how-to-background-processing.md) - New in v1.3.0

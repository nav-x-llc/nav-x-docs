# Page Orchestrator Card

The **Orchestrator Card** configures a single orchestrator — a coordinator that reads from one data source and routes records to multiple integrations based on the content of each record.

**To open:** Search for **NAVX IF Orchestrators** in Tell Me, then choose **New** or open an existing orchestrator.

## Overview

See [How to Use the Orchestrator](how-to-orchestrator.md) for a full configuration walkthrough, routing logic details, and examples.

## Key Fields

### General

| Field | Description |
| --- | --- |
| **Code** | A unique identifier for the orchestrator |
| **Description** | A description of the orchestrator's purpose |
| **Source Type** | The format of the incoming data: **Excel**, **JSON**, **XML**, **CSV**, **Text**, or **REST API** |
| **Enabled** | Whether the orchestrator can be run. Disabled orchestrators are skipped by the Job Queue |

### Source Configuration (varies by Source Type)

#### Excel

| Field | Description |
| --- | --- |
| **Route by Worksheet** | When enabled, routes records by worksheet name instead of by cell value |

#### JSON / XML

| Field | Description |
| --- | --- |
| **Root Data Path** | The JSON/XML path to the root data array |
| **Route Key Path** | The JSON/XML path within each record that holds the routing key value |

#### CSV / Text

| Field | Description |
| --- | --- |
| **Route Column Index** | The 1-based column position containing the routing key |

#### REST API

| Field | Description |
| --- | --- |
| **Connection Code** | The REST API connection to call |
| **Resource Path** | The API endpoint path |
| **Response Data Path** | JSON path to the data array in the API response |
| **Route Key Path** | JSON path within each record for the routing key |

### Routes SubPage

Lists all routes for this orchestrator in **Processing Order**. See [Orchestrator Routes Page](page-orchestrator-routes.md) for field descriptions.

## Actions

### Run Import

Runs the orchestrator in import mode. For file-based source types, a file selection dialog opens. Records are routed to target integrations and processed through their import pipelines.

### Run Export

Runs the orchestrator in export mode. Each route's target integration stages data from BC, and all datasets are combined into a single output.

### Schedule Import / Schedule Export

Opens the Job Queue entry configuration to set up recurring scheduled runs for import or export mode.

### Import Log

Opens the import logs for all integrations that are routes of this orchestrator, filtered to the most recent run.

## See Also

- [How to Use the Orchestrator](how-to-orchestrator.md)
- [Orchestrator Routes Page](page-orchestrator-routes.md)
- [Integrations Page](page-integrations.md)

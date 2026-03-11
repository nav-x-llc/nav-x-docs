# Release Notes for March 2026 Update - Version 1.6.0

## New Features

### REST API Integration: Core Client and Connections

The Integration Framework now supports **REST API integrations** alongside the existing file-based imports (Excel, CSV, Text, JSON). A new REST API client enables connecting to external web services to pull data directly into Business Central.

New **Connection** and **Endpoint** configuration allows defining base URLs, endpoints, and request parameters for REST API integrations. The connection setup supports multiple authentication methods:

- **Bearer Token** - Static bearer token authentication
- **API Key** - API key passed as header or query parameter
- **Token Endpoint** - OAuth-style token retrieval from a token endpoint with automatic refresh

A **Test Connection** action validates connectivity and authentication before running an import.

### REST API Pagination

The REST API client supports **automatic pagination** for APIs that return results across multiple pages. The framework detects and follows pagination links or page tokens, collecting all result pages into a single dataset for processing.

### JSON-to-Buffer Parser

A **JSON-to-Buffer parser** converts REST API JSON responses into the internal Excel Buffer format used by the import pipeline. This allows REST API responses to flow through the same field mapping, pre-parsing transformations, and processing logic as file-based imports.

### REST API Scheduled Polling

REST API integrations can be executed on a schedule using the **Job Queue**. Scheduled polling allows Business Central to periodically pull data from external APIs without manual intervention, enabling automated data synchronization workflows.

### REST API Import Preview

The **Import Preview Mode** has been extended to support REST API integrations. Users can preview data returned from an API call before committing the import, inspecting the parsed response and reviewing field mappings.

### Request Body Templates

**Request Body Templates** allow defining the HTTP request body for REST API calls that require POST or PUT methods. Templates support static content as well as dynamic placeholders.

### Record-Based Template Variables

Template variables can be resolved from **Business Central table field lookups**, enabling request bodies that include values from existing BC records. This allows building dynamic API requests based on data already in the system (e.g., including a customer number or document ID in an API call).

### Retry Logic with Exponential Backoff

REST API calls include automatic **retry logic with exponential backoff** for transient failures. When an API call fails due to a timeout or server error, the framework retries with progressively longer delays, improving reliability when communicating with external services.

### Chained API Calls (Master/Detail)

**Chained API calls** support master/detail patterns where a second API call depends on results from the first. For example, an initial call retrieves a list of orders, and a follow-up call fetches line items for each order. The framework manages the call sequence and merges results into the import pipeline.

### Multi-Endpoint Aggregation

**Multi-endpoint aggregation** combines data from multiple API endpoints into a single import. This enables scenarios where related data is spread across different API resources and needs to be consolidated before processing.

### Webhook Receivers (Push-Based Integration)

**Webhook receivers** enable push-based integration where external systems send data to Business Central via HTTP callbacks. Instead of polling an API on a schedule, the external system notifies Business Central when new data is available, enabling real-time data ingestion.

### GraphQL Query Support

**GraphQL query support** allows connecting to GraphQL APIs in addition to standard REST endpoints. Users can define GraphQL queries and the framework handles query execution, response parsing, and data extraction into the import pipeline.

### REST API Sync Protocol and Entity Routing

A **Sync Protocol** manages the synchronization state between Business Central and external REST APIs, tracking which records have been synced and handling incremental updates.

**Entity Routing** directs incoming API data to the correct Business Central tables based on the data content or endpoint configuration, enabling a single integration to route different entity types to their appropriate destinations.

### REST API Copilot: AI-Powered Auto-Setup

The **Copilot Auto Setup** feature has been extended to support REST API integrations. Copilot can analyze REST API documentation and automatically configure connections, endpoints, authentication, and field mappings.

Key capabilities include:

- **Doc Fetcher** - Retrieves and parses API documentation from a URL to understand available endpoints and data structures
- **Prompt Builder** - Constructs AI prompts with API documentation context, available endpoints, and Business Central metadata for intelligent setup generation
- **Response Parser** - Converts AI-generated configuration into Integration Framework records with validation against live BC metadata
- **Setup Creator** - Persists the confirmed REST API configuration including connection details, endpoints, authentication settings, and field mappings
- **PromptDialog Page** - Extended Copilot UX for REST API setup with endpoint selection and configuration review
- **Multi-Endpoint Batch Sync Selection** - UI for selecting multiple endpoints to synchronize in a single batch operation

### REST API Copilot Telemetry

Telemetry events have been added for REST API Copilot operations, tracking setup creation, generation success/failure, and usage patterns through the BC Feature Telemetry framework.

## See Also

- [How to update my extensions](../faq-index.md)

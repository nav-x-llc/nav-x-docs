# How to Use Idempotency for REST API Exports

This guide explains how to enable idempotency for REST API export integrations to prevent duplicate API calls when a failed run is retried.

## What Is Idempotency?

In distributed systems, network failures or Job Queue interruptions can cause an export run to be retried after it has already partially completed. Without idempotency, a retry may re-send API calls that already succeeded — resulting in duplicate records in the external system (e.g., the same order created twice in a fulfillment API).

Idempotency solves this by assigning each API call a unique **idempotency key**. If the same key is sent twice, the framework skips the second call because it already has a logged result for that key.

**When to enable idempotency:**

- Your export integration calls a non-idempotent API endpoint (POST creates a new record, not upsert)
- Your export runs in background via Job Queue and may be retried on failure
- Duplicate records in the external system would cause data integrity problems

**When it is not needed:**

- The API endpoint is naturally idempotent (PUT/PATCH upsert by external key)
- You have [Identity Registry](how-to-identity-registry.md) routing POST vs PUT/PATCH correctly — in that case, new records get POST (idempotency helps), but updates get PUT/PATCH (already safe)

## How Idempotency Keys Work

An **idempotency key** is a unique string generated per API call based on:

- The integration's identifier
- The BC record's primary key
- Optionally, a hash of the record's data

Before making each API call, the framework checks whether a key matching this combination exists in the **Idempotency Log**. If it does and the prior call succeeded, the call is skipped. If it does not exist, the call proceeds and the result is logged.

## Enabling Idempotency

1. Open the **REST API Endpoint Card** for the export integration's endpoint
2. In the **Idempotency** section, enable **Use Idempotency**
3. Configure the following fields:

| Field | Description |
| --- | --- |
| **Idempotency Key Strategy** | How the key is generated: **Primary Key** (BC record primary key only), **Primary Key + Hash** (primary key combined with a hash of the record's field values — detects data changes) |
| **Idempotency Key Header** | The HTTP header name to send the key in, if the API expects it (e.g., `Idempotency-Key`, `X-Idempotency-Key`). Leave empty if the API does not use an idempotency header — the framework still tracks keys internally |
| **Re-send on Data Change** | When **Primary Key + Hash** strategy is used: if the record's data has changed since the last successful call, send the call again with a new key even though the primary key was already sent |

## Key Generation Strategies

### Primary Key

The idempotency key is derived from the BC record's primary key alone. This means:

- A record that has already been successfully sent is never sent again, even if its data changes
- Use this when the external API has its own update routing (e.g., you are using [Identity Registry](how-to-identity-registry.md) to switch to PUT/PATCH for updates)

### Primary Key + Hash

The idempotency key combines the BC primary key with a SHA-256 hash of the record's exported field values. This means:

- A record that has already been sent with the same data is not sent again
- If the record's data changes, the hash changes, the key is new, and the call is sent again
- Use this for full sync scenarios where you want to skip unchanged records but re-send changed ones

## Idempotency Log and Retention

The **Idempotency Log** stores a record per successful API call, keyed by the idempotency key. This log:

- Is checked before every outgoing API call to decide whether to skip or send
- Retains records for **7 days** by default (configurable in Integration Framework Setup under **Idempotency Retention (days)**)
- After the retention period, entries are deleted — meaning a record that has not been exported for more than 7 days will be re-sent on the next run

To view the idempotency log for an integration:

1. Open the **Integration** record
2. Choose **Idempotency Log** from the action bar

## WasAlreadySent Behavior During Retry

When a Job Queue task fails mid-run (e.g., a network error after processing 50 of 100 records):

- On retry, the framework re-processes all 100 records
- For the 50 records that already have idempotency log entries, `WasAlreadySent = true` — those API calls are skipped
- For the remaining 50 records without entries, the API calls proceed normally

This ensures the retry completes the run without duplicating records that were already sent.

## Troubleshooting

### Records Are Being Skipped Unexpectedly

The idempotency log has an entry for these records from a prior run. If you need to force a re-send:

1. Open the **Idempotency Log** for the integration
2. Delete the entries for the records you want to re-send
3. Re-run the export

### Idempotency Log Is Not Being Created

Confirm **Use Idempotency** is enabled on the REST API Endpoint Card. Also verify the API calls are completing successfully — failed calls do not create idempotency log entries.

### Records Not Re-Sent After Data Change

If you want changed records to be re-sent, use the **Primary Key + Hash** strategy instead of **Primary Key** alone.

## See Also

- [How to Use Identity Registry](how-to-identity-registry.md)
- [How to Set Up REST API Import](how-to-rest-api-import.md)
- [How to Use Background Processing](how-to-background-processing.md)
- [REST API Endpoint Card](page-rest-api-endpoint-card.md)

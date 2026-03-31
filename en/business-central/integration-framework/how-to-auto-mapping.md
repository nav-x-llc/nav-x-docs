# How to Use Auto-Mapping

This guide explains how to use the Auto-Map Engine to automatically suggest field mappings between your source data and Business Central table fields, reducing manual mapping effort when setting up a new integration.

## What Is Auto-Mapping?

The Auto-Map Engine compares the field names in your source data against the field names of the target BC table and suggests the most likely matches. Suggestions are ranked by confidence, color-coded for quick review, and presented in a preview page where you can accept, change, or reject each suggestion before it is applied.

Auto-mapping does not modify your integration configuration until you explicitly accept suggestions — it is always a preview-and-confirm workflow.

**Auto-mapping is used in two places:**

1. **Integration Setup Wizard** (Step 5) — automatically triggered after field discovery
2. **Auto-Map action** on the Integration Fields page — available at any time on an existing integration

## Matching Strategies

The Auto-Map Engine applies several strategies in order, stopping at the first match found for each source field:

| Strategy | Description | Example |
| --- | --- | --- |
| **Exact** | Source field name matches BC field name exactly (case-insensitive) | `"CustomerNo"` → `Customer No.` |
| **Normalized** | Punctuation, spaces, and underscores are stripped before comparison | `"customer_no"` → `Customer No.` |
| **Token** | Both names are split into words and matched token by token | `"CustPostingGroup"` → `Customer Posting Group` |
| **Abbreviation Expansion** | Common abbreviations are expanded before comparison | `"Qty"` → `Quantity`, `"Amt"` → `Amount`, `"Desc"` → `Description` |
| **Levenshtein Distance** | Edit distance similarity — catches minor typos and near-matches | `"Adress"` → `Address` |

The resulting match is assigned a **confidence score** (0–100) based on which strategy matched and how closely.

## Confidence Color Coding

| Color | Score Range | Meaning |
| --- | --- | --- |
| Green | 80–100 | High confidence — safe to accept without review |
| Yellow | 50–79 | Medium confidence — review before accepting |
| Red | 1–49 | Low confidence — likely incorrect; change or skip |
| Gray | 0 | No match found; field will remain unmapped |

## Running Auto-Map on an Existing Integration

1. Open the **Integration** record
2. Choose **Fields** to open the **Integration Fields** page
3. Choose **Auto-Map** from the action bar
4. The **Auto-Map Preview** page opens, showing all source fields with their suggested BC field mappings

### Using the Auto-Map Preview Page

The preview page shows one row per source field:

| Column | Description |
| --- | --- |
| **Source Field** | The field name from your source data |
| **Suggested BC Field** | The BC table field suggested by the Auto-Map Engine |
| **Confidence** | The color-coded confidence score |
| **Action** | **Accept**, **Change**, or **Skip** |
| **Already Mapped** | A checkmark if this field already has a mapping in the integration (these are excluded from auto-mapping by default) |

### Accepting, Changing, and Skipping

- **Accept** (default for green/yellow suggestions) — the suggested mapping is applied when you confirm
- **Change** — click the **Suggested BC Field** cell to pick a different BC field from a lookup
- **Skip** — the source field is excluded from mapping; no field mapping is created for it

Use **Accept All** to accept every suggestion in one step, or **Skip All Low Confidence** to automatically skip all red suggestions and let you review only the green and yellow ones.

### Applying the Mappings

When satisfied with the preview, choose **Apply Mappings**. The framework creates or updates field mappings for all accepted suggestions. Skipped fields are left without mappings.

## Built-In Abbreviation Expansions

The engine recognizes 24 built-in abbreviations when matching:

| Abbreviation | Expands to |
| --- | --- |
| `No` | `Number` |
| `Qty` | `Quantity` |
| `Amt` | `Amount` |
| `Desc` | `Description` |
| `Addr` | `Address` |
| `Tel` | `Telephone` |
| `Fax` | `Fax No.` |
| `Cust` | `Customer` |
| `Vend` | `Vendor` |
| `Curr` | `Currency` |
| `Dept` | `Department` |
| `Loc` | `Location` |
| `Inv` | `Invoice` |
| `Purch` | `Purchase` |
| `Prod` | `Production` |
| `Ref` | `Reference` |
| `Doc` | `Document` |
| `Gen` | `General` |
| `Bus` | `Business` |
| `Post` | `Posting` |
| `Grp` | `Group` |
| `Stat` | `Status` |
| `Sys` | `System` |
| `Ext` | `External` |

These are applied bidirectionally — `"CustNo"` matches `Customer No.`, and `"CustomerNo"` also matches because `Customer` contracts to `Cust`.

## Configuring the Confidence Threshold

You can adjust the minimum confidence score below which suggestions are not shown (or are automatically marked as Skip):

1. Open **Integration Framework Setup** (via **Setup** on the Integrations page)
2. Set **Auto-Map Min Confidence** to the desired threshold (default: `30`)
3. Suggestions below this score are shown in gray and marked as Skip by default

## Re-Running Auto-Map

Auto-mapping can be run at any time on an existing integration — for example, after your source data structure changes and new fields are added. Re-running only proposes mappings for unmapped fields (fields that already have a mapping are excluded). To re-map an already-mapped field, delete its existing mapping first.

## See Also

- [How to Use the Setup Wizard](how-to-setup-wizard.md)
- [How to Set Up Field Mappings](how-to-field-mappings.md)
- [Integration Fields Page](page-integration-fields.md)

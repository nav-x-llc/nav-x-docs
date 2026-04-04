# Use Copilot to Create Commission Rates

[!include[signup-tenant](includes/signup-tenant.md)]

NAV-X Commission Management includes a Copilot integration that allows you to describe a commission rate structure in natural language and have Copilot generate a draft commission rate for your review.

> [!NOTE]
> The Copilot feature for commission rates is currently in preview. Always review the proposed rates before saving them.

## Using Copilot to Draft a Commission Rate

1. Open the **Commission Rates** page for a salesperson, salesperson group, or customer. You can access this from the salesperson card, customer card, or by choosing the ![Tell me what you want to do](/images/magnifying-glass.gif) icon and entering **Commission Rates**.
2. Choose the **Draft with Copilot** action.
3. In the prompt dialog that opens, describe the commission rate you want to create. For example:
   - *Create a 5% commission rate for all customers*
   - *Create a commission rate for salesperson JOE where they get 3% on items in category HARDWARE*
   - *Create a tiered rate where the salesperson gets 2% on the first $50,000 and 4% on sales above $50,000*
4. Choose **Generate** to have Copilot propose the rate.
5. Review the proposed rate in the **Proposed Rates** panel. All fields are editable — you can adjust any values before accepting.
6. Choose **Keep it** to save the proposed rates to the Commission Rates page, or **Discard** to cancel.

## Tips for Writing Effective Prompts

The prompt dialog includes a **Prompt Guide** with example prompts to help you get started:

- **Create Commission Rate for Salesperson** — generates a basic rate scoped to a specific salesperson

For best results, include the following details in your prompt:

- The commission percentage or fixed amount
- The salesperson, customer, or item scope (if applicable)
- Any date ranges for when the rate should be valid
- Whether the rate is tiered and what the tier thresholds are

> [!TIP]
> Copilot works best with clear, specific language. If the initial proposal is not quite right, you can edit any field in the Proposed Rates panel before keeping the rate, or discard and try a more specific prompt.

## See Also

- [Commission Rate Setup](commission-rate-setup.md)
- [Commission Rates](page-commission-rates.md)
- [Salesperson Setup](salesperson-setup.md)

# Test Payment Methods

You received a test merchant account in addition to your live merchant account credentials. The test merchant account information can be used in a sandbox environment for testing purposes. You can use different credit cards in the test environment to simulate different credit card behavior, such as declined cards. The following shows a list of different credit cards and bank accounts that you can use.

## Credit Cards

| Card Number      | Expiration | CVV2 Code | Notes                                                     |
|------------------|:----------:|:---------:|-----------------------------------------------------------|
| 4000100011112224 | 09/22      | 123       | Address: Match & 5 Digit Zip: Match                       |
| 4000100111112223 | 09/22      | 321       | Address: Match & 9 Digit Zip: Match                       |
| 4000100211112222 | 09/22      | 999       | Address: No Match & 5 Digit Zip: Match                    |
| 4000100311112221 | 09/22      | 999       | Address: No Match & 9 Digit Zip: Match                    |
| 4000100411112220 | 09/22      | 999       | Address: Match & 5 Digit Zip: No Match                    |
| 4000100511112229 | 09/22      | 999       | Address: No Match & 5 Digit Zip: No Match                 |
| 4000100611112228 | 09/22      | 999       | Card Number Not On File                                   |
| 4000100711112227 | 09/22      | 999       | Address Information not verified for domestic transaction |
| 4000100811112226 | 09/22      | 999       | Retry / System Unavailable                                |
| 4000100911112225 | 09/22      | 999       | Service Not Supported                                     |
| 4000101011112222 | 09/22      | 999       | Address Verification Not Allowed For Card Type            |
| 4000101111112221 | 09/22      | 999       | Global Non-AVS participant                                |
| 4000101211112220 | 09/22      | 999       | International Address: Match & Zip: Not Compatible        |
| 4000101311112229 | 09/22      | 999       | International Address: Match & Zip: Match                 |
| 4000101411112228 | 09/22      | 999       | International Address: No Compatible & Zip: Match         |
| 4000101511112227 | 09/22      | 999       | Address: No Match & 5 Digit Zip: No Match                 |
| 4000101611112226 | 09/22      | 999       |                                                           |
| 4000200011112222 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 4000200111112221 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 4000200211112220 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 4000200311112229 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 4000200411112228 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 4000200511112227 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 5555444433332226 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 5555444433332234 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 5555444433332242 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 5555444433332259 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 5555444433332267 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 5555444433332275 | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 2223000048400011 | 09/22      | Any       | Address: Match & 5 Digit Zip: Match                       |
| 371122223332225  | 09/22      | any       | Address: Match & 5 Digit Zip: Match                       |
| 371122223332241  | 09/22      | any       | CVV2 No Match (Decline)                                   |
| 4000300011112220 | 09/22      | 999       | Declined                                                  |
| 4000300001112222 | 09/22      | 999       | Pickup Card                                               |
| 4000300211112228 | 09/22      | 999       | Do not Honor                                              |
| 4000300311112227 | 09/22      | 999       | Invalid Transaction                                       |
| 4000300411112226 | 09/22      | 999       | Invalid Issuer                                            |
| 4000300511112225 | 09/22      | 999       | Unable to locate Record                                   |
| 4000300611112224 | 09/22      | 999       | Insufficient funds                                        |
| 4000300711112223 | 09/22      | 999       | Invalid Pin                                               |
| 4000300811112222 | 09/22      | 999       | Transaction Not Permitted                                 |
| 4000300911112221 | 09/22      | 999       | Restricted Card                                           |
| 4000301011112228 | 09/22      | 999       | Excess withdrawal count                                   |
| 4000301111112227 | 09/22      | 999       | Allowable number of pin tries exceeded                    |
| 4000301211112226 | 09/22      | 999       | No checking account                                       |
| 4000301311112225 | 09/22      | 999       | Declined for CVV failure                                  |

## Bank Accounts

| Routing   | Account | Amount     | Notes                               |
|:---------:|:-------:|-----------:|-------------------------------------|
| 987654321 | Any     | Any        | Invalid routing Number              |
| Any       | Any     | 5.99       | Returned check for this account     |
| Any       | Any     | 9999999.99 | Transaction exceeds maximum amount. |

> [!NOTE]
> Any other combination of 9 digit routing number and account number will return an approval.

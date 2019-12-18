# Release Notes for November 2019 Update - Version 2.1.2

## New Features

### Turn off Address Verification

You can now choose to not use Address Verification for your credit card processing. While it will still do the address verification on the gateway, if it is enabled with the gateway, it will not react to the results in Business Central anymore. Read more on [setting up Credit Card](../credit-card-setup.md#general).

### Address Verification Response

You can now define, what response is considered a success and when the address verification is considered a failure. This will allow you to determine more granularly when you have to take action and when the transaction should go through. Read more on [setting up Credit Card](../credit-card-setup.md#general).

### No re-authorization for small total amount changes

When the order amount changes, a new authorization was required, even if the change was small. This has been changed to allow the authorization to be valid, even if the amount has changed. Read more on [setting up Credit Card](../credit-card-setup.md#authorization).

### Credentials

We have changed the way that we store credit card credentials. We no longer have a separate set for test and for live credentials. The credentials are also shown now so that it is easier to determine, if the credentials were entered correctly. Read more on [setting up Credit Card](../credit-card-setup.md#connection).

### Payment Services

We removed the integration with **Payment Services**. This was used to upload invoices to the portal for customers to be able to pay those via the customer portal. As of now, all invoices will be uploaded, unless they are paid with credit card already. We made this change to simplify the setup and to prepare for the next version, in which we will release a more granular setup ability for this functionality.

### Status fields

We added status fields to the Sales and Service documents to make it easier for you to see the status of credit card transactions. For instance, you can now see directly from the **General** tab on a document, if the card is authorized or the amount was captured already. Additionally, it also shows the last error that appeared directly in the same area as well.

### Features

We have added a new setup to the **Credit Card Setup** as well as the **Assisted Setup** Wizard to enable or disable fields on the different pages. This allows for a cleaner look and less clutter on your pages. Read more on [setting up Credit Card](../credit-card-setup.md#features).

## See Also

- [How to update my extensions](../faq-index.md#i-want-to-update-my-version-of-nav-x-credit-card)

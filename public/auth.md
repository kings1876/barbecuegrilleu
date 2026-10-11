# Auth.md

Barbecue Grill Co. — Barbecue Grill Retailer

## Agent Registration
No authentication or registration is required to browse or cite public content on barbecuegrilleu.com. All product, category, and content pages are publicly accessible.

## Public Resources
| Resource | URL |
|---|---|
| Homepage | https://barbecuegrilleu.com/ |
| Shop | https://barbecuegrilleu.com/shop/ |
| Product Catalog (llms.txt) | https://barbecuegrilleu.com/llms.txt |
| API Catalog | https://barbecuegrilleu.com/.well-known/api-catalog |
| Agent Skills | https://barbecuegrilleu.com/.well-known/agent-skills/index.json |
| MCP Server Card | https://barbecuegrilleu.com/.well-known/mcp/server-card.json |

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
```

## Ordering
Orders placed through the order form are drafted, not completed automatically. A human confirms payment and shipping by email before any order is fulfilled. Agents may not submit payment on a user's behalf.

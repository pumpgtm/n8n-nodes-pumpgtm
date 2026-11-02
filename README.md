# n8n-nodes-pumpgtm

The [PumpGTM](https://pumpgtm.com) node for [n8n](https://n8n.io). PumpGTM finds buyers, runs LinkedIn, email and X outreach, and answers replies from your AI. This node lets an n8n workflow, or an n8n AI Agent, work inside your PumpGTM workspace.

## Installation

In n8n, open **Settings > Community nodes**, click **Install**, and enter `n8n-nodes-pumpgtm`. See the [n8n community nodes guide](https://docs.n8n.io/integrations/community-nodes/installation/) for details.

## Credentials

1. Sign in at [app.pumpgtm.com](https://app.pumpgtm.com) and open the **API key** page.
2. Copy the workspace key (it starts with `eve_mcp_`).
3. In n8n, create a **PumpGTM API** credential and paste the key. n8n sends it as `Authorization: Bearer <key>`.

PumpGTM is a paid product (plans from $75/month after a trial).

## Operations

- **Sequence**: Get Many, Add Leads
- **Lead**: Get Many (search, stage filter, limit)
- **Report**: Get Progress, Get Funnel
- **Reply**: Get Many (pending replies with drafts), Decide (send, snooze, dismiss, book and more)
- **Person**: Enrich by email or LinkedIn URL, optionally finding a work email or X account

Every operation also works as a tool for the n8n AI Agent node.

## Resources

- [PumpGTM REST API docs](https://pumpgtm.com/docs/api)
- [OpenAPI spec](https://pumpgtm.com/openapi.json)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

## Support

hello@pumpgtm.com

# n8n IT Helpdesk Automation | Ticket Triage & Escalation

**Portfolio learning project** demonstrating how an IT team could turn incoming support requests into structured, prioritized tasks. Created as a public example; **not a claimed client delivery or production deployment**.

## Problem

IT support requests often arrive in different formats. Before a technician can act, the team needs to identify the affected service, business impact, urgency and appropriate support queue.

## Solution

An importable **n8n workflow** that runs with five synthetic support tickets, classifies each ticket with transparent JavaScript rules, assigns an illustrative response target, and routes P1 incidents to a separate escalation branch.

~~~mermaid
flowchart LR
    A[Manual Trigger] --> B[Five Fictional Tickets]
    B --> C[Validate, Classify & Route]
    C --> D{P1 escalation?}
    D -->|Yes| E[Escalation Output]
    D -->|No| F[Standard Queue Output]
~~~

### Workflow features

- **n8n Manual Trigger** to run a credential-free demo.
- **Code nodes** for sample data generation, routing rules and escalation messages.
- **IF branching** between urgent escalation and routine IT queues.
- Classifies requests as **P1 / P2 / P3**, using outage impact, access blockers and security keywords.
- Routes to **Security Escalation, Identity & Collaboration, Network Support, Endpoint Support**, or **General IT**.
- Outputs **illustrative SLA targets**, routing notes and recommended next action.
- Includes the same classification logic as a standalone, inspectable JavaScript module, with representative tests.
- No real email, alert, ticketing or external API calls are made.

## Files

| File | Purpose |
| --- | --- |
| [n8n-workflow.json](n8n-workflow.json) | Import into the n8n editor |
| [triage.js](triage.js) | Readable JavaScript classification rules |
| [tests/triage.test.cjs](tests/triage.test.cjs) | Unit tests using Node.js built-in assert |

## Try the workflow

1. Download **[n8n-workflow.json](n8n-workflow.json)**.
2. In your own n8n editor, create or open a workflow and use **Import from File**.
3. Run the **Manual Trigger**.
4. Inspect the outputs from **Classify and Route**, **Escalation Output** and **Standard Queue Output**.
5. Edit the fictional examples in **Create Demo Tickets** to try other categories and priorities.

**Expected outcomes from the five included examples:** 2 P1 tickets, 1 P2 ticket and 2 P3 tickets.

To run JavaScript tests locally:

~~~bash
node --test tests/triage.test.cjs
~~~

Or simply run the test file with Node.js:

~~~bash
node tests/triage.test.cjs
~~~

The workflow JSON is provided as an importable template. The JavaScript classification cases were checked independently; **the imported workflow has not yet been verified against a running n8n instance**.

## Example outputs

| Ticket | Scenario | Priority | Queue |
| --- | --- | --- | --- |
| DEMO-001 | Team-wide Outlook outage | P1 | Identity & Collaboration |
| DEMO-002 | Account access denied | P2 | Identity & Collaboration |
| DEMO-003 | Printer issue | P3 | Endpoint Support |
| DEMO-004 | Suspicious phishing message | P1 | Security Escalation |
| DEMO-005 | Slow Wi-Fi at one desk | P3 | Network Support |

## Practical next steps for a real environment

- Replace the manual trigger with an **authenticated form or webhook**.
- Connect an approved ticketing system (or Google Sheets) to store support requests.
- Configure authorized notifications for urgent cases.
- Replace the **illustrative** response targets with the employer's actual SLA.
- Add an **optional OpenAI-assisted summarization / suggested response draft** stage. AI-generated suggestions should be reviewed by a person and must not authorize password resets or access changes.
- Add access control, input validation, privacy handling, retries and audit logging before production use.

## Important distinctions

- Classification here is **rule-based JavaScript, not AI**.
- OpenAI is described as a possible extension; this workflow does **not** currently call the OpenAI API.
- The included cases are **fictional** and contain no customer information.
- P1/P2/P3 and target response times are portfolio examples, not employer promises.
- Do not publish client data, credentials, proprietary workflows, tokens or internal hostnames.

This project complements [my IT Support Troubleshooting Playbook](../../docs/it-support-troubleshooting-playbook.md) and [support-ticket template](../../docs/support-ticket-template.md).

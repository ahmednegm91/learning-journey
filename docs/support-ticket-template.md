# IT Support Ticket Template

A reusable **sample ticket format** for end-user and remote IT support. The example below is fictional and is included to show a clear documentation workflow.

## Blank template

| Field | Details |
| --- | --- |
| Ticket ID | |
| Date / time opened | |
| Contact channel | |
| Requested by | Use a safe internal reference, not public personal details |
| Category | Hardware / Windows / Network / Identity / Microsoft 365 / Google Workspace / Other |
| Priority | Based on business impact and urgency |
| Affected service | |
| Users affected | |
| Symptoms / error message | |
| Steps to reproduce | |
| Diagnostics performed | |
| Findings | Separate confirmed facts from hypotheses |
| Resolution or workaround | |
| Access changes approved by | If relevant |
| Validation | How the fix was checked |
| Status | Open / In progress / Waiting / Escalated / Resolved |
| Next action / owner | |
| Date / time closed | |

## Example: shared-folder access issue (fictional)

**Ticket:** DEMO-001  
**Priority:** Medium  
**Category:** Identity / file permissions  
**Issue:** A newly onboarded employee can sign in but cannot open a shared team folder.

**Troubleshooting notes**

1. Confirmed the employee could sign in to their account.
2. Checked whether the issue affected only this folder.
3. Reviewed the requested access and approved group membership.
4. Identified that the account was missing the required team group.
5. After approval, the administrator assigned the approved group.
6. Asked the employee to retry and confirmed that access worked.

**Resolution:** Approved group membership corrected.  
**Follow-up:** Review the onboarding checklist to reduce similar access tickets.

## Good ticket-writing practices

- Use short, factual descriptions.
- State what was tested and what the result was.
- Keep a clear distinction between a symptom, probable cause, and verified root cause.
- Avoid exposing passwords, tokens, confidential screenshots, or client data.
- Document authorization and handoffs for changes to security or access.

Related reference: [IT Support Troubleshooting Playbook](./it-support-troubleshooting-playbook.md).

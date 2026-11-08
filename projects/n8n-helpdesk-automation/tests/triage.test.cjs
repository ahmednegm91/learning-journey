const assert = require('node:assert/strict');
const { classifyTicket } = require('../triage.js');
const examples = [
  {
    "ticketId": "DEMO-001",
    "subject": "Outlook service unavailable",
    "description": "Office staff cannot access Outlook; service outage",
    "category": "m365",
    "affectedUsers": 40
  },
  {
    "ticketId": "DEMO-002",
    "subject": "Account access denied",
    "description": "New colleague cannot access shared drive",
    "category": "account",
    "affectedUsers": 1
  },
  {
    "ticketId": "DEMO-003",
    "subject": "Printer not responding",
    "description": "Printer is slow",
    "category": "hardware",
    "affectedUsers": 1
  },
  {
    "ticketId": "DEMO-004",
    "subject": "Suspicious phishing message",
    "description": "User reported a phishing email",
    "category": "security",
    "affectedUsers": 1
  },
  {
    "ticketId": "DEMO-005",
    "subject": "Wi-Fi slow",
    "description": "One desk has slow wireless connectivity",
    "category": "network",
    "affectedUsers": 1
  }
];
const expected = ["P1","P2","P3","P1","P3"];
examples.forEach((ticket, index) => {
  const output = classifyTicket(ticket);
  assert.equal(output.priority, expected[index]);
  assert.ok(output.queue);
  assert.ok(output.slaHours > 0);
});
assert.equal(classifyTicket(examples[0]).needsEscalation, true);
assert.equal(classifyTicket(examples[2]).needsEscalation, false);
console.log('Passed: 5 representative ticket cases and routing assertions');

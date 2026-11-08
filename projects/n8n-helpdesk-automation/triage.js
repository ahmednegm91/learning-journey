/**
 * Reusable support ticket triage rules from the n8n portfolio demo.
 * Illustrative SLA targets; not a production SLA or evidence of client work.
 */
function classifyTicket(ticket) {
  const subject = String(ticket.subject || "").trim();
  const description = String(ticket.description || "").trim();
  if (!subject && !description) throw new Error("Ticket must contain a subject or description");
  const category = String(ticket.category || "general").trim().toLowerCase();
  const affectedUsers = Math.max(1, Math.floor(Number(ticket.affectedUsers) || 1));
  const content = (subject + " " + description).toLowerCase();
  const isSecurity = /\b(phishing|malware|ransomware|compromised|data breach|suspicious sign-in)\b/.test(content);
  const isOutage = /\b(outage|system down|service down|offline|unavailable)\b/.test(content);
  const accessBlocked = /\b(cannot log in|can't log in|unable to sign in|locked out|access denied|permission denied|cannot access)\b/.test(content);
  const priority = isSecurity || (isOutage && affectedUsers >= 5) ? "P1" : isOutage || accessBlocked || affectedUsers >= 5 ? "P2" : "P3";
  let queue = "General IT";
  if (isSecurity) queue = "Security Escalation";
  else if (/\b(account|identity|outlook|email|m365|microsoft 365|google workspace|drive|access)\b/.test(category + " " + content)) queue = "Identity & Collaboration";
  else if (/\b(network|wifi|wi-fi|dns|vpn|internet|router)\b/.test(category + " " + content)) queue = "Network Support";
  else if (/\b(laptop|desktop|windows|printer|hardware|endpoint)\b/.test(category + " " + content)) queue = "Endpoint Support";
  const slaHours = { P1: 1, P2: 4, P3: 24 }[priority];
  const nextAction = isSecurity
    ? "Escalate immediately to security team; do not reset credentials without verification."
    : priority === "P1" ? "Notify on-call IT lead and begin incident coordination."
    : priority === "P2" ? "Assign to support queue and confirm business impact."
    : "Add to standard queue and acknowledge receipt.";
  return {
    ticketId: String(ticket.ticketId || "UNASSIGNED"),
    subject: subject || "(no subject)",
    category, affectedUsers, priority, queue, slaHours,
    needsEscalation: priority === "P1",
    reason: isSecurity ? "Security keywords detected" : isOutage ? "Potential service outage" : accessBlocked ? "User cannot access a service" : affectedUsers >= 5 ? "Multiple users affected" : "Standard support request",
    nextAction,
    classificationMethod: "Transparent rule-based demo; requires human validation"
  };
}

module.exports = { classifyTicket };

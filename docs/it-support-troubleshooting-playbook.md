# IT Support Troubleshooting Playbook

A practical reference for handling common remote and on-site IT support requests. This is a **sample workflow and technical reference**, not a record of any particular employer or client incident.

## 1. Triage the request

Before making changes, collect:
- The **symptom** and the exact error message (if any).
- When the issue began and whether it happens consistently.
- Affected users, devices, applications, and locations.
- The impact on the user's work and whether a workaround exists.
- Device operating system, connectivity type, and relevant recent changes.

Prioritize incidents by **impact and urgency**, not simply arrival order. Confirm the user's identity before changing access permissions or resetting credentials.

## 2. Windows device and application issues

| Check | What to look for |
| --- | --- |
| Power and peripherals | Power, monitor, cables, docking station, keyboard, network adapter |
| System health | Storage availability, resource usage, updates, Event Viewer |
| User vs. device scope | Does the problem follow the user account or the device? |
| Application scope | Is the issue limited to one app, user profile, or service? |
| Recent changes | New software, updates, configuration changes, security policies |

**Useful read-only commands (Windows):**

~~~powershell
# Windows version and system information
systeminfo

# Network adapter, IP address, DHCP, DNS
ipconfig /all

# DNS name lookup
nslookup example.com

# Basic connectivity to a service over HTTPS
Test-NetConnection example.com -Port 443
~~~

Run commands only on devices you are authorized to support. Record results before making configuration changes.

## 3. Diagnose network and Wi-Fi issues

1. **Physical / Wi-Fi:** Check link status, wireless connection, signal, and whether other devices are affected.
2. **IP configuration:** Inspect IP address, subnet mask, default gateway, and DNS servers with **ipconfig /all**.
3. **Local connectivity:** Test the default gateway. A blocked ping alone does not prove a device is down.
4. **DNS:** Use **nslookup** to distinguish name-resolution problems from connectivity problems.
5. **Service access:** Test the application's required hostname and port with **Test-NetConnection**.
6. **Escalation:** If several users or sites are affected, record the scope and escalate to the network or service owner.

Do not reset adapters, change firewall rules, or clear security settings without approval and a recovery plan.

## 4. Microsoft 365: account and access checks

**For an authorized administrator:**
- Confirm the user account is active and the correct identity is being used.
- Check the assigned license and whether the affected service is included.
- Review group membership and permissions relevant to the request.
- Check service health when an issue affects multiple employees.
- For Outlook or Teams problems, distinguish sign-in errors, client issues, and service-side problems.
- Verify identity and follow the organization's process before any password reset or MFA change.

**Escalate when:** the issue requires tenant-wide policy changes, security investigation, or privileges you do not have.

## 5. Google Workspace: account and collaboration checks

**For an authorized administrator:**
- Verify the user's status and organizational unit.
- Check Google Group membership and the relevant Drive or shared-drive permissions.
- Confirm whether the issue concerns a specific file, account, or broader service.
- Distinguish blocked sign-in, multifactor authentication, and app-specific errors.
- Use the organization's approved identity-verification and recovery process.

**Principle:** grant the minimum access needed for the task and remove temporary privileges when no longer required.

## 6. Active Directory: user administration checklist

- Confirm the correct account, domain, and requested change.
- Check account status and applicable group memberships.
- Obtain authorization for access modifications or credential resets.
- Document what changed and why.
- Test the user's intended access after the change.

Never request or record a user's password in a support ticket.

## 7. Linux: initial health checks

~~~bash
# Free disk space
df -h

# Memory summary
free -h

# Failed services (systemd)
systemctl --failed

# Recent high-priority logs for the current boot
journalctl -p err -b -n 25
~~~

Use read-only diagnostics first. Escalate before editing service configuration or restarting production services.

## 8. Close the ticket properly

A complete ticket should contain:
1. Clear user impact and system details.
2. Troubleshooting steps and relevant results.
3. The resolution, workaround, or escalation decision.
4. User confirmation (when applicable).
5. Preventive follow-up or knowledge-base reference.

Use the companion [Support Ticket Template](./support-ticket-template.md) to document a case consistently.

---

**Security note:** Never put employer/client names, personal data, passwords, tokens, internal IP addresses, or private screenshots in a public GitHub repository.

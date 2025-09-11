---
title: Organizational Security Operations
slug: /security/organization
authors: [philipp]
---

## Overview

This document distills practical, organization-wide security operations guidance into clear priorities, roles, processes, and controls. It focuses on prevention first, rapid detection and response second, and continuous improvement throughout. It is intended as a living document to be adapted to our evolving security posture.

## How to use this document

- Use the Table of Contents to jump to areas like Identity, AppSec, or Incident Response.
- Start with Core Pillars and Maturity Milestones to set priorities.
- Checklists can be copied into quarterly plans and audits.

## Table of Contents

- [Overview](#overview)
- [How to use this document](#how-to-use-this-document)
- [Security Objectives](#security-objectives)
- [Governance and Roles](#governance-and-roles)
- [Core Pillars](#core-pillars)
- [Maturity Milestones](#maturity-milestones-crawl--walk--run)
- [Checklists](#checklists)
- [Metrics and Reporting](#metrics-and-reporting)
- [Incident Response Workflow](#incident-response-workflow-high-level)
- [Continuous Improvement](#continuous-improvement)
- [Incident Playbooks](#incident-playbooks-examples)
- [Severity and Response SLAs](#severity-and-response-slas)
- [Practical Templates](#practical-templates)
- [Logging and Detection Baseline](#logging-and-detection-baseline)
- [CI/CD Security Gates](#cicd-security-gates-examples)
- [Vendor and Third-Party Checklist](#vendor-and-third-party-checklist)
- [People Processes](#people-processes)
- [Example Artifacts](#example-artifacts)

## Security Objectives

- **Protect** people, data, systems, and business continuity.
- **Reduce** the likelihood and impact of security incidents.
- **Comply** with legal, regulatory, and contractual obligations.
- **Build** a culture of secure-by-default engineering and operations.

## Governance and Roles

- **Executive Sponsor**: Accountable for the security program's success, direction, and funding. This role champions security at the highest levels and ensures it aligns with business objectives.
- **Security Leadership**: Defines and directs the security strategy. This includes creating policies, managing risk, selecting tools, and reporting on the program's effectiveness to the executive sponsor.
- **Engineering Leads**: Implement secure development lifecycle (SDLC) practices, secure infrastructure, and developer-focused security tooling.
- **IT Operations**: Manages identity, access, device, and network security controls.
- **Incident Response (IR) Team**: A designated team responsible for preparing for and responding to security incidents, including detection, containment, eradication, and recovery.
- **Data Owners**: Responsible for classifying data, approving access requests, and defining retention policies for the data they own.
- **All Employees**: Have a responsibility to follow security policies, complete training, and report incidents or suspicious activity promptly.

## Core Pillars

### 1) Identity and Access Management (IAM)

- **Single Sign-On (SSO) with Multi-Factor Authentication (MFA)**: Mandate SSO with [MFA](https://en.wikipedia.org/wiki/Multi-factor_authentication) for all accounts. SSO simplifies access and reduces password fatigue, while MFA adds a critical layer of protection against credential theft. For example, even if a password is stolen, an attacker cannot log in without the second factor (e.g., a code from a phone app).
- **Least-Privilege Access (RBAC)**: Grant access based on roles, providing only the minimum permissions necessary for a job function. A developer, for instance, should not have access to financial records. This principle, known as Role-Based Access Control (RBAC), limits the potential damage from a compromised account.
- **Just-in-Time (JIT) Privileged Access**: Provide temporary, auto-expiring access for sensitive tasks. Instead of permanent admin rights, an engineer can request elevated permissions for a specific database task, which are automatically revoked after a short, pre-defined period. This is logged and requires approval.
- **Access Reviews and Automated Deprovisioning**: Conduct regular (e.g., quarterly) reviews of who has access to what. This process, combined with automated workflows to remove access immediately when someone leaves or changes roles, prevents the accumulation of unnecessary privileges.

### 2) Endpoint and Device Security

- **Managed Device Baseline**: Enforce a security baseline for all corporate devices, including full-disk encryption to protect data if a device is lost, an automatic screen lock to prevent unauthorized access, and OS auto-updates to patch vulnerabilities promptly.
- **Endpoint Detection and Response (EDR/XDR)**: Deploy and monitor an EDR (or XDR) solution on all endpoints. These tools provide deep visibility into system activity, helping to detect, investigate, and respond to threats like malware and unauthorized access. Where feasible, block unauthorized USB device usage.
- **Mobile Device Management (MDM)**: Use standard device images and MDM to enforce policies. For high-risk roles, implement application allowlists to restrict software to only approved, necessary applications.

### 3) Network and Cloud Security

- **Zero Trust Networking**: Operate on a "never trust, always verify" principle. Restrict all inbound exposure by default and prefer private, authenticated, and encrypted links over public internet access.
- **Segmentation**: Isolate networks to limit lateral movement. For example, the production environment should be strictly segregated from development and staging environments.
- **Secure Cloud Foundations**: Implement preventative guardrails (e.g., AWS SCPs, Azure Policy), enforce detailed logging, use secure defaults like [IMDSv2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html) in AWS, and use hardened, minimal machine images.
- **Edge Protection**: Deploy a Web Application Firewall (WAF) and DDoS protection for all public-facing services. Automate certificate management to ensure universal and up-to-date TLS encryption.

### 4) Application Security

- **Secure SDLC**: Integrate security into every phase of the software development lifecycle, starting with threat modeling and defining security requirements during the design phase.
- **Dependency Management**: Pin dependency versions to prevent unexpected changes. Use Software Composition Analysis (SCA) tools to find known vulnerabilities in libraries, and employ bots (like Renovate or Dependabot) to automate updates.
- **Automated Scanning**: Integrate security scanning directly into the CI/CD pipeline. This includes [SAST](https://en.wikipedia.org/wiki/Static_application_security_testing) for static code analysis, secret scanning to find leaked credentials, and [IaC](https://en.wikipedia.org/wiki/Infrastructure_as_code) scanning to detect cloud misconfigurations before deployment.
- **Dynamic and Manual Testing**: Use Dynamic Application Security Testing (DAST) tools to scan running applications for vulnerabilities. Conduct manual security reviews and penetration tests for critical services and major changes.

### 5) Data Security and Privacy

- **Data Classification and Handling**: Establish a data classification policy (e.g., Public, Internal, Confidential) and handling standards for each level. Practice data minimization by collecting and retaining only what is necessary.
- **Encryption**: Encrypt all data in transit (e.g., with TLS 1.2+) and at rest (e.g., AES-256). Use a managed Key Management Service ([KMS](https://cloud.google.com/kms)) or Hardware Security Module ([HSM](https://en.wikipedia.org/wiki/Hardware_security_module)) to protect encryption keys.
- **Backups and Recovery**: Maintain regular, automated backups of critical data. Crucially, conduct periodic restore tests to ensure the backups are viable. For the most critical data, use immutable storage to protect against ransomware.
- **Privacy by Design**: Embed privacy controls and considerations into the design of new systems and processes, including clear retention and deletion schedules.

### 6) Detection and Response

- **Centralized Logging and Alerting**: Aggregate logs, telemetry, and alerts from all systems (endpoints, cloud, apps) into a central platform ([SIEM](https://en.wikipedia.org/wiki/Security_information_and_event_management)) to enable comprehensive threat hunting and investigation.
- **Incident Playbooks and Exercises**: Develop defined, step-by-step playbooks for the most common incident types (e.g., phishing, malware). Conduct regular table-top exercises to practice and refine the response process.
- **On-Call and SLAs**: Establish a clear on-call rotation for the security/IR team, with well-defined severity levels and Service Level Agreements (SLAs) for response times.
- **Blameless Post-Incident Reviews**: After every incident, conduct a review focused on process and technology improvement, not on blaming individuals. The outcome should be a list of actionable remediation items with clear owners.

### 7) Third Parties and Supply Chain

- **Vendor Risk Management**: Assess the security posture of all vendors before engagement. Ensure contracts include security requirements, Data Processing Agreements (DPAs), and breach notification clauses. Request attestations like SOC2 or ISO 27001 where relevant.
- **Software Supply Chain Security**: Monitor package registries for malicious packages. Digitally sign all build artifacts to ensure their integrity and track their provenance from code to deployment.
- **Software Bill of Materials (SBOM)**: Maintain [SBOMs](https://www.cisa.gov/sbom) for all critical services to have a clear inventory of all software components and dependencies, which is invaluable for responding to new vulnerabilities.
- **Secure CI/CD**: Grant CI/CD pipelines and deployment keys the least-privilege access they need to function.

### 8) Security Culture and Training

- **Role-Based Training**: Provide security training tailored to different roles. For example, engineers receive secure coding training, while the finance team receives training on preventing invoice fraud.
- **Phishing Simulations**: Conduct regular, managed phishing simulations and provide immediate, constructive coaching to those who click, helping to build resilience.
- **Blameless Reporting and Communication**: Maintain clear, well-known channels for reporting suspicious activity, and foster a blameless culture that encourages reporting. Provide regular communications to the organization on top risks and security improvements.

## Maturity Milestones (crawl → walk → run)

- **Crawl: Foundational Controls.** The goal here is to establish basic visibility and preventative measures. Think of it as locking the doors and installing an alarm system. Key controls include MFA, EDR, central logging, backups, and basic CI scanning (SAST/secrets).
- **Walk: Proactive Defense.** The focus shifts to proactive measures, automating controls, and maturing detection capabilities. This is about building higher walls and having guards patrol them. Key controls include SSO everywhere, RBAC/JIT, IaC policies, SIEM alerts, tabletop exercises, and Data Loss Prevention (DLP).
- **Run: Advanced Resilience.** At this stage, security is deeply integrated and automated. The organization can withstand sophisticated attacks and recover quickly. This is a fortress with automated defenses and a well-drilled army. Key controls include zero trust networking, automated incident response, signed builds/SBOMs, and continuous penetration testing.

## Checklists

Use these checklists to plan and audit security efforts on a recurring basis.

### Executive and Governance

- [ ] Board/executive security sponsor named and active
- [ ] Security policy set approved, communicated, and versioned
- [ ] Security roadmap with quarterly objectives and KPIs exists
- [ ] Risk register is maintained with owners and due dates
- [ ] Budget is allocated for tools, headcount, and training

### Identity and Access Management

- [ ] SSO and MFA are mandated for all users and admins
- [ ] RBAC roles are defined; least privilege is enforced; no shared accounts
- [ ] Break-glass accounts are secured, tested, and monitored
- [ ] Access reviews are scheduled and completed quarterly
- [ ] Automated joiner/mover/leaver process is in place

### Endpoint and Device Security

- [ ] All corporate devices are enrolled in MDM with encrypted disks
- [ ] EDR/XDR is active and reporting for 100% of endpoints
- [ ] OS and browser auto-updates are enabled; patch SLA is defined
- [ ] High-risk roles use hardened profiles and app allowlists
- [ ] Device inventory is accurate and reconciled monthly

### Network and Cloud Security

- [ ] Internet exposure is minimized; WAF/CDN enabled on public services
- [ ] Segmentation between prod, staging, and dev is enforced
- [ ] Cloud guardrails are in place: SCPs/policies, least-privilege service roles, KMS
- [ ] Centralized VPC/VNet egress with filtering is used where possible
- [ ] Certificate automation (ACME) and TLS 1.2+ are used everywhere

### Application Security

- [ ] Security requirements and threat models exist for critical services
- [ ] CI runs SAST, secrets, SCA, IaC scanning with quality gates
- [ ] Dependencies are updated routinely; vulnerable packages are triaged quickly
- [ ] DAST is run against internet-facing apps; pentest cadence is defined for critical apps
- [ ] Secure code review is required for sensitive changes

### Data Security and Privacy

- [ ] Data is classified; handling rules are documented and enforced
- [ ] Encryption is used at rest and in transit; keys are rotated and access is logged
- [ ] Backups are verified by periodic restore tests; RPO/RTO is defined
- [ ] Data retention and deletion policies are implemented in systems
- [ ] Privacy impact assessments are conducted for new/changed data processing

### Detection and Response

- [ ] Logging is centralized for endpoints, apps, cloud, and network
- [ ] Alerts are monitored with an on-call rotation and escalation paths
- [ ] Incident runbooks exist for common scenarios (phishing, ransomware, key leak)
- [ ] Tabletop exercises are conducted at least twice per year
- [ ] Post-incident reviews produce tracked, owned actions

### Third Parties and Supply Chain

- [ ] Vendor intake includes security questionnaires and contractual controls
- [ ] Artifact integrity is verified: signed builds, image scanning, provenance checks
- [ ] SBOMs are maintained for critical services; dependencies are monitored
- [ ] CI/CD pipelines use least-privilege, rotated, and scoped secrets
- [ ] Continuous monitoring is in place for third-party breaches

### Security Culture and Training

- [ ] Onboarding and annual role-based training is completed by all staff
- [ ] Regular phishing simulations are run with feedback and trend tracking
- [ ] An easy, well-known channel exists to report security issues
- [ ] Quarterly security updates are shared with the organization
- [ ] Positive security behaviors are recognized and rewarded

## Metrics and Reporting

### Leading Indicators
*Measure preventative activities and preparedness. These metrics help predict future success.*
- **Patch Latency**: Average time to patch critical vulnerabilities (e.g., goal: < 14 days).
- **MFA Coverage**: Percentage of users with MFA enabled (e.g., goal: 100%).
- **EDR Coverage**: Percentage of endpoints with EDR installed and reporting.
- **Training Completion**: Percentage of employees who have completed required security training.

### Lagging Indicators
*Measure the effectiveness of the program after an event. These reflect past performance.*
- **Incident Mean Time to Remediate (MTTR)**: Average time to fix a critical vulnerability after detection.
- **High/Critical Vulnerabilities Time-to-Remediate**: The median time it takes to fix vulnerabilities, grouped by severity.

### Program Indicators
- **Access Review Completion**: Percentage of required quarterly access reviews completed on time.
- **Backup Restore Success Rate**: Percentage of backup restore tests that completed successfully.
- **Tabletop Cadence**: Frequency of incident response tabletop exercises.

## Incident Response Workflow (high level)

- **Detect**: An alert fires or a report is received. The first step is to confirm the incident's validity and assign an initial severity.
- **Contain**: Isolate the affected systems to prevent further damage. This could mean taking a server offline, blocking an IP address, or disabling a user account.
- **Eradicate**: Remove the threat from the environment. This involves eliminating malware, revoking stolen credentials, and fixing the underlying vulnerability.
- **Recover**: Restore services to normal operation. This may involve deploying clean systems, restoring data from backups, and validating system integrity before bringing it back online.
- **Learn**: Document the incident in a post-mortem report. This blameless review should identify the root cause and assign actionable remediation items with owners and deadlines to prevent recurrence.

## Continuous Improvement

- **Quarterly Risk Review**: Re-evaluate the risk register and update the security roadmap quarterly.
- **Service Ownership**: Ensure every service has a clear owner, defined SLOs, and a documented security posture.
- **Automate Everything**: Automate any manual, recurring security task. Always prefer preventative controls that stop issues from happening over detective controls that find them later.

## Incident Playbooks (examples)

### Phishing Report (employee-reported)

- **Triage**: Verify sender domain, links, and headers; detonate suspicious links/attachments in a sandbox environment.
- **Contain**: Block sender, domains, and URLs at the email gateway and DNS level.
- **Hunt**: Search mailboxes and endpoints for indicators of compromise; auto-quarantine suspicious emails.
- **Notify**: Communicate with targeted users and support teams with clear next steps.
- **Eradicate**: Force-delete delivered messages; revoke tokens or sessions if a user clicked a malicious link.
- **Recover**: Mandate password resets and session revocation for impacted users.
- **Learn**: Update detection rules; share patterns with staff in a weekly security brief.

### Ransomware on Endpoint

- **Detect**: EDR alert triggers; confirm file encryption activity and the presence of a ransom note.
- **Contain**: Immediately isolate the host from the network; disable all associated user sessions.
- **Eradicate**: Remove malware, persistence mechanisms, and any scheduled tasks it created.
- **Recover**: Reimage the machine from a known-good golden image; restore user data from backups.
- **Notify**: Inform leadership; engage legal and cyber insurance as required by policy.
- **Learn**: Identify the initial access vector; patch the vulnerability and harden systems to prevent recurrence.

### Credential/Token Leak (e.g., key pushed to repo)

- **Detect**: A secret scanner alert fires in the CI pipeline or repository provider.
- **Contain**: Revoke and rotate the exposed key immediately. Remove the sensitive data from commit history (e.g., using tools like BFG Repo-Cleaner, which should be done with extreme care as it rewrites history).
- **Hunt**: Analyze logs for any use of the leaked credential; monitor for anomalous access patterns.
- **Recover**: Redeploy services with the new credentials. Review the credential's permissions and tighten its scope and Time-To-Live (TTL).
- **Learn**: Implement pre-commit hooks and stricter CI quality gates to prevent secrets from being committed in the future.

### Cloud Resource Exposure (public S3 bucket or open port)

- **Detect**: A Cloud Security Posture Management (CSPM) or IaC scan alert triggers, or an external party reports it.
- **Contain**: Immediately restrict public access; apply a least-privilege policy to the resource.
- **Eradicate**: Fix the Infrastructure as Code (IaC) module that created the misconfiguration and add guardrails to prevent regression.
- **Recover**: Validate the integrity of the exposed data; evaluate any data disclosure obligations.
- **Learn**: Add unit tests and policy-as-code checks to the CI pipeline to enforce that specific security control.

## Severity and Response SLAs

- **Sev 1 (Critical)**: Active customer or business impact.
  - **Acknowledge**: 5 min; **Contain**: 30 min; **Comms**: 30 min; **RCA**: 5 days
- **Sev 2 (High)**: Degraded service or high risk of imminent impact.
  - **Acknowledge**: 15 min; **Contain**: 2 h; **Comms**: 2 h; **RCA**: 7 days
- **Sev 3 (Moderate)**: Limited scope or a potential, non-imminent issue.
  - **Acknowledge**: 4 h; **Contain**: 1 day; **RCA**: 10 days
- **Sev 4 (Low)**: Informational or minor issue.
  - **Acknowledge**: 1 day; **Contain**: Best effort; **RCA**: As needed

**Escalation**: If an SLA is at risk, the on-call engineer pages the incident commander and executive sponsor.

## Practical Templates

### Risk Register
*A central document for tracking identified risks.* It should contain:
- ID, Title, Description, Business Impact, Likelihood, Severity (calculated)
- Owner, Mitigation Plan, Target Date, Status, Last Reviewed Date

### Access Review Record
*A log to prove that access rights are being regularly reviewed.* It should contain:
- System/Group, Data Classification, Reviewer, Scope, Date
- Changes Made: users removed, rights reduced, exceptions and justifications
- Evidence: exported list or screenshot stored in a secure repository

### Data Classification
*A framework for categorizing data based on sensitivity to inform security controls.* Example levels:
- **Public**: Information intended for public consumption (e.g., marketing materials).
- **Internal**: Data accessible to all employees but not for public disclosure (e.g., internal wikis).
- **Confidential**: Sensitive customer or business data that could cause medium/high impact if leaked (e.g., PII, financial records).
- **Restricted**: Highly regulated or sensitive data requiring the highest level of controls and logging (e.g., production secrets, health data).

## Logging and Detection Baseline

- **Endpoints**: Process execution, network connections, authentication events, EDR detections.
- **Cloud**: Control plane audit logs (e.g., CloudTrail), authentication logs, configuration changes, network flow logs, object storage access logs.
- **Applications**: Authentication events (success and failure), administrative actions, errors, permission changes, key operations.
- **Network/Edge**: WAF blocks/alerts, CDN logs, VPN connections, DNS queries, firewall accepts/denies.
- **Retention Targets**: 30–90 days in hot (fast-query) storage, 365+ days in cold (archival) storage for critical sources.

## CI/CD Security Gates (examples)

- **Pre-commit**: Run lightweight secrets and linting hooks on developer machines before code is committed.
- **CI (Pull Request)**: Run SAST, SCA, and IaC scans. Fail the build if new critical vulnerabilities are found.
- **Build**: Generate a signed, reproducible build artifact and an SBOM.
- **Deploy**: Scan the container image for vulnerabilities, run policy-as-code checks (e.g., OPA Gatekeeper), and require manual approvals for production deployments.

## Vendor and Third-Party Checklist

- **Contract**: Ensure a security addendum, breach notification SLA, and data processing terms are in place.
- **Assurance**: Obtain independent attestations (e.g., SOC2 Type II, ISO 27001) or a completed security questionnaire.
- **Technical**: Mandate SSO with MFA, ensure audit log export is available, and confirm data location and backup policies.
- **Exit**: Clarify data return/deletion terms and support for migration off the platform.

## People Processes

### Onboarding

- Role-based access profiles are applied via groups.
- Device is enrolled in MDM before first login; MFA is set up.
- Security training is completed within the first week.

### Offboarding

- All accounts are immediately disabled; tokens and sessions are revoked.
- Device is returned and wiped; recovery keys are verified.
- Access is removed from all groups and third-party services; removal is documented in a ticket.

### Security Champions Program

- A program to embed security experts within engineering teams.
- One champion per team; they sync monthly with the security team.
- Champions help maintain a backlog of security tasks aligned to their team's roadmap.
- Success is measured by metrics like vulnerabilities resolved, time-to-fix, and training completed by their team.

## Example Artifacts

### Minimal Incident Report

- **Summary**: What happened, when it was detected, and by whom.
- **Impact**: Customers, data types, and systems affected.
- **Timeline**: A log of key events, decisions, and actions.
- **Containment/Eradication/Recovery Actions**: What was done to fix the issue.
- **Root Cause**: The underlying reason(s) the incident was possible.
- **Remediations**: Actionable tasks with owners and due dates to prevent recurrence.

### Quarterly Security Metrics (sample)

- **Coverage**: MFA %, EDR %, Logging %, Backup Test Pass %
- **Velocity**: Critical Vulnerability Median Time-to-Fix, Patch Latency
- **Readiness**: Tabletop Cadence, Incident SLA Adherence
- **Risk**: Count of open high-impact risks, aged risks (> 90 days)

# Lesson Plan: Track 5 — Security Posture & Sentinel
# Weeks 12–13 | SC-500 Domain: Manage and monitor security posture (20–25%)

## Status
- [ ] **0035** — Defender CSPM: Posture Management & Attack Surface
- [ ] **0036** — Microsoft Sentinel: Workspaces, Roles & Data Connectors
- [ ] **0037** — Sentinel Analytics, Automation & Playbooks
- [ ] **0038** — Defender for Cloud: Workload Protection Plans & Multicloud

---

## Lesson Specs

### 0035 — Defender CSPM: Posture Management & Attack Surface
**Skill goal**: Use Defender CSPM to identify security risks via cloud security graph and discover external attack surface with EASM.
**Key concepts**: Defender CSPM vs foundational CSPM (free), cloud security graph, attack path analysis, security risk insights, Defender External Attack Surface Management (EASM), Microsoft Defender Vulnerability Management for Azure VMs.
**Exam bullets covered**:
- Identify security risks using Defender CSPM; Evaluate compliance against security frameworks; Enable and configure Defender for Cloud workload protection plans; Configure Microsoft Defender Vulnerability Management settings for Azure VMs; Discover unprotected assets and vulnerabilities using Microsoft Defender EASM
**Lab**: MS Learn — [Improve your security posture with Microsoft Defender for Cloud](https://learn.microsoft.com/en-us/training/modules/improve-security-posture-microsoft-defender-cloud/)
**Diagram type**: `graph TD` — CSPM: cloud resources → security graph → attack path analysis → risk prioritisation → remediation
**Primary source**: [Defender CSPM documentation](https://learn.microsoft.com/en-us/azure/defender-for-cloud/concept-cloud-security-posture-management)

---

### 0036 — Microsoft Sentinel: Workspaces, Roles & Data Connectors
**Skill goal**: Create a Sentinel workspace, assign roles, and connect Azure Activity and Microsoft Entra ID via data connectors.
**Key concepts**: Log Analytics workspace as Sentinel backing store, Sentinel RBAC roles (Reader, Responder, Contributor), Microsoft data connectors, syslog/CEF connector, Windows Security Events via DCR, content hub solutions, custom log tables.
**Exam bullets covered**:
- Create and connect workspaces in Microsoft Sentinel; Assign roles in Microsoft Sentinel; Implement and use content hub solutions; Configure and use Microsoft data connectors for Azure resources; Implement and configure syslog and CEF event collections; Implement and configure collection of Windows Security events using DCRs; Create custom log tables; Implement data retention in Microsoft Sentinel data stores; Query Microsoft Purview Audit in Defender XDR
**Lab**: MS Learn — [Create and manage Microsoft Sentinel workspaces](https://learn.microsoft.com/en-us/training/modules/create-manage-azure-sentinel/)
**Diagram type**: `graph TD` — Data sources → connectors (native/Syslog/CEF/DCR) → Log Analytics workspace → Sentinel → analytics rules
**Primary source**: [Microsoft Sentinel documentation](https://learn.microsoft.com/en-us/azure/sentinel/overview)

---

### 0037 — Sentinel Analytics, Automation & Playbooks
**Skill goal**: Create a scheduled analytics rule, an automation rule, and a Logic Apps playbook that auto-responds to an incident.
**Key concepts**: Scheduled analytics rules (KQL), NRT rules, anomaly rules, fusion (ML-based correlation), automation rules vs playbooks, Logic Apps SOAR integration, incident lifecycle, Windows Event Forwarding (WEF).
**Exam bullets covered**:
- Implement automation rules and playbooks in Microsoft Sentinel
**Lab**: MS Learn — [Configure SIEM security operations using Microsoft Sentinel](https://learn.microsoft.com/en-us/training/paths/configure-siem-security-operations-using-microsoft-sentinel/)
**Diagram type**: `sequenceDiagram` — Alert triggered → analytics rule match → incident created → automation rule → playbook (Logic App) → response action
**Primary source**: [Sentinel automation documentation](https://learn.microsoft.com/en-us/azure/sentinel/automation/automation)

---

### 0038 — Defender for Cloud: Workload Protection Plans & Multicloud
**Skill goal**: Enable Defender for Cloud workload protection plans and connect an AWS account.
**Key concepts**: Defender for Cloud plans (Servers, Storage, SQL, Containers, App Service, Key Vault, DNS, ARM), AWS/GCP connector (CSPM + workload protection), multicloud security posture, regulatory compliance standards in Defender for Cloud.
**Exam bullets covered**:
- Enable and configure Defender for Cloud workload protection plans; Connect hybrid cloud and multicloud environments to Defender for Cloud (AWS, GCP)
**Lab**: MS Learn — [Connect AWS to Microsoft Defender for Cloud](https://learn.microsoft.com/en-us/azure/defender-for-cloud/quickstart-onboard-aws)
**Diagram type**: `graph TD` — Defender for Cloud coverage: Azure VMs → Arc servers → AWS EC2 → GCP Compute → all under single posture view
**Primary source**: [Defender for Cloud workload protection documentation](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction)

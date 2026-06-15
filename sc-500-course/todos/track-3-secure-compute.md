# Lesson Plan: Track 3 — Secure Compute
# Weeks 7–9 | SC-500 Domain: Secure compute — servers, containers, app platforms (20–25%)

## Status
- [ ] **0023** — VM Security: Disk Encryption, Secure Boot & vTPM
- [ ] **0024** — Azure Bastion & Just-in-Time (JIT) VM Access
- [ ] **0025** — Defender for Servers: Onboarding, Vulnerability Scanning & EDR
- [ ] **0026** — Azure Arc: Extending Security to Hybrid & Multicloud
- [ ] **0027** — Container Security: AKS Controls & Container Registry
- [ ] **0028** — Defender for Containers: Runtime Risk Detection
- [ ] **0029** — App Service & Functions Security
- [ ] **0030** — Azure Web Application Firewall (WAF)
- [ ] **0031** — API Management: Backend API Security Policies

---

## Lesson Specs

### 0023 — VM Security: Disk Encryption, Secure Boot & vTPM
**Skill goal**: Enable Azure Disk Encryption on a VM and configure Trusted Launch (secure boot + vTPM).
**Key concepts**: Azure Disk Encryption (ADE) vs server-side encryption (SSE) vs confidential disk encryption, Trusted Launch, Secure Boot, vTPM, integrity monitoring, security type options (Standard, Trusted Launch, Confidential VM).
**Exam bullets covered**:
- Implement and configure disk encryption; Configure security features on a VM, including secure boot, vTPM, integrity monitoring, and security type; Enforce security configuration of Azure-managed servers using Azure Machine Configuration
**Lab**: MS Learn — [Protect your virtual machine by using Azure Backup](https://learn.microsoft.com/en-us/training/modules/protect-virtual-machine-by-using-azure-backup/) + ADE quickstart
**Diagram type**: `graph TD` — Encryption layers: SSE (platform) → ADE (OS/data disks) → confidential (memory)
**Primary source**: [Azure Disk Encryption documentation](https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption-overview)

---

### 0024 — Azure Bastion & Just-in-Time (JIT) VM Access
**Skill goal**: Deploy Azure Bastion and configure JIT VM access to eliminate public RDP/SSH exposure.
**Key concepts**: Bastion SKUs (Basic vs Standard vs Premium), JIT access workflow, NSG changes on JIT activation, Defender for Servers requirement for JIT, approved requesters.
**Exam bullets covered**:
- Plan and implement Azure Bastion; Enable and enforce use of just-in-time (JIT) VM access
**Lab**: MS Learn — [Configure just-in-time access](https://learn.microsoft.com/en-us/azure/defender-for-cloud/just-in-time-access-usage)
**Diagram type**: `sequenceDiagram` — User requests JIT access → Defender approves → NSG rule opens port (time-limited) → session → rule revoked
**Primary source**: [JIT VM access documentation](https://learn.microsoft.com/en-us/azure/defender-for-cloud/just-in-time-access-overview)

---

### 0025 — Defender for Servers: Onboarding, Vulnerability Scanning & EDR
**Skill goal**: Onboard a VM to Defender for Servers P2 and run an agentless vulnerability scan.
**Key concepts**: Defender for Servers Plan 1 vs Plan 2, MDE integration (EDR), agentless scanning vs agent-based, Qualys vs Defender Vulnerability Management, security recommendations from scans.
**Exam bullets covered**:
- Onboard servers to Defender for Servers, including hybrid and multicloud scenarios; Configure Defender for Servers settings, including vulnerability scanning and EDR; Implement and manage agentless scanning for VMs
**Lab**: MS Learn — [Secure your servers and VMs from brute-force and malware attacks with Defender for Servers](https://learn.microsoft.com/en-us/training/modules/defender-for-servers/)
**Diagram type**: `graph TD` — Defender for Servers coverage: Azure VMs → Arc-enabled servers → AWS/GCP VMs
**Primary source**: [Defender for Servers documentation](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-servers-introduction)

---

### 0026 — Azure Arc: Extending Security to Hybrid & Multicloud
**Skill goal**: Connect an on-premises server to Azure Arc and apply security policies from Defender for Cloud.
**Key concepts**: Azure Arc-enabled servers, Arc agent (Connected Machine Agent), Azure Policy guest configuration, Defender for Servers on Arc, AWS/GCP connector in Defender for Cloud.
**Exam bullets covered**:
- Extend security controls to hybrid and multicloud servers using Azure Arc; Connect hybrid cloud and multicloud environments to Defender for Cloud (AWS, GCP)
**Lab**: MS Learn — [Manage hybrid infrastructure with Azure Arc](https://learn.microsoft.com/en-us/training/paths/manage-hybrid-infrastructure-with-azure-arc/)
**Diagram type**: `graph TD` — On-prem/AWS/GCP server → Arc agent → Azure control plane → Defender for Cloud → policy enforcement
**Primary source**: [Azure Arc documentation](https://learn.microsoft.com/en-us/azure/azure-arc/servers/overview)

---

### 0027 — Container Security: AKS Controls & Container Registry
**Skill goal**: Harden an AKS cluster with RBAC, network policies, and private container registry access.
**Key concepts**: AKS RBAC (Kubernetes RBAC + Entra integration), network policies (Calico/Azure CNI), private AKS cluster, Azure Container Registry (ACR) authentication, image signing, ACR firewall rules, ACR private endpoint.
**Exam bullets covered**:
- Implement and configure security controls for AKS; Implement and configure security controls for Azure Container Registry
**Lab**: MS Learn — [Secure network traffic in AKS using network policies](https://learn.microsoft.com/en-us/training/modules/aks-network-policies/)
**Diagram type**: `graph TD` — AKS security layers: API server access → node security → network policy → ACR pull (managed identity)
**Primary source**: [AKS security concepts](https://learn.microsoft.com/en-us/azure/aks/concepts-security)

---

### 0028 — Defender for Containers: Runtime Risk Detection
**Skill goal**: Enable Defender for Containers and investigate a runtime threat alert for a container workload.
**Key concepts**: Defender for Containers coverage (AKS, Arc-enabled Kubernetes, ACR image scanning), Kubernetes audit log analysis, runtime threat detection, security recommendations for containers.
**Exam bullets covered**:
- Detect misconfigurations and runtime risks in container workloads using Defender for Containers; Implement and configure security controls for Azure Container Instances and Azure Container Apps
**Lab**: MS Learn — [Introduction to Defender for Containers](https://learn.microsoft.com/en-us/training/modules/defender-for-containers/)
**Diagram type**: `sequenceDiagram` — Container runtime event → Defender sensor → alert → Defender for Cloud → investigation
**Primary source**: [Defender for Containers documentation](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-introduction)

---

### 0029 — App Service & Functions Security
**Skill goal**: Secure an App Service with authentication, network restrictions, and managed identity.
**Key concepts**: App Service authentication (Easy Auth), access restrictions (IP rules, service tags), VNet integration, private endpoints for App Service, managed identity for downstream access, Functions auth levels (anonymous vs function key vs admin), Logic Apps security.
**Exam bullets covered**:
- Implement and configure security controls for Azure Functions, including authentication and network access; Implement and configure security controls for Azure Logic Apps; Implement and configure security controls for Azure App Service
**Lab**: MS Learn — [Secure your Azure App Service web app](https://learn.microsoft.com/en-us/training/modules/secure-app-service-web-app/)
**Diagram type**: `graph TD` — App Service security: Easy Auth → network restriction → VNet integration → managed identity → downstream service
**Primary source**: [App Service security documentation](https://learn.microsoft.com/en-us/azure/app-service/overview-security)

---

### 0030 — Azure Web Application Firewall (WAF)
**Skill goal**: Enable WAF on Application Gateway in Prevention mode and tune a custom rule.
**Key concepts**: WAF policy, managed rule sets (OWASP CRS 3.2, Microsoft Default), custom rules, exclusions, prevention vs detection mode, WAF on Front Door vs Application Gateway vs CDN.
**Exam bullets covered**:
- Implement and configure Azure Web Application Firewall
**Lab**: MS Learn — [Introduction to Azure Web Application Firewall](https://learn.microsoft.com/en-us/training/modules/introduction-azure-web-application-firewall/)
**Diagram type**: `graph TD` — HTTP request → WAF (managed rules → custom rules) → backend pool
**Primary source**: [Azure WAF documentation](https://learn.microsoft.com/en-us/azure/web-application-firewall/overview)

---

### 0031 — API Management: Backend API Security Policies
**Skill goal**: Configure API Management with OAuth validation, rate limiting, and IP filtering policies.
**Key concepts**: API Management policy XML, validate-jwt policy, rate-limit-by-key, ip-filter, backend certificates, subscription keys, developer portal security.
**Exam bullets covered**:
- Implement security policies for back-end API protection using API Management
**Lab**: MS Learn — [Explore API Management](https://learn.microsoft.com/en-us/training/modules/explore-api-management/)
**Diagram type**: `sequenceDiagram` — Client → APIM (validate-jwt → rate-limit → ip-filter) → backend API
**Primary source**: [API Management security documentation](https://learn.microsoft.com/en-us/azure/api-management/api-management-security-controls-builtins)

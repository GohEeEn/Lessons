# Lesson Plan: Track 2 — Secure Storage, Databases & Networking
# Weeks 4–6 | SC-500 Domain: Secure storage, databases, and networking (25–30%)

## Status
- [ ] **0013** — Storage Account Security & Firewall Rules
- [ ] **0014** — Defender for Storage: Threat Protection Configurations
- [ ] **0015** — Azure SQL Security: Platform-Level Controls & Auditing
- [ ] **0016** — Defender for Databases: Protection Across Azure DB Services
- [ ] **0017** — NSGs & Application Security Groups (ASGs)
- [ ] **0018** — Azure Virtual Network Manager & Virtual WAN Security
- [ ] **0019** — Azure Firewall: Rules, Policies & DNAT
- [ ] **0020** — Private Endpoints & Private Link
- [ ] **0021** — VPN Security & Microsoft Entra Private Access
- [ ] **0022** — Network Watcher Diagnostics & Effective Security Rules

---

## Lesson Specs

### 0013 — Storage Account Security & Firewall Rules
**Skill goal**: Harden a storage account by disabling public access, enabling firewall rules, and applying an access policy.
**Key concepts**: Shared key vs SAS vs RBAC, storage firewall (IP rules, VNet rules, exceptions), secure transfer required, blob public access setting, immutability policies.
**Exam bullets covered**:
- Implement and configure security for storage accounts; Configure Azure Storage firewall rules; Manage access to storage, including access policies
**Lab**: MS Learn — [Configure Azure Storage security](https://learn.microsoft.com/en-us/training/modules/configure-storage-security/)
**Diagram type**: `graph TD` — Access paths to storage: public internet → firewall → VNet service endpoint → private endpoint
**Primary source**: [Azure Storage security guide](https://learn.microsoft.com/en-us/azure/storage/common/storage-security-guide)

---

### 0014 — Defender for Storage: Threat Protection Configurations
**Skill goal**: Enable Defender for Storage and configure malware scanning and sensitive data threat detection.
**Key concepts**: Defender for Storage plans (foundational vs standard), malware scanning on upload, sensitive data threat detection, activity monitoring alerts.
**Exam bullets covered**:
- Implement Defender for Storage threat protection configurations
**Lab**: MS Learn — [Protect your Azure storage accounts](https://learn.microsoft.com/en-us/training/modules/protect-azure-storage-accounts/)
**Diagram type**: `sequenceDiagram` — Blob upload → malware scan → alert generation → response
**Primary source**: [Defender for Storage documentation](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-storage-introduction)

---

### 0015 — Azure SQL Security: Platform-Level Controls & Auditing
**Skill goal**: Configure auditing, transparent data encryption, and firewall rules for Azure SQL Database.
**Key concepts**: Transparent data encryption (TDE), Always Encrypted, dynamic data masking, Azure SQL firewall rules, server-level vs database-level audit, audit log destinations.
**Exam bullets covered**:
- Implement platform-level security configurations in Azure SQL; Configure database auditing for Azure SQL Database and Azure SQL Managed Instance
**Lab**: MS Learn — [Secure your Azure SQL Database](https://learn.microsoft.com/en-us/training/modules/secure-your-azure-sql-database/)
**Diagram type**: `graph TD` — SQL security layers: network → authentication → authorisation → data encryption → auditing
**Primary source**: [Azure SQL security documentation](https://learn.microsoft.com/en-us/azure/azure-sql/database/security-overview)

---

### 0016 — Defender for Databases: Protection Across Azure DB Services
**Skill goal**: Enable Defender for Databases across Azure SQL, Cosmos DB, and open-source RDS services.
**Key concepts**: Defender for SQL (on Azure SQL and SQL on VMs), Defender for open-source RDS, Defender for Cosmos DB, advanced threat protection alerts, SQL vulnerability assessment.
**Exam bullets covered**:
- Configure Defender for Databases protection across Azure database services
**Lab**: MS Learn — [Enable and configure Defender for SQL](https://learn.microsoft.com/en-us/training/modules/defender-for-sql/)
**Diagram type**: `graph TD` — Defender for Databases coverage: Azure SQL → SQL MI → SQL on VM → Cosmos DB → OSS RDS
**Primary source**: [Defender for Databases documentation](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-databases-overview)

---

### 0017 — NSGs & Application Security Groups (ASGs)
**Skill goal**: Create an NSG with inbound/outbound rules and use ASGs to simplify rule management.
**Key concepts**: NSG rule priority, default rules, effective security rules, ASG as source/destination, subnet vs NIC association, augmented rules.
**Exam bullets covered**:
- Implement and manage network security groups (NSGs) and application security groups (ASGs)
**Lab**: MS Learn — [Configure network security groups](https://learn.microsoft.com/en-us/training/modules/configure-network-security-groups/)
**Diagram type**: `graph TD` — Traffic flow: internet → NSG (subnet) → VM NIC NSG → ASG rule match → allow/deny
**Primary source**: [NSG documentation](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview)

---

### 0018 — Azure Virtual Network Manager & Virtual WAN Security
**Skill goal**: Use Azure Virtual Network Manager to apply a security admin rule across multiple VNets.
**Key concepts**: AVNM network groups, connectivity configurations, security admin rules vs NSG rules, Virtual WAN hub security (Firewall Manager integration), routing intent.
**Exam bullets covered**:
- Implement and configure network access policies using Azure Virtual Network Manager; Configure security for an Azure Virtual WAN
**Lab**: MS Learn — [Introduction to Azure Virtual Network Manager](https://learn.microsoft.com/en-us/training/modules/intro-to-azure-virtual-network-manager/)
**Diagram type**: `graph TD` — AVNM: management scope → network groups → security admin policy → VNets
**Primary source**: [Azure Virtual Network Manager documentation](https://learn.microsoft.com/en-us/azure/virtual-network-manager/overview)

---

### 0019 — Azure Firewall: Rules, Policies & DNAT
**Skill goal**: Deploy Azure Firewall and create network rules, application rules, and a DNAT rule.
**Key concepts**: Azure Firewall SKUs (Standard vs Premium), firewall policy, DNAT rules, network rules, FQDN application rules, threat intelligence, TLS inspection (Premium), IDPS.
**Exam bullets covered**:
- Implement and configure Azure Firewall
**Lab**: MS Learn — [Deploy and configure Azure Firewall](https://learn.microsoft.com/en-us/training/modules/deploy-configure-azure-firewall/)
**Diagram type**: `sequenceDiagram` — Inbound traffic → DNAT evaluation → network rules → application rules → allow/deny
**Primary source**: [Azure Firewall documentation](https://learn.microsoft.com/en-us/azure/firewall/overview)

---

### 0020 — Private Endpoints & Private Link
**Skill goal**: Create a private endpoint for an Azure PaaS service and verify public access is blocked.
**Key concepts**: Private endpoint vs service endpoint, private DNS zone integration, Private Link service (for custom services), network policies on subnets.
**Exam bullets covered**:
- Configure Azure private endpoints to secure access to Azure PaaS resources; Configure Azure Private Link services to secure access to network resources
**Lab**: MS Learn — [Introduction to Azure Private Link](https://learn.microsoft.com/en-us/training/modules/introduction-azure-private-link/)
**Diagram type**: `graph TD` — VNet → private endpoint → private DNS → PaaS service (no public internet traversal)
**Primary source**: [Azure Private Link documentation](https://learn.microsoft.com/en-us/azure/private-link/private-link-overview)

---

### 0021 — VPN Security & Microsoft Entra Private Access
**Skill goal**: Configure VPN gateway security settings and enable Entra Private Access for app access.
**Key concepts**: VPN gateway SKUs, IKEv2/SSTP, point-to-site certificate auth vs Entra ID auth, Microsoft Entra Private Access (replaces VPN for app access), Zero Trust Network Access (ZTNA).
**Exam bullets covered**:
- Implement and configure security for VPN connections; Implement and configure Microsoft Entra Private Access
**Lab**: MS Learn — [Configure Azure VPN Gateway](https://learn.microsoft.com/en-us/training/modules/configure-vpn-gateway/)
**Diagram type**: `graph TD` — Remote user → Entra Private Access connector → private app (vs legacy VPN path)
**Primary source**: [Microsoft Entra Private Access documentation](https://learn.microsoft.com/en-us/azure/global-secure-access/concept-private-access)

---

### 0022 — Network Watcher Diagnostics & Effective Security Rules
**Skill goal**: Use Network Watcher to diagnose NSG effective rules and trace a network packet flow.
**Key concepts**: IP flow verify, NSG flow logs, effective security rules view, connection troubleshoot, packet capture, topology view.
**Exam bullets covered**:
- Evaluate effective security rules using Azure Network Watcher diagnostics
**Lab**: MS Learn — [Monitor and troubleshoot your end-to-end Azure network infrastructure by using network monitoring tools](https://learn.microsoft.com/en-us/training/modules/troubleshoot-azure-network-infrastructure/)
**Diagram type**: `sequenceDiagram` — Network Watcher IP flow verify: source IP/port → destination → NSG rule matched → allow/deny result
**Primary source**: [Azure Network Watcher documentation](https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview)

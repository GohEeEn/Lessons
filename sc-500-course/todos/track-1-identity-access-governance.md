# Lesson Plan: Track 1 — Identity, Access & Governance
# Weeks 1–3 | SC-500 Domain: Manage identity, access, and governance (20–25%)

## Status
- [x] **0001** — The Azure Identity Model: Entra ID, Tenants & Subscriptions ✅ COMPLETE
- [ ] **0002** — Privileged Identity Management (PIM)
- [ ] **0003** — Conditional Access Policies
- [ ] **0004** — Authentication Methods: MFA & Passwordless
- [ ] **0005** — Identity for Applications: Enterprise Apps & App Registrations
- [ ] **0006** — OAuth Permission Grants & Consent Settings
- [ ] **0007** — Managed Identities for Azure Resources
- [ ] **0008** — Azure Key Vault: Deploy, Configure & Access Control
- [ ] **0009** — Key Vault Secrets, Keys, Certificates & Defender for Key Vault
- [ ] **0010** — Azure Policy: Built-in & Custom Definitions
- [ ] **0011** — RBAC Deep Dive: Built-in Roles, Custom Roles & Overprivileged Access
- [ ] **0012** — Governance: Regulatory Compliance & Resource Locks in Defender for Cloud

---

## Lesson Specs

### 0002 — Privileged Identity Management (PIM)
**Skill goal**: Configure PIM to require just-in-time activation of privileged roles.
**Key concepts**: Eligible vs active assignments, activation workflow, approval process, access reviews, PIM alerts.
**Exam bullets covered**:
- Implement and configure Privileged Identity Management (PIM)
**Lab**: MS Learn — [Configure Microsoft Entra Privileged Identity Management](https://learn.microsoft.com/en-us/training/modules/configure-privileged-identity-management/)
**Diagram type**: `sequenceDiagram` — PIM activation request → approval → role active → expiry
**Primary source**: [PIM documentation](https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure)

---

### 0003 — Conditional Access Policies
**Skill goal**: Build a conditional access policy that enforces MFA for risky sign-ins.
**Key concepts**: Named locations, sign-in risk, user risk, grant controls, session controls, policy modes (report-only, on, off).
**Exam bullets covered**:
- Implement conditional access policies
**Lab**: MS Learn — [Manage access with Microsoft Entra Conditional Access](https://learn.microsoft.com/en-us/training/modules/manage-access-with-microsoft-entra-conditional-access/)
**Diagram type**: `graph TD` — Condition signals → policy evaluation → grant/block/session control
**Primary source**: [Conditional Access documentation](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/overview)

---

### 0004 — Authentication Methods: MFA & Passwordless
**Skill goal**: Configure authentication methods policy and enforce MFA for all users.
**Key concepts**: Authentication methods policy, SSPR, FIDO2, Windows Hello, Microsoft Authenticator, legacy MFA per-user vs policy-based.
**Exam bullets covered**:
- Implement and configure authentication methods, including MFA and passwordless
**Lab**: MS Learn — [Plan and implement Microsoft Entra authentication](https://learn.microsoft.com/en-us/training/modules/implement-authentication/)
**Diagram type**: `graph TD` — Authentication strength pyramid (password → MFA → passwordless)
**Primary source**: [Authentication methods documentation](https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-authentication-methods)

---

### 0005 — Identity for Applications: Enterprise Apps & App Registrations
**Skill goal**: Register an application in Entra ID and configure its permissions.
**Key concepts**: App registration vs enterprise application, client ID, tenant ID, redirect URIs, API permissions, roles manifest.
**Exam bullets covered**:
- Implement and configure identity for applications, including enterprise applications and app registrations
**Lab**: MS Learn — [Register an application with the Microsoft identity platform](https://learn.microsoft.com/en-us/training/modules/register-apps-use-microsoft-identity-platform/)
**Diagram type**: `sequenceDiagram` — App registration → service principal creation → permission grant → token issuance
**Primary source**: [App registrations documentation](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)

---

### 0006 — OAuth Permission Grants & Consent Settings
**Skill goal**: Identify and remediate overpermissioned OAuth apps using admin consent workflow.
**Key concepts**: Delegated vs application permissions, admin consent, user consent settings, consent grant attack, OAuth app governance.
**Exam bullets covered**:
- Manage OAuth permission grants and consent settings
**Lab**: MS Learn — [Manage app consent policies](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/manage-consent-requests)
**Diagram type**: `sequenceDiagram` — User consent flow vs admin consent flow
**Primary source**: [Consent framework documentation](https://learn.microsoft.com/en-us/azure/active-directory/develop/consent-framework)

---

### 0007 — Managed Identities for Azure Resources
**Skill goal**: Assign a system-assigned managed identity to a VM and grant it Key Vault access.
**Key concepts**: System-assigned vs user-assigned, identity lifecycle, RBAC assignment, workload identity federation.
**Exam bullets covered**:
- Implement and configure managed identities for Azure resources
**Lab**: MS Learn — [Authenticate Azure-hosted apps to Azure resources with managed identities](https://learn.microsoft.com/en-us/training/modules/authenticate-apps-with-managed-identities/)
**Diagram type**: `graph TD` — VM → system-assigned identity → RBAC role → Key Vault secret read
**Primary source**: [Managed identities documentation](https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview)

---

### 0008 — Azure Key Vault: Deploy, Configure & Access Control
**Skill goal**: Deploy a Key Vault, configure access policies and firewall rules, and assign RBAC roles.
**Key concepts**: Vault vs managed HSM, access policies vs RBAC, soft-delete, purge protection, firewall & virtual network rules, private endpoint.
**Exam bullets covered**:
- Deploy Key Vault; Configure Key Vault settings; Configure access to Key Vault; Configure firewall settings on Key Vault
**Lab**: MS Learn — [Configure and manage Azure Key Vault](https://learn.microsoft.com/en-us/training/modules/configure-and-manage-azure-key-vault/)
**Diagram type**: `graph TD` — Access control layers: firewall → RBAC/access policy → secret/key/cert
**Primary source**: [Key Vault documentation](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)

---

### 0009 — Key Vault Secrets, Keys, Certificates & Defender for Key Vault
**Skill goal**: Create and rotate a secret, enable Defender for Key Vault, and scan for exposed secrets via Defender CSPM.
**Key concepts**: Key types (RSA, EC), certificate lifecycle, secret rotation, Defender for Key Vault alerts, CSPM secret scanning.
**Exam bullets covered**:
- Manage keys, secrets, and certificates; Scan for secrets using Defender CSPM; Implement Defender for Key Vault
**Lab**: MS Learn — [Manage secrets in Azure Key Vault](https://learn.microsoft.com/en-us/training/modules/manage-secrets-with-azure-key-vault/)
**Diagram type**: `sequenceDiagram` — Secret creation → version rotation → Defender alert on anomalous access
**Primary source**: [Key Vault secrets documentation](https://learn.microsoft.com/en-us/azure/key-vault/secrets/about-secrets)

---

### 0010 — Azure Policy: Built-in & Custom Definitions
**Skill goal**: Assign a built-in policy, create a custom policy definition, and evaluate compliance.
**Key concepts**: Policy definition structure (if/then), effect types (deny, audit, modify, deployIfNotExists), initiatives, compliance evaluation, remediation tasks.
**Exam bullets covered**:
- Implement and configure security controls by using Azure Policy, including built-in and custom policy definitions; Implement and configure security controls by using infrastructure as code
**Lab**: MS Learn — [Build a cloud governance strategy on Azure](https://learn.microsoft.com/en-us/training/modules/build-cloud-governance-strategy-azure/)
**Diagram type**: `graph TD` — Policy assignment scope → evaluation → compliant/non-compliant → remediation
**Primary source**: [Azure Policy documentation](https://learn.microsoft.com/en-us/azure/governance/policy/overview)

---

### 0011 — RBAC Deep Dive: Built-in Roles, Custom Roles & Overprivileged Access
**Skill goal**: Identify overprivileged assignments and create a least-privilege custom role.
**Key concepts**: Owner/Contributor/Reader, custom role JSON structure, actions/notActions/dataActions, deny assignments, Entra roles vs Azure roles, access reviews.
**Exam bullets covered**:
- Manage Azure built-in role assignments; Manage custom roles; Evaluate and remediate overprivileged access using Azure RBAC
**Lab**: MS Learn — [Secure Azure resources with Azure role-based access control](https://learn.microsoft.com/en-us/training/modules/secure-azure-resources-with-rbac/)
**Diagram type**: `classDiagram` — RBAC role structure: SecurityPrincipal, RoleDefinition, Scope → RoleAssignment
**Primary source**: [Azure RBAC documentation](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview)

---

### 0012 — Governance: Regulatory Compliance & Resource Locks in Defender for Cloud
**Skill goal**: Enable a regulatory compliance standard in Defender for Cloud and apply a resource lock.
**Key concepts**: Compliance standards (PCI-DSS, NIST, CIS), security recommendations vs controls, resource locks (CanNotDelete, ReadOnly), backup security features.
**Exam bullets covered**:
- Evaluate regulatory compliance using Defender for Cloud; Implement resource locks; Configure security controls for backup protection
**Lab**: MS Learn — [Improve your regulatory compliance](https://learn.microsoft.com/en-us/training/modules/improve-regulatory-compliance/)
**Diagram type**: `graph TD` — Compliance standard → controls → recommendations → remediation status
**Primary source**: [Defender for Cloud compliance documentation](https://learn.microsoft.com/en-us/azure/defender-for-cloud/regulatory-compliance-dashboard)

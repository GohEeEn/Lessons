# Lesson Plan: Track 4 — AI Security
# Weeks 10–11 | SC-500 Domain: Secure compute — AI workloads sub-track

## Status
- [ ] **0032** — AI Security Landscape: Copilot, Agents & Foundry
- [ ] **0033** — Defender for AI & Entra Agent ID
- [ ] **0034** — AI Gateway, Guardrails & DSPM for AI

---

## Lesson Specs

### 0032 — AI Security Landscape: Copilot, Agents & Foundry
**Skill goal**: Identify overexposed data in SharePoint and apply Microsoft Purview DSPM to assess AI risk posture.
**Key concepts**: Microsoft Copilot data exposure (SharePoint oversharing), Purview Data Security Posture Management (DSPM) for AI, Microsoft 365 admin center agent management, real-time protection for Copilot Studio agents.
**Exam bullets covered**:
- Identify overexposure of data in SharePoint; Identify risks related to Microsoft Copilot and AI apps using Purview DSPM; Enable and configure real-time protection for Microsoft Copilot Studio agents; Manage agents in Microsoft 365 admin center
**Lab**: MS Learn — [Implement Microsoft Purview data security and compliance protections for Microsoft Copilot](https://learn.microsoft.com/en-us/training/paths/implement-microsoft-purview-data-security/)
**Diagram type**: `graph TD` — AI risk surface: SharePoint data → Copilot query → DSPM detection → remediation (sensitivity labels, access policies)
**Primary source**: [Purview DSPM for AI documentation](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)

---

### 0033 — Defender for AI & Entra Agent ID
**Skill goal**: Analyse blast radius for Entra Agent ID and configure conditional access for AI agents.
**Key concepts**: Entra Agent ID (workload identity for agents), conditional access for Agent ID, Defender XDR blast radius analysis, Defender for AI Service (Cloud Workload Protection), AI security dashboard in Defender for Cloud.
**Exam bullets covered**:
- Implement conditional access for Microsoft Entra Agent ID; Analyse blast radius for security risks related to Entra Agent ID using Defender XDR; Manage Entra Agent ID access; Enable Defender for AI Service in Cloud Workload Protection; Monitor AI security using the Data and AI security dashboard
**Lab**: MS Learn — [Secure AI workloads with Microsoft Defender for Cloud](https://learn.microsoft.com/en-us/training/modules/defender-for-ai/)
**Diagram type**: `sequenceDiagram` — Agent ID token request → conditional access evaluation → Defender XDR risk signal → allow/block
**Primary source**: [Entra Agent ID documentation](https://learn.microsoft.com/en-us/azure/active-directory/workload-identities/workload-identity-overview)

---

### 0034 — AI Gateway, Guardrails & DSPM for AI
**Skill goal**: Configure AI Gateway in Azure API Management and set up content safety guardrails in Azure AI Foundry.
**Key concepts**: AI Gateway in APIM (semantic caching, prompt shield, token rate limiting), Azure AI Foundry guardrails (content filters, prompt injection protection), Security Copilot workspace configuration, Security Copilot plugins and agents.
**Exam bullets covered**:
- Configure and deploy AI Gateway in Azure API Management for Microsoft Foundry; Configure guardrails for agent security in Foundry; Configure workspaces for Security Copilot; Manage permissions and roles in Security Copilot; Enable and configure plugins; Enable and configure Microsoft agents and Security Store agents
**Lab**: MS Learn — [Configure Security Copilot](https://learn.microsoft.com/en-us/training/modules/security-copilot-getting-started/)
**Diagram type**: `graph TD` — AI request flow: client → APIM AI Gateway (prompt shield → rate limit) → Foundry (guardrails → content filter) → model
**Primary source**: [Azure AI Foundry security documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/security-overview)

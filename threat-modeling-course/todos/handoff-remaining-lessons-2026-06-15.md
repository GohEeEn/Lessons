# Handoff: Threat Modeling Course Development - Remaining Lessons

## Session Summary
The threat-modeling-course has been substantially developed with 7 core lessons, 4 reference guides, and supporting learning records. The course moved to the sibling `../Lessons` repository. This handoff covers the remaining lesson pipeline.

## Current State
**Location:** `d:\Playground\Security\Lessons\threat-modeling-course`

**Completed Lessons:**
- 0001: Threat Identifier Mindset (foundations)
- 0002: Boundaries, Assumptions, and Control Verification
- 0003: Question Generation in Unfamiliar Domains
- 0004: Design-Phase Threat Model Inputs and Outputs
- 0005: Risk Evaluation and Prioritization
- 0006: Practical Risk Prioritization Workshop (worked examples)
- 0007: OWASP Risk Rating Methodology Foundations

**Completed References:**
- glossary.html
- security-review-checklist.html
- reviewer-mindset-framework.html
- design-phase-threat-model-template.html
- risk-prioritization-rubric.html
- risk-scoring-framework-and-standards-crosswalk.html

**Learning Records:** 6 records capturing key insights from each lesson.

## Confirmed Design Decisions
1. **Risk prioritization model:** Likelihood x Impact x Confidence Modifier → deterministic P0/P1/P2/P3 bands.
2. **Severity scale:** 5 levels (Critical, Important, Medium, Low, Defense in Depth) with escalation for business-critical assets.
3. **Design-phase focus:** Threat model produces testable security contracts before implementation.
4. **OWASP RRM integration:** RRM factors enrich likelihood/impact inputs; local governance rules drive decisions.
5. **Control verification:** 3-phase evidence (design, implementation, runtime) with phased release gates.
6. **Governance gates:** Custom-requirement controls require approval for P0/P1 only.

## Strategic Intent (Clarified)
- **Phase 1 (Lessons 1-10):** Build comprehensive human mental model for independent reviewer mastery
  - Lessons 1-7 ✓: Foundational thinking, scoring, and decision frameworks
  - Lesson 8 (THIS HANDOFF): Control Quality and Requirement Writing
  - Lesson 9 (THIS HANDOFF): Governance and Approval Workflows
  - Lesson 10 (THIS HANDOFF): Domain-Specific Threat Modeling (IAM, Cloud, Web)
- **Phase 2 (Post-handoff):** Operationalize via AI agent for consistent automation of what the agent excels at (threat identification, priority scoring, domain-specific control mapping, escalation routing)

## Remaining Lessons (Phase 1 Completion)

**Lesson 8: Control Quality and Requirement Writing**
- How to write testable, verifiable security requirements from threat model decisions
- Examples from ASVS/MASVS standards mapped to common threat types
- Evidence formats: design-phase (code review checklists), build-phase (test cases), runtime (monitoring queries)
- Reference cards per domain (IAM controls, cloud controls, web app controls)

**Lesson 9: Governance and Approval Workflows**
- Decision gates: who approves what, under what conditions
- Severity-to-P-band escalation in practice (when does severity 5 become P0 vs P1?)
- Custom control approval process and SLA (for P0/P1 risks)
- Risk acceptance: when to close risks without remediation, documentation requirements

**Lesson 10: Domain-Specific Threat Modeling — IAM, Cloud, and Web App**
- Common elements per domain (e.g., IAM: authentication, authorization, token lifecycle)
- Common threat patterns per domain (e.g., IAM: credential theft, token replay, privilege escalation)
- Worked end-to-end example for each domain applying Lessons 1-9 mental model
- Domain-specific control catalogs (threat type → applicable controls)
- Why mental model is portable, but domain elements and threats differ

## Input to Phase 2 (AI Agent Operationalization)
Once Lessons 1-10 are complete, Phase 1 outputs will provide the specification for Phase 2:
1. **Lesson 8 outputs** → Agent's control recommendation logic (threat type → applicable controls per domain)
2. **Lesson 9 outputs** → Agent's decision policy (when to escalate, defer, approve, or flag for human review)
3. **Lesson 10 outputs** → Agent's domain-specific threat and control libraries (training data for ML or lookup tables for rule-based engine)
4. **All reference materials** → Agent's input validation rules and evidence format standards

## Primary Audience & Success Criteria
- **Audience:** Self (reviewer mastery) + AI agent (consistent automation)
- **Success:**
  1. You can independently score a design-phase threat model using Lessons 1-7 + references
  2. AI agent can run consistently for the subset of threat-model work it excels at (e.g., rapid threat identification, priority scoring, control mapping against domain-specific catalogs)

## Known Gaps and Risks
1. **AI agent input/output contract:** Current course teaches reasoning but doesn't define structured inputs (threat register format) or control recommendation outputs (decision tree, justification structure, approval status)
2. **Domain-specific control catalogs:** Lessons reference external standards (ASVS, MASVS) but don't curate IAM/Cloud/Web-specific control libraries the agent can query
3. **Escalation policy detail:** Severity-to-P-band rules exist, but the "business-critical asset" definition and approval workflow SLA need concrete operationalization for agent implementation
4. **Deferred items (not blockers):** Risk acceptance criteria, calibration workshop format, and continuous learning feedback loops are documented as "post-Phase-2" decisions

## Artifacts in Workspace
- `todos/security-threat-modeling-handoff-2026-06-14.md` (previous handoff)
- Lessons, references, and learning records structured under threat-modeling-course/
- No code/implementation artifacts; course is pure educational content.

## Recommended Entry Point for Next Work
**Lesson 8: Control Quality and Requirement Writing** is the critical bridge between threat identification (Lessons 1-7) and operational governance (Lesson 9).

Build this with:
1. How to translate a threat decision into a testable requirement
2. Concrete examples: IAM threat → ASVS requirement + test case; Cloud threat → MASVS requirement + runtime monitoring query
3. Evidence collection roadmap: what must be proven at design phase vs. build phase vs. runtime
4. Reference card: common threat types → commonly applicable control families per domain

## Suggested Approach for Continuation
1. **Build Lesson 8:** Control Quality (bridges design to requirements)
2. **Build Lesson 9:** Governance (operationalizes decision gates and escalation)
3. **Build Lesson 10:** Domain-Specific Threat Modeling (showcases all 9 lessons applied across IAM/Cloud/Web)
4. **Create learning records** for each new lesson capturing insights for agent design phase
5. **THEN transition to Phase 2:** AI agent specification (input/output contract, decision trees, control lookup logic)

---

## Critical Next Steps (Phase 1 Completion)

**Lesson 8: Control Quality and Requirement Writing**
- Structure: Threat decision → Requirement language → Verification approach → Evidence formats
- Examples: map 5-10 common threats (from Lesson 6 workshop examples) to ASVS/MASVS clauses with test cases
- Include: how to handle design-phase gaps (what must be documented vs. deferred to build/runtime)
- Learning record: 0008-control-quality-and-requirement-writing.md

**Lesson 9: Governance and Approval Workflows**
- Structure: Decision tree for escalation, approval gates, risk acceptance
- Examples: when does a Severity 5 risk escalate to P0? When can it be closed without remediation?
- Include: approval SLA, documentation formats, delegation rules
- Learning record: 0009-governance-and-approval-workflows.md

**Lesson 10: Domain-Specific Threat Modeling**
- Structure: IAM, Cloud, Web (three subsections, one lesson)
- Each subsection: common elements → common threats → worked example (end-to-end applying Lessons 1-9)
- Include: domain-specific control library (threats → applicable controls)
- Learning record: 0010-domain-specific-threat-modeling.md

**Entry Point for Phase 2 (AI Agent Specification):**
Once Lessons 1-10 are complete, Phase 1 is done. Then pivot to designing the agent: threat model input schema, decision logic (when to recommend/escalate/defer), control lookup tables, and evidence routing.

---

**Status:** Ready for continuation. One pedagogical lesson remains. Then pivot to AI agent operationalization.

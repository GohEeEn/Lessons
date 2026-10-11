# Teaching Notes — CISSP Course

## Learner Profile
- 4 years security engineering in public cloud (IAM, architecture, threat modelling)
- Currently in security design review / consultation / risk assessment work
- Career target: Security Architect
- Learning style: **Visual learner** — always use Mermaid diagrams for any concept with structure, flow, or hierarchy

## Teaching Preferences
- Diagrams first, prose second: lead with a Mermaid diagram for every domain overview, process flow, or model
- Tie every lesson back to the security architect lens: "a security architect would care about this because..."
- Fast-track IAM content (Domain 5) — 4 years direct experience; use retrieval practice to confirm depth, don't re-teach basics
- Avoid cloud-vendor specifics in lessons — this course is vendor-agnostic (SC-500 covers Azure)

## CISSP Exam Mindset (remind in every lesson)
The CISSP tests the **manager/architect** perspective, not the technician's:
- Ask "what should be done FIRST?" not "what is technically correct?"
- Risk-based thinking always beats feature-based thinking
- When in doubt: protect life > protect data > protect systems > protect money

## Study Sequencing (⚠️ current, overrides fixed phase order)
- As of 2026-07-06, lesson order is **work-relevance-driven**, not fixed-phase. Prioritize
  whatever domain/topic most directly helps current job scope (threat modeling, security risk
  assessment, security consultation).
- **Active priority: Domain 6 (Security Assessment and Testing)** — genuine knowledge gap
  despite adjacent risk-assessment/threat-modeling experience; full depth, no fast-tracking.
- See `MISSION.md`'s "Current Focus" section for the authoritative current priority.

## Job-Relevance Lens (🔧 required for Domain 6 lessons, encouraged elsewhere)
Every Domain 6 lesson must include a short **"🔧 In your work"** callout (parallel treatment to
the AI callout below) that explicitly ties the CISSP concept to current threat modeling / risk
assessment / consultation tasks — not just "here's the exam definition."

## AI Cross-Domain Lens (⚠️ applies from Lesson domain-1/0001 onward)
ISC2's April 2026 *Exam Guidance for Artificial Intelligence* means AI security is now live in the CISSP exam.
**Every domain lesson must include a short "AI in this domain" callout** covering:
- The most exam-likely AI threat or governance topic for that domain
- A link back to the AI primer (Lesson 0002) for foundation concepts
- Priority domains: D1 (AI governance/EU AI Act) and D3 (adversarial ML) are highest weight

## Domain Self-Assessment Status
- Not yet completed as of session 1
- Lesson 0001 is a diagnostic — complete before progressing to Phase 1

## Lesson Cadence Assumption
- ~30–45 min per lesson
- 2–3 lessons per week at 4 hrs/week study time
- Pacing: ~52–78 lessons total across 26 weeks

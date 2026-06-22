# Learning Record 0002 — ISC2 AI Exam Guidance: Scope Change for CISSP December 2026

**Date**: 2026-06-21
**Trigger**: User discovered ISC2 had published an AI-related announcement in 2026; research confirmed it directly affects the CISSP exam we are preparing for.

---

## What was learned

ISC2 published the **"Exam Guidance for Artificial Intelligence"** on April 2, 2026. This is **not** a new certification or separate exam. It is a public mapping document showing where AI security concepts have already been integrated into all 9 ISC2 exam blueprints — including CISSP — through their standard 3-year Job Task Analysis (JTA) refresh cycle.

**Key implication**: AI security is already live in the CISSP exam. The December 2026 exam will include questions requiring AI security knowledge.

**Source gap**: The Official Study Guide (10th Edition, 2024) and Official Practice Tests (4th Edition, 2024) both predate this guidance and do not cover these AI topics.

---

## Per-domain impact (for this study plan)

| Domain | Impact | Key new topics |
|--------|--------|---------------|
| D1 — Security & Risk Management | 🔴 HIGH | AI governance, EU AI Act risk tiers, NIST AI RMF, responsible AI, AI-specific risk assessments |
| D2 — Asset Security | 🟡 MED | Training datasets as assets, model IP protection, dataset provenance |
| D3 — Security Architecture & Engineering | 🔴 HIGH | Adversarial ML attacks (model poisoning, inversion, membership inference), differential privacy, XAI, securing AI workloads |
| D4 — Communication & Network Security | 🟡 MED | AI/ML API protection, zero trust for AI services, AI data flow isolation |
| D5 — Identity & Access Management | 🟡 MED | MLOps pipeline RBAC, AI-augmented continuous authentication |
| D6 — Security Assessment & Testing | 🟢 LOW | Adversarial AI red-teaming, ML model fuzzing, drift monitoring |
| D7 — Security Operations | 🟢 LOW | AI-augmented SIEM/SOAR, monitoring AI services in production |
| D8 — Software Development Security | 🟡 MED | Prompt injection, AI supply chain attacks, model backdoors, AI in SDLC |

---

## What changed in the study plan

1. **RESOURCES.md** — Added ISC2 Exam Guidance PDF, NIST AI RMF 1.0, and EU AI Act summary as required supplemental sources
2. **MISSION.md** — Added AI supplement note under Constraints
3. **NOTES.md** — Added "AI Cross-Domain Lens" instruction: every domain lesson from Lesson 0003 onward must include an AI callout
4. **Lesson 0002** (new) — AI Security Primer inserted between Lesson 0001 (diagnostic) and Phase 1 (D1); provides foundation for all AI callouts in later lessons
5. **Domain lessons** — All future lessons will include a short "AI in this domain" section

---

## Insight

The 10th Edition study guide remains the correct primary source for all core domain content. AI integration is **additive, not replacement** — think of it as an extra lens to apply to concepts you already learn. The exam is not asking for AI engineering depth; it is asking for the same manager-level risk and governance thinking applied to AI systems.

The EU AI Act is the regulatory analogue to GDPR for AI — worth understanding at the same level of depth as GDPR in D1. The NIST AI RMF is the framework analogue to NIST CSF/RMF — four functions: Govern, Map, Measure, Manage.

---

**This record should be revisited** when planning D1 and D3 lessons to ensure AI topics are correctly calibrated.

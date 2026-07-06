# Mission: CISSP — Security Architect Credential & Mindset

## Why
You have 4 years of cloud security engineering experience (IAM, threat modelling, security design reviews) and are moving toward a security architect role. The CISSP validates the breadth of knowledge that cloud-specialist engineers typically lack — governance, law, network architecture, cryptography, software security — while grounding it all in a risk-management mindset that architects must hold.

## Success looks like
- Pass the CISSP CAT exam (700/1000) by December 2026
- Articulate the risk reasoning behind controls across all 8 domains, not just cloud/IAM
- Lead security design reviews that span network, software, physical, and governance concerns — not just cloud identity
- Identify your own knowledge gaps per domain and fill them systematically before the exam
- Speak fluently at the "manager of security" level: priorities, trade-offs, residual risk — not just "here's how to configure it"

## Constraints
- **Time**: ~26 weeks (June → December 2026), 4 hrs/week (~104 hours total)
- **Primary source**: ISC2 CISSP Official Study Guide, 10th Edition (Chapple, Stewart, Gibson) — already owned
- **AI supplement required**: ISC2 published the *Exam Guidance for Artificial Intelligence* on April 2, 2026 — AI security concepts are now live in the CISSP exam. The 10th Edition predates this. Every domain lesson must include AI context. (See `RESOURCES.md` for AI sources.)
- **Prior knowledge**: Strong in Domain 3 (cloud architecture), Domain 5 (IAM), parts of Domain 1 (risk assessment, threat modelling); gaps in network security, legal/compliance, physical security, software dev security
- **Learning preference**: Visual learner — diagrams, flows, and maps over walls of text
- **Domain self-assessment**: Not yet completed — first lesson is a diagnostic map

## Out of scope
- Vendor-specific implementations (Azure/AWS tooling — covered in SC-500)
- Hands-on labs / penetration testing practice (OSCP territory)
- Associate of ISC2 pathway (not needed — experience requirement met)
- Memorisation cramming before understanding (storage strength over fluency tricks)

---

## Current Focus (overrides phase order below)

As of 2026-07-06, sequencing has shifted from strict phase order to **work-relevance-driven**:
lessons are prioritized by what's most useful for current job scope (threat modeling, security
risk assessment, security consultation) rather than the original week-by-week plan.

- **Active priority: Domain 6 — Security Assessment and Testing (Ch 15).** Despite adjacent
  experience in risk assessment/threat modeling, this is a genuine knowledge gap — full depth
  needed, no fast-tracking. Broken into 6 lessons, one per Ch 15 sub-topic:
  1. Building a Security Assessment and Testing Program
  2. Performing Vulnerability Assessments
  3. Testing Your Software
  4. Training and Exercises
  5. Implementing Security Management Processes
  6. Collecting Security Process Data
- Every D6 lesson includes a dedicated **"🔧 In your work"** callout bridging the concept to
  threat modeling / risk assessment / consultation tasks (in addition to the existing "AI in
  this domain" callout).
- D1 (in progress) and other domains are paused, not abandoned — resume per relevance, not a
  fixed schedule.
- The 26-week phase table below is kept as a **reference baseline** (original intent, useful
  for gauging overall scope/pacing) but no longer dictates lesson order.

---

## Learning Path (26 Weeks) — reference baseline, superseded by Current Focus above

| Phase | Weeks | Focus | Domains |
|-------|-------|-------|---------|
| 0 — Map | 1 | Diagnostic (0001) + AI Security Primer (0002) | All 8 |
| 1 — Foundation | 2–6 | Risk, governance, law, asset security | D1 (Ch 1–4), D2 (Ch 5) |
| 2 — Architecture | 7–13 | Crypto, models, vulnerabilities, network | D3 (Ch 6–10), D4 (Ch 11–12) |
| 3 — IAM & AppSec | 14–17 | Identity (fast-track), software security | D5 (Ch 13–14), D8 (Ch 20–21) |
| 4 — Operations | 18–22 | Ops, incidents, DR, investigations | D6 (Ch 15), D7 (Ch 16–19) |
| 5 — Review | 23–26 | Interleaved retrieval + mock exams | All 8 |

*Phase 3 (IAM) is fast-tracked given existing 4-year cloud/IAM depth.*

---

**Date Created**: 2026-06-21
**Update this if your mission changes or evolves.**

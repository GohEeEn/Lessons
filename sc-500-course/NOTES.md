# Teaching Notes — SC-500

## Your Profile
- **Goal**: Pass SC-500 in 15 weeks; build real hands-on Azure security skills
- **Azure level**: Beginner — nearly all Azure services are new; small foothold in identity (Entra ID)
- **Prior domain**: Security reviews and threat modelling (see `threat-modeling-course` workspace)
- **Resources**: Pluralsight (full access), Microsoft Learn sandboxes (free), $100/month Azure subscription (backstop)
- **Time budget**: 8 hours/week, 120 hours total

## Teaching Preferences
- **Free-first**: Prioritise Pluralsight + MS Learn sandboxes over spending Azure credits
- **Hands-on emphasis**: Each domain must have at least one real lab, not just reading
- **Domain-by-domain**: Build mental models per area before interleaving
- **AI security is separate**: Treat AI workload security as its own mini-track after Compute fundamentals (weeks 10–11)

## Curriculum Order
1. Weeks 1–3: Identity, Access & Governance
2. Weeks 4–6: Networking & Storage Security
3. Weeks 7–9: Compute Security (servers, containers, app platforms)
4. Weeks 10–11: AI Security (Copilot, Foundry, Entra Agent ID, Defender for AI)
5. Weeks 12–13: Security Posture & Sentinel
6. Weeks 14–15: Mock exams and interleaved review

## Diagram & Graph Requirements
- **Mermaid only** — all diagrams and graphs in lessons MUST be rendered via [Mermaid.js](https://mermaid.js.org/), included from CDN in each HTML lesson. Never use ASCII/text-art diagrams; they misalign and are hard to read.
- Include `<script type="module">` Mermaid initialisation in every lesson that contains a diagram.
- Use `graph TD` for hierarchies, `sequenceDiagram` for flows, `classDiagram` for relationships.

## Reminders for Future Lessons
- Connect Azure security controls back to threat modelling concepts where possible (user has strong threat modelling foundation)
- Use retrieval practice — quizzes that require active recall, not recognition
- Each lesson = one tightly scoped skill, completable in 30–45 mins
- Always include a hands-on lab pointer or embedded exercise
- Space concepts: revisit earlier domain terms in later lessons to reinforce storage strength

---

*Add notes about preferences or patterns as they emerge.*

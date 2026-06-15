# Copilot Instructions — Security Lessons

## Learning Preference — Visual Learner
- The user is a **visual learner**. Always illustrate concepts that have meaningful structure (hierarchies, flows, sequences, component relationships) with a diagram.
- Do **not** force diagrams onto purely definitional answers (e.g. "what does PIM stand for?").
- In **chat responses**: provide a Mermaid fenced code block alongside a one-sentence plain-language summary, so the concept is clear even if Mermaid isn't rendered in the terminal.
- In **HTML lesson files**: render diagrams as live Mermaid via CDN (see below).
- **Scale complexity to the concept** — simple concepts get small diagrams (3–5 nodes); complex architectures get fuller diagrams.

## Diagrams & Graphs
- **Mermaid only** — all diagrams in HTML lesson files MUST use [Mermaid.js](https://mermaid.js.org/) via CDN. Never use ASCII or text-art diagrams.
- In HTML lessons: initialise with `<script type="module">` from `https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs`.
- Use `graph TD` for hierarchies, `sequenceDiagram` for flows, `classDiagram` for relationships.

## Workspace Structure
This repo contains self-contained teaching workspaces. Each has:
- `MISSION.md` — learning goal and constraints
- `NOTES.md` — user preferences and teaching reminders
- `RESOURCES.md` — curated sources
- `lessons/*.html` — one HTML file per lesson, numbered `0001-...`
- `reference/*.html` — cheat sheets and glossaries
- `learning-records/*.md` — key insights, numbered `0001-...`

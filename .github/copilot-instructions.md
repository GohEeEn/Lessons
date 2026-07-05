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

## Lesson Linking
Every lesson HTML file **must** include a `<div class="nav-links">` footer with previous and next links.

**Format** (relative paths, same directory):
```html
<div class="nav-links">
  <a href="NNNN-prev-slug.html">← Lesson NNNN: Short Title</a>
  <a href="NNNN-next-slug.html">Lesson NNNN: Short Title →</a>
</div>
```

**Rules:**
- Use `href="#"` as a placeholder when the next lesson does not yet exist; include the expected title as link text so the intent is clear.
- The first lesson in a course has no `←` link (or a link back to `index.html`).
- **When a new lesson is created**, always perform two additional updates:
  1. Update the *previous* lesson's forward nav link from `href="#"` to the new file's actual filename.
  2. Add the new lesson to `index.html` under the correct course and phase section.
- **`index.html` is the authoritative course hub.** Every lesson must be listed there. If a lesson is not in `index.html`, it is not discoverable.

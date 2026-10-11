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

## CISSP Domain Grouping
`cissp-course/lessons/` is organized by the 8 official CISSP domains, not flat:
- Domain-specific lessons live in `lessons/domain-N-<official-domain-name>/` (kebab-case, e.g. `domain-1-security-and-risk-management/`). Only create a domain folder once it has its first lesson.
- Cross-domain lessons (covering all 8 domains, e.g. the diagnostic and AI primer) stay directly in `lessons/` root, not inside any domain folder.
- Lesson numbers are **scoped per folder**, not global to the course: cross-domain `lessons/` root and each `domain-N-.../` folder each restart their own sequence at `0001`. A lesson's number reflects its position within its own folder only — the same number (e.g. `0001`) legitimately appears once per folder across the course.
- Each populated domain folder **must** have its own `index.html` containing a Mermaid diagram that maps how that domain's lesson concepts relate to and build on each other, plus a linked list of the domain's lessons.
- Concept maps are **full-skeleton, not lesson-scoped**: show every chapter/sub-topic from the study guide's table of contents for that domain (see `RESOURCES.md`/`MISSION.md` for the chapter range per domain), not just what's been taught. Render covered topics as solid/colored/clickable nodes linking to their lesson; render not-yet-covered topics as dashed/grey, unlinked nodes. This keeps the map an honest picture of true exam scope instead of silently looking complete. Hardcode the skeleton directly into the domain's `index.html` — no separate manifest file.

## Doc-Sync Enforcement
`README.md` and root `index.html` must always list every lesson across all three courses (cissp-course, sc-500-course, threat-modeling-course). This is **not** left to manual discipline — it's enforced deterministically:
- `scripts/check-course-docs.js` (Node) scans lesson files vs. links in `README.md`/`index.html` and fails on any missing, stale, or broken entry; also validates every populated CISSP domain folder has an `index.html` with a Mermaid diagram, linked from the root `index.html`, and that the diagram mentions every chapter number in that domain's MISSION.md-declared chapter range (catches an incomplete/out-of-scope concept map).
- `.github/workflows/check-course-docs.yml` runs this script on every push/PR — the authoritative, edit-source-agnostic gate.
- `.github/hooks/course-docs-check.json` reruns the same script after Copilot CLI tool calls for fast in-session feedback (non-blocking).
- When adding/moving a lesson, run `node scripts/check-course-docs.js` locally before considering the change complete.

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

## CISSP Glossary
The CISSP course maintains a living glossary at `cissp-course/reference/glossary.html`.

**When creating a new CISSP lesson**, always:
1. **Extract new terms** introduced in the lesson — any defined concept, framework, acronym, or vocabulary item the learner may not know.
2. **Add each term to the glossary** with:
   - `id` slug (kebab-case, e.g. `risk-register`)
   - Full definition (1–3 sentences, precise)
   - Domain badge(s) — which CISSP domains the term appears in
   - `lesson` and `lessonTitle` pointing to the current lesson
3. **Link each term inline** in the lesson body wherever it first appears meaningfully:
   ```html
   <a href="../reference/glossary.html#slug" class="g" data-tip="One-line summary shown on hover.">term text</a>
   ```
4. **Include the `.g` tooltip CSS** in every lesson's `<style>` block (copy from lesson 0003).
5. **Add `📖 Glossary` link** to the lesson's `nav-links` footer.

**Tooltip CSS** (add once per lesson `<style>` block):
```css
.g {
  border-bottom: 1px dotted var(--accent);
  cursor: help;
  color: inherit;
  text-decoration: none;
  position: relative;
}
.g:hover::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background: #1a1a1a;
  color: #fff;
  padding: 0.4rem 0.65rem;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: normal;
  max-width: 280px;
  z-index: 10;
  font-family: system-ui, sans-serif;
  pointer-events: none;
  line-height: 1.4;
}
```

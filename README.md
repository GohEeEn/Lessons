# Study-Lessons

Repository for security-focused lesson materials, including threat modeling and Azure security courses.

## Repository Structure

### cissp-course/
CISSP (Certified Information Systems Security Professional) certification prep, organized by the 8 official CISSP domains.

- **lessons/** - Core lesson content (HTML), grouped by domain
  - **General · Cross-Domain** (root of lessons/)
    - 0001: Domain Map & Diagnostic
    - 0002: AI Security Primer
  - **domain-1-security-and-risk-management/** - each populated domain folder has its own `index.html` with a Mermaid concept map
    - 0001: Risk Management Foundations — D1, Ch 1–2
  - **domain-6-security-assessment-and-testing/** - prioritized ahead of original phase order (see `MISSION.md` Current Focus) for direct relevance to current work
    - 0001: Building a Security Assessment and Testing Program — D6, Ch 15

- **reference/** - Supporting reference materials
  - Glossary (with per-term domain tags and lesson cross-references)

- **learning-records/** - Key insights and notes from each lesson

- **MISSION.md** - Course learning objectives
- **NOTES.md** - Teaching notes and preferences
- **RESOURCES.md** - Curated external resources

### threat-modeling-course/
Complete threat modeling curriculum with 7 lessons plus supporting materials.

- **lessons/** - Core lesson content (HTML)
  - 0001: Threat Identifier Mindset
  - 0002: Boundaries, Assumptions, and Control Verification
  - 0003: Question Generation in Unfamiliar Domains
  - 0004: Design-Phase Threat Model Inputs and Outputs
  - 0005: Risk Evaluation and Prioritization
  - 0006: Practical Risk Prioritization Workshop
  - 0007: OWASP Risk Rating Methodology Foundations

- **reference/** - Supporting reference materials
  - Security Review Checklist
  - Glossary
  - Reviewer Mindset Framework
  - Design-Phase Threat Model Template
  - Risk Prioritization Rubric
  - Risk Scoring Framework and Standards Crosswalk

- **learning-records/** - Key insights and notes from each lesson

- **MISSION.md** - Course learning objectives
- **NOTES.md** - Teaching notes and preferences
- **RESOURCES.md** - Curated external resources

### sc-500-course/
Azure Security Engineer Associate (SC-500) certification course materials.

- **lessons/** - Lesson content
  - 0001: Azure Entra ID Identity Model

- **reference/** - Supporting materials (to be added)

- **learning-records/** - Key insights from lessons

- **MISSION.md** - Course learning objectives
- **NOTES.md** - Teaching notes and preferences
- **RESOURCES.md** - Curated external resources

## How to Use

Each course is structured as a self-contained learning workspace:
1. Read the **MISSION.md** to understand learning goals
2. Work through **lessons/** sequentially
3. Reference **reference/** materials during lessons
4. Document insights in **learning-records/**
5. Check **RESOURCES.md** for additional reading

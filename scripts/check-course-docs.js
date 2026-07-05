#!/usr/bin/env node
/**
 * Deterministic doc-sync check.
 *
 * Scans each course's lessons/ folder and verifies:
 *   1. Every lesson HTML file is linked from the root index.html (by relative href).
 *   2. Every lesson's 4-digit number is mentioned somewhere in the root README.md.
 *   3. Every href in index.html that points at a lesson file actually exists on disk
 *      (catches stale/renamed links).
 *   4. (CISSP-only) Every populated domain-N-* folder under cissp-course/lessons/
 *      has its own index.html containing a Mermaid diagram, and the root
 *      index.html links to that domain's index.html.
 *   5. (CISSP-only) Each populated domain's concept map mentions every chapter
 *      number in its MISSION.md-declared range (e.g. "D1 (Ch 1–4)"), so a
 *      map missing whole chapters of the true exam scope gets flagged.
 *
 * Exits non-zero with a report of every mismatch found. Run from repo root:
 *   node scripts/check-course-docs.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const COURSES = ['cissp-course', 'sc-500-course', 'threat-modeling-course'];

function readFile(p) {
  return fs.readFileSync(p, 'utf8');
}

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

function toRepoRelative(p) {
  return path.relative(REPO_ROOT, p).split(path.sep).join('/');
}

function main() {
  const errors = [];

  const indexPath = path.join(REPO_ROOT, 'index.html');
  const readmePath = path.join(REPO_ROOT, 'README.md');
  const indexContent = readFile(indexPath);
  const readmeContent = readFile(readmePath);

  // Collect every href="...html" appearing in root index.html once, for reuse.
  const indexHrefs = [...indexContent.matchAll(/href="([^"]+\.html)"/g)].map((m) => m[1]);

  for (const course of COURSES) {
    const lessonsDir = path.join(REPO_ROOT, course, 'lessons');
    const allHtml = walk(lessonsDir);

    // "Lessons" are numbered HTML files (0001-....html). Per-domain index.html
    // landing pages (CISSP) are not lessons themselves.
    const lessonFiles = allHtml.filter((p) => /^\d{4}-/.test(path.basename(p)));

    for (const lessonPath of lessonFiles) {
      const rel = toRepoRelative(lessonPath);
      const lessonNumber = path.basename(lessonPath).slice(0, 4);

      if (!indexHrefs.includes(rel)) {
        errors.push(`index.html is missing a link to ${rel}`);
      }
      if (!readmeContent.includes(lessonNumber)) {
        errors.push(`README.md does not mention lesson ${lessonNumber} (${rel})`);
      }
    }
  }

  // Every href in index.html pointing at a lesson-looking path must exist on disk.
  for (const href of indexHrefs) {
    if (COURSES.some((c) => href.startsWith(`${c}/lessons/`))) {
      const fullPath = path.join(REPO_ROOT, href);
      if (!fs.existsSync(fullPath)) {
        errors.push(`index.html links to ${href}, which does not exist on disk`);
      }
    }
  }

  // CISSP-only: every populated domain-N-* folder needs its own index.html with
  // a Mermaid diagram, and the root index.html must link to it.
  const cisspLessonsDir = path.join(REPO_ROOT, 'cissp-course', 'lessons');
  if (fs.existsSync(cisspLessonsDir)) {
    const domainDirs = fs
      .readdirSync(cisspLessonsDir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && e.name.startsWith('domain-'))
      .map((e) => e.name);

    // Parse MISSION.md's phase table for "D<n> (Ch <a>–<b>)" style entries, e.g.
    // "D1 (Ch 1–4), D2 (Ch 5)" — gives each domain's expected chapter range.
    const missionPath = path.join(REPO_ROOT, 'cissp-course', 'MISSION.md');
    const chapterRangeByDomain = {};
    if (fs.existsSync(missionPath)) {
      const missionContent = readFile(missionPath);
      for (const m of missionContent.matchAll(/D(\d+)\s*\(Ch\s*(\d+)(?:[–-](\d+))?\)/g)) {
        const domainNum = m[1];
        const chStart = parseInt(m[2], 10);
        const chEnd = m[3] ? parseInt(m[3], 10) : chStart;
        chapterRangeByDomain[domainNum] = { chStart, chEnd };
      }
    }

    for (const domainDir of domainDirs) {
      const domainPath = path.join(cisspLessonsDir, domainDir);
      const domainIndexPath = path.join(domainPath, 'index.html');
      const domainRel = toRepoRelative(domainIndexPath);

      if (!fs.existsSync(domainIndexPath)) {
        errors.push(`${domainDir} has no index.html (expected a Mermaid concept map)`);
        continue;
      }

      const domainIndexContent = readFile(domainIndexPath);
      if (!/mermaid/i.test(domainIndexContent)) {
        errors.push(`${domainRel} does not appear to contain a Mermaid diagram`);
      }

      if (!indexHrefs.includes(domainRel)) {
        errors.push(`Root index.html does not link to ${domainRel}`);
      }

      // Lightweight completeness check: the domain's concept map should at
      // least mention every chapter in its MISSION.md-declared range, so an
      // incomplete/out-of-scope map (missing whole chapters) gets flagged.
      const domainNumMatch = domainDir.match(/^domain-(\d+)-/);
      const domainNum = domainNumMatch ? domainNumMatch[1] : null;
      const range = domainNum ? chapterRangeByDomain[domainNum] : null;
      if (range) {
        const missingChapters = [];
        for (let ch = range.chStart; ch <= range.chEnd; ch++) {
          if (!new RegExp(`Ch\\.?\\s*${ch}\\b`).test(domainIndexContent)) {
            missingChapters.push(ch);
          }
        }
        if (missingChapters.length > 0) {
          errors.push(
            `${domainRel} is missing chapter coverage for Ch ${missingChapters.join(', ')} ` +
              `(MISSION.md declares D${domainNum} spans Ch ${range.chStart}–${range.chEnd})`
          );
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error(`❌ Course docs out of sync (${errors.length} issue(s)):\n`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  console.log('✅ README.md and index.html are in sync with all course lesson files.');
}

main();

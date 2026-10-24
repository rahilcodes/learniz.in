# Placeholders — assets still to be supplied

Every missing screenshot, render, photo or video is rendered as a labelled placeholder
(dashed neutral border, diagonal hatch, monospace caption) at the final aspect ratio.
Replace each by dropping the asset into `src/assets/images/` and swapping the
`placeholder(...)` call in the page file for an `<img>` (with `width`/`height` and `loading="lazy"`),
or — for the simulations — the real sim embed.

| # | Page | Where | Caption on the page | Aspect | File / component | Status |
|---|---|---|---|---|---|---|
| 1 | Home, Platform, Interactive Animations, See It Live | Helicopter simulation widget | `helicopter render (real sim asset)` | 220×110 px craft body | `simPanel()` in `src/components/layout.js` | **open** — Antigravity item 4 |
| 2 | Home (How it works, pane 1) | Classroom "Observe" screen | hatched mini helicopter | 120×56 px | `classroomPanel()` in `src/components/layout.js` | **open** — reuse item 4 |
| 3 | Interactive Animations | Coverage section | ray optics | 4:3 | `sim-ray-optics.webp` (Antigravity option B) | done |
| 4 | Interactive Animations | Coverage section | photosynthesis | 4:3 | `sim-photosynthesis.webp` + `-light.webp` (option A, theme-swapped) | done |
| 5 | LMS & Exam Builder | Step 03 | exam builder, scheduling view | 16:10 | `exam-builder-schedule.webp` + `-light.webp` (option A) | done |
| 6 | See It Live | Classroom sessions | platform overview poster | 16:9 | `video-poster-overview.png` (option A) | poster done — **video file still needed** |
| 7 | See It Live | Classroom sessions | teacher classroom demo poster | 16:9 | `video-poster-teacher.jpg` (option A) | poster done — **video file still needed** |
| 8 | See It Live | Classroom sessions | Early Gap Detection poster | 16:9 | `video-poster-analytics.png` (option B) | poster done — **video file still needed** |
| 9 | About | Mission section | `photo — Learniz team / Hyderabad office` | 4:3 | `src/pages/about.js` | **open** — Antigravity item 6 |
| 10 | Blog · NEP 2020 article | Mid-article figure | `article image — classroom display running the helicopter simulation` | 16:9 | `src/pages/blog_post_nep.js` | **open** — Antigravity item 5 |

Images are served at ~2× their rendered width (UI shots 1200 px WebP q90, posters 800 px), lazy-loaded with
`width`/`height` set. Use `shot({ src, light?, alt, w, h, caption? })` from `layout.js` to place new ones.
The Antigravity previews live in `dist/previews/` (and `docs/previews/`); delete that folder before deploying.

## Product UI built in HTML/CSS (not placeholders, but confirm the data)

These mocks follow the design file. The numbers in them are illustrative, not real school data:
dashboard card (hero), principal view bars, question generator rows, exam-builder structure,
live-submissions panel, role mini-panels (School overview / This week · Ms. Rao / Aarav · Class 9-B).

## Numbers to confirm (currently placeholders in copy)

| Where | Value shown | Note |
|---|---|---|
| Home · stat band | 10 s · 25 · 7 · 12 | From the design file; README says confirm with client |
| Home · hero fine print, FAQ | "No login needed to try the demos", "12 live demos" | Confirm count of open demos on /see-it-live |
| Founding Schools · cohort panel | Cap 10 · 4 spots remaining · 6 enrolled | Hard-coded in `src/pages/founding_schools.js` (`data-remaining="4"`) |
| Founding Schools / FAQ / Refund | 30-day free pilot | Previous modal said 14 days; the site's 30 days was kept everywhere |
| Founding Schools | "Locked founding tier … held for the year … does not increase" | Merges the design ("locked for the year") with the old site ("lifetime"); the old "50% off" claim was dropped — reinstate if true |
| FAQ · onboarding | "Account setup under 48 hours … named lead trains teachers over two weeks" | Merges the old site (48 h) with the design (two weeks) |
| Interactive Animations / FAQ | "350+ experiments" | Removed pending confirmation; add back to the coverage lede if accurate |

## Brand

- Logo: the official logo is used in the nav, mobile header, LP header and footer — `logo-light.png` on the light theme, `logo-dark.png` on dark (both 305×96, 2×, cropped and optimised from `learniz-logo-horizontal.png` / `learniz-logo-white.png`). `logo-dark.png` is derived from the colour original (text set to the system's text colour, gradient mark kept), so its edges are clean.
- Social preview image `learniz-social-preview.jpg` (1200×630) still uses the old blue brand — redo in the new system.
- `favicon.png` / `apple-touch-icon.png` — same.

## Unreferenced legacy images (safe to delete)

`ai-intelliq-new.jpg`, `analytics-smart.jpg`, `helicopter-generated.jpg`, `hero-helicopter-sim*.png`,
`learniz-logo-*.png/jpg`, `learniz-mark.png`, `lms-exam-builder-preview.png/.webp`, `preview-*-logo.jpg`.

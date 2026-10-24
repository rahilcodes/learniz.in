# Learniz redesign — audit & build plan

Status: **awaiting approval before any code is written.**
Design source: `design_handoff_learniz_redesign/` (Nocturne tokens, `Learniz Homepage.dc.html`, README).

---

## 1. Stack (what exists today)

| Layer | Finding |
|---|---|
| Generator | Zero-dependency Node ≥18 ESM static-site generator. `src/pages/*.js` export a `render…()` returning an HTML string; `build.js` writes `dist/` and mirrors to `docs/`. No npm dependencies, no bundler, no framework. |
| Routing | `build.js` route registry → `/<route>/index.html`, plus `<route>.html` and `.dc.html` aliases. `BASE_PATH` (default `/learniz.in` for GitHub Pages; `''` for the Hostinger root domain). |
| Shared components | `src/components/{Header,Footer,SEOHead,BookingModal,WhatsAppFloat}.js`. |
| Styles | `src/assets/css/main.css` (37 KB) — blue-primary / violet / orange palette, Figtree + Inter + JetBrains Mono from Google Fonts, light theme only. Very heavy use of inline `style=""` in page templates. |
| Runtime JS | `src/assets/js/main.js` (30 KB): mobile drawer, demo modal + validation, helicopter sim (rpm **and mass** sliders), IntelliQ question generator (4-subject local question bank), FAQ accordion + search + category filter, founding-schools 10-slot counter, "See it live" click-to-mount stubs. No animation library in the stack → **CSS + IntersectionObserver only** (as the brief prefers). |
| Icons | 46 Lucide SVG files loaded via `<img>`. → replaced by inline **Phosphor** SVG. |
| Images | Logo set (horizontal, white, mark, original jpg), helicopter sim renders (3 PNG + jpg), `lms-exam-builder-preview.png/webp`, `analytics-smart.jpg`, `ai-intelliq-new.jpg`, `learniz-social-preview.jpg`, favicon, apple-touch-icon. |
| SEO | `SEOHead.js`: title/description per page, canonical, OG + Twitter, JSON-LD (Organization + WebSite everywhere; SoftwareApplication on /platform; FAQPage on /faq; Article on both posts). `sitemap.xml` (excludes `/lp/*`), `robots.txt` (`Disallow: /lp/`), `.htaccess` (clean URLs, caching, security headers), `404.html`. |
| Deploy | `deploy.py` builds with `BASE_PATH=''`, tars `dist/`, SFTP to Hostinger. `server.js` local preview, `test_routes.py` checks 30 endpoints. |
| Contact | +91-9032181083 (phone/WhatsApp), info@learniz.in, Hyderabad; Login → `https://app.learniz.in/login`. |

### Functional gaps found (pre-existing)
1. **Lead forms go nowhere.** The modal form fakes success with a `setTimeout`. The `/book-demo`, `/contact` and `/lp/demo` page forms have **no handler at all** (submit does nothing). I'll keep identical fields and validation and wire all four to one submit function with a configurable endpoint — **you need to tell me where leads should go** (Formspree/Web3Forms/your API/email).
2. **`deploy.py` has the Hostinger SSH password hard-coded and committed.** Recommend rotating it and moving it to an env var / `.env` that is git-ignored. I will not touch deploy.py otherwise.
3. "See it live" video/demo cards only swap in a text stub on click; no real embeds exist.
4. `/platform` and `/academiz` render the same page (duplicate URL, no canonical difference). Keeping both as today; flagging only.

---

## 2. Page & route map (25 routes, all kept, no URL changes)

| # | URL | Current H1 | Sections today | Forms | Schema |
|---|---|---|---|---|---|
| 1 | `/` | Concept Clarity in every class. Outcomes you can see. | 13: hero w/ browser mockup, Why Learniz (5 problems), Audiences (4 cards), helicopter sim, IntelliQ widget, LMS & exams image, analytics mockup, See it in action (3 cards), Founding Schools + counter, Trust (3), How it works (4 steps), FAQ teaser (6), Final CTA | modal | Org/WebSite |
| 2 | `/platform` (+`/academiz`) | Concept Clarity in every class… | hero, 4 modules, NEP/NCF alignment, infrastructure (5 items), CTA | modal | SoftwareApplication |
| 3 | `/features/interactive-animations` | Learning by Doing in every science lesson… | hero, helicopter widget, subject coverage (4), CTA | modal | – |
| 4 | `/features/intelliq` | Teaching Time Reclaimed with Assessment in Seconds. | hero, live generator widget, benefits (3), CTA | modal | – |
| 5 | `/features/lms-exam-builder` | Formative Assessment, Built In… | hero, 3-step workflow cards, CTA | modal | – |
| 6 | `/features/analytics` | Early Gap Detection, weeks before results… | hero, heatmap card, capabilities (3), CTA | modal | – |
| 7 | `/for-institutions` | Early Gap Detection, weeks before results. | hero, 3 pillars, CTA | modal | – |
| 8 | `/for-teachers` | Visible Understanding in class… | hero, 3 features, CTA | modal | – |
| 9 | `/for-students` | Learning by Doing: Concept Clarity that stays with you. | hero, 3 items, CTA | modal | – |
| 10 | `/for-parents` | Parent Confidence: Progress beyond marks… | hero, 3 items, CTA | modal | – |
| 11 | `/see-it-live` | Cause-and-Effect Thinking: Test Learniz Live… | hero, helicopter sim (rpm+mass), IntelliQ demo, 3 video cards, CTA | modal | – |
| 12 | `/founding-schools` | Future-Ready Classrooms: the Founding Schools Programme. | hero + counter box, receive/provide lists, CTA | modal | – |
| 13 | `/about` | Every class an experiment, not a lecture… | hero, mission + corporate facts, 3 principles, CTA | modal | – |
| 14 | `/blog` | Pedagogy Insights for Indian School Leaders | hero, 2 articles, newsletter band (no backend) | – | – |
| 15 | `/blog/what-experiential-learning-means-under-nep-2020` | (article) | header, prose (4 H2), CTA box | – | Article |
| 16 | `/blog/how-ai-question-generators-save-teachers-5-hours-a-week` | (article) | header, prose (4 H2), CTA box | – | Article |
| 17 | `/faq` | Foundational Conceptual Strength: Practical Answers… | hero, search, 6 category tabs, 18-Q accordion, help strip | search | FAQPage |
| 18 | `/contact` | Speak Directly with the Learniz Team | hero, 4 channel cards, inquiry form (7 fields) | page form | – |
| 19 | `/book-demo` | Concept Clarity in every class… | hero, walkthrough list, booking form (7 fields) | page form | – |
| 20 | `/privacy` | Privacy Policy | 6 numbered H2 prose | – | – |
| 21 | `/terms` | Terms of Service | 6 numbered H2 prose | – | – |
| 22 | `/refund` | Refund & Cancellation Policy | 4 numbered H2 prose | – | – |
| 23 | `/lp/founding-schools` | (campaign, no nav) | minimal header, 3 highlights, CTA | modal | noindex via robots |
| 24 | `/lp/demo` | (campaign, no nav) | minimal header, value list, 5-field form | page form | noindex via robots |
| 25 | `/404.html` | Page Not Found | single card | – | – |

All titles, meta descriptions, canonicals, OG/Twitter tags and JSON-LD are kept verbatim except the homepage (README copy wins; title/description already match the new hero).

---

## 3. Homepage: old content vs. approved design

The design file replaces the homepage wholesale. Old homepage sections with **no slot in the new design**:

| Old section | Where it lives after redesign |
|---|---|
| Why Learniz (5 problems) | Dropped from home. Content not present elsewhere → I will **not** silently delete it; see question Q4. |
| LMS & Exams showcase | `/features/lms-exam-builder` (already covers it) |
| Analytics browser mockup | Replaced by the design's dashboard card (hero) + principal pane (How it works) |
| See it in action (3 cards) | `/see-it-live` |
| Trust (registered company / try before you call / plain terms) | `/about` (corporate facts) — see Q4 |
| How it works (4 onboarding steps) | Replaced by the design's 3-step sticky story; the 4 onboarding steps move to `/book-demo` walkthrough |
| FAQ teaser (6) | Replaced by the design's 5 FAQs; the full 18 stay on `/faq` |
| Founding counter (6/10) | Replaced by the design's 3 numbered rows |

### Copy conflicts between the existing site and the design (site wins on content unless you say otherwise)

| Topic | Existing site | Design file |
|---|---|---|
| Pilot length | 30-day free pilot (FAQ, Founding, Refund) — modal says **14-day** | not mentioned |
| Founding price | "Locked 50% off", "lifetime founding tier" | "Founding price, locked for the year" |
| Onboarding | "less than 48 hours" | "Two weeks, named onboarding lead" |
| Cohort size | 10 schools, 4 spots open (hard-coded) | not mentioned |
| Product name | "IntelliQ™" | "Question generator" |
| Email | info@learniz.in | hello@learniz.in → **site wins** |
| Content claim | "350+ interactive experiments" | "12 live demos open to try" |
| Stat band | — | 10s / 25 / 7 / 12 (README: placeholders) |

---

## 4. Design-system build (shared by every page)

- `src/assets/css/tokens.css` — `:root` dark tokens copied from `_ds/…/styles.css` + the `html[data-theme=light]` block from the design file. Nothing else defines a colour.
- `src/assets/css/site.css` — Nocturne component layer (`.btn`, `.tag`, `.input`, `.card`, `.table`) + the homepage vocabulary as classes (no inline styles): `.lz-section`, `.lz-container`, `.lz-kicker`, `.lz-h2`, `.lz-lede`, `.lz-2col`, `.lz-panel` (product-mock card), `.lz-rows` (numbered rows), `.lz-tabs`, `.lz-sticky`, `.lz-stats`, `.lz-faq`, `.lz-prose`, `.lz-placeholder`, nav/footer/sticky-CTA. Mobile-first, breakpoints 960 / 560.
- Fonts: Inter self-hosted (woff2, weights 400/500 only — headings never exceed 500), `preload` + `font-display: swap`. Figtree and JetBrains Mono removed.
- Icons: Phosphor (regular weight) inlined from a small `icons.js` helper; 46 Lucide files deleted.
- Theme: inline `<script>` in `<head>` reads `localStorage.lz-theme`, falls back to `prefers-color-scheme`, sets `data-theme` before first paint (no flash). Toggle in nav, persisted.
- Motion: one `site.js` (replaces `main.js`, keeps all existing behaviours): reveal observer (`.rv`, 12 % threshold, once, 0.9 s cubic-bezier(.2,.7,.2,1), `--d` stagger), sticky-step observer (rootMargin −45 %/−45 %), count-up (1.5 s ease-out cubic), tab cross-fade, accordion (one open), nav frosting (passive scroll), hero tilt (pointer: fine only), marquee. `prefers-reduced-motion` disables all. No scrollIntoView, transform/opacity only.
- Lead capture: one `submitLead(form)` for modal + 3 page forms; endpoint from a single constant (Q1).

### Section vocabulary (codes used in §5)

| Code | Pattern (from the homepage design) |
|---|---|
| **HERO** | Light hero: tags → H1 (`clamp(40px,5vw,62px)`, second line accent-300) → 46ch sub → "Book a free demo" + ghost link → footnote. Optional right-hand HTML mock panel; otherwise single column with the radial accent glow. |
| **HEAD** | Kicker (hairline + 12px caps) + H2 (`clamp(32px,3.6vw,46px)`, ≤20ch) + 44ch body. |
| **2COL** | HEAD on one side, HTML product-mock panel / placeholder on the other (`.9fr/1.1fr`, gap 72, mirrored alternately). |
| **ROWS** | Numbered rows card (01/02/03…) — surface, 1px divider gaps. |
| **TABS** | Pill tab bar with cross-fading content + mini panel. |
| **STICKY** | Steps scrolling past a sticky cross-fading panel (inline cards ≤960). |
| **STATS** | Indigo stat band, count-up, max one per page. |
| **FAQ** | 2-col kicker/H2 + accordion. |
| **PROSE** | Long-form column (68ch, 17px/1.7), H2s on the HEAD scale, for legal and blog. |
| **FORM** | DS `.field/.input` fields in a surface panel, accent-outlined submit. |
| **CTA** | Closing two-column row: H2 + body + "Book a free demo" + footnote (the Founding Schools layout without the rows). |
| **FOOT** | Shared footer (4 columns + legal row) and mobile sticky CTA. |

---

## 5. Page-by-page plan

Every page: frosted nav, HERO, …, CTA, FOOT, modal. "Placeholder" = labelled hatch at final aspect ratio, listed in `PLACEHOLDERS.md`.

| # | Page | Sections (in order) | Interactive | Needs from you |
|---|---|---|---|---|
| 1 | **Home** | Exactly the design: nav · HERO + dashboard card + marquee · 2COL Learning-by-Doing (helicopter) · STICKY How it works · TABS Solutions by role · STATS · 2COL Founding + ROWS · FAQ · FOOT | tilt, slider, sticky steps, tabs, count-up, accordion | stat numbers; helicopter render; Q4 |
| 2 | **Platform** | HERO (+ compact dashboard mock) · STICKY "Four connected capabilities" (4 modules, each a mock pane: sim / generator / exam builder / analytics) · 2COL NEP 2020 / NCF-SE 2023 (comparison → ROWS) · ROWS infrastructure (5) · CTA | sticky steps | — |
| 3 | **Interactive Animations** | HERO · 2COL live helicopter sim (full widget, rpm + mass + reset) · ROWS subject coverage (Physics/Chem/Bio/Maths) · CTA | slider sim | sim screenshots (placeholders) |
| 4 | **Question Generator (IntelliQ)** | HERO · 2COL generator widget (subject/topic/difficulty/count/type, animated rows) · ROWS benefits (3) · CTA | generator | — |
| 5 | **LMS & Exam Builder** | HERO · STICKY-lite or 3× 2COL workflow (structure → setup → feedback) as mock panes · CTA | — | product screenshot (placeholder; existing `lms-exam-builder-preview.png` is off-palette — Q5) |
| 6 | **Analytics** | HERO (+ heatmap card) · 2COL question-level heatmap · ROWS capabilities (3) · CTA | heatmap hover titles | dashboard screenshot (placeholder) |
| 7–10 | **For Institutions / Teachers / Students / Parents** | HERO · TABS-as-links row (switch between the four audience pages) · 2COL pillars → ROWS (3) + role mini-panel (reusing the homepage role data) · CTA | — | — |
| 11 | **See It Live** | HERO · 2COL helicopter sim (01) · 2COL generator (02) · 3 video placeholders (16:9) · CTA | sim, generator | 3 videos; are the demos GeoGebra embeds or in-house? |
| 12 | **Founding Schools** | HERO (+ small "cohort" panel: cap / pilot / pricing) · 2COL + ROWS "what you receive" (4) · 2COL + ROWS "what you provide" (4) · FAQ (pilot/pricing subset from /faq) · CTA | counter stays (data-attr) | confirm cohort numbers + conflicts (Q3) |
| 13 | **About** | HERO · 2COL mission + corporate-facts panel · ROWS principles (3) · CTA | — | team / office photo? (placeholder) |
| 14 | **Blog** | HERO · article list as divided rows (date · title · dek · read) · newsletter row (no backend → text + WhatsApp link) | — | — |
| 15–16 | **Blog posts** | HERO (kicker = category · date, H1) · PROSE · CTA box as ROWS | — | article hero images (placeholders) |
| 17 | **FAQ** | HERO · search `.input` + TABS filter (6 cats) · FAQ accordion (18, one open) · help strip as CTA | search/filter/accordion | — |
| 18 | **Contact** | HERO · 2COL: channels as ROWS (HQ / phone / email / WhatsApp) + FORM | form | lead endpoint (Q1) |
| 19 | **Book a demo** | HERO · 2COL: "what we cover" ROWS + FORM | form | lead endpoint (Q1) |
| 20–22 | **Privacy / Terms / Refund** | HERO (lighter: kicker + H1 + updated-date) · PROSE | — | "last updated" dates |
| 23–24 | **LP: Founding / Demo** | minimal header (wordmark + phone) · HERO · ROWS highlights · FORM (demo) / CTA (founding) · legal row | form | — |
| 25 | **404** | wordmark, 404 on the H1 scale, two links | — | — |

Shared: Header (Q2), Footer (design's 4 columns, populated with the site's real links), BookingModal (restyled on `.dialog`), WhatsApp float (kept, restyled as an outlined pill; hidden ≤960 where the sticky CTA shows).

---

## 6. Questions before I build

1. **Leads** — where should the demo/contact forms post? (service URL, or "keep simulated for now").
2. **Navigation IA** — the design's nav is flat (Platform · How it works · Solutions · See It Live · Founding Schools · Login · demo). The site has Features / Solutions / Resources dropdowns. Recommendation: flat bar in the design's style with two quiet dropdowns (Features, Solutions) so no page loses a nav path; Blog/FAQ/About/Contact in the footer only. OK, or keep all three dropdowns?
3. **Founding Schools numbers** — confirm: cohort 10, spots remaining 4, pilot 30 days (not 14), pricing wording ("locked for the year" vs "lifetime, 50 % off"), onboarding "two weeks" vs "48 hours". I'll mark unconfirmed values as placeholders.
4. **Old homepage content** — may I drop "Why Learniz" (5 problems) and the "Trust" trio from the site, or should they move to /platform and /about respectively?
5. **Logo** — the design uses a text wordmark; the site has PNG logos. Use the wordmark everywhere (recommended; it also fixes the dark theme) or the white PNG?
6. **Stat band numbers** (10s · 25 · 7 · 12) — confirm or replace.
7. **Build order** — proposed: design system + Header/Footer/modal → Home → Platform → 4 features → 4 audiences → See It Live → Founding → About/Contact/Book-demo → Blog ×3 → FAQ → Legal ×3 → LPs → 404 → Lighthouse/mobile pass. One page per summary, as you asked.

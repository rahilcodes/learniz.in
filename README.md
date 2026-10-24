# Academiz by Learniz — Official Website

> **Modern, High-Performance Website & Experiential Learning Platform Showcase**  
> Developed for **TATTVATECH EDU SOLUTIONS LLP**. Redesigned on the Nocturne design system (Inter, dark/light themes, accent as line and glow), with HTML product mocks, live simulations and responsive architecture.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18.0.0 or higher.
- No external npm package installations or external database dependencies required. The site uses zero-dependency modern native Node.js ES modules.

### Commands
```bash
# 1. Build all 24 static pages, sitemap, robots.txt, and copy assets into /dist
npm run build

# 2. Start the local preview server on http://localhost:3000
npm start
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📁 Project Architecture

```
learniz.in/
├── package.json               # NPM configuration & scripts
├── build.js                   # High-speed static site generator (compiles pages -> dist/)
├── server.js                  # Zero-dependency local preview HTTP server (clean URLs + MIME)
├── test_routes.py             # Route & endpoint regression test suite (verifies 30 endpoints)
├── README.md                  # Complete project documentation
├── dist/                      # Production-ready output directory (deployable as-is)
│   ├── index.html             # Homepage
│   ├── academiz/index.html    # Platform Overview
│   ├── features/              # Feature deep dives
│   ├── for-institutions/      # Persona pages
│   ├── see-it-live/           # Interactive simulation laboratory
│   ├── founding-schools/      # Founding schools cohort programme
│   ├── about/                 # Company & leadership story
│   ├── blog/                  # Thought leadership & SEO articles
│   ├── faq/                   # 18-question interactive knowledge base
│   ├── contact/               # Contact & Hyderabad office info
│   ├── book-demo/             # Interactive demo reservation
│   ├── privacy/, terms/, etc. # Legal policies
│   ├── lp/                    # High-converting campaign landing pages
│   ├── sitemap.xml            # Auto-generated XML sitemap for Google Search Console
│   ├── robots.txt             # Search crawler directives
│   └── assets/                # CSS, JS, SVG icons, and images
└── src/
    ├── assets/
    │   ├── css/tokens.css     # Design tokens (dark + light)
    │   ├── css/site.css       # Components + page vocabulary
    │   ├── js/site.js         # Runtime (theme, nav, reveals, sticky steps, tabs, FAQ, sims, generator, forms, modal)
    │   ├── fonts/             # Inter 400/500 woff2
    │   └── images/            # Favicon, social card, legacy images
    ├── components/
    │   ├── layout.js          # Page shell + section builders (hero, head, rows, faq, cta, panels, story)
    │   ├── Header.js          # Fixed nav (frosted on scroll), dropdowns, mobile menu, LP header
    │   ├── Footer.js          # Footer, sticky mobile CTA, WhatsApp pill, LP footer
    │   ├── BookingModal.js    # Demo modal + shared lead-form fields
    │   ├── icons.js           # Inline Phosphor icons
    │   └── SEOHead.js         # Meta, canonical, OG/Twitter, JSON-LD, fonts, theme bootstrap
    └── pages/                 # Modular page templates (pre-rendered for peak SEO)
        ├── home.js
        ├── academiz.js
        ├── feature_animations.js
        ├── feature_intelliq.js
        ├── feature_lms.js
        ├── feature_analytics.js
        ├── audience_institutions.js
        ├── audience_teachers.js
        ├── audience_students.js
        ├── audience_parents.js
        ├── see_it_live.js
        ├── founding_schools.js
        ├── about.js
        ├── blog.js
        ├── blog_article_nep.js
        ├── blog_article_intelliq.js
        ├── faq.js
        ├── contact.js
        ├── book_demo.js
        ├── privacy.js
        ├── terms.js
        ├── refund.js
        ├── lp_founding_schools.js
        └── lp_demo.js
```

---

## 🎨 Design System — Nocturne (adapted)

The site follows the approved redesign in `design_handoff_learniz_redesign/`. One token layer, two themes.

- `src/assets/css/tokens.css` — every colour, ramp, font, space, radius, shadow and motion token. Dark is the default; `html[data-theme="light"]` inverts the ramps. The file is inlined into `<head>` at build time so the first paint already has the tokens.
- `src/assets/css/site.css` — Nocturne components (`.btn`, `.tag`, `.input`, `.card`, `.table`) plus the page vocabulary: `.hero`, `.kicker`/`.h2`/`.lede`, `.two-col`, `.panel` (HTML product mocks), `.rows` (numbered rows), `.tabs`, `.story`/`.sticky` (sticky-scroll), `.stats` (the one saturated band), `.faq`, `.prose`, `.form`, `.ph` (placeholder), nav, footer, sticky mobile CTA. Mobile-first; breakpoints 960px and 560px.
- Type: Inter only (self-hosted woff2, 400 and 500), headings never bolder than 500.
- Icons: Phosphor (regular), inlined from `src/components/icons.js` — `icon('arrowRight', 15)`.
- Theme toggle in the nav, persisted in `localStorage['lz-theme']`, `prefers-color-scheme` honoured on first visit, no flash (bootstrap script in `SEOHead.js`).
- Motion: CSS + IntersectionObserver only (`.rv` reveals, sticky steps, count-ups, tab cross-fades); `prefers-reduced-motion` disables everything.

| Token | Dark | Light |
|---|---|---|
| `--color-bg` | `#161826` | `#f7f7fb` |
| `--color-surface` | `#232532` | `#ffffff` |
| `--color-text` | `#e9e9ed` | `#161826` |
| `--color-accent` | `#9184d9` | `#6d5fc4` |
| `--color-section` (stat band) | `#262a60` | same |

Missing assets are labelled placeholders — see `PLACEHOLDERS.md`. The audit and page plan are in `REDESIGN_AUDIT.md`.

### Lead forms

All four forms (nav/sticky modal, `/book-demo`, `/contact`, `/lp/demo`) post through one function in `site.js`.
Set the endpoint before `site.js` loads, e.g. in `SEOHead.js`:

```html
<script>window.LEARNIZ_LEAD_ENDPOINT = 'https://…/your-endpoint';</script>
```

The payload is JSON (`name, school, city, role, phone, email, message, page, source`). With no endpoint set the forms simulate success (as before).

## ⚡ Interactive Features Implemented

1. **Interactive Physics Laboratory (Helicopter Lift vs. Weight Simulation)**:
   - Real-time physics engine calculating aerodynamic lift:
     $$\text{Lift} = 0.0736 \times \text{rpm}^2 \quad (\text{Newtons})$$
     $$\text{Weight} = \text{mass} \times 9.81 \quad (\text{Newtons})$$
   - Live rotor speed (0–600 RPM) and mass (800–1800 kg) sliders.
   - Dynamic rotor blade spinning animation synced with RPM.
   - Visual altitude transition and reactive flight badges: **Climbing** (Lift > Weight), **Hovering Equilibrium** (Lift $\approx$ Weight), or **Descending** (Lift < Weight).
   - Instant Reset to factory 400 RPM / 1200 kg benchmark.

2. **IntelliQ™ AI Question Generator**:
   - Interactive classroom tool allowing educators to select Subject (Physics, Chemistry, Biology, Mathematics), Topic, Difficulty (Easy, Medium, Hard, HOTS), and Question Count.
   - Animated generation sequence simulating AI neural drafting.
   - Full question rendering with 4 options (A/B/C/D), correct answer highlighting, and bloom taxonomy indicators.
   - Export and regeneration actions.

3. **Global Demo Booking Modal**:
   - Triggerable from any "Book a Demo" CTA across the entire website via `data-open-demo` or `window.learnizBookDemo()`.
   - Comprehensive input validation including Indian 10-digit mobile number pattern checking.
   - Simulated appointment slot confirmation view displaying selected date, time, and demo links.

4. **Interactive FAQ Search & Category Filter**:
   - 18 comprehensive questions addressing curriculum alignment, NEP 2020 compliance, teacher training, pricing, offline classroom support, and hardware requirements.
   - Instant keystroke search filtering across questions and answers.
   - Category pills: All, Platform & Animations, IntelliQ™ AI, Implementation & Devices, Pricing & Plans.
   - Accessible animated accordion disclosure.

5. **Responsive Mobile Navigation Drawer**:
   - Hamburger menu toggle with slide-in navigation on mobile and tablet screens ($\le 960\text{px}$).
   - Smooth backdrop overlay with scroll lock.

6. **Floating WhatsApp Assistance Pill**:
   - Instant click-to-chat directly linked to official number `+919032181083`.

---

## 🌐 Complete Page & URL Directory

| # | Route / Clean URL | Page Name | Primary Focus |
|---|---|---|---|
| 1 | `/` | Homepage | Complete Claude Design reference, hero, metrics, live simulator, IntelliQ, testimonials, CTA |
| 2 | `/academiz` | Academiz Platform | Deep-dive into 3D animations, STEM curriculum, offline delivery, student outcomes |
| 3 | `/features/interactive-animations` | 3D Interactive Animations | Physics, Chemistry, Biology, Maths laboratory simulations with tactile sliders |
| 4 | `/features/intelliq` | IntelliQ™ AI Assessment | Bloom's taxonomy, NEP 2020 question generation, CBSE/ICSE/State syllabus alignment |
| 5 | `/features/lms-exam-builder` | LMS & Exam Builder | One-click question paper formatting, watermarked answer keys, test scheduling |
| 6 | `/features/analytics` | Analytics & Reports | Diagnostic gap analysis, student mastery tracking, institutional dashboards |
| 7 | `/for-institutions` | For Schools & Principals | Institutional ROI, teacher retention, admission differentiator, board pass rates |
| 8 | `/for-teachers` | For Educators | Reducing lesson prep from 3 hours to 20 minutes, zero tech fatigue |
| 9 | `/for-students` | For Students | Conceptual clarity, gamified practice, fear-free STEM mastery |
| 10 | `/for-parents` | For Parents | Transparent progress visibility, screen time transformed into learning time |
| 11 | `/see-it-live` | Interactive Simulation Lab | Multi-subject simulation laboratory with live controls and sandbox widgets |
| 12 | `/founding-schools` | Founding Schools Cohort | Exclusive initiative for the first 10 visionary Indian institutions |
| 13 | `/about` | About Learniz | Company origin, leadership, pedagogical principles, Hyderabad office |
| 14 | `/blog` | Blog & Editorial | Thought leadership on Indian education, NEP 2020, and pedagogical tech |
| 15 | `/blog/what-experiential-learning-means-under-nep-2020` | Article: NEP 2020 Guide | Deep-dive guide on Section 4 experiential learning requirements |
| 16 | `/blog/how-ai-question-generators-save-teachers-5-hours-a-week` | Article: IntelliQ Case Study | Practical breakdown of teacher assessment workflow optimization |
| 17 | `/faq` | Knowledge Base & FAQ | 18 indexed questions with live category filter and search bar |
| 18 | `/contact` | Contact & Inquiries | Hyderabad office address, direct phone, email, and inquiry form |
| 19 | `/book-demo` | Dedicated Demo Page | Calendar slot reservation, customized school onboarding breakdown |
| 20 | `/privacy` | Privacy Policy | DPDP Act 2023 compliant student data privacy and protection terms |
| 21 | `/terms` | Terms of Service | Institutional subscription and intellectual property terms |
| 22 | `/refund` | Refund & Cancellation | Subscription cancellation and satisfaction guarantee terms |
| 23 | `/lp/founding-schools` | Campaign LP: Founding Schools | High-converting distraction-free landing page for school principals |
| 24 | `/lp/demo` | Campaign LP: Quick Demo | Rapid 30-second lead capture landing page for paid campaigns |

---

## 🔍 Technical SEO & Compliance

- **Pre-rendered HTML**: Crawlers (Googlebot, Bingbot, WhatsApp/LinkedIn link scrapers) receive complete rendered semantic markup without waiting for client-side JavaScript execution.
- **Canonical Tags**: Explicit `<link rel="canonical">` defined across every route.
- **JSON-LD Structured Data**:
  - `Organization` & `EducationalOrganization`
  - `WebSite` with internal SearchAction
  - `SoftwareApplication` for Academiz Platform
  - `FAQPage` schema on `/faq` (eligible for Google Rich Snippets)
  - `Article` schema with author, date, and publisher on blog posts
- **Sitemap & Robots**:
  - Auto-generated `/sitemap.xml` listing all pages with priority and change frequencies.
  - `/robots.txt` granting access to all compliant search engines.

---

## 🏢 Company & Contact Details

- **Company Entity**: TATTVATECH EDU SOLUTIONS LLP
- **Brand & Platform**: Learniz / Academiz by Learniz
- **Headquarters**: Hyderabad, Telangana, India
- **Phone / WhatsApp**: +91-9032181083
- **Official Email**: info@learniz.in
- **Copyright**: © 2026 TATTVATECH EDU SOLUTIONS LLP. All rights reserved.

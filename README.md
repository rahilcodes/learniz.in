# Academiz by Learniz — Official Website

> **Modern, High-Performance Website & Experiential Learning Platform Showcase**  
> Developed for **TATTVATECH EDU SOLUTIONS LLP** based on the Claude Design system, matching brand colors, typography (`Figtree` + `Inter`), interactive simulations, and responsive architecture.

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
    │   ├── css/main.css       # Complete CSS design tokens & responsive stylesheet
    │   ├── js/main.js         # Interactive runtime (simulations, modal, FAQ search, drawer)
    │   ├── icons/             # 42+ standalone inline Lucide SVG icons (zero external CDN lag)
    │   └── images/            # Brand logos, hero graphics, illustrations, and social cards
    ├── components/
    │   ├── Header.js          # Responsive navigation matching SiteHeader.dc.html
    │   ├── Footer.js          # Structured footer matching SiteFooter.dc.html
    │   ├── BookingModal.js    # Interactive demo modal with live form validation
    │   ├── WhatsAppFloat.js   # Sticky WhatsApp communication pill
    │   └── SEOHead.js         # Canonical URLs, Open Graph, Twitter cards, JSON-LD schemas
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

## 🎨 Design System & Visual Tokens

The styling strictly adheres to the Claude Design specifications (`home.dc.html`, `SiteHeader.dc.html`, `SiteFooter.dc.html`):

| Token | CSS Variable | Hex / Value | Description |
|---|---|---|---|
| Primary Indigo | `--primary` | `hsl(217 91% 60%)` (`#3B82F6`) | Core brand action color, active states, buttons |
| Primary Dark | `--primary-dark` | `hsl(221 83% 53%)` | Hover states and deep emphasis |
| Purple Accent | `--accent-purple`| `hsl(258 90% 66%)` (`#8B5CF6`) | Gradient shifts and badge highlights |
| Orange Accent | `--accent-orange`| `hsl(25 95% 63%)` (`#FB923C`) | High-conversion CTAs and warning badges |
| Background Dark| `--bg-dark` | `#0B1324` | Hero canvas and deep dark surfaces |
| Dark Blue Card | `--bg-dark-card`| `#111C38` | Interactive simulator consoles and code cards |
| Surface Light | `--bg-light` | `#F8FAFC` | Light alternating section backgrounds |
| Surface White | `--bg-white` | `#FFFFFF` | Main card background and modal surface |
| Typography | `--font-display`, `--font-sans` | `'Figtree'`, `'Inter'` | Clean, modern, highly legible geometric typefaces |

---

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

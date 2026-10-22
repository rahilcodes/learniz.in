/**
 * Learniz Platform Overview Page
 * URL: /platform (also aliased from /academiz)
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderAcademizPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Learniz",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web browser, Chrome OS, Windows, Android, iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "Free 30-day pilot for qualified schools in the Founding Schools Programme"
    },
    "provider": {
      "@type": "Organization",
      "name": "Learniz",
      "legalName": "TATTVATECH EDU SOLUTIONS LLP"
    },
    "description": "Experiential learning platform for Indian schools featuring teacher-controlled interactive animations, AI-assisted question generation, an LMS with exam builder, and academic analytics."
  };

  const head = renderHead({
    title: "Competency-Based Learning Platform for Schools | Learniz",
    description: "Learniz turns lessons into live experiments and shows principals, in numbers, what every class understood. Outcomes you can see.",
    path: "/platform",
    schema
  });

  const header = renderHeader('/platform');
  const footer = renderFooter();
  const modal = renderBookingModal();
  const whatsapp = renderWhatsAppFloat();
  const waHref = "https://wa.me/919032181083?text=" + encodeURIComponent("Hi, I'd like to book a free Learniz demo for my school.");

  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body>
${header}

<main id="main-content">
  <!-- Hero Section -->
  <section style="position:relative;background:radial-gradient(70% 60% at 50% 0%,#EEF4FF 0%,rgba(255,255,255,0) 70%);padding:clamp(48px,7vw,84px) 20px clamp(40px,6vw,64px)">
    <div class="lz-container" style="text-align:center">
      <p class="lz-eyebrow">LEARNIZ PLATFORM OVERVIEW</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,62px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Concept Clarity in every class. Outcomes you can see.
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        Learniz turns lessons into live experiments and shows principals, in numbers, what every class understood.
      </p>
      <div style="margin-top:32px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
        <button type="button" data-open-demo class="lz-btn-primary">Book a free demo</button>
        <a href="/see-it-live" class="lz-btn-outline">
          <img src="/assets/icons/play.svg" alt="" width="16" height="16">
          See Demos in Action
        </a>
      </div>
      <div style="margin-top:24px;display:flex;flex-wrap:wrap;gap:20px;justify-content:center;font-size:13.5px;color:#6B7485">
        <span style="display:inline-flex;align-items:center;gap:6px"><img src="/assets/icons/check.svg" width="16" height="16" style="opacity:.7">NEP 2020 &amp; NCF-SE 2023 Compliant</span>
        <span style="display:inline-flex;align-items:center;gap:6px"><img src="/assets/icons/check.svg" width="16" height="16" style="opacity:.7">CBSE, ICSE &amp; State Boards</span>
        <span style="display:inline-flex;align-items:center;gap:6px"><img src="/assets/icons/check.svg" width="16" height="16" style="opacity:.7">Cloud Hosted (India AWS)</span>
      </div>
    </div>
  </section>

  <!-- Platform Architecture: 4 Modules -->
  <section style="padding:clamp(56px,8vw,96px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto">
        <p class="lz-eyebrow">SYSTEM ARCHITECTURE</p>
        <h2 class="lz-section-title">Competency-Based Learning: Four connected capabilities.</h2>
        <p class="lz-section-subtitle">
          Instead of fragmented tools, Learniz connects classroom experiments, question drafting, structured syllabus delivery, and Early Gap Detection.
        </p>
      </div>

      <div style="margin-top:48px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr));gap:24px">
        <!-- Module 1 -->
        <div class="lz-card" style="display:flex;flex-direction:column">
          <span style="width:44px;height:44px;border-radius:12px;background:#EEF4FF;color:hsl(217 91% 50%);display:grid;place-items:center">
            <img src="/assets/icons/atom.svg" alt="" width="22" height="22">
          </span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin-top:18px;margin-bottom:0">1. Interactive Animations</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#3F4A5C;margin-top:8px;margin-bottom:0">
            Learning by Doing: physics, chemistry, and biology models where teachers adjust variables live and students see the effect immediately.
          </p>
          <a href="/features/interactive-animations" style="margin-top:auto;padding-top:20px;font-weight:600;font-size:14px;color:hsl(217 91% 45%)">
            Deep dive into animations →
          </a>
        </div>

        <!-- Module 2 -->
        <div class="lz-card" style="display:flex;flex-direction:column">
          <span style="width:44px;height:44px;border-radius:12px;background:#F3EFFF;color:hsl(258 90% 58%);display:grid;place-items:center">
            <img src="/assets/icons/sparkles.svg" alt="" width="22" height="22">
          </span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin-top:18px;margin-bottom:0">2. Question Generator</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#3F4A5C;margin-top:8px;margin-bottom:0">
            Assessment in Seconds: 10 questions in 10 seconds. Auto-tagged by topic, difficulty and format for teachers to review and edit.
          </p>
          <a href="/features/intelliq" style="margin-top:auto;padding-top:20px;font-weight:600;font-size:14px;color:hsl(258 90% 50%)">
            Explore question generator →
          </a>
        </div>

        <!-- Module 3 -->
        <div class="lz-card" style="display:flex;flex-direction:column">
          <span style="width:44px;height:44px;border-radius:12px;background:#FFF1E8;color:hsl(25 95% 48%);display:grid;place-items:center">
            <img src="/assets/icons/layers.svg" alt="" width="22" height="22">
          </span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin-top:18px;margin-bottom:0">3. LMS &amp; Exam Builder</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#3F4A5C;margin-top:8px;margin-bottom:0">
            Formative Assessment, Built In: structured chapter → topic structure with configurable timers, negative marking, and pass criteria.
          </p>
          <a href="/features/lms-exam-builder" style="margin-top:auto;padding-top:20px;font-weight:600;font-size:14px;color:hsl(25 95% 48%)">
            Examine LMS workflows →
          </a>
        </div>

        <!-- Module 4 -->
        <div class="lz-card" style="display:flex;flex-direction:column">
          <span style="width:44px;height:44px;border-radius:12px;background:#E8F7EE;color:#15803D;display:grid;place-items:center">
            <img src="/assets/icons/chart-column.svg" alt="" width="22" height="22">
          </span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin-top:18px;margin-bottom:0">4. Academic Analytics</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#3F4A5C;margin-top:8px;margin-bottom:0">
            Early Gap Detection: question-level accuracy heatmaps, time analysis, and batch diagnostics weeks before board examinations.
          </p>
          <a href="/features/analytics" style="margin-top:auto;padding-top:20px;font-weight:600;font-size:14px;color:#15803D">
            Review academic analytics →
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- NEP 2020 Alignment Section -->
  <section style="background:#F6F8FB;padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:48px;align-items:center">
        <div>
          <p class="lz-eyebrow">POLICY &amp; CURRICULUM</p>
          <h2 class="lz-section-title">NCF-SE 2023 Ready: Built for experiential learning policy.</h2>
          <p class="lz-section-subtitle">
            The National Education Policy shifts focus from rote recall to competency-based experiential learning. Learniz provides the concrete classroom tools required to satisfy these mandates without burdening faculty.
          </p>

          <div style="margin-top:28px;display:grid;gap:16px">
            <div style="display:flex;gap:14px">
              <span style="width:32px;height:32px;border-radius:8px;background:#EEF4FF;color:hsl(217 91% 50%);display:grid;place-items:center;flex:none">
                <img src="/assets/icons/check.svg" width="16" height="16">
              </span>
              <div>
                <strong style="color:#0B1324;display:block">Experiential Pedagogy</strong>
                <span style="font-size:14px;color:#4B5567">Students manipulate physical constants, test hypotheses, and deduce scientific laws.</span>
              </div>
            </div>
            <div style="display:flex;gap:14px">
              <span style="width:32px;height:32px;border-radius:8px;background:#F3EFFF;color:hsl(258 90% 58%);display:grid;place-items:center;flex:none">
                <img src="/assets/icons/check.svg" width="16" height="16">
              </span>
              <div>
                <strong style="color:#0B1324;display:block">Continuous Formative Assessment</strong>
                <span style="font-size:14px;color:#4B5567">Low-stakes frequent formative assessments replace intimidating term-end bottlenecks.</span>
              </div>
            </div>
            <div style="display:flex;gap:14px">
              <span style="width:32px;height:32px;border-radius:8px;background:#FFF1E8;color:hsl(25 95% 48%);display:grid;place-items:center;flex:none">
                <img src="/assets/icons/check.svg" width="16" height="16">
              </span>
              <div>
                <strong style="color:#0B1324;display:block">Parent Confidence &amp; Transparent Reporting</strong>
                <span style="font-size:14px;color:#4B5567">Parents view subject mastery trajectories rather than arbitrary letter grades.</span>
              </div>
            </div>
          </div>
        </div>

        <div style="background:#fff;border:1px solid #DCE2EC;border-radius:20px;padding:32px;box-shadow:var(--shadow-md)">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0 0 16px">Institutional Comparison</h3>
          <div style="display:grid;gap:14px;font-size:14px">
            <div style="padding:14px;border-radius:10px;background:#FFF1E8;border-left:4px solid hsl(25 95% 55%)">
              <strong style="color:#9A3412;display:block">Traditional School Software / ERP</strong>
              <p style="margin:4px 0 0;color:#7C2D12;line-height:1.45">
                Handles administrative fees and attendance. Zero interactive pedagogy. Exams are plain PDFs. Analytics stop at total marks.
              </p>
            </div>
            <div style="padding:14px;border-radius:10px;background:#E8F7EE;border-left:4px solid #15803D">
              <strong style="color:#15803D;display:block">Learniz Platform</strong>
              <p style="margin:4px 0 0;color:#166534;line-height:1.45">
                Full experiential classroom software. Interactive parameter exploration. Automated question drafting. Question-level learning diagnosis.
              </p>
            </div>
          </div>
          <div style="margin-top:24px;text-align:center">
            <button type="button" data-open-demo class="lz-btn-primary" style="width:100%">Book a free demo</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Technical Infrastructure & Data Sovereignty -->
  <section style="padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto">
        <p class="lz-eyebrow">ENTERPRISE GRADE</p>
        <h2 class="lz-section-title">Built for uptime, scale and privacy.</h2>
        <p class="lz-section-subtitle">
          Designed specifically for multi-campus institutions with strict student data confidentiality and cloud resilience.
        </p>
      </div>

      <div style="margin-top:40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:20px">
        <div class="lz-card">
          <img src="/assets/icons/shield-check.svg" alt="" width="24" height="24" style="color:#15803D">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:18px;font-weight:700;margin:12px 0 6px">Data Sovereignty</h3>
          <p style="font-size:14px;color:#4B5567;line-height:1.5;margin:0">
            All student records, exam submissions, and academic evaluations are hosted on secure AWS servers located within India.
          </p>
        </div>
        <div class="lz-card">
          <img src="/assets/icons/building-2.svg" alt="" width="24" height="24">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:18px;font-weight:700;margin:12px 0 6px">Multi-Campus Hierarchy</h3>
          <p style="font-size:14px;color:#4B5567;line-height:1.5;margin:0">
            Centrally manage branches, trustees, principals, HODs, teachers, and student rosters with granular permission controls.
          </p>
        </div>
        <div class="lz-card">
          <img src="/assets/icons/timer.svg" alt="" width="24" height="24">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:18px;font-weight:700;margin:12px 0 6px">Zero Hardware Lock-In</h3>
          <p style="font-size:14px;color:#4B5567;line-height:1.5;margin:0">
            Operates smoothly on existing smart boards, interactive flat panels, projectors, Windows laptops, Chromebooks, and tablets.
          </p>
        </div>
        <div class="lz-card">
          <img src="/assets/icons/message-circle.svg" alt="" width="24" height="24">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:18px;font-weight:700;margin:12px 0 6px">Local Dedicated Support</h3>
          <p style="font-size:14px;color:#4B5567;line-height:1.5;margin:0">
            Dedicated onboarding team based in Hyderabad offering direct teacher training, syllabus ingestion, and ongoing assistance.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA Band -->
  <section style="padding:0 20px clamp(56px,8vw,96px)">
    <div class="lz-container" style="background:hsl(217 91% 60%);border-radius:24px;padding:clamp(48px,7vw,80px) clamp(24px,5vw,72px);color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(30px,4.5vw,48px);font-weight:800;letter-spacing:-.03em;margin:0">
        Measurable Learning Outcomes for your school. Book a free demo.
      </h2>
      <p style="font-size:17px;line-height:1.55;color:#EAF1FF;max-width:580px;margin:16px auto 32px">
        A 20-minute walkthrough customized to your school's curriculum, boards, and student strength.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button type="button" data-open-demo class="lz-btn-outline" style="background:#fff;color:hsl(217 91% 40%);border:0;font-weight:700">Book a free demo</button>
        <a href="${waHref}" target="_blank" rel="noopener" class="lz-btn-outline" style="background:transparent;border:1px solid rgba(255,255,255,.5);color:#fff">
          <img src="/assets/icons/message-circle.svg" alt="" width="18" height="18" style="filter:invert(1)">Talk to Us on WhatsApp
        </a>
      </div>
    </div>
  </section>
</main>

${footer}
${modal}
${whatsapp}

<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}


/**
 * Academic Analytics Feature Page
 * URL: /features/analytics
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderAnalyticsPage() {
  const head = renderHead({
    title: "Early Gap Detection: Academic Analytics | Learniz",
    description: "Learniz academic analytics turns raw test marks into early gap detection: question-level accuracy heatmaps, diagnostic insights, and batch comparison.",
    path: "/features/analytics"
  });

  const header = renderHeader('/features/analytics');
  const footer = renderFooter();
  const modal = renderBookingModal();
  const whatsapp = renderWhatsAppFloat();

  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body>
${header}

<main id="main-content">
  <!-- Hero Section -->
  <section style="background:radial-gradient(70% 60% at 50% 0%,#E8F7EE 0%,rgba(255,255,255,0) 70%);padding:clamp(48px,7vw,84px) 20px clamp(40px,6vw,64px)">
    <div class="lz-container" style="text-align:center">
      <p class="lz-eyebrow" style="color:#15803D">EARLY GAP DETECTION</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,56px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Early Gap Detection, weeks before results. Outcomes you can see.
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        A score only tells you what was missed. Learniz shows exactly which concept caused the hesitation, why, and how to fix it before final board exams.
      </p>
      <div style="margin-top:30px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
        <button type="button" data-open-demo class="lz-btn-primary" style="background:#15803D">Book a free demo</button>
        <a href="/see-it-live" class="lz-btn-outline">
          Explore demo gallery
        </a>
      </div>
    </div>
  </section>

  <!-- Interactive Heatmap & Diagnostics Preview -->
  <section style="padding:clamp(40px,6vw,72px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:48px;align-items:center">
        <div>
          <p class="lz-eyebrow" style="color:#15803D">QUESTION-LEVEL ACCURACY</p>
          <h2 class="lz-section-title" style="font-size:clamp(26px,3.5vw,38px)">
            Early Gap Detection at the question level
          </h2>
          <p class="lz-section-subtitle">
            Standard school reports look only at total marks. Learniz tracks accuracy, misconceptions, and time spent on every individual concept across the cohort.
          </p>
          <div style="margin-top:24px;padding:16px;border-radius:12px;background:#FFF1E8;border-left:4px solid hsl(25 95% 55%);font-size:14px;color:#7C2D12">
            <strong>Diagnostic Discovery:</strong> In the Physics Unit Test, Question 14 and Question 19 (Lift and Equilibrium) were missed by 69% of the batch. The teacher scheduled a 10-minute simulation refresher on rotor dynamics before the term exam.
          </div>
        </div>

        <!-- Heatmap Visualization Card -->
        <div class="lz-card" style="box-shadow:var(--shadow-md)">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:14px">
            <span style="font-size:14px;font-weight:700">Question Accuracy Heatmap · Physics Unit Test</span>
            <span style="font-size:12px;color:#6B7485">Class 9-B · 25 Questions</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(36px,1fr));gap:4px">
            ${[92, 88, 76, 81, 69, 74, 58, 90, 84, 62, 71, 77, 45, 31, 66, 79, 83, 52, 28, 73, 86, 64, 70, 59, 80].map((v, i) => {
              const bg = v >= 75 ? 'hsl(217 91% 60%)' : v >= 50 ? '#BFD7FF' : '#FFE1CC';
              const fg = v >= 75 ? '#fff' : '#0B1324';
              return `<span title="Question ${i+1}: ${v}% accuracy" style="height:36px;border-radius:6px;background:${bg};color:${fg};display:grid;place-items:center;font-size:11px;font-weight:700;cursor:pointer">${v}</span>`;
            }).join('')}
          </div>
          <div style="display:flex;justify-content:space-between;gap:6px;flex-wrap:wrap;margin-top:12px;font-size:11.5px;color:#6B7485">
            <span>Q1 (Recall)</span>
            <span>Hover on any cell for diagnostic notes</span>
            <span>Q25 (Application)</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Diagnostic Capabilities Grid -->
  <section style="background:#F6F8FB;padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto">
        <p class="lz-eyebrow" style="color:#15803D">DATA-BACKED DECISIONS</p>
        <h2 class="lz-section-title">Measurable Learning Outcomes for leaders, teachers, and parents.</h2>
      </div>

      <div style="margin-top:48px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:24px">
        <div class="lz-card">
          <span style="font-size:12px;font-weight:700;color:#15803D;text-transform:uppercase">For Principals &amp; School Leaders</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:10px 0">Cross-Campus Benchmarks</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Compare sections or evaluate performance across multiple campuses. Spot curriculum gaps months before final board examinations occur.
          </p>
        </div>

        <div class="lz-card">
          <span style="font-size:12px;font-weight:700;color:hsl(217 91% 50%);text-transform:uppercase">For Subject Teachers</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:10px 0">Early Gap Detection &amp; Support</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Instant list of students who fell below 40% on specific concepts. Trigger focused practice sets directly to resolve learning gaps.
          </p>
        </div>

        <div class="lz-card">
          <span style="font-size:12px;font-weight:700;color:hsl(25 95% 48%);text-transform:uppercase">For Parents</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:10px 0">Parent Confidence</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Clear, reassuring commentary on the student's strengths and areas for encouragement, directly accessible on phone without marks anxiety.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <section style="padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container" style="background:#0B1324;border-radius:24px;padding:clamp(48px,7vw,80px) 24px;color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;margin:0">
        Early Gap Detection. Outcomes you can see.
      </h2>
      <p style="font-size:16.5px;color:#C5CCDA;max-width:580px;margin:16px auto 32px">
        Book a 20-minute live demonstration to see Learniz diagnostic reports mapped to your school's actual batch assessment data.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button type="button" data-open-demo class="lz-btn-primary" style="background:#15803D">Book a free demo</button>
        <a href="/for-institutions" class="lz-btn-outline" style="background:transparent;border:1px solid rgba(255,255,255,.3);color:#fff">Next: For Institutions →</a>
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

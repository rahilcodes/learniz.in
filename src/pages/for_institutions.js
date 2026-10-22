/**
 * For Institutions Page
 * URL: /for-institutions
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderForInstitutionsPage() {
  const head = renderHead({
    title: "Early Gap Detection for Schools | Learniz",
    description: "See which classes and concepts need attention while there is still time to act. Measurable Learning Outcomes, aligned with NEP 2020.",
    path: "/for-institutions"
  });

  const header = renderHeader('/for-institutions');
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
  <section style="background:radial-gradient(70% 60% at 50% 0%,#EEF4FF 0%,rgba(255,255,255,0) 70%);padding:clamp(48px,7vw,84px) 20px clamp(40px,6vw,64px)">
    <div class="lz-container" style="text-align:center">
      <p class="lz-eyebrow">FOR INSTITUTIONS · OUTCOMES YOU CAN SEE</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,60px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Early Gap Detection, weeks before results.
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        See which classes and concepts need attention while there is still time to act. Measurable Learning Outcomes, aligned with NEP 2020.
      </p>
      <div style="margin-top:30px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
        <button type="button" data-open-demo class="lz-btn-primary">Book a free demo</button>
        <a href="/founding-schools" class="lz-btn-outline">Founding Schools Programme</a>
      </div>
    </div>
  </section>

  <!-- Executive Pillars -->
  <section style="padding:clamp(56px,8vw,96px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto">
        <p class="lz-eyebrow">MEASURABLE LEARNING OUTCOMES</p>
        <h2 class="lz-section-title">Data-Backed Decisions for principals and school owners.</h2>
      </div>

      <div style="margin-top:48px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:24px">
        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:#0B1324;display:grid;place-items:center;color:#fff">
            <img src="/assets/icons/building-2.svg" width="20" height="20" style="filter:invert(1)">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:16px 0 8px">Measurable Learning Outcomes</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Progress as numbers: monitor syllabus completion rates, batch scores, and teacher adoption across all branches from a single unified view.
          </p>
        </div>

        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:hsl(217 91% 60%);display:grid;place-items:center;color:#fff">
            <img src="/assets/icons/chart-column.svg" width="20" height="20" style="filter:invert(1)">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:16px 0 8px">Early Gap Detection</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Weak concepts caught weeks before results: see which topics are missed while there is still time for targeted remedial classes.
          </p>
        </div>

        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:hsl(25 95% 55%);display:grid;place-items:center;color:#fff">
            <img src="/assets/icons/heart-handshake.svg" width="20" height="20" style="filter:invert(1)">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:16px 0 8px">Parent Confidence</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Parents see progress and trust the next year's fee: continuous, plain-language updates keep families informed and confident throughout the academic year.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <section style="padding:clamp(56px,8vw,96px) 20px;background:#F6F8FB">
    <div class="lz-container" style="background:#0B1324;border-radius:24px;padding:clamp(48px,7vw,80px) 24px;color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;margin:0">
        Measurable Learning Outcomes for your school. Book a free demo.
      </h2>
      <p style="font-size:16.5px;color:#C5CCDA;max-width:580px;margin:16px auto 32px">
        Join our Founding Schools cohort and receive a free 30-day pilot for your institution.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button type="button" data-open-demo class="lz-btn-primary">Book a free demo</button>
        <a href="/for-teachers" class="lz-btn-outline" style="background:transparent;border:1px solid rgba(255,255,255,.3);color:#fff">See Teacher Solutions →</a>
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


/**
 * For Students Page
 * URL: /for-students
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderForStudentsPage() {
  const head = renderHead({
    title: "Learning by Doing & Concept Clarity | Learniz for Students",
    description: "Explore science and math concepts visually with interactive simulations, practice with instant feedback, and build lasting Concept Clarity.",
    path: "/for-students"
  });

  const header = renderHeader('/for-students');
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
  <section style="background:radial-gradient(70% 60% at 50% 0%,#F3EFFF 0%,rgba(255,255,255,0) 70%);padding:clamp(48px,7vw,84px) 20px clamp(40px,6vw,64px)">
    <div class="lz-container" style="text-align:center">
      <p class="lz-eyebrow violet">SOLUTIONS · FOR STUDENTS</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,60px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Learning by Doing: Concept Clarity that stays with you.
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        Change a variable, see what happens. Learniz turns textbook lessons into live experiments where you deduce principles firsthand.
      </p>
      <div style="margin-top:30px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
        <a href="/see-it-live" class="lz-btn-primary" style="background:hsl(258 90% 58%)">Try Interactive Demos</a>
        <button type="button" data-open-demo class="lz-btn-outline">Book a free demo</button>
      </div>
    </div>
  </section>

  <!-- Student Experience Grid -->
  <section style="padding:clamp(56px,8vw,96px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto">
        <p class="lz-eyebrow violet">LEARNER OUTCOMES</p>
        <h2 class="lz-section-title">Understood, not memorised. True Concept Clarity.</h2>
      </div>

      <div style="margin-top:48px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:24px">
        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:#F3EFFF;display:grid;place-items:center;color:hsl(258 90% 58%)">
            <img src="/assets/icons/flask-conical.svg" width="20" height="20">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:16px 0 8px">Learning by Doing</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            See physics, chemistry, and biology in motion: change rotor speed, refract light through prisms, and see the science respond in real time.
          </p>
        </div>

        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:#E8F7EE;display:grid;place-items:center;color:#15803D">
            <img src="/assets/icons/check.svg" width="20" height="20">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:16px 0 8px">Cause-and-Effect Thinking</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Change a variable, see what happens: reason through problems step-by-step instead of memorising static answers for exams.
          </p>
        </div>

        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:#EEF4FF;display:grid;place-items:center;color:hsl(217 91% 50%)">
            <img src="/assets/icons/chart-column.svg" width="20" height="20">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:16px 0 8px">Scientific Temper</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Test, observe, question: build confidence through continuous practice checks with zero exam fear.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <section style="padding:clamp(56px,8vw,96px) 20px;background:#F6F8FB">
    <div class="lz-container" style="background:#0B1324;border-radius:24px;padding:clamp(48px,7vw,80px) 24px;color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;margin:0">
        Every class an experiment. Try it live.
      </h2>
      <p style="font-size:16.5px;color:#C5CCDA;max-width:580px;margin:16px auto 32px">
        Check out our live simulation gallery. No login or sales call required.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <a href="/see-it-live" class="lz-btn-primary">Open Live Gallery</a>
        <button type="button" data-open-demo class="lz-btn-outline" style="background:transparent;border:1px solid rgba(255,255,255,.3);color:#fff">Book a free demo</button>
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


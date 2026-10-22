/**
 * For Parents Page
 * URL: /for-parents
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderForParentsPage() {
  const head = renderHead({
    title: "Parent Confidence: Progress Beyond Marks | Learniz",
    description: "Learniz gives parents small checks every week and progress beyond marks. Understand where your child thrives and where help is needed, long before exams.",
    path: "/for-parents"
  });

  const header = renderHeader('/for-parents');
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
  <section style="background:radial-gradient(70% 60% at 50% 0%,#FFF1E8 0%,rgba(255,255,255,0) 70%);padding:clamp(48px,7vw,84px) 20px clamp(40px,6vw,64px)">
    <div class="lz-container" style="text-align:center">
      <p class="lz-eyebrow orange">SOLUTIONS · FOR PARENTS</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,60px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Parent Confidence: Progress beyond marks, with no surprises.
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        Learniz gives parents small checks every week. See where your child understands the concept, where they need help, and how they apply it.
      </p>
      <div style="margin-top:30px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
        <button type="button" data-open-demo class="lz-btn-primary" style="background:hsl(25 95% 48%)">Book a free demo</button>
        <a href="/about" class="lz-btn-outline">About Learniz</a>
      </div>
    </div>
  </section>

  <!-- Parent Value Grid -->
  <section style="padding:clamp(56px,8vw,96px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto">
        <p class="lz-eyebrow orange">PARENT CONFIDENCE</p>
        <h2 class="lz-section-title">Know how your child is doing between report cards.</h2>
      </div>

      <div style="margin-top:48px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:24px">
        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:#FFF1E8;display:grid;place-items:center;color:hsl(25 95% 48%)">
            <img src="/assets/icons/heart-handshake.svg" width="20" height="20">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:16px 0 8px">Progress beyond marks</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Instead of confusing percentages at term-end, get plain-language notes: which topics are mastered, and where 10 minutes of practice helps most.
          </p>
        </div>

        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:#EEF4FF;display:grid;place-items:center;color:hsl(217 91% 50%)">
            <img src="/assets/icons/calendar.svg" width="20" height="20">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:16px 0 8px">Small checks every week, no surprises</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Formative checks catch learning gaps weeks before exams, so your child never faces last-minute stress or unexpected results.
          </p>
        </div>

        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:#E8F7EE;display:grid;place-items:center;color:#15803D">
            <img src="/assets/icons/message-circle.svg" width="20" height="20">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:16px 0 8px">The thinking questions boards now ask</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            CBSE and state boards now focus on application and HOTS questions. Learning by doing ensures children can apply concepts, not just repeat them.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <section style="padding:clamp(56px,8vw,96px) 20px;background:#F6F8FB">
    <div class="lz-container" style="background:#0B1324;border-radius:24px;padding:clamp(48px,7vw,80px) 24px;color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;margin:0">
        Parent Confidence starts with visible understanding.
      </h2>
      <p style="font-size:16.5px;color:#C5CCDA;max-width:580px;margin:16px auto 32px">
        Schools using Learniz give parents clear insight into weekly progress. Book a free demo for your school leadership team.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button type="button" data-open-demo class="lz-btn-primary">Book a free demo</button>
        <a href="/see-it-live" class="lz-btn-outline" style="background:transparent;border:1px solid rgba(255,255,255,.3);color:#fff">See It Live →</a>
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


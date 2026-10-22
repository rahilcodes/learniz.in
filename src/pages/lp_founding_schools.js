/**
 * Campaign Landing Page: Founding Schools
 * URL: /lp/founding-schools
 * Distraction-free, minimal navigation for Ads and WhatsApp broadcasts
 */

import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderLpFoundingSchoolsPage() {
  const head = renderHead({
    title: "Future-Ready Classrooms: Founding Schools Offer | Learniz",
    description: "Exclusive Founding Schools offer for Indian institutions. Free 30-day classroom pilot and locked founding rates. Apply today.",
    path: "/lp/founding-schools"
  });

  const modal = renderBookingModal();
  const whatsapp = renderWhatsAppFloat();
  const waHref = "https://wa.me/919032181083?text=" + encodeURIComponent("Hi, I want to apply for the Learniz Founding Schools Programme.");

  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body style="background:#0B1324;color:#fff">

<!-- Minimal Campaign Header -->
<header style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
  <a href="/" class="lz-logo" aria-label="Learniz home">
    <img src="/assets/images/learniz-logo-white.png" alt="Learniz - Outcomes you can see." class="lz-logo-img" width="138" height="42" style="height:38px;width:auto;display:block">
  </a>
  <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
    <a href="${waHref}" target="_blank" rel="noopener" class="lz-btn-outline lz-btn-sm" style="border:1px solid rgba(255,255,255,.3);color:#fff;background:transparent">
      <img src="/assets/icons/message-circle.svg" alt="" width="16" height="16" style="filter:invert(1)">WhatsApp
    </a>
    <button type="button" data-open-demo class="lz-btn-primary lz-btn-sm" style="background:hsl(25 95% 63%)">Book a free demo</button>
  </div>
</header>

<main id="main-content" style="padding:clamp(48px,7vw,84px) 20px">
  <div class="lz-container" style="max-width:960px;text-align:center">
    <span style="display:inline-block;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,.1);color:hsl(25 95% 68%);font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase">
      FOUNDING SCHOOLS INAUGURAL COHORT · 10 SLOTS
    </span>
    <h1 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(36px,6vw,64px);font-weight:800;line-height:1.05;letter-spacing:-.03em;margin:20px auto 16px;max-width:840px">
      Future-Ready Classrooms: the Founding Schools Programme.
    </h1>
    <p style="font-size:clamp(16px,2vw,19px);line-height:1.6;color:#C5CCDA;max-width:680px;margin:0 auto 36px">
      Get an unrestricted, free 30-day pilot across Physics, Chemistry, Biology, and Math. Locked-in lifetime founding pricing for early partner institutions in India.
    </p>

    <!-- Visual Highlights Grid -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:20px;text-align:left;margin-bottom:48px">
      <div style="background:#121D33;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:24px">
        <div style="color:hsl(217 91% 60%);font-weight:700;font-size:14px;margin-bottom:6px">01 · LEARNING BY DOING</div>
        <h3 style="font-family:Figtree,Inter,sans-serif;font-size:18px;font-weight:700;margin:0 0 8px;color:#fff">Teacher-Controlled Experiments</h3>
        <p style="font-size:14px;color:#9AA4B8;margin:0;line-height:1.5">Project onto existing classroom displays. Adjust variables live and watch physics and chemistry principles unfold.</p>
      </div>

      <div style="background:#121D33;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:24px">
        <div style="color:hsl(258 90% 66%);font-weight:700;font-size:14px;margin-bottom:6px">02 · ASSESSMENT IN SECONDS</div>
        <h3 style="font-family:Figtree,Inter,sans-serif;font-size:18px;font-weight:700;margin:0 0 8px;color:#fff">10 Questions in 10 Seconds</h3>
        <p style="font-size:14px;color:#9AA4B8;margin:0;line-height:1.5">Draft syllabus-aligned CBSE and ICSE test papers with answer keys, Bloom's taxonomy tags, and marking rubrics.</p>
      </div>

      <div style="background:#121D33;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:24px">
        <div style="color:#15803D;font-weight:700;font-size:14px;margin-bottom:6px">03 · EARLY GAP DETECTION</div>
        <h3 style="font-family:Figtree,Inter,sans-serif;font-size:18px;font-weight:700;margin:0 0 8px;color:#fff">Question-Level Accuracy</h3>
        <p style="font-size:14px;color:#9AA4B8;margin:0;line-height:1.5">Spot misconceptions months before board exams. Discover exactly which concept failed and take targeted action.</p>
      </div>
    </div>

    <!-- Direct CTA Button -->
    <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center">
      <button type="button" data-open-demo class="lz-btn-primary" style="background:hsl(25 95% 63%);height:54px;padding:0 32px;font-size:17px">
        Book a free demo
      </button>
      <a href="${waHref}" target="_blank" rel="noopener" class="lz-btn-outline" style="border:1px solid rgba(255,255,255,.4);color:#fff;background:transparent;height:54px;padding:0 24px;font-size:16px">
        Chat on WhatsApp
      </a>
    </div>
    <div style="margin-top:20px;font-size:13px;color:#8592A6">
      No credit card required · Free onboarding and teacher training included · Cancel anytime
    </div>
  </div>
</main>

<footer style="padding:28px 20px;border-top:1px solid rgba(255,255,255,.1);text-align:center;font-size:13px;color:#8592A6">
  <div>
    © 2026 Tattvatech Edu Solutions LLP. Learniz. Every class an experiment, not a lecture.
    <a href="/privacy" style="color:#C5CCDA;margin-left:12px">Privacy</a>
    <a href="/terms" style="color:#C5CCDA;margin-left:12px">Terms</a>
  </div>
  <div style="margin-top:8px;font-size:12px;color:#7D889D">
    Designed and developed by <a href="https://creativals.com" target="_blank" rel="noopener noreferrer" style="color:#C5CCDA;text-decoration:underline;text-underline-offset:3px">creativals.com</a>
  </div>
</footer>

${modal}
${whatsapp}

<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

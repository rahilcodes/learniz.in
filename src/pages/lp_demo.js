/**
 * Campaign Landing Page: Direct Demo Booking
 * URL: /lp/demo
 * High-conversion distraction-free page for Google Ads and targeted campaigns
 */

import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderLpDemoPage() {
  const head = renderHead({
    title: "Concept Clarity in Every Class: Book a Free Demo | Learniz",
    description: "Schedule your free 20-minute school demonstration of Learniz. Explore interactive experiments, Assessment in Seconds, and Early Gap Detection.",
    path: "/lp/demo"
  });

  const modal = renderBookingModal();
  const whatsapp = renderWhatsAppFloat();
  const waHref = "https://wa.me/919032181083?text=" + encodeURIComponent("Hi, I want to book a free Learniz demo for my school.");

  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body style="background:#F6F8FB">

<!-- Minimal Header -->
<header style="background:#fff;padding:16px 20px;border-bottom:1px solid #E5E8EF;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
  <a href="/" class="lz-logo" aria-label="Learniz home">
    <img src="/assets/images/learniz-logo-horizontal.png" alt="Learniz - Outcomes you can see." class="lz-logo-img" width="138" height="42" style="height:38px;width:auto;display:block">
  </a>
  <div style="font-size:14px;color:#4B5567">
    Call us: <a href="tel:+919032181083" style="font-weight:600;color:#0B1324">+91-9032181083</a>
  </div>
</header>

<main id="main-content" style="padding:clamp(40px,6vw,72px) 20px">
  <div class="lz-container" style="max-width:960px">
    <div style="background:#fff;border:1px solid #DCE2EC;border-radius:24px;box-shadow:var(--shadow-lg);overflow:hidden;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))">
      <!-- Left: Value Briefing -->
      <div style="padding:clamp(24px,5vw,40px) clamp(16px,4vw,32px);background:#F6F8FB;border-right:1px solid #EEF0F4;display:flex;flex-direction:column;gap:20px">
        <span style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;letter-spacing:.12em;color:hsl(217 91% 45%);font-weight:600">
          LEARNIZ · 20-MINUTE LIVE DEMO
        </span>
        <h1 style="font-family:Figtree,Inter,sans-serif;font-size:28px;font-weight:800;line-height:1.2;margin:0;color:#0B1324">
          Concept Clarity in every class. Outcomes you can see.
        </h1>
        <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
          A personalized 20-minute live demonstration tailored to your school's classes, subjects, and examination boards.
        </p>

        <div style="display:grid;gap:14px;margin-top:10px">
          <div style="display:flex;gap:12px;align-items:center">
            <span style="width:28px;height:28px;border-radius:8px;background:#EEF4FF;color:hsl(217 91% 50%);display:grid;place-items:center;flex:none">
              <img src="/assets/icons/check.svg" width="16" height="16" alt="">
            </span>
            <span style="font-size:14px;color:#1F2A3D">Live interactive experiments on existing classroom displays</span>
          </div>
          <div style="display:flex;gap:12px;align-items:center">
            <span style="width:28px;height:28px;border-radius:8px;background:#F3EFFF;color:hsl(258 90% 58%);display:grid;place-items:center;flex:none">
              <img src="/assets/icons/check.svg" width="16" height="16" alt="">
            </span>
            <span style="font-size:14px;color:#1F2A3D">Assessment in Seconds: 10 questions drafted in 10 seconds</span>
          </div>
          <div style="display:flex;gap:12px;align-items:center">
            <span style="width:28px;height:28px;border-radius:8px;background:#E8F7EE;color:#15803D;display:grid;place-items:center;flex:none">
              <img src="/assets/icons/check.svg" width="16" height="16" alt="">
            </span>
            <span style="font-size:14px;color:#1F2A3D">Early Gap Detection: question-level accuracy heatmaps</span>
          </div>
        </div>

        <div style="margin-top:auto;padding-top:20px;border-top:1px solid #E5E8EF;font-size:13px;color:#6B7485">
          Prefer instant chat? <a href="${waHref}" target="_blank" rel="noopener" style="font-weight:600;color:hsl(217 91% 45%)">Talk to us on WhatsApp →</a>
        </div>
      </div>

      <!-- Right: Booking Form -->
      <div style="padding:clamp(24px,5vw,40px) clamp(16px,4vw,32px)">
        <h2 style="font-family:Figtree,Inter,sans-serif;font-size:22px;font-weight:700;margin:0 0 8px;color:#0B1324">
          Book a free demo
        </h2>
        <p style="font-size:14px;color:#6B7485;margin:0 0 20px">
          Enter your details and an academic coordinator will confirm your session time.
        </p>

        <form id="lz-lp-demo-form" novalidate class="lz-form-grid">
          <label class="lz-label">
            <span>Full Name *</span>
            <input type="text" name="name" required placeholder="Your name" class="lz-input">
          </label>
          <label class="lz-label">
            <span>School / Institution *</span>
            <input type="text" name="school" required placeholder="School name" class="lz-input">
          </label>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,140px),1fr));gap:12px">
            <label class="lz-label">
              <span>City *</span>
              <input type="text" name="city" required placeholder="e.g. Hyderabad" class="lz-input">
            </label>
            <label class="lz-label">
              <span>Role *</span>
              <select name="role" required class="lz-select">
                <option value="">Select role</option>
                <option value="Principal / Director">Principal / Director</option>
                <option value="School owner / Trustee">School owner / Trustee</option>
                <option value="Academic coordinator">Academic coordinator</option>
                <option value="Teacher">Teacher</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <label class="lz-label">
            <span>Mobile (WhatsApp) *</span>
            <input type="tel" name="phone" required placeholder="+91 98765 43210" class="lz-input">
          </label>

          <button type="submit" class="lz-btn-primary" style="width:100%;height:48px;font-size:16px;margin-top:6px">
            Book a free demo
          </button>
        </form>
      </div>
    </div>
  </div>
</main>

<footer style="background:#fff;padding:24px 20px;border-top:1px solid #E5E8EF;text-align:center;font-size:13px;color:#6B7485">
  © 2026 Tattvatech Edu Solutions LLP. Learniz. Every class an experiment, not a lecture.
  <a href="/privacy" style="color:#1F2A3D;margin-left:12px">Privacy</a>
  <a href="/terms" style="color:#1F2A3D;margin-left:12px">Terms</a>
</footer>

${modal}
${whatsapp}

<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

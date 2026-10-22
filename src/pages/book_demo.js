/**
 * Book a Demo Dedicated Page
 * URL: /book-demo
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderBookDemoPage() {
  const head = renderHead({
    title: "Concept Clarity in Every Class: Book a Free Demo | Learniz",
    description: "Schedule a free 20-minute live demonstration of Learniz. Explore interactive experiments, Assessment in Seconds, and Early Gap Detection for your school.",
    path: "/book-demo"
  });

  const header = renderHeader('/book-demo');
  const footer = renderFooter();
  const modal = renderBookingModal();
  const whatsapp = renderWhatsAppFloat();
  const waHref = "https://wa.me/919032181083?text=" + encodeURIComponent("Hi, I want to schedule a free Learniz demo for my school.");

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
      <p class="lz-eyebrow">FREE 20-MINUTE DEMO</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,56px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Concept Clarity in every class. Outcomes you can see.
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        A 20-minute live demonstration on video call or at your school in Hyderabad. We load your specific boards, subjects, and grade levels with zero preparation needed.
      </p>
    </div>
  </section>

  <!-- Booking Layout -->
  <section style="padding:clamp(48px,7vw,84px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="background:#fff;border:1px solid #DCE2EC;border-radius:24px;box-shadow:var(--shadow-lg);overflow:hidden;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))">
        <!-- Left: Walkthrough Overview -->
        <div style="padding:clamp(24px,5vw,40px) clamp(16px,4vw,32px);background:#F6F8FB;border-right:1px solid #EEF0F4;display:flex;flex-direction:column;gap:20px">
          <div style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;letter-spacing:.12em;color:hsl(217 91% 45%);font-weight:600">
            20-MINUTE LIVE DEMONSTRATION
          </div>
          <h2 style="font-family:Figtree,Inter,sans-serif;font-size:26px;font-weight:700;line-height:1.2;margin:0;color:#0B1324">
            What we cover during your session:
          </h2>
          
          <ul style="padding:0;margin:0;list-style:none;display:grid;gap:14px;font-size:14.5px;color:#3F4A5C">
            <li style="display:flex;gap:12px">
              <span style="width:24px;height:24px;border-radius:6px;background:#EEF4FF;color:hsl(217 91% 50%);display:grid;place-items:center;font-weight:700;font-size:12px;flex:none">1</span>
              <span><strong>Live Classroom Experiments:</strong> How teachers project and test simulations live on existing smart boards.</span>
            </li>
            <li style="display:flex;gap:12px">
              <span style="width:24px;height:24px;border-radius:6px;background:#F3EFFF;color:hsl(258 90% 58%);display:grid;place-items:center;font-weight:700;font-size:12px;flex:none">2</span>
              <span><strong>Assessment in Seconds:</strong> Draft 10 syllabus-aligned questions in 10 seconds for your current chapter.</span>
            </li>
            <li style="display:flex;gap:12px">
              <span style="width:24px;height:24px;border-radius:6px;background:#FFF1E8;color:hsl(25 95% 48%);display:grid;place-items:center;font-weight:700;font-size:12px;flex:none">3</span>
              <span><strong>Formative Assessment, Built In:</strong> Schedule quick formative checks with negative marking and sectional timers.</span>
            </li>
            <li style="display:flex;gap:12px">
              <span style="width:24px;height:24px;border-radius:6px;background:#E8F7EE;color:#15803D;display:grid;place-items:center;font-weight:700;font-size:12px;flex:none">4</span>
              <span><strong>Early Gap Detection:</strong> Question-level accuracy heatmaps that show concept gaps weeks before exam results.</span>
            </li>
            <li style="display:flex;gap:12px">
              <span style="width:24px;height:24px;border-radius:6px;background:#0B1324;color:#fff;display:grid;place-items:center;font-weight:700;font-size:12px;flex:none">5</span>
              <span><strong>Founding Schools Pilot:</strong> How your school can qualify for a 100% free 30-day pilot.</span>
            </li>
          </ul>

          <!-- Confirmed Response Box -->
          <div style="margin-top:auto;padding:16px 18px;border:1px solid #DCE2EC;border-radius:14px;background:#fff;display:flex;gap:12px;align-items:center">
            <span style="width:36px;height:36px;border-radius:10px;background:#E8F7EE;color:#15803D;display:grid;place-items:center;flex:none">
              <img src="/assets/icons/check.svg" width="18" height="18" alt="">
            </span>
            <div style="font-size:13px;color:#3F4A5C;line-height:1.45">
              <strong style="color:#0B1324;display:block">Fast Coordination</strong>
              Academic coordinators confirm your session within 2 hours. Video link and calendar invite dispatched instantly.
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:#4B5567">
            <img src="/assets/icons/message-circle.svg" alt="" width="16" height="16">
            Prefer direct WhatsApp? <a href="${waHref}" target="_blank" rel="noopener" style="font-weight:600">Click to Chat</a>
          </div>
        </div>

        <!-- Right: Booking Form -->
        <div style="padding:clamp(24px,5vw,40px) clamp(16px,4vw,32px)">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:22px;font-weight:700;margin:0 0 8px;color:#0B1324">
            Book a free demo
          </h3>
          <p style="font-size:14px;color:#6B7485;margin:0 0 24px">
            Fill in your details below and an academic onboarding coordinator will confirm your session time.
          </p>

          <form id="lz-book-demo-page-form" novalidate class="lz-form-grid">
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:14px">
              <label class="lz-label">
                <span>Full Name *</span>
                <input type="text" name="name" required placeholder="Your name" class="lz-input">
              </label>
              <label class="lz-label">
                <span>School / Institution *</span>
                <input type="text" name="school" required placeholder="School name" class="lz-input">
              </label>
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:14px">
              <label class="lz-label">
                <span>City *</span>
                <input type="text" name="city" required placeholder="e.g. Hyderabad" class="lz-input">
              </label>
              <label class="lz-label">
                <span>Your Role *</span>
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

            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:14px">
              <label class="lz-label">
                <span>Phone (WhatsApp) *</span>
                <input type="tel" name="phone" required placeholder="+91 98765 43210" class="lz-input">
              </label>
              <label class="lz-label">
                <span>Official Email</span>
                <input type="email" name="email" placeholder="you@school.edu.in" class="lz-input">
              </label>
            </div>

            <label class="lz-label">
              <span>Specific Subjects or Classes to Focus On?</span>
              <textarea name="message" rows="3" placeholder="e.g. Class 9 and 10 Physics and Chemistry, CBSE syllabus…" class="lz-textarea"></textarea>
            </label>

            <button type="submit" class="lz-btn-primary" style="width:100%;height:50px;font-size:16px">
              Book a free demo
            </button>

            <p style="font-size:12.5px;color:#6B7485;line-height:1.5;margin:0;text-align:center">
              We respect your privacy. Details are used only to coordinate the demo. See our <a href="/privacy">Privacy Policy</a>.
            </p>
          </form>
        </div>
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

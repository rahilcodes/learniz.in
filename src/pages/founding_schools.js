/**
 * Founding Schools Programme Page
 * URL: /founding-schools
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderFoundingSchoolsPage() {
  const head = renderHead({
    title: "Founding Schools Programme | Learniz",
    description: "Ten forward-thinking schools will shape Learniz. Free 30-day classroom pilot and locked founding pricing for early partner institutions in India.",
    path: "/founding-schools"
  });

  const header = renderHeader('/founding-schools');
  const footer = renderFooter();
  const modal = renderBookingModal();
  const whatsapp = renderWhatsAppFloat();
  const waHref = "https://wa.me/919032181083?text=" + encodeURIComponent("Hi, I want to apply for the Learniz Founding Schools Programme.");

  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body>
${header}

<main id="main-content">
  <!-- Hero Section -->
  <section style="background:#0B1324;color:#fff;padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:48px;align-items:center">
      <div>
        <p class="lz-eyebrow" style="color:hsl(25 95% 68%)">FUTURE-READY CLASSROOMS</p>
        <h1 class="lz-section-title" style="color:#fff;font-size:clamp(34px,5.5vw,56px);margin-top:16px">
          Future-Ready Classrooms: the Founding Schools Programme.
        </h1>
        <p class="lz-section-subtitle" style="color:#C5CCDA;max-width:540px">
          A limited partnership for forward-thinking Indian institutions. Run Learniz early with a free 30-day pilot and permanent founding-tier pricing.
        </p>
        <dl style="margin:28px 0 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,130px),1fr));gap:16px 20px">
          <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:14px 16px">
            <dt style="font-size:11px;color:#9AA4B8;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Cohort Cap</dt>
            <dd style="margin:4px 0 0;font-family:Figtree,Inter,sans-serif;font-size:22px;font-weight:800;color:#fff">10 Schools</dd>
          </div>
          <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:14px 16px">
            <dt style="font-size:11px;color:#9AA4B8;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Pilot</dt>
            <dd style="margin:4px 0 0;font-family:Figtree,Inter,sans-serif;font-size:22px;font-weight:800;color:hsl(25 95% 68%)">30 Days Free</dd>
          </div>
          <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:14px 16px">
            <dt style="font-size:11px;color:#9AA4B8;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Pricing</dt>
            <dd style="margin:4px 0 0;font-family:Figtree,Inter,sans-serif;font-size:22px;font-weight:800;color:#fff">Locked 50% Off</dd>
          </div>
        </dl>
        <div style="margin-top:32px;display:flex;flex-wrap:wrap;gap:12px">
          <button type="button" data-open-demo class="lz-btn-primary" style="background:hsl(25 95% 63%)">Apply for Founding Cohort</button>
          <a href="${waHref}" target="_blank" rel="noopener" class="lz-btn-outline" style="border:1px solid rgba(255,255,255,.3);color:#fff;background:transparent">
            WhatsApp Priority Line
          </a>
        </div>
      </div>

      <!-- Live Counter Box -->
      <div style="justify-self:center;width:100%;max-width:440px;background:#121D33;border:1px solid rgba(255,255,255,.12);border-radius:24px;padding:clamp(20px,4vw,32px);box-shadow:0 30px 60px -20px rgba(0,0,0,.6)">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:12px">
          <span style="font-size:12.5px;font-weight:700;color:#9AA4B8;letter-spacing:.05em;text-transform:uppercase">Cohort 2026 Admissions</span>
          <span style="display:inline-flex;align-items:center;gap:6px;padding:3px 9px;border-radius:6px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);font-size:11.5px;font-weight:600;color:#E1E7F2;white-space:nowrap"><span style="width:6px;height:6px;border-radius:50%;background:#22C55E"></span>Reviewing Applications</span>
        </div>
        <div style="margin-top:20px;display:flex;align-items:baseline;gap:10px">
          <span id="fs-counter-val" style="font-family:Figtree,Inter,sans-serif;font-size:clamp(54px,7vw,68px);font-weight:800;letter-spacing:-.04em;line-height:1;color:#fff">4</span>
          <div style="display:flex;flex-direction:column">
            <span style="font-size:16px;font-weight:700;color:#fff;line-height:1.2">Spots Remaining</span>
            <span style="font-size:13px;color:#9AA4B8;line-height:1.2">out of 10 school cap</span>
          </div>
        </div>
        <div id="fs-cells-grid" data-remaining="4" role="img" aria-label="4 of 10 places remaining" style="margin-top:20px;display:grid;grid-template-columns:repeat(10,1fr);gap:6px">
          <!-- Populated by JS -->
        </div>
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-top:10px;color:#9AA4B8">
          <span data-fs-enrolled style="color:#C5CCDA">6 schools enrolled / reserved</span>
          <span data-fs-open style="color:hsl(25 95% 68%);font-weight:600">4 spots open</span>
        </div>
        <p style="margin-top:22px;padding-top:18px;border-top:1px solid rgba(255,255,255,.08);font-size:13px;line-height:1.55;color:#C5CCDA;margin-bottom:0">
          Applications are evaluated based on school leadership enthusiasm and willingness to pilot experiential pedagogy in STEM classrooms.
        </p>
      </div>
    </div>
  </section>

  <!-- What Schools Get & Give -->
  <section style="padding:clamp(56px,8vw,96px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto">
        <p class="lz-eyebrow">THE FOUNDING AGREEMENT</p>
        <h2 class="lz-section-title">A genuine partnership built on mutual commitment</h2>
      </div>

      <div style="margin-top:48px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:32px">
        <!-- What You Receive -->
        <div class="lz-card" style="border-top:4px solid #15803D">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
            <span style="width:36px;height:36px;border-radius:10px;background:#E8F7EE;color:#15803D;display:grid;place-items:center">
              <img src="/assets/icons/check.svg" width="18" height="18" alt="">
            </span>
            <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0">What Your School Receives</h3>
          </div>
          <ul style="padding:0;margin:0;list-style:none;display:grid;gap:12px;font-size:14.5px;color:#3F4A5C">
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" width="16" height="16" style="color:#15803D;margin-top:3px;flex:none" alt="">
              <strong>100% Free 30-Day Pilot:</strong> Full access to all simulations, IntelliQ question engine, and LMS across all sections.
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" width="16" height="16" style="color:#15803D;margin-top:3px;flex:none" alt="">
              <strong>Locked Lifetime Founding Tier:</strong> Permanent discounted rate that never increases for future academic sessions.
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" width="16" height="16" style="color:#15803D;margin-top:3px;flex:none" alt="">
              <strong>Dedicated Onboarding Specialist:</strong> Direct hands-on teacher training and syllabus configuration by our Hyderabad team.
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" width="16" height="16" style="color:#15803D;margin-top:3px;flex:none" alt="">
              <strong>Product Roadmap Influence:</strong> Direct priority queue for simulation requests and customized feature developments.
            </li>
          </ul>
        </div>

        <!-- What You Provide -->
        <div class="lz-card" style="border-top:4px solid hsl(25 95% 55%)">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
            <span style="width:36px;height:36px;border-radius:10px;background:#FFF1E8;color:hsl(25 95% 48%);display:grid;place-items:center">
              <img src="/assets/icons/heart-handshake.svg" width="18" height="18" alt="">
            </span>
            <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0">What Your School Provides</h3>
          </div>
          <ul style="padding:0;margin:0;list-style:none;display:grid;gap:12px;font-size:14.5px;color:#3F4A5C">
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" width="16" height="16" style="color:hsl(25 95% 48%);margin-top:3px;flex:none" alt="">
              <strong>Classroom Testing:</strong> Teachers conduct at least 2 simulated lesson experiments per week during the pilot.
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" width="16" height="16" style="color:hsl(25 95% 48%);margin-top:3px;flex:none" alt="">
              <strong>Constructive Feedback:</strong> Bi-weekly 20-minute check-in call with our product design team to share impressions.
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" width="16" height="16" style="color:hsl(25 95% 48%);margin-top:3px;flex:none" alt="">
              <strong>Case Study Participation:</strong> Allow our team to write a brief post-pilot summary of student engagement and results.
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" width="16" height="16" style="color:hsl(25 95% 48%);margin-top:3px;flex:none" alt="">
              <strong>Zero Hidden Commitments:</strong> If Learniz does not meet your expectations, you may exit without cost or obligation.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Application CTA Band -->
  <section style="padding:0 20px clamp(56px,8vw,96px)">
    <div class="lz-container" style="background:hsl(25 95% 48%);border-radius:24px;padding:clamp(48px,7vw,80px) 24px;color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;margin:0">
        Future-Ready Classrooms. Outcomes you can see.
      </h2>
      <p style="font-size:16.5px;color:#FFF1E8;max-width:580px;margin:16px auto 32px">
        Applications are processed on a first-come, first-reviewed basis. Secure your 30-day pilot before the 10-school cohort closes.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button type="button" data-open-demo class="lz-btn-outline" style="background:#fff;color:hsl(25 95% 40%);border:0;font-weight:700">Book a free demo</button>
        <a href="${waHref}" target="_blank" rel="noopener" class="lz-btn-outline" style="background:transparent;border:1px solid rgba(255,255,255,.5);color:#fff">
          <img src="/assets/icons/message-circle.svg" alt="" width="18" height="18" style="filter:invert(1)">Talk on WhatsApp
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

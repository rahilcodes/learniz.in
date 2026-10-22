/**
 * About Learniz Page
 * URL: /about
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderAboutPage() {
  const head = renderHead({
    title: "About Learniz | Tattvatech Edu Solutions LLP, Hyderabad",
    description: "Learniz builds the experiential learning platform for Indian schools. Built in Hyderabad by educators and technologists.",
    path: "/about"
  });

  const header = renderHeader('/about');
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
      <p class="lz-eyebrow">ABOUT LEARNIZ</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,56px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Every class an experiment, not a lecture. Outcomes you can see.
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        When students test variables and observe cause and effect live, learning transitions from transient memorization to permanent conceptual intuition.
      </p>
    </div>
  </section>

  <!-- Company Story & Entity -->
  <section style="padding:clamp(56px,8vw,96px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container" style="max-width:960px">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:48px;align-items:start">
        <div>
          <p class="lz-eyebrow">OUR MISSION</p>
          <h2 class="lz-section-title" style="font-size:clamp(26px,3.5vw,36px)">
            Every class an experiment, not a lecture.
          </h2>
          <p class="lz-section-subtitle" style="margin-bottom:16px">
            Founded in Hyderabad, Telangana, Learniz was established with a singular conviction: Indian classrooms are full of inquisitive minds whose potential is constrained by 19th-century blackboard lectures.
          </p>
          <p style="font-size:15px;line-height:1.6;color:#4B5567">
            With the National Education Policy (NEP 2020) and NCF-SE 2023, Indian schools have a clear regulatory mandate to adopt experiential pedagogy. Learniz provides the school-ready platform to make this transition structured, practical, and measurable.
          </p>
        </div>

        <!-- Corporate Facts Box -->
        <div class="lz-card" style="box-shadow:var(--shadow-sm);background:#FAFBFD">
          <div style="margin-bottom:18px">
            <img src="/assets/images/learniz-logo-horizontal.png" alt="Learniz - Outcomes you can see." style="height:44px;width:auto;display:block">
          </div>
          <span style="font-size:12px;font-weight:700;color:hsl(217 91% 45%);letter-spacing:.08em;text-transform:uppercase">Corporate Verification</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:18px;font-weight:700;margin:12px 0 16px">Tattvatech Edu Solutions LLP</h3>
          <dl style="margin:0;display:grid;gap:12px;font-size:14px;color:#3F4A5C">
            <div>
              <dt style="font-weight:600;color:#0B1324">Operating Brand</dt>
              <dd style="margin:2px 0 0">Learniz</dd>
            </div>
            <div>
              <dt style="font-weight:600;color:#0B1324">Registered Headquarters</dt>
              <dd style="margin:2px 0 0">Hyderabad, Telangana, India</dd>
            </div>
            <div>
              <dt style="font-weight:600;color:#0B1324">Direct Contact</dt>
              <dd style="margin:2px 0 0">
                <a href="mailto:info@learniz.in" style="font-weight:500">info@learniz.in</a> · 
                <a href="tel:+919032181083" style="font-weight:500">+91-9032181083</a>
              </dd>
            </div>
            <div>
              <dt style="font-weight:600;color:#0B1324">Data &amp; Cloud Infrastructure</dt>
              <dd style="margin:2px 0 0">100% Hosted within India (AWS Asia Pacific Region)</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Values Grid -->
  <section style="background:#F6F8FB;padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto">
        <p class="lz-eyebrow">OUR CORE PRINCIPLES</p>
        <h2 class="lz-section-title">What we believe and prioritize</h2>
      </div>

      <div style="margin-top:48px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:24px">
        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:#EEF4FF;display:grid;place-items:center;color:hsl(217 91% 50%)">
            <img src="/assets/icons/atom.svg" width="20" height="20" alt="">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;margin:16px 0 8px">Concept Over Memorization</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            A formula memorized without conceptual intuition is forgotten shortly after the exam. Interactive experiments build mental anchors that last.
          </p>
        </div>

        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:#F3EFFF;display:grid;place-items:center;color:hsl(258 90% 58%)">
            <img src="/assets/icons/sparkles.svg" width="20" height="20" alt="">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;margin:16px 0 8px">Teaching Time Reclaimed</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Technology must never attempt to replace the teacher. Learniz automates paper-setting and grading drudgery so teachers have time to mentor.
          </p>
        </div>

        <div class="lz-card">
          <div style="width:40px;height:40px;border-radius:10px;background:#E8F7EE;display:grid;place-items:center;color:#15803D">
            <img src="/assets/icons/shield-check.svg" width="20" height="20" alt="">
          </div>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;margin:16px 0 8px">Strict Data Integrity</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Student academic records belong solely to the institution and parents. Hosted strictly in India with zero third-party ads or data sales.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <section style="padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container" style="background:#0B1324;border-radius:24px;padding:clamp(48px,7vw,80px) 24px;color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;margin:0">
        Concept Clarity in every class. Outcomes you can see.
      </h2>
      <p style="font-size:16.5px;color:#C5CCDA;max-width:580px;margin:16px auto 32px">
        Connect with our Hyderabad academic team to see Learniz configured for your school's curriculum.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button type="button" data-open-demo class="lz-btn-primary">Book a free demo</button>
        <a href="/contact" class="lz-btn-outline" style="background:transparent;border:1px solid rgba(255,255,255,.3);color:#fff">Contact Details →</a>
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

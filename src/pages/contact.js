/**
 * Contact Us Page
 * URL: /contact
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderContactPage() {
  const head = renderHead({
    title: "Contact Learniz | Hyderabad, Telangana",
    description: "Get in touch with the Learniz team in Hyderabad. Reach us via phone at +91-9032181083, email info@learniz.in or WhatsApp for school demos.",
    path: "/contact"
  });

  const header = renderHeader('/contact');
  const footer = renderFooter();
  const modal = renderBookingModal();
  const whatsapp = renderWhatsAppFloat();
  const waHref = "https://wa.me/919032181083?text=" + encodeURIComponent("Hi, I want to get in touch with the Learniz team.");

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
      <p class="lz-eyebrow">CONTACT &amp; HEADQUARTERS</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,56px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Speak Directly with the Learniz Team
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        Whether you are exploring a pilot for your school, scheduling teacher training, or discussing curriculum mapping, our Hyderabad team is here to assist.
      </p>
    </div>
  </section>

  <!-- Contact Grid & Details -->
  <section style="padding:clamp(56px,8vw,96px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:48px">
        <!-- Contact Information Cards -->
        <div>
          <h2 style="font-family:Figtree,Inter,sans-serif;font-size:26px;font-weight:700;margin:0 0 20px;color:#0B1324">
            Office &amp; Direct Channels
          </h2>

          <div style="display:grid;gap:16px">
            <div class="lz-card" style="display:flex;gap:16px;align-items:flex-start">
              <span style="width:40px;height:40px;border-radius:10px;background:#EEF4FF;color:hsl(217 91% 50%);display:grid;place-items:center;flex:none">
                <img src="/assets/icons/map-pin.svg" width="20" height="20" alt="">
              </span>
              <div>
                <strong style="color:#0B1324;display:block;font-size:16px">Registered Headquarters</strong>
                <p style="margin:4px 0 0;font-size:14px;color:#4B5567;line-height:1.5">
                  Tattvatech Edu Solutions LLP<br>
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>

            <div class="lz-card" style="display:flex;gap:16px;align-items:flex-start">
              <span style="width:40px;height:40px;border-radius:10px;background:#E8F7EE;color:#15803D;display:grid;place-items:center;flex:none">
                <img src="/assets/icons/phone.svg" width="20" height="20" alt="">
              </span>
              <div>
                <strong style="color:#0B1324;display:block;font-size:16px">Telephone &amp; WhatsApp</strong>
                <p style="margin:4px 0 0;font-size:14px;color:#4B5567;line-height:1.5">
                  <a href="tel:+919032181083" style="font-weight:600">+91-9032181083</a><br>
                  Monday – Saturday, 9:00 AM – 6:30 PM IST
                </p>
              </div>
            </div>

            <div class="lz-card" style="display:flex;gap:16px;align-items:flex-start">
              <span style="width:40px;height:40px;border-radius:10px;background:#F3EFFF;color:hsl(258 90% 58%);display:grid;place-items:center;flex:none">
                <img src="/assets/icons/mail.svg" width="20" height="20" alt="">
              </span>
              <div>
                <strong style="color:#0B1324;display:block;font-size:16px">Email Correspondence</strong>
                <p style="margin:4px 0 0;font-size:14px;color:#4B5567;line-height:1.5">
                  Institutional queries: <a href="mailto:info@learniz.in" style="font-weight:600">info@learniz.in</a><br>
                  Typical response time within 4 business hours
                </p>
              </div>
            </div>

            <div class="lz-card" style="display:flex;gap:16px;align-items:flex-start">
              <span style="width:40px;height:40px;border-radius:10px;background:#0B1324;color:#fff;display:grid;place-items:center;flex:none">
                <img src="/assets/icons/message-circle.svg" width="20" height="20" style="filter:invert(1)" alt="">
              </span>
              <div>
                <strong style="color:#0B1324;display:block;font-size:16px">Instant WhatsApp Chat</strong>
                <p style="margin:4px 0 0;font-size:14px;color:#4B5567;line-height:1.5">
                  Need a quick response? <a href="${waHref}" target="_blank" rel="noopener" style="font-weight:600">Start WhatsApp Conversation →</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Direct Contact Form -->
        <div style="background:#fff;border:1px solid #DCE2EC;border-radius:20px;padding:clamp(20px,5vw,32px);box-shadow:var(--shadow-md)">
          <h2 style="font-family:Figtree,Inter,sans-serif;font-size:24px;font-weight:700;margin:0 0 10px;color:#0B1324">
            Send an Inquiry
          </h2>
          <p style="font-size:14px;color:#6B7485;margin:0 0 24px">
            Fill out the form below and an academic advisor will follow up promptly.
          </p>

          <form id="lz-contact-page-form" novalidate class="lz-form-grid">
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:14px">
              <label class="lz-label">
                <span>Your Name *</span>
                <input type="text" name="name" required placeholder="Dr. / Mr. / Ms. Name" class="lz-input">
              </label>
              <label class="lz-label">
                <span>School / Institution *</span>
                <input type="text" name="school" required placeholder="School Name" class="lz-input">
              </label>
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:14px">
              <label class="lz-label">
                <span>City &amp; State *</span>
                <input type="text" name="city" required placeholder="e.g. Hyderabad, Telangana" class="lz-input">
              </label>
              <label class="lz-label">
                <span>Your Designation *</span>
                <select name="role" required class="lz-select">
                  <option value="">Select role</option>
                  <option value="Principal / Director">Principal / Director</option>
                  <option value="School owner / Trustee">School owner / Trustee</option>
                  <option value="Academic coordinator">Academic coordinator</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Parent">Parent</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:14px">
              <label class="lz-label">
                <span>Mobile (WhatsApp) *</span>
                <input type="tel" name="phone" required placeholder="+91 98765 43210" class="lz-input">
              </label>
              <label class="lz-label">
                <span>Email Address</span>
                <input type="email" name="email" placeholder="you@school.edu.in" class="lz-input">
              </label>
            </div>

            <label class="lz-label">
              <span>Message / How Can We Help?</span>
              <textarea name="message" rows="3" placeholder="Tell us about your classes, boards, or questions…" class="lz-textarea"></textarea>
            </label>

            <button type="submit" class="lz-btn-primary" style="width:100%;height:48px">
              Send Inquiry
            </button>
            <p style="font-size:12px;color:#6B7485;margin:0;text-align:center">
              We respect your privacy. Details are used only to respond to your inquiry.
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

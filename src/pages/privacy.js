/**
 * Privacy Policy Page
 * URL: /privacy
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderPrivacyPage() {
  const head = renderHead({
    title: "Privacy Policy | Learniz",
    description: "Learniz privacy policy. Details on student data protection, India DPDP Act compliance, cloud security, and confidentiality.",
    path: "/privacy"
  });

  const header = renderHeader('/privacy');
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
  <article class="lz-container-narrow" style="padding:clamp(48px,7vw,80px) 20px clamp(56px,8vw,96px)">
    <p class="lz-eyebrow">LEGAL DOCUMENTATION</p>
    <h1 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(32px,5vw,48px);font-weight:800;letter-spacing:-.03em;margin:16px 0 8px;color:#0B1324">
      Privacy Policy
    </h1>
    <div style="font-size:14px;color:#6B7485;margin-bottom:32px;padding-bottom:16px;border-bottom:1px solid #EEF0F4">
      Effective Date: 1 January 2026 · Last Updated: October 2026 · Tattvatech Edu Solutions LLP
    </div>

    <div style="font-size:15.5px;line-height:1.75;color:#2D3748;display:grid;gap:24px">
      <section>
        <h2 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0 0 10px;color:#0B1324">
          1. Overview and Commitment to Student Privacy
        </h2>
        <p style="margin:0">
          Learniz (“we”, “us”, or “our”), operated by <strong>Tattvatech Edu Solutions LLP</strong>, provides an experiential learning and assessment platform to schools, teachers, students, and parents across India. We recognize that student academic records and personal details are sensitive. We adhere strictly to the Digital Personal Data Protection Act (DPDP Act 2023) of India and applicable child data privacy standards.
        </p>
      </section>

      <section>
        <h2 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0 0 10px;color:#0B1324">
          2. Information We Collect
        </h2>
        <p style="margin:0">
          We collect only the minimum information necessary to deliver educational functionality:
        </p>
        <ul style="padding-left:24px;margin:12px 0;display:grid;gap:8px">
          <li><strong>School &amp; Faculty Information:</strong> Institution name, city, official email address, administrator name, and mobile phone number provided during onboarding or demo booking.</li>
          <li><strong>Student Profile Information:</strong> Student name, roll number or identifier, class, and section provided by the partner institution. We do not collect student home addresses, biometric data, or financial details.</li>
          <li><strong>Academic Interaction Data:</strong> Simulation interactions, question responses, test scores, timestamps, and question-level completion rates needed to generate performance analytics.</li>
        </ul>
      </section>

      <section>
        <h2 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0 0 10px;color:#0B1324">
          3. How We Use Information
        </h2>
        <p style="margin:0">
          Information collected is utilized exclusively for educational purposes:
        </p>
        <ul style="padding-left:24px;margin:12px 0;display:grid;gap:8px">
          <li>Delivering live interactive experiments and question paper drafting.</li>
          <li>Generating diagnostic analytics for teachers and institutional principals.</li>
          <li>Communicating academic calendars and student progress to authorized parents.</li>
          <li>Coordinating scheduled demonstrations and pilot onboarding with school administrators.</li>
        </ul>
        <p style="margin:0;font-weight:600;color:#0B1324">
          We never sell, rent, monetize, or license student or institutional data to any third-party advertisers or commercial brokers.
        </p>
      </section>

      <section>
        <h2 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0 0 10px;color:#0B1324">
          4. Cloud Infrastructure &amp; Data Sovereignty
        </h2>
        <p style="margin:0">
          All databases, application servers, and file storages are hosted within data centers situated physically within the Republic of India (Amazon Web Services Asia Pacific Mumbai / Hyderabad regions). All data transfers are encrypted in transit using industry-standard TLS 1.3 and at rest using AES-256 encryption.
        </p>
      </section>

      <section>
        <h2 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0 0 10px;color:#0B1324">
          5. Cookies and Web Analytics
        </h2>
        <p style="margin:0">
          Our public website uses minimal, strictly essential session cookies to remember user preferences and measure aggregated website performance. We do not use intrusive cross-site tracking cookies.
        </p>
      </section>

      <section>
        <h2 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0 0 10px;color:#0B1324">
          6. Contacting the Data Protection Officer
        </h2>
        <p style="margin:0">
          If you have questions regarding this Privacy Policy or wish to request data verification or deletion on behalf of your institution, please contact our Data Protection Officer at:
        </p>
        <div style="margin-top:10px;padding:16px;border-radius:10px;background:#F6F8FB;font-size:14px">
          <strong>Tattvatech Edu Solutions LLP</strong><br>
          Attn: Privacy &amp; Data Protection Officer<br>
          Email: <a href="mailto:info@learniz.in" style="font-weight:600">info@learniz.in</a><br>
          Phone: <a href="tel:+919032181083" style="font-weight:600">+91-9032181083</a><br>
          Hyderabad, Telangana, India
        </div>
      </section>
    </div>
  </article>
</main>

${footer}
${modal}
${whatsapp}

<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

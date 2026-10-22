/**
 * Refund Policy Page
 * URL: /refund
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderRefundPage() {
  const head = renderHead({
    title: "Refund Policy | Learniz",
    description: "Refund and Cancellation Policy for Learniz educational software subscriptions. Clear, transparent terms from Tattvatech Edu Solutions LLP.",
    path: "/refund"
  });

  const header = renderHeader('/refund');
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
      Refund &amp; Cancellation Policy
    </h1>
    <div style="font-size:14px;color:#6B7485;margin-bottom:32px;padding-bottom:16px;border-bottom:1px solid #EEF0F4">
      Effective Date: 1 January 2026 · Last Updated: October 2026 · Tattvatech Edu Solutions LLP
    </div>

    <div style="font-size:15.5px;line-height:1.75;color:#2D3748;display:grid;gap:24px">
      <section>
        <h2 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0 0 10px;color:#0B1324">
          1. 30-Day Free Pilot Period
        </h2>
        <p style="margin:0">
          Schools enrolled in the <strong>Founding Schools Programme</strong> receive a completely free, 30-day trial pilot. No credit card or upfront deposit is collected. If your institution decides not to continue after the pilot, your account simply concludes with zero fees or charges.
        </p>
      </section>

      <section>
        <h2 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0 0 10px;color:#0B1324">
          2. Paid Institutional Subscriptions
        </h2>
        <p style="margin:0">
          For paid annual institutional licenses:
        </p>
        <ul style="padding-left:24px;margin:10px 0;display:grid;gap:8px">
          <li><strong>30-Day Money-Back Guarantee:</strong> If a subscribing school is dissatisfied with the platform within the first 30 days of a paid annual subscription, we will issue a 100% full refund upon written notice.</li>
          <li><strong>Mid-Term Cancellations:</strong> After 30 days from annual renewal, subscriptions may be cancelled for the subsequent academic term with pro-rata adjustments according to the formal institutional agreement.</li>
        </ul>
      </section>

      <section>
        <h2 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0 0 10px;color:#0B1324">
          3. Refund Processing
        </h2>
        <p style="margin:0">
          Approved refunds are processed within 7 to 10 working days via the original method of payment (NEFT, RTGS, or corporate bank transfer) to the institution’s verified account.
        </p>
      </section>

      <section>
        <h2 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:0 0 10px;color:#0B1324">
          4. Contact for Billing &amp; Refunds
        </h2>
        <p style="margin:0">
          To request a refund or discuss subscription adjustments, please contact our billing department at:
        </p>
        <div style="margin-top:10px;padding:16px;border-radius:10px;background:#F6F8FB;font-size:14px">
          <strong>Tattvatech Edu Solutions LLP</strong><br>
          Billing &amp; Institutional Accounts<br>
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

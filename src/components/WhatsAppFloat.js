/**
 * Sticky Floating WhatsApp Button Component
 * Matches Claude Design SiteHeader.dc.html
 */

export function renderWhatsAppFloat() {
  const waHref = "https://wa.me/919032181083?text=" + encodeURIComponent("Hi, I'd like to book a free Learniz demo for my school.");

  return `
<!-- Floating WhatsApp Button -->
<a href="${waHref}" target="_blank" rel="noopener" aria-label="Talk to us on WhatsApp" class="lz-whatsapp-float">
  <img src="/assets/icons/message-circle.svg" alt="" width="20" height="20" style="filter:invert(1)">
  <span>WhatsApp</span>
</a>
`;
}

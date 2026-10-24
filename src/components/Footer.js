/**
 * Global Footer — the design's four columns, populated with the site's real links.
 */
import { icon } from './icons.js';
import { WA_HREF, LOGIN_HREF, renderLogo } from './Header.js';

export function renderFooter() {
  return `
<footer class="footer" role="contentinfo">
  <div class="container footer-grid">
    <div class="footer-brand">
      ${renderLogo(44)}
      <p>Every class an experiment, not a lecture. Learniz turns lessons into live experiments and gives schools Measurable Learning Outcomes in line with NEP 2020 and NCF-SE 2023.</p>
      <div class="footer-tags"><span class="tag tag-outline">NEP 2020</span><span class="tag tag-outline">NCF-SE 2023</span><span class="tag tag-outline">CBSE · ICSE · State</span></div>
    </div>
    <nav class="footer-col" aria-label="Product">
      <span class="label">Product</span>
      <a href="/platform">Platform</a>
      <a href="/features/interactive-animations">Interactive Animations</a>
      <a href="/features/intelliq">Question Generator</a>
      <a href="/features/lms-exam-builder">LMS &amp; Exam Builder</a>
      <a href="/features/analytics">Academic Analytics</a>
      <a href="/see-it-live">See It Live</a>
    </nav>
    <nav class="footer-col" aria-label="Schools">
      <span class="label">Schools</span>
      <a href="/for-institutions">For Institutions</a>
      <a href="/for-teachers">For Teachers</a>
      <a href="/for-students">For Students</a>
      <a href="/for-parents">For Parents</a>
      <a href="/founding-schools">Founding Schools</a>
      <a href="${LOGIN_HREF}" target="_blank" rel="noopener noreferrer">Login</a>
    </nav>
    <nav class="footer-col" aria-label="Talk to us">
      <span class="label">Talk to us</span>
      <a href="/book-demo">Book a free demo</a>
      <a href="${WA_HREF}" target="_blank" rel="noopener">WhatsApp</a>
      <a href="tel:+919032181083">+91-9032181083</a>
      <a href="mailto:info@learniz.in">info@learniz.in</a>
      <a href="/contact">Contact</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="/faq">FAQ</a>
    </nav>
  </div>
  <div class="container footer-legal">
    <div>
      <span>© 2026 Tattvatech Edu Solutions LLP · Learniz · Hyderabad, Telangana, India</span>
      <div class="footer-credit">Designed and developed by <a href="https://creativals.com" target="_blank" rel="noopener noreferrer">creativals.com</a></div>
    </div>
    <nav aria-label="Legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/refund">Refund Policy</a></nav>
  </div>
</footer>

<div class="sticky-cta"><button type="button" class="btn btn-primary btn-lg" data-open-demo>Book a free demo</button></div>
<a href="${WA_HREF}" target="_blank" rel="noopener" class="wa-float" aria-label="Talk to us on WhatsApp">${icon('whatsappLogo', 18)}<span>WhatsApp</span></a>
`;
}

/** Legal row only — for campaign landing pages. */
export function renderLpFooter() {
  return `
<footer class="footer" role="contentinfo" style="padding-top:32px">
  <div class="container footer-legal" style="margin-top:0">
    <div><span>© 2026 Tattvatech Edu Solutions LLP · Learniz</span><div class="footer-credit">Designed and developed by <a href="https://creativals.com" target="_blank" rel="noopener noreferrer">creativals.com</a></div></div>
    <nav aria-label="Legal"><a href="/">learniz.in</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></nav>
  </div>
</footer>
<div class="sticky-cta"><button type="button" class="btn btn-primary btn-lg" data-open-demo>Book a free demo</button></div>
`;
}

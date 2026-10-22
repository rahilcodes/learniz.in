/**
 * Global Footer Component
 * Matches Claude Design SiteFooter.dc.html
 */

export function renderFooter() {
  return `
<footer role="contentinfo" class="lz-footer">
  <div class="lz-container lz-footer-inner">
    <div class="lz-footer-grid">
      <!-- Brand & Mission Column -->
      <div class="lz-footer-col-brand">
        <a href="/" aria-label="Learniz home" class="lz-logo" style="display:inline-block">
          <img src="/assets/images/learniz-logo-white.png" alt="Learniz - Outcomes you can see." class="lz-logo-img" width="148" height="46" style="height:44px;width:auto;display:block">
        </a>
        <p style="margin:16px 0 0;font-size:14px;line-height:1.6;color:#9AA4B8">
          Learniz turns lessons into live experiments and gives schools Measurable Learning Outcomes in line with NEP 2020 and NCF-SE 2023. Every class an experiment, not a lecture.
        </p>
        <div style="margin-top:20px;display:grid;gap:8px;font-size:14px">
          <a href="mailto:info@learniz.in" class="lz-footer-link">info@learniz.in</a>
          <a href="tel:+919032181083" class="lz-footer-link">+91-9032181083</a>
          <span style="color:#9AA4B8">Hyderabad, Telangana, India</span>
        </div>
      </div>

      <!-- Product Navigation -->
      <nav aria-label="Product" class="lz-footer-col">
        <span class="lz-footer-heading">Product</span>
        <a href="/platform" class="lz-footer-link">Platform Overview</a>
        <a href="/features/interactive-animations" class="lz-footer-link">Interactive Animations</a>
        <a href="/features/intelliq" class="lz-footer-link">Question Generator</a>
        <a href="/features/lms-exam-builder" class="lz-footer-link">LMS &amp; Exam Builder</a>
        <a href="/features/analytics" class="lz-footer-link">Academic Analytics</a>
        <a href="/see-it-live" class="lz-footer-link">See It Live</a>
        <a href="https://app.learniz.in/login" target="_blank" rel="noopener noreferrer" class="lz-footer-link" style="display:inline-flex;align-items:center;gap:6px">Academiz Login <img src="/assets/icons/external-link.svg" alt="" width="12" height="12" style="opacity:.6"></a>
      </nav>

      <!-- Solutions Navigation -->
      <nav aria-label="Solutions" class="lz-footer-col">
        <span class="lz-footer-heading">Solutions</span>
        <a href="/for-institutions" class="lz-footer-link">For Institutions</a>
        <a href="/for-teachers" class="lz-footer-link">For Teachers</a>
        <a href="/for-students" class="lz-footer-link">For Students</a>
        <a href="/for-parents" class="lz-footer-link">For Parents</a>
        <a href="/founding-schools" class="lz-footer-link">Founding Schools Programme</a>
      </nav>

      <!-- Company Navigation -->
      <nav aria-label="Company" class="lz-footer-col">
        <span class="lz-footer-heading">Company</span>
        <a href="/about" class="lz-footer-link">About Learniz</a>
        <a href="/blog" class="lz-footer-link">Blog &amp; resources</a>
        <a href="/faq" class="lz-footer-link">FAQ</a>
        <a href="/contact" class="lz-footer-link">Contact</a>
        <a href="/book-demo" class="lz-footer-link">Book a free demo</a>
        <a href="https://app.learniz.in/login" target="_blank" rel="noopener noreferrer" class="lz-footer-link" style="display:inline-flex;align-items:center;gap:6px">Platform Login <img src="/assets/icons/external-link.svg" alt="" width="12" height="12" style="opacity:.6"></a>
      </nav>
    </div>

    <!-- Bottom Bar -->
    <div class="lz-footer-bottom">
      <div class="lz-footer-copy">
        <span>© 2026 Tattvatech Edu Solutions LLP. Learniz. Every class an experiment, not a lecture.</span>
        <div class="lz-footer-credit" style="margin-top:6px;font-size:12px;color:#7D889D">
          Designed and developed by <a href="https://creativals.com" target="_blank" rel="noopener noreferrer" style="color:#C5CCDA;text-decoration:underline;text-underline-offset:3px">creativals.com</a>
        </div>
      </div>
      <nav aria-label="Legal" class="lz-footer-legal-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms</a>
        <a href="/refund">Refund Policy</a>
      </nav>
    </div>
  </div>
</footer>
`;
}

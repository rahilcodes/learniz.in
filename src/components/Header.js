/**
 * Global Header Component
 * Matches Claude Design SiteHeader.dc.html
 */

export function renderHeader(activePath = '') {
  const waHref = "https://wa.me/919032181083?text=" + encodeURIComponent("Hi, I'd like to book a free Learniz demo for my school.");

  return `
<header role="banner" class="lz-header">
  <div class="lz-container lz-header-inner">
    <!-- Brand Logo -->
    <a href="/" aria-label="Learniz home" class="lz-logo">
      <img src="/assets/images/learniz-logo-horizontal.png" alt="Learniz - Outcomes you can see." class="lz-logo-img" width="138" height="42">
    </a>

    <!-- Desktop Navigation -->
    <nav aria-label="Primary" class="lz-nav-desktop lz-desktop-only">
      <a href="/platform" class="lz-nav-link ${activePath === '/platform' || activePath === '/academiz' ? 'active' : ''}">Platform</a>

      <!-- Features Dropdown -->
      <div class="lz-nav-dropdown-trigger">
        <button type="button" aria-haspopup="true" class="lz-nav-link">
          Features
          <img src="/assets/icons/chevron-down.svg" alt="" width="14" height="14" style="width:14px;height:14px">
        </button>
        <div role="menu" class="lz-dropdown-panel">
          <div class="lz-dropdown-content" style="width:560px;display:grid;grid-template-columns:1fr 1fr;gap:4px">
            <a role="menuitem" href="/features/interactive-animations" style="display:flex;gap:12px;padding:12px;border-radius:10px;color:#0B1324;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='transparent'">
              <span aria-hidden="true" style="width:34px;height:34px;flex:none;border-radius:9px;background:#EEF4FF;color:hsl(217 91% 50%);display:grid;place-items:center">
                <img src="/assets/icons/atom.svg" alt="" width="17" height="17">
              </span>
              <span>
                <span style="display:block;font-weight:600;font-size:14px">Interactive Animations</span>
                <span style="display:block;font-size:12.5px;color:#5B6678;margin-top:2px;line-height:1.4">Learning by Doing with live simulations</span>
              </span>
            </a>

            <a role="menuitem" href="/features/intelliq" style="display:flex;gap:12px;padding:12px;border-radius:10px;color:#0B1324;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='transparent'">
              <span aria-hidden="true" style="width:34px;height:34px;flex:none;border-radius:9px;background:#F3EFFF;color:hsl(258 90% 58%);display:grid;place-items:center">
                <img src="/assets/icons/sparkles.svg" alt="" width="17" height="17">
              </span>
              <span>
                <span style="display:block;font-weight:600;font-size:14px">Question Generator</span>
                <span style="display:block;font-size:12.5px;color:#5B6678;margin-top:2px;line-height:1.4">Assessment in Seconds: 10 questions in 10 seconds</span>
              </span>
            </a>

            <a role="menuitem" href="/features/lms-exam-builder" style="display:flex;gap:12px;padding:12px;border-radius:10px;color:#0B1324;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='transparent'">
              <span aria-hidden="true" style="width:34px;height:34px;flex:none;border-radius:9px;background:#FFF1E8;color:hsl(25 95% 48%);display:grid;place-items:center">
                <img src="/assets/icons/layers.svg" alt="" width="17" height="17">
              </span>
              <span>
                <span style="display:block;font-weight:600;font-size:14px">LMS &amp; Exam Builder</span>
                <span style="display:block;font-size:12.5px;color:#5B6678;margin-top:2px;line-height:1.4">Formative Assessment, Built In with chapter structure</span>
              </span>
            </a>

            <a role="menuitem" href="/features/analytics" style="display:flex;gap:12px;padding:12px;border-radius:10px;color:#0B1324;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='transparent'">
              <span aria-hidden="true" style="width:34px;height:34px;flex:none;border-radius:9px;background:#E8F7EE;color:#15803D;display:grid;place-items:center">
                <img src="/assets/icons/chart-column.svg" alt="" width="17" height="17">
              </span>
              <span>
                <span style="display:block;font-weight:600;font-size:14px">Academic Analytics</span>
                <span style="display:block;font-size:12.5px;color:#5B6678;margin-top:2px;line-height:1.4">Early Gap Detection weeks before results</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Solutions Dropdown -->
      <div class="lz-nav-dropdown-trigger">
        <button type="button" aria-haspopup="true" class="lz-nav-link">
          Solutions
          <img src="/assets/icons/chevron-down.svg" alt="" width="14" height="14" style="width:14px;height:14px">
        </button>
        <div role="menu" class="lz-dropdown-panel">
          <div class="lz-dropdown-content" style="width:300px;display:grid;gap:2px">
            <a role="menuitem" href="/for-institutions" style="display:flex;align-items:center;justify-content:space-between;padding:11px 12px;border-radius:10px;color:#0B1324;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='transparent'">
              <span>
                <span style="display:block;font-weight:600;font-size:14px">For Institutions</span>
                <span style="display:block;font-size:12.5px;color:#5B6678;margin-top:1px">Measurable Learning Outcomes &amp; NEP 2020</span>
              </span>
              <img src="/assets/icons/arrow-right.svg" alt="" width="14" height="14" style="opacity:.55">
            </a>

            <a role="menuitem" href="/for-teachers" style="display:flex;align-items:center;justify-content:space-between;padding:11px 12px;border-radius:10px;color:#0B1324;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='transparent'">
              <span>
                <span style="display:block;font-weight:600;font-size:14px">For Teachers</span>
                <span style="display:block;font-size:12.5px;color:#5B6678;margin-top:1px">Visible Understanding &amp; Teaching Time Reclaimed</span>
              </span>
              <img src="/assets/icons/arrow-right.svg" alt="" width="14" height="14" style="opacity:.55">
            </a>

            <a role="menuitem" href="/for-students" style="display:flex;align-items:center;justify-content:space-between;padding:11px 12px;border-radius:10px;color:#0B1324;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='transparent'">
              <span>
                <span style="display:block;font-weight:600;font-size:14px">For Students</span>
                <span style="display:block;font-size:12.5px;color:#5B6678;margin-top:1px">Learning by Doing &amp; Concept Clarity</span>
              </span>
              <img src="/assets/icons/arrow-right.svg" alt="" width="14" height="14" style="opacity:.55">
            </a>

            <a role="menuitem" href="/for-parents" style="display:flex;align-items:center;justify-content:space-between;padding:11px 12px;border-radius:10px;color:#0B1324;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='transparent'">
              <span>
                <span style="display:block;font-weight:600;font-size:14px">For Parents</span>
                <span style="display:block;font-size:12.5px;color:#5B6678;margin-top:1px">Parent Confidence &amp; progress beyond marks</span>
              </span>
              <img src="/assets/icons/arrow-right.svg" alt="" width="14" height="14" style="opacity:.55">
            </a>
          </div>
        </div>
      </div>

      <a href="/see-it-live" class="lz-nav-link ${activePath === '/see-it-live' ? 'active' : ''}">See It Live</a>
      <a href="/founding-schools" class="lz-nav-link ${activePath === '/founding-schools' ? 'active' : ''}">Founding Schools</a>

      <!-- Resources Dropdown -->
      <div class="lz-nav-dropdown-trigger">
        <button type="button" aria-haspopup="true" class="lz-nav-link">
          Resources
          <img src="/assets/icons/chevron-down.svg" alt="" width="14" height="14" style="width:14px;height:14px">
        </button>
        <div role="menu" class="lz-dropdown-panel">
          <div class="lz-dropdown-content" style="width:220px;display:grid;gap:2px">
            <a role="menuitem" href="/blog" style="padding:10px 12px;border-radius:9px;color:#0B1324;font-weight:500;font-size:14px;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='transparent'">Blog &amp; resources</a>
            <a role="menuitem" href="/faq" style="padding:10px 12px;border-radius:9px;color:#0B1324;font-weight:500;font-size:14px;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='transparent'">FAQ</a>
            <a role="menuitem" href="/contact" style="padding:10px 12px;border-radius:9px;color:#0B1324;font-weight:500;font-size:14px;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='transparent'">Contact</a>
          </div>
        </div>
      </div>

      <a href="/about" class="lz-nav-link ${activePath === '/about' ? 'active' : ''}">About</a>
    </nav>

    <!-- Desktop CTA Buttons -->
    <div class="lz-desktop-only lz-header-cta" style="align-items:center;gap:8px;flex:none">
      <a href="${waHref}" target="_blank" rel="noopener" aria-label="Talk to us on WhatsApp" title="Talk to us on WhatsApp" style="width:40px;height:40px;border-radius:10px;display:grid;place-items:center;color:#1F2A3D;border:1px solid #E5E8EF;background:#fff;transition:background .15s" onmouseover="this.style.background='#F3F5F9'" onmouseout="this.style.background='fff'">
        <img src="/assets/icons/message-circle.svg" alt="" width="18" height="18">
      </a>
      <button type="button" data-open-demo class="lz-btn-outline lz-btn-sm" style="font-size:14px;padding:0 16px;height:40px;font-weight:600">Book a free demo</button>
      <a href="https://app.learniz.in/login" target="_blank" rel="noopener noreferrer" class="lz-btn-primary lz-btn-sm lz-btn-login" aria-label="Login to Learniz">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>Login</span>
      </a>
    </div>

    <!-- Mobile Header Controls -->
    <div class="lz-mobile-only" style="align-items:center;gap:6px">
      <a href="https://app.learniz.in/login" target="_blank" rel="noopener noreferrer" class="lz-btn-primary lz-btn-sm lz-btn-login" style="height:38px;padding:0 11px;font-size:13px;gap:5px;border-radius:9px" aria-label="Login to Learniz">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>Login</span>
      </a>
      <button type="button" data-open-demo class="lz-btn-outline lz-btn-sm lz-mobile-demo-btn" style="height:38px;padding:0 11px;font-size:13px;font-weight:600;border-radius:9px">Book Demo</button>
      <button type="button" id="lz-mobile-toggle" aria-expanded="false" aria-controls="lz-mobile-drawer" aria-label="Open navigation menu" class="lz-mobile-menu-btn" style="width:38px;height:38px;border-radius:9px">
        <img src="/assets/icons/menu.svg" alt="Open menu" width="20" height="20">
      </button>
    </div>
  </div>
</header>

<!-- Mobile Drawer Navigation -->
<nav id="lz-mobile-drawer" class="lz-mobile-drawer" aria-label="Mobile Navigation">
  <div style="padding-bottom:12px;margin-bottom:10px;border-bottom:1px solid #EEF0F4;display:flex;align-items:center;justify-content:space-between">
    <a href="/" class="lz-logo">
      <img src="/assets/images/learniz-logo-horizontal.png" alt="Learniz - Outcomes you can see." style="height:32px;width:auto;display:block">
    </a>
    <span style="font-size:11.5px;font-weight:600;letter-spacing:.06em;color:hsl(217 91% 45%);background:#EEF4FF;padding:4px 8px;border-radius:6px">MENU</span>
  </div>

  <a href="/platform" style="display:flex;align-items:center;justify-content:space-between;padding:12px 6px;border-bottom:1px solid #EEF0F4;color:#0B1324;font-weight:600;font-size:16px;min-height:44px;text-decoration:none">
    <span>Platform Overview</span>
    <img src="/assets/icons/chevron-right.svg" alt="" width="16" height="16" style="opacity:.4">
  </a>
  
  <!-- Features Section -->
  <div style="padding:14px 6px 10px;border-bottom:1px solid #EEF0F4">
    <div style="font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6B7485;margin-bottom:8px">Features</div>
    <div style="display:grid;gap:4px">
      <a href="/features/interactive-animations" style="display:flex;align-items:center;gap:12px;padding:9px 8px;border-radius:8px;color:#0B1324;font-weight:500;font-size:15px;min-height:44px;text-decoration:none;transition:background .15s" onmouseover="this.style.background='#F6F8FB'" onmouseout="this.style.background='transparent'">
        <span aria-hidden="true" style="width:30px;height:30px;flex:none;border-radius:8px;background:#EEF4FF;color:hsl(217 91% 50%);display:grid;place-items:center">
          <img src="/assets/icons/atom.svg" alt="" width="16" height="16">
        </span>
        <span>
          <span style="display:block;font-weight:600;font-size:14.5px">Interactive Animations</span>
          <span style="display:block;font-size:12px;color:#6B7485">Learning by Doing with live simulations</span>
        </span>
      </a>

      <a href="/features/intelliq" style="display:flex;align-items:center;gap:12px;padding:9px 8px;border-radius:8px;color:#0B1324;font-weight:500;font-size:15px;min-height:44px;text-decoration:none;transition:background .15s" onmouseover="this.style.background='#F6F8FB'" onmouseout="this.style.background='transparent'">
        <span aria-hidden="true" style="width:30px;height:30px;flex:none;border-radius:8px;background:#F3EFFF;color:hsl(258 90% 58%);display:grid;place-items:center">
          <img src="/assets/icons/sparkles.svg" alt="" width="16" height="16">
        </span>
        <span>
          <span style="display:block;font-weight:600;font-size:14.5px">Question Generator</span>
          <span style="display:block;font-size:12px;color:#6B7485">Assessment in Seconds: 10 Qs in 10s</span>
        </span>
      </a>

      <a href="/features/lms-exam-builder" style="display:flex;align-items:center;gap:12px;padding:9px 8px;border-radius:8px;color:#0B1324;font-weight:500;font-size:15px;min-height:44px;text-decoration:none;transition:background .15s" onmouseover="this.style.background='#F6F8FB'" onmouseout="this.style.background='transparent'">
        <span aria-hidden="true" style="width:30px;height:30px;flex:none;border-radius:8px;background:#FFF1E8;color:hsl(25 95% 48%);display:grid;place-items:center">
          <img src="/assets/icons/layers.svg" alt="" width="16" height="16">
        </span>
        <span>
          <span style="display:block;font-weight:600;font-size:14.5px">LMS &amp; Exam Builder</span>
          <span style="display:block;font-size:12px;color:#6B7485">Formative Assessment, Built In</span>
        </span>
      </a>

      <a href="/features/analytics" style="display:flex;align-items:center;gap:12px;padding:9px 8px;border-radius:8px;color:#0B1324;font-weight:500;font-size:15px;min-height:44px;text-decoration:none;transition:background .15s" onmouseover="this.style.background='#F6F8FB'" onmouseout="this.style.background='transparent'">
        <span aria-hidden="true" style="width:30px;height:30px;flex:none;border-radius:8px;background:#E8F7EE;color:#15803D;display:grid;place-items:center">
          <img src="/assets/icons/chart-column.svg" alt="" width="16" height="16">
        </span>
        <span>
          <span style="display:block;font-weight:600;font-size:14.5px">Academic Analytics</span>
          <span style="display:block;font-size:12px;color:#6B7485">Early Gap Detection weeks before results</span>
        </span>
      </a>
    </div>
  </div>

  <!-- Solutions Section -->
  <div style="padding:14px 6px 10px;border-bottom:1px solid #EEF0F4">
    <div style="font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6B7485;margin-bottom:8px">Solutions</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:6px">
      <a href="/for-institutions" style="display:block;padding:10px 12px;background:#F6F8FB;border-radius:8px;color:#0B1324;font-weight:600;font-size:14px;min-height:44px;text-decoration:none">
        For Institutions
      </a>
      <a href="/for-teachers" style="display:block;padding:10px 12px;background:#F6F8FB;border-radius:8px;color:#0B1324;font-weight:600;font-size:14px;min-height:44px;text-decoration:none">
        For Teachers
      </a>
      <a href="/for-students" style="display:block;padding:10px 12px;background:#F6F8FB;border-radius:8px;color:#0B1324;font-weight:600;font-size:14px;min-height:44px;text-decoration:none">
        For Students
      </a>
      <a href="/for-parents" style="display:block;padding:10px 12px;background:#F6F8FB;border-radius:8px;color:#0B1324;font-weight:600;font-size:14px;min-height:44px;text-decoration:none">
        For Parents
      </a>
    </div>
  </div>

  <!-- Direct Links -->
  <div style="padding:6px 0;border-bottom:1px solid #EEF0F4">
    <a href="/see-it-live" style="display:flex;align-items:center;justify-content:space-between;padding:12px 6px;color:#0B1324;font-weight:600;font-size:15px;min-height:44px;text-decoration:none">
      <span>See It Live (Interactive Demos)</span>
      <img src="/assets/icons/chevron-right.svg" alt="" width="16" height="16" style="opacity:.4">
    </a>
    <a href="/founding-schools" style="display:flex;align-items:center;justify-content:space-between;padding:12px 6px;color:#0B1324;font-weight:600;font-size:15px;min-height:44px;text-decoration:none">
      <span>Founding Schools Programme</span>
      <span style="font-size:11px;padding:2px 7px;border-radius:6px;background:hsl(25 95% 63%);color:#fff;font-weight:700">10 SPOTS</span>
    </a>
  </div>
  
  <!-- Resources Links Grid -->
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;padding:10px 0;border-bottom:1px solid #EEF0F4">
    <a href="/blog" style="display:block;padding:8px 6px;color:#3F4A5C;font-weight:500;font-size:14.5px;text-decoration:none">Blog</a>
    <a href="/faq" style="display:block;padding:8px 6px;color:#3F4A5C;font-weight:500;font-size:14.5px;text-decoration:none">FAQ</a>
    <a href="/about" style="display:block;padding:8px 6px;color:#3F4A5C;font-weight:500;font-size:14.5px;text-decoration:none">About Us</a>
  </div>

  <!-- Bottom CTA Actions -->
  <div style="display:grid;gap:10px;margin-top:20px">
    <a href="https://app.learniz.in/login" target="_blank" rel="noopener noreferrer" style="height:48px;border-radius:11px;border:0;background:hsl(217 91% 60%);color:#fff;font-weight:600;font-size:15.5px;display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;box-shadow:0 4px 12px rgba(11,19,36,0.15)">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      Login to Learniz
    </a>
    <button type="button" data-open-demo style="height:48px;border-radius:11px;border:1px solid #D9DEE7;background:#fff;color:#0B1324;font-weight:600;font-size:15px;cursor:pointer">Book a free demo</button>
    <a href="${waHref}" target="_blank" rel="noopener" style="height:48px;border-radius:11px;border:1px solid #D9DEE7;background:#fff;color:#0B1324;font-weight:600;font-size:15px;display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none">
      <img src="/assets/icons/message-circle.svg" alt="" width="18" height="18">Talk to Us on WhatsApp
    </a>
    <div style="text-align:center;font-size:12.5px;color:#6B7485;margin-top:6px">
      <a href="tel:+919032181083" style="color:#4B5567;font-weight:500">+91-9032181083</a> · <a href="mailto:info@learniz.in" style="color:#4B5567;font-weight:500">info@learniz.in</a>
    </div>
  </div>
</nav>
`;
}

/**
 * Interactive Demo Booking Modal Component
 * Matches Claude Design SiteHeader.dc.html modal behavior
 */

export function renderBookingModal() {
  const waHref = "https://wa.me/919032181083?text=" + encodeURIComponent("Hi, I'd like to book a free Learniz demo for my school.");

  return `
<!-- Demo Booking Modal -->
<div id="lz-demo-modal" role="presentation" class="lz-modal-backdrop">
  <div role="dialog" aria-modal="true" aria-labelledby="lz-demo-title" class="lz-modal-dialog">
    <button type="button" id="lz-modal-close" aria-label="Close demo booking modal" class="lz-modal-close-btn">
      <img src="/assets/icons/x.svg" alt="" width="18" height="18">
    </button>

    <!-- Form View -->
    <div id="lz-demo-form-view" class="lz-modal-form-view" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))">
      <!-- Info & Demo Details -->
      <div class="lz-modal-info-col" style="padding:32px 28px;background:#F6F8FB;border-radius:20px 0 0 20px;display:flex;flex-direction:column;gap:18px">
        <div>
          <img src="/assets/images/learniz-logo-horizontal.png" alt="Learniz - Outcomes you can see." style="height:30px;width:auto;display:block;margin-bottom:12px">
          <div style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.12em;color:hsl(217 91% 45%);font-weight:600">
            BOOK A FREE DEMO
          </div>
        </div>
        <h2 id="lz-demo-title" style="margin:0;font-family:Figtree,Inter,sans-serif;font-size:clamp(20px,2.4vw,24px);line-height:1.2;letter-spacing:-.02em;font-weight:700">
          Help Students Observe, Understand &amp; Think Beyond the Textbook.
        </h2>
        <p style="margin:0;color:#4B5567;font-size:13.5px;line-height:1.5">
          A 20-minute tailored walkthrough on video call: live simulations, instant assessment generation, and early gap detection mapped to your school's syllabus.
        </p>

        <!-- What to Expect -->
        <div style="background:#fff;border:1px solid #E5E8EF;border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:10px">
          <div style="font-size:11px;font-weight:700;color:hsl(217 91% 45%);text-transform:uppercase;letter-spacing:.06em">During Your 20-Minute Demo:</div>
          <div style="display:flex;gap:10px;align-items:flex-start;font-size:12.5px;color:#1F2A3D">
            <span style="width:18px;height:18px;border-radius:50%;background:#EEF4FF;color:hsl(217 91% 50%);display:grid;place-items:center;font-size:10.5px;font-weight:700;flex:none">1</span>
            <span>Live classroom simulations on your exact Class 6–12 syllabus</span>
          </div>
          <div style="display:flex;gap:10px;align-items:flex-start;font-size:12.5px;color:#1F2A3D">
            <span style="width:18px;height:18px;border-radius:50%;background:#F3EFFF;color:hsl(258 90% 58%);display:grid;place-items:center;font-size:10.5px;font-weight:700;flex:none">2</span>
            <span>Assess in Seconds: Bloom's-tagged questions in 10 seconds</span>
          </div>
          <div style="display:flex;gap:10px;align-items:flex-start;font-size:12.5px;color:#1F2A3D">
            <span style="width:18px;height:18px;border-radius:50%;background:#E8F7EE;color:#15803D;display:grid;place-items:center;font-size:10.5px;font-weight:700;flex:none">3</span>
            <span>Diagnostic gap analytics &amp; 14-day zero-risk classroom pilot</span>
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:8px;font-size:12.5px;color:#4B5567">
          <img src="/assets/icons/message-circle.svg" alt="" width="15" height="15">
          Prefer chat? <a href="${waHref}" target="_blank" rel="noopener" style="font-weight:600">Talk to Us on WhatsApp</a>
        </div>
      </div>

      <!-- Lead Capture Form -->
      <form id="lz-demo-form" novalidate class="lz-modal-form-col" style="padding:32px 28px;display:grid;gap:14px;align-content:start">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:12px">
          <label class="lz-label">
            <span>Full name <span style="color:hsl(25 95% 50%)">*</span></span>
            <input type="text" name="name" autocomplete="name" required placeholder="Your name" class="lz-input">
            <span id="err-name" class="lz-field-error" role="alert"></span>
          </label>
          <label class="lz-label">
            <span>School / institution <span style="color:hsl(25 95% 50%)">*</span></span>
            <input type="text" name="school" autocomplete="organization" required placeholder="School name" class="lz-input">
            <span id="err-school" class="lz-field-error" role="alert"></span>
          </label>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:12px">
          <label class="lz-label">
            <span>City <span style="color:hsl(25 95% 50%)">*</span></span>
            <input type="text" name="city" autocomplete="address-level2" required placeholder="e.g. Hyderabad" class="lz-input">
            <span id="err-city" class="lz-field-error" role="alert"></span>
          </label>
          <label class="lz-label">
            <span>Your role <span style="color:hsl(25 95% 50%)">*</span></span>
            <select name="role" required class="lz-select">
              <option value="">Select role</option>
              <option value="Principal / Director">Principal / Director</option>
              <option value="School owner / Trustee">School owner / Trustee</option>
              <option value="Academic coordinator">Academic coordinator</option>
              <option value="Teacher">Teacher</option>
              <option value="Other">Other</option>
            </select>
            <span id="err-role" class="lz-field-error" role="alert"></span>
          </label>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:12px">
          <label class="lz-label">
            <span>Phone (WhatsApp) <span style="color:hsl(25 95% 50%)">*</span></span>
            <input type="tel" name="phone" inputmode="tel" autocomplete="tel" required placeholder="+91 98765 43210" class="lz-input">
            <span id="err-phone" class="lz-field-error" role="alert"></span>
          </label>
          <label class="lz-label">
            <span>Email <span style="color:#98A1B2;font-weight:500">(optional)</span></span>
            <input type="email" name="email" autocomplete="email" placeholder="you@school.edu.in" class="lz-input">
          </label>
        </div>

        <label class="lz-label">
          <span>Anything we should prepare? <span style="color:#98A1B2;font-weight:500">(optional)</span></span>
          <textarea name="message" rows="2" placeholder="Classes, subjects, number of students, current tools…" class="lz-textarea"></textarea>
        </label>

        <button type="submit" class="lz-btn-primary" style="width:100%;height:48px;font-size:15.5px">
          Book a free demo
        </button>

        <p style="margin:0;font-size:12px;color:#6B7485;line-height:1.5">
          We use your details only to arrange the demo. See our <a href="/privacy">Privacy Policy</a>.
        </p>
      </form>
    </div>

    <!-- Success View -->
    <div id="lz-demo-success" style="display:none;padding:56px 28px 48px;text-align:center;max-width:520px;margin:0 auto;gap:14px;justify-items:center">
      <span aria-hidden="true" style="width:56px;height:56px;border-radius:50%;background:#E8F7EE;color:#15803D;display:grid;place-items:center">
        <img src="/assets/icons/check.svg" alt="" width="26" height="26">
      </span>
      <h2 style="margin:0;font-family:Figtree,Inter,sans-serif;font-size:26px;letter-spacing:-.02em;font-weight:700">
        Demo request received, <span id="lz-success-name">there</span>.
      </h2>
      <p style="margin:0;color:#4B5567;font-size:15px;line-height:1.55">
        We will confirm your 20-minute demo slot on WhatsApp at <strong id="lz-success-phone" style="color:#0B1324">+91-9032181083</strong> within one working day.
      </p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:12px">
        <a href="/see-it-live" class="lz-btn-dark lz-btn-sm" style="height:44px;padding:0 18px">Meanwhile, see it live</a>
        <button type="button" id="lz-success-close" class="lz-btn-outline lz-btn-sm" style="height:44px;padding:0 18px">Close</button>
      </div>
    </div>
  </div>
</div>
`;
}

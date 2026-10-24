/**
 * Demo booking modal (DS .dialog) + shared lead form fields.
 * Opened from any [data-open-demo] element or window.learnizBookDemo().
 */
import { icon } from './icons.js';
import { WA_HREF } from './Header.js';

const ROLES = ['Principal / Director', 'School owner / Trustee', 'Academic coordinator', 'Teacher', 'Parent', 'Other'];

/**
 * Lead form fields. opts: { compact (5 fields), roles, messageLabel, placeholderMsg }
 */
export function renderLeadFields(opts = {}) {
  const roles = opts.roles || ROLES.filter(r => r !== 'Parent');
  const optional = '<span class="muted">(optional)</span>';
  return `
    <div class="form-2">
      <label class="field"><span>Full name <span class="req" aria-hidden="true">*</span></span><input class="input" type="text" name="name" autocomplete="name" required placeholder="Your name"><span class="field-error" role="alert"></span></label>
      <label class="field"><span>School / institution <span class="req" aria-hidden="true">*</span></span><input class="input" type="text" name="school" autocomplete="organization" required placeholder="School name"><span class="field-error" role="alert"></span></label>
    </div>
    <div class="form-2">
      <label class="field"><span>City <span class="req" aria-hidden="true">*</span></span><input class="input" type="text" name="city" autocomplete="address-level2" required placeholder="e.g. Hyderabad"><span class="field-error" role="alert"></span></label>
      <label class="field"><span>Your role <span class="req" aria-hidden="true">*</span></span><select class="input" name="role" required><option value="">Select role</option>${roles.map(r => `<option value="${r}">${r}</option>`).join('')}</select><span class="field-error" role="alert"></span></label>
    </div>
    <div class="form-2">
      <label class="field"><span>Phone (WhatsApp) <span class="req" aria-hidden="true">*</span></span><input class="input" type="tel" name="phone" inputmode="tel" autocomplete="tel" required placeholder="+91 98765 43210"><span class="field-error" role="alert"></span></label>
      ${opts.compact ? '' : `<label class="field"><span>Email ${optional}</span><input class="input" type="email" name="email" autocomplete="email" placeholder="you@school.edu.in"><span class="field-error" role="alert"></span></label>`}
    </div>
    ${opts.compact ? '' : `<label class="field"><span>${opts.messageLabel || 'Anything we should prepare?'} ${optional}</span><textarea class="input" name="message" rows="3" placeholder="${opts.placeholderMsg || 'Classes, subjects, number of students, current tools…'}"></textarea></label>`}
    <p class="field-error" data-form-error role="alert"></p>`;
}

export function renderLeadSuccess({ forId, heading = 'Demo request received,', cta = true } = {}) {
  return `
  <div class="form-success" ${forId ? `data-success-for="${forId}"` : ''}>
    <span class="mark">${icon('check', 22)}</span>
    <h3 class="h3">${heading} <span data-success-name>there</span>.</h3>
    <p class="lede" style="margin-top:0">We will confirm your 20-minute slot on WhatsApp at <strong data-success-phone></strong> within one working day.</p>
    ${cta ? `<div class="actions" style="margin-top:8px"><a href="/see-it-live" class="btn btn-primary">Meanwhile, see it live</a><a href="${WA_HREF}" target="_blank" rel="noopener" class="btn btn-ghost">Message us on WhatsApp</a></div>` : ''}
  </div>`;
}

export function renderBookingModal() {
  return `
<div id="lz-demo-modal" class="dialog-backdrop" data-open="false" aria-hidden="true" inert>
  <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="lz-demo-title">
    <button type="button" class="tog dialog-close" data-close-demo aria-label="Close">${icon('x', 16)}</button>
    <div class="dialog-info">
      <span class="kicker">Book a free demo</span>
      <h2 id="lz-demo-title" class="h3-lg">Twenty minutes. Your subjects, your classes.</h2>
      <p class="lede" style="margin-top:0;font-size:15px">A tailored walkthrough on video call: live simulations, a question set generated in front of you, and Early Gap Detection mapped to your school's syllabus.</p>
      <div class="rows" style="font-size:13px">
        <div class="row" style="padding:14px 16px"><span class="row-n">01</span><div class="row-t" style="font-size:14px">Live classroom simulations on your Class 6 to 12 syllabus</div></div>
        <div class="row" style="padding:14px 16px"><span class="row-n">02</span><div class="row-t" style="font-size:14px">Ten questions with answer keys, generated in about ten seconds</div></div>
        <div class="row" style="padding:14px 16px"><span class="row-n">03</span><div class="row-t" style="font-size:14px">Class-wise and concept-wise analytics, and how a pilot works</div></div>
      </div>
      <p class="fine">Prefer chat? <a href="${WA_HREF}" target="_blank" rel="noopener">Talk to us on WhatsApp</a></p>
    </div>
    <div class="dialog-form">
      <form id="lz-demo-form" class="form" data-lead="modal" novalidate>
        ${renderLeadFields()}
        <button type="submit" class="btn btn-primary btn-lg btn-block">Book a free demo${icon('arrowRight', 15)}</button>
        <p class="fine">We use your details only to arrange the demo. See our <a href="/privacy">Privacy Policy</a>.</p>
      </form>
    </div>
    <div class="dialog-success">
      ${renderLeadSuccess({ forId: 'lz-demo-form' }).replace('class="form-success"', 'class="form-success" data-show="true"')}
    </div>
  </div>
</div>
`;
}

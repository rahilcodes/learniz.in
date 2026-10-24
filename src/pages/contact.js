/**
 * Contact — /contact
 */
import { page, hero, head, rows, icon, WA_HREF } from '../components/layout.js';
import { renderLeadFields, renderLeadSuccess } from '../components/BookingModal.js';

export function renderContactPage() {
  const body = `
${hero({
    tags: [['Contact & headquarters', 'tag-accent'], ['Hyderabad, Telangana', 'tag-neutral']],
    h1: 'Speak directly', h1b: 'with the Learniz team.',
    lede: 'Whether you are exploring a pilot for your school, scheduling teacher training or discussing curriculum mapping, our Hyderabad team is here to help.',
    actions: `<a href="${WA_HREF}" target="_blank" rel="noopener" class="btn btn-primary btn-lg">${icon('whatsappLogo', 16)}Start a WhatsApp conversation</a><a href="#inquiry" class="btn btn-ghost btn-lg">Send an inquiry</a>`
  })}

<section class="section-bottom" id="inquiry" aria-labelledby="ch-h">
  <div class="container two-col two-col-start">
    <div class="head">
      ${head({ kicker: 'Office & direct channels', h2: 'Four ways to reach us.' }).replace('class="h2 rv"', 'class="h2 rv" id="ch-h"')}
      <div class="rv" style="--d:.16s;margin-top:32px;width:100%">${rows([
        { n: icon('mapPin', 16), t: 'Registered headquarters', b: 'Tattvatech Edu Solutions LLP · Hyderabad, Telangana, India' },
        { n: icon('phone', 16), t: '<a href="tel:+919032181083">+91-9032181083</a>', b: 'Telephone and WhatsApp · Monday to Saturday, 9:00 AM to 6:30 PM IST' },
        { n: icon('envelopeSimple', 16), t: '<a href="mailto:info@learniz.in">info@learniz.in</a>', b: 'Institutional queries · typical response within four business hours' },
        { n: icon('whatsappLogo', 16), t: '<a href="' + WA_HREF + '" target="_blank" rel="noopener">Instant WhatsApp chat</a>', b: 'Need a quick response? Start a conversation and an academic advisor replies on WhatsApp.' }
      ])}</div>
    </div>
    <div class="rv form-panel" style="--d:.12s">
      <h3 class="h3">Send an inquiry</h3>
      <p class="lede">Fill in the form and an academic advisor will follow up promptly.</p>
      <form id="lz-contact-page-form" class="form" data-lead="contact" novalidate>
        ${renderLeadFields({ roles: ['Principal / Director', 'School owner / Trustee', 'Academic coordinator', 'Teacher', 'Parent', 'Other'], messageLabel: 'Message / how can we help?', placeholderMsg: 'Pilot, teacher training, curriculum mapping…' })}
        <button type="submit" class="btn btn-primary btn-lg btn-block">Send inquiry${icon('paperPlaneTilt', 15)}</button>
        <p class="fine">We respect your privacy. Details are used only to respond to your inquiry. See our <a href="/privacy">Privacy Policy</a>.</p>
      </form>
      ${renderLeadSuccess({ forId: 'lz-contact-page-form', heading: 'Inquiry received,' })}
    </div>
  </div>
</section>
`;

  return page({
    head: {
      title: 'Contact Learniz | Hyderabad, Telangana',
      description: 'Get in touch with the Learniz team in Hyderabad. Reach us via phone at +91-9032181083, email info@learniz.in or WhatsApp for school demos.',
      path: '/contact'
    },
    body,
    activePath: '/contact'
  });
}

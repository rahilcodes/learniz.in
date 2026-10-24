/**
 * Book a demo — /book-demo
 */
import { page, hero, head, rows, icon, WA_HREF } from '../components/layout.js';
import { renderLeadFields, renderLeadSuccess } from '../components/BookingModal.js';

const COVER = [
  { t: 'Live classroom experiments', b: 'How teachers project and test simulations live on existing smart boards.' },
  { t: 'Assessment in Seconds', b: 'Draft ten syllabus-aligned questions in about ten seconds for your current chapter.' },
  { t: 'Formative Assessment, Built In', b: 'Schedule quick formative checks with negative marking and sectional timers.' },
  { t: 'Early Gap Detection', b: 'Question-level accuracy heatmaps that show concept gaps weeks before exam results.' },
  { t: 'Founding Schools pilot', b: 'How your school can qualify for a 100% free 30-day pilot.' }
];

export function renderBookDemoPage() {
  const body = `
${hero({
    tags: [['Free 20-minute demo', 'tag-accent'], ['Video call or at your school in Hyderabad', 'tag-neutral']],
    h1: 'Concept Clarity in every class.', h1b: 'Outcomes you can see.',
    lede: 'A 20-minute live demonstration on video call or at your school in Hyderabad. We load your specific boards, subjects and grade levels. No preparation needed.',
    actions: `<a href="#demo-form" class="btn btn-primary btn-lg">Book a free demo${icon('arrowRight', 15)}</a><a href="${WA_HREF}" target="_blank" rel="noopener" class="btn btn-ghost btn-lg">Prefer WhatsApp? Click to chat</a>`
  })}

<section class="section-bottom" id="demo-form" aria-labelledby="cover-h">
  <div class="container two-col two-col-start">
    <div class="head">
      ${head({ kicker: '20-minute live demonstration', h2: 'What we cover during your session.' }).replace('class="h2 rv"', 'class="h2 rv" id="cover-h"')}
      <div class="rv" style="--d:.16s;margin-top:32px;width:100%">${rows(COVER)}</div>
      <p class="note rv" style="--d:.24s"><strong>Fast coordination.</strong> Academic coordinators confirm your session within two hours. Video link and calendar invite dispatched instantly.</p>
    </div>
    <div class="rv form-panel" style="--d:.12s">
      <h3 class="h3">Book a free demo</h3>
      <p class="lede">Fill in your details and an academic onboarding coordinator will confirm your session time.</p>
      <form id="lz-book-demo-page-form" class="form" data-lead="book-demo" novalidate>
        ${renderLeadFields({ messageLabel: 'Specific subjects or classes to focus on?', placeholderMsg: 'Classes, subjects, number of students, current tools…' })}
        <button type="submit" class="btn btn-primary btn-lg btn-block">Book a free demo${icon('arrowRight', 15)}</button>
        <p class="fine">We respect your privacy. Details are used only to coordinate the demo. See our <a href="/privacy">Privacy Policy</a>.</p>
      </form>
      ${renderLeadSuccess({ forId: 'lz-book-demo-page-form' })}
    </div>
  </div>
</section>
`;

  return page({
    head: {
      title: 'Concept Clarity in Every Class: Book a Free Demo | Learniz',
      description: 'Schedule a free 20-minute live demonstration of Learniz. Explore interactive experiments, Assessment in Seconds, and Early Gap Detection for your school.',
      path: '/book-demo'
    },
    body,
    activePath: '/book-demo'
  });
}

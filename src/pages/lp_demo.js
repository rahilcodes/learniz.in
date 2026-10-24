/**
 * Campaign landing page — /lp/demo (no site nav, noindex via robots)
 */
import { page, rows, icon, WA_HREF } from '../components/layout.js';
import { renderLeadFields, renderLeadSuccess } from '../components/BookingModal.js';

export function renderLpDemoPage() {
  const body = `
<header class="hero hero-simple" style="padding-bottom:0">
  <div class="container two-col two-col-start" style="align-items:start">
    <div class="hero-copy">
      <span class="kicker rv">Learniz · 20-minute live demo</span>
      <h1 class="h1 rv" style="--d:.08s;margin-top:22px"><span>Concept Clarity in every class.</span><span class="accent">Outcomes you can see.</span></h1>
      <p class="lede lede-lg rv" style="--d:.16s">A personalised 20-minute live demonstration tailored to your school's classes, subjects and examination boards.</p>
      <div class="rv" style="--d:.2s;margin-top:32px;width:100%">${rows([
        { t: 'Live interactive experiments', b: 'On the classroom displays you already have.' },
        { t: 'Assessment in Seconds', b: 'Ten questions with answer keys, drafted in about ten seconds.' },
        { t: 'Early Gap Detection', b: 'Question-level accuracy heatmaps, weeks before results.' }
      ])}</div>
      <p class="fine rv" style="--d:.28s;margin-top:28px">Prefer instant chat? <a href="${WA_HREF}" target="_blank" rel="noopener">Talk to us on WhatsApp${icon('arrowRight', 12)}</a></p>
    </div>
    <div class="rv form-panel" style="--d:.12s">
      <h2 class="h3">Book a free demo</h2>
      <p class="lede">Enter your details and an academic coordinator will confirm your session time.</p>
      <form id="lz-lp-demo-form" class="form" data-lead="lp-demo" novalidate>
        ${renderLeadFields({ compact: true })}
        <button type="submit" class="btn btn-primary btn-lg btn-block">Book a free demo${icon('arrowRight', 15)}</button>
        <p class="fine">We use your details only to arrange the demo. See our <a href="/privacy">Privacy Policy</a>.</p>
      </form>
      ${renderLeadSuccess({ forId: 'lz-lp-demo-form', cta: false })}
    </div>
  </div>
</header>
<div class="section-bottom"></div>
`;
  return page({
    head: { title: 'Concept Clarity in Every Class: Book a Free Demo | Learniz', description: 'Schedule your free 20-minute school demonstration of Learniz. Explore interactive experiments, Assessment in Seconds, and Early Gap Detection.', path: '/lp/demo' },
    body, kind: 'lp'
  });
}

/**
 * Page layout + the section vocabulary shared by every page.
 * All markup here uses only classes from site.css (tokens from tokens.css).
 */
import { renderHead } from './SEOHead.js';
import { renderHeader, renderLpHeader, WA_HREF } from './Header.js';
import { renderFooter, renderLpFooter } from './Footer.js';
import { renderBookingModal } from './BookingModal.js';
import { icon } from './icons.js';

export { icon, WA_HREF };

/** Full page shell. kind: 'site' (default) | 'lp' (campaign: minimal header, legal footer). */
export function page({ head, body, activePath = '', kind = 'site', bodyClass = '' }) {
  const header = kind === 'lp' ? renderLpHeader() : renderHeader(activePath);
  const footer = kind === 'lp' ? renderLpFooter() : renderFooter();
  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
${renderHead(head)}
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ''}>
${header}
<main id="main">
${body}
</main>
${footer}
${renderBookingModal()}
<script src="/assets/js/site.js" defer></script>
</body>
</html>`;
}

/* ------------------------------------------------------------------ atoms */

export const arrow = (s = 15) => icon('arrowRight', s);

/** Kicker + H2 (+ lede). Staggered reveal classes included. */
export function head({ kicker, h2, lede, note, small = false, wide = false, maxCh }) {
  const h2Style = maxCh ? ` style="max-width:${maxCh}ch"` : '';
  return `
      <span class="kicker rv">${kicker}</span>
      <h2 class="${small ? 'h2-sm' : 'h2'} rv" style="--d:.08s${maxCh ? `;max-width:${maxCh}ch` : ''}">${h2}</h2>
      ${lede ? `<p class="lede${wide ? ' lede-lg' : ''} rv" style="--d:.16s${wide ? ';max-width:var(--measure-wide)' : ''}">${lede}</p>` : ''}
      ${note ? `<p class="note rv" style="--d:.2s">${note}</p>` : ''}`;
}

/** Lighter page hero on the homepage hero's type scale. */
export function hero({ tags = [], h1, h1b, lede, actions, fine, meta, art, tilt = false }) {
  const copy = `
    <div class="hero-copy">
      ${tags.length ? `<div class="hero-tags rv">${tags.map(([t, k]) => `<span class="tag ${k || 'tag-neutral'}">${t}</span>`).join('')}</div>` : ''}
      <h1 class="h1 rv" style="--d:.08s"><span>${h1}</span>${h1b ? `<span class="accent">${h1b}</span>` : ''}</h1>
      ${lede ? `<p class="lede lede-lg rv" style="--d:.16s">${lede}</p>` : ''}
      ${actions !== null ? `<div class="actions actions-lg rv" style="--d:.24s">${actions || demoActions()}</div>` : ''}
      ${meta ? `<div class="hero-simple-meta rv" style="--d:.28s">${meta}</div>` : ''}
      ${fine ? `<p class="fine rv" style="--d:.32s">${fine}</p>` : ''}
    </div>`;
  if (!art) {
    return `
<header class="hero hero-simple">
  <div class="container">${copy}</div>
</header>`;
  }
  return `
<header class="hero"${tilt ? ' data-tilt-area' : ''}>
  <div class="container hero-grid">
    ${copy}
    <div class="hero-art rv" style="--d:.2s"${tilt ? ' data-tilt' : ''}>${art}</div>
  </div>
</header>`;
}

export function demoActions({ secondary = '<a href="/see-it-live" class="btn btn-ghost btn-lg">See it live</a>', large = true } = {}) {
  return `<button type="button" class="btn btn-primary${large ? ' btn-lg' : ''}" data-open-demo>Book a free demo${arrow()}</button>${secondary || ''}`;
}

/** Numbered rows card. items: [{t, b, n?, href?}] */
export function rows(items, { start = 1, link = false, cls = '' } = {}) {
  const tag = link ? 'a' : 'div';
  return `<div class="rows${link ? ' rows-link' : ''}${cls ? ' ' + cls : ''}">${items.map((it, i) => `<${tag} class="row"${it.href ? ` href="${it.href}"` : ''}><span class="row-n">${it.n || String(start + i).padStart(2, '0')}</span><div><div class="row-t">${it.t}</div>${it.b ? `<div class="row-b">${it.b}</div>` : ''}</div></${tag}>`).join('')}</div>`;
}

/** Grid of rows (2–4 up). items: [{t, b, n?}] */
export function rowsGrid(items, cols = 3) {
  return `<div class="rows-grid cols-${cols} rv" style="--d:.2s">${items.map((it, i) => `<div class="row"><span class="row-n">${it.n || String(i + 1).padStart(2, '0')}</span><div><div class="row-t">${it.t}</div>${it.b ? `<div class="row-b">${it.b}</div>` : ''}</div></div>`).join('')}</div>`;
}

/** Labelled placeholder for a missing asset. ar like "16 / 9". */
export function placeholder(label, ar = '16 / 9', { lg = true, caption } = {}) {
  const fig = `<div class="ph${lg ? ' lg' : ''}" style="--ar:${ar}" role="img" aria-label="Placeholder: ${label}"><span>${label}</span></div>`;
  return caption ? `<figure class="ph-figure">${fig}<figcaption>${caption}</figcaption></figure>` : fig;
}

/** Product screenshot / poster figure. If `light` is given, it swaps with the theme. */
export function shot({ src, light, alt, w, h, caption, cls = '' }) {
  const img = (s, c) => `<img class="${c}" src="${s}" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async">`;
  const inner = light ? img(src, 'shot-dark') + img(light, 'shot-light') : img(src, '');
  const fig = `<div class="shot${cls ? ' ' + cls : ''}">${inner}</div>`;
  return caption ? `<figure class="ph-figure">${fig}<figcaption>${caption}</figcaption></figure>` : fig;
}

/** FAQ accordion. items: [[q, a, cat?]] */
export function faq(items, { openFirst = true, id = 'faq' } = {}) {
  return `<div class="faq" data-faq>${items.map(([q, a, cat], i) => `
      <div class="faq-item" data-open="${openFirst && i === 0 ? 'true' : 'false'}"${cat ? ` data-cat="${cat}"` : ''}>
        <h3 style="margin:0;font-size:inherit;line-height:inherit;letter-spacing:0"><button type="button" class="faq-q" aria-expanded="${openFirst && i === 0 ? 'true' : 'false'}" aria-controls="${id}-${i}" id="${id}-q${i}"><span>${q}</span>${icon('plus', 18)}</button></h3>
        <div class="faq-a" id="${id}-${i}" role="region" aria-labelledby="${id}-q${i}"><div><p>${a}</p></div></div>
      </div>`).join('')}</div>`;
}

/** FAQ section (kicker/H2 left, accordion right). */
export function faqSection({ kicker = 'Questions principals ask', h2 = 'Monday-morning questions, answered plainly.', items, id = 'faq', pad = 'section' }) {
  return `
<section class="${pad}" aria-labelledby="${id}-h">
  <div class="container two-col two-col-narrow two-col-start">
    <div class="rv"><span class="kicker">${kicker}</span><h2 class="h2-sm" id="${id}-h">${h2}</h2></div>
    <div class="rv" style="--d:.1s">${faq(items, { id })}</div>
  </div>
</section>`;
}

/** Closing CTA row (the Founding Schools layout, without the rows). */
export function cta({ kicker = 'Next step', h2 = 'Concept Clarity in every class. Outcomes you can see.', lede = 'A 20-minute walkthrough on video call, with your subjects and your classes. No login needed to try the demos.', fine = '20 minutes. Your subjects, your classes.', secondary = `<a href="${WA_HREF}" target="_blank" rel="noopener" class="btn btn-ghost btn-lg">Talk on WhatsApp</a>`, aside = '' } = {}) {
  return `
<section class="section section-line" aria-labelledby="cta-h">
  <div class="container two-col two-col-mirror" style="align-items:center">
    <div class="head">
      <span class="kicker rv">${kicker}</span>
      <h2 class="h2 rv" id="cta-h" style="--d:.08s;max-width:18ch">${h2}</h2>
      <p class="lede rv" style="--d:.16s;max-width:var(--measure-wide)">${lede}</p>
      <div class="actions actions-lg rv" style="--d:.24s">${demoActions({ secondary })}</div>
      ${fine ? `<p class="fine rv" style="--d:.3s;margin-top:18px">${fine}</p>` : ''}
    </div>
    <div class="rv" style="--d:.12s">${aside || rows([
      { t: 'Founding price, locked for the year', b: 'One price for the whole school, held for twelve months.' },
      { t: 'A named onboarding lead', b: 'One person who knows your timetable and trains every teacher in the first two weeks.' },
      { t: 'A seat at the roadmap', b: 'Monthly call with the product team. What Founding Schools ask for gets built first.' }
    ])}</div>
  </div>
</section>`;
}

/** Link-tabs row to the four audience pages. */
export function audienceTabs(active) {
  const items = [['/for-institutions', 'Owners & principals'], ['/for-teachers', 'Teachers'], ['/for-students', 'Students'], ['/for-parents', 'Parents']];
  return `<nav class="tabs rv" style="--d:.12s" aria-label="Solutions by role">${items.map(([h, t]) => `<a class="tab" href="${h}"${h === active ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav>`;
}

/* ------------------------------------------------ product mock panels */

/** The analytics dashboard card from the design (hero). compact=true drops the KPI row. */
export function dashboardPanel({ compact = false, badge = true } = {}) {
  const acc = [92, 88, 76, 81, 69, 74, 58, 90, 84, 62, 71, 77, 45, 31, 66, 79, 83, 52, 28, 73, 86, 64, 70, 59, 80];
  const heat = acc.map((v, i) => `<i style="--v:${(v / 100).toFixed(2)}" title="Q${i + 1} · ${v}%"${v < 33 ? ' data-low' : ''}></i>`).join('');
  const subjects = [['Physics', 66], ['Chemistry', 69], ['Biology', 74], ['Maths', 60]].map(([n, p]) => `<div class="bar-row"><span>${n}</span><div class="bar"><b style="--w:${p}%"></b></div><span class="val">${p}%</span></div>`).join('');
  return `
      ${badge ? `<div class="badge"><span class="badge-dot"></span><span><strong>Early Concept Gap Detected</strong><span class="badge-extra"> · Q14 &amp; Q19 below 33% · Lift &amp; Equilibrium</span></span></div>` : ''}
      <div class="panel">
        <div class="panel-head"><strong>Academiz</strong><span>›</span><span>Class 9-B</span><span>›</span><span>Unit Test 2</span><span class="end hide-m">Term 1 diagnostics</span></div>
        ${compact ? '' : `<div class="kpis">
          <div class="kpi"><div class="kpi-label">Batch average</div><div class="kpi-value">68%</div><div class="kpi-delta up">+4 pts vs Unit Test 1</div></div>
          <div class="kpi"><div class="kpi-label">Completion</div><div class="kpi-value">34 / 34</div><div class="kpi-delta">All attempts in</div></div>
          <div class="kpi"><div class="kpi-label">Avg. time / question</div><div class="kpi-value">1m 42s</div><div class="kpi-delta">−12s vs 9-A</div></div>
          <div class="kpi"><div class="kpi-label">Below pass mark</div><div class="kpi-value">5</div><div class="kpi-delta up">Needs follow-up</div></div>
        </div>`}
        <div class="heat-head"><span>Question-level accuracy · Physics · 25 questions</span><span class="hide-m"><span class="only-dark">% correct · darker = lower</span><span class="only-light">% correct · lighter = lower</span></span></div>
        <div class="heat" role="img" aria-label="Question-level accuracy heatmap, 25 questions; Q14 and Q19 below 33%">${heat}</div>
        <div class="dash-foot">
          <div class="bars"><div class="bars-title">Subject average · 9-B vs 9-A</div>${subjects}</div>
          <div class="panel-note" style="padding-top:18px"><strong>Q14 and Q19</strong> (Lift and equilibrium) were answered correctly by under a third of the class. Average time on Q19 was 2× the paper mean. Suggested: one revision period before Unit Test 3.</div>
        </div>
      </div>`;
}

/** Helicopter simulation widget. full=true adds the mass slider and reset (feature + See It Live pages). */
export function simPanel({ full = false, id = 'sim' } = {}) {
  return `
      <div class="panel" data-sim id="${id}">
        <div class="panel-head"><strong>Helicopter lift · Forces in equilibrium</strong><span>Class 9 · Physics</span><span class="chip end" data-sim-status aria-live="polite">Hovering</span></div>
        <div class="sim-stage">
          <div class="sim-ground"></div><span class="sim-ground-label">Ground</span>
          <div class="sim-craft" data-sim-craft>
            <div class="sim-body"><span>helicopter render<br>(real sim asset)</span><div class="sim-rotor" data-sim-rotor></div></div>
          </div>
          <div class="sim-readouts">
            <div class="readout"><div><span class="label">Lift</span><span class="v accent" data-sim-lift>11.8 kN</span></div><div class="meter" data-sim-liftbar></div></div>
            <div class="readout"><div><span class="label">Weight</span><span class="v" data-sim-weight>11.8 kN</span></div><div class="meter neutral" data-sim-weightbar></div></div>
          </div>
        </div>
        <div class="panel-foot">
          <div class="sim-row"><label for="${id}-rpm">Rotor speed</label><span class="v" data-sim-rpm-val>400 rpm</span></div>
          <input type="range" class="range" id="${id}-rpm" min="200" max="600" step="5" value="400" data-sim-rpm aria-label="Rotor speed in rpm">
          ${full ? `<div class="sim-row" style="margin-top:6px"><label for="${id}-mass">Helicopter mass</label><span class="v" data-sim-mass-val>1,200 kg</span></div>
          <input type="range" class="range" id="${id}-mass" min="800" max="1800" step="50" value="1200" data-sim-mass aria-label="Helicopter mass in kilograms">` : ''}
          <div class="sim-hint"><span>${full ? 'Lift grows with the square of rotor speed. Find the speed at which lift balances weight.' : 'Mass 1,200 kg · Lift grows with the square of rotor speed.'}</span><span class="state" data-sim-hint>Lift balances weight.</span></div>
          ${full ? `<div><button type="button" class="btn btn-ghost btn-sm" data-sim-reset>${icon('arrowCounterClockwise', 14)}Reset to 400 rpm · 1,200 kg</button></div>` : ''}
        </div>
      </div>`;
}

/** Question generator widget (interactive). */
export function generatorPanel({ id = 'gen' } = {}) {
  const subjects = ['Biology', 'Physics', 'Chemistry', 'Mathematics'];
  return `
      <div class="panel" data-generator id="${id}">
        <div class="panel-head"><strong>Question generator</strong><span>›</span><span>New question set</span><span class="end">10 questions · ~10 s</span></div>
        <div class="panel-body" style="border-bottom:1px solid var(--color-divider)">
          <div class="form-2">
            <label class="field"><span>Subject</span><select class="input" data-gen-subject aria-label="Subject">${subjects.map(s => `<option>${s}</option>`).join('')}</select></label>
            <label class="field"><span>Topic or concept</span><input class="input" type="text" value="Photosynthesis" data-gen-topic aria-label="Topic or concept"></label>
          </div>
          <div class="form-2">
            <div class="field"><span>Difficulty</span><div class="tabs" role="group" aria-label="Difficulty" style="margin:0;padding:4px">${['Easy', 'Medium', 'Hard'].map(d => `<button type="button" class="tab btn-sm" style="min-height:36px;padding:6px 12px" data-gen-diff="${d}" aria-pressed="${d === 'Medium'}">${d}</button>`).join('')}</div></div>
            <label class="field"><span>Type</span><select class="input" data-gen-type aria-label="Question type"><option value="mcq">Multiple choice</option><option value="short">Short answer</option><option value="fill">Fill in the blanks</option></select></label>
          </div>
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
            <div class="field" style="flex-direction:row;align-items:center;gap:10px"><span>Questions</span><div style="display:inline-flex;align-items:center;border:1px solid var(--color-divider);border-radius:var(--radius-md)"><button type="button" class="btn btn-icon" style="min-height:36px;width:36px;height:36px" data-gen-dec aria-label="Fewer questions">${icon('minus', 12)}</button><span style="min-width:28px;text-align:center;font-variant-numeric:tabular-nums" data-gen-count aria-live="polite">5</span><button type="button" class="btn btn-icon" style="min-height:36px;width:36px;height:36px" data-gen-inc aria-label="More questions">${icon('plus', 12)}</button></div></div>
            <button type="button" class="btn btn-primary" data-gen-run style="margin-left:auto">${icon('sparkle', 14)}Generate questions</button>
          </div>
        </div>
        <div class="panel-body">
          <div class="fine" data-gen-summary aria-live="polite"></div>
          <div class="qrows" data-gen-out data-active="true"></div>
          <div style="display:flex;gap:10px;flex-wrap:wrap"><span class="btn btn-primary btn-sm" aria-hidden="true">Push to 9-B</span><span class="btn btn-ghost btn-sm" aria-hidden="true">${icon('printer', 13)}Print</span><span class="fine" style="align-self:center">Answer keys attached · tagged by topic and difficulty</span></div>
        </div>
      </div>`;
}

/** Principal view: class-wise bars + gap callout. */
export function principalPanel({ classes = [['9-A', 74], ['9-B', 68], ['8-A', 41], ['8-B', 71], ['7-A', 77]], title = 'Principal view', meta = 'All classes · This week', callout = '<strong>Early Gap Detection · 8-A, Light</strong> — 41% on reflection questions, five weeks before Term 1 exams. One remedial period suggested.' } = {}) {
  return `
      <div class="panel">
        <div class="panel-head"><strong>${title}</strong><span>›</span><span>${meta}</span></div>
        <div class="panel-body">${classes.map(([n, p]) => `<div class="bar-row wide"><span class="muted">${n}</span><div class="bar thick"><b class="${p < 50 ? 'low' : ''}" style="--w:${p}%"></b></div><span class="val${p < 50 ? ' low' : ''}">${p}%</span></div>`).join('')}</div>
        <div class="callout"><span class="badge-dot"></span><span>${callout}</span></div>
      </div>`;
}

/** Predict / Observe classroom screen. */
export function classroomPanel() {
  return `
      <div class="panel">
        <div class="panel-head"><strong>Class 9 · Physics</strong><span>›</span><span>Forces</span><span class="chip end">On classroom screen</span></div>
        <div class="split">
          <div><span class="label">Predict</span><span class="q">What happens to lift if rotor speed doubles?</span><div class="choices"><span class="choice">Doubles</span><span class="choice on">Four times</span><span class="choice">Stays the same</span></div></div>
          <div><span class="label">Observe</span><div class="observe"><div class="sim-mini"><div class="sim-rotor sm"></div></div></div><span class="muted">Class vote: 22 of 34 said "four times".</span></div>
        </div>
      </div>`;
}

/** Generated question set (static, for sticky panes). */
export function questionsPanel(active) {
  const qs = [
    ['A helicopter hovers at constant height. Compare lift and weight.', 'Recall'],
    ['Rotor speed is doubled. By what factor does lift change?', 'Apply'],
    ['Why does a hovering helicopter still burn fuel if net force is zero?', 'HOTS'],
    ['Mass increases by 20%. Find the new rotor speed for hover.', 'Apply'],
    ['Design a test to show lift depends on air density.', 'HOTS']
  ];
  return `
      <div class="panel">
        <div class="panel-head"><strong>Question generator</strong><span>›</span><span>Forces in equilibrium</span><span class="end tnum">10 questions · 9.4 s</span></div>
        <div class="panel-body" style="flex-direction:row;flex-wrap:wrap;gap:8px;border-bottom:1px solid var(--color-divider);padding:16px 18px"><span class="tag tag-neutral">Class 9</span><span class="tag tag-neutral">Physics</span><span class="tag tag-neutral">HOTS · 40%</span><span class="tag tag-accent">Answer keys included</span></div>
        <div class="panel-body" style="flex:1;padding-top:6px"><div class="qrows">${qs.map(([t, k], i) => `<div class="qrow" style="--d:${(0.12 + i * 0.14).toFixed(2)}s"><span class="n">Q${i + 1}</span><span class="t">${t}</span><span class="k">${k}</span></div>`).join('')}</div>
        <div style="margin-top:auto;padding-top:14px;display:flex;gap:10px"><span class="btn btn-primary btn-sm">Push to 9-B</span><span class="btn btn-ghost btn-sm">Print</span></div></div>
      </div>`;
}

/** Sticky-scroll story. steps: [{n, title, body, kicker, note}], panes: [html] */
export function story(steps, panes, { id = 'story' } = {}) {
  return `
    <div class="story" data-story id="${id}">
      <div class="steps">
        ${steps.map((s, i) => `
        <div class="step" data-step="${i}" data-active="${i === 0}">
          <span class="step-dot"></span>
          <div>
            <div class="step-n">Step ${s.n || String(i + 1).padStart(2, '0')}</div>
            <h3 class="step-title">${s.title}</h3>
            <p class="step-body">${s.body}</p>
            <div class="step-inline"><div class="panel" style="padding:18px"><div class="label" style="margin-bottom:10px">${s.kicker}</div><div style="font-size:15px;line-height:1.55;color:var(--color-neutral-300)">${s.note}</div></div></div>
          </div>
        </div>`).join('')}
      </div>
      <div class="sticky" aria-hidden="true"><div class="panes">${panes.map((p, i) => `<div class="pane" data-pane="${i}" data-active="${i === 0}">${p}</div>`).join('')}</div></div>
    </div>`;
}

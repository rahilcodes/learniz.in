/**
 * Global Header — fixed nav, frosted on scroll (site.js sets data-scrolled).
 * Flat bar in the design's style with two quiet dropdowns (Features, Solutions)
 * so every page keeps a navigation path. Blog / FAQ / About / Contact live in the footer.
 */
import { icon } from './icons.js';

export const WA_HREF = "https://wa.me/919032181083?text=" + encodeURIComponent("Hi, I'd like to book a free Learniz demo for my school.");
export const LOGIN_HREF = "https://app.learniz.in/login";

const FEATURES = [
  ['/features/interactive-animations', 'Interactive Animations', 'Learning by Doing with live simulations'],
  ['/features/intelliq', 'Question Generator', 'Ten questions with keys in about ten seconds'],
  ['/features/lms-exam-builder', 'LMS & Exam Builder', 'Formative assessment, built in'],
  ['/features/analytics', 'Academic Analytics', 'Early Gap Detection, weeks before results']
];
const SOLUTIONS = [
  ['/for-institutions', 'For Institutions', 'Measurable Learning Outcomes and NEP 2020'],
  ['/for-teachers', 'For Teachers', 'Visible Understanding, Teaching Time Reclaimed'],
  ['/for-students', 'For Students', 'Learning by Doing and Concept Clarity'],
  ['/for-parents', 'For Parents', 'Progress beyond marks']
];

function current(active, href) {
  return active === href || (href === '/platform' && active === '/academiz') ? ' aria-current="page"' : '';
}

function menu(id, label, items, active, wide) {
  const open = items.some(i => i[0] === active);
  return `
      <div class="has-menu" data-open="false">
        <button type="button" class="nav-link${open ? ' is-section' : ''}" aria-expanded="false" aria-controls="${id}" aria-haspopup="true"${open ? ' aria-current="page"' : ''}>${label}${icon('caretDown', 12)}</button>
        <div class="menu${wide ? ' menu-2' : ''}" id="${id}">
          ${items.map(([href, t, d]) => `<a href="${href}"${current(active, href)}>${t}<span>${d}</span></a>`).join('')}
        </div>
      </div>`;
}

/** Theme-aware logo (colour on light, white on dark). h = rendered height in px (asset is 305×96 at 2×). */
export function renderLogo(h = 42, cls = '') {
  const w = Math.round(305 * h / 96);
  return `<a href="/" class="logo${cls ? ' ' + cls : ''}" aria-label="Learniz home"><img class="logo-light" src="/assets/images/logo-light.png" alt="Learniz — Where Education Meets Innovation" width="${w}" height="${h}" fetchpriority="high"><img class="logo-dark" src="/assets/images/logo-dark.png" alt="Learniz — Where Education Meets Innovation" width="${w}" height="${h}" fetchpriority="high"></a>`;
}

export function renderHeader(activePath = '') {
  const a = activePath;
  return `
<a class="skip-link" href="#main">Skip to content</a>
<nav class="nav" data-scrolled="false" data-open="false" aria-label="Main">
  <div class="container nav-inner">
    ${renderLogo(42)}
    <div class="nav-links">
      <a class="nav-link" href="/platform"${current(a, '/platform')}>Platform</a>
      ${menu('menu-features', 'Features', FEATURES, a, true)}
      ${menu('menu-solutions', 'Solutions', SOLUTIONS, a, false)}
      <a class="nav-link" href="/see-it-live"${current(a, '/see-it-live')}>See It Live</a>
      <a class="nav-link" href="/founding-schools"${current(a, '/founding-schools')}>Founding Schools</a>
      <a class="nav-link nav-login" href="${LOGIN_HREF}" target="_blank" rel="noopener noreferrer">Login</a>
    </div>
    <div class="nav-tools">
      <button type="button" class="tog" data-theme-toggle aria-label="Switch theme">${icon('sun', 16, { class: 'ico-sun' })}${icon('moon', 16, { class: 'ico-moon' })}</button>
      <button type="button" class="btn btn-primary nav-cta" data-open-demo>Book a free demo</button>
      <button type="button" class="tog menu-btn" data-menu-toggle aria-expanded="false" aria-controls="nav-mobile" aria-label="Menu">${icon('list', 18, { class: 'ico-menu' })}${icon('x', 18, { class: 'ico-x' })}</button>
    </div>
  </div>
  <div class="nav-mobile" id="nav-mobile" aria-hidden="true">
    <a href="/platform">Platform</a>
    <span class="group">Features</span>
    ${FEATURES.map(([h, t]) => `<a class="sub" href="${h}">${t}</a>`).join('')}
    <span class="group">Solutions</span>
    ${SOLUTIONS.map(([h, t]) => `<a class="sub" href="${h}">${t}</a>`).join('')}
    <span class="group">More</span>
    <a class="sub" href="/see-it-live">See It Live</a>
    <a class="sub" href="/founding-schools">Founding Schools</a>
    <a class="sub" href="/blog">Blog</a>
    <a class="sub" href="/faq">FAQ</a>
    <a class="sub" href="/about">About</a>
    <a class="sub" href="/contact">Contact</a>
    <a class="login" href="${LOGIN_HREF}" target="_blank" rel="noopener noreferrer">Login</a>
  </div>
</nav>
`;
}

/** Minimal header for campaign landing pages (no site navigation). */
export function renderLpHeader() {
  return `
<header class="container lp-head">
  ${renderLogo(42)}
  <div style="display:flex;align-items:center;gap:12px">
    <a href="tel:+919032181083" class="hide-m">+91-9032181083</a>
    <button type="button" class="tog" data-theme-toggle aria-label="Switch theme">${icon('sun', 16, { class: 'ico-sun' })}${icon('moon', 16, { class: 'ico-moon' })}</button>
  </div>
</header>
`;
}

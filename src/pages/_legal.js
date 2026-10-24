/**
 * Shared renderer for legal pages (lighter hero + prose column).
 */
import { page } from '../components/layout.js';

export function renderLegal({ title, description, path, h1, sections }) {
  const body = `
<header class="hero hero-simple">
  <div class="container hero-copy" style="max-width:760px">
    <span class="kicker rv">Legal documentation</span>
    <h1 class="h1 rv" style="--d:.08s;margin-top:22px"><span>${h1}</span></h1>
    <p class="fine rv" style="--d:.16s;margin-top:24px">Effective date: 1 January 2026 · Last updated: October 2026 · Tattvatech Edu Solutions LLP</p>
  </div>
</header>
<section class="section-bottom">
  <div class="container"><div class="prose rv">${sections.map(([h, html], i) => `<h2>${i + 1}. ${h}</h2>${html}`).join('')}</div></div>
</section>`;
  return page({ head: { title, description, path }, body, activePath: path });
}

export const CONTACT_BLOCK = (dept) => `
<p><strong>Tattvatech Edu Solutions LLP</strong><br>${dept}<br>Email: <a href="mailto:info@learniz.in">info@learniz.in</a><br>Phone: <a href="tel:+919032181083">+91-9032181083</a><br>Hyderabad, Telangana, India</p>`;

/**
 * Blog index — /blog
 */
import { page, hero, head, cta, icon, WA_HREF } from '../components/layout.js';

export const POSTS = [
  { href: '/blog/how-ai-question-generators-save-teachers-5-hours-a-week', cat: 'Teacher productivity', date: 'October 2026', iso: '2026-10-18', read: '6 min read', t: 'Teaching Time Reclaimed: Assessment in Seconds for Teachers', b: 'Why manual paper drafting drains teacher hours, and how syllabus-grounded question drafting preserves academic rigour.' },
  { href: '/blog/what-experiential-learning-means-under-nep-2020', cat: 'NEP 2020 guide', date: 'October 2026', iso: '2026-10-15', read: '7 min read', t: 'What Experiential Learning Means Under NEP 2020 (and How to Start)', b: 'A practical blueprint for school principals and trustees transitioning traditional lecture formats into active classroom inquiry.' }
];

export function renderBlogPage() {
  const body = `
${hero({
    tags: [['Resources & articles', 'tag-accent']],
    h1: 'Pedagogy insights', h1b: 'for Indian school leaders.',
    lede: 'Practical guides on NEP 2020 implementation, question generation strategies, science classroom simulations and formative evaluation methods.',
    actions: null
  })}

<section class="section-bottom" aria-label="Articles">
  <div class="container">
    <div class="list rv">
      ${POSTS.map(p => `
      <a class="list-item" href="${p.href}">
        <div class="list-meta"><span>${p.cat}</span><time datetime="${p.iso}">${p.date}</time></div>
        <h2 class="list-title">${p.t}</h2>
        <p class="list-body">${p.b}</p>
        <span class="list-cta">By Learniz Academic Team · ${p.read} · Read article${icon('arrowRight', 13)}</span>
      </a>`).join('')}
    </div>
    <p class="note rv" style="--d:.1s;margin-top:40px">New articles are announced on WhatsApp. <a href="${WA_HREF}" target="_blank" rel="noopener">Message us</a> to be added to the list.</p>
  </div>
</section>

${cta({ lede: 'Have questions about bringing experiential learning to your school? Schedule a 20-minute live demonstration.' })}
`;
  return page({
    head: { title: 'Blog & STEM Resources for Indian Schools | Learniz', description: 'Insights on NEP 2020 experiential learning mandates, AI question generation, classroom simulations, and modern school leadership strategies.', path: '/blog' },
    body, activePath: '/blog'
  });
}

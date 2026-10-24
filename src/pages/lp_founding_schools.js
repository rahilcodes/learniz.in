/**
 * Campaign landing page — /lp/founding-schools (no site nav, noindex via robots)
 */
import { page, rowsGrid, icon, WA_HREF } from '../components/layout.js';

export function renderLpFoundingSchoolsPage() {
  const body = `
<header class="hero hero-simple" style="padding-bottom:0">
  <div class="container hero-copy">
    <div class="hero-tags rv"><span class="tag tag-accent">Founding Schools · inaugural cohort</span><span class="tag tag-neutral">10 slots</span></div>
    <h1 class="h1 rv" style="--d:.08s"><span>Future-Ready Classrooms:</span><span class="accent">the Founding Schools Programme.</span></h1>
    <p class="lede lede-lg rv" style="--d:.16s">An unrestricted, free 30-day pilot across Physics, Chemistry, Biology and Maths, with locked founding pricing for early partner institutions in India.</p>
    <div class="actions actions-lg rv" style="--d:.24s"><button type="button" class="btn btn-primary btn-lg" data-open-demo>Book a free demo${icon('arrowRight', 15)}</button><a href="${WA_HREF}" target="_blank" rel="noopener" class="btn btn-ghost btn-lg">Chat on WhatsApp</a></div>
    <p class="fine rv" style="--d:.32s">No credit card required · Free onboarding and teacher training included · Cancel anytime</p>
  </div>
</header>
<section class="section-bottom">
  <div class="container">
    ${rowsGrid([
      { n: '01 · Learning by Doing', t: 'Teacher-controlled experiments', b: 'Project onto existing classroom displays. Adjust variables live and watch physics and chemistry principles unfold.' },
      { n: '02 · Assessment in Seconds', t: 'Ten questions in ten seconds', b: "Draft syllabus-aligned CBSE and ICSE test papers with answer keys, Bloom's taxonomy tags and marking rubrics." },
      { n: '03 · Early Gap Detection', t: 'Question-level accuracy', b: 'Spot misconceptions months before board exams. Discover exactly which concept failed and take targeted action.' }
    ], 3)}
  </div>
</section>
`;
  return page({
    head: { title: 'Future-Ready Classrooms: Founding Schools Offer | Learniz', description: 'Exclusive Founding Schools offer for Indian institutions. Free 30-day classroom pilot and locked founding rates. Apply today.', path: '/lp/founding-schools' },
    body, kind: 'lp'
  });
}

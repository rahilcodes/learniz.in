/**
 * Founding Schools Programme — /founding-schools
 * Cohort numbers (cap 10, spots remaining) are hard-coded placeholders: see PLACEHOLDERS.md.
 */
import { page, hero, head, rows, faqSection, cta, icon, WA_HREF } from '../components/layout.js';

const RECEIVE = [
  { t: '100% free 30-day pilot', b: 'Full access to all simulations, the IntelliQ question engine and the LMS across all sections.' },
  { t: 'Locked founding tier', b: 'A founding price for the whole school, held for the year: a permanent discounted rate that does not increase for future academic sessions.' },
  { t: 'A named onboarding lead', b: 'Direct, hands-on teacher training and syllabus configuration by our Hyderabad team.' },
  { t: 'A seat at the roadmap', b: 'Direct priority queue for simulation requests and customised feature development. Monthly call with the product team.' }
];
const PROVIDE = [
  { t: 'Classroom testing', b: 'Teachers conduct at least two simulated lesson experiments per week during the pilot.' },
  { t: 'Constructive feedback', b: 'A bi-weekly 20-minute check-in call with our product design team to share impressions.' },
  { t: 'Case study participation', b: 'Allow our team to write a brief post-pilot summary of student engagement and results.' },
  { t: 'Zero hidden commitments', b: 'If Learniz does not meet your expectations, you may exit without cost or obligation.' }
];
const FAQS = [
  ['What is included in the 30-day free pilot?', 'The free pilot gives your school unrestricted access to the interactive experiments, the IntelliQ question engine, the complete LMS and exam builder, and student performance analytics for all participating sections.'],
  ['What happens at the end of the free pilot?', 'At the end of the 30 days, your school leadership can choose to continue on the locked founding-tier rate, or simply conclude the pilot. There is no automatic billing, credit-card requirement or penalty.'],
  ['How long does onboarding take?', 'Two weeks. A named onboarding lead trains every teacher, and the first assessments usually run in week one.'],
  ['What do we need in the classroom?', 'A projector or smart panel and an internet connection. Student devices are optional: assessments can be pushed to phones or printed.']
];

function cohortPanel() {
  return `
      <div class="panel" data-fs>
        <div class="panel-head"><strong>Cohort 2026</strong><span>›</span><span>Admissions</span><span class="chip end">Reviewing applications</span></div>
        <div class="panel-body" style="gap:16px">
          <div class="kpis" style="border-radius:var(--radius-md);overflow:hidden">
            <div class="kpi"><div class="kpi-label">Cohort cap</div><div class="kpi-value">10</div><div class="kpi-delta">schools</div></div>
            <div class="kpi"><div class="kpi-label">Pilot</div><div class="kpi-value">30</div><div class="kpi-delta">days, free</div></div>
            <div class="kpi"><div class="kpi-label">Spots remaining</div><div class="kpi-value" data-fs-remaining>4</div><div class="kpi-delta up" data-fs-open>4 spots open</div></div>
            <div class="kpi"><div class="kpi-label">Pricing</div><div class="kpi-value" style="font-size:20px;margin-top:10px">Locked</div><div class="kpi-delta">founding tier</div></div>
          </div>
          <div data-fs-grid data-remaining="4" role="img" aria-label="4 of 10 places remaining" style="display:grid;grid-template-columns:repeat(10,1fr);gap:4px"></div>
          <div class="muted" style="line-height:1.55"><span data-fs-enrolled>6 schools enrolled or reserved</span>. Applications are evaluated on school leadership enthusiasm and willingness to pilot experiential pedagogy in STEM classrooms.</div>
        </div>
      </div>`;
}

export function renderFoundingSchoolsPage() {
  const body = `
${hero({
    tags: [['Founding Schools', 'tag-accent'], ['Cohort 2026 · Admissions open', 'tag-neutral']],
    h1: 'The first schools shape the product.', h1b: 'And pay less for it.',
    lede: 'A limited partnership for forward-thinking Indian institutions. Run Learniz early with a free 30-day pilot and founding-tier pricing.',
    actions: `<button type="button" class="btn btn-primary btn-lg" data-open-demo>Apply for the founding cohort${icon('arrowRight', 15)}</button><a href="${WA_HREF}" target="_blank" rel="noopener" class="btn btn-ghost btn-lg">WhatsApp priority line</a>`,
    art: cohortPanel()
  })}

<section class="section-bottom" aria-labelledby="rec-h">
  <div class="container two-col two-col-wide two-col-start">
    <div class="head">${head({ kicker: 'The founding agreement', h2: 'A partnership built on mutual commitment.', lede: 'Founding Schools get a year of Learniz at a founding price, a named onboarding lead for every teacher, and a say in what we build next.' }).replace('class="h2 rv"', 'class="h2 rv" id="rec-h"')}
      <div class="label rv" style="--d:.2s;margin-top:40px">What your school receives</div>
    </div>
    <div class="rv" style="--d:.12s">${rows(RECEIVE)}</div>
  </div>
</section>

<section class="section section-line" aria-labelledby="prov-h">
  <div class="container two-col two-col-mirror two-col-start">
    <div class="rv" style="--d:.12s">${rows(PROVIDE)}</div>
    <div class="head">${head({ kicker: 'What your school provides', h2: 'Teach with it, tell us what you find.', lede: 'Applications are processed on a first-come, first-reviewed basis. Secure your 30-day pilot before the 10-school cohort closes.' }).replace('class="h2 rv"', 'class="h2 rv" id="prov-h"')}</div>
  </div>
</section>

${faqSection({ kicker: 'Pilot and pricing', h2: 'Questions founding schools ask.', items: FAQS, id: 'fs-faq' })}

${cta({ kicker: 'Apply', h2: 'Future-Ready Classrooms. Outcomes you can see.', lede: 'A 20-minute walkthrough with your subjects and classes, then a pilot plan for your school.' })}
`;

  return page({
    head: {
      title: 'Founding Schools Programme | Learniz',
      description: 'Ten forward-thinking schools will shape Learniz. Free 30-day classroom pilot and locked founding pricing for early partner institutions in India.',
      path: '/founding-schools'
    },
    body,
    activePath: '/founding-schools'
  });
}

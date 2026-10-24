/**
 * Feature — Academic Analytics (/features/analytics)
 */
import { page, hero, head, rowsGrid, cta, dashboardPanel, principalPanel, icon } from '../components/layout.js';

export function renderAnalyticsPage() {
  const body = `
${hero({
    tags: [['Early Gap Detection', 'tag-accent'], ['Question-level accuracy', 'tag-neutral']],
    h1: 'Early Gap Detection, weeks before results.', h1b: 'Outcomes you can see.',
    lede: 'A score only tells you what was missed. Learniz shows exactly which concept caused the hesitation, why, and how to fix it before the board exams.',
    actions: `<button type="button" class="btn btn-primary btn-lg" data-open-demo>Book a free demo${icon('arrowRight', 15)}</button><a href="/see-it-live" class="btn btn-ghost btn-lg">Explore the demo gallery</a>`,
    art: dashboardPanel({ compact: true }), tilt: true
  })}

<section class="section-bottom" aria-labelledby="heat-h">
  <div class="container two-col two-col-wide">
    <div class="head">
      ${head({ kicker: 'Question-level accuracy', h2: 'Early Gap Detection at the question level.', lede: 'Standard school reports look only at total marks. Learniz tracks accuracy, misconceptions and time spent on every individual concept across the cohort.', note: 'Diagnostic discovery: in the Physics Unit Test, Q14 and Q19 (Lift and Equilibrium) were missed by 69% of the batch. The teacher scheduled a ten-minute simulation refresher on rotor dynamics before the term exam.' }).replace('class="h2 rv"', 'class="h2 rv" id="heat-h"')}
    </div>
    <div class="rv" style="--d:.12s">${dashboardPanel({ badge: false })}</div>
  </div>
</section>

<section class="section section-line" aria-labelledby="dec-h">
  <div class="container two-col two-col-mirror two-col-start">
    <div class="rv" style="--d:.12s">${principalPanel()}</div>
    <div class="head">${head({ kicker: 'Data-Backed Decisions', h2: 'Measurable Learning Outcomes for leaders, teachers and parents.' }).replace('class="h2 rv"', 'class="h2 rv" id="dec-h"')}</div>
  </div>
  <div class="container">
    ${rowsGrid([
      { n: 'Principals', t: 'Cross-campus benchmarks', b: 'Compare sections or evaluate performance across multiple campuses. Spot curriculum gaps months before final board examinations.' },
      { n: 'Teachers', t: 'Early Gap Detection & support', b: 'An instant list of students who fell below 40% on specific concepts. Trigger focused practice sets directly to resolve learning gaps.' },
      { n: 'Parents', t: 'Parent Confidence', b: "Clear, reassuring commentary on the student's strengths and areas for encouragement, accessible on a phone without marks anxiety." }
    ], 3)}
  </div>
</section>

${cta({ h2: 'Early Gap Detection. Outcomes you can see.', lede: "Book a 20-minute live demonstration to see Learniz diagnostic reports mapped to your school's actual batch assessment data.", secondary: `<a href="/for-institutions" class="btn btn-ghost btn-lg">Next: For Institutions${icon('arrowRight', 14)}</a>` })}
`;

  return page({
    head: {
      title: 'Early Gap Detection: Academic Analytics | Learniz',
      description: 'Learniz academic analytics turns raw test marks into early gap detection: question-level accuracy heatmaps, diagnostic insights, and batch comparison.',
      path: '/features/analytics'
    },
    body,
    activePath: '/features/analytics'
  });
}

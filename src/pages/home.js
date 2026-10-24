/**
 * Homepage — 1:1 rebuild of the approved design (Learniz Homepage.dc.html).
 */
import { page, head, rows, faqSection, dashboardPanel, simPanel, classroomPanel, questionsPanel, principalPanel, story, demoActions, arrow, icon } from '../components/layout.js';

const ROLES = [
  { tab: 'Owners & principals', headline: 'Early Gap Detection, weeks before results.', body: 'See which classes and concepts need attention while there is still time to act. Measurable Learning Outcomes, aligned with NEP 2020, that you can show a board and a parent.', points: ['Class-wise and concept-wise accuracy, updated after every assessment', 'Data-Backed Decisions on remedial periods, faculty and timetable', 'NEP-Aligned Pedagogy made visible for inspections and admissions'], panelTitle: 'School overview', panelMeta: 'Term 1 · Week 6', rows: [['Concepts on track', '38 of 44', 86], ['Classes with a flagged gap', '3 of 18', 17], ['Remedial periods scheduled', '5', 50]], panelNote: 'Three gaps flagged this week, each with the concept named and a period suggested.', href: '/for-institutions' },
  { tab: 'Teachers', headline: 'Teaching Time Reclaimed.', body: 'A question set in seconds, not an evening. Who got it, during the class, not after the paper comes back. Tools that help you teach, not a system that teaches for you.', points: ['Assessment in Seconds: ten questions with keys from one concept', 'Visible Understanding while the class is still in the room', 'Simulations for Class 6 to 12 Science and Maths, ready for the screen you have'], panelTitle: 'This week · Ms. Rao', panelMeta: '9-A, 9-B, 8-A', rows: [['Question sets generated', '7', 70], ['Time on paper-setting', '12 min', 10], ['Students who attempted', '98 of 102', 96]], panelNote: 'Seven sets this week; the longest took 14 seconds to generate.', href: '/for-teachers' },
  { tab: 'Parents', headline: 'Concept Clarity, not memorising.', body: 'Small checks every week, no surprises at the exam. Progress you can read beyond marks: what your child can apply, not just repeat.', points: ['Weekly progress by concept, in plain language', 'Confident Learners: try, fail, try again without fear', 'Lasting Retention: learned in class, still there at the exam'], panelTitle: 'Aarav · Class 9-B', panelMeta: 'Physics · Term 1', rows: [['Forces', 'Clear', 88], ['Motion', 'Improving', 64], ['Pressure', 'Needs practice', 46]], panelNote: 'Pressure was revised in class on Thursday; a short check follows next week.', href: '/for-parents' }
];

// Placeholder figures per the README ("Numbers are placeholders: confirm with client").
const STATS = [[10, 's', 'to a question set with answer keys'], [25, '', 'questions scored per class, question by question'], [7, '', 'classes covered, 6 to 12, Science and Maths'], [12, '', 'live demos open to try, no login needed']];

const STEPS = [
  { n: '01', title: 'Teach with a live experiment', body: 'Pick a concept from Class 6 to 12 Science or Maths. Run the simulation on the classroom screen: students predict, change a variable, and watch what happens.', kicker: 'On classroom screen', note: 'Predict → change → observe. Class vote: 22 of 34 said lift goes up four times.' },
  { n: '02', title: 'Assess in seconds', body: 'Type the concept. Ten questions with answer keys, a share of them HOTS, in about ten seconds. Push to student devices or print for the period.', kicker: 'Question generator', note: '10 questions · answer keys · 40% HOTS · 9.4 seconds.' },
  { n: '03', title: 'See the gap before results do', body: 'Per-question accuracy for every class, the morning after. Weak concepts flagged weeks before the exam, with a remedial period suggested.', kicker: 'Principal view', note: 'Early Gap Detection · 8-A, Light: 41% on reflection questions, five weeks before Term 1.' }
];

const FAQS = [
  ['Does Learniz replace teachers?', 'No. It gives teachers a live experiment for the screen they already have and a question set in seconds. The teacher runs the class; Learniz shows who understood it.'],
  ['What do we need in the classroom?', 'A projector or smart panel and an internet connection. Student devices are optional: assessments can be pushed to phones or printed.'],
  ['Which boards and classes are covered?', 'Classes 6 to 12, Science and Maths, mapped to CBSE, ICSE and State syllabi, with NEP 2020 and NCF-SE 2023 competencies named on every concept.'],
  ['How long does onboarding take?', 'Two weeks. A named onboarding lead trains every teacher, and the first assessments usually run in week one.'],
  ['What does the principal actually see?', 'Class-wise and concept-wise accuracy after every assessment, gaps flagged with the concept named, and a suggested remedial period. The same screen you saw at the top of this page.']
];

const STRIP = ['Built for Indian schools', 'NEP 2020', 'NCF-SE 2023', 'CBSE', 'ICSE', 'State Boards', 'Classes 6 to 12', 'Science & Maths'];

export function renderHomePage() {
  const strip = STRIP.map(t => `<span>${t}<i></i></span>`).join('');

  const body = `
<!-- Hero -->
<header class="hero" id="top" data-tilt-area>
  <div class="container hero-grid">
    <div class="hero-copy">
      <div class="hero-tags rv"><span class="tag tag-accent">Built for Indian schools</span><span class="tag tag-neutral">NEP 2020 · NCF-SE 2023</span></div>
      <h1 class="h1 rv" style="--d:.08s"><span>Concept Clarity in every class.</span><span class="accent">Outcomes you can see.</span></h1>
      <p class="lede lede-lg rv" style="--d:.16s">Learniz turns lessons into live experiments and shows principals, in numbers, what every class understood.</p>
      <div class="actions actions-lg rv" style="--d:.24s">${demoActions({ secondary: '<a href="#live" class="btn btn-ghost btn-lg">See it live</a>' })}</div>
      <p class="fine rv" style="--d:.32s">20-minute walkthrough with your subjects and classes. No login needed to try the demos.</p>
    </div>
    <div class="hero-art rv" style="--d:.2s" data-tilt>${dashboardPanel()}</div>
  </div>
  <div class="marquee" aria-hidden="true"><div class="marquee-track">${strip}${strip}</div></div>
</header>

<!-- Learning by Doing · live simulation -->
<section class="section" id="live" aria-labelledby="live-h">
  <div class="container two-col two-col-wide">
    <div class="head">
      ${head({ kicker: 'Every Class an Experiment', h2: 'Learning by Doing, in every period.', lede: 'Students change a variable. The simulation answers. That is Cause-and-Effect Thinking, in one period, on the screen your classroom already has.', note: 'Try it: drag the rotor speed and watch lift, weight and the helicopter respond.' }).replace('class="h2 rv"', 'class="h2 rv" id="live-h"')}
      <div class="actions rv" style="--d:.28s"><a href="/see-it-live" class="btn btn-ghost">More live demos${icon('arrowRight', 14)}</a></div>
    </div>
    <div class="rv" style="--d:.12s">${simPanel({ id: 'home-sim' })}</div>
  </div>
</section>

<!-- How it works · sticky scroll -->
<section class="section-bottom section-line" id="how" aria-labelledby="how-h">
  <div class="container section-top">
    <span class="kicker rv">Visible Understanding</span>
    <h2 class="h2 rv" id="how-h" style="--d:.08s;max-width:22ch">From the first class to the report, in three steps.</h2>
    ${story(STEPS, [classroomPanel(), questionsPanel(), principalPanel()], { id: 'how-story' })}
  </div>
</section>

<!-- Solutions · by role -->
<section class="section section-line" id="solutions" aria-labelledby="sol-h">
  <div class="container">
    <div class="head" style="gap:0">
      <span class="kicker rv">Measurable Learning Outcomes</span>
      <h2 class="h2 rv" id="sol-h" style="--d:.08s">Same platform. Different proof for everyone in the school.</h2>
      <div class="tabs rv" role="tablist" data-tabs aria-label="Solutions by role" style="--d:.16s;margin-top:36px">
        ${ROLES.map((r, i) => `<button type="button" role="tab" class="tab" id="role-tab-${i}" aria-controls="role-panel-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${r.tab}</button>`).join('')}
      </div>
    </div>
    <div class="tabpanels rv" style="--d:.2s">
      ${ROLES.map((r, i) => `
      <div class="tabpanel two-col two-col-even" id="role-panel-${i}" role="tabpanel" aria-labelledby="role-tab-${i}"${i ? ' hidden' : ''}>
        <div class="stack">
          <h3 class="h3-lg">${r.headline}</h3>
          <p class="lede" style="margin-top:20px">${r.body}</p>
          <ul class="checks">${r.points.map(p => `<li>${icon('check', 18)}<span>${p}</span></li>`).join('')}</ul>
          <div class="actions actions-lg"><button type="button" class="btn btn-primary" data-open-demo>Book a free demo</button><a href="${r.href}" class="btn btn-ghost">More for ${r.tab.toLowerCase()}${icon('arrowRight', 14)}</a></div>
        </div>
        <div class="panel">
          <div class="panel-head"><strong>${r.panelTitle}</strong><span class="end">${r.panelMeta}</span></div>
          <div class="panel-body" style="padding:22px 18px;gap:18px">
            ${r.rows.map(([l, v, w]) => `<div class="bar-stack"><div class="top"><span>${l}</span><span>${v}</span></div><div class="bar"><b style="--w:${w}%"></b></div></div>`).join('')}
            <div class="muted" style="padding-top:6px;line-height:1.55">${r.panelNote}</div>
          </div>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- Stat band -->
<section class="stats" id="platform" data-stats aria-label="The platform in numbers">
  <div class="container">
    <p class="stats-lede rv">Every class an experiment, not a lecture. The platform, in numbers.</p>
    <div class="stats-grid">
      ${STATS.map(([n, u, l], i) => `<div class="stat rv" style="--d:${(i * 0.08).toFixed(2)}s"><span class="stat-n" data-count="${n}" data-unit="${u}">0${u}</span><span class="stat-l">${l}</span></div>`).join('')}
    </div>
  </div>
</section>

<!-- Founding Schools -->
<section class="section" id="founding" aria-labelledby="founding-h">
  <div class="container two-col two-col-mirror">
    <div class="head">
      <span class="kicker rv">Founding Schools</span>
      <h2 class="h2 rv" id="founding-h" style="--d:.08s;max-width:18ch">The first schools shape the product. And pay less for it.</h2>
      <p class="lede rv" style="--d:.16s;max-width:var(--measure-wide)">A limited number of Founding Schools get a year of Learniz at a founding price, a named onboarding lead for every teacher, and a say in what we build next.</p>
      <div class="actions actions-lg rv" style="--d:.24s">${demoActions({ secondary: '<span class="fine">20 minutes. Your subjects, your classes.</span>' })}</div>
      <div class="actions rv" style="--d:.3s;margin-top:18px"><a href="/founding-schools" class="btn btn-ghost">About the programme${icon('arrowRight', 14)}</a></div>
    </div>
    <div class="rv" style="--d:.12s">${rows([
      { t: 'Founding price, locked for the year', b: 'One price for the whole school, held for twelve months.' },
      { t: 'A named onboarding lead', b: 'One person who knows your timetable and trains every teacher in the first two weeks.' },
      { t: 'A seat at the roadmap', b: 'Monthly call with the product team. What Founding Schools ask for gets built first.' }
    ])}</div>
  </div>
</section>

${faqSection({ items: FAQS, id: 'home-faq', pad: 'section-bottom' })}
`;

  return page({
    head: {
      title: 'Concept Clarity in Every Class. Outcomes You Can See | Learniz',
      description: 'Learniz turns lessons into live experiments and shows principals, in numbers, what every class understood. Book a free demo.',
      path: '/'
    },
    body,
    activePath: '/'
  });
}

/**
 * Shared renderer for the four audience pages (/for-institutions, /for-teachers, /for-students, /for-parents).
 */
import { page, hero, head, rows, cta, audienceTabs, icon, WA_HREF } from '../components/layout.js';

function miniPanel({ title, meta, rows: rs, note }) {
  return `
      <div class="panel">
        <div class="panel-head"><strong>${title}</strong><span class="end">${meta}</span></div>
        <div class="panel-body" style="padding:22px 18px;gap:18px">
          ${rs.map(([l, v, w]) => `<div class="bar-stack"><div class="top"><span>${l}</span><span>${v}</span></div><div class="bar"><b style="--w:${w}%"></b></div></div>`).join('')}
          <div class="muted" style="padding-top:6px;line-height:1.55">${note}</div>
        </div>
      </div>`;
}

export function renderAudiencePage(d) {
  const body = `
${hero({
    tags: d.tags, h1: d.h1, h1b: d.h1b, lede: d.lede,
    actions: `<button type="button" class="btn btn-primary btn-lg" data-open-demo>Book a free demo${icon('arrowRight', 15)}</button>${d.secondary}`,
    fine: d.fine
  })}

<section class="section-bottom" aria-labelledby="pillars-h">
  <div class="container">
    ${audienceTabs(d.path)}
    <div class="two-col two-col-wide two-col-start" style="margin-top:clamp(48px,6vw,80px)">
      <div class="head">
        ${head({ kicker: d.kicker, h2: d.h2, lede: d.h2lede }).replace('class="h2 rv"', 'class="h2 rv" id="pillars-h"')}
        <div class="rv" style="--d:.2s;margin-top:32px;width:100%">${miniPanel(d.panel)}</div>
      </div>
      <div class="rv" style="--d:.12s">${rows(d.pillars)}</div>
    </div>
  </div>
</section>

${cta({ h2: d.ctaH2, lede: d.ctaLede, secondary: d.ctaSecondary })}
`;
  return page({ head: { title: d.title, description: d.description, path: d.path }, body, activePath: d.path });
}

export const AUDIENCES = {
  institutions: {
    path: '/for-institutions',
    title: 'Early Gap Detection for Schools | Learniz',
    description: 'See which classes and concepts need attention while there is still time to act. Measurable Learning Outcomes, aligned with NEP 2020.',
    tags: [['For institutions', 'tag-accent'], ['Outcomes you can see', 'tag-neutral']],
    h1: 'Early Gap Detection,', h1b: 'weeks before results.',
    lede: 'See which classes and concepts need attention while there is still time to act. Measurable Learning Outcomes, aligned with NEP 2020.',
    secondary: '<a href="/founding-schools" class="btn btn-ghost btn-lg">Founding Schools Programme</a>',
    fine: 'For owners, trustees, principals and academic heads.',
    kicker: 'Measurable Learning Outcomes', h2: 'Data-Backed Decisions for principals and school owners.',
    h2lede: 'Class-wise and concept-wise accuracy, updated after every assessment, so remedial periods, faculty and timetable decisions rest on numbers.',
    pillars: [
      { t: 'Measurable Learning Outcomes', b: 'Progress as numbers: monitor syllabus completion rates, batch scores and teacher adoption across all branches from a single unified view.' },
      { t: 'Early Gap Detection', b: 'Weak concepts caught weeks before results: see which topics are missed while there is still time for targeted remedial classes.' },
      { t: 'Parent Confidence', b: "Parents see progress and trust the next year's fee: continuous, plain-language updates keep families informed and confident throughout the academic year." }
    ],
    panel: { title: 'School overview', meta: 'Term 1 · Week 6', rows: [['Concepts on track', '38 of 44', 86], ['Classes with a flagged gap', '3 of 18', 17], ['Remedial periods scheduled', '5', 50]], note: 'Three gaps flagged this week, each with the concept named and a period suggested.' },
    ctaH2: 'Measurable Learning Outcomes for your school.',
    ctaLede: 'Join the Founding Schools cohort and receive a free 30-day pilot for your institution.',
    ctaSecondary: `<a href="/for-teachers" class="btn btn-ghost btn-lg">See teacher solutions${icon('arrowRight', 14)}</a>`
  },
  teachers: {
    path: '/for-teachers',
    title: 'Visible Understanding & Teaching Time Reclaimed | Learniz',
    description: 'Learniz puts live experiments on your screen and drafts question sets in seconds, giving hours of weekend prep back to teaching.',
    tags: [['For teachers', 'tag-accent'], ['Classes 6 to 12 · Science & Maths', 'tag-neutral']],
    h1: 'Visible Understanding in class.', h1b: 'Teaching Time Reclaimed.',
    lede: 'Learniz turns lessons into live experiments and drafts question sets in seconds, giving hours of weekend prep back to teaching.',
    secondary: '<a href="/see-it-live" class="btn btn-ghost btn-lg">Explore live simulations</a>',
    fine: 'Tools that help you teach, not a system that teaches for you.',
    kicker: 'Teacher tools', h2: 'Built for Monday-morning classroom reality.',
    h2lede: 'A question set in seconds, not an evening. Who got it, during the class, not after the paper comes back.',
    pillars: [
      { t: 'Visible Understanding', b: 'See who got it, during the class: adjust parameters on screen and run quick check-in questions to see comprehension in real time.' },
      { t: 'Assessment in Seconds', b: 'A question set in a minute, not an evening: generate tagged questions by chapter, topic and difficulty for teacher review and export.' },
      { t: 'Every Class an Experiment', b: 'Control the variables live on the projector or interactive flat panel. Students observe cause and effect without abstract blackboard lectures.' }
    ],
    panel: { title: 'This week · Ms. Rao', meta: '9-A, 9-B, 8-A', rows: [['Question sets generated', '7', 70], ['Time on paper-setting', '12 min', 10], ['Students who attempted', '98 of 102', 96]], note: 'Seven sets this week; the longest took 14 seconds to generate.' },
    ctaH2: 'Every class an experiment, not a lecture.',
    ctaLede: 'See how easily you can run interactive simulations and generate question sets for your subjects.',
    ctaSecondary: `<a href="/see-it-live" class="btn btn-ghost btn-lg">Try simulations live${icon('arrowRight', 14)}</a>`
  },
  students: {
    path: '/for-students',
    title: 'Learning by Doing & Concept Clarity | Learniz for Students',
    description: 'Explore science and math concepts visually with interactive simulations, practice with instant feedback, and build lasting Concept Clarity.',
    tags: [['For students', 'tag-accent'], ['No login needed to try the demos', 'tag-neutral']],
    h1: 'Learning by Doing:', h1b: 'Concept Clarity that stays with you.',
    lede: 'Change a variable, see what happens. Learniz turns textbook lessons into live experiments where you deduce principles first-hand.',
    secondary: '<a href="/see-it-live" class="btn btn-ghost btn-lg">Try interactive demos</a>',
    fine: 'Try, fail, try again, without fear.',
    kicker: 'Learner outcomes', h2: 'Understood, not memorised. True Concept Clarity.',
    h2lede: 'Learned in class, still there at the exam.',
    pillars: [
      { t: 'Learning by Doing', b: 'See physics, chemistry and biology in motion: change rotor speed, refract light through prisms, and see the science respond in real time.' },
      { t: 'Cause-and-Effect Thinking', b: 'Change a variable, see what happens: reason through problems step by step instead of memorising static answers for exams.' },
      { t: 'Scientific Temper', b: 'Test, observe, question: build confidence through continuous practice checks with zero exam fear.' }
    ],
    panel: { title: 'Aarav · Class 9-B', meta: 'Physics · Term 1', rows: [['Forces', 'Clear', 88], ['Motion', 'Improving', 64], ['Pressure', 'Needs practice', 46]], note: 'Pressure was revised in class on Thursday; a short check follows next week.' },
    ctaH2: 'Every class an experiment. Try it live.',
    ctaLede: 'Open the live simulation gallery. No login or sales call required.',
    ctaSecondary: `<a href="/see-it-live" class="btn btn-ghost btn-lg">Open the live gallery${icon('arrowRight', 14)}</a>`
  },
  parents: {
    path: '/for-parents',
    title: 'Parent Confidence: Progress Beyond Marks | Learniz',
    description: 'Learniz gives parents small checks every week and progress beyond marks. Understand where your child thrives and where help is needed, long before exams.',
    tags: [['For parents', 'tag-accent'], ['Progress beyond marks', 'tag-neutral']],
    h1: 'Parent Confidence:', h1b: 'progress beyond marks, with no surprises.',
    lede: 'Learniz gives parents small checks every week. See where your child understands the concept, where they need help, and how they apply it.',
    secondary: '<a href="/about" class="btn btn-ghost btn-lg">About Learniz</a>',
    fine: 'Weekly progress by concept, in plain language.',
    kicker: 'Parent Confidence', h2: 'Know how your child is doing between report cards.',
    h2lede: 'Small checks every week, no surprises at the exam.',
    pillars: [
      { t: 'Progress beyond marks', b: 'Instead of confusing percentages at term-end, get plain-language notes: which topics are mastered, and where ten minutes of practice helps most.' },
      { t: 'Small checks every week, no surprises', b: 'Formative checks catch learning gaps weeks before exams, so your child never faces last-minute stress or unexpected results.' },
      { t: 'The thinking questions boards now ask', b: 'CBSE and State boards now focus on application and HOTS questions. Learning by Doing ensures children can apply concepts, not just repeat them.' }
    ],
    panel: { title: 'Aarav · Class 9-B', meta: 'Physics · Term 1', rows: [['Forces', 'Clear', 88], ['Motion', 'Improving', 64], ['Pressure', 'Needs practice', 46]], note: 'Pressure was revised in class on Thursday; a short check follows next week.' },
    ctaH2: 'Parent Confidence starts with visible understanding.',
    ctaLede: 'Schools using Learniz give parents clear insight into weekly progress. Book a free demo for your school leadership team.',
    ctaSecondary: `<a href="/see-it-live" class="btn btn-ghost btn-lg">See it live${icon('arrowRight', 14)}</a>`
  }
};

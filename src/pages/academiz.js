/**
 * Platform overview — /platform (also served at /academiz)
 */
import { page, hero, head, rows, rowsGrid, cta, story, dashboardPanel, simPanel, questionsPanel, principalPanel, icon } from '../components/layout.js';

const MODULES = [
  { n: '01', title: 'Interactive Animations', body: 'Learning by Doing: physics, chemistry and biology models where teachers adjust variables live and students see the effect immediately.', kicker: 'On classroom screen', note: 'Teacher changes rotor speed; the class predicts, then watches lift respond.', href: '/features/interactive-animations', link: 'Deep dive into animations' },
  { n: '02', title: 'Question Generator', body: 'Assessment in Seconds: ten questions in about ten seconds, auto-tagged by topic, difficulty and format, for teachers to review and edit.', kicker: 'Question generator', note: '10 questions · answer keys · tagged by topic and difficulty · ready to push or print.', href: '/features/intelliq', link: 'Explore the question generator' },
  { n: '03', title: 'LMS & Exam Builder', body: 'Formative Assessment, Built In: a structured chapter → topic hierarchy with configurable timers, negative marking and pass criteria.', kicker: 'Exam builder', note: 'Chapter → topic → question set. Timer, marking scheme and schedule in one place.', href: '/features/lms-exam-builder', link: 'Examine LMS workflows' },
  { n: '04', title: 'Academic Analytics', body: 'Early Gap Detection: question-level accuracy heatmaps, time analysis and batch diagnostics, weeks before board examinations.', kicker: 'Principal view', note: 'Class-wise accuracy with the weak concept named and a remedial period suggested.', href: '/features/analytics', link: 'Review academic analytics' }
];

function examBuilderPanel() {
  return `
      <div class="panel">
        <div class="panel-head"><strong>Exam builder</strong><span>›</span><span>Class 9 · Physics · Unit Test 3</span><span class="chip end">Scheduled</span></div>
        <div class="panel-body" style="gap:10px">
          <div class="label">Structure</div>
          <div class="rows" style="box-shadow:none">
            <div class="row" style="padding:12px 14px;grid-template-columns:1fr auto"><span class="muted">Chapter 9 · Force and Laws of Motion</span><span class="chip chip-neutral">3 topics</span></div>
            <div class="row" style="padding:12px 14px;grid-template-columns:1fr auto"><span style="padding-left:14px">Balanced and unbalanced forces</span><span class="muted">8 Q</span></div>
            <div class="row" style="padding:12px 14px;grid-template-columns:1fr auto"><span style="padding-left:14px">Newton's second law</span><span class="muted">9 Q</span></div>
            <div class="row" style="padding:12px 14px;grid-template-columns:1fr auto"><span style="padding-left:14px">Conservation of momentum</span><span class="muted">8 Q</span></div>
          </div>
          <div class="label" style="margin-top:8px">Settings</div>
          <div class="form-2" style="gap:8px">
            <div class="opt"><b>⏱</b>45 minutes · auto-submit</div><div class="opt"><b>−</b>Negative marking · 0.25</div>
            <div class="opt"><b>✓</b>Pass mark · 40%</div><div class="opt right"><b>↗</b>Push to 9-A, 9-B · Friday 9:40</div>
          </div>
        </div>
      </div>`;
}

export function renderAcademizPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Learniz",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web browser, Chrome OS, Windows, Android, iOS",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR", "description": "Free 30-day pilot for qualified schools in the Founding Schools Programme" },
        "provider": { "@type": "Organization", "name": "Learniz", "legalName": "TATTVATECH EDU SOLUTIONS LLP" },
        "description": "Experiential learning platform for Indian schools featuring teacher-controlled interactive animations, AI-assisted question generation, an LMS with exam builder, and academic analytics."
      }
    ]
  };

  const body = `
${hero({
    tags: [['Platform overview', 'tag-accent'], ['NEP 2020 · NCF-SE 2023 · CBSE · ICSE · State', 'tag-neutral']],
    h1: 'Concept Clarity in every class.', h1b: 'Outcomes you can see.',
    lede: 'Learniz turns lessons into live experiments and shows principals, in numbers, what every class understood.',
    fine: 'Cloud hosted in India (AWS). Runs on the screens, panels and devices your classrooms already have.',
    art: dashboardPanel({ compact: true, badge: true }), tilt: true
  })}

<!-- Why schools switch (from the previous homepage) -->
<section class="section" aria-labelledby="why-h">
  <div class="container">
    <div class="head">${head({ kicker: 'Competency-Based Learning', h2: 'Competency-Based Learning across every classroom.', lede: 'Most schools run teaching, assessment and reporting as separate tasks on separate tools. Learniz links them, so what happens in class informs what gets tested and what gets reported.' }).replace('class="h2 rv"', 'class="h2 rv" id="why-h"')}</div>
    ${rowsGrid([
      { t: 'Concepts that are hard to visualise are taught as text and diagrams.', b: '<strong>With Learniz:</strong> teacher-controlled interactive animations let the class change a variable and watch what happens. <a href="/features/interactive-animations">Interactive Animations</a>' },
      { t: 'Setting question papers takes evenings and weekends.', b: '<strong>With Learniz:</strong> Assessment in Seconds. Tagged questions by topic, difficulty and format, for teacher review. <a href="/features/intelliq">Question Generator</a>' },
      { t: 'Teaching, testing and tracking live in different tools and registers.', b: '<strong>With Learniz:</strong> content, exams and progress sit in one chapter → topic structure. <a href="/features/lms-exam-builder">LMS &amp; Exam Builder</a>' },
      { t: 'Marks show who scored low, not which concept was misunderstood.', b: '<strong>With Learniz:</strong> Early Gap Detection. Question-level accuracy and time analysis point to the exact gap, weeks before exams. <a href="/features/analytics">Academic Analytics</a>' },
      { t: 'Parents hear about progress at the term-end meeting.', b: '<strong>With Learniz:</strong> Parent Confidence. Continuous progress visibility, in plain language. <a href="/for-parents">For Parents</a>' }
    ], 3)}
  </div>
</section>

<!-- Four modules · sticky scroll -->
<section class="section-bottom section-line" id="modules" aria-labelledby="mod-h">
  <div class="container section-top">
    <span class="kicker rv">System architecture</span>
    <h2 class="h2 rv" id="mod-h" style="--d:.08s;max-width:22ch">Competency-Based Learning: four connected capabilities.</h2>
    <p class="lede rv" style="--d:.16s">Instead of fragmented tools, Learniz connects classroom experiments, question drafting, structured syllabus delivery and Early Gap Detection.</p>
    ${story(MODULES.map(m => ({ ...m, body: `${m.body} <a href="${m.href}" style="white-space:nowrap">${m.link}${icon('arrowRight', 12)}</a>` })), [simPanel({ id: 'platform-sim' }), questionsPanel(), examBuilderPanel(), principalPanel()], { id: 'modules-story' })}
  </div>
</section>

<!-- Policy & curriculum -->
<section class="section section-line" aria-labelledby="policy-h">
  <div class="container two-col two-col-start">
    <div class="head">${head({ kicker: 'Policy & curriculum', h2: 'NCF-SE 2023 Ready: built for experiential learning policy.', lede: 'The National Education Policy shifts focus from rote recall to competency-based experiential learning. Learniz provides the concrete classroom tools required to satisfy these mandates without burdening faculty.' }).replace('class="h2 rv"', 'class="h2 rv" id="policy-h"')}
      <ul class="checks rv" style="--d:.2s">
        <li>${icon('check', 18)}<span><strong>Experiential pedagogy.</strong> Students manipulate physical constants, test hypotheses and deduce scientific laws.</span></li>
        <li>${icon('check', 18)}<span><strong>Continuous formative assessment.</strong> Low-stakes, frequent checks replace intimidating term-end bottlenecks.</span></li>
        <li>${icon('check', 18)}<span><strong>Parent Confidence and transparent reporting.</strong> Parents view subject mastery trajectories rather than arbitrary letter grades.</span></li>
      </ul>
    </div>
    <div class="rv" style="--d:.12s">
      <div class="label" style="margin-bottom:12px">Institutional comparison</div>
      ${rows([
        { n: 'ERP', t: 'Traditional school software / ERP', b: 'Handles administrative fees and attendance. Zero interactive pedagogy. Exams are plain PDFs. Analytics stop at total marks.' },
        { n: 'LZ', t: 'Learniz platform', b: 'Full experiential classroom software. Interactive parameter exploration. Automated question drafting. Question-level learning diagnosis.' }
      ])}
      <div class="actions"><button type="button" class="btn btn-primary" data-open-demo>Book a free demo</button></div>
    </div>
  </div>
</section>

<!-- Infrastructure -->
<section class="section section-line" aria-labelledby="infra-h">
  <div class="container">
    <div class="head">${head({ kicker: 'Enterprise grade', h2: 'Built for uptime, scale and privacy.', lede: 'Designed for multi-campus institutions with strict student data confidentiality and cloud resilience.' }).replace('class="h2 rv"', 'class="h2 rv" id="infra-h"')}</div>
    ${rowsGrid([
      { t: 'Data sovereignty', b: 'All student records, exam submissions and academic evaluations are hosted on secure AWS servers located within India.' },
      { t: 'Multi-campus hierarchy', b: 'Centrally manage branches, trustees, principals, HODs, teachers and student rosters with granular permission controls.' },
      { t: 'Zero hardware lock-in', b: 'Operates on existing smart boards, interactive flat panels, projectors, Windows laptops, Chromebooks and tablets.' },
      { t: 'Local dedicated support', b: 'An onboarding team based in Hyderabad offering direct teacher training, syllabus ingestion and ongoing assistance.' }
    ], 4)}
  </div>
</section>

${cta({ h2: 'Measurable Learning Outcomes for your school.', lede: "A 20-minute walkthrough customised to your school's curriculum, boards and student strength." })}
`;

  return page({
    head: {
      title: 'Competency-Based Learning Platform for Schools | Learniz',
      description: 'Learniz turns lessons into live experiments and shows principals, in numbers, what every class understood. Outcomes you can see.',
      path: '/platform',
      schema
    },
    body,
    activePath: '/platform'
  });
}

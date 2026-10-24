/**
 * Feature — LMS & Exam Builder (/features/lms-exam-builder)
 */
import { page, hero, head, cta, shot, icon } from '../components/layout.js';

function structurePanel() {
  return `
      <div class="panel">
        <div class="panel-head"><strong>Curriculum</strong><span>›</span><span>Class 10 · Science</span><span class="chip chip-neutral end">Chapter → topic</span></div>
        <div class="panel-body" style="gap:4px;font-size:13px">
          <div class="opt" style="border:0;padding-left:0">${icon('stack', 14)}<strong>Chapter 6 · Life Processes</strong></div>
          <div class="opt" style="border:0;padding-left:22px">${icon('caretRight', 12)}${icon('play', 13)}Topic 6.2 · Photosynthesis simulation</div>
          <div class="opt right" style="padding-left:22px">${icon('caretRight', 12)}${icon('fileText', 13)}Topic 6.2 · 10 practice questions · answer keys</div>
          <div class="opt" style="border:0;padding-left:22px">${icon('caretRight', 12)}${icon('fileText', 13)}Topic 6.3 · Respiration · 8 questions</div>
          <div class="opt" style="border:0;padding-left:22px">${icon('caretRight', 12)}${icon('play', 13)}Topic 6.3 · Breathing simulation</div>
        </div>
      </div>`;
}
function settingsPanel() {
  return `
      <div class="panel">
        <div class="panel-head"><strong>Unit Test 3</strong><span>›</span><span>Class 9 · Physics</span><span class="chip end">Board-aligned</span></div>
        <div class="panel-body">
          <div class="form-2" style="gap:8px">
            <div class="opt"><b>${icon('clock', 13)}</b>Timer · 45 minutes</div><div class="opt"><b>−</b>Negative marking · 0.25</div>
            <div class="opt"><b>${icon('check', 13)}</b>Pass mark · 40%</div><div class="opt"><b>${icon('arrowCounterClockwise', 13)}</b>Shuffle · enabled</div>
          </div>
          <div class="bar-stack"><div class="top"><span>Sections</span><span>A · B · C</span></div><div class="bar"><b style="--w:100%"></b></div></div>
          <div class="muted" style="line-height:1.55">Sectional timers, randomised order and pass criteria follow the rules your board requires.</div>
        </div>
      </div>`;
}
function feedbackPanel() {
  return `
      <div class="panel">
        <div class="panel-head"><strong>Live submissions</strong><span>›</span><span>9-B · Unit Test 3</span><span class="chip end">In progress</span></div>
        <div class="panel-body" style="gap:18px">
          <div class="bar-stack"><div class="top"><span>Batch completion</span><span>34 / 34 submitted</span></div><div class="bar"><b style="--w:100%"></b></div></div>
          <div class="bar-stack"><div class="top"><span>Objective questions graded</span><span>Instant</span></div><div class="bar"><b style="--w:100%"></b></div></div>
          <div class="bar-stack"><div class="top"><span>Subjective answers · rubric helper</span><span>12 of 34 reviewed</span></div><div class="bar"><b style="--w:35%"></b></div></div>
          <div class="muted" style="line-height:1.55">Instant score calculation and a formative diagnostic delivered to the teacher, the principal and the parent.</div>
        </div>
      </div>`;
}

export function renderLmsExamBuilderPage() {
  const body = `
${hero({
    tags: [['Formative Assessment, Built In', 'tag-accent'], ['CBSE · ICSE · State', 'tag-neutral']],
    h1: 'Formative Assessment, Built In:', h1b: 'from syllabus to scheduled exam.',
    lede: 'Organise the curriculum in clean chapter → topic hierarchies. Schedule term tests or quick ten-minute formative checks with the exact rules your board requires.',
    actions: `<button type="button" class="btn btn-primary btn-lg" data-open-demo>Book a free demo${icon('arrowRight', 15)}</button><a href="/see-it-live" class="btn btn-ghost btn-lg">Explore the demo gallery</a>`
  })}

<section class="section-bottom" aria-labelledby="s1-h">
  <div class="container two-col two-col-wide">
    <div class="head">${head({ kicker: 'Step 01 · Curriculum structure', h2: 'No scattered drives or loose sheets.', lede: 'Syllabus materials, animations and practice questions are nested logically by chapter and sub-topic, so the simulation and its question set sit side by side.' }).replace('class="h2 rv"', 'class="h2 rv" id="s1-h"')}</div>
    <div class="rv" style="--d:.12s">${structurePanel()}</div>
  </div>
</section>

<section class="section section-line" aria-labelledby="s2-h">
  <div class="container two-col two-col-mirror">
    <div class="rv" style="--d:.12s">${settingsPanel()}</div>
    <div class="head">${head({ kicker: 'Step 02 · Board-aligned setup', h2: 'The rules your board requires, in one screen.', lede: 'Full support for Indian school examination policies: negative marking, passing criteria, question randomisation and sectional timers.' }).replace('class="h2 rv"', 'class="h2 rv" id="s2-h"')}</div>
  </div>
</section>

<section class="section section-line" aria-labelledby="s3-h">
  <div class="container two-col two-col-wide">
    <div class="head">${head({ kicker: 'Step 03 · Real-time feedback', h2: 'Watch submissions as they happen.', lede: 'Objective questions are graded immediately; teachers receive rubric helpers for subjective answers. The diagnostic reaches the principal the same morning.' }).replace('class="h2 rv"', 'class="h2 rv" id="s3-h"')}
      <div class="rv" style="--d:.2s;margin-top:32px;max-width:460px">${shot({ src: '/assets/images/exam-builder-schedule.webp', light: '/assets/images/exam-builder-schedule-light.webp', alt: 'Exam builder scheduling view: Class 9 Physics Unit Test 3 with three sections, 45-minute timer, negative marking 0.25, pass mark 40%, scheduled for Friday 9:40 to 9-A and 9-B', w: 1200, h: 750, caption: 'Exam builder · Scheduling view' })}</div>
    </div>
    <div class="rv" style="--d:.12s">${feedbackPanel()}</div>
  </div>
</section>

${cta({ h2: 'Formative Assessment, Built In. Outcomes you can see.', lede: 'Book a 20-minute live demonstration to see how Learniz turns weekly quizzes into actionable learning diagnostics.', secondary: `<a href="/features/analytics" class="btn btn-ghost btn-lg">Next: Early Gap Detection${icon('arrowRight', 14)}</a>` })}
`;

  return page({
    head: {
      title: 'Formative Assessment, Built In: LMS & Exam Builder | Learniz',
      description: 'Learniz LMS and exam builder gives Indian schools chapter-topic curriculum structures, configurable timers, negative marking, and instant formative feedback.',
      path: '/features/lms-exam-builder'
    },
    body,
    activePath: '/features/lms-exam-builder'
  });
}

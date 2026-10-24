/**
 * See It Live — /see-it-live
 */
import { page, hero, head, cta, simPanel, generatorPanel, shot, icon } from '../components/layout.js';

const VIDEOS = [
  ['Learniz in 90 seconds', 'Platform overview (90 s)', 'From classroom experiment to formative feedback.', '/assets/images/video-poster-overview.png', 'Dashboard with class-wise concept accuracy bars for Classes 6 to 10'],
  ['Teacher lesson workflow', 'Teacher classroom demo', 'How teachers run live experiments on interactive displays.', '/assets/images/video-poster-teacher.jpg', 'A teacher adjusting a simulation slider on a classroom interactive panel'],
  ['Diagnostic analytics', 'Early Gap Detection walkthrough', 'Question-level accuracy heatmaps and remedial focus.', '/assets/images/video-poster-analytics.png', 'Question accuracy heatmap for 25 questions with two outliers below 33% flagged']
];

export function renderSeeItLivePage() {
  const body = `
${hero({
    tags: [['Learning by Doing', 'tag-accent'], ['No login needed', 'tag-neutral']],
    h1: 'Cause-and-Effect Thinking:', h1b: 'test Learniz live in your browser.',
    lede: 'Test the technology directly before booking a demo. Run a live classroom experiment and draft question sets, with no login required.',
    actions: `<a href="#demo-sim" class="btn btn-primary btn-lg">Try the physics experiment${icon('arrowRight', 15)}</a><a href="#demo-generator" class="btn btn-ghost btn-lg">Test the question engine</a>`
  })}

<section class="section-bottom" id="demo-sim" aria-labelledby="sim-h">
  <div class="container two-col two-col-wide">
    <div class="head">
      ${head({ kicker: 'Interactive experiment · 01', h2: 'Helicopter lift and force equilibrium.', lede: 'Class 9 Physics (CBSE and ICSE, Laws of Motion). Adjust rotor speed and helicopter mass to observe force equilibrium unfold live.', note: 'Classroom prompt — ask your students: "If the helicopter has a mass of 1,400 kg, what minimum rotor speed is required to hover?"' }).replace('class="h2 rv"', 'class="h2 rv" id="sim-h"')}
    </div>
    <div class="rv" style="--d:.12s">${simPanel({ full: true, id: 'live-sim' })}</div>
  </div>
</section>

<section class="section section-line" id="demo-generator" aria-labelledby="gen-h">
  <div class="container two-col two-col-mirror two-col-start">
    <div class="rv" style="--d:.12s">${generatorPanel({ id: 'live-gen' })}</div>
    <div class="head">
      ${head({ kicker: 'Assessment in Seconds · 02', h2: 'IntelliQ question engine demo.', lede: 'Draft ten syllabus-aligned questions in about ten seconds across Biology, Physics, Chemistry and Mathematics.', note: 'Pick a subject, type a concept, choose the format, and generate. Every set comes with answer keys and is reviewed by the teacher before it reaches a class.' }).replace('class="h2 rv"', 'class="h2 rv" id="gen-h"')}
    </div>
  </div>
</section>

<section class="section section-line" aria-labelledby="vid-h">
  <div class="container">
    <div class="head">${head({ kicker: 'Classroom sessions', h2: 'See Learniz in real classrooms.' }).replace('class="h2 rv"', 'class="h2 rv" id="vid-h"')}</div>
    <div class="rows-grid cols-3 rv" style="--d:.2s;background:transparent;box-shadow:none;gap:24px">
      ${VIDEOS.map(([k, t, b, src, alt]) => `<div class="row" style="padding:0;box-shadow:none;background:transparent"><div style="width:100%">${shot({ src, alt: `Video poster: ${alt}`, w: 800, h: 450, cls: 'shot-video' }).replace('</div>', `<span class="play" aria-hidden="true">${icon('play', 20)}</span></div>`)}<div class="label" style="margin-top:14px">${k}</div><div class="row-t" style="margin-top:6px">${t}</div><div class="row-b">${b} <span class="fine">Video coming soon.</span></div></div></div>`).join('')}
    </div>
  </div>
</section>

${cta({ lede: "Book a 20-minute live demonstration loaded with interactive experiments for your school's specific syllabus.", secondary: `<a href="/founding-schools" class="btn btn-ghost btn-lg">Founding Schools pilot${icon('arrowRight', 14)}</a>` })}
`;

  return page({
    head: {
      title: 'Learning by Doing: Interactive Classroom Demo | Learniz',
      description: 'Test interactive science simulations and the IntelliQ question engine live in your browser. Open demos with zero login required.',
      path: '/see-it-live'
    },
    body,
    activePath: '/see-it-live'
  });
}

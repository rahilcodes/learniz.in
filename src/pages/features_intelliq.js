/**
 * Feature — Question Generator / IntelliQ (/features/intelliq)
 */
import { page, hero, head, rowsGrid, cta, generatorPanel, icon } from '../components/layout.js';

export function renderIntelliQPage() {
  const body = `
${hero({
    tags: [['Teaching Time Reclaimed', 'tag-accent'], ['Answer keys included', 'tag-neutral']],
    h1: 'Teaching Time Reclaimed', h1b: 'with Assessment in Seconds.',
    lede: "Draft ten syllabus-aligned questions in about ten seconds. Tagged by concept, difficulty and Bloom's taxonomy, with complete answer keys and marking rubrics.",
    actions: `<button type="button" class="btn btn-primary btn-lg" data-open-demo>Book a free demo${icon('arrowRight', 15)}</button><a href="#generator" class="btn btn-ghost btn-lg">Try the generator below</a>`,
    fine: 'Every drafted question is reviewed, edited and approved by the teacher before scheduling.'
  })}

<section class="section-bottom" id="generator" aria-labelledby="gen-h">
  <div class="container two-col two-col-wide two-col-start">
    <div class="head">
      ${head({ kicker: 'Assessment in Seconds', h2: 'Ten questions in ten seconds. Ready for teacher review.', lede: 'Select a subject, enter a concept, and test how the IntelliQ question engine drafts syllabus-aligned question sets in seconds.', note: 'IntelliQ keeps outputs strictly curriculum-aligned. Every drafted question is reviewed, edited and approved by the teacher before it reaches a class.' }).replace('class="h2 rv"', 'class="h2 rv" id="gen-h"')}
    </div>
    <div class="rv" style="--d:.12s">${generatorPanel({ id: 'feature-gen' })}</div>
  </div>
</section>

<section class="section section-line" aria-labelledby="wf-h">
  <div class="container">
    <div class="head">${head({ kicker: 'Teacher workflow', h2: 'Academic rigour without the late-night test prep.' }).replace('class="h2 rv"', 'class="h2 rv" id="wf-h"')}</div>
    ${rowsGrid([
      { t: 'Competency-based questions', b: 'Automatically balances memory recall with the application problems, analytical reasoning and experimental evaluation boards now prioritise.' },
      { t: 'Grounded in textbook truth', b: 'References verified NCERT, CBSE and ICSE curricula. No fictional facts, out-of-scope concepts or hallucinated terms.' },
      { t: 'Teaching Time Reclaimed', b: 'Export directly to editable Word documents, print-ready PDFs with school headers, or schedule straight into weekly assessments.' }
    ], 3)}
  </div>
</section>

${cta({ h2: 'Teaching Time Reclaimed. Outcomes you can see.', lede: "Book a 20-minute live demonstration to test the IntelliQ question engine on your school's current syllabus.", secondary: `<a href="/features/lms-exam-builder" class="btn btn-ghost btn-lg">Next: Formative Assessment, Built In${icon('arrowRight', 14)}</a>` })}
`;

  return page({
    head: {
      title: 'Teaching Time Reclaimed: Assessment in Seconds | Learniz',
      description: "Generate 10 syllabus-aligned questions in 10 seconds. Tagged by topic, difficulty, and Bloom's taxonomy with full answer keys for Indian schools.",
      path: '/features/intelliq'
    },
    body,
    activePath: '/features/intelliq'
  });
}

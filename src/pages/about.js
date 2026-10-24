/**
 * About — /about
 */
import { page, hero, head, rows, rowsGrid, cta, placeholder, icon } from '../components/layout.js';

export function renderAboutPage() {
  const body = `
${hero({
    tags: [['About Learniz', 'tag-accent'], ['Hyderabad, Telangana', 'tag-neutral']],
    h1: 'Every class an experiment, not a lecture.', h1b: 'Outcomes you can see.',
    lede: 'When students test variables and observe cause and effect live, learning moves from transient memorisation to permanent conceptual intuition.',
    actions: `<button type="button" class="btn btn-primary btn-lg" data-open-demo>Book a free demo${icon('arrowRight', 15)}</button><a href="/contact" class="btn btn-ghost btn-lg">Contact details</a>`
  })}

<section class="section-bottom" aria-labelledby="mission-h">
  <div class="container two-col two-col-wide two-col-start">
    <div class="head">
      ${head({ kicker: 'Our mission', h2: 'Every class an experiment, not a lecture.', lede: 'Founded in Hyderabad, Telangana, Learniz was established with a singular conviction: Indian classrooms are full of inquisitive minds whose potential is constrained by 19th-century blackboard lectures.', note: 'With the National Education Policy (NEP 2020) and NCF-SE 2023, Indian schools have a clear mandate to adopt experiential pedagogy. Learniz provides the school-ready platform to make this transition practical for every teacher.' }).replace('class="h2 rv"', 'class="h2 rv" id="mission-h"')}
      <div class="rv" style="--d:.24s;margin-top:36px;max-width:440px">${placeholder('photo — Learniz team / Hyderabad office', '4 / 3', { caption: 'Team photo (to be supplied)' })}</div>
    </div>
    <div class="rv" style="--d:.12s">
      <div class="label" style="margin-bottom:12px">Corporate verification</div>
      ${rows([
        { n: 'LLP', t: 'Tattvatech Edu Solutions LLP', b: 'Operating brand: Learniz. Registered headquarters: Hyderabad, Telangana, India.' },
        { n: 'TEL', t: '+91-9032181083 · info@learniz.in', b: 'Direct contact for institutional queries, demos and onboarding. <a href="/contact">Contact page</a>' },
        { n: 'AWS', t: 'Data and cloud infrastructure', b: '100% hosted within India (AWS Asia Pacific region). Student records belong to the institution and parents.' },
        { n: 'DOC', t: 'Clear terms, in plain language', b: 'Separate, transparent <a href="/privacy">Privacy</a>, <a href="/terms">Terms</a> and <a href="/refund">Refund</a> policies, and a data-handling summary in our <a href="/faq">FAQ</a>.' }
      ])}
    </div>
  </div>
</section>

<section class="section section-line" aria-labelledby="values-h">
  <div class="container">
    <div class="head">${head({ kicker: 'Our core principles', h2: 'What we believe and prioritise.', lede: 'We would rather show you the platform than a wall of claims: verified curriculum alignment, registered Indian corporate governance, and open interactive demos.' }).replace('class="h2 rv"', 'class="h2 rv" id="values-h"')}</div>
    ${rowsGrid([
      { t: 'Concept over memorisation', b: 'A formula memorised without conceptual intuition is forgotten shortly after the exam. Interactive experiments build mental anchors that last.' },
      { t: 'Teaching Time Reclaimed', b: 'Technology must never attempt to replace the teacher. Learniz automates paper-setting and grading drudgery so teachers have time to mentor.' },
      { t: 'Strict data integrity', b: 'Student academic records belong solely to the institution and parents. Hosted strictly in India with zero third-party ads or data sales.' },
      { t: 'A product you can try before you call', b: 'The interactive classroom demonstrations and the live question generator are open on the website. No login, no sales call required. <a href="/see-it-live">See It Live</a>' }
    ], 4)}
  </div>
</section>

${cta({ lede: "Connect with our Hyderabad academic team to see Learniz configured for your school's curriculum." })}
`;

  return page({
    head: {
      title: 'About Learniz | Tattvatech Edu Solutions LLP, Hyderabad',
      description: 'Learniz builds the experiential learning platform for Indian schools. Built in Hyderabad by educators and technologists.',
      path: '/about'
    },
    body,
    activePath: '/about'
  });
}

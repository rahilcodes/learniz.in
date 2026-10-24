/**
 * Feature — Interactive Animations (/features/interactive-animations)
 */
import { page, hero, head, rowsGrid, cta, simPanel, shot, icon } from '../components/layout.js';

const SUBJECTS = [
  { n: 'PHY', t: 'Physics · Mechanics & Optics', b: 'Projectile motion and trajectory vectors · Ray optics and lens refraction · AC and DC circuit currents and resistance · Wave interference and Doppler shift' },
  { n: 'CHE', t: 'Chemistry · Bonding & Reactions', b: '3D atomic orbitals and electron shells · Ionic versus covalent lattice structures · Chemical equilibrium and Le Chatelier · Acid–base titration curves' },
  { n: 'BIO', t: 'Biology · Cellular & Ecology', b: 'Photosynthesis light and dark reactions · DNA replication and transcription · Human cardiovascular flow · Neuron action potentials and synapses' },
  { n: 'MAT', t: 'Mathematics · Geometry & Calculus', b: 'Coordinate geometry conic sections · Derivatives as instantaneous tangents · 3D vectors and spatial planes · Trigonometric unit circles' }
];

export function renderInteractiveAnimationsPage() {
  const body = `
${hero({
    tags: [['Learning by Doing', 'tag-accent'], ['Classes 6 to 12 · Science & Maths', 'tag-neutral']],
    h1: 'Learning by Doing in every science lesson.', h1b: 'Outcomes you can see.',
    lede: 'When students test variables and observe cause and effect live, Concept Clarity replaces rote memory across CBSE, ICSE and State Board classrooms.',
    actions: `<button type="button" class="btn btn-primary btn-lg" data-open-demo>Book a free demo${icon('arrowRight', 15)}</button><a href="/see-it-live" class="btn btn-ghost btn-lg">Explore the demo gallery</a>`,
    fine: 'Runs on the projector, interactive flat panel or smart TV your classroom already has.'
  })}

<section class="section-bottom" aria-labelledby="sim-h">
  <div class="container two-col two-col-wide">
    <div class="head">
      ${head({ kicker: 'Cause-and-Effect Thinking', h2: 'Teacher controls the variables. The class watches the physics unfold.', lede: 'Lift increases with the square of rotor speed. Slide rotor speed or helicopter mass to test force equilibrium in real time.' }).replace('class="h2 rv"', 'class="h2 rv" id="sim-h"')}
      <ul class="checks rv" style="--d:.2s">
        <li>${icon('check', 18)}<span>Runs smoothly on any projector, interactive flat panel or smart TV</span></li>
        <li>${icon('check', 18)}<span>Zero lag: lightweight client-side calculations with force readouts</span></li>
        <li>${icon('check', 18)}<span>Directly aligned with Class 9 Physics (CBSE and ICSE, Laws of Motion)</span></li>
      </ul>
    </div>
    <div class="rv" style="--d:.12s">${simPanel({ full: true, id: 'feature-sim' })}</div>
  </div>
</section>

<section class="section section-line" aria-labelledby="cov-h">
  <div class="container">
    <div class="head">${head({ kicker: 'Comprehensive coverage', h2: 'Concept Clarity mapped to Classes 6 through 12.', lede: 'Curriculum-mapped simulations organised by chapter. Every experiment is designed for a rapid five-minute classroom demonstration.' }).replace('class="h2 rv"', 'class="h2 rv" id="cov-h"')}</div>
    ${rowsGrid(SUBJECTS, 4)}
    <div class="two-col two-col-even" style="margin-top:clamp(40px,5vw,64px)">
      <div class="rv">${shot({ src: '/assets/images/sim-ray-optics.webp', alt: 'Ray optics simulation: a convex lens with three principal rays converging to a real, inverted image; object distance 30 cm, focal length 15 cm', w: 1200, h: 900, caption: 'Ray optics · Convex lens refraction · Physics, Class 10' })}</div>
      <div class="rv" style="--d:.1s">${shot({ src: '/assets/images/sim-photosynthesis.webp', light: '/assets/images/sim-photosynthesis-light.webp', alt: 'Photosynthesis simulation: light-dependent reactions in the thylakoid and the Calvin cycle in the stroma, with light intensity and CO₂ sliders', w: 1200, h: 900, caption: 'Photosynthesis · Light and dark reactions · Biology, Class 10' })}</div>
    </div>
  </div>
</section>

${cta({ lede: "Book a 20-minute live demonstration loaded with interactive experiments for your school's specific syllabus.", secondary: `<a href="/features/intelliq" class="btn btn-ghost btn-lg">Next: Assessment in Seconds${icon('arrowRight', 14)}</a>` })}
`;

  return page({
    head: {
      title: 'Learning by Doing: Interactive Science Experiments | Learniz',
      description: 'Teacher-controlled, curriculum-aligned interactive experiments that turn abstract science lectures into live visual discovery for Indian schools.',
      path: '/features/interactive-animations'
    },
    body,
    activePath: '/features/interactive-animations'
  });
}

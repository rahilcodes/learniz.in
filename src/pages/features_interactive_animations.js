/**
 * Interactive Animations Feature Page
 * URL: /features/interactive-animations
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderInteractiveAnimationsPage() {
  const head = renderHead({
    title: "Learning by Doing: Interactive Science Experiments | Learniz",
    description: "Teacher-controlled, curriculum-aligned interactive experiments that turn abstract science lectures into live visual discovery for Indian schools.",
    path: "/features/interactive-animations"
  });

  const header = renderHeader('/features/interactive-animations');
  const footer = renderFooter();
  const modal = renderBookingModal();
  const whatsapp = renderWhatsAppFloat();

  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body>
${header}

<main id="main-content">
  <!-- Hero Section -->
  <section style="background:radial-gradient(70% 60% at 50% 0%,#EEF4FF 0%,rgba(255,255,255,0) 70%);padding:clamp(48px,7vw,84px) 20px clamp(40px,6vw,64px)">
    <div class="lz-container" style="text-align:center">
      <p class="lz-eyebrow">LEARNING BY DOING</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,56px);margin-top:16px;max-width:880px;margin-left:auto;margin-right:auto">
        Learning by Doing in every science lesson. Outcomes you can see.
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        When students test variables and observe cause and effect live, concept clarity replaces rote memory across CBSE, ICSE, and State Board classrooms.
      </p>
      <div style="margin-top:30px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
        <button type="button" data-open-demo class="lz-btn-primary">Book a free demo</button>
        <a href="/see-it-live" class="lz-btn-outline">
          <img src="/assets/icons/play.svg" alt="" width="16" height="16">
          Explore demo gallery
        </a>
      </div>
    </div>
  </section>

  <!-- Interactive Helicopter Simulation Widget -->
  <section style="padding:clamp(40px,6vw,72px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:48px;align-items:center">
        <div>
          <p class="lz-eyebrow">CAUSE-AND-EFFECT THINKING</p>
          <h2 class="lz-section-title" style="font-size:clamp(26px,3.5vw,38px)">
            Teacher controls the variables. The class watches the physics unfold.
          </h2>
          <p class="lz-section-subtitle">
            Notice how lift increases with the square of rotor speed (\(Lift \\propto RPM^2\)). Slide rotor speed or helicopter mass to test force equilibrium in real time.
          </p>
          <ul style="margin:24px 0 0;padding:0;list-style:none;display:grid;gap:12px;font-size:15px;color:#1F2A3D">
            <li style="display:flex;gap:12px">
              <img src="/assets/icons/check.svg" alt="" width="18" height="18" style="color:#15803D;margin-top:2px">
              Runs smoothly on any projector, interactive flat panel, or smart TV
            </li>
            <li style="display:flex;gap:12px">
              <img src="/assets/icons/check.svg" alt="" width="18" height="18" style="color:#15803D;margin-top:2px">
              Zero lag: lightweight client-side calculations with vector arrows
            </li>
            <li style="display:flex;gap:12px">
              <img src="/assets/icons/check.svg" alt="" width="18" height="18" style="color:#15803D;margin-top:2px">
              Directly aligned with Class 9 Physics (CBSE and ICSE Laws of Motion)
            </li>
          </ul>
        </div>

        <!-- Simulator Embed -->
        <div style="background:#fff;border:1px solid #DCE2EC;border-radius:18px;box-shadow:var(--shadow-md);overflow:hidden">
          <div style="height:46px;border-bottom:1px solid #EEF0F4;display:flex;align-items:center;justify-content:space-between;padding:0 16px;font-size:13px">
            <span style="font-weight:600">Helicopter lift · Forces in equilibrium</span>
            <span style="color:#6B7485;font-size:12px">Class 9 · Physics</span>
          </div>
          <div style="position:relative;height:280px;background:linear-gradient(180deg,#F3F7FF 0%,#FFFFFF 100%);overflow:hidden">
            <div style="position:absolute;left:12px;top:12px;display:flex;gap:6px;flex-wrap:wrap;z-index:2">
              <span id="sim-lift-kn" style="padding:4px 9px;border-radius:7px;background:#fff;border:1px solid #E5E8EF;font-size:11.5px;font-weight:600;color:#1F2A3D">Lift 11.8 kN</span>
              <span id="sim-weight-kn" style="padding:4px 9px;border-radius:7px;background:#fff;border:1px solid #E5E8EF;font-size:11.5px;font-weight:600;color:#1F2A3D">Weight 11.8 kN</span>
              <span id="sim-status" role="status" style="padding:4px 9px;border-radius:7px;background:#EEF4FF;border:1px solid transparent;font-size:11.5px;font-weight:600;color:hsl(217 91% 40%)">Hovering</span>
            </div>
            
            <div id="sim-craft" aria-hidden="true" style="position:absolute;left:50%;bottom:35%;transform:translateX(-50%);width:160px;height:60px;transition:bottom .8s cubic-bezier(.3,.7,.3,1)">
              <span id="sim-rotor" style="position:absolute;left:15px;top:0;width:130px;height:4px;border-radius:2px;background:#1F2A3D;transform-origin:center;animation:lzRotor .28s linear infinite"></span>
              <span style="position:absolute;left:78px;top:3px;width:4px;height:10px;background:#1F2A3D"></span>
              <span style="position:absolute;left:52px;top:12px;width:72px;height:28px;border-radius:16px 16px 12px 12px;background:#0B1324"></span>
              <span style="position:absolute;left:104px;top:18px;width:12px;height:12px;border-radius:50%;background:#BFD7FF"></span>
              <span style="position:absolute;left:4px;top:22px;width:52px;height:6px;border-radius:3px;background:#0B1324"></span>
              <span style="position:absolute;left:4px;top:8px;width:5px;height:20px;border-radius:2px;background:#0B1324"></span>
              <span style="position:absolute;left:56px;top:46px;width:66px;height:3px;border-radius:2px;background:#3F4A5C"></span>
              <span id="sim-arrow-lift" style="position:absolute;left:84px;top:-2px;width:2px;height:50px;background:hsl(217 91% 60%);transform:translateY(-100%);border-radius:1px"></span>
              <span id="sim-arrow-weight" style="position:absolute;left:84px;top:50px;width:2px;height:50px;background:hsl(25 95% 55%);border-radius:1px"></span>
            </div>
            <div style="position:absolute;left:0;right:0;bottom:0;height:12px;background:#DCE3EE"></div>
            <div style="position:absolute;left:12px;bottom:20px;display:flex;gap:12px;font-size:11px;color:#6B7485">
              <span style="display:inline-flex;align-items:center;gap:5px"><span style="width:10px;height:2px;background:hsl(217 91% 60%)"></span>Lift</span>
              <span style="display:inline-flex;align-items:center;gap:5px"><span style="width:10px;height:2px;background:hsl(25 95% 55%)"></span>Weight</span>
            </div>
          </div>

          <div style="padding:16px;display:grid;gap:14px;border-top:1px solid #EEF0F4">
            <label class="lz-label">
              <span style="display:flex;justify-content:space-between">
                <span>Rotor speed</span>
                <span id="sim-rpm-val" style="font-variant-numeric:tabular-nums">400 rpm</span>
              </span>
              <input id="sim-rpm" type="range" min="250" max="600" step="10" value="400" aria-label="Rotor speed in rpm" style="width:100%;margin:0;height:28px;cursor:pointer">
            </label>
            <label class="lz-label">
              <span style="display:flex;justify-content:space-between">
                <span>Helicopter mass</span>
                <span id="sim-mass-val" style="font-variant-numeric:tabular-nums">1,200 kg</span>
              </span>
              <input id="sim-mass" type="range" min="800" max="1600" step="50" value="1200" aria-label="Helicopter mass in kilograms" style="width:100%;margin:0;height:28px;cursor:pointer">
            </label>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
              <p style="font-size:12.5px;color:#6B7485;line-height:1.5;max-width:360px;margin:0">
                Lift grows with the square of rotor speed. Find the speed at which lift balances weight.
              </p>
              <button type="button" id="sim-reset" class="lz-btn-outline lz-btn-sm" style="height:38px;padding:0 14px;font-size:13px">
                <img src="/assets/icons/rotate-ccw.svg" alt="" width="14" height="14">Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Curriculum Subject Coverage Grid -->
  <section style="background:#F6F8FB;padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto">
        <p class="lz-eyebrow">COMPREHENSIVE COVERAGE</p>
        <h2 class="lz-section-title">Concept Clarity mapped to Classes 6 through 12.</h2>
        <p class="lz-section-subtitle">
          Over 350+ curriculum-mapped simulations organized by chapter. Every experiment is designed for rapid 5-minute classroom demonstration.
        </p>
      </div>

      <div style="margin-top:48px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:24px">
        <div class="lz-card">
          <span style="font-size:12px;font-weight:700;color:hsl(217 91% 45%);text-transform:uppercase">Physics</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:10px 0">Mechanics &amp; Optics</h3>
          <ul style="padding:0;margin:0;list-style:none;display:grid;gap:8px;font-size:14px;color:#4B5567">
            <li>• Projectile motion and trajectory vectors</li>
            <li>• Ray optics and lens refraction formulas</li>
            <li>• AC and DC circuit currents and resistance</li>
            <li>• Wave interference and Doppler shift</li>
          </ul>
        </div>

        <div class="lz-card">
          <span style="font-size:12px;font-weight:700;color:hsl(258 90% 55%);text-transform:uppercase">Chemistry</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:10px 0">Bonding &amp; Reactions</h3>
          <ul style="padding:0;margin:0;list-style:none;display:grid;gap:8px;font-size:14px;color:#4B5567">
            <li>• 3D Atomic orbitals and electron shells</li>
            <li>• Ionic versus covalent lattice structures</li>
            <li>• Chemical equilibrium and Le Chatelier</li>
            <li>• Acid-base titration curves</li>
          </ul>
        </div>

        <div class="lz-card">
          <span style="font-size:12px;font-weight:700;color:#15803D;text-transform:uppercase">Biology</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:10px 0">Cellular &amp; Ecology</h3>
          <ul style="padding:0;margin:0;list-style:none;display:grid;gap:8px;font-size:14px;color:#4B5567">
            <li>• Photosynthesis light and dark reactions</li>
            <li>• DNA replication and transcription</li>
            <li>• Human cardiovascular circulatory flow</li>
            <li>• Neuron action potentials and synapses</li>
          </ul>
        </div>

        <div class="lz-card">
          <span style="font-size:12px;font-weight:700;color:hsl(25 95% 48%);text-transform:uppercase">Mathematics</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:20px;font-weight:700;margin:10px 0">Geometry &amp; Calculus</h3>
          <ul style="padding:0;margin:0;list-style:none;display:grid;gap:8px;font-size:14px;color:#4B5567">
            <li>• Coordinate geometry conic sections</li>
            <li>• Derivatives as instantaneous tangents</li>
            <li>• 3D vectors and spatial planes</li>
            <li>• Trigonometric unit circles</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <section style="padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container" style="background:#0B1324;border-radius:24px;padding:clamp(48px,7vw,80px) 24px;color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;margin:0">
        Concept Clarity in every class. Outcomes you can see.
      </h2>
      <p style="font-size:16.5px;color:#C5CCDA;max-width:580px;margin:16px auto 32px">
        Book a 20-minute live demonstration loaded with interactive experiments for your school's specific syllabus.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button type="button" data-open-demo class="lz-btn-primary">Book a free demo</button>
        <a href="/features/intelliq" class="lz-btn-outline" style="background:transparent;border:1px solid rgba(255,255,255,.3);color:#fff">Next: Assessment in Seconds →</a>
      </div>
    </div>
  </section>
</main>

${footer}
${modal}
${whatsapp}

<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

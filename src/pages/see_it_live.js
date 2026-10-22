/**
 * See It Live Page
 * URL: /see-it-live
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderSeeItLivePage() {
  const head = renderHead({
    title: "Learning by Doing: Interactive Classroom Demo | Learniz",
    description: "Test interactive science simulations and the IntelliQ question engine live in your browser. Open demos with zero login required.",
    path: "/see-it-live"
  });

  const header = renderHeader('/see-it-live');
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
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,56px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Cause-and-Effect Thinking: Test Learniz Live in Your Browser.
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        Test the technology directly before booking a demo. Experience live classroom experiments and draft question sets with zero login required.
      </p>
      <div style="margin-top:30px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
        <a href="#demo-heli" class="lz-btn-primary">Try physics experiment</a>
        <a href="#demo-intelliq" class="lz-btn-outline">Test question engine</a>
      </div>
    </div>
  </section>

  <!-- Interactive Demo 1: Helicopter Physics Simulation -->
  <section id="demo-heli" style="padding:clamp(48px,7vw,80px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:48px;align-items:center">
        <div>
          <span style="font-size:12px;font-weight:700;color:hsl(217 91% 45%);text-transform:uppercase">Interactive Experiment · 01</span>
          <h2 class="lz-section-title" style="font-size:clamp(26px,3.5vw,38px);margin-top:10px">
            Helicopter Lift &amp; Force Equilibrium
          </h2>
          <p class="lz-section-subtitle">
            Class 9 Physics (CBSE and ICSE Laws of Motion). Adjust rotor speed and helicopter mass to observe force equilibrium unfold live.
          </p>
          <div style="margin-top:20px;padding:14px;border-radius:10px;background:#F6F8FB;font-size:13.5px;color:#3F4A5C;line-height:1.5">
            <strong>Classroom prompt:</strong> Ask your students: "If the helicopter has a mass of 1,400 kg, what minimum rotor speed is required to hover?"
          </div>
        </div>

        <!-- Simulator Embed -->
        <div style="background:#fff;border:1px solid #DCE2EC;border-radius:18px;box-shadow:var(--shadow-md);overflow:hidden">
          <div style="height:46px;border-bottom:1px solid #EEF0F4;display:flex;align-items:center;justify-content:space-between;padding:0 16px;font-size:13px">
            <span style="font-weight:600">Forces on a Helicopter Simulation</span>
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

  <!-- Interactive Demo 2: IntelliQ Generator -->
  <section id="demo-intelliq" style="background:#F7F6FC;padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto 36px">
        <span style="font-size:12px;font-weight:700;color:hsl(258 90% 50%);text-transform:uppercase">Assessment in Seconds · 02</span>
        <h2 class="lz-section-title" style="font-size:clamp(26px,3.5vw,38px);margin-top:10px">
          IntelliQ Question Engine Demo
        </h2>
        <p class="lz-section-subtitle">
          Draft 10 syllabus-aligned questions in 10 seconds across Biology, Physics, Chemistry, and Mathematics.
        </p>
      </div>

      <div style="background:#fff;border:1px solid #DCE2EC;border-radius:18px;box-shadow:var(--shadow-lg);overflow:hidden;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))">
        <!-- Configuration Controls -->
        <div style="padding:24px;display:grid;gap:16px;align-content:start;background:#FBFBFE;box-shadow:inset -1px 0 0 #EEF0F4">
          <div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:14px">
            <span style="width:28px;height:28px;border-radius:8px;background:hsl(258 90% 66%);display:grid;place-items:center">
              <img src="/assets/icons/sparkles.svg" alt="" width="15" height="15" style="filter:invert(1)">
            </span>
            New question set
          </div>

          <label class="lz-label">
            Subject
            <select id="iq-subject" class="lz-select">
              <option value="Biology">Biology</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </label>

          <label class="lz-label">
            Topic or concept
            <input id="iq-topic" type="text" value="Photosynthesis" class="lz-input">
          </label>

          <div style="display:grid;gap:6px;font-size:12.5px;font-weight:600;color:#3F4A5C">
            <span>Difficulty</span>
            <div role="radiogroup" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;padding:4px;border-radius:10px;background:#EEF0F4">
              <button type="button" data-iq-diff="Easy" style="height:34px;border-radius:7px;border:0;background:transparent;color:#5B6678;font-size:13px;font-weight:600;cursor:pointer">Easy</button>
              <button type="button" data-iq-diff="Medium" style="height:34px;border-radius:7px;border:0;background:#fff;color:#0B1324;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 1px 3px rgba(11,19,36,.12)">Medium</button>
              <button type="button" data-iq-diff="Hard" style="height:34px;border-radius:7px;border:0;background:transparent;color:#5B6678;font-size:13px;font-weight:600;cursor:pointer">Hard</button>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div style="display:grid;gap:6px;font-size:12.5px;font-weight:600;color:#3F4A5C">
              <span>Questions</span>
              <div style="display:flex;align-items:center;border:1px solid #D9DEE7;border-radius:10px;height:42px;overflow:hidden;background:#fff">
                <button type="button" id="iq-count-dec" aria-label="Fewer questions" style="width:40px;height:100%;border:0;background:transparent;font-size:18px;cursor:pointer;color:#3F4A5C">−</button>
                <span id="iq-count-val" style="flex:1;text-align:center;font-size:14px;color:#0B1324;font-variant-numeric:tabular-nums">5</span>
                <button type="button" id="iq-count-inc" aria-label="More questions" style="width:40px;height:100%;border:0;background:transparent;font-size:18px;cursor:pointer;color:#3F4A5C">+</button>
              </div>
            </div>
            <label class="lz-label">
              Type
              <select id="iq-type" class="lz-select">
                <option value="mcq">Multiple choice</option>
                <option value="short">Short answer</option>
                <option value="fill">Fill in the blanks</option>
              </select>
            </label>
          </div>

          <button type="button" id="iq-generate-btn" style="height:46px;border-radius:11px;border:0;background:hsl(258 90% 58%);color:#fff;font-weight:600;font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px">
            Generate questions
          </button>
        </div>

        <!-- Generated Questions View -->
        <div style="padding:24px;display:grid;gap:12px;align-content:start;min-height:440px">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
            <div id="iq-summary" style="font-size:13px;color:#6B7485">
              Showing 3 of 5 multiple-choice questions · Biology · Photosynthesis
            </div>
          </div>

          <div id="iq-results" style="display:grid;gap:10px;animation:lzFade .3s ease-out">
            <!-- Question 1 -->
            <article style="border:1px solid #E5E8EF;border-radius:12px;padding:14px 16px;display:grid;gap:10px;background:#fff">
              <div style="display:flex;gap:12px;align-items:flex-start">
                <span style="font-family:ui-monospace,SFMono-Regular,monospace;font-size:12px;color:#98A1B2;padding-top:3px">01</span>
                <p style="font-size:15px;line-height:1.5;color:#0B1324;font-weight:500;margin:0;flex:1">
                  Which pigment absorbs light energy during photosynthesis?
                </p>
              </div>
              <div class="lz-iq-options-grid">
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #BBE5C8;background:#F2FBF5;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#15803D;color:#fff;flex:none">A</span>
                  Chlorophyll
                </span>
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #E5E8EF;background:#fff;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#EEF0F4;color:#3F4A5C;flex:none">B</span>
                  Haemoglobin
                </span>
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #E5E8EF;background:#fff;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#EEF0F4;color:#3F4A5C;flex:none">C</span>
                  Carotene only
                </span>
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #E5E8EF;background:#fff;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#EEF0F4;color:#3F4A5C;flex:none">D</span>
                  Melanin
                </span>
              </div>
              <div class="lz-iq-tags-row" style="display:flex;flex-wrap:wrap;gap:6px;padding-left:28px;align-items:center">
                <span style="padding:3px 8px;border-radius:6px;background:#F3EFFF;color:hsl(258 90% 48%);font-size:11.5px;font-weight:600">Photosynthesis</span>
                <span style="padding:3px 8px;border-radius:6px;background:#F3F5F9;color:#3F4A5C;font-size:11.5px;font-weight:600">Medium</span>
                <span style="margin-left:auto;font-size:12.5px;font-weight:600;color:hsl(217 91% 45%);cursor:pointer">Edit</span>
              </div>
            </article>

            <!-- Question 2 -->
            <article style="border:1px solid #E5E8EF;border-radius:12px;padding:14px 16px;display:grid;gap:10px;background:#fff">
              <div style="display:flex;gap:12px;align-items:flex-start">
                <span style="font-family:ui-monospace,SFMono-Regular,monospace;font-size:12px;color:#98A1B2;padding-top:3px">02</span>
                <p style="font-size:15px;line-height:1.5;color:#0B1324;font-weight:500;margin:0;flex:1">
                  In which part of the chloroplast do the light-dependent reactions take place?
                </p>
              </div>
              <div class="lz-iq-options-grid">
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #E5E8EF;background:#fff;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#EEF0F4;color:#3F4A5C;flex:none">A</span>
                  Stroma
                </span>
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #BBE5C8;background:#F2FBF5;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#15803D;color:#fff;flex:none">B</span>
                  Thylakoid membranes
                </span>
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #E5E8EF;background:#fff;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#EEF0F4;color:#3F4A5C;flex:none">C</span>
                  Outer membrane
                </span>
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #E5E8EF;background:#fff;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#EEF0F4;color:#3F4A5C;flex:none">D</span>
                  Cytoplasm
                </span>
              </div>
              <div class="lz-iq-tags-row" style="display:flex;flex-wrap:wrap;gap:6px;padding-left:28px;align-items:center">
                <span style="padding:3px 8px;border-radius:6px;background:#F3EFFF;color:hsl(258 90% 48%);font-size:11.5px;font-weight:600">Photosynthesis</span>
                <span style="padding:3px 8px;border-radius:6px;background:#F3F5F9;color:#3F4A5C;font-size:11.5px;font-weight:600">Medium</span>
                <span style="margin-left:auto;font-size:12.5px;font-weight:600;color:hsl(217 91% 45%);cursor:pointer">Edit</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Video Walkthroughs -->
  <section style="padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto 40px">
        <p class="lz-eyebrow">CLASSROOM SESSIONS</p>
        <h2 class="lz-section-title">See Learniz in Real Classrooms</h2>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:24px">
        <div class="lz-card" style="padding:0;overflow:hidden">
          <div data-demo-slot data-demo-type="video" style="height:200px;background:#0B1324;display:grid;place-items:center;color:#fff;cursor:pointer">
            <button type="button" data-load-demo class="lz-btn-dark lz-btn-sm" style="background:rgba(255,255,255,.15);border-radius:999px">
              <img src="/assets/icons/play.svg" width="16" height="16" style="filter:invert(1)" alt="">
              Learniz in 90 Seconds
            </button>
          </div>
          <div style="padding:16px 20px">
            <h3 style="font-family:Figtree,Inter,sans-serif;font-size:17px;font-weight:700;margin:0 0 6px">Platform Overview (90s)</h3>
            <p style="font-size:13.5px;color:#6B7485;margin:0">From classroom experiment to formative feedback.</p>
          </div>
        </div>

        <div class="lz-card" style="padding:0;overflow:hidden">
          <div data-demo-slot data-demo-type="video" style="height:200px;background:#0B1324;display:grid;place-items:center;color:#fff;cursor:pointer">
            <button type="button" data-load-demo class="lz-btn-dark lz-btn-sm" style="background:rgba(255,255,255,.15);border-radius:999px">
              <img src="/assets/icons/play.svg" width="16" height="16" style="filter:invert(1)" alt="">
              Teacher Lesson Workflow
            </button>
          </div>
          <div style="padding:16px 20px">
            <h3 style="font-family:Figtree,Inter,sans-serif;font-size:17px;font-weight:700;margin:0 0 6px">Teacher Classroom Demo</h3>
            <p style="font-size:13.5px;color:#6B7485;margin:0">How teachers run live experiments on interactive displays.</p>
          </div>
        </div>

        <div class="lz-card" style="padding:0;overflow:hidden">
          <div data-demo-slot data-demo-type="video" style="height:200px;background:#0B1324;display:grid;place-items:center;color:#fff;cursor:pointer">
            <button type="button" data-load-demo class="lz-btn-dark lz-btn-sm" style="background:rgba(255,255,255,.15);border-radius:999px">
              <img src="/assets/icons/play.svg" width="16" height="16" style="filter:invert(1)" alt="">
              Diagnostic Analytics
            </button>
          </div>
          <div style="padding:16px 20px">
            <h3 style="font-family:Figtree,Inter,sans-serif;font-size:17px;font-weight:700;margin:0 0 6px">Early Gap Detection Walkthrough</h3>
            <p style="font-size:13.5px;color:#6B7485;margin:0">Question-level accuracy heatmaps and remedial focus.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <section style="padding:0 20px clamp(56px,8vw,96px)">
    <div class="lz-container" style="background:hsl(217 91% 60%);border-radius:24px;padding:clamp(48px,7vw,80px) 24px;color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;margin:0">
        Concept Clarity in every class. Outcomes you can see.
      </h2>
      <p style="font-size:16.5px;color:#EAF1FF;max-width:580px;margin:16px auto 32px">
        Book a 20-minute live demonstration loaded with interactive experiments for your school's specific syllabus.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button type="button" data-open-demo class="lz-btn-outline" style="background:#fff;color:hsl(217 91% 40%);border:0;font-weight:700">Book a free demo</button>
        <a href="/founding-schools" class="lz-btn-outline" style="background:transparent;border:1px solid rgba(255,255,255,.5);color:#fff">Founding Schools Pilot</a>
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

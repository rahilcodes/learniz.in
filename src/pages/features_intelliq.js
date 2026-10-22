/**
 * IntelliQ Feature Page
 * URL: /features/intelliq
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderIntelliQPage() {
  const head = renderHead({
    title: "Teaching Time Reclaimed: Assessment in Seconds | Learniz",
    description: "Generate 10 syllabus-aligned questions in 10 seconds. Tagged by topic, difficulty, and Bloom's taxonomy with full answer keys for Indian schools.",
    path: "/features/intelliq"
  });

  const header = renderHeader('/features/intelliq');
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
  <section style="background:radial-gradient(70% 60% at 50% 0%,#F7F6FC 0%,rgba(255,255,255,0) 70%);padding:clamp(48px,7vw,84px) 20px clamp(40px,6vw,64px)">
    <div class="lz-container" style="text-align:center">
      <p class="lz-eyebrow violet">TEACHING TIME RECLAIMED</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,56px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Teaching Time Reclaimed with Assessment in Seconds.
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        Draft 10 syllabus-aligned questions in 10 seconds. Tagged by concept, difficulty, and Bloom's taxonomy with complete answer keys and marking rubrics.
      </p>
      <div style="margin-top:30px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
        <button type="button" data-open-demo class="lz-btn-primary" style="background:hsl(258 90% 58%)">Book a free demo</button>
        <a href="#intelliq-demo" class="lz-btn-outline">
          Try generator below
        </a>
      </div>
    </div>
  </section>

  <!-- Interactive Live Demo Widget -->
  <section id="intelliq-demo" style="padding:clamp(40px,6vw,72px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto 36px">
        <p class="lz-eyebrow violet">ASSESSMENT IN SECONDS</p>
        <h2 class="lz-section-title" style="font-size:clamp(26px,3.5vw,38px)">10 questions in 10 seconds. Ready for teacher review.</h2>
        <p class="lz-section-subtitle">
          Select a subject, enter a concept, and test how the IntelliQ question engine drafts syllabus-aligned question sets in seconds.
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
          <p style="font-size:12px;line-height:1.5;color:#6B7485;margin:0">
            IntelliQ ensures strictly curriculum-aligned outputs. Every drafted question is reviewed, edited, and approved by the teacher before scheduling.
          </p>
        </div>

        <!-- Generated Questions View -->
        <div style="padding:24px;display:grid;gap:12px;align-content:start;min-height:440px">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
            <div id="iq-summary" style="font-size:13px;color:#6B7485">
              Showing 3 of 5 multiple-choice questions · Biology · Photosynthesis
            </div>
            <div style="display:flex;gap:8px">
              <button type="button" class="lz-btn-outline lz-btn-sm" style="height:34px;padding:0 12px;font-size:12.5px">
                <img src="/assets/icons/download.svg" alt="" width="14" height="14">Export Paper
              </button>
              <button type="button" class="lz-btn-dark lz-btn-sm" style="height:34px;padding:0 12px;font-size:12.5px">
                Add to Exam
              </button>
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
              <div class="lz-iq-options-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:6px;padding-left:28px">
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
              <div class="lz-iq-options-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:6px;padding-left:28px">
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

  <!-- Key Benefits Grid -->
  <section style="background:#F6F8FB;padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container">
      <div style="text-align:center;max-width:700px;margin:0 auto">
        <p class="lz-eyebrow violet">TEACHER WORKFLOW</p>
        <h2 class="lz-section-title">Academic rigor without the late-night test prep.</h2>
      </div>

      <div style="margin-top:48px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:24px">
        <div class="lz-card">
          <img src="/assets/icons/layers.svg" alt="" width="24" height="24" style="color:hsl(258 90% 58%)">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;margin:12px 0 8px">Competency-Based Questions</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Automatically balances memory recall with application problems, analytical reasoning, and experimental evaluation boards now prioritize.
          </p>
        </div>

        <div class="lz-card">
          <img src="/assets/icons/shield-check.svg" alt="" width="24" height="24" style="color:hsl(258 90% 58%)">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;margin:12px 0 8px">Grounded in Textbook Truth</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            References verified NCERT, CBSE, and ICSE curricula. Zero risk of fictional facts, out-of-scope concepts, or hallucinated terms.
          </p>
        </div>

        <div class="lz-card">
          <img src="/assets/icons/download.svg" alt="" width="24" height="24" style="color:hsl(258 90% 58%)">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;margin:12px 0 8px">Teaching Time Reclaimed</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0">
            Export directly to editable Word docs for print tests, print-ready PDFs with school headers, or schedule directly into weekly assessments.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <section style="padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container" style="background:#0B1324;border-radius:24px;padding:clamp(48px,7vw,80px) 24px;color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;margin:0">
        Teaching Time Reclaimed. Outcomes you can see.
      </h2>
      <p style="font-size:16.5px;color:#C5CCDA;max-width:580px;margin:16px auto 32px">
        Book a 20-minute live demonstration to test the IntelliQ question engine on your school's current syllabus.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button type="button" data-open-demo class="lz-btn-primary" style="background:hsl(258 90% 58%)">Book a free demo</button>
        <a href="/features/lms-exam-builder" class="lz-btn-outline" style="background:transparent;border:1px solid rgba(255,255,255,.3);color:#fff">Next: Formative Assessment, Built In →</a>
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

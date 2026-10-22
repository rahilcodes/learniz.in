/**
 * LMS & Exam Builder Feature Page
 * URL: /features/lms-exam-builder
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderLmsExamBuilderPage() {
  const head = renderHead({
    title: "Formative Assessment, Built In: LMS & Exam Builder | Learniz",
    description: "Learniz LMS and exam builder gives Indian schools chapter-topic curriculum structures, configurable timers, negative marking, and instant formative feedback.",
    path: "/features/lms-exam-builder"
  });

  const header = renderHeader('/features/lms-exam-builder');
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
  <section style="background:radial-gradient(70% 60% at 50% 0%,#FFF1E8 0%,rgba(255,255,255,0) 70%);padding:clamp(48px,7vw,84px) 20px clamp(40px,6vw,64px)">
    <div class="lz-container" style="text-align:center">
      <p class="lz-eyebrow orange">FORMATIVE ASSESSMENT, BUILT IN</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,56px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Formative Assessment, Built In: from syllabus to scheduled exam.
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        Organize curriculum in clean Chapter → Topic hierarchies. Schedule term tests or quick 10-minute formative checks with the exact rules your board requires.
      </p>
      <div style="margin-top:30px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
        <button type="button" data-open-demo class="lz-btn-primary" style="background:hsl(25 95% 48%)">Book a free demo</button>
        <a href="/see-it-live" class="lz-btn-outline">
          Explore demo gallery
        </a>
      </div>
    </div>
  </section>

  <!-- Visual Workflow Component -->
  <section style="padding:clamp(40px,6vw,72px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:24px">
        <!-- Content Hierarchy Card -->
        <div class="lz-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
            <span style="width:36px;height:36px;border-radius:10px;background:#EEF4FF;color:hsl(217 91% 50%);display:grid;place-items:center">
              <img src="/assets/icons/book-open.svg" width="18" height="18" alt="">
            </span>
            <h3 style="font-family:Figtree,Inter,sans-serif;font-size:18px;font-weight:700;margin:0">1. Curriculum Structure</h3>
          </div>
          <p style="font-size:14px;color:#4B5567;line-height:1.5;margin-bottom:16px">
            No scattered drives or loose sheets. Syllabus materials, animations, and practice questions are nested logically by chapter and sub-topic.
          </p>
          <div style="padding:12px;border-radius:10px;background:#F6F8FB;font-size:13px;display:grid;gap:6px">
            <div style="font-weight:600;color:#0B1324">📁 Class 10 Science</div>
            <div style="padding-left:14px;color:#3F4A5C">↳ 📁 Chapter 6 · Life Processes</div>
            <div style="padding-left:28px;color:hsl(217 91% 45%);font-weight:500">↳ 📄 Topic 6.2 · Photosynthesis Simulation</div>
            <div style="padding-left:28px;color:#6B7485">↳ 📝 Topic 6.2 · 10 Practice Questions</div>
          </div>
        </div>

        <!-- Exam Configuration Card -->
        <div class="lz-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
            <span style="width:36px;height:36px;border-radius:10px;background:#FFF1E8;color:hsl(25 95% 48%);display:grid;place-items:center">
              <img src="/assets/icons/sliders-horizontal.svg" width="18" height="18" alt="">
            </span>
            <h3 style="font-family:Figtree,Inter,sans-serif;font-size:18px;font-weight:700;margin:0">2. Board-Aligned Setup</h3>
          </div>
          <p style="font-size:14px;color:#4B5567;line-height:1.5;margin-bottom:16px">
            Full support for Indian school examination policies: negative marking, passing criteria, question randomization, and sectional timers.
          </p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12.5px">
            <div style="border:1px solid #E5E8EF;padding:8px 10px;border-radius:8px"><strong>Timer:</strong> 45 Mins</div>
            <div style="border:1px solid #E5E8EF;padding:8px 10px;border-radius:8px"><strong>Negative:</strong> -0.25</div>
            <div style="border:1px solid #E5E8EF;padding:8px 10px;border-radius:8px"><strong>Pass Mark:</strong> 40%</div>
            <div style="border:1px solid #E5E8EF;padding:8px 10px;border-radius:8px"><strong>Shuffle:</strong> Enabled</div>
          </div>
        </div>

        <!-- Evaluation & Progress Card -->
        <div class="lz-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
            <span style="width:36px;height:36px;border-radius:10px;background:#E8F7EE;color:#15803D;display:grid;place-items:center">
              <img src="/assets/icons/file-check-2.svg" width="18" height="18" alt="">
            </span>
            <h3 style="font-family:Figtree,Inter,sans-serif;font-size:18px;font-weight:700;margin:0">3. Real-Time Feedback</h3>
          </div>
          <p style="font-size:14px;color:#4B5567;line-height:1.5;margin-bottom:16px">
            Watch student submissions as they happen. Objective questions are graded immediately; teachers receive rubric helpers for subjective answers.
          </p>
          <div style="display:grid;gap:6px;font-size:12.5px">
            <div style="display:flex;justify-content:space-between"><span>Batch Completion:</span><strong>34 / 34 Submitted</strong></div>
            <div style="height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden">
              <div style="width:100%;height:100%;background:#15803D"></div>
            </div>
            <div style="font-size:11px;color:#6B7485;margin-top:4px">Instant score calculation and formative diagnostic delivered</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Band -->
  <section style="padding:clamp(56px,8vw,96px) 20px">
    <div class="lz-container" style="background:#0B1324;border-radius:24px;padding:clamp(48px,7vw,80px) 24px;color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;margin:0">
        Formative Assessment, Built In. Outcomes you can see.
      </h2>
      <p style="font-size:16.5px;color:#C5CCDA;max-width:580px;margin:16px auto 32px">
        Book a 20-minute live demonstration to see how Learniz turns weekly quizzes into actionable learning diagnostics.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button type="button" data-open-demo class="lz-btn-primary" style="background:hsl(25 95% 48%)">Book a free demo</button>
        <a href="/features/analytics" class="lz-btn-outline" style="background:transparent;border:1px solid rgba(255,255,255,.3);color:#fff">Next: Early Gap Detection →</a>
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

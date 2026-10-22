/**
 * Blog & Resources Index Page
 * URL: /blog
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderBlogPage() {
  const head = renderHead({
    title: "Blog & STEM Resources for Indian Schools | Learniz",
    description: "Insights on NEP 2020 experiential learning mandates, AI question generation, classroom simulations, and modern school leadership strategies.",
    path: "/blog"
  });

  const header = renderHeader('/blog');
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
      <p class="lz-eyebrow">RESOURCES &amp; ARTICLES</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,56px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Pedagogy Insights for Indian School Leaders
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        Practical guides on NEP 2020 implementation, question generation strategies, science classroom simulations, and formative evaluation methods.
      </p>
    </div>
  </section>

  <!-- Blog Listing -->
  <section style="padding:clamp(56px,8vw,96px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:32px">
        <!-- Article 1: Featured -->
        <article class="lz-card" style="display:flex;flex-direction:column;padding:0;overflow:hidden">
          <div style="height:200px;background:#EEF4FF;padding:24px;display:flex;flex-direction:column;justify-content:space-between">
            <span style="display:inline-block;padding:4px 10px;border-radius:6px;background:hsl(217 91% 60%);color:#fff;font-size:11.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;align-self:flex-start">
              NEP 2020 Guide
            </span>
            <div style="font-family:Figtree,Inter,sans-serif;font-size:22px;font-weight:700;color:#0B1324;line-height:1.25">
              What Experiential Learning Means Under NEP 2020 (and How to Start)
            </div>
          </div>
          <div style="padding:24px;display:flex;flex-direction:column;flex:1">
            <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0 0 16px">
              A practical blueprint for school principals and trustees transitioning traditional lecture formats into active classroom inquiry.
            </p>
            <div style="margin-top:auto;display:flex;align-items:center;justify-content:space-between;font-size:13px;color:#6B7485">
              <span>By Learniz Academic Team · 7 min read</span>
              <a href="/blog/what-experiential-learning-means-under-nep-2020" style="font-weight:600;color:hsl(217 91% 45%)">Read article →</a>
            </div>
          </div>
        </article>

        <!-- Article 2 -->
        <article class="lz-card" style="display:flex;flex-direction:column;padding:0;overflow:hidden">
          <div style="height:200px;background:#F3EFFF;padding:24px;display:flex;flex-direction:column;justify-content:space-between">
            <span style="display:inline-block;padding:4px 10px;border-radius:6px;background:hsl(258 90% 58%);color:#fff;font-size:11.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;align-self:flex-start">
              Teacher Productivity
            </span>
            <div style="font-family:Figtree,Inter,sans-serif;font-size:22px;font-weight:700;color:#0B1324;line-height:1.25">
              Teaching Time Reclaimed: Assessment in Seconds for Teachers
            </div>
          </div>
          <div style="padding:24px;display:flex;flex-direction:column;flex:1">
            <p style="font-size:14.5px;line-height:1.55;color:#4B5567;margin:0 0 16px">
              Why manual paper drafting drains teacher hours, and how syllabus-grounded question drafting preserves academic rigor.
            </p>
            <div style="margin-top:auto;display:flex;align-items:center;justify-content:space-between;font-size:13px;color:#6B7485">
              <span>By Learniz Academic Team · 6 min read</span>
              <a href="/blog/how-ai-question-generators-save-teachers-5-hours-a-week" style="font-weight:600;color:hsl(258 90% 50%)">Read article →</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Newsletter / Updates Band -->
  <section style="padding:0 20px clamp(56px,8vw,96px)">
    <div class="lz-container" style="background:#0B1324;border-radius:24px;padding:clamp(48px,7vw,80px) 24px;color:#fff;text-align:center">
      <h2 style="font-family:Figtree,Inter,sans-serif;font-size:clamp(28px,4vw,44px);font-weight:800;margin:0">
        Concept Clarity in every class. Outcomes you can see.
      </h2>
      <p style="font-size:16.5px;color:#C5CCDA;max-width:580px;margin:16px auto 32px">
        Have questions about bringing experiential learning to your school? Schedule a 20-minute live demonstration.
      </p>
      <button type="button" data-open-demo class="lz-btn-primary">Book a free demo</button>
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

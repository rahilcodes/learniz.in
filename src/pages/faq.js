/**
 * Comprehensive FAQ Page
 * URL: /faq
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderFaqPage() {
  const faqs = [
    // Category: Pricing & Pilots
    {
      cat: "pricing",
      q: "What does Learniz cost, and how does licensing work?",
      a: "Learniz is priced on a transparent, affordable annual per-student or per-school tier. There are zero hidden implementation charges, server fees, or per-feature add-ons. During our Founding Schools Programme, ten selected schools receive a 100% free 30-day pilot and permanently locked founding rates."
    },
    {
      cat: "pricing",
      q: "What is included in the 30-day free pilot?",
      a: "The free pilot gives your school unrestricted access to all 350+ interactive experiments, the IntelliQ question engine, the complete LMS and exam builder, and student performance analytics for all registered teachers and students."
    },
    {
      cat: "pricing",
      q: "What happens at the end of the free pilot?",
      a: "At the end of the 30 days, your school leadership can choose to continue on our locked founding-tier rate, or simply conclude the pilot. There is zero automatic billing, credit card requirement, or lock-in contract."
    },

    // Category: Boards & Curricula
    {
      cat: "boards",
      q: "Which educational boards and curricula are supported?",
      a: "Learniz is natively mapped to CBSE, ICSE, and Indian State Board standards for Classes 6 through 12 across Physics, Chemistry, Biology, and Mathematics. All learning objectives conform to the National Curriculum Framework for School Education (NCF-SE 2023)."
    },
    {
      cat: "boards",
      q: "How does Learniz fulfill the NEP 2020 experiential learning mandate?",
      a: "NEP 2020 mandates active, discovery-based inquiry over rote memory. Learniz provides teacher-controlled interactive simulations where students directly manipulate parameters (such as rotor speeds, focal lengths, and reagent quantities) to deduce scientific principles firsthand."
    },
    {
      cat: "boards",
      q: "Can teachers align Learniz with our school's specific term syllabus?",
      a: "Yes. Our chapter and topic library allows departments to reorder modules, create custom lesson pathways, and map tests directly to your school's specific periodic assessment timetable."
    },

    // Category: Setup & Onboarding
    {
      cat: "setup",
      q: "How long does institutional onboarding and setup take?",
      a: "A standard school onboarding takes less than 48 hours. Our Hyderabad team ingests student rosters, sets up faculty accounts, and organizes classes so teachers can begin projecting experiments immediately."
    },
    {
      cat: "setup",
      q: "Does Learniz provide teacher training?",
      a: "Yes. Every onboarding includes dedicated, hands-on training sessions for STEM teachers (conducted in-person in Hyderabad/Telangana or via interactive video calls) covering simulation projection, question generation, and analytics review."
    },
    {
      cat: "setup",
      q: "Do teachers need to prepare lesson materials before class?",
      a: "No preparation is required. Simulations load instantly in any web browser and come with ready-made guided inquiry prompts and check-in quiz questions."
    },

    // Category: Devices & Hardware
    {
      cat: "devices",
      q: "What hardware is required in classrooms to run Learniz?",
      a: "Learniz requires no proprietary hardware. It runs smoothly on any existing smart board, interactive flat panel (IFP), projector connected to a computer, Windows laptop, Chromebook, Android tablet, or iPad."
    },
    {
      cat: "devices",
      q: "Can students access Learniz from home or on smartphones?",
      a: "Yes. Learniz is fully responsive and mobile-optimized. Students can access practice quizzes, review simulation replays, and check their progress from any smartphone or tablet."
    },
    {
      cat: "devices",
      q: "What internet bandwidth is required in the classroom?",
      a: "Learniz is built with ultra-lightweight vector rendering. Simulations consume minimal bandwidth (< 50 KB initial payload) and continue running smoothly even on modest classroom connections."
    },

    // Category: IntelliQ & Exams
    {
      cat: "intelliq",
      q: "Does the question engine create out-of-syllabus questions?",
      a: "No. Unlike consumer AI chatbots, the IntelliQ question engine is strictly bounded by authorized NCERT and board syllabi. Every question generated corresponds to specific chapter topics and difficulty benchmarks, and is reviewed and approved by the teacher before scheduling."
    },
    {
      cat: "intelliq",
      q: "Can we print question papers generated by Learniz?",
      a: "Yes. Teachers can export generated question papers and answer keys directly to formatted Word (.docx) documents with school headers, or download print-ready PDFs."
    },
    {
      cat: "intelliq",
      q: "What exam formats does the Exam Builder support?",
      a: "The Exam Builder supports multiple-choice questions (MCQs), assertion-reasoning, short answer (2-3 marks), long descriptive questions, fill-in-the-blanks, sectional countdown timers, negative marking (-0.25, -0.5), and question shuffling."
    },

    // Category: Data Security & Privacy
    {
      cat: "security",
      q: "Where is school and student data hosted?",
      a: "100% of student records, exam submissions, and school data are hosted on secure AWS cloud servers located in India in compliance with Indian data sovereignty laws."
    },
    {
      cat: "security",
      q: "Do you sell student data or display advertisements?",
      a: "Never. Learniz does not display ads, monetize student information, or share records with third parties. School data remains the exclusive property of the institution."
    },
    {
      cat: "security",
      q: "Who is the registered legal entity behind Learniz?",
      a: "Learniz is designed, owned, and operated by Tattvatech Edu Solutions LLP, an educational technology enterprise headquartered in Hyderabad, Telangana."
    }
  ];

  // Schema generation
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const head = renderHead({
    title: "Frequently Asked Questions (FAQ) | Learniz",
    description: "Got questions about Learniz? Read practical answers on pricing, NEP 2020 alignment, classroom smart boards, question generation, and data security.",
    path: "/faq",
    schema: faqSchema
  });

  const header = renderHeader('/faq');
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
      <p class="lz-eyebrow">FOUNDATIONAL CONCEPTUAL STRENGTH</p>
      <h1 class="lz-section-title" style="font-size:clamp(34px,5.5vw,56px);margin-top:16px;max-width:920px;margin-left:auto;margin-right:auto">
        Foundational Conceptual Strength: Practical Answers Before You Book
      </h1>
      <p class="lz-section-subtitle" style="max-width:680px;margin-left:auto;margin-right:auto">
        Everything school owners, principals, and teachers need to know regarding pricing, devices, board curricula, teacher onboarding, and data privacy.
      </p>

      <!-- Live Search Box -->
      <div style="margin-top:32px;max-width:540px;margin-left:auto;margin-right:auto;position:relative">
        <input id="faq-search-input" type="text" placeholder="Search any question (e.g. pricing, boards, devices, pilot)…" class="lz-input" style="height:50px;padding-left:42px;border-radius:12px;font-size:15px;box-shadow:var(--shadow-sm)">
        <img src="/assets/icons/search.svg" alt="" width="18" height="18" style="position:absolute;left:14px;top:16px;opacity:.5">
      </div>
    </div>
  </section>

  <!-- Category Filter Tabs & FAQ List -->
  <section style="padding:clamp(40px,6vw,80px) 20px;border-top:1px solid #EEF0F4">
    <div class="lz-container" style="max-width:880px">
      <!-- Category Tabs -->
      <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:36px">
        <button type="button" data-faq-cat="all" class="lz-btn-outline lz-btn-sm active" style="font-size:13.5px">All Questions</button>
        <button type="button" data-faq-cat="pricing" class="lz-btn-outline lz-btn-sm" style="font-size:13.5px">Pricing &amp; Pilots</button>
        <button type="button" data-faq-cat="boards" class="lz-btn-outline lz-btn-sm" style="font-size:13.5px">Boards &amp; Curricula</button>
        <button type="button" data-faq-cat="setup" class="lz-btn-outline lz-btn-sm" style="font-size:13.5px">Setup &amp; Training</button>
        <button type="button" data-faq-cat="devices" class="lz-btn-outline lz-btn-sm" style="font-size:13.5px">Hardware &amp; Devices</button>
        <button type="button" data-faq-cat="intelliq" class="lz-btn-outline lz-btn-sm" style="font-size:13.5px">IntelliQ &amp; Exams</button>
        <button type="button" data-faq-cat="security" class="lz-btn-outline lz-btn-sm" style="font-size:13.5px">Data Security</button>
      </div>

      <!-- FAQ Accordion -->
      <div style="border-top:1px solid #E5E8EF">
        ${faqs.map((f, i) => `
        <div class="lz-faq-item" data-cat="${f.cat}">
          <h3>
            <button type="button" aria-expanded="false" class="lz-faq-btn">
              <span>${f.q}</span>
              <img src="/assets/icons/plus.svg" alt="" width="18" height="18">
            </button>
          </h3>
          <div class="lz-faq-answer">
            ${f.a}
          </div>
        </div>
        `).join('')}
      </div>

      <!-- Additional Question Help Strip -->
      <div style="margin-top:48px;padding:24px;border-radius:16px;background:#F6F8FB;border:1px solid #E5E8EF;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between">
        <div>
          <h4 style="font-family:Figtree,Inter,sans-serif;font-size:17px;font-weight:700;margin:0 0 4px">Have a question not listed here?</h4>
          <p style="font-size:14px;color:#6B7485;margin:0">Speak directly with our academic team in Hyderabad.</p>
        </div>
        <div style="display:flex;gap:10px">
          <a href="https://wa.me/919032181083?text=Hi%2C%20I%20have%20a%20question%20about%20Learniz" target="_blank" rel="noopener" class="lz-btn-dark lz-btn-sm">
            <img src="/assets/icons/message-circle.svg" alt="" width="16" height="16" style="filter:invert(1)">Ask on WhatsApp
          </a>
          <button type="button" data-open-demo class="lz-btn-primary lz-btn-sm">Book a free demo</button>
        </div>
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

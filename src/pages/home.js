/**
 * Homepage Template
 * Faithful reproduction of Claude Design home.dc.html
 */

import { renderHeader } from '../components/Header.js';
import { renderFooter } from '../components/Footer.js';
import { renderBookingModal } from '../components/BookingModal.js';
import { renderWhatsAppFloat } from '../components/WhatsAppFloat.js';
import { renderHead } from '../components/SEOHead.js';

export function renderHomePage() {
  const head = renderHead({
    title: "Concept Clarity in Every Class. Outcomes You Can See | Learniz",
    description: "Learniz turns lessons into live experiments and shows principals, in numbers, what every class understood. Book a free demo.",
    path: "/"
  });

  const header = renderHeader('/');
  const footer = renderFooter();
  const modal = renderBookingModal();
  const whatsapp = renderWhatsAppFloat();
  const waHref = "https://wa.me/919032181083?text=" + encodeURIComponent("Hi, I'd like to book a free Learniz demo for my school.");

  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body>
${header}

<main id="main-content">
  <!-- SECTION 1: HERO (Redesigned Premium Showcase) -->
  <section data-screen-label="Hero" aria-labelledby="h1" class="lz-hero-section">
    <!-- Ambient Gradients -->
    <div class="lz-hero-ambient-blob lz-hero-blob-left" aria-hidden="true"></div>
    <div class="lz-hero-ambient-blob lz-hero-blob-right" aria-hidden="true"></div>

    <!-- Decorative Dot Grids -->
    <div class="lz-hero-dot-grid lz-hero-dots-top" aria-hidden="true">
      <svg width="90" height="54" viewBox="0 0 90 54" fill="none">
        <pattern id="dotPatternTop" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="2.2" fill="#93C5FD" opacity="0.65"/>
        </pattern>
        <rect width="90" height="54" fill="url(#dotPatternTop)"/>
      </svg>
    </div>

    <div class="lz-hero-dot-grid lz-hero-dots-left" aria-hidden="true">
      <svg width="108" height="108" viewBox="0 0 108 108" fill="none">
        <pattern id="dotPatternLeft" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="2.2" fill="#93C5FD" opacity="0.65"/>
        </pattern>
        <rect width="108" height="108" fill="url(#dotPatternLeft)"/>
      </svg>
    </div>

    <div class="lz-hero-dot-grid lz-hero-dots-right" aria-hidden="true">
      <svg width="108" height="108" viewBox="0 0 108 108" fill="none">
        <pattern id="dotPatternRight" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="2.2" fill="#93C5FD" opacity="0.65"/>
        </pattern>
        <rect width="108" height="108" fill="url(#dotPatternRight)"/>
      </svg>
    </div>

    <!-- Hero Header & Value Proposition -->
    <div class="lz-hero-content">
      <h1 id="h1" class="lz-hero-heading">
        Concept Clarity in every class. <span class="lz-hero-heading-blue">Outcomes you can see.</span>
      </h1>
      <p class="lz-hero-description">
        Learniz turns lessons into interactive experiments and shows principals, in numbers, what every class understood.
      </p>

      <!-- CTA Buttons -->
      <div class="lz-hero-cta-group">
        <button type="button" data-open-demo class="lz-hero-btn-primary">
          <span>Book a free demo</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        <a href="/see-it-live" class="lz-hero-btn-secondary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>See It Live</span>
        </a>
      </div>

      <!-- Trust Indicators -->
      <div class="lz-hero-trust-row">
        <div class="lz-hero-trust-item">
          <svg class="lz-hero-trust-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
          </svg>
          <span>Built for Indian schools</span>
        </div>
        <span class="lz-hero-trust-sep" aria-hidden="true"></span>
        <div class="lz-hero-trust-item">
          <svg class="lz-hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Aligned with NEP 2020</span>
        </div>
        <span class="lz-hero-trust-sep" aria-hidden="true"></span>
        <div class="lz-hero-trust-item">
          <svg class="lz-hero-trust-icon" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.5 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00-.063-.098.75.75 0 00.063.098c5.499-1.415 9.563-6.406 9.563-12.348 0-1.352-.272-2.64-.76-3.81a.75.75 0 00-.722-.516l-.105.002a11.209 11.209 0 01-7.523-3.254zm3.014 6.86a.75.75 0 00-1.06-1.06L10.5 11.94 8.53 9.97a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5.5-5.5z" clip-rule="evenodd"/>
          </svg>
          <span>NCF 2023 compliant</span>
        </div>
      </div>
    </div>

    <!-- MAIN PRODUCT DASHBOARD MOCKUP WITH FLOATING CARDS -->
    <div class="lz-hero-showcase-wrapper">
      <!-- Floating Card 1: Topic Mastery (Upper-Right) -->
      <div class="lz-floating-card-topic" aria-hidden="true">
        <!-- Radiating Sparkle Accent Above -->
        <div style="position: absolute; right: -8px; top: -14px;" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round">
            <line x1="12" y1="2" x2="12" y2="7"/>
            <line x1="19" y1="5" x2="15" y2="9"/>
            <line x1="22" y1="12" x2="17" y2="12"/>
          </svg>
        </div>

        <!-- Card Content -->
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 11px;">
          <svg style="width: 16px; height: 16px; color: #2563EB;" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="12" width="4" height="9" rx="1.5"/>
            <rect x="10" y="7" width="4" height="14" rx="1.5"/>
            <rect x="17" y="3" width="4" height="18" rx="1.5"/>
          </svg>
          <span style="font-size: 12.5px; font-weight: 700; color: #0F172A;">Topic Mastery · 9-B</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 11.5px;">
            <span style="width: 54px; color: #475569; font-weight: 500;">Forces</span>
            <div style="flex: 1; height: 7px; background: #EEF2F6; border-radius: 4px; overflow: hidden;">
              <div style="width: 82%; height: 100%; background: #3B82F6; border-radius: 4px;"></div>
            </div>
            <span style="width: 28px; text-align: right; font-weight: 700; color: #0F172A;">82%</span>
          </div>

          <div style="display: flex; align-items: center; gap: 8px; font-size: 11.5px;">
            <span style="width: 54px; color: #475569; font-weight: 500;">Motion</span>
            <div style="flex: 1; height: 7px; background: #EEF2F6; border-radius: 4px; overflow: hidden;">
              <div style="width: 67%; height: 100%; background: #3B82F6; border-radius: 4px;"></div>
            </div>
            <span style="width: 28px; text-align: right; font-weight: 700; color: #0F172A;">67%</span>
          </div>

          <div style="display: flex; align-items: center; gap: 8px; font-size: 11.5px;">
            <span style="width: 54px; color: #475569; font-weight: 500;">Pressure</span>
            <div style="flex: 1; height: 7px; background: #EEF2F6; border-radius: 4px; overflow: hidden;">
              <div style="width: 48%; height: 100%; background: #F59E0B; border-radius: 4px;"></div>
            </div>
            <span style="width: 28px; text-align: right; font-weight: 700; color: #0F172A;">48%</span>
          </div>
        </div>

        <!-- Curved Blue Arrow Below -->
        <div style="position: absolute; right: -28px; bottom: -82px;" aria-hidden="true">
          <svg width="40" height="85" viewBox="0 0 40 85" fill="none">
            <path d="M 32 4 C 36 32, 24 58, 6 68" stroke="#2563EB" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M 16 58 L 4 69 L 14 78" stroke="#2563EB" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Floating Card 2: Student Understanding (Bottom-Left) -->
      <div class="lz-floating-card-student" aria-hidden="true">
        <!-- Radiating Sparkle Accent Left -->
        <div style="position: absolute; left: -18px; top: -6px;" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round">
            <line x1="2" y1="12" x2="7" y2="12"/>
            <line x1="5" y1="5" x2="9" y2="9"/>
            <line x1="12" y1="2" x2="12" y2="7"/>
          </svg>
        </div>

        <div style="width: 42px; height: 42px; border-radius: 12px; background: #10B981; display: flex; align-items: center; justify-content: center; flex: none; color: #FFFFFF;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
        </div>
        <div>
          <div style="font-size: 12px; font-weight: 700; color: #0F172A; line-height: 1.2;">Student Understanding</div>
          <div style="font-family: var(--font-heading); font-size: 25px; font-weight: 800; color: #0F172A; line-height: 1.1; margin: 2px 0 1px;">+74%</div>
          <div style="font-size: 11px; color: #64748B; line-height: 1.25;">average improvement in assessments</div>
        </div>
      </div>

      <!-- Main Browser Frame Mockup (Static Product Preview) -->
      <div class="lz-hero-browser-mockup" aria-label="Learniz platform interface preview showing helicopter physics simulation and AI insights">
        <!-- Browser Top Bar -->
        <div class="lz-browser-topbar">
          <div class="lz-browser-dots" aria-hidden="true">
            <span class="lz-browser-dot lz-browser-dot-red"></span>
            <span class="lz-browser-dot lz-browser-dot-yellow"></span>
            <span class="lz-browser-dot lz-browser-dot-green"></span>
          </div>
          <div class="lz-browser-breadcrumb">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <span>Academiz</span>
            <span>›</span>
            <span>Class 9-B</span>
            <span>›</span>
            <span>Physics</span>
            <span>›</span>
            <span class="lz-browser-breadcrumb-active">Forces on a helicopter</span>
          </div>
        </div>

        <!-- Browser Body: Dark Navy Sidebar + Canvas -->
        <div class="lz-browser-body">
          <!-- Sidebar -->
          <div class="lz-browser-sidebar">
            <div class="lz-browser-sidebar-logo">
              <div class="lz-browser-logo-mark">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #FFFFFF; transform: translate(2px, -2px);"></span>
                <span style="position: absolute; left: 5px; bottom: 5px; width: 6px; height: 6px; border-radius: 50%; background: #F59E0B;"></span>
              </div>
              <span class="lz-browser-logo-text">Learniz</span>
            </div>

            <!-- Navigation Items -->
            <div class="lz-sidebar-nav-item lz-sidebar-nav-active">
              <svg class="lz-sidebar-icon" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                <rect x="14" y="14" width="7" height="7" rx="1.5"/>
                <rect x="3" y="14" width="7" height="7" rx="1.5"/>
              </svg>
              <span>Dashboard</span>
            </div>

            <div class="lz-sidebar-nav-item">
              <svg class="lz-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Classes</span>
            </div>

            <div class="lz-sidebar-nav-item">
              <svg class="lz-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 2v7.31L4.62 17.6A2 2 0 0 0 6.23 20.6h11.54a2 2 0 0 0 1.61-3l-5.38-8.29V2z"/>
              </svg>
              <span>Experiments</span>
            </div>

            <div class="lz-sidebar-nav-item">
              <svg class="lz-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <path d="M9 15l2 2 4-4"/>
              </svg>
              <span>Assessments</span>
            </div>

            <div class="lz-sidebar-nav-item">
              <svg class="lz-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
              <span>Reports</span>
            </div>

            <div class="lz-sidebar-nav-item">
              <svg class="lz-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <span>Library</span>
            </div>

            <div class="lz-sidebar-nav-item">
              <svg class="lz-sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
              <span>Settings</span>
            </div>
          </div>

          <!-- Main Canvas Area -->
          <div class="lz-browser-canvas">
            <!-- Left ~60%: Helicopter Simulation Viewport -->
            <div class="lz-canvas-sim-col">
              <div class="lz-sim-viewport-box">
                <img
                  src="/assets/images/hero-helicopter-sim-sharp.png"
                  alt="Helicopter physics simulation showing aerodynamic forces: Lift 11.9 kN, Weight 11.8 kN, Drag and Thrust while hovering"
                  width="704"
                  height="506"
                  loading="eager"
                  fetchpriority="high"
                >
              </div>
            </div>

            <!-- Right ~40%: Learning Insights & AI Explanation Cards -->
            <div class="lz-canvas-insights-col">
              <!-- Card 1: Learning Insights -->
              <div class="lz-insights-card">
                <div style="font-size: 13px; font-weight: 700; color: #0F172A; margin-bottom: 12px;">Learning Insights</div>

                <!-- Concept Mastery -->
                <div style="margin-bottom: 11px;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px;">
                    <div style="display: flex; align-items: center; gap: 7px;">
                      <span style="width: 22px; height: 22px; border-radius: 5px; background: #EFF6FF; display: inline-flex; align-items: center; justify-content: center; color: #2563EB;">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="3" y="12" width="4" height="9" rx="1"/>
                          <rect x="10" y="7" width="4" height="14" rx="1"/>
                          <rect x="17" y="3" width="4" height="18" rx="1"/>
                        </svg>
                      </span>
                      <span style="font-size: 12px; font-weight: 600; color: #1E293B;">Concept Mastery</span>
                    </div>
                    <span style="font-size: 12px; font-weight: 700; color: #0F172A;">82%</span>
                  </div>
                  <div style="height: 7px; background: #EEF2F6; border-radius: 4px; overflow: hidden;">
                    <div style="width: 82%; height: 100%; background: #2563EB; border-radius: 4px;"></div>
                  </div>
                </div>

                <!-- Student Engagement -->
                <div style="margin-bottom: 11px;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px;">
                    <div style="display: flex; align-items: center; gap: 7px;">
                      <span style="width: 22px; height: 22px; border-radius: 5px; background: #ECFDF5; display: inline-flex; align-items: center; justify-content: center; color: #10B981;">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                          <circle cx="8.5" cy="7" r="4"/>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                      </span>
                      <span style="font-size: 12px; font-weight: 600; color: #1E293B;">Student Engagement</span>
                    </div>
                    <span style="font-size: 12px; font-weight: 700; color: #0F172A;">67%</span>
                  </div>
                  <div style="height: 7px; background: #EEF2F6; border-radius: 4px; overflow: hidden;">
                    <div style="width: 67%; height: 100%; background: #10B981; border-radius: 4px;"></div>
                  </div>
                </div>

                <!-- Assessment Accuracy -->
                <div>
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px;">
                    <div style="display: flex; align-items: center; gap: 7px;">
                      <span style="width: 22px; height: 22px; border-radius: 5px; background: #FFFBEB; display: inline-flex; align-items: center; justify-content: center; color: #F59E0B;">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8" fill="#FDE68A"/>
                        </svg>
                      </span>
                      <span style="font-size: 12px; font-weight: 600; color: #1E293B;">Assessment Accuracy</span>
                    </div>
                    <span style="font-size: 12px; font-weight: 700; color: #0F172A;">48%</span>
                  </div>
                  <div style="height: 7px; background: #EEF2F6; border-radius: 4px; overflow: hidden;">
                    <div style="width: 48%; height: 100%; background: #F59E0B; border-radius: 4px;"></div>
                  </div>
                </div>
              </div>

              <!-- Card 2: AI Explanation [BETA] -->
              <div class="lz-insights-card">
                <div style="display: flex; align-items: center; gap: 7px; margin-bottom: 7px;">
                  <span style="font-size: 13px; font-weight: 700; color: #0F172A;">AI Explanation</span>
                  <span style="background: #F3E8FF; color: #7E22CE; font-size: 9.5px; font-weight: 700; padding: 2px 6px; border-radius: 4px; letter-spacing: 0.04em;">BETA</span>
                </div>
                <p style="margin: 0 0 9px; font-size: 11.5px; line-height: 1.42; color: #334155; font-weight: 500;">
                  If rotor speed increases while mass stays constant, what happens to the net force on the helicopter?
                </p>
                <div style="background: #ECFDF5; border: 1px solid #D1FAE5; border-radius: 8px; padding: 9px 11px; display: flex; gap: 8px; align-items: flex-start;">
                  <svg style="width: 15px; height: 15px; color: #10B981; flex: none; margin-top: 2px;" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <div style="font-size: 11.8px; font-weight: 700; color: #065F46; line-height: 1.3;">It increases upward</div>
                    <div style="font-size: 11px; color: #047857; margin-top: 2px; line-height: 1.38;">Higher rotor speed increases lift, so the net force becomes upward.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 2: WHY LEARNIZ -->
  <section data-screen-label="Why Learniz" aria-labelledby="h-why" style="border-top:1px solid #EEF0F4">
    <div style="max-width:1200px;margin:0 auto;padding:clamp(56px,8vw,96px) 20px">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:24px 48px;align-items:end">
        <div>
          <p class="lz-eyebrow">02 — WHY LEARNIZ</p>
          <h2 id="h-why" class="lz-section-title">Competency-Based Learning across every classroom.</h2>
        </div>
        <p class="lz-section-subtitle" style="max-width:520px">
          Most schools run teaching, assessment and reporting as separate tasks on separate tools. Learniz links them, so what happens in class informs what gets tested and what gets reported.
        </p>
      </div>

      <div style="margin-top:48px;border-top:1px solid #E5E8EF">
        <!-- Problem 1 -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px 40px;padding:26px 0;border-bottom:1px solid #E5E8EF;align-items:start">
          <div style="display:flex;gap:16px">
            <span style="font-family:ui-monospace,SFMono-Regular,monospace;font-size:12px;color:#98A1B2;padding-top:4px;flex:none;width:24px">01</span>
            <div>
              <div style="font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#98A1B2">The problem</div>
              <p style="margin-top:6px;font-size:17px;font-weight:600;line-height:1.4;color:#0B1324;margin-bottom:0">Concepts that are hard to visualise are taught as text and diagrams.</p>
            </div>
          </div>
          <div style="display:flex;gap:16px">
            <img src="/assets/icons/corner-down-right.svg" alt="" width="18" height="18" style="opacity:.4;margin-top:4px">
            <div>
              <div style="font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:hsl(217 91% 45%)">With Learniz</div>
              <p style="margin-top:6px;font-size:15.5px;line-height:1.55;color:#3F4A5C;margin-bottom:0">
                Teacher-controlled interactive animations let the class change a variable and watch what happens.
                <a href="/features/interactive-animations" style="font-weight:600;display:inline-block">Interactive Animations →</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Problem 2 -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px 40px;padding:26px 0;border-bottom:1px solid #E5E8EF;align-items:start">
          <div style="display:flex;gap:16px">
            <span style="font-family:ui-monospace,SFMono-Regular,monospace;font-size:12px;color:#98A1B2;padding-top:4px;flex:none;width:24px">02</span>
            <div>
              <div style="font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#98A1B2">The problem</div>
              <p style="margin-top:6px;font-size:17px;font-weight:600;line-height:1.4;color:#0B1324;margin-bottom:0">Setting question papers takes evenings and weekends.</p>
            </div>
          </div>
          <div style="display:flex;gap:16px">
            <img src="/assets/icons/corner-down-right.svg" alt="" width="18" height="18" style="opacity:.4;margin-top:4px">
            <div>
              <div style="font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:hsl(217 91% 45%)">With Learniz</div>
              <p style="margin-top:6px;font-size:15.5px;line-height:1.55;color:#3F4A5C;margin-bottom:0">
                Assessment in Seconds: generate tagged questions by topic, difficulty and format for teacher review.
                <a href="/features/intelliq" style="font-weight:600;display:inline-block">Question Generator →</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Problem 3 -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px 40px;padding:26px 0;border-bottom:1px solid #E5E8EF;align-items:start">
          <div style="display:flex;gap:16px">
            <span style="font-family:ui-monospace,SFMono-Regular,monospace;font-size:12px;color:#98A1B2;padding-top:4px;flex:none;width:24px">03</span>
            <div>
              <div style="font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#98A1B2">The problem</div>
              <p style="margin-top:6px;font-size:17px;font-weight:600;line-height:1.4;color:#0B1324;margin-bottom:0">Teaching, testing and tracking live in different tools and registers.</p>
            </div>
          </div>
          <div style="display:flex;gap:16px">
            <img src="/assets/icons/corner-down-right.svg" alt="" width="18" height="18" style="opacity:.4;margin-top:4px">
            <div>
              <div style="font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:hsl(217 91% 45%)">With Learniz</div>
              <p style="margin-top:6px;font-size:15.5px;line-height:1.55;color:#3F4A5C;margin-bottom:0">
                Content, exams and progress sit in one unified chapter → topic structure.
                <a href="/features/lms-exam-builder" style="font-weight:600;display:inline-block">LMS &amp; Exam Builder →</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Problem 4 -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px 40px;padding:26px 0;border-bottom:1px solid #E5E8EF;align-items:start">
          <div style="display:flex;gap:16px">
            <span style="font-family:ui-monospace,SFMono-Regular,monospace;font-size:12px;color:#98A1B2;padding-top:4px;flex:none;width:24px">04</span>
            <div>
              <div style="font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#98A1B2">The problem</div>
              <p style="margin-top:6px;font-size:17px;font-weight:600;line-height:1.4;color:#0B1324;margin-bottom:0">Marks show who scored low, not which concept was misunderstood.</p>
            </div>
          </div>
          <div style="display:flex;gap:16px">
            <img src="/assets/icons/corner-down-right.svg" alt="" width="18" height="18" style="opacity:.4;margin-top:4px">
            <div>
              <div style="font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:hsl(217 91% 45%)">With Learniz</div>
              <p style="margin-top:6px;font-size:15.5px;line-height:1.55;color:#3F4A5C;margin-bottom:0">
                Early Gap Detection: question-level accuracy and time analysis point to the exact gap, weeks before exams.
                <a href="/features/analytics" style="font-weight:600;display:inline-block">Academic Analytics →</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Problem 5 -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px 40px;padding:26px 0;border-bottom:1px solid #E5E8EF;align-items:start">
          <div style="display:flex;gap:16px">
            <span style="font-family:ui-monospace,SFMono-Regular,monospace;font-size:12px;color:#98A1B2;padding-top:4px;flex:none;width:24px">05</span>
            <div>
              <div style="font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#98A1B2">The problem</div>
              <p style="margin-top:6px;font-size:17px;font-weight:600;line-height:1.4;color:#0B1324;margin-bottom:0">Parents hear about progress at the term-end meeting.</p>
            </div>
          </div>
          <div style="display:flex;gap:16px">
            <img src="/assets/icons/corner-down-right.svg" alt="" width="18" height="18" style="opacity:.4;margin-top:4px">
            <div>
              <div style="font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:hsl(217 91% 45%)">With Learniz</div>
              <p style="margin-top:6px;font-size:15.5px;line-height:1.55;color:#3F4A5C;margin-bottom:0">
                Parent Confidence: continuous progress visibility and updates, in plain language.
                <a href="/for-parents" style="font-weight:600;display:inline-block">For Parents →</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 3: AUDIENCES -->
  <section data-screen-label="Audiences" aria-labelledby="h-who" style="background:#F6F8FB">
    <div style="max-width:1200px;margin:0 auto;padding:clamp(56px,8vw,96px) 20px">
      <p class="lz-eyebrow">03 — WHO IT SERVES</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:16px 48px;align-items:end;margin-top:14px">
        <h2 id="h-who" class="lz-section-title">Visible Understanding from four points of view.</h2>
        <p class="lz-section-subtitle" style="max-width:520px">
          The same lesson, test and result look different to a principal, a teacher, a student and a parent. Learniz gives each of them the view they need.
        </p>
      </div>

      <div style="margin-top:40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:16px">
        <!-- Card 1: Institutions -->
        <a href="/for-institutions" class="lz-card lz-card-hover" style="display:flex;flex-direction:column;color:#0B1324">
          <span style="width:44px;height:44px;border-radius:12px;background:#0B1324;display:grid;place-items:center">
            <img src="/assets/icons/building-2.svg" alt="" width="20" height="20" style="filter:invert(1)">
          </span>
          <h3 style="margin-top:18px;font-family:Figtree,Inter,sans-serif;font-size:22px;font-weight:700;letter-spacing:-.02em;margin-bottom:0">Institutions</h3>
          <p style="margin-top:8px;font-size:14.5px;line-height:1.55;color:#3F4A5C;margin-bottom:0">
            Academic oversight across sections and campuses, with the visibility to act before results day.
          </p>
          <ul style="margin:16px 0 0;padding:0;list-style:none;display:grid;gap:8px;font-size:14px;color:#1F2A3D">
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">Multi-campus, cloud-hosted
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">Early detection of learning gaps
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">Implementation support
            </li>
          </ul>
          <span style="margin-top:auto;padding-top:22px;font-size:14px;font-weight:600;color:hsl(217 91% 45%);display:inline-flex;align-items:center;gap:6px">
            For institutions <img src="/assets/icons/arrow-right.svg" alt="" width="15" height="15">
          </span>
        </a>

        <!-- Card 2: Teachers -->
        <a href="/for-teachers" class="lz-card lz-card-hover" style="display:flex;flex-direction:column;color:#0B1324">
          <span style="width:44px;height:44px;border-radius:12px;background:hsl(217 91% 55%);display:grid;place-items:center">
            <img src="/assets/icons/graduation-cap.svg" alt="" width="20" height="20" style="filter:invert(1)">
          </span>
          <h3 style="margin-top:18px;font-family:Figtree,Inter,sans-serif;font-size:22px;font-weight:700;letter-spacing:-.02em;margin-bottom:0">Teachers</h3>
          <p style="margin-top:8px;font-size:14.5px;line-height:1.55;color:#3F4A5C;margin-bottom:0">
            Explain with interactive animations, draft assessments in seconds, and see progress without extra paperwork.
          </p>
          <ul style="margin:16px 0 0;padding:0;list-style:none;display:grid;gap:8px;font-size:14px;color:#1F2A3D">
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">Live classroom animations
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">AI-assisted question drafting
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">Automatic progress views
            </li>
          </ul>
          <span style="margin-top:auto;padding-top:22px;font-size:14px;font-weight:600;color:hsl(217 91% 45%);display:inline-flex;align-items:center;gap:6px">
            For teachers <img src="/assets/icons/arrow-right.svg" alt="" width="15" height="15">
          </span>
        </a>

        <!-- Card 3: Students -->
        <a href="/for-students" class="lz-card lz-card-hover" style="display:flex;flex-direction:column;color:#0B1324">
          <span style="width:44px;height:44px;border-radius:12px;background:hsl(258 90% 60%);display:grid;place-items:center">
            <img src="/assets/icons/flask-conical.svg" alt="" width="20" height="20" style="filter:invert(1)">
          </span>
          <h3 style="margin-top:18px;font-family:Figtree,Inter,sans-serif;font-size:22px;font-weight:700;letter-spacing:-.02em;margin-bottom:0">Students</h3>
          <p style="margin-top:8px;font-size:14.5px;line-height:1.55;color:#3F4A5C;margin-bottom:0">
            Explore concepts by changing them, practise with instant feedback and see what to work on next.
          </p>
          <ul style="margin:16px 0 0;padding:0;list-style:none;display:grid;gap:8px;font-size:14px;color:#1F2A3D">
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">Interactive exploration
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">Instant feedback on practice
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">Personal progress tracking
            </li>
          </ul>
          <span style="margin-top:auto;padding-top:22px;font-size:14px;font-weight:600;color:hsl(217 91% 45%);display:inline-flex;align-items:center;gap:6px">
            For students <img src="/assets/icons/arrow-right.svg" alt="" width="15" height="15">
          </span>
        </a>

        <!-- Card 4: Parents -->
        <a href="/for-parents" class="lz-card lz-card-hover" style="display:flex;flex-direction:column;color:#0B1324">
          <span style="width:44px;height:44px;border-radius:12px;background:hsl(25 95% 55%);display:grid;place-items:center">
            <img src="/assets/icons/heart-handshake.svg" alt="" width="20" height="20" style="filter:invert(1)">
          </span>
          <h3 style="margin-top:18px;font-family:Figtree,Inter,sans-serif;font-size:22px;font-weight:700;letter-spacing:-.02em;margin-bottom:0">Parents</h3>
          <p style="margin-top:8px;font-size:14.5px;line-height:1.55;color:#3F4A5C;margin-bottom:0">
            Know how your child is doing between report cards, with updates and the academic calendar in one place.
          </p>
          <ul style="margin:16px 0 0;padding:0;list-style:none;display:grid;gap:8px;font-size:14px;color:#1F2A3D">
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">Progress visibility
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">Academic updates
            </li>
            <li style="display:flex;gap:10px;align-items:flex-start">
              <img src="/assets/icons/check.svg" alt="" width="16" height="16" style="margin-top:2px;opacity:.7">Direct communication
            </li>
          </ul>
          <span style="margin-top:auto;padding-top:22px;font-size:14px;font-weight:600;color:hsl(217 91% 45%);display:inline-flex;align-items:center;gap:6px">
            For parents <img src="/assets/icons/arrow-right.svg" alt="" width="15" height="15">
          </span>
        </a>
      </div>
    </div>
  </section>

  <!-- SECTION 4: INTERACTIVE ANIMATIONS -->
  <section id="interactive-sim" data-screen-label="Interactive animations" aria-labelledby="h-anim">
    <div style="max-width:1200px;margin:0 auto;padding:clamp(56px,8vw,96px) 20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:40px 56px;align-items:center">
      <div style="max-width:480px">
        <p class="lz-eyebrow">04 — INTERACTIVE ANIMATIONS</p>
        <h2 id="h-anim" class="lz-section-title">Learning by Doing that builds Scientific Temper.</h2>
        <p class="lz-section-subtitle">
          Teacher-controlled animations turn hard-to-visualise topics into something the class can adjust and observe. Change a parameter, watch the outcome, ask why.
        </p>
        <ul style="margin:22px 0 0;padding:0;list-style:none;display:grid;gap:12px;font-size:15px;color:#1F2A3D">
          <li style="display:flex;gap:12px">
            <img src="/assets/icons/sliders-horizontal.svg" alt="" width="18" height="18" style="margin-top:2px;flex:none">
            Teacher controls the parameters live on the classroom screen
          </li>
          <li style="display:flex;gap:12px">
            <img src="/assets/icons/book-open.svg" alt="" width="18" height="18" style="margin-top:2px;flex:none">
            Curriculum-aligned to the chapter and topic being taught
          </li>
          <li style="display:flex;gap:12px">
            <img src="/assets/icons/play.svg" alt="" width="18" height="18" style="margin-top:2px;flex:none">
            12 live demonstrations available to try on the See It Live page
          </li>
        </ul>
        <div style="margin-top:28px;display:flex;flex-wrap:wrap;gap:12px">
          <a href="/features/interactive-animations" class="lz-btn-dark lz-btn-sm" style="height:46px;padding:0 20px">Explore Features</a>
          <a href="/see-it-live" class="lz-btn-outline lz-btn-sm" style="height:46px;padding:0 20px">See It Live</a>
        </div>
      </div>

      <!-- Live Interactive Helicopter Simulator -->
      <div style="background:#fff;border:1px solid #DCE2EC;border-radius:18px;box-shadow:0 30px 60px -36px rgba(11,19,36,.3);overflow:hidden">
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
          
          <!-- Animated Helicopter Craft -->
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

        <!-- Simulator Controls -->
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
        <div style="padding:10px 16px;background:#F6F8FB;border-top:1px solid #EEF0F4;font-size:11.5px;color:#6B7485;font-family:ui-monospace,SFMono-Regular,monospace">
          Interactive classroom simulation engine · Aligned with Class 9 Physics
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 5: INTELLIQ -->
  <section id="intelliq-demo" data-screen-label="IntelliQ" aria-labelledby="h-iq" style="background:#F7F6FC">
    <div style="max-width:1200px;margin:0 auto;padding:clamp(56px,8vw,96px) 20px">
      <div style="max-width:720px">
        <p class="lz-eyebrow violet">05 — QUESTION GENERATOR</p>
        <h2 id="h-iq" class="lz-section-title">Teaching Time Reclaimed with Assessment in Seconds.</h2>
        <p class="lz-section-subtitle">
          Teachers set the topic, difficulty, format and count. Learniz drafts tagged questions in seconds, which can then be edited, added to an exam or exported.
        </p>
      </div>

      <div style="margin-top:40px;background:#fff;border:1px solid #DCE2EC;border-radius:18px;box-shadow:0 30px 60px -36px rgba(11,19,36,.3);overflow:hidden;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))">
        <!-- Configuration Form Panel -->
        <div style="padding:22px;display:grid;gap:16px;align-content:start;background:#FBFBFE;box-shadow:inset -1px 0 0 #EEF0F4">
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

          <button type="button" id="iq-generate-btn" style="height:46px;border-radius:11px;border:0;background:hsl(258 90% 58%);color:#fff;font-weight:600;font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;transition:background .15s">
            Generate questions
          </button>
          <p style="font-size:12px;line-height:1.5;color:#6B7485;margin:0">
            Questions are drafts. Teachers review and edit before use; auto-tagging by topic and difficulty helps filing and reuse.
          </p>
        </div>

        <!-- Generated Questions Output Display -->
        <div style="padding:22px;display:grid;gap:12px;align-content:start;min-height:420px">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
            <div id="iq-summary" style="font-size:13px;color:#6B7485">
              Showing 3 of 5 multiple-choice questions · Biology · Photosynthesis
            </div>
            <div style="display:flex;gap:8px">
              <button type="button" class="lz-btn-outline lz-btn-sm" style="height:34px;padding:0 12px;font-size:12.5px">
                <img src="/assets/icons/download.svg" alt="" width="14" height="14">Export
              </button>
              <button type="button" class="lz-btn-dark lz-btn-sm" style="height:34px;padding:0 12px;font-size:12.5px">
                Add to exam
              </button>
            </div>
          </div>

          <!-- Dynamic Questions List -->
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

            <!-- Question 3 -->
            <article style="border:1px solid #E5E8EF;border-radius:12px;padding:14px 16px;display:grid;gap:10px;background:#fff">
              <div style="display:flex;gap:12px;align-items:flex-start">
                <span style="font-family:ui-monospace,SFMono-Regular,monospace;font-size:12px;color:#98A1B2;padding-top:3px">03</span>
                <p style="font-size:15px;line-height:1.5;color:#0B1324;font-weight:500;margin:0;flex:1">
                  Which gas is released as a by-product of photosynthesis?
                </p>
              </div>
              <div class="lz-iq-options-grid">
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #E5E8EF;background:#fff;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#EEF0F4;color:#3F4A5C;flex:none">A</span>
                  Carbon dioxide
                </span>
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #E5E8EF;background:#fff;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#EEF0F4;color:#3F4A5C;flex:none">B</span>
                  Nitrogen
                </span>
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #BBE5C8;background:#F2FBF5;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#15803D;color:#fff;flex:none">C</span>
                  Oxygen
                </span>
                <span style="display:flex;gap:8px;align-items:center;padding:7px 10px;border-radius:8px;border:1px solid #E5E8EF;background:#fff;font-size:13.5px;color:#1F2A3D">
                  <span style="width:20px;height:20px;border-radius:6px;display:grid;place-items:center;font-size:11px;font-weight:700;background:#EEF0F4;color:#3F4A5C;flex:none">D</span>
                  Hydrogen
                </span>
              </div>
              <div class="lz-iq-tags-row" style="display:flex;flex-wrap:wrap;gap:6px;padding-left:28px;align-items:center">
                <span style="padding:3px 8px;border-radius:6px;background:#F3EFFF;color:hsl(258 90% 48%);font-size:11.5px;font-weight:600">Photosynthesis</span>
                <span style="padding:3px 8px;border-radius:6px;background:#F3F5F9;color:#3F4A5C;font-size:11.5px;font-weight:600">Medium</span>
                <span style="margin-left:auto;font-size:12.5px;font-weight:600;color:hsl(217 91% 45%);cursor:pointer">Edit</span>
              </div>
            </article>
          </div>

          <div style="margin-top:4px;display:flex;justify-content:center">
            <a href="/features/intelliq" style="font-size:14px;font-weight:600;display:inline-flex;align-items:center;gap:6px">
              How question generation works <img src="/assets/icons/arrow-right.svg" alt="" width="15" height="15">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 6: LMS AND EXAMS -->
  <section data-screen-label="LMS and exams" aria-labelledby="h-lms">
    <div style="max-width:1200px;margin:0 auto;padding:clamp(56px,8vw,96px) 20px">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:16px 48px;align-items:end">
        <div>
          <p class="lz-eyebrow orange">06 — LMS &amp; EXAM BUILDER</p>
          <h2 id="h-lms" class="lz-section-title">Formative Assessment, Built In: from syllabus to scheduled exam.</h2>
        </div>
        <p class="lz-section-subtitle" style="max-width:520px">
          Content lives in a chapter → topic structure. Exams draw from it, with the formats, timers and marking rules the school already uses.
        </p>
      </div>

      <div style="margin-top:40px;display:flex;flex-wrap:wrap;gap:16px">
        <!-- Content Library Column -->
        <div style="flex:1 1 min(100%,300px);min-width:0;background:#fff;border:1px solid #DCE2EC;border-radius:16px;overflow:hidden;box-shadow:0 20px 40px -32px rgba(11,19,36,.3)">
          <div style="height:46px;border-bottom:1px solid #EEF0F4;display:flex;align-items:center;justify-content:space-between;padding:0 16px;font-size:13px">
            <span style="font-weight:600">Content library</span>
            <span style="color:#6B7485;font-size:12px">Class 10 · Science</span>
          </div>
          <div style="padding:10px 12px;display:grid;gap:2px;font-size:13.5px">
            <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;color:#0B1324;font-weight:600">
              <img src="/assets/icons/chevron-down.svg" alt="" width="14" height="14" style="opacity:.5">
              Chapter 6 · Life processes
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:8px 10px 8px 24px;border-radius:8px;color:#0B1324;font-weight:600;background:#F6F8FB">
              <img src="/assets/icons/chevron-down.svg" alt="" width="14" height="14" style="opacity:.5">
              Topic 6.2 · Photosynthesis
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:7px 10px 7px clamp(16px,4vw,36px);color:#3F4A5C">
              <img src="/assets/icons/atom.svg" alt="" width="14" height="14">
              Animation · Light intensity vs rate
              <span style="margin-left:auto;font-size:11px;padding:2px 6px;border-radius:5px;background:#EEF4FF;color:hsl(217 91% 40%);font-weight:600">Interactive</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:7px 10px 7px clamp(16px,4vw,36px);color:#3F4A5C">
              <img src="/assets/icons/file-text.svg" alt="" width="14" height="14">
              Notes · Light and dark reactions
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:7px 10px 7px clamp(16px,4vw,36px);color:#3F4A5C">
              <img src="/assets/icons/sparkles.svg" alt="" width="14" height="14">
              Question bank · 24 tagged questions
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:7px 10px 7px clamp(16px,4vw,36px);color:#3F4A5C">
              <img src="/assets/icons/file-check-2.svg" alt="" width="14" height="14">
              Practice quiz · 10 questions
              <span style="margin-left:auto;font-size:11px;color:#6B7485">28 / 34 done</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:8px 10px 8px 24px;border-radius:8px;color:#0B1324;font-weight:600">
              <img src="/assets/icons/chevron-right.svg" alt="" width="14" height="14" style="opacity:.5">
              Topic 6.3 · Respiration
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;color:#0B1324;font-weight:600">
              <img src="/assets/icons/chevron-right.svg" alt="" width="14" height="14" style="opacity:.5">
              Chapter 7 · Control and coordination
            </div>
          </div>
        </div>

        <!-- Exam Settings Column -->
        <div style="flex:1 1 min(100%,300px);min-width:0;background:#fff;border:1px solid #DCE2EC;border-radius:16px;overflow:hidden;box-shadow:0 20px 40px -32px rgba(11,19,36,.3)">
          <div style="height:46px;border-bottom:1px solid #EEF0F4;display:flex;align-items:center;justify-content:space-between;padding:0 16px;font-size:13px">
            <span style="font-weight:600">Exam settings</span>
            <span style="padding:3px 8px;border-radius:6px;background:#FFF1E8;color:hsl(25 95% 40%);font-size:11px;font-weight:600">Draft</span>
          </div>
          <div style="padding:16px;display:grid;gap:14px;font-size:13.5px">
            <div>
              <div style="font-size:12px;color:#6B7485;font-weight:600;margin-bottom:6px">Exam</div>
              <div style="font-weight:600">Unit Test 2 · Life processes</div>
            </div>
            <div>
              <div style="font-size:12px;color:#6B7485;font-weight:600;margin-bottom:6px">Format</div>
              <div style="display:flex;flex-wrap:wrap;gap:6px">
                <span style="padding:5px 10px;border-radius:7px;background:#0B1324;color:#fff;font-size:12.5px;font-weight:600">Mixed</span>
                <span style="padding:5px 10px;border-radius:7px;border:1px solid #D9DEE7;font-size:12.5px;font-weight:500;color:#3F4A5C">MCQ only</span>
                <span style="padding:5px 10px;border-radius:7px;border:1px solid #D9DEE7;font-size:12.5px;font-weight:500;color:#3F4A5C">Descriptive</span>
                <span style="padding:5px 10px;border-radius:7px;border:1px solid #D9DEE7;font-size:12.5px;font-weight:500;color:#3F4A5C">Practice</span>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              <div style="border:1px solid #E5E8EF;border-radius:10px;padding:10px 12px;display:flex;align-items:center;justify-content:space-between">
                <span style="display:flex;align-items:center;gap:8px;color:#3F4A5C"><img src="/assets/icons/timer.svg" alt="" width="15" height="15">Timer</span>
                <strong>45 min</strong>
              </div>
              <div style="border:1px solid #E5E8EF;border-radius:10px;padding:10px 12px;display:flex;align-items:center;justify-content:space-between">
                <span style="display:flex;align-items:center;gap:8px;color:#3F4A5C"><img src="/assets/icons/circle-minus.svg" alt="" width="15" height="15">Negative</span>
                <strong>−0.25</strong>
              </div>
              <div style="border:1px solid #E5E8EF;border-radius:10px;padding:10px 12px;display:flex;align-items:center;justify-content:space-between">
                <span style="display:flex;align-items:center;gap:8px;color:#3F4A5C"><img src="/assets/icons/target.svg" alt="" width="15" height="15">Pass mark</span>
                <strong>40%</strong>
              </div>
              <div style="border:1px solid #E5E8EF;border-radius:10px;padding:10px 12px;display:flex;align-items:center;justify-content:space-between">
                <span style="display:flex;align-items:center;gap:8px;color:#3F4A5C"><img src="/assets/icons/shuffle.svg" alt="" width="15" height="15">Shuffle</span>
                <strong>On</strong>
              </div>
            </div>
            <div>
              <div style="font-size:12px;color:#6B7485;font-weight:600;margin-bottom:6px">Questions · 25 marks</div>
              <div style="display:flex;gap:4px;height:10px;border-radius:5px;overflow:hidden">
                <span style="flex:10;background:hsl(217 91% 60%)"></span>
                <span style="flex:8;background:hsl(258 90% 66%)"></span>
                <span style="flex:7;background:hsl(25 95% 63%)"></span>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:8px;font-size:12px;color:#3F4A5C">
                <span><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:hsl(217 91% 60%);margin-right:6px"></span>10 MCQ</span>
                <span><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:hsl(258 90% 66%);margin-right:6px"></span>4 short</span>
                <span><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:hsl(25 95% 63%);margin-right:6px"></span>1 long</span>
              </div>
            </div>
            <button type="button" tabindex="-1" style="height:40px;border-radius:9px;border:0;background:#0B1324;color:#fff;font-size:13.5px;font-weight:600;cursor:pointer">Schedule for 9-B · Fri 10:30</button>
          </div>
        </div>

        <!-- Student Progress Column -->
        <div style="flex:1 1 300px;min-width:0;background:#fff;border:1px solid #DCE2EC;border-radius:16px;overflow:hidden;box-shadow:0 20px 40px -32px rgba(11,19,36,.3)">
          <div style="height:46px;border-bottom:1px solid #EEF0F4;display:flex;align-items:center;justify-content:space-between;padding:0 16px;font-size:13px">
            <span style="font-weight:600">Progress · Topic 6.2</span>
            <span style="color:#6B7485;font-size:12px">34 students</span>
          </div>
          <div style="padding:12px 16px;display:grid;gap:4px">
            <div style="display:grid;grid-template-columns:1fr auto;gap:4px 12px;align-items:center;padding:7px 0;border-bottom:1px solid #F3F5F9;font-size:13px">
              <span style="font-weight:500;color:#0B1324">Ananya S.</span><span style="font-size:12px;color:#15803D;font-weight:600">Completed</span>
              <span style="grid-column:1 / -1;height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden"><span style="display:block;height:100%;width:100%;background:#15803D"></span></span>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;gap:4px 12px;align-items:center;padding:7px 0;border-bottom:1px solid #F3F5F9;font-size:13px">
              <span style="font-weight:500;color:#0B1324">Rohan K.</span><span style="font-size:12px;color:#3F4A5C;font-weight:600">Quiz pending</span>
              <span style="grid-column:1 / -1;height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden"><span style="display:block;height:100%;width:80%;background:hsl(217 91% 60%)"></span></span>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;gap:4px 12px;align-items:center;padding:7px 0;border-bottom:1px solid #F3F5F9;font-size:13px">
              <span style="font-weight:500;color:#0B1324">Meera P.</span><span style="font-size:12px;color:#15803D;font-weight:600">Completed</span>
              <span style="grid-column:1 / -1;height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden"><span style="display:block;height:100%;width:100%;background:#15803D"></span></span>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;gap:4px 12px;align-items:center;padding:7px 0;border-bottom:1px solid #F3F5F9;font-size:13px">
              <span style="font-weight:500;color:#0B1324">Aarav R.</span><span style="font-size:12px;color:hsl(25 95% 40%);font-weight:600">Notes unread</span>
              <span style="grid-column:1 / -1;height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden"><span style="display:block;height:100%;width:45%;background:hsl(25 95% 63%)"></span></span>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;gap:4px 12px;align-items:center;padding:7px 0;border-bottom:1px solid #F3F5F9;font-size:13px">
              <span style="font-weight:500;color:#0B1324">Ishaan V.</span><span style="font-size:12px;color:#3F4A5C;font-weight:600">In progress</span>
              <span style="grid-column:1 / -1;height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden"><span style="display:block;height:100%;width:60%;background:hsl(217 91% 60%)"></span></span>
            </div>
            <div style="display:grid;grid-template-columns:1fr auto;gap:4px 12px;align-items:center;padding:7px 0;border-bottom:1px solid #F3F5F9;font-size:13px">
              <span style="font-weight:500;color:#0B1324">Diya N.</span><span style="font-size:12px;color:#98A1B2;font-weight:600">Not started</span>
              <span style="grid-column:1 / -1;height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden"><span style="display:block;height:100%;width:0%;background:#C9D1DE"></span></span>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top:28px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between">
        <div style="display:flex;flex-wrap:wrap;gap:8px 20px;font-size:14px;color:#3F4A5C">
          <span>Chapter → topic → content</span><span>·</span>
          <span>Multiple exam formats</span><span>·</span>
          <span>Configurable timers</span><span>·</span>
          <span>Negative marking &amp; pass criteria</span><span>·</span>
          <span>Progress tracking</span>
        </div>
        <a href="/features/lms-exam-builder" style="font-size:14.5px;font-weight:600;display:inline-flex;align-items:center;gap:6px">
          Explore the exam builder <img src="/assets/icons/arrow-right.svg" alt="" width="15" height="15">
        </a>
      </div>
    </div>
  </section>

  <!-- SECTION 7: ANALYTICS -->
  <section data-screen-label="Analytics" aria-labelledby="h-an" style="background:#F6F8FB">
    <div style="max-width:1200px;margin:0 auto;padding:clamp(56px,8vw,96px) 20px">
      <div style="max-width:720px">
        <p class="lz-eyebrow">07 — ACADEMIC ANALYTICS</p>
        <h2 id="h-an" class="lz-section-title">Early Gap Detection, weeks before board results.</h2>
        <p class="lz-section-subtitle">
          Every attempt feeds student-wise, subject-level and question-level views, with time spent and batch comparisons, so a principal and a teacher can act on the same picture.
        </p>
      </div>

      <div style="margin-top:40px;background:#fff;border:1px solid #DCE2EC;border-radius:18px;box-shadow:0 30px 60px -36px rgba(11,19,36,.3);overflow:hidden">
        <!-- Dashboard Top Control Strip -->
        <div style="min-height:50px;border-bottom:1px solid #EEF0F4;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 16px;font-size:13px;flex-wrap:wrap">
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <span style="padding:6px 10px;border-radius:8px;border:1px solid #D9DEE7;font-weight:500">Batch · Class 9-B</span>
            <span style="padding:6px 10px;border-radius:8px;border:1px solid #D9DEE7;font-weight:500">Exam · Unit Test 2</span>
            <span style="padding:6px 10px;border-radius:8px;border:1px solid #D9DEE7;font-weight:500">All subjects</span>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <span style="padding:3px 8px;border-radius:6px;background:#EEF4FF;color:hsl(217 91% 40%);font-size:11px;font-weight:600">Term 1 Report</span>
            <span style="height:32px;padding:0 12px;border-radius:8px;background:#0B1324;color:#fff;font-size:12.5px;font-weight:600;display:inline-flex;align-items:center;gap:6px;cursor:pointer">
              <img src="/assets/icons/download.svg" alt="" width="13" height="13" style="filter:invert(1)">Report
            </span>
          </div>
        </div>

        <div style="padding:16px;display:grid;gap:16px">
          <!-- KPI Row -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,135px),1fr));gap:10px">
            <div style="border:1px solid #E5E8EF;border-radius:12px;padding:14px">
              <div style="font-size:12px;color:#6B7485;font-weight:500">Batch average</div>
              <div style="font-family:Figtree,Inter,sans-serif;font-size:28px;font-weight:700;letter-spacing:-.02em;margin-top:4px">68%</div>
              <div style="font-size:12px;color:#15803D;margin-top:2px;font-weight:600">+4 pts vs Unit Test 1</div>
            </div>
            <div style="border:1px solid #E5E8EF;border-radius:12px;padding:14px">
              <div style="font-size:12px;color:#6B7485;font-weight:500">Completion</div>
              <div style="font-family:Figtree,Inter,sans-serif;font-size:28px;font-weight:700;letter-spacing:-.02em;margin-top:4px">34 / 34</div>
              <div style="font-size:12px;color:#6B7485;margin-top:2px;font-weight:600">All attempts submitted</div>
            </div>
            <div style="border:1px solid #E5E8EF;border-radius:12px;padding:14px">
              <div style="font-size:12px;color:#6B7485;font-weight:500">Avg. time per question</div>
              <div style="font-family:Figtree,Inter,sans-serif;font-size:28px;font-weight:700;letter-spacing:-.02em;margin-top:4px">1m 42s</div>
              <div style="font-size:12px;color:#15803D;margin-top:2px;font-weight:600">−12s vs batch 9-A</div>
            </div>
            <div style="border:1px solid #E5E8EF;border-radius:12px;padding:14px">
              <div style="font-size:12px;color:#6B7485;font-weight:500">Below pass mark</div>
              <div style="font-family:Figtree,Inter,sans-serif;font-size:28px;font-weight:700;letter-spacing:-.02em;margin-top:4px">5</div>
              <div style="font-size:12px;color:hsl(25 95% 40%);margin-top:2px;font-weight:600">Needs follow-up</div>
            </div>
          </div>

          <!-- Mid Row: Comparison & Question Heatmap -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:16px">
            <!-- Subject Level Comparison -->
            <div style="border:1px solid #E5E8EF;border-radius:12px;padding:16px">
              <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px">
                <span style="font-size:13.5px;font-weight:600">Subject-level average · batch comparison</span>
                <span style="font-size:12px;color:#6B7485">9-A vs 9-B</span>
              </div>
              <div style="display:grid;gap:12px">
                <div style="display:grid;grid-template-columns:90px 1fr;gap:10px;align-items:center;font-size:12.5px">
                  <span style="color:#3F4A5C">Physics</span>
                  <div style="display:grid;gap:3px">
                    <div style="display:flex;align-items:center;gap:8px">
                      <span style="height:9px;border-radius:3px;background:hsl(217 91% 60%);width:71%"></span>
                      <span style="font-size:11px;color:#6B7485;font-variant-numeric:tabular-nums">71%</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px">
                      <span style="height:9px;border-radius:3px;background:#C9D1DE;width:66%"></span>
                      <span style="font-size:11px;color:#6B7485;font-variant-numeric:tabular-nums">66%</span>
                    </div>
                  </div>
                </div>
                <div style="display:grid;grid-template-columns:90px 1fr;gap:10px;align-items:center;font-size:12.5px">
                  <span style="color:#3F4A5C">Chemistry</span>
                  <div style="display:grid;gap:3px">
                    <div style="display:flex;align-items:center;gap:8px">
                      <span style="height:9px;border-radius:3px;background:hsl(217 91% 60%);width:64%"></span>
                      <span style="font-size:11px;color:#6B7485;font-variant-numeric:tabular-nums">64%</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px">
                      <span style="height:9px;border-radius:3px;background:#C9D1DE;width:69%"></span>
                      <span style="font-size:11px;color:#6B7485;font-variant-numeric:tabular-nums">69%</span>
                    </div>
                  </div>
                </div>
                <div style="display:grid;grid-template-columns:90px 1fr;gap:10px;align-items:center;font-size:12.5px">
                  <span style="color:#3F4A5C">Biology</span>
                  <div style="display:grid;gap:3px">
                    <div style="display:flex;align-items:center;gap:8px">
                      <span style="height:9px;border-radius:3px;background:hsl(217 91% 60%);width:78%"></span>
                      <span style="font-size:11px;color:#6B7485;font-variant-numeric:tabular-nums">78%</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px">
                      <span style="height:9px;border-radius:3px;background:#C9D1DE;width:74%"></span>
                      <span style="font-size:11px;color:#6B7485;font-variant-numeric:tabular-nums">74%</span>
                    </div>
                  </div>
                </div>
                <div style="display:grid;grid-template-columns:90px 1fr;gap:10px;align-items:center;font-size:12.5px">
                  <span style="color:#3F4A5C">Maths</span>
                  <div style="display:grid;gap:3px">
                    <div style="display:flex;align-items:center;gap:8px">
                      <span style="height:9px;border-radius:3px;background:hsl(217 91% 60%);width:62%"></span>
                      <span style="font-size:11px;color:#6B7485;font-variant-numeric:tabular-nums">62%</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px">
                      <span style="height:9px;border-radius:3px;background:#C9D1DE;width:60%"></span>
                      <span style="font-size:11px;color:#6B7485;font-variant-numeric:tabular-nums">60%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style="display:flex;gap:14px;margin-top:12px;font-size:11.5px;color:#6B7485">
                <span><span style="display:inline-block;width:10px;height:6px;border-radius:2px;background:hsl(217 91% 60%);margin-right:6px"></span>Class 9-B</span>
                <span><span style="display:inline-block;width:10px;height:6px;border-radius:2px;background:#C9D1DE;margin-right:6px"></span>Class 9-A</span>
              </div>
            </div>

            <!-- Question Accuracy Heatmap Grid -->
            <div style="border:1px solid #E5E8EF;border-radius:12px;padding:16px">
              <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px">
                <span style="font-size:13.5px;font-weight:600">Question-level accuracy · Physics</span>
                <span style="font-size:12px;color:#6B7485">25 questions</span>
              </div>
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(36px,1fr));gap:4px">
                ${[92, 88, 76, 81, 69, 74, 58, 90, 84, 62, 71, 77, 45, 31, 66, 79, 83, 52, 28, 73, 86, 64, 70, 59, 80].map((v, i) => {
                  const bg = v >= 75 ? 'hsl(217 91% 60%)' : v >= 50 ? '#BFD7FF' : '#FFE1CC';
                  const fg = v >= 75 ? '#fff' : '#0B1324';
                  return `<span title="Q${i+1} · ${v}% correct" style="height:34px;border-radius:6px;background:${bg};color:${fg};display:grid;place-items:center;font-size:11px;font-weight:600;font-variant-numeric:tabular-nums;cursor:default">${v}</span>`;
                }).join('')}
              </div>
              <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:11.5px;color:#6B7485">
                <span>Q1</span>
                <span>Values show % of students correct · darker = higher</span>
                <span>Q25</span>
              </div>
              <div style="margin-top:14px;padding:12px;border-radius:10px;background:#FFF1E8;font-size:12.5px;color:#7C2D12;line-height:1.5">
                <strong>Q14 and Q19</strong> (Lift and equilibrium) were answered correctly by under a third of the class. Average time on Q19 was 2× the paper mean.
              </div>
            </div>
          </div>

          <!-- Bottom: Student Performance Table -->
          <div style="border:1px solid #E5E8EF;border-radius:12px;overflow:hidden">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid #EEF0F4;flex-wrap:wrap;gap:6px">
              <span style="font-size:13.5px;font-weight:600">Student-wise performance</span>
              <span style="font-size:11.5px;color:#6B7485">Sorted by score · showing 5 of 34</span>
            </div>
            <div class="lz-table-responsive" style="overflow-x:auto;-webkit-overflow-scrolling:touch;width:100%">
              <table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
                <thead>
                  <tr style="text-align:left;color:#6B7485;font-size:12px;background:#FAFBFD">
                    <th style="padding:10px 16px;font-weight:600">Student</th>
                    <th style="padding:10px 12px;font-weight:600">Score</th>
                    <th style="padding:10px 12px;font-weight:600">Accuracy</th>
                    <th style="padding:10px 12px;font-weight:600">Time spent</th>
                    <th style="padding:10px 12px;font-weight:600">Weakest topic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-top:1px solid #F3F5F9">
                    <td style="padding:10px 16px;font-weight:500">Ananya S.</td>
                    <td style="padding:10px 12px;font-variant-numeric:tabular-nums">23 / 25</td>
                    <td style="padding:10px 12px">
                      <span style="display:inline-flex;align-items:center;gap:8px">
                        <span style="width:90px;height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden"><span style="display:block;height:100%;width:92%;background:hsl(217 91% 60%)"></span></span>
                        <span style="font-variant-numeric:tabular-nums;color:#3F4A5C">92%</span>
                      </span>
                    </td>
                    <td style="padding:10px 12px;color:#3F4A5C;font-variant-numeric:tabular-nums">38 min</td>
                    <td style="padding:10px 12px"><span style="padding:3px 8px;border-radius:6px;background:#F3F5F9;color:#3F4A5C;font-size:12px;font-weight:500">Pressure</span></td>
                  </tr>
                  <tr style="border-top:1px solid #F3F5F9">
                    <td style="padding:10px 16px;font-weight:500">Meera P.</td>
                    <td style="padding:10px 12px;font-variant-numeric:tabular-nums">21 / 25</td>
                    <td style="padding:10px 12px">
                      <span style="display:inline-flex;align-items:center;gap:8px">
                        <span style="width:90px;height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden"><span style="display:block;height:100%;width:84%;background:hsl(217 91% 60%)"></span></span>
                        <span style="font-variant-numeric:tabular-nums;color:#3F4A5C">84%</span>
                      </span>
                    </td>
                    <td style="padding:10px 12px;color:#3F4A5C;font-variant-numeric:tabular-nums">41 min</td>
                    <td style="padding:10px 12px"><span style="padding:3px 8px;border-radius:6px;background:#F3F5F9;color:#3F4A5C;font-size:12px;font-weight:500">Equilibrium</span></td>
                  </tr>
                  <tr style="border-top:1px solid #F3F5F9">
                    <td style="padding:10px 16px;font-weight:500">Rohan K.</td>
                    <td style="padding:10px 12px;font-variant-numeric:tabular-nums">18 / 25</td>
                    <td style="padding:10px 12px">
                      <span style="display:inline-flex;align-items:center;gap:8px">
                        <span style="width:90px;height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden"><span style="display:block;height:100%;width:72%;background:hsl(217 91% 60%)"></span></span>
                        <span style="font-variant-numeric:tabular-nums;color:#3F4A5C">72%</span>
                      </span>
                    </td>
                    <td style="padding:10px 12px;color:#3F4A5C;font-variant-numeric:tabular-nums">44 min</td>
                    <td style="padding:10px 12px"><span style="padding:3px 8px;border-radius:6px;background:#F3F5F9;color:#3F4A5C;font-size:12px;font-weight:500">Lift &amp; thrust</span></td>
                  </tr>
                  <tr style="border-top:1px solid #F3F5F9">
                    <td style="padding:10px 16px;font-weight:500">Ishaan V.</td>
                    <td style="padding:10px 12px;font-variant-numeric:tabular-nums">15 / 25</td>
                    <td style="padding:10px 12px">
                      <span style="display:inline-flex;align-items:center;gap:8px">
                        <span style="width:90px;height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden"><span style="display:block;height:100%;width:60%;background:hsl(217 91% 60%)"></span></span>
                        <span style="font-variant-numeric:tabular-nums;color:#3F4A5C">60%</span>
                      </span>
                    </td>
                    <td style="padding:10px 12px;color:#3F4A5C;font-variant-numeric:tabular-nums">45 min</td>
                    <td style="padding:10px 12px"><span style="padding:3px 8px;border-radius:6px;background:#F3F5F9;color:#3F4A5C;font-size:12px;font-weight:500">Lift &amp; thrust</span></td>
                  </tr>
                  <tr style="border-top:1px solid #F3F5F9">
                    <td style="padding:10px 16px;font-weight:500">Aarav R.</td>
                    <td style="padding:10px 12px;font-variant-numeric:tabular-nums">11 / 25</td>
                    <td style="padding:10px 12px">
                      <span style="display:inline-flex;align-items:center;gap:8px">
                        <span style="width:90px;height:6px;border-radius:3px;background:#EEF0F4;overflow:hidden"><span style="display:block;height:100%;width:44%;background:hsl(217 91% 60%)"></span></span>
                        <span style="font-variant-numeric:tabular-nums;color:#3F4A5C">44%</span>
                      </span>
                    </td>
                    <td style="padding:10px 12px;color:#3F4A5C;font-variant-numeric:tabular-nums">45 min</td>
                    <td style="padding:10px 12px"><span style="padding:3px 8px;border-radius:6px;background:#F3F5F9;color:#3F4A5C;font-size:12px;font-weight:500">Forces</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top:24px;display:flex;justify-content:flex-end">
        <a href="/features/analytics" style="font-size:14.5px;font-weight:600;display:inline-flex;align-items:center;gap:6px">
          Explore analytics &amp; reports <img src="/assets/icons/arrow-right.svg" alt="" width="15" height="15">
        </a>
      </div>
    </div>
  </section>

  <!-- SECTION 8: SEE IT IN ACTION -->
  <section data-screen-label="See it in action" aria-labelledby="h-live" style="position:relative;background:linear-gradient(180deg,#F8FAFD 0%,#EDF3FA 50%,#E6EEF8 100%);border-top:1px solid #E2E8F0;overflow:hidden">
    <!-- Ambient top glow -->
    <div aria-hidden="true" style="position:absolute;left:50%;top:0;transform:translateX(-50%);width:1100px;height:420px;background:radial-gradient(50% 50% at 50% 0%,rgba(37,99,235,0.08) 0%,transparent 70%);pointer-events:none"></div>
    <div style="position:relative;max-width:1200px;margin:0 auto;padding:clamp(56px,8vw,96px) 20px">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:16px 48px;align-items:end">
        <div>
          <p class="lz-eyebrow">08 — SEE LEARNIZ IN ACTION</p>
          <h2 id="h-live" class="lz-section-title">Cause-and-Effect Thinking you can test right now.</h2>
        </div>
        <p class="lz-section-subtitle" style="max-width:520px">
          Real demonstrations load on request so the page stays fast. The full gallery of interactive classroom simulations is on See It Live.
        </p>
      </div>

      <div style="margin-top:36px;display:flex;flex-wrap:wrap;gap:16px">
        <!-- Demo Card 1 -->
        <div style="flex:1 1 min(100%,280px);min-width:0;border:1px solid #E2E8F0;border-radius:16px;overflow:hidden;background:#fff;display:flex;flex-direction:column;box-shadow:0 10px 30px -10px rgba(11,19,36,0.08),0 1px 3px rgba(11,19,36,0.04);transition:transform .2s ease,box-shadow .2s ease">
          <div data-demo-slot data-demo-type="heli" style="position:relative;height:210px;background:linear-gradient(180deg,#EDF4FE 0%,#F8FAFD 80%,#FFFFFF 100%);overflow:hidden;display:grid;place-items:center">
            <!-- Sky background grid and markings -->
            <div aria-hidden="true" style="position:absolute;inset:0;background-image:linear-gradient(to right,rgba(11,19,36,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(11,19,36,0.04) 1px,transparent 1px);background-size:24px 24px;pointer-events:none"></div>
            
            <!-- Mini Telemetry Badges -->
            <div aria-hidden="true" style="position:absolute;left:12px;top:12px;display:flex;gap:6px;z-index:1;pointer-events:none">
              <span style="padding:3px 7px;border-radius:6px;background:rgba(255,255,255,0.92);border:1px solid #DCE3ED;font-size:10.5px;font-weight:600;color:#1F2A3D;box-shadow:0 1px 3px rgba(0,0,0,0.04)">Lift 11.8 kN</span>
              <span style="padding:3px 7px;border-radius:6px;background:rgba(255,255,255,0.92);border:1px solid #DCE3ED;font-size:10.5px;font-weight:600;color:#1F2A3D;box-shadow:0 1px 3px rgba(0,0,0,0.04)">Weight 11.8 kN</span>
            </div>
            <span aria-hidden="true" style="position:absolute;right:12px;top:12px;padding:3px 8px;border-radius:6px;background:#E8F7EE;color:#15803D;font-size:10.5px;font-weight:700;z-index:1;pointer-events:none">Hovering</span>

            <!-- Illustrated Helicopter Simulation Preview Behind Button -->
            <div aria-hidden="true" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-42%);width:130px;height:52px;opacity:0.65;pointer-events:none">
              <!-- Rotor -->
              <span style="position:absolute;left:10px;top:0;width:110px;height:3px;border-radius:2px;background:#3F4A5C"></span>
              <span style="position:absolute;left:64px;top:3px;width:3px;height:8px;background:#3F4A5C"></span>
              <!-- Body -->
              <span style="position:absolute;left:42px;top:10px;width:60px;height:24px;border-radius:14px 14px 10px 10px;background:#0B1324"></span>
              <span style="position:absolute;left:86px;top:14px;width:10px;height:10px;border-radius:50%;background:#BFD7FF"></span>
              <!-- Tail -->
              <span style="position:absolute;left:4px;top:18px;width:42px;height:5px;border-radius:2px;background:#0B1324"></span>
              <span style="position:absolute;left:4px;top:8px;width:4px;height:16px;border-radius:2px;background:#0B1324"></span>
              <!-- Skids -->
              <span style="position:absolute;left:46px;top:38px;width:54px;height:3px;border-radius:2px;background:#3F4A5C"></span>
              <!-- Force Vectors -->
              <span style="position:absolute;left:64px;top:-26px;width:2px;height:24px;background:hsl(217 91% 55%)"></span>
              <span style="position:absolute;left:64px;top:44px;width:2px;height:24px;background:hsl(25 95% 55%)"></span>
            </div>

            <!-- Ground Line -->
            <div aria-hidden="true" style="position:absolute;left:0;right:0;bottom:0;height:8px;background:#E2E8F0;pointer-events:none"></div>
            <span aria-hidden="true" style="position:absolute;left:12px;bottom:10px;font-size:10.5px;color:#64748B;font-family:ui-monospace,SFMono-Regular,monospace;z-index:1;pointer-events:none">CBSE Class 9 · Laws of Motion</span>

            <!-- Action Button -->
            <button type="button" data-load-demo class="lz-btn-dark lz-btn-sm" style="position:relative;z-index:2;border-radius:999px;box-shadow:0 12px 28px -8px rgba(11,19,36,0.5)">
              <img src="/assets/icons/play.svg" alt="" width="16" height="16" style="filter:invert(1)">
              Load interactive demo
            </button>
          </div>
          <div style="padding:18px 20px 20px;display:flex;flex-direction:column;gap:6px;flex:1">
            <span style="font-size:11.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:hsl(217 91% 45%)">Interactive demo</span>
            <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;margin:0">Helicopter physics</h3>
            <p style="font-size:14px;line-height:1.55;color:#3F4A5C;margin:0">
              Change the thrust, see the helicopter respond: rotor speed, mass, lift and equilibrium.
            </p>
          </div>
        </div>

        <!-- Demo Card 2 -->
        <div style="flex:1 1 min(100%,280px);min-width:0;border:1px solid #E2E8F0;border-radius:16px;overflow:hidden;background:#fff;display:flex;flex-direction:column;box-shadow:0 10px 30px -10px rgba(11,19,36,0.08),0 1px 3px rgba(11,19,36,0.04);transition:transform .2s ease,box-shadow .2s ease">
          <div data-demo-slot data-demo-type="iq" style="position:relative;height:210px;background:linear-gradient(180deg,#F6F2FF 0%,#FAF8FF 75%,#FFFFFF 100%);overflow:hidden;display:grid;place-items:center">
            <!-- Subtle Grid -->
            <div aria-hidden="true" style="position:absolute;inset:0;background-image:linear-gradient(to right,rgba(124,58,237,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(124,58,237,0.04) 1px,transparent 1px);background-size:24px 24px;pointer-events:none"></div>
            
            <!-- Telemetry Badges -->
            <div aria-hidden="true" style="position:absolute;left:12px;top:12px;display:flex;gap:6px;z-index:1;pointer-events:none">
              <span style="padding:3px 7px;border-radius:6px;background:rgba(255,255,255,0.92);border:1px solid #E8E2F8;font-size:10.5px;font-weight:600;color:hsl(258 90% 50%);box-shadow:0 1px 3px rgba(0,0,0,0.04)">IntelliQ™ AI</span>
              <span style="padding:3px 7px;border-radius:6px;background:rgba(255,255,255,0.92);border:1px solid #E8E2F8;font-size:10.5px;font-weight:600;color:#475569;box-shadow:0 1px 3px rgba(0,0,0,0.04)">Class 10 Biology</span>
            </div>
            <span aria-hidden="true" style="position:absolute;right:12px;top:12px;padding:3px 8px;border-radius:6px;background:#F3EFFF;color:hsl(258 90% 48%);font-size:10.5px;font-weight:700;z-index:1;pointer-events:none">3 Questions Ready</span>

            <!-- Question Card Preview Mockup Behind Button -->
            <div aria-hidden="true" style="position:absolute;left:12px;right:12px;top:44px;background:#ffffff;border:1px solid #EDE7FB;border-radius:10px;padding:10px 12px;opacity:0.65;box-shadow:0 4px 12px rgba(124,58,237,0.06);pointer-events:none">
              <div style="font-size:11px;font-weight:600;color:#1E293B;line-height:1.4">Which pigment absorbs light energy in photosynthesis?</div>
              <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">
                <span style="padding:2px 6px;border-radius:4px;background:#E8F7EE;border:1px solid #C6EFD5;color:#15803D;font-size:9.5px;font-weight:600">✓ A. Chlorophyll</span>
                <span style="padding:2px 6px;border-radius:4px;background:#F8FAFC;border:1px solid #E2E8F0;color:#64748B;font-size:9.5px">B. Haemoglobin</span>
                <span style="padding:2px 6px;border-radius:4px;background:#F8FAFC;border:1px solid #E2E8F0;color:#64748B;font-size:9.5px">C. Carotene</span>
              </div>
            </div>

            <span aria-hidden="true" style="position:absolute;left:12px;bottom:10px;font-size:10.5px;color:#7C6FA6;font-family:ui-monospace,SFMono-Regular,monospace;z-index:1;pointer-events:none">Auto-tagged: Blooms L2 · NEP aligned</span>

            <!-- Action Button -->
            <button type="button" data-load-demo class="lz-btn-dark lz-btn-sm" style="position:relative;z-index:2;border-radius:999px;box-shadow:0 12px 28px -8px rgba(11,19,36,0.5)">
              <img src="/assets/icons/sparkles.svg" alt="" width="16" height="16" style="filter:invert(1)">
              Load question widget
            </button>
          </div>
          <div style="padding:18px 20px 20px;display:flex;flex-direction:column;gap:6px;flex:1">
            <span style="font-size:11.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:hsl(258 90% 50%)">Product widget</span>
            <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;margin:0">Live Question Generator widget</h3>
            <p style="font-size:14px;line-height:1.55;color:#3F4A5C;margin:0">
              Generate a sample set of questions on a topic of your choice using the live Learniz question widget.
            </p>
          </div>
        </div>

        <!-- Demo Card 3 -->
        <div style="flex:1 1 min(100%,280px);min-width:0;border:1px solid #E2E8F0;border-radius:16px;overflow:hidden;background:#fff;display:flex;flex-direction:column;box-shadow:0 10px 30px -10px rgba(11,19,36,0.08),0 1px 3px rgba(11,19,36,0.04);transition:transform .2s ease,box-shadow .2s ease">
          <div data-demo-slot data-demo-type="video" style="position:relative;height:210px;background:radial-gradient(ellipse at 50% 30%,#1B273F 0%,#0B1324 100%);overflow:hidden;display:grid;place-items:center">
            <!-- Video Player Backdrop Grid & Glow -->
            <div aria-hidden="true" style="position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(59,130,246,0.2) 0%,transparent 60%);pointer-events:none"></div>
            
            <!-- Video Badges -->
            <div aria-hidden="true" style="position:absolute;left:12px;top:12px;display:flex;gap:6px;z-index:1;pointer-events:none">
              <span style="padding:3px 8px;border-radius:6px;background:rgba(255,255,255,0.14);backdrop-filter:blur(6px);color:#FFFFFF;font-size:10.5px;font-weight:600;display:inline-flex;align-items:center;gap:5px">
                <span style="width:6px;height:6px;border-radius:50%;background:#EF4444;box-shadow:0 0 6px #EF4444"></span>Platform Walkthrough
              </span>
            </div>
            <span aria-hidden="true" style="position:absolute;right:12px;top:12px;padding:3px 7px;border-radius:6px;background:rgba(0,0,0,0.45);border:1px solid rgba(255,255,255,0.12);color:#E2E8F0;font-size:10.5px;font-weight:600;font-variant-numeric:tabular-nums;z-index:1;pointer-events:none">1:30 min</span>

            <!-- Mini waveform / presentation preview lines in background -->
            <div aria-hidden="true" style="position:absolute;left:20px;right:20px;top:60px;height:50px;display:flex;align-items:center;justify-content:center;gap:8px;opacity:0.25;pointer-events:none">
              <span style="width:4px;height:24px;border-radius:2px;background:#60A5FA"></span>
              <span style="width:4px;height:36px;border-radius:2px;background:#60A5FA"></span>
              <span style="width:4px;height:18px;border-radius:2px;background:#60A5FA"></span>
              <span style="width:4px;height:44px;border-radius:2px;background:#60A5FA"></span>
              <span style="width:4px;height:28px;border-radius:2px;background:#60A5FA"></span>
              <span style="width:4px;height:38px;border-radius:2px;background:#60A5FA"></span>
              <span style="width:4px;height:20px;border-radius:2px;background:#60A5FA"></span>
            </div>

            <span aria-hidden="true" style="position:absolute;left:12px;bottom:10px;font-size:10.5px;color:#94A3B8;font-family:ui-monospace,SFMono-Regular,monospace;z-index:1;pointer-events:none">Simulation · IntelliQ · Analytics</span>
            <span aria-hidden="true" style="position:absolute;right:12px;bottom:10px;font-size:10.5px;color:#60A5FA;font-weight:600;z-index:1;pointer-events:none">HD 1080p</span>

            <!-- Action Button -->
            <button type="button" data-load-demo class="lz-btn-sm" style="position:relative;z-index:2;border-radius:999px;background:hsl(217 91% 60%);color:#fff;border:0;font-weight:700;box-shadow:0 12px 28px -6px hsl(217 91% 60% / .75);display:inline-flex;align-items:center;gap:8px;cursor:pointer">
              <img src="/assets/icons/play.svg" alt="" width="16" height="16" style="filter:invert(1)">
              Play video
            </button>
          </div>
          <div style="padding:18px 20px 20px;display:flex;flex-direction:column;gap:6px;flex:1">
            <span style="font-size:11.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:hsl(25 95% 42%)">Explainer video</span>
            <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;margin:0">Learniz in 90 seconds</h3>
            <p style="font-size:14px;line-height:1.55;color:#3F4A5C;margin:0">
              A short walkthrough of a lesson, a test and the diagnostic report that follows.
            </p>
          </div>
        </div>
      </div>

      <div style="margin-top:32px;display:flex;justify-content:center">
        <a href="/see-it-live" class="lz-btn-primary">
          Open the See It Live gallery <img src="/assets/icons/arrow-right.svg" alt="" width="16" height="16" style="filter:invert(1)">
        </a>
      </div>
    </div>
  </section>

  <!-- SECTION 9: FOUNDING SCHOOLS -->
  <section data-screen-label="Founding Schools" aria-labelledby="h-fs" style="background:#0B1324;color:#fff">
    <div style="max-width:1200px;margin:0 auto;padding:clamp(56px,8vw,96px) 20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:40px 64px;align-items:center">
      <div>
        <p class="lz-eyebrow" style="color:hsl(25 95% 68%)">09 — FOUNDING SCHOOLS PROGRAMME</p>
        <h2 id="h-fs" class="lz-section-title" style="color:#fff">Future-Ready Classrooms: the Founding Schools Programme.</h2>
        <p class="lz-section-subtitle" style="color:#C5CCDA;max-width:520px">
          A limited programme for institutions that want to run Learniz early, with a free pilot and founding pricing in return for working closely with our team.
        </p>
        <dl style="margin:28px 0 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,90px),1fr));gap:16px 20px">
          <div style="border-top:1px solid rgba(255,255,255,.14);padding-top:12px">
            <dt style="font-size:12px;color:#9AA4B8;font-weight:500">Places</dt>
            <dd style="margin:4px 0 0;font-family:Figtree,Inter,sans-serif;font-size:24px;font-weight:700">10</dd>
          </div>
          <div style="border-top:1px solid rgba(255,255,255,.14);padding-top:12px">
            <dt style="font-size:12px;color:#9AA4B8;font-weight:500">Pilot</dt>
            <dd style="margin:4px 0 0;font-family:Figtree,Inter,sans-serif;font-size:24px;font-weight:700">Free</dd>
          </div>
          <div style="border-top:1px solid rgba(255,255,255,.14);padding-top:12px">
            <dt style="font-size:12px;color:#9AA4B8;font-weight:500">Pricing</dt>
            <dd style="margin:4px 0 0;font-family:Figtree,Inter,sans-serif;font-size:24px;font-weight:700">Founding</dd>
          </div>
        </dl>
        <div style="margin-top:20px;padding:12px 14px;border-radius:10px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.05);font-size:13px;color:#C5CCDA;line-height:1.5;font-family:ui-monospace,SFMono-Regular,monospace">
          free 30-day pilot · dedicated onboarding engineer · custom board alignment · locked founding tier pricing
        </div>
        <div style="margin-top:28px;display:flex;flex-wrap:wrap;gap:12px">
          <button type="button" data-open-demo class="lz-btn-outline" style="background:#fff;color:#0B1324;border:0">Book a free demo</button>
          <a href="/founding-schools" class="lz-btn-outline" style="border:1px solid rgba(255,255,255,.3);color:#fff;background:transparent">Programme details</a>
        </div>
      </div>

      <!-- Live Counter Box -->
      <div style="justify-self:center;width:100%;max-width:420px;background:#121D33;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:clamp(20px,5vw,28px)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:13px;font-weight:600;color:#C5CCDA">Places remaining</span>
          <span style="padding:3px 8px;border-radius:6px;background:rgba(255,255,255,.08);font-size:11px;font-family:ui-monospace,SFMono-Regular,monospace;color:#9AA4B8">Live cohort</span>
        </div>
        <div style="margin-top:10px;display:flex;align-items:baseline;gap:8px">
          <span id="fs-counter-val" style="font-family:Figtree,Inter,sans-serif;font-size:clamp(56px,8vw,72px);font-weight:800;letter-spacing:-.04em;line-height:1;color:#fff">10</span>
          <span style="font-size:18px;color:#9AA4B8">of 10</span>
        </div>
        <div id="fs-cells-grid" role="img" aria-label="10 of 10 places remaining" style="margin-top:20px;display:grid;grid-template-columns:repeat(10,1fr);gap:6px">
          <!-- Populated by JS -->
        </div>
        <p style="margin-top:20px;font-size:13.5px;line-height:1.55;color:#C5CCDA;margin-bottom:0">
          Cohort applications are reviewed on a rolling basis. Founding schools receive direct input into our product roadmap.
        </p>
      </div>
    </div>
  </section>

  <!-- SECTION 10: TRUST -->
  <section data-screen-label="Trust" aria-labelledby="h-trust">
    <div style="max-width:1200px;margin:0 auto;padding:clamp(56px,8vw,96px) 20px">
      <p class="lz-eyebrow">10 — WHAT YOU CAN VERIFY TODAY</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:16px 48px;align-items:end;margin-top:14px">
        <h2 id="h-trust" class="lz-section-title">Data-Backed Decisions with verified Indian curriculum alignment.</h2>
        <p class="lz-section-subtitle" style="max-width:520px">
          We would rather show you the platform than a wall of claims. Verified curriculum alignment, registered Indian corporate governance, and open interactive demos.
        </p>
      </div>

      <div style="margin-top:40px;display:flex;flex-wrap:wrap;gap:16px">
        <div class="lz-card" style="flex:1 1 min(100%,260px);min-width:0;display:grid;gap:14px;align-content:start">
          <img src="/assets/icons/building-2.svg" alt="" width="22" height="22">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;margin:0">A registered Indian company</h3>
          <dl style="margin:0;display:grid;gap:8px;font-size:14px;color:#3F4A5C">
            <div><dt style="display:inline;font-weight:600;color:#0B1324">Legal name </dt><dd style="display:inline;margin:0">Tattvatech Edu Solutions LLP</dd></div>
            <div><dt style="display:inline;font-weight:600;color:#0B1324">Based in </dt><dd style="display:inline;margin:0">Hyderabad, Telangana</dd></div>
            <div><dt style="display:inline;font-weight:600;color:#0B1324">Reach us </dt><dd style="display:inline;margin:0">info@learniz.in · +91-9032181083</dd></div>
          </dl>
          <a href="/about" style="font-size:14px;font-weight:600">About Learniz →</a>
        </div>

        <div class="lz-card" style="flex:1 1 min(100%,260px);min-width:0;display:grid;gap:14px;align-content:start">
          <img src="/assets/icons/play.svg" alt="" width="22" height="22">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;margin:0">A product you can try before you call</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#3F4A5C;margin:0">
            12 interactive classroom demonstrations and the live question generator are open on the website. No login, no sales call required.
          </p>
          <a href="/see-it-live" style="font-size:14px;font-weight:600">See It Live →</a>
        </div>

        <div class="lz-card" style="flex:1 1 min(100%,260px);min-width:0;display:grid;gap:14px;align-content:start">
          <img src="/assets/icons/shield-check.svg" alt="" width="22" height="22">
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;margin:0">Clear terms, in plain language</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#3F4A5C;margin:0">
            Separate, transparent Privacy, Terms and Refund policies, and a complete data-handling summary in our FAQ.
          </p>
          <a href="/privacy" style="font-size:14px;font-weight:600">Read the policies →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 11: HOW IT WORKS -->
  <section data-screen-label="How it works" aria-labelledby="h-how" style="background:#F6F8FB">
    <div style="max-width:1200px;margin:0 auto;padding:clamp(56px,8vw,96px) 20px">
      <p class="lz-eyebrow">11 — HOW IT WORKS</p>
      <h2 id="h-how" class="lz-section-title" style="max-width:640px">Inquiry-Based Classrooms, running in four clear steps.</h2>
      <ol style="margin:40px 0 0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:16px;counter-reset:step">
        <li class="lz-card" style="display:grid;gap:10px;align-content:start">
          <span style="font-family:Figtree,Inter,sans-serif;font-size:13px;font-weight:700;color:#fff;background:#0B1324;width:28px;height:28px;border-radius:8px;display:grid;place-items:center">1</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;margin-top:6px;margin-bottom:0">Understand the school</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#3F4A5C;margin:0">
            A conversation about classes, subjects, boards, devices and what the management wants to see improve.
          </p>
        </li>
        <li class="lz-card" style="display:grid;gap:10px;align-content:start">
          <span style="font-family:Figtree,Inter,sans-serif;font-size:13px;font-weight:700;color:#fff;background:#0B1324;width:28px;height:28px;border-radius:8px;display:grid;place-items:center">2</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;margin-top:6px;margin-bottom:0">Explore the relevant capabilities</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#3F4A5C;margin:0">
            A demo built around your subjects: animations, question generation, the exam builder and the reports your team would use.
          </p>
        </li>
        <li class="lz-card" style="display:grid;gap:10px;align-content:start">
          <span style="font-family:Figtree,Inter,sans-serif;font-size:13px;font-weight:700;color:#fff;background:#0B1324;width:28px;height:28px;border-radius:8px;display:grid;place-items:center">3</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;margin-top:6px;margin-bottom:0">Agree implementation &amp; onboarding</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#3F4A5C;margin:0">
            Accounts, content structure, teacher training sessions and the pilot or rollout plan that suits the school.
          </p>
        </li>
        <li class="lz-card" style="display:grid;gap:10px;align-content:start">
          <span style="font-family:Figtree,Inter,sans-serif;font-size:13px;font-weight:700;color:#fff;background:#0B1324;width:28px;height:28px;border-radius:8px;display:grid;place-items:center">4</span>
          <h3 style="font-family:Figtree,Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;margin-top:6px;margin-bottom:0">Start, with support</h3>
          <p style="font-size:14.5px;line-height:1.55;color:#3F4A5C;margin:0">
            Teachers begin using Learniz in class with dedicated onboarding support from our team.
          </p>
        </li>
      </ol>
    </div>
  </section>

  <!-- SECTION 12: FAQ TEASER -->
  <section data-screen-label="FAQ" aria-labelledby="h-faq">
    <div style="max-width:1200px;margin:0 auto;padding:clamp(56px,8vw,96px) 20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:32px 64px;align-items:start">
      <div style="position:sticky;top:90px">
        <p class="lz-eyebrow">12 — QUESTIONS SCHOOLS ASK</p>
        <h2 id="h-faq" class="lz-section-title">Foundational Conceptual Strength: practical answers before you book.</h2>
        <p class="lz-section-subtitle">
          The full FAQ covers pricing model, boards, setup, training, devices and data security.
        </p>
        <a href="/faq" style="margin-top:18px;display:inline-flex;align-items:center;gap:6px;font-weight:600;font-size:15px">
          All questions <img src="/assets/icons/arrow-right.svg" alt="" width="15" height="15">
        </a>
      </div>

      <div style="border-top:1px solid #E5E8EF">
        <!-- FAQ 1 -->
        <div class="lz-faq-item">
          <h3>
            <button type="button" aria-expanded="false" class="lz-faq-btn">
              What exactly is Learniz?
              <img src="/assets/icons/plus.svg" alt="" width="18" height="18">
            </button>
          </h3>
          <div class="lz-faq-answer">
            Learniz is the education platform built by Tattvatech Edu Solutions LLP in Hyderabad. It combines interactive classroom animations, AI-assisted question generation, a learning management system with an exam builder, academic analytics and parent communication in one product for schools.
          </div>
        </div>

        <!-- FAQ 2 -->
        <div class="lz-faq-item">
          <h3>
            <button type="button" aria-expanded="false" class="lz-faq-btn">
              How do the interactive animations work in a real classroom?
              <img src="/assets/icons/plus.svg" alt="" width="18" height="18">
            </button>
          </h3>
          <div class="lz-faq-answer">
            The teacher opens a curriculum-aligned, GeoGebra-based animation on the classroom display and controls its parameters live. Students see the effect of each change immediately, which makes abstract science and mathematics concepts easier to discuss and reason about.
          </div>
        </div>

        <!-- FAQ 3 -->
        <div class="lz-faq-item">
          <h3>
            <button type="button" aria-expanded="false" class="lz-faq-btn">
              Does Learniz replace the teacher when setting papers?
              <img src="/assets/icons/plus.svg" alt="" width="18" height="18">
            </button>
          </h3>
          <div class="lz-faq-answer">
            No. Learniz drafts questions by topic, difficulty, format and count, and tags them automatically. The teacher reviews, edits and approves every question before it goes into an exam or is exported.
          </div>
        </div>

        <!-- FAQ 4 -->
        <div class="lz-faq-item">
          <h3>
            <button type="button" aria-expanded="false" class="lz-faq-btn">
              Which exam formats and rules does the exam builder support?
              <img src="/assets/icons/plus.svg" alt="" width="18" height="18">
            </button>
          </h3>
          <div class="lz-faq-answer">
            Content is organised chapter → topic → material. Exams can use multiple formats, configurable timers, negative marking and pass criteria, with student progress tracked against the syllabus.
          </div>
        </div>

        <!-- FAQ 5 -->
        <div class="lz-faq-item">
          <h3>
            <button type="button" aria-expanded="false" class="lz-faq-btn">
              Which boards and curricula are supported?
              <img src="/assets/icons/plus.svg" alt="" width="18" height="18">
            </button>
          </h3>
          <div class="lz-faq-answer">
            Content is aligned with NEP 2020 and NCF-SE 2023 for CBSE, ICSE, and state boards. Classes 6 through 12 in Physics, Chemistry, Biology, and Mathematics are currently supported.
          </div>
        </div>

        <!-- FAQ 6 -->
        <div class="lz-faq-item">
          <h3>
            <button type="button" aria-expanded="false" class="lz-faq-btn">
              What does it cost, and how does the pilot work?
              <img src="/assets/icons/plus.svg" alt="" width="18" height="18">
            </button>
          </h3>
          <div class="lz-faq-answer">
            The Founding Schools Programme offers a free pilot and founding pricing to 10 schools. Standard pricing is based on a per-student or per-school annual license, with zero hidden setup fees.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 13: FINAL CTA -->
  <section data-screen-label="Final CTA" aria-labelledby="h-cta" style="padding:0 20px clamp(56px,8vw,96px)">
    <div style="max-width:1200px;margin:0 auto;background:hsl(217 91% 60%);border-radius:24px;padding:clamp(40px,7vw,80px) clamp(20px,5vw,72px);color:#fff;position:relative;overflow:hidden">
      <div aria-hidden="true" style="position:absolute;right:-80px;top:-80px;width:360px;height:360px;border-radius:50%;background:hsl(258 90% 66% / .55);filter:blur(10px)"></div>
      <div style="position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:28px;align-items:center">
        <div>
          <h2 id="h-cta" style="font-family:Figtree,Inter,sans-serif;font-weight:800;font-size:clamp(26px,4.2vw,50px);line-height:1.06;letter-spacing:-.035em;color:#fff;max-width:640px;margin:0">
            Measurable Learning Outcomes for your school. Book a free demo.
          </h2>
          <p style="margin-top:16px;font-size:16px;line-height:1.55;color:#EAF1FF;max-width:520px;margin-bottom:0">
            A 20-minute walkthrough with your subjects and classes, or a quick conversation on WhatsApp. Either way, you talk directly with the team that builds Learniz.
          </p>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:340px">
          <button type="button" data-open-demo style="height:52px;border-radius:12px;border:0;background:#fff;color:hsl(217 91% 40%);font-weight:700;font-size:16px;cursor:pointer;box-shadow:0 10px 30px -14px rgba(0,0,0,.4)">Book a free demo</button>
          <a href="${waHref}" target="_blank" rel="noopener" style="height:52px;border-radius:12px;border:1px solid rgba(255,255,255,.5);color:#fff;font-weight:600;font-size:16px;display:flex;align-items:center;justify-content:center;gap:10px;text-decoration:none">
            <img src="/assets/icons/message-circle.svg" alt="" width="18" height="18" style="filter:invert(1)">Talk to Us on WhatsApp
          </a>
          <span style="text-align:center;font-size:13px;color:#EAF1FF">info@learniz.in · +91-9032181083</span>
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

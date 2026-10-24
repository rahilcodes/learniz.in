"""
Complete HTML template generators for Learniz UI assets
Adhering to Nocturne visual system
"""

import sys
from pathlib import Path
from generate_ui_assets import get_base_css

# --- SIM RAY OPTICS (Option A & B, Dark & Light) ---
def generate_ray_optics_html(theme="dark", variant="A"):
    base_css = get_base_css(theme)
    if variant == "A":
        ox = 960
        oy = 580
        f = 150
        u = 300
        h = 100
        obj_x = ox - u
        img_x = ox + u
        f1_x = ox - f
        f2_x = ox + f
        f2_2x = ox + 2*f
        f1_2x = ox - 2*f

        svg_content = f"""
        <svg class="optics-stage" viewBox="0 0 1600 1148" width="1600" height="1148">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border)" stroke-width="0.75" opacity="0.35"/>
            </pattern>
            <marker id="ray-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent)" />
            </marker>
          </defs>

          <rect x="380" y="0" width="1220" height="1148" fill="url(#grid)" />

          <line x1="410" y1="{oy}" x2="1570" y2="{oy}" stroke="var(--border)" stroke-width="1.5" />
          <text x="1560" y="{oy - 12}" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="end" letter-spacing="0.06em">PRINCIPAL AXIS</text>

          <line x1="{f1_2x}" y1="{oy - 10}" x2="{f1_2x}" y2="{oy + 10}" stroke="var(--muted)" stroke-width="1.5" />
          <text x="{f1_2x}" y="{oy + 28}" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">2F₁</text>
          <text x="{f1_2x}" y="{oy + 44}" fill="var(--subtle)" font-size="11" font-family="Inter" text-anchor="middle">-30 cm</text>

          <line x1="{f1_x}" y1="{oy - 10}" x2="{f1_x}" y2="{oy + 10}" stroke="var(--muted)" stroke-width="1.5" />
          <text x="{f1_x}" y="{oy + 28}" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">F₁</text>
          <text x="{f1_x}" y="{oy + 44}" fill="var(--subtle)" font-size="11" font-family="Inter" text-anchor="middle">-15 cm</text>

          <circle cx="{ox}" cy="{oy}" r="4" fill="var(--text)" />
          <text x="{ox - 14}" y="{oy + 28}" fill="var(--text)" font-size="13" font-family="Inter" font-weight="500">O</text>

          <line x1="{f2_x}" y1="{oy - 10}" x2="{f2_x}" y2="{oy + 10}" stroke="var(--muted)" stroke-width="1.5" />
          <text x="{f2_x}" y="{oy + 28}" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">F₂</text>
          <text x="{f2_x}" y="{oy + 44}" fill="var(--subtle)" font-size="11" font-family="Inter" text-anchor="middle">+15 cm</text>

          <line x1="{f2_2x}" y1="{oy - 10}" x2="{f2_2x}" y2="{oy + 10}" stroke="var(--muted)" stroke-width="1.5" />
          <text x="{f2_2x}" y="{oy + 28}" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">2F₂</text>
          <text x="{f2_2x}" y="{oy + 44}" fill="var(--subtle)" font-size="11" font-family="Inter" text-anchor="middle">+30 cm</text>

          <!-- Biconvex Lens -->
          <path d="M {ox} {oy - 260} Q {ox + 50} {oy} {ox} {oy + 260} Q {ox - 50} {oy} {ox} {oy - 260} Z" 
                fill="rgba(145, 132, 217, 0.08)" stroke="var(--accent)" stroke-width="1.75" />
          <line x1="{ox}" y1="{oy - 250}" x2="{ox}" y2="{oy + 250}" stroke="var(--accent)" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
          <text x="{ox}" y="{oy - 275}" fill="var(--accent)" font-size="12" font-family="Inter" text-anchor="middle" font-weight="500" letter-spacing="0.04em">CONVEX LENS (f = 15 cm)</text>

          <!-- Object Arrow -->
          <line x1="{obj_x}" y1="{oy}" x2="{obj_x}" y2="{oy - h}" stroke="var(--text)" stroke-width="3" />
          <polygon points="{obj_x - 6},{oy - h + 14} {obj_x + 6},{oy - h + 14} {obj_x},{oy - h}" fill="var(--text)" />
          <circle cx="{obj_x}" cy="{oy}" r="4" fill="var(--text)" />
          <rect x="{obj_x - 55}" y="{oy - h - 36}" width="110" height="26" rx="6" fill="var(--surface)" stroke="var(--border)" stroke-width="1"/>
          <text x="{obj_x}" y="{oy - h - 19}" fill="var(--text)" font-size="12" font-family="Inter" text-anchor="middle" font-weight="500">Object (h = 4 cm)</text>

          <!-- Image Arrow -->
          <line x1="{img_x}" y1="{oy}" x2="{img_x}" y2="{oy + h}" stroke="var(--accent)" stroke-width="3" />
          <polygon points="{img_x - 6},{oy + h - 14} {img_x + 6},{oy + h - 14} {img_x},{oy + h}" fill="var(--accent)" />
          <circle cx="{img_x}" cy="{oy}" r="4" fill="var(--accent)" />
          <rect x="{img_x - 55}" y="{oy + h + 16}" width="110" height="26" rx="6" fill="var(--surface)" stroke="var(--border)" stroke-width="1"/>
          <text x="{img_x}" y="{oy + h + 33}" fill="var(--text)" font-size="12" font-family="Inter" text-anchor="middle" font-weight="500">Image (h' = 4 cm)</text>

          <!-- Ray 1 -->
          <path d="M {obj_x} {oy - h} L {ox} {oy - h}" stroke="var(--accent)" stroke-width="1.75" fill="none" />
          <line x1="{obj_x + 150}" y1="{oy - h}" x2="{obj_x + 155}" y2="{oy - h}" stroke="var(--accent)" stroke-width="1.75" marker-end="url(#ray-arrow)" />
          <path d="M {ox} {oy - h} L {img_x + 150} {oy + h + 100}" stroke="var(--accent)" stroke-width="1.75" fill="none" />
          <line x1="{ox + 75}" y1="{oy - h + 50}" x2="{ox + 80}" y2="{oy - h + 53}" stroke="var(--accent)" stroke-width="1.75" marker-end="url(#ray-arrow)" />

          <!-- Ray 2 -->
          <path d="M {obj_x} {oy - h} L {img_x + 150} {oy + h + 50}" stroke="var(--accent)" stroke-width="1.75" fill="none" />
          <line x1="{ox - 100}" y1="{oy - 33}" x2="{ox - 95}" y2="{oy - 31}" stroke="var(--accent)" stroke-width="1.75" marker-end="url(#ray-arrow)" />

          <!-- Ray 3 -->
          <path d="M {obj_x} {oy - h} L {ox} {oy + h}" stroke="var(--accent)" stroke-width="1.75" fill="none" />
          <line x1="{f1_x}" y1="{oy}" x2="{f1_x + 5}" y2="{oy + 7}" stroke="var(--accent)" stroke-width="1.75" marker-end="url(#ray-arrow)" />
          <path d="M {ox} {oy + h} L {img_x + 180} {oy + h}" stroke="var(--accent)" stroke-width="1.75" fill="none" />
          <line x1="{img_x - 100}" y1="{oy + h}" x2="{img_x - 95}" y2="{oy + h}" stroke="var(--accent)" stroke-width="1.75" marker-end="url(#ray-arrow)" />

          <!-- Dimension lines -->
          <line x1="{obj_x}" y1="{oy - 170}" x2="{ox}" y2="{oy - 170}" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 3"/>
          <line x1="{obj_x}" y1="{oy - 180}" x2="{obj_x}" y2="{oy - 160}" stroke="var(--muted)" stroke-width="1"/>
          <line x1="{ox}" y1="{oy - 180}" x2="{ox}" y2="{oy - 160}" stroke="var(--muted)" stroke-width="1"/>
          <text x="{(obj_x + ox)/2}" y="{oy - 180}" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">Object distance u = 30 cm</text>

          <line x1="{ox}" y1="{oy - 120}" x2="{f2_x}" y2="{oy - 120}" stroke="var(--accent)" stroke-width="1" stroke-dasharray="3 3"/>
          <line x1="{ox}" y1="{oy - 130}" x2="{ox}" y2="{oy - 110}" stroke="var(--accent)" stroke-width="1"/>
          <line x1="{f2_x}" y1="{oy - 130}" x2="{f2_x}" y2="{oy - 110}" stroke="var(--accent)" stroke-width="1"/>
          <text x="{(ox + f2_x)/2}" y="{oy - 130}" fill="var(--accent)" font-size="12" font-family="Inter" text-anchor="middle">Focal length 15 cm</text>
        </svg>
        """

        body = f"""
        <div class="app-window">
          <header class="app-header">
            <div class="breadcrumb">
              <div class="window-dots">
                <div class="window-dot"></div>
                <div class="window-dot"></div>
                <div class="window-dot"></div>
              </div>
              <span class="sep" style="margin-left: 12px;">/</span>
              <span class="brand">Learniz</span>
              <span class="sep">›</span>
              <span>Physics · Class 10</span>
              <span class="sep">›</span>
              <span class="active">Light — Refraction by Spherical Lenses</span>
            </div>
            <div class="header-actions">
              <div class="chip">
                <span class="chip-dot"></span>
                <span>Real, inverted image</span>
              </div>
              <button class="btn btn-outline" style="font-size:12px; height:30px; padding:0 12px;">Reset Bench</button>
            </div>
          </header>

          <div style="flex: 1; display: flex; position: relative;">
            <div style="width: 380px; background: var(--surface); border-right: 1px solid var(--border); padding: 32px 28px; display: flex; flex-direction: column; gap: 28px; z-index: 10;">
              <div>
                <span class="label-tag">SIMULATION WORKBENCH</span>
                <h2 style="font-size: 20px; font-weight: 500; margin-top: 6px; letter-spacing: -0.01em;">Ray Optics Simulation</h2>
                <p style="font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.5;">Convex lens real-image formation at object distance 30 cm.</p>
              </div>

              <div class="card" style="padding: 20px; display: flex; flex-direction: column; gap: 20px; background: var(--bg);">
                <div class="slider-wrap">
                  <div class="slider-header">
                    <span class="slider-label">Object distance</span>
                    <span class="slider-val">30 cm</span>
                  </div>
                  <div class="slider-track">
                    <div class="slider-fill" style="width: 50%;"></div>
                    <div class="slider-thumb" style="left: 50%;"></div>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--subtle);">
                    <span>10 cm</span>
                    <span>30 cm (2F₁)</span>
                    <span>60 cm</span>
                  </div>
                </div>

                <div class="slider-wrap">
                  <div class="slider-header">
                    <span class="slider-label">Focal length</span>
                    <span class="slider-val">15 cm</span>
                  </div>
                  <div class="slider-track">
                    <div class="slider-fill" style="width: 37%;"></div>
                    <div class="slider-thumb" style="left: 37%;"></div>
                  </div>
                </div>
              </div>

              <div class="card" style="padding: 20px; display: flex; flex-direction: column; gap: 14px;">
                <span class="label-tag">EXPERIMENT METRICS</span>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 13px;">
                  <div style="background: rgba(233,233,237,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid var(--border);">
                    <div style="font-size: 11px; color: var(--muted);">Image distance</div>
                    <div style="font-size: 16px; font-weight: 500; color: var(--accent); margin-top: 4px;">+30 cm</div>
                  </div>
                  <div style="background: rgba(233,233,237,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid var(--border);">
                    <div style="font-size: 11px; color: var(--muted);">Magnification</div>
                    <div style="font-size: 16px; font-weight: 500; color: var(--text); margin-top: 4px;">-1.0×</div>
                  </div>
                </div>
                <div style="font-size: 12px; color: var(--muted); line-height: 1.5; border-top: 1px solid var(--border); padding-top: 10px;">
                  Nature: <span style="color: var(--text); font-weight: 500;">Real, inverted, same size</span>
                </div>
              </div>
            </div>

            <div style="flex: 1; position: relative; overflow: hidden; background: var(--bg);">
              {svg_content}

              <div style="position: absolute; bottom: 28px; left: 410px; right: 40px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; box-shadow: var(--shadow);">
                <div style="display: flex; align-items: center; gap: 24px; flex: 1;">
                  <span class="label-tag" style="white-space: nowrap;">OBJECT DISTANCE</span>
                  <div class="slider-track" style="flex: 1; max-width: 520px;">
                    <div class="slider-fill" style="width: 50%;"></div>
                    <div class="slider-thumb" style="left: 50%;"></div>
                  </div>
                  <span style="font-size: 14px; font-weight: 500; min-width: 60px;">30 cm</span>
                </div>
                <div style="display: flex; gap: 8px;">
                  <button class="btn btn-outline" style="height: 32px; font-size: 12px;">Step −1 cm</button>
                  <button class="btn btn-outline" style="height: 32px; font-size: 12px;">Step +1 cm</button>
                  <button class="btn btn-accent" style="height: 32px; font-size: 12px;">Lock Distance</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        """
    else:  # Option B: Asymmetric Panoramic
        ox = 680
        oy = 560
        f = 160
        u = 320
        h = 110
        obj_x = ox - u
        img_x = ox + u
        f1_x = ox - f
        f2_x = ox + f
        f2_2x = ox + 2*f
        f1_2x = ox - 2*f

        svg_content = f"""
        <svg class="optics-stage" viewBox="0 0 1600 1148" width="1600" height="1148">
          <defs>
            <pattern id="grid-b" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="var(--border)" stroke-width="0.75" opacity="0.3"/>
            </pattern>
            <marker id="ray-arrow-b" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent)" />
            </marker>
          </defs>

          <rect width="1600" height="1148" fill="url(#grid-b)" />

          <line x1="60" y1="{oy}" x2="1140" y2="{oy}" stroke="var(--border)" stroke-width="1.5" />
          <text x="1130" y="{oy - 12}" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="end" letter-spacing="0.06em">PRINCIPAL AXIS</text>

          <line x1="{f1_2x}" y1="{oy - 12}" x2="{f1_2x}" y2="{oy + 12}" stroke="var(--muted)" stroke-width="1.5" />
          <text x="{f1_2x}" y="{oy + 30}" fill="var(--text)" font-size="14" font-family="Inter" text-anchor="middle" font-weight="500">2F₁</text>
          <text x="{f1_2x}" y="{oy + 48}" fill="var(--subtle)" font-size="11" font-family="Inter" text-anchor="middle">-30 cm</text>

          <line x1="{f1_x}" y1="{oy - 12}" x2="{f1_x}" y2="{oy + 12}" stroke="var(--muted)" stroke-width="1.5" />
          <text x="{f1_x}" y="{oy + 30}" fill="var(--text)" font-size="14" font-family="Inter" text-anchor="middle" font-weight="500">F₁</text>
          <text x="{f1_x}" y="{oy + 48}" fill="var(--subtle)" font-size="11" font-family="Inter" text-anchor="middle">-15 cm</text>

          <circle cx="{ox}" cy="{oy}" r="4" fill="var(--text)" />
          <text x="{ox - 16}" y="{oy + 30}" fill="var(--text)" font-size="14" font-family="Inter" font-weight="500">O</text>

          <line x1="{f2_x}" y1="{oy - 12}" x2="{f2_x}" y2="{oy + 12}" stroke="var(--muted)" stroke-width="1.5" />
          <text x="{f2_x}" y="{oy + 30}" fill="var(--text)" font-size="14" font-family="Inter" text-anchor="middle" font-weight="500">F₂</text>
          <text x="{f2_x}" y="{oy + 48}" fill="var(--subtle)" font-size="11" font-family="Inter" text-anchor="middle">+15 cm</text>

          <line x1="{f2_2x}" y1="{oy - 12}" x2="{f2_2x}" y2="{oy + 12}" stroke="var(--muted)" stroke-width="1.5" />
          <text x="{f2_2x}" y="{oy + 30}" fill="var(--text)" font-size="14" font-family="Inter" text-anchor="middle" font-weight="500">2F₂</text>
          <text x="{f2_2x}" y="{oy + 48}" fill="var(--subtle)" font-size="11" font-family="Inter" text-anchor="middle">+30 cm</text>

          <path d="M {ox} {oy - 300} Q {ox + 60} {oy} {ox} {oy + 300} Q {ox - 60} {oy} {ox} {oy - 300} Z" 
                fill="rgba(145, 132, 217, 0.07)" stroke="var(--accent)" stroke-width="2" />
          <line x1="{ox}" y1="{oy - 290}" x2="{ox}" y2="{oy + 290}" stroke="var(--accent)" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
          <text x="{ox}" y="{oy - 315}" fill="var(--accent)" font-size="12" font-family="Inter" text-anchor="middle" font-weight="500">CONVEX LENS (f = 15 cm)</text>

          <line x1="{obj_x}" y1="{oy}" x2="{obj_x}" y2="{oy - h}" stroke="var(--text)" stroke-width="3.5" />
          <polygon points="{obj_x - 7},{oy - h + 16} {obj_x + 7},{oy - h + 16} {obj_x},{oy - h}" fill="var(--text)" />
          <rect x="{obj_x - 65}" y="{oy - h - 38}" width="130" height="28" rx="6" fill="var(--surface)" stroke="var(--border)" stroke-width="1"/>
          <text x="{obj_x}" y="{oy - h - 20}" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">Object (h = 4 cm)</text>

          <line x1="{img_x}" y1="{oy}" x2="{img_x}" y2="{oy + h}" stroke="var(--accent)" stroke-width="3.5" />
          <polygon points="{img_x - 7},{oy + h - 16} {img_x + 7},{oy + h - 16} {img_x},{oy + h}" fill="var(--accent)" />
          <rect x="{img_x - 65}" y="{oy + h + 18}" width="130" height="28" rx="6" fill="var(--surface)" stroke="var(--border)" stroke-width="1"/>
          <text x="{img_x}" y="{oy + h + 36}" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">Image (h' = 4 cm)</text>

          <!-- 3 Rays -->
          <path d="M {obj_x} {oy - h} L {ox} {oy - h}" stroke="var(--accent)" stroke-width="2" fill="none" />
          <line x1="{obj_x + 160}" y1="{oy - h}" x2="{obj_x + 165}" y2="{oy - h}" stroke="var(--accent)" stroke-width="2" marker-end="url(#ray-arrow-b)" />
          <path d="M {ox} {oy - h} L {img_x + 120} {oy + h + 82}" stroke="var(--accent)" stroke-width="2" fill="none" />
          <line x1="{ox + 80}" y1="{oy - h + 55}" x2="{ox + 85}" y2="{oy - h + 58}" stroke="var(--accent)" stroke-width="2" marker-end="url(#ray-arrow-b)" />

          <path d="M {obj_x} {oy - h} L {img_x + 120} {oy + h + 41}" stroke="var(--accent)" stroke-width="2" fill="none" />
          <line x1="{ox - 80}" y1="{oy - 27}" x2="{ox - 75}" y2="{oy - 25}" stroke="var(--accent)" stroke-width="2" marker-end="url(#ray-arrow-b)" />

          <path d="M {obj_x} {oy - h} L {ox} {oy + h}" stroke="var(--accent)" stroke-width="2" fill="none" />
          <line x1="{f1_x}" y1="{oy}" x2="{f1_x + 6}" y2="{oy + 8}" stroke="var(--accent)" stroke-width="2" marker-end="url(#ray-arrow-b)" />
          <path d="M {ox} {oy + h} L {img_x + 140} {oy + h}" stroke="var(--accent)" stroke-width="2" fill="none" />
          <line x1="{img_x - 80}" y1="{oy + h}" x2="{img_x - 75}" y2="{oy + h}" stroke="var(--accent)" stroke-width="2" marker-end="url(#ray-arrow-b)" />
        </svg>
        """

        body = f"""
        <div class="app-window">
          <header class="app-header">
            <div class="breadcrumb">
              <div class="window-dots">
                <div class="window-dot"></div>
                <div class="window-dot"></div>
                <div class="window-dot"></div>
              </div>
              <span class="sep" style="margin-left: 12px;">/</span>
              <span class="brand">Learniz</span>
              <span class="sep">›</span>
              <span>Ray Optics Suite</span>
              <span class="sep">›</span>
              <span class="active">Convex Lens Refraction</span>
            </div>
            <div class="header-actions">
              <div class="chip">
                <span class="chip-dot"></span>
                <span>Real, inverted image</span>
              </div>
            </div>
          </header>

          <div style="flex: 1; position: relative;">
            {svg_content}

            <!-- Top HUD Chips -->
            <div style="position: absolute; top: 24px; left: 40px; display: flex; gap: 12px; z-index: 10;">
              <div class="card" style="padding: 10px 18px; display: flex; align-items: center; gap: 12px;">
                <span class="label-tag">Focal length 15 cm</span>
              </div>
              <div class="card" style="padding: 10px 18px; display: flex; align-items: center; gap: 12px;">
                <span class="label-tag">Object distance 30 cm</span>
              </div>
            </div>

            <!-- Right Inspector Card -->
            <div class="card" style="position: absolute; top: 24px; right: 40px; width: 400px; padding: 28px; display: flex; flex-direction: column; gap: 24px; z-index: 10;">
              <div>
                <span class="label-tag">RAY OPTICS INSPECTOR</span>
                <h3 style="font-size: 18px; font-weight: 500; margin-top: 4px;">Principal Ray Traces</h3>
              </div>

              <div style="display: flex; flex-direction: column; gap: 12px; font-size: 13px;">
                <div style="padding: 12px; border-radius: 8px; background: rgba(233,233,237,0.03); border: 1px solid var(--border); display: flex; gap: 10px;">
                  <span style="color: var(--accent); font-weight: 500;">Ray 1:</span>
                  <span style="color: var(--muted);">Parallel to principal axis, bends through focal point F₂.</span>
                </div>
                <div style="padding: 12px; border-radius: 8px; background: rgba(233,233,237,0.03); border: 1px solid var(--border); display: flex; gap: 10px;">
                  <span style="color: var(--accent); font-weight: 500;">Ray 2:</span>
                  <span style="color: var(--muted);">Through optical centre O, emerges straight without deviation.</span>
                </div>
                <div style="padding: 12px; border-radius: 8px; background: rgba(233,233,237,0.03); border: 1px solid var(--border); display: flex; gap: 10px;">
                  <span style="color: var(--accent); font-weight: 500;">Ray 3:</span>
                  <span style="color: var(--muted);">Through front focus F₁, emerges parallel to principal axis.</span>
                </div>
              </div>

              <div class="slider-wrap">
                <div class="slider-header">
                  <span class="slider-label">Object distance</span>
                  <span class="slider-val">30 cm</span>
                </div>
                <div class="slider-track">
                  <div class="slider-fill" style="width: 50%;"></div>
                  <div class="slider-thumb" style="left: 50%;"></div>
                </div>
              </div>
            </div>

            <!-- Bottom Slider Row -->
            <div class="card" style="position: absolute; bottom: 32px; left: 40px; right: 460px; padding: 20px 28px; display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center; gap: 24px; flex: 1;">
                <span class="label-tag">OBJECT DISTANCE</span>
                <div class="slider-track" style="flex: 1; max-width: 480px;">
                  <div class="slider-fill" style="width: 50%;"></div>
                  <div class="slider-thumb" style="left: 50%;"></div>
                </div>
                <span style="font-size: 15px; font-weight: 500;">30 cm</span>
              </div>
              <button class="btn btn-accent" style="font-size: 12px; height: 34px;">Calibrate</button>
            </div>
          </div>
        </div>
        """

    return f"<!DOCTYPE html><html><head><meta charset='utf-8'><style>{base_css}</style></head><body>{body}</body></html>"


# --- SIM PHOTOSYNTHESIS (Option A & B, Dark & Light) ---
def generate_photosynthesis_html(theme="dark", variant="A"):
    base_css = get_base_css(theme)
    if variant == "A":
        # Two-zone split anatomy: Thylakoid light reactions on left, Calvin cycle on right
        body = f"""
        <div class="app-window">
          <header class="app-header">
            <div class="breadcrumb">
              <div class="window-dots">
                <div class="window-dot"></div>
                <div class="window-dot"></div>
                <div class="window-dot"></div>
              </div>
              <span class="sep" style="margin-left: 12px;">/</span>
              <span class="brand">Learniz</span>
              <span class="sep">›</span>
              <span>Biology · Class 10</span>
              <span class="sep">›</span>
              <span>Life Processes</span>
              <span class="sep">›</span>
              <span class="active">Chloroplast Photosynthesis</span>
            </div>
            <div class="header-actions">
              <div class="chip">
                <span class="chip-dot"></span>
                <span>Rate rising</span>
              </div>
              <button class="btn btn-outline" style="font-size:12px; height:30px; padding:0 12px;">Reset</button>
            </div>
          </header>

          <div style="flex: 1; display: flex; position: relative;">
            <!-- Left Controls Sidebar -->
            <div style="width: 380px; background: var(--surface); border-right: 1px solid var(--border); padding: 32px 28px; display: flex; flex-direction: column; gap: 24px; z-index: 10;">
              <div>
                <span class="label-tag">EXPERIMENT CONTROLS</span>
                <h2 style="font-size: 20px; font-weight: 500; margin-top: 6px;">Photosynthesis Simulation</h2>
                <p style="font-size: 13px; color: var(--muted); margin-top: 6px; line-height: 1.5;">Biochemical rate kinetics in chloroplast thylakoids and stroma.</p>
              </div>

              <!-- Sliders -->
              <div class="card" style="padding: 20px; display: flex; flex-direction: column; gap: 20px; background: var(--bg);">
                <div class="slider-wrap">
                  <div class="slider-header">
                    <span class="slider-label">Light intensity</span>
                    <span class="slider-val">750 lx</span>
                  </div>
                  <div class="slider-track">
                    <div class="slider-fill" style="width: 65%;"></div>
                    <div class="slider-thumb" style="left: 65%;"></div>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--subtle);">
                    <span>0 lx</span>
                    <span>750 lx (Optimum)</span>
                    <span>1200 lx</span>
                  </div>
                </div>

                <div class="slider-wrap">
                  <div class="slider-header">
                    <span class="slider-label">CO₂ concentration</span>
                    <span class="slider-val">420 ppm</span>
                  </div>
                  <div class="slider-track">
                    <div class="slider-fill" style="width: 55%;"></div>
                    <div class="slider-thumb" style="left: 55%;"></div>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--subtle);">
                    <span>200 ppm</span>
                    <span>420 ppm</span>
                    <span>800 ppm</span>
                  </div>
                </div>
              </div>

              <!-- Telemetry Card with small bar readout O2 released -->
              <div class="card" style="padding: 20px; display: flex; flex-direction: column; gap: 16px;">
                <span class="label-tag">REACTION READOUT</span>
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
                    <span style="font-size: 13px; color: var(--muted);">O₂ released</span>
                    <span style="font-size: 18px; font-weight: 500; color: var(--accent);">14.8 mL/hr</span>
                  </div>
                  <div style="height: 8px; background: rgba(233,233,237,0.1); border-radius: 999px; overflow: hidden;">
                    <div style="width: 74%; height: 100%; background: var(--accent); border-radius: 999px;"></div>
                  </div>
                </div>

                <div style="border-top: 1px solid var(--border); padding-top: 12px; display: flex; flex-direction: column; gap: 8px; font-size: 12px; color: var(--muted);">
                  <div style="display: flex; justify-content: space-between;">
                    <span>ATP / NADPH Pool:</span>
                    <span style="color: var(--text); font-weight: 500;">Active steady-state</span>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span>Carbon Fixation:</span>
                    <span style="color: var(--text); font-weight: 500;">9.2 μmol/mg Chl/h</span>
                  </div>
                </div>
              </div>

              <div style="margin-top: auto; font-size: 11px; color: var(--subtle); line-height: 1.4;">
                CBSE Biology · Class 10 Life Processes (Autotrophic Nutrition)
              </div>
            </div>

            <!-- Main Chloroplast Stage -->
            <div style="flex: 1; position: relative; background: var(--bg); overflow: hidden; padding: 40px;">
              <svg viewBox="0 0 1140 1060" width="100%" height="100%">
                <defs>
                  <linearGradient id="chloro-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="var(--surface)" />
                    <stop offset="100%" stop-color="#1a1d2e" />
                  </linearGradient>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent)" />
                  </marker>
                </defs>

                <!-- Outer Chloroplast Capsule -->
                <rect x="20" y="20" width="1100" height="980" rx="48" fill="url(#chloro-bg)" stroke="var(--border)" stroke-width="2"/>
                <rect x="28" y="28" width="1084" height="964" rx="40" fill="none" stroke="rgba(233,233,237,0.08)" stroke-width="1.5"/>

                <text x="60" y="70" fill="var(--muted)" font-size="12" font-family="Inter" letter-spacing="0.06em">CHLOROPLAST CROSS-SECTION (DOUBLE MEMBRANE ENVELOPE)</text>
                <text x="1080" y="70" fill="var(--subtle)" font-size="12" font-family="Inter" text-anchor="end">STROMA MATRIX</text>

                <!-- Divider between Light Reactions and Calvin Cycle -->
                <line x1="560" y1="110" x2="560" y2="940" stroke="var(--border)" stroke-width="1.5" stroke-dasharray="6 6"/>

                <!-- LEFT SIDE: LIGHT-DEPENDENT REACTIONS (Thylakoid stacks) -->
                <g transform="translate(60, 110)">
                  <text x="0" y="30" fill="var(--text)" font-size="18" font-family="Inter" font-weight="500">Light-Dependent Reactions</text>
                  <text x="0" y="52" fill="var(--muted)" font-size="12" font-family="Inter">Thylakoid Membrane System (Grana)</text>

                  <!-- Sunlight input icon/arrow -->
                  <path d="M 40 80 L 120 160" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#arrow)"/>
                  <text x="30" y="74" fill="var(--accent)" font-size="13" font-family="Inter" font-weight="500">Light Energy (hν)</text>

                  <!-- Water Photolysis -->
                  <rect x="30" y="210" width="180" height="90" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>
                  <text x="45" y="238" fill="var(--muted)" font-size="11" font-family="Inter" letter-spacing="0.04em">PHOTOLYSIS OF WATER</text>
                  <text x="45" y="265" fill="var(--text)" font-size="15" font-family="Inter" font-weight="500">2H₂O → O₂ + 4H⁺ + 4e⁻</text>
                  <text x="45" y="285" fill="var(--accent)" font-size="12" font-family="Inter">O₂ Released to atmosphere</text>

                  <!-- Thylakoid Stacks Graphic (Grana) -->
                  <g transform="translate(100, 340)">
                    <text x="70" y="-15" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">Thylakoid Stack (Granum)</text>
                    <!-- Disk 1 -->
                    <rect x="0" y="0" width="140" height="24" rx="12" fill="var(--accent-tint)" stroke="var(--accent)" stroke-width="1.5"/>
                    <!-- Disk 2 -->
                    <rect x="0" y="32" width="140" height="24" rx="12" fill="var(--accent-tint)" stroke="var(--accent)" stroke-width="1.5"/>
                    <!-- Disk 3 -->
                    <rect x="0" y="64" width="140" height="24" rx="12" fill="var(--accent-tint)" stroke="var(--accent)" stroke-width="1.5"/>
                    <!-- Disk 4 -->
                    <rect x="0" y="96" width="140" height="24" rx="12" fill="var(--accent-tint)" stroke="var(--accent)" stroke-width="1.5"/>
                    <!-- Disk 5 -->
                    <rect x="0" y="128" width="140" height="24" rx="12" fill="var(--accent-tint)" stroke="var(--accent)" stroke-width="1.5"/>

                    <!-- Lamella bridge to stack 2 -->
                    <path d="M 140 76 Q 190 76 220 76" stroke="var(--accent)" stroke-width="2" fill="none"/>

                    <!-- Stack 2 -->
                    <g transform="translate(220, 16)">
                      <rect x="0" y="0" width="120" height="22" rx="11" fill="var(--accent-tint)" stroke="var(--accent)" stroke-width="1.5"/>
                      <rect x="0" y="28" width="120" height="22" rx="11" fill="var(--accent-tint)" stroke="var(--accent)" stroke-width="1.5"/>
                      <rect x="0" y="56" width="120" height="22" rx="11" fill="var(--accent-tint)" stroke="var(--accent)" stroke-width="1.5"/>
                      <rect x="0" y="84" width="120" height="22" rx="11" fill="var(--accent-tint)" stroke="var(--accent)" stroke-width="1.5"/>
                    </g>
                  </g>

                  <!-- Photosystem badges -->
                  <rect x="40" y="560" width="190" height="64" rx="8" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>
                  <text x="56" y="586" fill="var(--text)" font-size="13" font-family="Inter" font-weight="500">Photosystem II & I</text>
                  <text x="56" y="606" fill="var(--muted)" font-size="11" font-family="Inter">Chlorophyll a / b excitation</text>

                  <!-- Energy carrier transfers to Right side -->
                  <path d="M 360 380 C 440 380, 460 330, 530 330" stroke="var(--accent)" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
                  <rect x="410" y="315" width="90" height="24" rx="6" fill="var(--bg)" stroke="var(--accent)" stroke-width="1"/>
                  <text x="455" y="331" fill="var(--text)" font-size="11" font-family="Inter" text-anchor="middle" font-weight="500">ATP & NADPH</text>

                  <path d="M 530 450 C 460 450, 440 500, 360 500" stroke="var(--border)" stroke-width="1.5" stroke-dasharray="4 4" fill="none" marker-end="url(#arrow)"/>
                  <rect x="410" y="475" width="90" height="24" rx="6" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>
                  <text x="455" y="491" fill="var(--muted)" font-size="11" font-family="Inter" text-anchor="middle">ADP + Pi / NADP⁺</text>
                </g>

                <!-- RIGHT SIDE: CALVIN CYCLE (Light-Independent Reactions) -->
                <g transform="translate(600, 110)">
                  <text x="0" y="30" fill="var(--text)" font-size="18" font-family="Inter" font-weight="500">Calvin Cycle</text>
                  <text x="0" y="52" fill="var(--muted)" font-size="12" font-family="Inter">Light-Independent Reactions (Stroma)</text>

                  <!-- CO2 Inflow -->
                  <path d="M 220 70 L 220 150" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#arrow)"/>
                  <rect x="150" y="40" width="140" height="30" rx="6" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>
                  <text x="220" y="60" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">CO₂ from Stomata</text>

                  <!-- Calvin Cycle Circle -->
                  <g transform="translate(220, 340)">
                    <circle cx="0" cy="0" r="160" fill="none" stroke="var(--border)" stroke-width="2"/>
                    <circle cx="0" cy="0" r="160" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="140 600"/>

                    <text x="0" y="-10" fill="var(--text)" font-size="16" font-family="Inter" text-anchor="middle" font-weight="500">RuBisCO</text>
                    <text x="0" y="14" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">Carboxylation Enzyme</text>

                    <!-- Phase 1: Carbon Fixation -->
                    <rect x="-100" y="-195" width="200" height="36" rx="8" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>
                    <text x="0" y="-172" fill="var(--text)" font-size="12" font-family="Inter" text-anchor="middle" font-weight="500">1. Carbon Fixation (RuBP + CO₂)</text>

                    <!-- Phase 2: Reduction -->
                    <rect x="75" y="30" width="180" height="36" rx="8" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>
                    <text x="165" y="53" fill="var(--text)" font-size="12" font-family="Inter" text-anchor="middle" font-weight="500">2. Reduction (3-PGA → G3P)</text>

                    <!-- Phase 3: Regeneration -->
                    <rect x="-255" y="30" width="180" height="36" rx="8" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>
                    <text x="-165" y="53" fill="var(--text)" font-size="12" font-family="Inter" text-anchor="middle" font-weight="500">3. Regeneration of RuBP</text>

                    <!-- Sugar output -->
                    <path d="M 90 120 L 160 210" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#arrow)"/>
                    <rect x="130" y="215" width="160" height="48" rx="8" fill="var(--bg)" stroke="var(--accent)" stroke-width="1.5"/>
                    <text x="210" y="238" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">Glucose Synthesised</text>
                    <text x="210" y="254" fill="var(--muted)" font-size="11" font-family="Inter" text-anchor="middle">C₆H₁₂O₆ (Stored Starch)</text>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        """
    else:  # Option B: Asymmetric Workbench with Environmental curves
        body = f"""
        <div class="app-window">
          <header class="app-header">
            <div class="breadcrumb">
              <div class="window-dots">
                <div class="window-dot"></div>
                <div class="window-dot"></div>
                <div class="window-dot"></div>
              </div>
              <span class="sep" style="margin-left: 12px;">/</span>
              <span class="brand">Learniz</span>
              <span class="sep">›</span>
              <span>Cellular Energetics</span>
              <span class="sep">›</span>
              <span class="active">Photosynthesis Kinetics (Class 10)</span>
            </div>
            <div class="header-actions">
              <div class="chip">
                <span class="chip-dot"></span>
                <span>Rate rising</span>
              </div>
            </div>
          </header>

          <div style="flex: 1; display: flex; position: relative;">
            <div style="width: 420px; background: var(--surface); border-right: 1px solid var(--border); padding: 32px 28px; display: flex; flex-direction: column; gap: 24px; z-index: 10;">
              <div>
                <span class="label-tag">SIMULATION SUITE</span>
                <h2 style="font-size: 20px; font-weight: 500; margin-top: 6px;">Environmental Chambers</h2>
                <p style="font-size: 13px; color: var(--muted); margin-top: 6px;">Adjust irradiance and atmospheric carbon dioxide to examine chloroplast flux.</p>
              </div>

              <div class="card" style="padding: 20px; display: flex; flex-direction: column; gap: 20px; background: var(--bg);">
                <div class="slider-wrap">
                  <div class="slider-header">
                    <span class="slider-label">Light intensity</span>
                    <span class="slider-val">750 lx</span>
                  </div>
                  <div class="slider-track">
                    <div class="slider-fill" style="width: 65%;"></div>
                    <div class="slider-thumb" style="left: 65%;"></div>
                  </div>
                </div>

                <div class="slider-wrap">
                  <div class="slider-header">
                    <span class="slider-label">CO₂ concentration</span>
                    <span class="slider-val">420 ppm</span>
                  </div>
                  <div class="slider-track">
                    <div class="slider-fill" style="width: 55%;"></div>
                    <div class="slider-thumb" style="left: 55%;"></div>
                  </div>
                </div>
              </div>

              <!-- Bar readout card -->
              <div class="card" style="padding: 20px; display: flex; flex-direction: column; gap: 14px;">
                <span class="label-tag">REAL-TIME O₂ FLUX</span>
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
                    <span style="font-size: 13px; color: var(--muted);">O₂ released</span>
                    <span style="font-size: 18px; font-weight: 500; color: var(--accent);">14.8 mL/hr</span>
                  </div>
                  <div style="height: 8px; background: rgba(233,233,237,0.1); border-radius: 999px; overflow: hidden;">
                    <div style="width: 74%; height: 100%; background: var(--accent); border-radius: 999px;"></div>
                  </div>
                </div>
                <div style="font-size: 12px; color: var(--muted); border-top: 1px solid var(--border); padding-top: 10px;">
                  Status: <span style="color: var(--text); font-weight: 500;">Rate rising (Sub-saturation phase)</span>
                </div>
              </div>

              <!-- Response curve diagram -->
              <div class="card" style="padding: 20px; background: var(--bg); display: flex; flex-direction: column; gap: 12px;">
                <span class="label-tag">BLACKMAN'S LAW OF LIMITING FACTORS</span>
                <svg viewBox="0 0 320 140" width="100%" height="130">
                  <line x1="30" y1="110" x2="300" y2="110" stroke="var(--border)" stroke-width="1"/>
                  <line x1="30" y1="20" x2="30" y2="110" stroke="var(--border)" stroke-width="1"/>
                  <!-- Curve -->
                  <path d="M 30 110 Q 140 40 300 35" fill="none" stroke="var(--accent)" stroke-width="2"/>
                  <!-- Operating point dot -->
                  <circle cx="170" cy="50" r="5" fill="#f5f4ff" stroke="var(--accent)" stroke-width="2"/>
                  <text x="180" y="46" fill="var(--text)" font-size="11" font-family="Inter" font-weight="500">Current (750 lx)</text>
                  <text x="165" y="125" fill="var(--subtle)" font-size="10" font-family="Inter" text-anchor="middle">Light Intensity →</text>
                  <text x="15" y="65" fill="var(--subtle)" font-size="10" font-family="Inter" transform="rotate(-90 15 65)" text-anchor="middle">Rate →</text>
                </svg>
              </div>
            </div>

            <!-- Viewport with Thylakoids and Calvin Cycle -->
            <div style="flex: 1; padding: 40px; background: var(--bg); display: flex; align-items: center; justify-content: center;">
              <div class="card" style="width: 100%; height: 100%; padding: 36px; display: flex; flex-direction: column; justify-content: space-between;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <span class="label-tag">CHLOROPLAST STROMA ULTRASTRUCTURE</span>
                    <h3 style="font-size: 18px; font-weight: 500; margin-top: 4px;">Coupled Photochemical & Enzymatic Reactions</h3>
                  </div>
                  <div class="chip">
                    <span class="chip-dot"></span>
                    <span>Rate rising</span>
                  </div>
                </div>

                <!-- Graphic representation -->
                <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; margin: 40px 0;">
                  <!-- Thylakoid Column -->
                  <div style="width: 380px; background: rgba(233,233,237,0.03); border: 1px solid var(--border); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 16px;">
                    <div style="font-size: 14px; font-weight: 500; color: var(--text);">Thylakoid Grana (Light Reactions)</div>
                    <div style="font-size: 12px; color: var(--muted); line-height: 1.5;">Photolysis of H₂O generates electrons, protons, and gaseous O₂.</div>
                    
                    <div style="display: flex; gap: 8px; margin: 12px 0;">
                      <div style="flex: 1; height: 16px; background: var(--accent-tint); border: 1px solid var(--accent); border-radius: 4px;"></div>
                      <div style="flex: 1; height: 16px; background: var(--accent-tint); border: 1px solid var(--accent); border-radius: 4px;"></div>
                      <div style="flex: 1; height: 16px; background: var(--accent-tint); border: 1px solid var(--accent); border-radius: 4px;"></div>
                    </div>

                    <div style="background: var(--bg); padding: 12px; border-radius: 6px; border: 1px solid var(--border); font-size: 12px;">
                      <span style="color: var(--accent); font-weight: 500;">Product:</span> O₂ released (14.8 mL/hr)
                    </div>
                  </div>

                  <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                    <span style="font-size: 12px; font-weight: 500; color: var(--accent);">ATP + NADPH →</span>
                    <div style="width: 120px; height: 2px; background: var(--accent);"></div>
                    <span style="font-size: 11px; color: var(--subtle);">← ADP + NADP⁺</span>
                  </div>

                  <!-- Stroma Calvin Cycle Column -->
                  <div style="width: 380px; background: rgba(233,233,237,0.03); border: 1px solid var(--border); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; gap: 16px;">
                    <div style="font-size: 14px; font-weight: 500; color: var(--text);">Stroma Matrix (Calvin Cycle)</div>
                    <div style="font-size: 12px; color: var(--muted); line-height: 1.5;">Enzymatic reduction of CO₂ mediated by RuBisCO to produce triose sugars.</div>

                    <div style="border: 1px dashed var(--accent); border-radius: 8px; padding: 12px; text-align: center; font-size: 12px; color: var(--text);">
                      RuBP (5C) + CO₂ (1C) → 2 × 3-PGA (3C)
                    </div>

                    <div style="background: var(--bg); padding: 12px; border-radius: 6px; border: 1px solid var(--border); font-size: 12px;">
                      <span style="color: var(--text); font-weight: 500;">End Product:</span> Hexose sugars (Starch)
                    </div>
                  </div>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 20px;">
                  <span style="font-size: 12px; color: var(--muted);">Simulation active · Timestep 0.05s · Atmospheric pCO₂ 420 ppm</span>
                  <button class="btn btn-accent" style="font-size: 12px; height: 34px;">Export Kinetic Log</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        """

    return f"<!DOCTYPE html><html><head><meta charset='utf-8'><style>{base_css}</style></head><body>{body}</body></html>"


# --- EXAM BUILDER SCHEDULE (1600x1000, Option A & B, Dark & Light) ---
def generate_exam_builder_html(theme="dark", variant="A"):
    base_css = get_base_css(theme)
    if variant == "A":
        # Two-column layout: Left column exam syllabus & sections; Right column delivery parameters & schedule
        body = f"""
        <div class="app-window">
          <header class="app-header">
            <div class="breadcrumb">
              <div class="window-dots">
                <div class="window-dot"></div>
                <div class="window-dot"></div>
                <div class="window-dot"></div>
              </div>
              <span class="sep" style="margin-left: 12px;">/</span>
              <span class="brand">Learniz</span>
              <span class="sep">›</span>
              <span>Assessment Engine</span>
              <span class="sep">›</span>
              <span class="active">Schedule Examination</span>
            </div>
            <div class="header-actions">
              <span class="label-tag" style="margin-right: 8px;">DRAFT SAVED 2 MIN AGO</span>
              <button class="btn btn-outline" style="font-size: 12px; height: 32px;">Save Template</button>
              <button class="btn btn-accent" style="font-size: 12px; height: 32px;">Push to classes</button>
            </div>
          </header>

          <div style="flex: 1; display: grid; grid-template-columns: 1fr 520px; overflow: hidden; background: var(--bg);">
            <!-- Left Column: Syllabus & Sections -->
            <div style="padding: 44px 56px; overflow-y: auto; border-right: 1px solid var(--border); display: flex; flex-direction: column; gap: 32px;">
              <div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                  <span class="label-tag">EXAMINATION BLUEPRINT</span>
                  <span style="width: 4px; height: 4px; border-radius: 50%; background: var(--subtle);"></span>
                  <span style="font-size: 12px; color: var(--accent); font-weight: 500;">CBSE Class 9 Standard</span>
                </div>
                <h1 style="font-size: 26px; font-weight: 500; letter-spacing: -0.01em;">Class 9 · Physics › Unit Test 3</h1>
                <p style="font-size: 14px; color: var(--muted); margin-top: 6px;">Motion and Laws of Motion · Core Evaluative Assessment</p>
              </div>

              <!-- Sections breakdown -->
              <div style="display: flex; flex-direction: column; gap: 18px;">
                <!-- Section A -->
                <div class="card" style="padding: 24px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 10px;">
                        <h3 style="font-size: 16px; font-weight: 500;">Section A · Multiple Choice</h3>
                        <span class="chip" style="font-size: 11px; padding: 2px 8px;">10 Questions</span>
                      </div>
                      <p style="font-size: 13px; color: var(--muted); margin-top: 4px;">Conceptual recall, units and dimensions, Newton's first & second laws.</p>
                    </div>
                    <div style="text-align: right;">
                      <div style="font-size: 15px; font-weight: 500; color: var(--text);">10 Marks</div>
                      <div style="font-size: 11px; color: var(--subtle);">1 mark each</div>
                    </div>
                  </div>
                  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <span style="background: rgba(233,233,237,0.05); border: 1px solid var(--border); padding: 4px 10px; border-radius: 6px; font-size: 11px; color: var(--muted);">Q1–Q4 Inertia & Mass</span>
                    <span style="background: rgba(233,233,237,0.05); border: 1px solid var(--border); padding: 4px 10px; border-radius: 6px; font-size: 11px; color: var(--muted);">Q5–Q8 F = ma Calculations</span>
                    <span style="background: rgba(233,233,237,0.05); border: 1px solid var(--border); padding: 4px 10px; border-radius: 6px; font-size: 11px; color: var(--muted);">Q9–Q10 Action-Reaction</span>
                  </div>
                </div>

                <!-- Section B -->
                <div class="card" style="padding: 24px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 10px;">
                        <h3 style="font-size: 16px; font-weight: 500;">Section B · Short Answer</h3>
                        <span class="chip" style="font-size: 11px; padding: 2px 8px;">5 Questions</span>
                      </div>
                      <p style="font-size: 13px; color: var(--muted); margin-top: 4px;">Free-body diagrams, momentum conservation numericals, step evaluation.</p>
                    </div>
                    <div style="text-align: right;">
                      <div style="font-size: 15px; font-weight: 500; color: var(--text);">15 Marks</div>
                      <div style="font-size: 11px; color: var(--subtle);">3 marks each</div>
                    </div>
                  </div>
                  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <span style="background: rgba(233,233,237,0.05); border: 1px solid var(--border); padding: 4px 10px; border-radius: 6px; font-size: 11px; color: var(--muted);">Q11 Recoil of Rifle</span>
                    <span style="background: rgba(233,233,237,0.05); border: 1px solid var(--border); padding: 4px 10px; border-radius: 6px; font-size: 11px; color: var(--muted);">Q12 Momentum Graph</span>
                    <span style="background: rgba(233,233,237,0.05); border: 1px solid var(--border); padding: 4px 10px; border-radius: 6px; font-size: 11px; color: var(--muted);">Q13–Q15 Friction Forces</span>
                  </div>
                </div>

                <!-- Section C -->
                <div class="card" style="padding: 24px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 10px;">
                        <h3 style="font-size: 16px; font-weight: 500;">Section C · Case-Based Analysis</h3>
                        <span class="chip" style="font-size: 11px; padding: 2px 8px;">3 Questions</span>
                      </div>
                      <p style="font-size: 13px; color: var(--muted); margin-top: 4px;">High-order thinking (HOTS) simulation scenario: vehicle passenger collision impulse.</p>
                    </div>
                    <div style="text-align: right;">
                      <div style="font-size: 15px; font-weight: 500; color: var(--text);">15 Marks</div>
                      <div style="font-size: 11px; color: var(--subtle);">5 marks each</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Summary bar -->
              <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid var(--border); font-size: 13px; color: var(--muted);">
                <span>Total 18 questions across 3 sections</span>
                <span style="color: var(--text); font-weight: 500;">Grand Total: 40 Marks</span>
              </div>
            </div>

            <!-- Right Column: Parameters & Scheduling -->
            <div style="padding: 44px 40px; background: var(--surface); display: flex; flex-direction: column; gap: 32px; overflow-y: auto;">
              <div>
                <span class="label-tag">DELIVERY CONSTRAINTS</span>
                <h2 style="font-size: 20px; font-weight: 500; margin-top: 6px;">Evaluation Parameters</h2>
              </div>

              <!-- Parameters grid -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="card" style="padding: 16px 20px; background: var(--bg);">
                  <span class="label-tag">DURATION</span>
                  <div style="font-size: 22px; font-weight: 500; color: var(--text); margin-top: 6px;">45 min</div>
                  <div style="font-size: 11px; color: var(--muted); margin-top: 2px;">Strict auto-submit</div>
                </div>
                <div class="card" style="padding: 16px 20px; background: var(--bg);">
                  <span class="label-tag">NEGATIVE MARKING</span>
                  <div style="font-size: 22px; font-weight: 500; color: var(--accent); margin-top: 6px;">−0.25</div>
                  <div style="font-size: 11px; color: var(--muted); margin-top: 2px;">Section A only</div>
                </div>
                <div class="card" style="padding: 16px 20px; background: var(--bg);">
                  <span class="label-tag">PASS MARK</span>
                  <div style="font-size: 22px; font-weight: 500; color: var(--text); margin-top: 6px;">40 %</div>
                  <div style="font-size: 11px; color: var(--muted); margin-top: 2px;">16 / 40 minimum</div>
                </div>
                <div class="card" style="padding: 16px 20px; background: var(--bg); display: flex; flex-direction: column; justify-content: space-between;">
                  <span class="label-tag">SHUFFLE QUESTIONS</span>
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 6px;">
                    <span style="font-size: 14px; font-weight: 500; color: var(--text);">Enabled</span>
                    <div style="width: 36px; height: 20px; background: var(--accent); border-radius: 999px; position: relative;">
                      <div style="position: absolute; right: 2px; top: 2px; width: 16px; height: 16px; border-radius: 50%; background: #ffffff;"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Schedule Row -->
              <div class="card" style="padding: 24px; display: flex; flex-direction: column; gap: 16px; border-color: rgba(145, 132, 217, 0.3);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span class="label-tag" style="color: var(--accent);">ASSIGNED TIMETABLE SLOT</span>
                  <span class="chip" style="font-size: 11px; padding: 2px 8px;">Locked</span>
                </div>
                <div>
                  <div style="font-size: 18px; font-weight: 500; color: var(--text);">Friday 9:40 · 9-A, 9-B</div>
                  <div style="font-size: 13px; color: var(--muted); margin-top: 4px;">Physics Department Lab · 78 Registered Students</div>
                </div>
                <div style="display: flex; gap: 10px;">
                  <span style="background: rgba(233,233,237,0.06); padding: 4px 10px; border-radius: 6px; font-size: 12px; color: var(--muted);">Room 204 (9-A)</span>
                  <span style="background: rgba(233,233,237,0.06); padding: 4px 10px; border-radius: 6px; font-size: 12px; color: var(--muted);">Room 205 (9-B)</span>
                </div>
              </div>

              <!-- Push to classes button -->
              <div style="margin-top: auto; display: flex; flex-direction: column; gap: 12px;">
                <button class="btn btn-accent" style="height: 48px; font-size: 15px; border-width: 1.5px; width: 100%;">Push to classes</button>
                <div style="text-align: center; font-size: 12px; color: var(--subtle);">
                  Synchronises live question paper to student devices at 9:39 AM.
                </div>
              </div>
            </div>
          </div>
        </div>
        """
    else:  # Option B: Stepper / Asymmetric Timeline Layout
        body = f"""
        <div class="app-window">
          <header class="app-header">
            <div class="breadcrumb">
              <div class="window-dots">
                <div class="window-dot"></div>
                <div class="window-dot"></div>
                <div class="window-dot"></div>
              </div>
              <span class="sep" style="margin-left: 12px;">/</span>
              <span class="brand">Learniz</span>
              <span class="sep">›</span>
              <span>Assessments</span>
              <span class="sep">›</span>
              <span class="active">Dispatch Engine</span>
            </div>
            <div class="header-actions">
              <button class="btn btn-accent" style="font-size: 12px; height: 32px;">Push to classes</button>
            </div>
          </header>

          <div style="flex: 1; padding: 40px 60px; overflow-y: auto; background: var(--bg); display: flex; flex-direction: column; gap: 32px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <span class="label-tag">SCHEDULE ASSESSMENT WORKFLOW</span>
                <h1 style="font-size: 26px; font-weight: 500; margin-top: 6px;">Class 9 · Physics › Unit Test 3</h1>
                <p style="font-size: 14px; color: var(--muted); margin-top: 4px;">Sections A (MCQ 10), B (Short 5), C (Case 3) · 40 Marks</p>
              </div>
              <div style="display: flex; gap: 12px;">
                <div class="chip">
                  <span class="chip-dot"></span>
                  <span>Friday 9:40 · 9-A, 9-B</span>
                </div>
              </div>
            </div>

            <!-- Horizontal Cards Grid -->
            <div style="display: grid; grid-template-columns: 2fr 1.2fr; gap: 28px;">
              <!-- Left Big Card: Question Structure -->
              <div class="card" style="padding: 32px; display: flex; flex-direction: column; gap: 24px;">
                <span class="label-tag">QUESTION STRUCTURE & MARKS DISTRIBUTION</span>
                
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  <div style="display: flex; justify-content: space-between; padding: 14px 18px; border-radius: 8px; background: rgba(233,233,237,0.03); border: 1px solid var(--border);">
                    <div>
                      <div style="font-size: 14px; font-weight: 500; color: var(--text);">Section A · Multiple Choice</div>
                      <div style="font-size: 12px; color: var(--muted);">10 Questions · 1 Mark each</div>
                    </div>
                    <span style="font-size: 14px; font-weight: 500; color: var(--text);">10 Marks</span>
                  </div>

                  <div style="display: flex; justify-content: space-between; padding: 14px 18px; border-radius: 8px; background: rgba(233,233,237,0.03); border: 1px solid var(--border);">
                    <div>
                      <div style="font-size: 14px; font-weight: 500; color: var(--text);">Section B · Short Answer</div>
                      <div style="font-size: 12px; color: var(--muted);">5 Questions · 3 Marks each</div>
                    </div>
                    <span style="font-size: 14px; font-weight: 500; color: var(--text);">15 Marks</span>
                  </div>

                  <div style="display: flex; justify-content: space-between; padding: 14px 18px; border-radius: 8px; background: rgba(233,233,237,0.03); border: 1px solid var(--border);">
                    <div>
                      <div style="font-size: 14px; font-weight: 500; color: var(--text);">Section C · Long / Case Study</div>
                      <div style="font-size: 12px; color: var(--muted);">3 Questions · 5 Marks each</div>
                    </div>
                    <span style="font-size: 14px; font-weight: 500; color: var(--text);">15 Marks</span>
                  </div>
                </div>

                <div style="border-top: 1px solid var(--border); padding-top: 16px; display: flex; justify-content: space-between; font-size: 13px; color: var(--muted);">
                  <span>Assessment Type: Periodic Unit Test</span>
                  <span style="color: var(--text); font-weight: 500;">Grand Total: 18 Questions (40 Marks)</span>
                </div>
              </div>

              <!-- Right Card: Scheduling & Parameters -->
              <div class="card" style="padding: 32px; display: flex; flex-direction: column; gap: 24px;">
                <span class="label-tag">DELIVERY RULES</span>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                  <div style="padding: 12px 14px; border-radius: 8px; background: rgba(233,233,237,0.03); border: 1px solid var(--border);">
                    <div style="font-size: 11px; color: var(--muted);">Timer</div>
                    <div style="font-size: 16px; font-weight: 500; color: var(--text); margin-top: 4px;">45 min</div>
                  </div>
                  <div style="padding: 12px 14px; border-radius: 8px; background: rgba(233,233,237,0.03); border: 1px solid var(--border);">
                    <div style="font-size: 11px; color: var(--muted);">Negative marking</div>
                    <div style="font-size: 16px; font-weight: 500; color: var(--accent); margin-top: 4px;">−0.25</div>
                  </div>
                  <div style="padding: 12px 14px; border-radius: 8px; background: rgba(233,233,237,0.03); border: 1px solid var(--border);">
                    <div style="font-size: 11px; color: var(--muted);">Pass mark</div>
                    <div style="font-size: 16px; font-weight: 500; color: var(--text); margin-top: 4px;">40 %</div>
                  </div>
                  <div style="padding: 12px 14px; border-radius: 8px; background: rgba(233,233,237,0.03); border: 1px solid var(--border);">
                    <div style="font-size: 11px; color: var(--muted);">Question shuffle</div>
                    <div style="font-size: 16px; font-weight: 500; color: var(--text); margin-top: 4px;">Enabled</div>
                  </div>
                </div>

                <div style="padding: 16px; border-radius: 8px; background: rgba(145,132,217,0.06); border: 1px solid rgba(145,132,217,0.3);">
                  <div style="font-size: 11px; color: var(--accent); font-weight: 500; letter-spacing: 0.04em;">SCHEDULE ROW</div>
                  <div style="font-size: 16px; font-weight: 500; color: var(--text); margin-top: 4px;">Friday 9:40 · 9-A, 9-B</div>
                </div>

                <button class="btn btn-accent" style="height: 44px; font-size: 14px; border-width: 1.5px; width: 100%;">Push to classes</button>
              </div>
            </div>
          </div>
        </div>
        """

    return f"<!DOCTYPE html><html><head><meta charset='utf-8'><style>{base_css}</style></head><body>{body}</body></html>"


# --- VIDEO POSTER OVERVIEW (1600x900, Option A & B, Dark UI, no play button, no titles) ---
def generate_video_poster_overview_html(theme="dark", variant="A"):
    base_css = get_base_css(theme)
    if variant == "A":
        # Horizontal class-wise accuracy bars
        classes = [
            ("Class 6-A", 74), ("Class 6-B", 78),
            ("Class 7-A", 69), ("Class 7-B", 72),
            ("Class 8-A", 84), ("Class 8-B", 81),
            ("Class 9-A", 88), ("Class 9-B", 91),
            ("Class 10-A", 85), ("Class 10-B", 89)
        ]
        bars_html = ""
        for name, pct in classes:
            bars_html += f"""
            <div style="display: flex; align-items: center; gap: 20px;">
              <span style="width: 90px; font-size: 13px; color: var(--muted); text-align: right;">{name}</span>
              <div style="flex: 1; height: 18px; background: rgba(233,233,237,0.08); border-radius: 4px; overflow: hidden; position: relative;">
                <div style="width: {pct}%; height: 100%; background: var(--accent); border-radius: 4px;"></div>
              </div>
              <span style="width: 44px; font-size: 13px; font-weight: 500; color: var(--text);">{pct}%</span>
            </div>
            """

        body = f"""
        <div class="app-window" style="background: var(--bg);">
          <div style="padding: 40px 60px; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
            <!-- Top Metrics Row -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;">
              <div class="card" style="padding: 22px;">
                <span class="label-tag">SYLLABUS MASTERY</span>
                <div style="font-size: 26px; font-weight: 500; color: var(--text); margin-top: 6px;">81.2%</div>
                <div style="font-size: 12px; color: var(--accent); margin-top: 2px;">+4.8% this term</div>
              </div>
              <div class="card" style="padding: 22px;">
                <span class="label-tag">ACTIVE CLASSES</span>
                <div style="font-size: 26px; font-weight: 500; color: var(--text); margin-top: 6px;">18 / 18</div>
                <div style="font-size: 12px; color: var(--muted); margin-top: 2px;">100% participation</div>
              </div>
              <div class="card" style="padding: 22px;">
                <span class="label-tag">EXPERIMENTS CONDUCTED</span>
                <div style="font-size: 26px; font-weight: 500; color: var(--text); margin-top: 6px;">342</div>
                <div style="font-size: 12px; color: var(--muted); margin-top: 2px;">Science & Maths labs</div>
              </div>
              <div class="card" style="padding: 22px;">
                <span class="label-tag">DIAGNOSTIC ALERTS</span>
                <div style="font-size: 26px; font-weight: 500; color: var(--text); margin-top: 6px;">2 Units</div>
                <div style="font-size: 12px; color: var(--muted); margin-top: 2px;">Remediation queued</div>
              </div>
            </div>

            <!-- Central Card: Class-wise Concept Accuracy Bar Chart -->
            <div class="card" style="padding: 32px 40px; display: flex; flex-direction: column; gap: 22px; flex: 1; margin: 24px 0;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <span class="label-tag">COHORT PERFORMANCE</span>
                  <h2 style="font-size: 20px; font-weight: 500; margin-top: 4px;">Class-wise Concept Accuracy — Science & Mathematics</h2>
                </div>
                <div style="display: flex; gap: 8px;">
                  <span class="chip" style="font-size: 11px;">CBSE Term 2</span>
                  <span class="chip" style="font-size: 11px; background: rgba(233,233,237,0.06); color: var(--muted); border-color: var(--border);">Benchmark 75%</span>
                </div>
              </div>

              <!-- Bar Chart -->
              <div style="display: flex; flex-direction: column; gap: 14px; flex: 1; justify-content: center;">
                {bars_html}
              </div>
            </div>

            <!-- Bottom breadcrumb / meta -->
            <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--subtle);">
              <span>Learniz Institutional Analytics · Real-time aggregation across secondary classrooms</span>
              <span>Updated 3 minutes ago</span>
            </div>
          </div>
        </div>
        """
    else:  # Option B: Vertical Column Chart with Cohort Drilldown
        body = f"""
        <div class="app-window" style="background: var(--bg);">
          <div style="padding: 44px 60px; height: 100%; display: flex; flex-direction: column; gap: 28px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <span class="label-tag">EXECUTIVE PERFORMANCE OVERVIEW</span>
                <h1 style="font-size: 24px; font-weight: 500; margin-top: 4px;">Class-wise Concept Accuracy Benchmark</h1>
              </div>
              <div class="chip">
                <span class="chip-dot"></span>
                <span>Term II Consolidated</span>
              </div>
            </div>

            <!-- Chart Card -->
            <div class="card" style="padding: 36px 44px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <svg viewBox="0 0 1400 520" width="100%" height="100%">
                <!-- Gridlines -->
                <line x1="80" y1="80" x2="1360" y2="80" stroke="var(--border)" stroke-width="1" stroke-dasharray="4 4"/>
                <text x="60" y="84" fill="var(--subtle)" font-size="11" font-family="Inter" text-anchor="end">100%</text>

                <line x1="80" y1="180" x2="1360" y2="180" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="6 6"/>
                <text x="60" y="184" fill="var(--accent)" font-size="11" font-family="Inter" text-anchor="end">Target 75%</text>

                <line x1="80" y1="280" x2="1360" y2="280" stroke="var(--border)" stroke-width="1" stroke-dasharray="4 4"/>
                <text x="60" y="284" fill="var(--subtle)" font-size="11" font-family="Inter" text-anchor="end">50%</text>

                <line x1="80" y1="380" x2="1360" y2="380" stroke="var(--border)" stroke-width="1" stroke-dasharray="4 4"/>
                <text x="60" y="384" fill="var(--subtle)" font-size="11" font-family="Inter" text-anchor="end">25%</text>

                <line x1="80" y1="460" x2="1360" y2="460" stroke="var(--border)" stroke-width="1.5"/>

                <!-- 10 Vertical Bars -->
                <!-- Base Y: 460. Height scale: 100% = 380px (3.8px per %) -->
                <!-- Bar width: 68px. Gap: 128px -->
                <!-- Classes: 6A(74%), 6B(78%), 7A(69%), 7B(72%), 8A(84%), 8B(81%), 9A(88%), 9B(91%), 10A(85%), 10B(89%) -->
                
                <!-- 6A -->
                <rect x="120" y="179" width="68" height="281" rx="6" fill="var(--accent)" />
                <text x="154" y="165" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">74%</text>
                <text x="154" y="490" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">6-A</text>

                <!-- 6B -->
                <rect x="240" y="164" width="68" height="296" rx="6" fill="var(--accent)" />
                <text x="274" y="150" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">78%</text>
                <text x="274" y="490" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">6-B</text>

                <!-- 7A -->
                <rect x="360" y="198" width="68" height="262" rx="6" fill="var(--accent)" opacity="0.85"/>
                <text x="394" y="184" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">69%</text>
                <text x="394" y="490" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">7-A</text>

                <!-- 7B -->
                <rect x="480" y="186" width="68" height="274" rx="6" fill="var(--accent)" />
                <text x="514" y="172" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">72%</text>
                <text x="514" y="490" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">7-B</text>

                <!-- 8A -->
                <rect x="600" y="141" width="68" height="319" rx="6" fill="var(--accent)" />
                <text x="634" y="127" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">84%</text>
                <text x="634" y="490" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">8-A</text>

                <!-- 8B -->
                <rect x="720" y="152" width="68" height="308" rx="6" fill="var(--accent)" />
                <text x="754" y="138" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">81%</text>
                <text x="754" y="490" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">8-B</text>

                <!-- 9A -->
                <rect x="840" y="126" width="68" height="334" rx="6" fill="var(--accent)" />
                <text x="874" y="112" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">88%</text>
                <text x="874" y="490" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">9-A</text>

                <!-- 9B -->
                <rect x="960" y="114" width="68" height="346" rx="6" fill="var(--accent)" />
                <text x="994" y="100" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">91%</text>
                <text x="994" y="490" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">9-B</text>

                <!-- 10A -->
                <rect x="1080" y="137" width="68" height="323" rx="6" fill="var(--accent)" />
                <text x="1114" y="123" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">85%</text>
                <text x="1114" y="490" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">10-A</text>

                <!-- 10B -->
                <rect x="1200" y="122" width="68" height="338" rx="6" fill="var(--accent)" />
                <text x="1234" y="108" fill="var(--text)" font-size="13" font-family="Inter" text-anchor="middle" font-weight="500">89%</text>
                <text x="1234" y="490" fill="var(--muted)" font-size="12" font-family="Inter" text-anchor="middle">10-B</text>
              </svg>
            </div>
          </div>
        </div>
        """

    return f"<!DOCTYPE html><html><head><meta charset='utf-8'><style>{base_css}</style></head><body>{body}</body></html>"


# --- VIDEO POSTER ANALYTICS (1600x900, Option A & B, Dark UI, no play button, no titles) ---
def generate_video_poster_analytics_html(theme="dark", variant="A"):
    base_css = get_base_css(theme)
    if variant == "A":
        # 25 small squares (5x5 grid), exactly two outlined in accent with "below 33 %"
        # We'll mark Q14 (28%) and Q21 (31%) as below 33%
        cells_html = ""
        accuracies = [
            88, 76, 92, 84, 70,
            68, 82, 95, 78, 64,
            81, 74, 89, 28, 79,  # Q14 is index 13 -> 28%
            85, 90, 72, 86, 67,
            31, 80, 83, 75, 94   # Q21 is index 20 -> 31%
        ]

        for i, acc in enumerate(accuracies):
            q_num = i + 1
            if q_num in (14, 21):
                # Outlined in blurple accent #9184d9
                cells_html += f"""
                <div style="position: relative; aspect-ratio: 1; border-radius: 8px; background: rgba(145, 132, 217, 0.12); border: 2px solid var(--accent); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 0 16px rgba(145, 132, 217, 0.25);">
                  <span style="font-size: 13px; font-weight: 500; color: var(--text);">Q{q_num}</span>
                  <span style="font-size: 12px; color: var(--accent); font-weight: 500; margin-top: 2px;">{acc}%</span>
                  <div style="position: absolute; bottom: -8px; background: var(--accent-tint); color: var(--accent-chip-text); font-size: 9px; font-weight: 500; padding: 2px 5px; border-radius: 4px; border: 1px solid var(--accent); white-space: nowrap;">below 33 %</div>
                </div>
                """
            else:
                # Normal question cell
                cells_html += f"""
                <div style="aspect-ratio: 1; border-radius: 8px; background: rgba(233, 233, 237, 0.04); border: 1px solid var(--border); display: flex; flex-direction: column; align-items: center; justify-content: center;">
                  <span style="font-size: 13px; font-weight: 500; color: var(--muted);">Q{q_num}</span>
                  <span style="font-size: 12px; color: var(--text); margin-top: 2px;">{acc}%</span>
                </div>
                """

        body = f"""
        <div class="app-window" style="background: var(--bg);">
          <div style="padding: 44px 60px; height: 100%; display: grid; grid-template-columns: 1fr 480px; gap: 40px;">
            <!-- Left Side: 25-Question Matrix -->
            <div class="card" style="padding: 36px 40px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <span class="label-tag">QUESTION ACCURACY HEATMAP</span>
                    <h2 style="font-size: 20px; font-weight: 500; margin-top: 4px;">Physics Unit Test 3 · 25 Questions Matrix</h2>
                  </div>
                  <div class="chip">
                    <span class="chip-dot"></span>
                    <span>2 Remedial Flags</span>
                  </div>
                </div>
                <p style="font-size: 13px; color: var(--muted); margin-top: 6px;">
                  Granular question-level concept resolution across all tested candidates.
                </p>
              </div>

              <!-- 5x5 Grid (25 questions) -->
              <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin: 24px 0;">
                {cells_html}
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 14px; font-size: 12px; color: var(--muted);">
                <span>Critical Threshold: &lt; 33% triggers remediation</span>
                <span style="color: var(--accent); font-weight: 500;">Q14 (28%) & Q21 (31%) flagged</span>
              </div>
            </div>

            <!-- Right Side: Deep Misconception Breakdown -->
            <div style="display: flex; flex-direction: column; gap: 20px;">
              <div class="card" style="padding: 28px; border-color: rgba(145, 132, 217, 0.4); display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                  <span class="chip" style="font-size: 11px; padding: 2px 8px;">Flagged · below 33 %</span>
                  <span style="font-size: 16px; font-weight: 500; color: var(--accent);">28% Accuracy</span>
                </div>
                <div>
                  <h3 style="font-size: 17px; font-weight: 500;">Q14 · Convex Mirror Focal Sign</h3>
                  <p style="font-size: 13px; color: var(--muted); margin-top: 4px;">Light — Reflection and Refraction · 3 Marks</p>
                </div>
                <div style="background: rgba(233,233,237,0.03); border: 1px solid var(--border); border-radius: 8px; padding: 14px; font-size: 12px; line-height: 1.5; color: var(--muted);">
                  <strong style="color: var(--text);">Misconception Diagnosed:</strong><br>
                  68% of candidates erroneously treated the focal length of a convex mirror as negative (confusing it with concave mirror convention).
                </div>
              </div>

              <div class="card" style="padding: 28px; border-color: rgba(145, 132, 217, 0.4); display: flex; flex-direction: column; gap: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                  <span class="chip" style="font-size: 11px; padding: 2px 8px;">Flagged · below 33 %</span>
                  <span style="font-size: 16px; font-weight: 500; color: var(--accent);">31% Accuracy</span>
                </div>
                <div>
                  <h3 style="font-size: 17px; font-weight: 500;">Q21 · Momentum Recoil Equation</h3>
                  <p style="font-size: 13px; color: var(--muted); margin-top: 4px;">Forces and Laws of Motion · 5 Marks</p>
                </div>
                <div style="background: rgba(233,233,237,0.03); border: 1px solid var(--border); border-radius: 8px; padding: 14px; font-size: 12px; line-height: 1.5; color: var(--muted);">
                  <strong style="color: var(--text);">Misconception Diagnosed:</strong><br>
                  59% of students omitted vector sign direction when calculating the recoil velocity of the artillery carriage.
                </div>
              </div>

              <div class="card" style="padding: 20px 24px; background: rgba(145,132,217,0.05); border: 1px solid rgba(145,132,217,0.3); display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-size: 13px; font-weight: 500; color: var(--text);">Push 10-Min Remedial Module</div>
                  <div style="font-size: 11px; color: var(--muted);">Interactive ray-optics recalibration</div>
                </div>
                <button class="btn btn-accent" style="height: 32px; font-size: 12px;">Deploy</button>
              </div>
            </div>
          </div>
        </div>
        """
    else:  # Option B: Cohort Matrix View
        cells_html = ""
        accuracies = [
            88, 76, 92, 84, 70,
            68, 82, 95, 78, 64,
            81, 74, 89, 28, 79,
            85, 90, 72, 86, 67,
            31, 80, 83, 75, 94
        ]
        for i, acc in enumerate(accuracies):
            q_num = i + 1
            if q_num in (14, 21):
                cells_html += f"""
                <div style="padding: 16px 20px; border-radius: 8px; background: rgba(145, 132, 217, 0.12); border: 2px solid var(--accent); display: flex; align-items: center; justify-content: space-between; box-shadow: 0 0 12px rgba(145, 132, 217, 0.2);">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="font-size: 15px; font-weight: 500; color: var(--text);">Question {q_num}</span>
                    <span class="chip" style="font-size: 10px; padding: 2px 6px;">below 33 %</span>
                  </div>
                  <span style="font-size: 18px; font-weight: 500; color: var(--accent);">{acc}%</span>
                </div>
                """
            else:
                cells_html += f"""
                <div style="padding: 16px 20px; border-radius: 8px; background: rgba(233, 233, 237, 0.03); border: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between;">
                  <span style="font-size: 14px; font-weight: 500; color: var(--muted);">Question {q_num}</span>
                  <span style="font-size: 15px; font-weight: 500; color: var(--text);">{acc}%</span>
                </div>
                """

        body = f"""
        <div class="app-window" style="background: var(--bg);">
          <div style="padding: 44px 60px; height: 100%; display: flex; flex-direction: column; gap: 28px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
              <div>
                <span class="label-tag">DIAGNOSTIC MATRIX</span>
                <h1 style="font-size: 24px; font-weight: 500; margin-top: 4px;">25-Item Question Difficulty Heatmap</h1>
              </div>
              <div class="chip">
                <span class="chip-dot"></span>
                <span>Two outlier questions below 33%</span>
              </div>
            </div>

            <div class="card" style="padding: 32px; flex: 1; overflow-y: auto;">
              <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px;">
                {cells_html}
              </div>
            </div>
          </div>
        </div>
        """

    return f"<!DOCTYPE html><html><head><meta charset='utf-8'><style>{base_css}</style></head><body>{body}</body></html>"

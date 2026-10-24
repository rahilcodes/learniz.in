"""
Batch renderer for Learniz UI assets
Renders both Option A and Option B, along with light theme variants.
Outputs into previews directory for user presentation.
"""

from pathlib import Path
from PIL import Image
from generate_ui_assets import render_html_to_png
import build_templates

OUTPUT_DIR = Path(r"C:\Users\DELL\.gemini\antigravity\brain\dcbb5150-932e-4df1-ac4a-7a6e10a8275f\previews")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

tasks = [
    # 1. sim-ray-optics (1600x1200)
    {
        "name": "sim-ray-optics-opt-a",
        "w": 1600, "h": 1200,
        "html": build_templates.generate_ray_optics_html(theme="dark", variant="A")
    },
    {
        "name": "sim-ray-optics-opt-b",
        "w": 1600, "h": 1200,
        "html": build_templates.generate_ray_optics_html(theme="dark", variant="B")
    },
    {
        "name": "sim-ray-optics-light-opt-a",
        "w": 1600, "h": 1200,
        "html": build_templates.generate_ray_optics_html(theme="light", variant="A")
    },
    # 2. sim-photosynthesis (1600x1200)
    {
        "name": "sim-photosynthesis-opt-a",
        "w": 1600, "h": 1200,
        "html": build_templates.generate_photosynthesis_html(theme="dark", variant="A")
    },
    {
        "name": "sim-photosynthesis-opt-b",
        "w": 1600, "h": 1200,
        "html": build_templates.generate_photosynthesis_html(theme="dark", variant="B")
    },
    {
        "name": "sim-photosynthesis-light-opt-a",
        "w": 1600, "h": 1200,
        "html": build_templates.generate_photosynthesis_html(theme="light", variant="A")
    },
    # 3. exam-builder-schedule (1600x1000)
    {
        "name": "exam-builder-schedule-opt-a",
        "w": 1600, "h": 1000,
        "html": build_templates.generate_exam_builder_html(theme="dark", variant="A")
    },
    {
        "name": "exam-builder-schedule-opt-b",
        "w": 1600, "h": 1000,
        "html": build_templates.generate_exam_builder_html(theme="dark", variant="B")
    },
    {
        "name": "exam-builder-schedule-light-opt-a",
        "w": 1600, "h": 1000,
        "html": build_templates.generate_exam_builder_html(theme="light", variant="A")
    },
    # 7a. video-poster-overview (1600x900)
    {
        "name": "video-poster-overview-opt-a",
        "w": 1600, "h": 900,
        "html": build_templates.generate_video_poster_overview_html(theme="dark", variant="A")
    },
    {
        "name": "video-poster-overview-opt-b",
        "w": 1600, "h": 900,
        "html": build_templates.generate_video_poster_overview_html(theme="dark", variant="B")
    },
    # 7c. video-poster-analytics (1600x900)
    {
        "name": "video-poster-analytics-opt-a",
        "w": 1600, "h": 900,
        "html": build_templates.generate_video_poster_analytics_html(theme="dark", variant="A")
    },
    {
        "name": "video-poster-analytics-opt-b",
        "w": 1600, "h": 900,
        "html": build_templates.generate_video_poster_analytics_html(theme="dark", variant="B")
    },
]

print(f"Starting batch render of {len(tasks)} assets...")
for t in tasks:
    out_1x = OUTPUT_DIR / f"{t['name']}.png"
    out_2x = OUTPUT_DIR / f"{t['name']}@2x.png"
    render_html_to_png(t['html'], out_1x, out_2x, t['w'], t['h'])

# Generate 2x for teacher poster options as well
im_ta = Image.open(OUTPUT_DIR / "video-poster-teacher-opt-a.png")
im_ta_2x = im_ta.resize((3200, 1800), Image.Resampling.LANCZOS)
im_ta_2x.save(OUTPUT_DIR / "video-poster-teacher-opt-a@2x.png", "PNG")

im_tb = Image.open(OUTPUT_DIR / "video-poster-teacher-opt-b.png")
im_tb_2x = im_tb.resize((3200, 1800), Image.Resampling.LANCZOS)
im_tb_2x.save(OUTPUT_DIR / "video-poster-teacher-opt-b@2x.png", "PNG")
print("Saved teacher poster 2x files.")

print("\n--- ALL ASSETS SUCCESSFULLY RENDERED ---")

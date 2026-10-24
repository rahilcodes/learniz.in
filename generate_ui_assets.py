"""
Generate pixel-perfect UI screenshots for Learniz
Adheres strictly to the Nocturne design system:
- Ground: #161826
- Surface: #232532
- Text: #e9e9ed
- Muted: #cfd3e5 / #b2b6ca
- Accent: #9184d9
- Chip: #423a6a bg with #f5f4ff text
- Hairline dividers: rgba(233, 233, 237, 0.16)
- Radii: 8px controls, 14px cards
- Font: Inter (400, 500)
"""

import base64
import os
import subprocess
from pathlib import Path
from PIL import Image

BASE_DIR = Path(r"C:\learniz.in")
OUTPUT_DIR = Path(r"C:\Users\DELL\.gemini\antigravity\brain\dcbb5150-932e-4df1-ac4a-7a6e10a8275f\previews")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
TEMP_HTML_DIR = BASE_DIR / "temp_render_html"
TEMP_HTML_DIR.mkdir(parents=True, exist_ok=True)

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

# Base64 encode local fonts for zero-latency, 100% reliable font rendering
font_400_path = BASE_DIR / "dist" / "assets" / "fonts" / "inter-latin-400-normal.woff2"
font_500_path = BASE_DIR / "dist" / "assets" / "fonts" / "inter-latin-500-normal.woff2"

b64_font_400 = base64.b64encode(font_400_path.read_bytes()).decode('ascii')
b64_font_500 = base64.b64encode(font_500_path.read_bytes()).decode('ascii')

def get_base_css(theme="dark"):
    if theme == "dark":
        return f"""
@font-face {{
  font-family: 'Inter';
  font-weight: 400;
  src: url('data:font/woff2;base64,{b64_font_400}') format('woff2');
}}
@font-face {{
  font-family: 'Inter';
  font-weight: 500;
  src: url('data:font/woff2;base64,{b64_font_500}') format('woff2');
}}

:root {{
  --bg: #161826;
  --surface: #232532;
  --surface-hover: #2b2e3e;
  --text: #e9e9ed;
  --muted: #b2b6ca;
  --subtle: #75798c;
  --accent: #9184d9;
  --accent-tint: #423a6a;
  --accent-chip-text: #f5f4ff;
  --border: rgba(233, 233, 237, 0.16);
  --border-focus: rgba(145, 132, 217, 0.5);
  --shadow: 0 0 0 1px rgba(233,233,237,0.1), 0 8px 24px rgba(0,0,0,0.45);
  --radius-card: 14px;
  --radius-ctrl: 8px;
}}

* {{ box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }}
body {{
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}}
.app-window {{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}}
.app-header {{
  height: 52px;
  background: #1b1e2c;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  user-select: none;
}}
.window-dots {{
  display: flex;
  gap: 7px;
  align-items: center;
}}
.window-dot {{
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgba(233, 233, 237, 0.2);
}}
.breadcrumb {{
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--muted);
}}
.breadcrumb .brand {{
  font-weight: 500;
  color: var(--text);
  letter-spacing: -0.01em;
}}
.breadcrumb .sep {{
  color: var(--subtle);
  font-size: 11px;
}}
.breadcrumb .active {{
  color: var(--text);
}}
.header-actions {{
  display: flex;
  align-items: center;
  gap: 12px;
}}
.label-tag {{
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}}
.chip {{
  background: var(--accent-tint);
  color: var(--accent-chip-text);
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: var(--radius-ctrl);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(145, 132, 217, 0.3);
}}
.chip-dot {{
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}}
.card {{
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow);
}}
.btn {{
  height: 34px;
  padding: 0 16px;
  border-radius: var(--radius-ctrl);
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
}}
.btn-outline {{
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
}}
.btn-accent {{
  background: transparent;
  border: 1px solid var(--accent);
  color: #f5f4ff;
  box-shadow: 0 0 12px rgba(145, 132, 217, 0.2);
}}
.slider-wrap {{
  display: flex;
  flex-direction: column;
  gap: 8px;
}}
.slider-header {{
  display: flex;
  justify-content: space-between;
  align-items: center;
}}
.slider-label {{
  font-size: 12px;
  color: var(--muted);
}}
.slider-val {{
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  font-variant-numeric: tabular-nums;
}}
.slider-track {{
  position: relative;
  height: 5px;
  background: rgba(233, 233, 237, 0.12);
  border-radius: 999px;
  width: 100%;
}}
.slider-fill {{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--accent);
  border-radius: 999px;
}}
.slider-thumb {{
  position: absolute;
  top: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #f5f4ff;
  border: 2px solid var(--accent);
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 6px rgba(0,0,0,0.5);
}}
"""
    else:  # Light theme variant
        return f"""
@font-face {{
  font-family: 'Inter';
  font-weight: 400;
  src: url('data:font/woff2;base64,{b64_font_400}') format('woff2');
}}
@font-face {{
  font-family: 'Inter';
  font-weight: 500;
  src: url('data:font/woff2;base64,{b64_font_500}') format('woff2');
}}

:root {{
  --bg: #f7f7fb;
  --surface: #ffffff;
  --surface-hover: #f0f1f7;
  --text: #161826;
  --muted: #595d6c;
  --subtle: #9397ab;
  --accent: #6d5fc4;
  --accent-tint: #e7e5fe;
  --accent-chip-text: #2b2741;
  --border: rgba(22, 24, 38, 0.12);
  --border-focus: rgba(109, 95, 196, 0.5);
  --shadow: 0 0 0 1px rgba(22,24,38,0.06), 0 8px 24px rgba(22,24,38,0.08);
  --radius-card: 14px;
  --radius-ctrl: 8px;
}}

* {{ box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }}
body {{
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}}
.app-window {{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}}
.app-header {{
  height: 52px;
  background: #f0f1f7;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  user-select: none;
}}
.window-dots {{
  display: flex;
  gap: 7px;
  align-items: center;
}}
.window-dot {{
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgba(22, 24, 38, 0.2);
}}
.breadcrumb {{
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--muted);
}}
.breadcrumb .brand {{
  font-weight: 500;
  color: var(--text);
  letter-spacing: -0.01em;
}}
.breadcrumb .sep {{
  color: var(--subtle);
  font-size: 11px;
}}
.breadcrumb .active {{
  color: var(--text);
}}
.header-actions {{
  display: flex;
  align-items: center;
  gap: 12px;
}}
.label-tag {{
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}}
.chip {{
  background: var(--accent-tint);
  color: var(--accent-chip-text);
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: var(--radius-ctrl);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(109, 95, 196, 0.3);
}}
.chip-dot {{
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}}
.card {{
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow);
}}
.btn {{
  height: 34px;
  padding: 0 16px;
  border-radius: var(--radius-ctrl);
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
}}
.btn-outline {{
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
}}
.btn-accent {{
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
  box-shadow: 0 0 12px rgba(109, 95, 196, 0.12);
}}
.slider-wrap {{
  display: flex;
  flex-direction: column;
  gap: 8px;
}}
.slider-header {{
  display: flex;
  justify-content: space-between;
  align-items: center;
}}
.slider-label {{
  font-size: 12px;
  color: var(--muted);
}}
.slider-val {{
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  font-variant-numeric: tabular-nums;
}}
.slider-track {{
  position: relative;
  height: 5px;
  background: rgba(22, 24, 38, 0.12);
  border-radius: 999px;
  width: 100%;
}}
.slider-fill {{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--accent);
  border-radius: 999px;
}}
.slider-thumb {{
  position: absolute;
  top: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid var(--accent);
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}}
"""

def render_html_to_png(html_content, out_path_1x, out_path_2x, width, height):
    temp_file = TEMP_HTML_DIR / f"temp_{Path(out_path_1x).stem}.html"
    temp_file.write_text(html_content, encoding='utf-8')
    temp_file_url = f"file:///{str(temp_file).replace('\\', '/')}"
    
    # Render at 2x using Chrome headless
    temp_raw_2x = TEMP_HTML_DIR / f"raw_2x_{Path(out_path_1x).stem}.png"
    args = [
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--allow-file-access-from-files",
        f"--window-size={width},{height}",
        "--force-device-scale-factor=2",
        "--hide-scrollbars",
        f"--screenshot={str(temp_raw_2x)}",
        temp_file_url
    ]
    subprocess.run(args, check=True)
    
    # Save 2x
    img_2x = Image.open(temp_raw_2x)
    img_2x.save(out_path_2x, "PNG")
    
    # Downsample with Lanczos to exact 1x for crisp preview
    img_1x = img_2x.resize((width, height), Image.Resampling.LANCZOS)
    img_1x.save(out_path_1x, "PNG")
    
    print(f"Rendered: {Path(out_path_1x).name} ({width}x{height}) & 2x ({img_2x.width}x{img_2x.height})")
    
    # Clean up temp raw
    try:
        temp_raw_2x.unlink()
        temp_file.unlink()
    except Exception:
        pass

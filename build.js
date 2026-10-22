/**
 * Learniz Static Site Generator
 * Compiles all pages into dist/ & docs/ with clean URLs, sitemap.xml & robots.txt
 */

import fs from 'fs';
import path from 'path';

// Page Renderers
import { renderHomePage } from './src/pages/home.js';
import { renderAcademizPage } from './src/pages/academiz.js';
import { renderInteractiveAnimationsPage } from './src/pages/features_interactive_animations.js';
import { renderIntelliQPage } from './src/pages/features_intelliq.js';
import { renderLmsExamBuilderPage } from './src/pages/features_lms_exam_builder.js';
import { renderAnalyticsPage } from './src/pages/features_analytics.js';
import { renderForInstitutionsPage } from './src/pages/for_institutions.js';
import { renderForTeachersPage } from './src/pages/for_teachers.js';
import { renderForStudentsPage } from './src/pages/for_students.js';
import { renderForParentsPage } from './src/pages/for_parents.js';
import { renderSeeItLivePage } from './src/pages/see_it_live.js';
import { renderFoundingSchoolsPage } from './src/pages/founding_schools.js';
import { renderAboutPage } from './src/pages/about.js';
import { renderBlogPage } from './src/pages/blog.js';
import { renderBlogPostNepPage } from './src/pages/blog_post_nep.js';
import { renderBlogPostAiPage } from './src/pages/blog_post_ai.js';
import { renderFaqPage } from './src/pages/faq.js';
import { renderContactPage } from './src/pages/contact.js';
import { renderBookDemoPage } from './src/pages/book_demo.js';
import { renderPrivacyPage } from './src/pages/privacy.js';
import { renderTermsPage } from './src/pages/terms.js';
import { renderRefundPage } from './src/pages/refund.js';
import { renderLpFoundingSchoolsPage } from './src/pages/lp_founding_schools.js';
import { renderLpDemoPage } from './src/pages/lp_demo.js';

const DIST = path.resolve('dist');
const DOCS = path.resolve('docs');

// Base path configuration for GitHub Pages (default: '/learniz.in')
// Can be overridden via BASE_PATH="" for custom domains or root deployments
const BASE_PATH = process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : '/learniz.in';

// Route Registry
const routes = [
  { url: '/', render: renderHomePage, priority: '1.0', changefreq: 'weekly', aliases: ['home.dc.html', 'index.html'] },
  { url: '/platform', render: renderAcademizPage, priority: '0.9', changefreq: 'weekly', aliases: ['platform.html', 'platform.dc.html'] },
  { url: '/academiz', render: renderAcademizPage, priority: '0.8', changefreq: 'weekly', aliases: ['academiz.html', 'academiz.dc.html'] },
  { url: '/features/interactive-animations', render: renderInteractiveAnimationsPage, priority: '0.8', changefreq: 'weekly', aliases: ['features-interactive-animations.html', 'features-interactive-animations.dc.html'] },
  { url: '/features/intelliq', render: renderIntelliQPage, priority: '0.8', changefreq: 'weekly', aliases: ['features-intelliq.html', 'features-intelliq.dc.html'] },
  { url: '/features/lms-exam-builder', render: renderLmsExamBuilderPage, priority: '0.8', changefreq: 'weekly', aliases: ['features-lms-exam-builder.html', 'features-lms-exam-builder.dc.html'] },
  { url: '/features/analytics', render: renderAnalyticsPage, priority: '0.8', changefreq: 'weekly', aliases: ['features-analytics.html', 'features-analytics.dc.html'] },
  { url: '/for-institutions', render: renderForInstitutionsPage, priority: '0.8', changefreq: 'weekly', aliases: ['for-institutions.html', 'for-institutions.dc.html'] },
  { url: '/for-teachers', render: renderForTeachersPage, priority: '0.8', changefreq: 'weekly', aliases: ['for-teachers.html', 'for-teachers.dc.html'] },
  { url: '/for-students', render: renderForStudentsPage, priority: '0.7', changefreq: 'weekly', aliases: ['for-students.html', 'for-students.dc.html'] },
  { url: '/for-parents', render: renderForParentsPage, priority: '0.7', changefreq: 'weekly', aliases: ['for-parents.html', 'for-parents.dc.html'] },
  { url: '/see-it-live', render: renderSeeItLivePage, priority: '0.8', changefreq: 'weekly', aliases: ['see-it-live.html', 'see-it-live.dc.html'] },
  { url: '/founding-schools', render: renderFoundingSchoolsPage, priority: '0.9', changefreq: 'weekly', aliases: ['founding-schools.html', 'founding-schools.dc.html'] },
  { url: '/about', render: renderAboutPage, priority: '0.7', changefreq: 'monthly', aliases: ['about.html', 'about.dc.html'] },
  { url: '/blog', render: renderBlogPage, priority: '0.8', changefreq: 'weekly', aliases: ['blog.html', 'blog.dc.html'] },
  { url: '/blog/what-experiential-learning-means-under-nep-2020', render: renderBlogPostNepPage, priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/how-ai-question-generators-save-teachers-5-hours-a-week', render: renderBlogPostAiPage, priority: '0.7', changefreq: 'monthly' },
  { url: '/faq', render: renderFaqPage, priority: '0.7', changefreq: 'weekly', aliases: ['faq.html', 'faq.dc.html'] },
  { url: '/contact', render: renderContactPage, priority: '0.7', changefreq: 'monthly', aliases: ['contact.html', 'contact.dc.html'] },
  { url: '/book-demo', render: renderBookDemoPage, priority: '0.9', changefreq: 'weekly', aliases: ['book-demo.html', 'book-demo.dc.html'] },
  { url: '/privacy', render: renderPrivacyPage, priority: '0.5', changefreq: 'monthly', aliases: ['privacy.html', 'privacy.dc.html'] },
  { url: '/terms', render: renderTermsPage, priority: '0.5', changefreq: 'monthly', aliases: ['terms.html', 'terms.dc.html'] },
  { url: '/refund', render: renderRefundPage, priority: '0.5', changefreq: 'monthly', aliases: ['refund.html', 'refund.dc.html'] },
  { url: '/lp/founding-schools', render: renderLpFoundingSchoolsPage, priority: '0.6', changefreq: 'weekly' },
  { url: '/lp/demo', render: renderLpDemoPage, priority: '0.6', changefreq: 'weekly' }
];

// Recursive directory copy
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Rewrites absolute paths to include BASE_PATH for subpath hosting (e.g. GitHub Pages)
function applyBasePath(html, basePath) {
  if (!basePath) return html;

  // Replace href="/..." but not href="//..."
  html = html.replace(/\bhref="\/([^"\/][^"]*|\/?)?"/g, (m, p) => `href="${basePath}/${p || ''}"`);

  // Replace src="/..." but not src="//..."
  html = html.replace(/\bsrc="\/([^"\/][^"]*|\/?)?"/g, (m, p) => `src="${basePath}/${p || ''}"`);

  // Replace action="/..." but not action="//..."
  html = html.replace(/\baction="\/([^"\/][^"]*|\/?)?"/g, (m, p) => `action="${basePath}/${p || ''}"`);

  // Inject window.__BASE_PATH__ before </head>
  const scriptTag = `  <script>window.__BASE_PATH__ = ${JSON.stringify(basePath)};</script>\n</head>`;
  html = html.replace('</head>', scriptTag);

  return html;
}

async function build() {
  console.log(`--- Starting Learniz Site Build (Base Path: "${BASE_PATH}") ---`);

  // 1. Ensure dist exists
  fs.mkdirSync(DIST, { recursive: true });

  // 2. Copy Assets
  console.log('Copying static assets to dist/assets/…');
  copyDir(path.resolve('src/assets'), path.resolve(DIST, 'assets'));

  // Copy root level icons to dist root as well
  if (fs.existsSync('src/assets/images/favicon.png')) {
    fs.copyFileSync('src/assets/images/favicon.png', path.resolve(DIST, 'favicon.png'));
  }
  if (fs.existsSync('src/assets/images/apple-touch-icon.png')) {
    fs.copyFileSync('src/assets/images/apple-touch-icon.png', path.resolve(DIST, 'apple-touch-icon.png'));
  }

  // 3. Render HTML Pages
  console.log(`Rendering ${routes.length} site pages…`);
  let renderedCount = 0;

  for (const route of routes) {
    let html = route.render();
    if (BASE_PATH) {
      html = applyBasePath(html, BASE_PATH);
    }

    // Primary output: /path/index.html (or /index.html for root)
    let outDir;
    if (route.url === '/') {
      outDir = DIST;
    } else {
      outDir = path.join(DIST, route.url.replace(/^\//, ''));
    }
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
    renderedCount++;

    // Fallback: Also write as .html directly in dist root / subdir
    if (route.url !== '/') {
      const flatHtmlPath = path.join(DIST, route.url.replace(/^\//, '') + '.html');
      fs.mkdirSync(path.dirname(flatHtmlPath), { recursive: true });
      fs.writeFileSync(flatHtmlPath, html, 'utf-8');
    }

    // Aliases support (e.g. .dc.html links from Claude Design)
    if (route.aliases) {
      for (const alias of route.aliases) {
        const aliasPath = path.join(DIST, alias);
        fs.mkdirSync(path.dirname(aliasPath), { recursive: true });
        fs.writeFileSync(aliasPath, html, 'utf-8');
      }
    }
  }
  console.log(`Successfully compiled ${renderedCount} pages.`);

  // 4. Generate 404.html
  console.log('Generating 404.html…');
  const raw404Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Page Not Found | Learniz</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="/assets/images/favicon.png" type="image/png">
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body style="min-height:100vh;display:grid;place-items:center;background:#0B1324;font-family:Inter,sans-serif;color:#fff;margin:0;padding:24px;box-sizing:border-box">
  <div style="text-align:center;max-width:520px;padding:48px 32px;background:#111C38;border:1px solid rgba(255,255,255,0.1);border-radius:20px;box-shadow:0 24px 60px rgba(0,0,0,0.4)">
    <img src="/assets/images/learniz-logo-white.png" alt="Learniz" style="height:36px;width:auto;margin:0 auto 24px;display:block">
    <div style="font-size:76px;font-weight:800;color:hsl(217 91% 60%);line-height:1;font-family:Figtree,sans-serif">404</div>
    <h1 style="font-family:Figtree,sans-serif;font-size:24px;font-weight:700;margin:16px 0 10px;color:#fff">Page Not Found</h1>
    <p style="color:#9AA4B8;font-size:15px;line-height:1.55;margin:0 0 28px">The page you are looking for doesn't exist or may have moved.</p>
    <a href="/" class="lz-btn-primary" style="display:inline-flex;padding:0 24px;height:46px;align-items:center;border-radius:10px;background:hsl(217 91% 60%);color:#fff;text-decoration:none;font-weight:600;font-size:15px">Return to Homepage</a>
  </div>
</body>
</html>`;
  const notFoundHtml = BASE_PATH ? applyBasePath(raw404Html, BASE_PATH) : raw404Html;
  fs.writeFileSync(path.join(DIST, '404.html'), notFoundHtml, 'utf-8');

  // 5. Generate sitemap.xml
  console.log('Generating sitemap.xml…');
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.filter(r => !r.url.startsWith('/lp/')).map(r => `  <url>
    <loc>https://learniz.in${r.url === '/' ? '' : r.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemapXml, 'utf-8');

  // 6. Generate robots.txt
  console.log('Generating robots.txt…');
  const robotsTxt = `# robots.txt for learniz.in
User-agent: *
Allow: /
Disallow: /lp/

Sitemap: https://learniz.in/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST, 'robots.txt'), robotsTxt, 'utf-8');

  // 7. Write .nojekyll for GitHub Pages
  fs.writeFileSync(path.join(DIST, '.nojekyll'), '', 'utf-8');

  // 8. Mirror to docs/ directory for multi-source GitHub Pages support
  console.log('Mirroring dist/ to docs/ directory…');
  copyDir(DIST, DOCS);
  fs.writeFileSync(path.join(DOCS, '.nojekyll'), '', 'utf-8');

  console.log('--- Site Build Complete! ---');
  console.log(`Output directories:`);
  console.log(` - dist/ (${fs.readdirSync(DIST).length} root entries)`);
  console.log(` - docs/ (${fs.readdirSync(DOCS).length} root entries)`);
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});

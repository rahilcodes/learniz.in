/**
 * Learniz Static Site Generator
 * Compiles all pages into dist/ & docs/ with clean URLs, sitemap.xml & robots.txt
 */

import fs from 'fs';
import path from 'path';
import { render404 } from './src/pages/not_found.js';
import { minifyCss } from './src/components/SEOHead.js';

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
      // read+write (with one retry) rather than copyFileSync: more tolerant of synced/mounted folders
      try { fs.writeFileSync(destPath, fs.readFileSync(srcPath)); }
      catch (e) { fs.rmSync(destPath, { force: true }); fs.writeFileSync(destPath, fs.readFileSync(srcPath)); }
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

  // 2. Copy Assets (clean first so removed files do not linger)
  console.log('Copying static assets to dist/assets/…');
  fs.rmSync(path.resolve(DIST, 'assets'), { recursive: true, force: true });
  fs.rmSync(path.resolve(DOCS, 'assets'), { recursive: true, force: true });
  copyDir(path.resolve('src/assets'), path.resolve(DIST, 'assets'));

  // Minify stylesheets in place (no build dependencies)
  for (const f of fs.readdirSync(path.resolve(DIST, 'assets/css'))) {
    const fp = path.resolve(DIST, 'assets/css', f);
    fs.writeFileSync(fp, minifyCss(fs.readFileSync(fp, 'utf8')), 'utf8');
  }

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
  const raw404Html = render404();
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

  // 8. Generate .htaccess for Apache / LiteSpeed (Hostinger)
  console.log('Generating .htaccess…');
  const htaccessContent = `# Learniz Apache/LiteSpeed Configuration for Hostinger
DirectoryIndex index.html

RewriteEngine On

# Redirect /learniz.in prefix if requested (e.g. from local preview URL)
RewriteRule ^learniz\.in/(.*)$ /$1 [R=301,L]
RewriteRule ^learniz\.in/?$ / [R=301,L]

# Ensure directory requests without slash get redirected properly
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^(.*[^/])$ /$1/ [L,R=301]

# Clean URLs: if path.html exists, rewrite
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{DOCUMENT_ROOT}/$1.html -f [OR]
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Custom 404
ErrorDocument 404 /404.html

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

# Browser Caching & HTML Freshness
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresDefault "access plus 2 days"
</IfModule>

<IfModule mod_headers.c>
  # Never cache HTML so updates are immediate
  <FilesMatch "\\.(html|htm)$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires "0"
  </FilesMatch>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Prevent directory browsing
Options -Indexes
`;
  fs.writeFileSync(path.join(DIST, '.htaccess'), htaccessContent, 'utf-8');

  // 9. Mirror to docs/ directory for multi-source GitHub Pages support
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

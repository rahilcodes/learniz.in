/**
 * SEO Head Component
 * Title, meta, canonical, Open Graph, Twitter, JSON-LD, fonts, theme bootstrap.
 */

import fs from 'fs';
import path from 'path';

function minifyCss(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,>])\s*/g, '$1').replace(/;}/g, '}').trim();
}
const TOKENS = minifyCss(fs.readFileSync(path.resolve('src/assets/css/tokens.css'), 'utf8'));
export { minifyCss };

export function renderHead({
  title = "Concept Clarity in Every Class | Learniz",
  description = "Learniz turns lessons into live experiments and shows principals, in numbers, what every class understood. Outcomes you can see.",
  path = "/",
  schema = null,
  article = null,
  noindex = false
}) {
  const canonicalUrl = `https://learniz.in${path === '/' ? '' : path}`;
  const ogImage = "https://learniz.in/assets/images/learniz-social-preview.jpg";

  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://learniz.in/#organization",
        "name": "Learniz",
        "legalName": "TATTVATECH EDU SOLUTIONS LLP",
        "url": "https://learniz.in/",
        "logo": "https://learniz.in/assets/images/apple-touch-icon.png",
        "email": "info@learniz.in",
        "telephone": "+91-9032181083",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://learniz.in/#website",
        "url": "https://learniz.in/",
        "name": "Learniz",
        "publisher": { "@id": "https://learniz.in/#organization" },
        "inLanguage": "en-IN"
      }
    ]
  };

  const activeSchema = schema || defaultSchema;

  return `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="author" content="TATTVATECH EDU SOLUTIONS LLP">
<meta name="robots" content="${noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}">
<meta name="theme-color" content="#161826" media="(prefers-color-scheme: dark)">
<meta name="theme-color" content="#f7f7fb" media="(prefers-color-scheme: light)">
<link rel="canonical" href="${canonicalUrl}">

<!-- Theme bootstrap: runs before first paint so the page never flashes the wrong theme -->
<script>(function(){try{var t=localStorage.getItem('lz-theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();</script>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="${article ? 'article' : 'website'}">
<meta property="og:site_name" content="Learniz">
<meta property="og:locale" content="en_IN">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Learniz Experiential Learning Platform">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${ogImage}">
<meta name="twitter:image:alt" content="Learniz Experiential Learning Platform">

<!-- Favicon & Icons -->
<link rel="icon" href="/assets/images/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">

<!-- Fonts: Inter 400/500, self-hosted -->
<link rel="preload" href="/assets/fonts/inter-latin-500-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/inter-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>

<!-- Design tokens, inlined so the first paint already has them; components follow -->
<style>${TOKENS}</style>
<link rel="stylesheet" href="/assets/css/site.css">

<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
${JSON.stringify(activeSchema, null, 2)}
</script>
`;
}

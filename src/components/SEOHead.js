/**
 * SEO Head Component
 * Generates Title, Meta Tags, Open Graph, Twitter Cards, Canonical, Fonts & Schema
 */

export function renderHead({
  title = "Concept Clarity in Every Class | Learniz",
  description = "Learniz turns lessons into live experiments and shows principals, in numbers, what every class understood. Outcomes you can see.",
  path = "/",
  schema = null,
  article = null
}) {
  const canonicalUrl = `https://learniz.in${path === '/' ? '' : path}`;
  const ogImage = "https://learniz.in/assets/images/learniz-social-preview.jpg";

  // Base Organization & WebSite JSON-LD
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
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${canonicalUrl}">

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

<!-- Google Fonts: Figtree & Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">

<!-- Main Stylesheet -->
<link rel="stylesheet" href="/assets/css/main.css">

<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
${JSON.stringify(activeSchema, null, 2)}
</script>
`;
}

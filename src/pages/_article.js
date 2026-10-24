/**
 * Shared article renderer for blog posts.
 */
import { page, icon, cta } from '../components/layout.js';

export function renderArticle({ meta, kicker, title, date, dateIso, readTime, lede, content, ctaH2, ctaLede, path, schema }) {
  const body = `
<header class="hero hero-simple">
  <div class="container hero-copy" style="max-width:820px">
    <a href="/blog" class="btn btn-ghost btn-sm rv" style="align-self:flex-start;margin-left:-6px">${icon('caretRight', 12, { style: 'transform:rotate(180deg)' })}Back to Blog &amp; resources</a>
    <span class="kicker rv" style="--d:.04s;margin-top:28px">${kicker}</span>
    <h1 class="h2 rv" style="--d:.08s;max-width:24ch;font-size:clamp(34px,4.2vw,54px)">${title}</h1>
    <p class="lede lede-lg rv" style="--d:.16s;max-width:var(--measure-prose)">${lede}</p>
    <div class="article-meta rv" style="--d:.2s"><span>By Learniz Academic Research</span><span aria-hidden="true">·</span><time datetime="${dateIso}">Published ${date}</time><span aria-hidden="true">·</span><span>${readTime}</span></div>
  </div>
</header>
<article class="section-bottom">
  <div class="container"><div class="prose rv">${content}</div></div>
</article>
${cta({ h2: ctaH2, lede: ctaLede })}
`;
  return page({ head: { ...meta, path, schema, article: true }, body, activePath: '/blog' });
}

export function articleSchema({ headline, description, url, published, modified }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": { "@type": "Organization", "name": "Learniz Academic Team" },
    "publisher": { "@type": "Organization", "name": "Learniz", "legalName": "TATTVATECH EDU SOLUTIONS LLP", "logo": { "@type": "ImageObject", "url": "https://learniz.in/assets/images/apple-touch-icon.png" } },
    "datePublished": published,
    "dateModified": modified,
    "mainEntityOfPage": url
  };
}

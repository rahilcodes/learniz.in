/**
 * 404 page (written by build.js as /404.html)
 */
import { page, icon } from '../components/layout.js';

export function render404() {
  const body = `
<header class="hero hero-simple" style="min-height:70vh;display:flex;align-items:center">
  <div class="container hero-copy" style="max-width:640px">
    <span class="kicker rv">404</span>
    <h1 class="h1 rv" style="--d:.08s;margin-top:22px"><span>Page not found.</span><span class="accent">Nothing to see here.</span></h1>
    <p class="lede lede-lg rv" style="--d:.16s">The page you are looking for doesn't exist or may have moved.</p>
    <div class="actions actions-lg rv" style="--d:.24s"><a href="/" class="btn btn-primary btn-lg">Return to the homepage${icon('arrowRight', 15)}</a><a href="/see-it-live" class="btn btn-ghost btn-lg">See it live</a></div>
  </div>
</header>`;
  return page({ head: { title: 'Page Not Found | Learniz', description: 'The page you are looking for does not exist.', path: '/404', noindex: true }, body });
}

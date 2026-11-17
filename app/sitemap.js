import { ALL_ROUTES, SITE_URL, SERVICES } from "../lib/data";
import { FULL_PAGE_BY_SLUG } from "../lib/pages-full";

export const dynamic = "force-static";

const LASTMOD_TODAY = "2026-11-17"; // date-only, YYYY-MM-DD
const LASTMOD_YESTERDAY = "2026-11-16";
// 2026-11-17 (his order 13:09 PKT "half sitemap pr kall ki date dallo"):
// first 20 routes in sitemap order -> 2026-11-16, last 20 -> 2026-11-17.
// (Sitemap order: homepage + 25 services + About + Contact + 12 blogs,
// so the 2026-11-16 half is the homepage + first 19 services.)

// Images per route (absolute URLs) for the image sitemap: the page's hero
// plus its body images; the homepage also lists its 9 service-card images.
function imagesFor(route) {
  if (route === "/") {
    const imgs = ["/images/hero-home.webp"];
    for (const s of SERVICES) {
      if (s.cardImage) imgs.push(s.cardImage);
    }
    return imgs;
  }
  const page = FULL_PAGE_BY_SLUG[route.slice(1)];
  if (!page) return [];
  const imgs = [];
  if (page.heroImage) imgs.push(page.heroImage);
  for (const im of page.bodyImages || []) {
    if (im.src) imgs.push(im.src);
  }
  return imgs;
}

export default function sitemap() {
  return ALL_ROUTES.map((route, idx) => ({
    // Next.js MetadataRoute.Sitemap field is `lastModified` (NOT `lastmod` —
    // an unknown `lastmod` key is silently dropped from the emitted XML).
    url: route === "/" ? SITE_URL : SITE_URL + route,
    lastModified: idx < 20 ? LASTMOD_YESTERDAY : LASTMOD_TODAY,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : 0.8,
    images: imagesFor(route).map((src) => SITE_URL + src),
  }));
}

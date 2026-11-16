import { ALL_ROUTES, SITE_URL, SERVICES } from "../lib/data";
import { FULL_PAGE_BY_SLUG } from "../lib/pages-full";

export const dynamic = "force-static";

const LASTMOD = "2026-11-17"; // date-only, YYYY-MM-DD
// 2026-11-17: header Services menu shipped on ALL 40 pages (new dropdown
// markup in every page's HTML), so every route's lastmod is the push date.

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
  return ALL_ROUTES.map((route) => ({
    // Next.js MetadataRoute.Sitemap field is `lastModified` (NOT `lastmod` —
    // an unknown `lastmod` key is silently dropped from the emitted XML).
    url: route === "/" ? SITE_URL : SITE_URL + route,
    lastModified: LASTMOD,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : 0.8,
    images: imagesFor(route).map((src) => SITE_URL + src),
  }));
}

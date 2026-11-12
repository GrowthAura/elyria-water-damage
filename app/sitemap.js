import { ALL_ROUTES, SITE_URL } from "../lib/data";

export const dynamic = "force-static";

const LASTMOD = "2026-11-12"; // date-only, YYYY-MM-DD

export default function sitemap() {
  return ALL_ROUTES.map((route) => ({
    // Next.js MetadataRoute.Sitemap field is `lastModified` (NOT `lastmod` —
    // an unknown `lastmod` key is silently dropped from the emitted XML).
    url: route === "/" ? SITE_URL : SITE_URL + route,
    lastModified: LASTMOD,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : 0.8,
  }));
}

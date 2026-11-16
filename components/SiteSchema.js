// Sitewide LocalBusiness + WebSite schema, rendered by content pages only
// (app/page.js + components/LinkedPage.js) — NOT by the root layout, so the
// 404 page (app/not-found.js) carries no JSON-LD. Values verbatim from the
// doc; no priceRange (not in the doc), no invented facts.
import { PHONE, SITE_URL, META } from "../lib/data";
import { FULL_PAGES } from "../lib/pages-full";

// OPT-C4 FIX-2 O-1 (2026-11-16): hasOfferCatalog — the 25 services, name +
// URL copied verbatim from the existing Service nodes (page.h1 + the
// Service node's url, SITE_URL + "/" + slug). Rendered ONLY on the
// homepage (SiteSchema prop hasOfferCatalog), never on the other 39 pages.
// No catalog "name": none is stated in the doc, so none is invented.
const offerCatalogSchema = {
  "@type": "OfferCatalog",
  itemListElement: FULL_PAGES.filter((p) => p.kind === "service").map(
    (p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: p.h1,
        url: SITE_URL + "/" + p.slug,
      },
    })
  ),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL + "/#localbusiness",
  name: "Water Damage Restoration Elyria",
  description: META.description,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Elyria",
    addressRegion: "OH",
    postalCode: "44035",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Elyria" },
    { "@type": "AdministrativeArea", name: "Lorain County" },
  ],
  url: SITE_URL,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_URL + "/#website",
  name: "Water Damage Restoration Elyria, OH",
  url: SITE_URL,
};

export default function SiteSchema({ hasOfferCatalog = false }) {
  // OPT-C4 FIX-2 O-1: hasOfferCatalog is homepage-only. The LocalBusiness
  // node is shared by all 40 pages, so the catalog is spread in only when
  // the caller asks for it (app/page.js); LinkedPage never passes the prop.
  const localBusiness = hasOfferCatalog
    ? { ...localBusinessSchema, hasOfferCatalog: offerCatalogSchema }
    : localBusinessSchema;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}

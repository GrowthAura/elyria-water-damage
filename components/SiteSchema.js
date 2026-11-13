// Sitewide LocalBusiness + WebSite schema, rendered by content pages only
// (app/page.js + components/LinkedPage.js) — NOT by the root layout, so the
// 404 page (app/not-found.js) carries no JSON-LD. Values verbatim from the
// doc; no priceRange (not in the doc), no invented facts.
import { PHONE, SITE_URL, META } from "../lib/data";

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

export default function SiteSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}

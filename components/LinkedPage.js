import { PHONE, PHONE_TEL, SITE_URL } from "../lib/data";
import Segments from "./Segments";

// Shared template for all 20 linked pages: verbatim homepage summary only.
// No invented copy. Self-links from the homepage are plain text here.
export default function LinkedPage({ page, urlPath }) {
  const serviceSchema =
    page.kind === "service"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": SITE_URL + urlPath + "#service",
          name: page.h1,
          description: page.metaDescription,
          provider: { "@id": SITE_URL + "/#localbusiness" },
          areaServed: { "@type": "City", name: "Elyria" },
          url: SITE_URL + urlPath,
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": SITE_URL + urlPath + "#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
      { "@type": "ListItem", position: 2, name: page.h1, item: SITE_URL + urlPath },
    ],
  };

  // WebPage links this page into the site-wide @id graph.
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": SITE_URL + urlPath,
    url: SITE_URL + urlPath,
    name: page.h1,
    isPartOf: { "@id": SITE_URL + "/#website" },
    about: { "@id": SITE_URL + "/#localbusiness" },
    breadcrumb: { "@id": SITE_URL + urlPath + "#breadcrumb" },
  };

  return (
    <>
      {serviceSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="hero hero-inner-page">
        <div className="hero-media">
          <img src={page.heroImage} alt={page.heroAlt} width="1600" height="900" fetchPriority="high" />
        </div>
        <div className="hero-inner">
          <p className="eyebrow">WATER DAMAGE RESTORATION • ELYRIA, OHIO</p>
          <h1>{page.h1}</h1>
          <div className="hero-cta">
            <a className="btn btn-call" href={PHONE_TEL}>{PHONE}</a>
            <a className="btn btn-help" href={PHONE_TEL}>Get Emergency Help</a>
          </div>
        </div>
      </section>

      <div className="wrap">
        <p className="breadcrumb">
          <a href="/">Home</a> / {page.h1}
        </p>
      </div>

      <section className="page-body">
        <div className="wrap prose">
          {page.intro ? <p className="lead">{page.intro}</p> : null}

          {page.bullets ? (
            <ul className="check-list">
              {page.bullets.map((b, i) =>
                typeof b === "string" ? (
                  <li key={i}>{b}</li>
                ) : (
                  <li key={i}>
                    <strong>{b.label}:</strong> {b.text}
                  </li>
                )
              )}
            </ul>
          ) : null}

          {page.closing ? <p>{page.closing}</p> : null}

          {page.closingPrefix && page.closingLinks ? (
            <p>
              <Segments
                parts={[
                  page.closingPrefix,
                  ...page.closingLinks.flatMap((l, i) => [
                    ...(i > 0 ? [i === page.closingLinks.length - 1 ? " and " : ", "] : []),
                    { link: l.text, href: l.href },
                  ]),
                  ".",
                ]}
              />
            </p>
          ) : null}

          {page.extraLink ? (
            <p>
              <Segments
                parts={[
                  page.extraLink.prefix,
                  { link: page.extraLink.text, href: page.extraLink.href },
                  page.extraLink.suffix,
                ]}
              />
            </p>
          ) : null}

          <div className="service-note">
            <p>
              <strong>Need help now?</strong> Our water damage restoration crew in Elyria, OH
              answers every call day or night and is dispatched immediately. Call{" "}
              <a href={PHONE_TEL}>{PHONE}</a>, 24/7 live dispatch across Elyria and ZIP 44035,
              Lorain County.
            </p>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="wrap">
          <h2>Call Our Elyria Water Damage Restoration Crew Now</h2>
          <p>
            Water damage gets more expensive every hour it sits. Call {PHONE} and a crew is
            dispatched immediately.
          </p>
          <div className="hero-cta">
            <a className="btn btn-call" href={PHONE_TEL}>{PHONE}</a>
            <a className="btn btn-help" href={PHONE_TEL}>Get Emergency Help</a>
          </div>
        </div>
      </section>
    </>
  );
}

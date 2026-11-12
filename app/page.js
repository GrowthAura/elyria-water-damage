import {
  PHONE,
  PHONE_TEL,
  SITE_URL,
  META,
  TRUST_BADGES,
  HERO,
  INTRO_SECTION,
  SERVICES,
  CAUSES_SECTION,
  PROCESS_SECTION,
  CATEGORIES_SECTION,
  COST_SECTION,
  INSURANCE_SECTION,
  BEFORE_CREW_SECTION,
  SERVING_SECTION,
  SIGNS_SECTION,
  PREVENTION_SECTION,
  FAQ_SECTION,
  FINAL_CTA,
} from "../lib/data";
import Segments from "../components/Segments";

export const metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: SITE_URL + "/" },
  openGraph: {
    title: META.title,
    description: META.description,
    url: SITE_URL + "/",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": SITE_URL + "/#faq",
  mainEntity: FAQ_SECTION.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": SITE_URL + "/#breadcrumb",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" }],
};

// HowTo for the visible 8-step process (doc copy only — step titles + text verbatim
// from PROCESS_SECTION; no times, tools or supplies invented).
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": SITE_URL + "/#howto",
  name: PROCESS_SECTION.h2,
  description: PROCESS_SECTION.intro,
  step: PROCESS_SECTION.steps.map((st) => ({
    "@type": "HowToStep",
    position: st.n,
    name: `Step ${st.n}. ${st.title}`,
    text: st.text,
  })),
};

// WebPage links the graph together and marks the speakable content
// (hero intro + FAQ) for voice assistants.
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": SITE_URL + "/",
  url: SITE_URL + "/",
  name: META.title,
  isPartOf: { "@id": SITE_URL + "/#website" },
  about: { "@id": SITE_URL + "/#localbusiness" },
  breadcrumb: { "@id": SITE_URL + "/#breadcrumb" },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-intro", "#faq"],
  },
};

function joinLinks(links) {
  const out = [];
  links.forEach((l, i) => {
    if (i > 0) out.push(i === links.length - 1 ? " and " : ", ");
    out.push({ link: l.text, href: l.href });
  });
  out.push(".");
  return out;
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-media">
          <img
            src="/images/hero-home.webp"
            alt="Aerial view of a flooded neighbourhood with palm trees"
            width="1600"
            height="900"
            fetchPriority="high"
          />
        </div>
        <div className="hero-inner">
          <p className="eyebrow">{HERO.eyebrow}</p>
          <h1>{HERO.h1}</h1>
          <p className="hero-intro">{HERO.intro}</p>
          <div className="hero-cta">
            <a className="btn btn-call" href={PHONE_TEL}>{PHONE}</a>
            <a className="btn btn-help" href={PHONE_TEL}>Get Emergency Help</a>
          </div>
          <p className="hero-note">
            <strong>24/7 live dispatch.</strong> Call {PHONE} and a crew is dispatched immediately.
          </p>
        </div>
      </section>

      {/* TRUST BAND */}
      <div className="trust-band">
        <div className="wrap">
          {TRUST_BADGES.map((b) => (
            <div className="trust-item" key={b}>
              <span className="trust-check" aria-hidden="true">✓</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="section">
        <div className="wrap prose">
          <h2>{INTRO_SECTION.h2}</h2>
          {INTRO_SECTION.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-alt" id="services">
        <div className="wrap">
          <div className="section-head">
            <h2>Water Damage Restoration Services We Handle Every Day in Elyria</h2>
            <p>
              Every water problem in a Northeast Ohio house is a little different, so every job
              starts by finding where the water came from, how dirty it is and how far it
              traveled. Here is the full list of emergency water damage services our Elyria crew
              handles:
            </p>
          </div>
          <div className="cards">
            {SERVICES.map((s) => (
              <article className="card" key={s.h3}>
                <div className="card-media">
                  <img src={s.cardImage} alt={s.cardAlt} width="1200" height="675" loading="lazy" />
                </div>
                <div className="card-body">
                  <h3>
                    {s.slug ? <a href={"/" + s.slug}>{s.h3}</a> : s.h3}
                  </h3>
                  <p>
                    <Segments parts={s.body} />
                  </p>
                  {s.slug ? (
                    <a className="card-link" href={"/" + s.slug}>
                      View {s.h3} →
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="section">
        <div className="wrap prose">
          <h2>{CAUSES_SECTION.h2}</h2>
          {CAUSES_SECTION.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="check-list">
            {CAUSES_SECTION.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p>
            <Segments
              parts={[CAUSES_SECTION.closingPrefix, ...joinLinks(CAUSES_SECTION.closingLinks)]}
            />
          </p>
        </div>
      </section>

      {/* PROCESS — 8 steps as the doc gives */}
      <section className="section section-alt" id="process">
        <div className="wrap">
          <div className="section-head">
            <h2>{PROCESS_SECTION.h2}</h2>
            <p>{PROCESS_SECTION.intro}</p>
          </div>
          <div className="steps">
            {PROCESS_SECTION.steps.map((st) => (
              <article className="step" key={st.n}>
                <div className="step-num" aria-hidden="true">{st.n}</div>
                <p className="step-title">
                  Step {st.n}. {st.title}
                </p>
                <p>{st.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WATER CATEGORIES */}
      <section className="section">
        <div className="wrap prose">
          <h2>{CATEGORIES_SECTION.h2}</h2>
          <p>{CATEGORIES_SECTION.intro}</p>
          <ul>
            {CATEGORIES_SECTION.bullets.map((b) => (
              <li key={b.label}>
                <strong>{b.label}:</strong> {b.text}
              </li>
            ))}
          </ul>
          <p>
            <Segments
              parts={[
                CATEGORIES_SECTION.closingPrefix,
                { link: CATEGORIES_SECTION.closingLink.text, href: CATEGORIES_SECTION.closingLink.href },
                ".",
              ]}
            />
          </p>
        </div>
      </section>

      {/* COST */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>{COST_SECTION.h2}</h2>
            <p>{COST_SECTION.intro}</p>
          </div>
          <ul className="cost-list">
            {COST_SECTION.bullets.map((b) => (
              <li key={b.label}>
                <strong>{b.label}:</strong>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
          <p className="prose" style={{ marginTop: 24 }}>
            <Segments
              parts={[
                COST_SECTION.closingPrefix,
                { link: COST_SECTION.closingLink.text, href: COST_SECTION.closingLink.href },
                ".",
              ]}
            />
          </p>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="section">
        <div className="wrap prose">
          <h2>{INSURANCE_SECTION.h2}</h2>
          <p>{INSURANCE_SECTION.paragraph}</p>
          <p>
            <a href={INSURANCE_SECTION.linkHref}>{INSURANCE_SECTION.linkText}</a>.
          </p>
        </div>
      </section>

      {/* BEFORE THE CREW ARRIVES */}
      <section className="section section-alt">
        <div className="wrap prose">
          <h2>{BEFORE_CREW_SECTION.h2}</h2>
          <ul className="check-list">
            {BEFORE_CREW_SECTION.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p>
            <Segments
              parts={[
                BEFORE_CREW_SECTION.closingPrefix,
                { link: BEFORE_CREW_SECTION.closingLink.text, href: BEFORE_CREW_SECTION.closingLink.href },
                ".",
              ]}
            />
          </p>
        </div>
      </section>

      {/* SERVING */}
      <section className="section">
        <div className="wrap prose">
          <h2>{SERVING_SECTION.h2}</h2>
          {SERVING_SECTION.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>
            <Segments
              parts={[
                SERVING_SECTION.closingPrefix,
                { link: SERVING_SECTION.closingLink.text, href: SERVING_SECTION.closingLink.href },
                ".",
              ]}
            />
          </p>
        </div>
      </section>

      {/* SIGNS */}
      <section className="section section-alt">
        <div className="wrap prose">
          <h2>{SIGNS_SECTION.h2}</h2>
          <p>{SIGNS_SECTION.intro}</p>
          <ul className="check-list">
            {SIGNS_SECTION.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p>{SIGNS_SECTION.closing}</p>
        </div>
      </section>

      {/* PREVENTION */}
      <section className="section">
        <div className="wrap prose">
          <h2>{PREVENTION_SECTION.h2}</h2>
          <p>{PREVENTION_SECTION.intro}</p>
          <ul className="check-list">
            {PREVENTION_SECTION.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p>
            <Segments
              parts={[
                PREVENTION_SECTION.closingPrefix,
                { link: PREVENTION_SECTION.closingLinks[0].text, href: PREVENTION_SECTION.closingLinks[0].href },
                PREVENTION_SECTION.closingMiddle,
                { link: PREVENTION_SECTION.closingLinks[1].text, href: PREVENTION_SECTION.closingLinks[1].href },
                PREVENTION_SECTION.closingSuffix,
              ]}
            />
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt" id="faq">
        <div className="wrap">
          <div className="section-head">
            <h2>{FAQ_SECTION.h2}</h2>
          </div>
          <div className="faq-list">
            {FAQ_SECTION.faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>
                  <h3>{f.q}</h3>
                </summary>
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta">
        <div className="wrap">
          <h2>{FINAL_CTA.h2}</h2>
          <p>{FINAL_CTA.paragraph}</p>
          <div className="hero-cta">
            <a className="btn btn-call" href={PHONE_TEL}>{PHONE}</a>
            <a className="btn btn-help" href={PHONE_TEL}>Get Emergency Help</a>
          </div>
        </div>
      </section>
    </>
  );
}

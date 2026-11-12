import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import StickyCall from "../components/StickyCall";
import { PHONE, PHONE_TEL, SITE_URL, META, NAV_SERVICES } from "../lib/data";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-head", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: META.title,
  description: META.description,
  robots: { index: true, follow: true },
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
  priceRange: "$$",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className={`${fraunces.variable} ${inter.variable}`}>
        <Header />

        <main>{children}</main>

        <footer className="site-footer">
          <div className="wrap">
            <div className="footer-grid">
              <div>
                <h3>Water Damage Restoration Elyria, OH</h3>
                <p>
                  Our water damage restoration crew in Elyria, OH answers every call day or
                  night and is dispatched immediately. We pump out standing water, find hidden
                  moisture, dry the structure and stop mold before it starts.
                </p>
                <p>
                  <a className="footer-phone" href={PHONE_TEL}>{PHONE}</a>
                  <br />
                  24/7 live dispatch, Elyria, OH 44035, Lorain County
                </p>
              </div>
              <div>
                <h3>Services</h3>
                <ul>
                  {NAV_SERVICES.map((s) => (
                    <li key={s.href}>
                      <a href={s.href}>{s.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Find Us</h3>
                <div className="footer-map">
                  <iframe
                    title="Map of Elyria, Ohio"
                    src="https://www.google.com/maps?q=Elyria,+OH+44035&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <span>Water Damage Restoration Elyria, OH, serving Elyria and ZIP 44035, Lorain County.</span>
              <span>24/7 Emergency Crew</span>
            </div>
          </div>
        </footer>

        <StickyCall />
      </body>
    </html>
  );
}

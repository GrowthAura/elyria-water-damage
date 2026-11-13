import { notFound } from "next/navigation";
import { SITE_URL } from "../../lib/data";
import { FULL_ROOT_PAGES, FULL_PAGE_BY_SLUG } from "../../lib/pages-full";
import LinkedPage from "../../components/LinkedPage";

export function generateStaticParams() {
  return FULL_ROOT_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = FULL_PAGE_BY_SLUG[slug];
  if (!page) return {};
  const hero = page.heroImage || "/images/hero-home.webp";
  const heroAlt = page.heroAlt || "Water damage restoration in Elyria, Ohio";
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    robots: { index: true, follow: true },
    alternates: { canonical: SITE_URL + "/" + slug },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: SITE_URL + "/" + slug,
      type: "website",
      images: [{ url: SITE_URL + hero, alt: heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [SITE_URL + hero],
    },
  };
}

export default async function RootPage({ params }) {
  const { slug } = await params;
  const page = FULL_PAGE_BY_SLUG[slug];
  if (!page) notFound();
  return <LinkedPage page={page} urlPath={"/" + slug} />;
}

import { notFound } from "next/navigation";
import { SITE_URL } from "../../../lib/data";
import { FULL_BLOG_PAGES, FULL_PAGE_BY_SLUG } from "../../../lib/pages-full";
import LinkedPage from "../../../components/LinkedPage";
import { heroDimsFor } from "../../../lib/imageVariants";

export function generateStaticParams() {
  return FULL_BLOG_PAGES.map((p) => ({ slug: p.slug.replace(/^blog\//, "") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = FULL_PAGE_BY_SLUG["blog/" + slug];
  if (!page) return {};
  const hero = page.heroImage || "/images/hero-home.webp";
  const heroAlt = page.heroAlt || "Water damage restoration in Elyria, Ohio";
  const heroDims = heroDimsFor(hero) || { width: 1600, height: 900 };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    robots: { index: true, follow: true },
    alternates: { canonical: SITE_URL + "/blog/" + slug },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: SITE_URL + "/blog/" + slug,
      type: "article",
      images: [{ url: SITE_URL + hero, alt: heroAlt, width: heroDims.width, height: heroDims.height }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [SITE_URL + hero],
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const page = FULL_PAGE_BY_SLUG["blog/" + slug];
  if (!page) notFound();
  return <LinkedPage page={page} urlPath={"/blog/" + slug} />;
}

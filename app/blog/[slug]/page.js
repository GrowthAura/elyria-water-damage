import { notFound } from "next/navigation";
import { SITE_URL } from "../../../lib/data";
import { FULL_BLOG_PAGES, FULL_PAGE_BY_SLUG } from "../../../lib/pages-full";
import LinkedPage from "../../../components/LinkedPage";

export function generateStaticParams() {
  return FULL_BLOG_PAGES.map((p) => ({ slug: p.slug.replace(/^blog\//, "") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = FULL_PAGE_BY_SLUG["blog/" + slug];
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: SITE_URL + "/blog/" + slug },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: SITE_URL + "/blog/" + slug,
      type: "article",
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const page = FULL_PAGE_BY_SLUG["blog/" + slug];
  if (!page) notFound();
  return <LinkedPage page={page} urlPath={"/blog/" + slug} />;
}

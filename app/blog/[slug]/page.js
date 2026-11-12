import { notFound } from "next/navigation";
import { BLOG_PAGES, SITE_URL } from "../../../lib/data";
import LinkedPage from "../../../components/LinkedPage";

export function generateStaticParams() {
  return BLOG_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = BLOG_PAGES.find((p) => p.slug === slug);
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
  const page = BLOG_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();
  return <LinkedPage page={page} urlPath={"/blog/" + slug} />;
}

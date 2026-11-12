import { notFound } from "next/navigation";
import { ROOT_PAGES, SITE_URL } from "../../lib/data";
import LinkedPage from "../../components/LinkedPage";

export function generateStaticParams() {
  return ROOT_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = ROOT_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: SITE_URL + "/" + slug },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: SITE_URL + "/" + slug,
      type: "website",
    },
  };
}

export default async function RootPage({ params }) {
  const { slug } = await params;
  const page = ROOT_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();
  return <LinkedPage page={page} urlPath={"/" + slug} />;
}

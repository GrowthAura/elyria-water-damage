import { ALL_ROUTES, SITE_URL, META, PHONE, CITY, ZIP } from "../../lib/data";

export const dynamic = "force-static";

// Plain-text site map for LLMs. Facts only from the doc: no invented claims.
export async function GET() {
  const lines = [
    `# Water Damage Restoration Elyria`,
    ``,
    `> ${META.description}`,
    ``,
    `Phone: ${PHONE}. Service area: ${CITY} ${ZIP}, Lorain County, Ohio.`,
    ``,
    `## Pages`,
    ``,
    ...ALL_ROUTES.map((r) => `- ${r === "/" ? SITE_URL : SITE_URL + r}`),
    ``,
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

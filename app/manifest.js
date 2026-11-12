import { META } from "../lib/data";

export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Elyria Water Damage Restoration",
    short_name: "Elyria Water Damage",
    description: META.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a1d31",
    theme_color: "#0b2540",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

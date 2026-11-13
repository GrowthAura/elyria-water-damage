import { META } from "../lib/data";

export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Elyria Water Damage Restoration",
    short_name: "Elyria Water Damage",
    description: META.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b3b3a",
    theme_color: "#0b3b3a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

// Site-wide constants for CLIENT components (Header, StickyCall).
//
// SPEED FIX 2026-11-17 (F2): the full 40-page doc dataset (lib/pages-full.js,
// 647 KB) was being shipped inside the client page chunk (381 KB) on EVERY
// page, because Header.js imported PHONE/HEADER_SERVICES from lib/data.js,
// and lib/data.js imports ./pages-full. Turbopack bundles the whole module
// graph of a client component's imports, so all 641 long doc strings landed
// in out/_next/static/chunks/2viz7dyx_9f4h.js (verified: 641/642 present).
// This module holds ONLY the small constants client components need — no
// pages-full import — so the client chunk drops to framework + menu code.
// Server code keeps importing from lib/data.js, which re-exports these.
//
// HEADER_SERVICES labels are the doc tab titles (same strings the footer
// derives from FULL_PAGES); they are listed here verbatim so the header
// menu renders byte-identical HTML without the dataset. If a label ever
// changes in the doc, update BOTH this list and lib/data.js's derivation.
export const PHONE = "(440) 291-9431";
export const PHONE_TEL = "tel:+14402919431";
export const SITE_URL = "https://www.waterdamagerestorationelyria.site";
export const CITY = "Elyria, OH";
export const ZIP = "44035";

export const META = {
  title: "Water Damage Restoration Elyria OH | 24/7 Emergency Crew",
  description:
    "Flooded basement, burst pipe or sewage backup in Elyria? Crew dispatched immediately, 24/7 across 44035. Call (440) 291-9431 now.",
};

export const HEADER_SERVICES = [
  { label: "Emergency Water Extraction", href: "/emergency-water-extraction" },
  { label: "Water Mitigation", href: "/water-mitigation" },
  { label: "Flood Damage Restoration", href: "/flood-damage-restoration" },
  { label: "Flooded Basement Cleanup", href: "/flooded-basement-cleanup" },
  { label: "Burst Pipe Water Damage", href: "/burst-pipe-water-damage" },
  { label: "Sewage Backup Cleanup", href: "/sewage-backup-cleanup" },
  { label: "Mold Remediation", href: "/mold-remediation" },
];

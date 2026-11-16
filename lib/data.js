import { FULL_PAGES, FULL_ALL_ROUTES } from "./pages-full";
// Elyria OH — verbatim doc content. Source: Google Doc 1n2fnL6dnNEYo_b5LlqJHjh-yL8yXxtPd2QDqOW6myT4
// "Elyria OH Water Damage Restoration — Page Copy (40 Pages)". FULL doc: 40 tabs,
// 53,606 words (fetched with includeTabsContent=true; see doc-raw-tabs.json).
// Tab 1 (homepage) lives in this file; tabs 2-40 live in lib/pages-full.js.
// NOTHING here is invented. Links come only from parenthetical paths in tab text.

export const PHONE = "(440) 291-9431";
export const PHONE_TEL = "tel:+14402919431";
export const SITE_URL = "https://www.waterdamagerestorationelyria.site"; // LIVE DOMAIN — given by Noorullah 2026-11-14
export const CITY = "Elyria, OH";
export const ZIP = "44035";

export const META = {
  title: "Water Damage Restoration Elyria OH | 24/7 Emergency Crew",
  description:
    "Flooded basement, burst pipe or sewage backup in Elyria? Crew dispatched immediately, 24/7 across 44035. Call (440) 291-9431 now.",
};

export const TRUST_BADGES = [
  "24/7 Live Dispatch",
  "IICRC S500 Drying Process",
  "Insurance Paperwork Help",
  "Local to Lorain County",
];

export const HERO = {
  eyebrow: "WATER DAMAGE RESTORATION • ELYRIA, OHIO",
  h1: "24/7 Water Damage Restoration in Elyria, OH",
  intro:
    "Water on the basement floor, a pipe that split overnight, or sewage rising through a floor drain cannot wait until Monday. Our water damage restoration crew in Elyria, OH answers every call day or night and is dispatched immediately. We pump out standing water, find hidden moisture, dry the structure and stop mold before it starts, so your home gets back to normal faster.",
};

export const INTRO_SECTION = {
  h2: "Who Should You Call First for Water Damage in Elyria, OH?",
  paragraphs: [
    "Call a 24/7 water damage company first if water is spreading, sitting on floors or soaking walls. Shut off the water source, keep power off in wet areas, then call (440) 291-9431.",
    "A plumber stops a leak. A restoration crew removes the water, dries the house and keeps the damage from growing. In most Elyria homes you need both, and the drying part is the one that cannot wait. Water moves into drywall, carpet pad, baseboards and subfloor within minutes, and every hour it sits raises the cost of the repair. When you call us, a crew is sent to your address right away with extraction pumps, dehumidifiers, air movers and moisture meters already loaded on the truck.",
  ],
};

// Services: H3 title, slug (null = no route in doc), card image, body text.
// `links` describe the doc's parenthetical links: {text, href} — rendered as anchors on
// the homepage only. On the linked page itself the same sentence is plain text.
export const SERVICES = [
  {
    h3: "Emergency Water Extraction",
    slug: "emergency-water-extraction",
    cardImage: "/images/card-emergency-water-extraction.webp",
    heroImage: "/images/hero-emergency-water-extraction.webp",
    cardAlt: "A restoration worker guiding an extraction wand over a flooded living room floor, with a wet-dry vacuum and hoses beside him.",
    pageTitle: "Emergency Water Extraction in Elyria, OH",
    metaTitle: "Emergency Water Extraction Elyria OH | 24/7 Crew",
    metaDescription:
      "Truck-mounted and portable pumps pull standing water out of basements, carpet and flooring fast in Elyria, OH. Call (440) 291-9431.",
    summary:
      "Truck-mounted and portable pumps pull standing water out of basements, carpet and flooring fast.",
    body: [
      "Truck-mounted and portable pumps pull standing water out of basements, carpet and flooring fast. ",
      "Full details on our emergency water extraction page",
      ".",
    ],
    linkText: "Full details on our emergency water extraction page",
    linkHref: "/emergency-water-extraction",
  },
  {
    h3: "Water Mitigation",
    slug: "water-mitigation",
    cardImage: "/images/card-water-mitigation.webp",
    heroImage: "/images/hero-water-mitigation.webp",
    cardAlt: "A restoration worker kneeling on a wet hardwood floor with a wet vacuum hose, with a blue air mover and a wet-dry vacuum beside him",
    pageTitle: "Water Mitigation in Elyria, OH",
    metaTitle: "Water Mitigation Elyria OH | Stop Damage Spreading",
    metaDescription:
      "We stop water damage from spreading in Elyria, OH: water removal, soaked material removal, antimicrobial treatment and drying set-up. Call (440) 291-9431.",
    summary:
      "We stop the damage from spreading: water removal, removal of soaked materials, antimicrobial treatment and drying set-up.",
    body: [
      "We stop the damage from spreading: water removal, removal of soaked materials, antimicrobial treatment and drying set-up. ",
      "See water mitigation in Elyria",
      ".",
    ],
    linkText: "See water mitigation in Elyria",
    linkHref: "/water-mitigation",
  },
  {
    h3: "Flooded Basement Cleanup",
    slug: "flooded-basement-cleanup",
    cardImage: "/images/card-flooded-basement-cleanup.webp",
    heroImage: "/images/hero-flooded-basement-cleanup.webp",
    cardAlt: "Water covering the floor of a flooded basement with a water heater, furnace, boxes on shelves and a sump pump",
    pageTitle: "Flooded Basement Cleanup in Elyria, OH",
    metaTitle: "Flooded Basement Cleanup Elyria OH | 24/7 Pump-Out",
    metaDescription:
      "Basements are the number one water damage call in Elyria. We pump out, clean, disinfect and dry. Call (440) 291-9431.",
    summary:
      "Basements are the number one water damage call in Elyria. We pump out, clean, disinfect and dry.",
    body: [
      "Basements are the number one water damage call in Elyria. We pump out, clean, disinfect and dry. ",
      "Learn more about flooded basement cleanup",
      ".",
    ],
    linkText: "Learn more about flooded basement cleanup",
    linkHref: "/flooded-basement-cleanup",
  },
  {
    h3: "Burst and Frozen Pipe Water Damage",
    slug: "burst-pipe-water-damage",
    cardImage: "/images/card-burst-pipe-water-damage.webp",
    heroImage: "/images/hero-burst-pipe-water-damage.webp",
    cardAlt: "A burst copper pipe spraying water onto a wet basement floor, with a pipe wrench and a bucket nearby",
    pageTitle: "Burst and Frozen Pipe Water Damage in Elyria, OH",
    metaTitle: "Burst Pipe Water Damage Elyria OH | Frozen Pipe Cleanup",
    metaDescription:
      "Winter cold splits copper and PEX lines in Elyria, OH. We handle burst pipe water damage cleanup from the first gallon to the last moisture reading.",
    summary:
      "Winter cold splits copper and PEX lines inside walls and ceilings. We handle burst pipe water damage cleanup from the first gallon to the last moisture reading.",
    body: [
      "Winter cold splits copper and PEX lines inside walls and ceilings. We handle ",
      "burst pipe water damage cleanup",
      " from the first gallon to the last moisture reading.",
    ],
    linkText: "burst pipe water damage cleanup",
    linkHref: "/burst-pipe-water-damage",
  },
  {
    h3: "Sewage Backup Cleanup",
    slug: "sewage-backup-cleanup",
    cardImage: "/images/card-sewage-backup-cleanup.webp",
    heroImage: "/images/hero-sewage-backup-cleanup.webp",
    cardAlt: "A worker in a white protective suit, respirator mask and blue gloves extracting dark water from an open floor drain with a wet-dry vacuum in a basement laundry area",
    pageTitle: "Sewage Backup Cleanup in Elyria, OH",
    metaTitle: "Sewage Backup Cleanup Elyria OH | Category 3 Water",
    metaDescription:
      "Sewage is Category 3 water and needs protective gear, removal of porous materials and disinfection in Elyria, OH. Call (440) 291-9431.",
    summary:
      "Sewage is Category 3 water and needs protective gear, removal of porous materials and disinfection.",
    body: [
      "Sewage is Category 3 water and needs protective gear, removal of porous materials and disinfection. ",
      "See sewage backup cleanup",
      ".",
    ],
    linkText: "See sewage backup cleanup",
    linkHref: "/sewage-backup-cleanup",
  },
  {
    h3: "Mold Remediation and Mold Inspection",
    slug: "mold-remediation",
    cardImage: "/images/card-mold-remediation.webp",
    heroImage: "/images/hero-mold-remediation.webp",
    cardAlt: "A worker in a white protective suit and respirator spraying treatment onto a black mold patch on a damp basement wall",
    pageTitle: "Mold Remediation in Elyria, OH",
    metaTitle: "Mold Remediation Elyria OH | HEPA Filtration",
    metaDescription:
      "When water sat too long in Elyria, OH, we contain the area, remove mold and clean the air with HEPA filtration. Call (440) 291-9431.",
    summary:
      "When water sat too long, we contain the area, remove mold and clean the air with HEPA filtration.",
    body: [
      "When water sat too long, we contain the area, remove mold and clean the air with HEPA filtration. ",
      "Read about mold remediation",
      " and ",
      "mold inspection",
      ".",
    ],
    linkText: "Read about mold remediation",
    linkHref: "/mold-remediation",
    linkText2: "mold inspection",
    linkHref2: "/mold-inspection-testing",
  },
  {
    h3: "Storm and Flood Damage Restoration",
    slug: "flood-damage-restoration",
    cardImage: "/images/card-flood-damage-restoration.webp",
    heroImage: "/images/hero-flood-damage-restoration.webp",
    cardAlt: "A flooded residential street with muddy water, houses and trees under an overcast sky",
    pageTitle: "Storm and Flood Damage Restoration in Elyria, OH",
    metaTitle: "Flood Damage Restoration Elyria OH | Storm Pump-Out",
    metaDescription:
      "Heavy rain, flash flooding and high water near the Black River call for fast pump-out and sanitizing in Elyria, OH. Call (440) 291-9431.",
    summary:
      "Heavy rain, flash flooding and high water near the Black River call for fast pump-out and sanitizing.",
    body: [
      "Heavy rain, flash flooding and high water near the Black River call for fast pump-out and sanitizing. ",
      "See flood damage restoration",
      ".",
    ],
    linkText: "See flood damage restoration",
    linkHref: "/flood-damage-restoration",
  },
  {
    h3: "Structural Drying, Ceilings, Floors and Carpet",
    slug: null, // NO path in doc — homepage only, no route
    cardImage: "/images/card-structural-drying.webp",
    heroImage: null,
    cardAlt: "Air movers and a dehumidifier drying a wet wood floor in an empty room",
    pageTitle: null,
    metaTitle: null,
    metaDescription: null,
    summary:
      "We dry walls, ceilings, hardwood floors and carpet with commercial dehumidifiers and air movers, and track progress every day with moisture readings.",
    body: [
      "We dry walls, ceilings, hardwood floors and carpet with commercial dehumidifiers and air movers, and track progress every day with moisture readings.",
    ],
    linkText: null,
    linkHref: null,
  },
  {
    h3: "Commercial Water Damage",
    slug: "commercial-water-damage",
    cardImage: "/images/card-commercial-water-damage.webp",
    heroImage: "/images/hero-commercial-water-damage.webp",
    cardAlt: "A restoration worker extracting standing water from a wet office carpet with a vacuum wand, with an air mover and extraction unit beside desks and glass partitions",
    pageTitle: "Commercial Water Damage in Elyria, OH",
    metaTitle: "Commercial Water Damage Elyria OH | After-Hours Service",
    metaDescription:
      "Offices, stores, churches and multi-unit buildings in Elyria, OH get after-hours service so you can keep the doors open. Call (440) 291-9431.",
    summary:
      "Offices, stores, churches and multi-unit buildings get after-hours service so you can keep the doors open.",
    body: [
      "Offices, stores, churches and multi-unit buildings get after-hours service so you can keep the doors open. ",
      "See commercial water damage restoration",
      ".",
    ],
    linkText: "See commercial water damage restoration",
    linkHref: "/commercial-water-damage",
  },
];

export const CAUSES_SECTION = {
  h2: "Why Do So Many Elyria Homes Get Water Damage?",
  paragraphs: [
    "Elyria sits in the Lake Erie snowbelt, and the weather here is hard on houses. Lake-effect snow piles on roofs, deep cold snaps freeze pipes in outside walls, and spring thaw sends meltwater toward foundations. Summer brings heavy thunderstorms that overload storm drains and sewer lines in a matter of minutes.",
    "Many homes in the city have full basements, block or poured foundations, older sewer laterals and floor drains tied into the city system. That mix means water often enters from below, not just from above. These are the causes we see most often in Elyria and across ZIP 44035:",
  ],
  bullets: [
    "Sump pumps that stop during a storm or a power outage",
    "Water or sewage coming up through basement floor drains during heavy rain",
    "Frozen pipes that burst in exterior walls, garages and crawl spaces",
    "Ice dams that push melting snow under shingles and into ceilings",
    "Water heaters, washing machine hoses and ice maker lines that fail without warning",
    "Basement walls that seep water during snowmelt and long rains",
    "Empty homes where a pipe froze and ran for days before anyone noticed",
  ],
  closingPrefix: "If your problem is one of these, we have a page built just for it: ",
  closingLinks: [
    { text: "sump pump failure cleanup", href: "/sump-pump-failure-cleanup" },
    { text: "basement floor drain backup", href: "/floor-drain-backup-cleanup" },
    { text: "ice dam water damage", href: "/ice-dam-roof-leak-water-damage" },
    { text: "vacant home water damage", href: "/vacant-home-water-damage" },
  ],
};

export const PROCESS_SECTION = {
  h2: "What Happens After You Call (440) 291-9431?",
  intro:
    "You get a real person on the phone, any hour. We ask a few quick questions so the crew arrives ready, then the crew is dispatched immediately. Here is how the job runs from there:",
  steps: [
    { n: 1, title: "Safety check", text: "We confirm power is off in wet areas, look for gas smells and check ceilings that may be holding water." },
    { n: 2, title: "Find the source", text: "We make sure the leak is stopped or isolated. If a plumber is needed for the pipe itself, we tell you right away." },
    { n: 3, title: "Water extraction", text: "Pumps and extraction wands remove standing water from floors, carpet and pad." },
    { n: 4, title: "Moisture mapping", text: "Moisture meters and thermal imaging cameras show where water went inside walls, under floors and into ceilings." },
    { n: 5, title: "Removal of what cannot be saved", text: "Wet carpet pad, swollen baseboards, soaked insulation and drywall below the water line are removed when drying them is not possible or safe." },
    { n: 6, title: "Structural drying", text: "Low-grain refrigerant dehumidifiers and high-velocity air movers are placed to dry the building to normal levels." },
    { n: 7, title: "Daily checks", text: "We record moisture readings until every area reaches its drying goal. Those readings also support your insurance claim." },
    { n: 8, title: "Repairs", text: "Once dry, drywall, trim, flooring and paint can be put back." },
  ],
};

export const CATEGORIES_SECTION = {
  h2: "Clean Water, Gray Water or Sewage: Why the Water Type Matters",
  intro: "The IICRC S500 standard sorts water into three categories, and the category decides how the job is done.",
  bullets: [
    { label: "Category 1 (clean water)", text: "a broken supply line or a leaking water heater. Most materials can be dried if work starts fast." },
    { label: "Category 2 (gray water)", text: "washing machine overflow, dishwasher discharge or water that has picked up contamination. More materials need to come out." },
    { label: "Category 3 (black water)", text: "sewage, floor drain backups during storms and outside floodwater. Porous materials like carpet, pad and drywall are removed, and everything is disinfected." },
  ],
  closingPrefix: "Clean water does not stay clean. After a day or two in a warm basement, Category 1 water can turn into Category 2 or 3. That is one more reason to call early. ",
  closingLink: { text: "Read more in our guide to Category 1, 2 and 3 water", href: "/blog/category-1-2-3-water-damage" },
};

export const COST_SECTION = {
  h2: "How Much Does Water Damage Restoration Cost in Elyria?",
  intro: "Every job is priced after the crew inspects the damage, because size, water type and materials change the scope. These are typical ranges we see in Elyria homes:",
  bullets: [
    { label: "Small water extraction and drying (one room)", text: "about $400 to $1,500" },
    { label: "Flooded basement cleanup and drying", text: "about $1,500 to $6,000" },
    { label: "Burst pipe water damage with wall or ceiling drying", text: "about $1,200 to $5,000" },
    { label: "Sewage backup cleanup and disinfection", text: "about $2,000 to $8,000" },
    { label: "Mold remediation", text: "about $1,200 to $6,000" },
  ],
  closingPrefix: "Most sudden water damage is handled through a homeowners insurance claim, and we document everything your insurer asks for. ",
  closingLink: { text: "See the full water damage restoration cost guide", href: "/blog/water-damage-restoration-cost-elyria" },
};

export const INSURANCE_SECTION = {
  h2: "Help With Your Water Damage Insurance Claim",
  paragraph:
    "Ohio homeowners policies usually cover water damage that is sudden and accidental, such as a burst pipe or a failed water heater. Sewer backup and sump pump overflow are often covered only if you added a water backup endorsement, and outside flooding usually needs a separate flood policy. We do not make promises about coverage, but we give your adjuster what they need: photos, moisture logs, drying records and a line-item estimate. You also have the right to choose your own restoration company.",
  linkText: "Learn more about water damage insurance claim help",
  linkHref: "/water-damage-insurance-claim-help",
};

export const BEFORE_CREW_SECTION = {
  h2: "Emergency Water Damage in Elyria? What To Do Before the Crew Arrives",
  bullets: [
    "Shut off the main water valve if the leak is from a pipe, fixture or appliance.",
    "Turn off power to wet areas at the breaker panel, but only if you can reach it without standing in water.",
    "Stay out of water that may contain sewage, and keep kids and pets away.",
    "Move photos, documents and electronics to a dry floor.",
    "Take photos and short videos of the damage for insurance.",
    "Do not use a household vacuum on water, and do not turn on ceiling lights under a sagging, wet ceiling.",
  ],
  closingPrefix: "Then call (440) 291-9431 and let us take it from there. Our panic guide covers every step in detail: ",
  closingLink: { text: "first steps after water damage", href: "/blog/first-steps-after-water-damage" },
};

export const SERVING_SECTION = {
  h2: "Water Damage Company Serving All of Elyria, OH",
  paragraphs: [
    "Our water damage company works across Elyria and ZIP 44035, from homes near downtown and Ely Square to houses along the Black River and Cascade Park, the neighborhoods off OH-57 and the streets around Midway Mall and Lorain County Community College. We also take calls from nearby communities in Lorain County. Older two-story homes with plaster ceilings, ranch homes with finished basements, rentals, duplexes, mobile homes and commercial buildings are all part of the daily work.",
  ],
  closingPrefix: "Because most water damage starts at night or on weekends, our phone line and dispatch run 24/7, including holidays. For landlords and property managers we offer fast turnaround to get units back in use, ",
  closingLink: { text: "see rental property water damage", href: "/rental-property-water-damage" },
};

export const SIGNS_SECTION = {
  h2: "Signs You Have Hidden Water Damage",
  intro: "Not every problem announces itself with a flood. Call us for emergency water damage help in Elyria, Ohio if you notice:",
  bullets: [
    "A musty or earthy smell in the basement or a closet",
    "Brown rings or bubbling paint on the ceiling",
    "Floors that feel soft, cupped or spongy",
    "Baseboards that are swelling or pulling away from the wall",
    "A sudden jump in your water bill with no clear reason",
    "Damp carpet near the foundation after rain or snowmelt",
  ],
  closing: "Moisture meters and thermal imaging can find wet areas behind walls without tearing them open first.",
};

export const PREVENTION_SECTION = {
  h2: "Stopping the Next Water Damage Before It Starts",
  intro: "Once your home is dry, a few changes can lower the chance of a repeat call:",
  bullets: [
    "Add a battery backup to your sump pump and test it each spring",
    "Install a backwater valve if your floor drain has backed up before",
    "Keep heat at 55°F or higher in winter, even when you travel",
    "Insulate pipes on outside walls and in unheated spaces",
    "Replace rubber washing machine hoses with braided steel",
    "Keep gutters and downspouts clear and pointed away from the foundation",
  ],
  closingPrefix: "Our blog covers these in detail, starting with ",
  closingLinks: [
    { text: "how to prevent frozen pipes", href: "/blog/prevent-frozen-pipes-elyria" },
    { text: "sump pump battery backup options", href: "/blog/sump-pump-battery-backup-guide" },
  ],
  closingMiddle: " and ",
  closingSuffix: ".",
};

export const FAQ_SECTION = {
  h2: "Frequently Asked Questions About Water Damage in Elyria",
  faqs: [
    {
      q: "How fast can a water damage crew reach my home in Elyria?",
      a: "A crew is dispatched immediately after your call, 24 hours a day. Arrival time depends on traffic, weather and where you are in the city, and we keep you updated by phone while the crew is on the way.",
    },
    {
      q: "Is water damage restoration the same as water mitigation?",
      a: "Not quite. Water mitigation stops the damage from getting worse through water removal, removal of soaked materials and drying. Restoration includes that work plus the repairs that put your home back the way it was.",
    },
    {
      q: "How long does it take to dry a house after water damage?",
      a: "Most homes dry in three to five days with commercial dehumidifiers and air movers. Dense materials like hardwood, plaster and concrete can take longer, and we check moisture levels every day until the drying goal is met.",
    },
    {
      q: "Can I stay in my home during water damage restoration?",
      a: "Usually yes, as long as the water is clean and power is safe in living areas. With sewage, mold or major structural damage, we may suggest staying elsewhere while the affected area is cleaned.",
    },
    {
      q: "Does homeowners insurance cover water damage in Ohio?",
      a: "Sudden and accidental water damage, like a burst pipe, is usually covered. Sewer backup, sump pump overflow and outside flooding are often excluded unless you have extra coverage. Your policy and adjuster make the final call.",
    },
    {
      q: "Will I get mold after a basement flood?",
      a: "Mold can begin growing within 24 to 48 hours when materials stay wet. Fast water removal and proper drying are the best way to prevent it.",
    },
  ],
};

export const FINAL_CTA = {
  h2: "Call Our Elyria Water Damage Restoration Crew Now",
  paragraph:
    "Water damage gets more expensive every hour it sits. Whether it is a flooded basement, a burst pipe, a sewage backup or a ceiling that is starting to sag, our team handles water damage restoration in Elyria, Ohio around the clock. Call (440) 291-9431 and a crew is dispatched immediately.",
};

// ---- Full-content pages (tabs 2-40) -----------------------------------------
// The old ROOT_PAGES / BLOG_PAGES thin summaries (verbatim homepage text only)
// are DELETED: every page now renders its own full tab verbatim from
// lib/pages-full.js (generated by qa/parse-tabs.py from doc-raw-tabs.json).
// Homepage sections above (SERVICES etc.) still come from Tab 1 and are kept.
export const ALL_ROUTES = FULL_ALL_ROUTES;

// Footer services list: ALL 25 service pages (tab order). Labels are the doc
// tab titles without their "N. " numbering. This gives every service route an
// inbound footer link -- including the three routes no tab body-copy links to
// (water-heater-leak, mobile-home, about is linked from the brand column).
export const FOOTER_SERVICES = FULL_PAGES.filter((p) => p.kind === "service").map(
  (p) => ({ label: p.tabTitle.replace(/^\d+\.\s*/, ""), href: "/" + p.slug })
);

// Nav services (header dropdown is hardcoded in components/Header.js; this
// export is kept for the footer brand column links only).
export const NAV_SERVICES = FOOTER_SERVICES;

// Header Services menu: ONLY the 7 most important (highest-intent) services,
// in doc-tab order. The other 18 services live in the footer only
// (FOOTER_SERVICES = all 25). Labels are the doc tab titles, same as footer.
const HEADER_SERVICE_SLUGS = [
  "emergency-water-extraction",
  "water-mitigation",
  "flood-damage-restoration",
  "flooded-basement-cleanup",
  "burst-pipe-water-damage",
  "sewage-backup-cleanup",
  "mold-remediation",
];
export const HEADER_SERVICES = HEADER_SERVICE_SLUGS.map(
  (slug) => FOOTER_SERVICES.find((s) => s.href === "/" + slug)
).filter(Boolean);

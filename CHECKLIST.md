# ELYRIA OH — MASTER CHECKLIST (build gate)
Doc: Google Doc 1n2fnL6dnNEYo_b5LlqJHjh-yL8yXxtPd2QDqOW6myT4 — "Elyria OH Water Damage Restoration — Page Copy (40 Pages)"
Phone ONLY (440) 291-9431. ZIP 44035, Lorain County. No domain, no street address.
CORRECTION 2026-11-12: the doc has 40 TABS (53,606 words), fetched with
includeTabsContent=true. The 2026-11-11 "homepage only" read was Tab 1 only.
40 routes total: homepage + 25 services + About + Contact + 12 blogs.
Tab 1 = homepage (2,242w); service tabs 1,471–1,597w each; About 360w;
Contact 204w; blog tabs 1,022–1,121w each.

## ROUTES (40 = homepage + 25 services + About + Contact + 12 blogs)
- [x] / (homepage, verbatim Tab 1, 2,242 words)
- [x] /emergency-water-extraction (Tab 2, full content)
- [x] /water-mitigation (Tab 3, full content)
- [x] /flooded-basement-cleanup (Tab 4, full content)
- [x] /burst-pipe-water-damage (Tab 5, full content)
- [x] /sewage-backup-cleanup (Tab 6, full content)
- [x] /mold-remediation (Tab 7, full content)
- [x] /mold-inspection-testing (Tab 8, full content)
- [x] /flood-damage-restoration (Tab 9, full content)
- [x] /structural-drying (Tab 10, NEW route)
- [x] /ceiling-water-damage-repair (Tab 11, NEW route)
- [x] /hardwood-floor-water-damage (Tab 12, NEW route)
- [x] /carpet-water-damage (Tab 13, NEW route)
- [x] /commercial-water-damage (Tab 14, full content)
- [x] /water-damage-insurance-claim-help (Tab 15, full content)
- [x] /sump-pump-failure-cleanup (Tab 16, full content)
- [x] /floor-drain-backup-cleanup (Tab 17, full content)
- [x] /ice-dam-roof-leak-water-damage (Tab 18, full content)
- [x] /vacant-home-water-damage (Tab 19, full content)
- [x] /finished-basement-water-damage (Tab 20, NEW route)
- [x] /water-heater-leak-water-damage (Tab 21, NEW route)
- [x] /appliance-leak-water-damage (Tab 22, NEW route)
- [x] /crawl-space-water-damage (Tab 23, NEW route)
- [x] /rental-property-water-damage (Tab 24, full content)
- [x] /mobile-home-water-damage (Tab 25, NEW route)
- [x] /basement-seepage-water-damage (Tab 26, NEW route)
- [x] /about (Tab 27, NEW route)
- [x] /contact (Tab 28, NEW route)
- [x] /blog/water-damage-restoration-cost-elyria (Tab 29, full content)
- [x] /blog/first-steps-after-water-damage (Tab 30, full content)
- [x] /blog/does-insurance-cover-sewer-backup-ohio (Tab 31, NEW route)
- [x] /blog/flood-vs-water-damage-insurance-ohio (Tab 32, NEW route)
- [x] /blog/prevent-frozen-pipes-elyria (Tab 33, full content)
- [x] /blog/sump-pump-battery-backup-guide (Tab 34, full content)
- [x] /blog/ice-dam-prevention-ohio (Tab 35, NEW route)
- [x] /blog/how-fast-mold-grows-after-basement-flood (Tab 36, NEW route)
- [x] /blog/elyria-flood-zones-black-river (Tab 37, NEW route)
- [x] /blog/who-pays-water-damage-rental-ohio (Tab 38, NEW route)
- [x] /blog/restoration-company-vs-plumber (Tab 39, NEW route)
- [x] /blog/category-1-2-3-water-damage (Tab 40, full content)

## BUILD
- [x] Latest Next.js stack: Next 16.4.6 + React 19.3.1, static export, `next build` green
- [x] Locked Upgraded Theme v2 design language, fresh code only, zero traces of any older site (difference audit)
- [x] Content 1001% verbatim from the doc — EVERY tab word on its page, nothing added, nothing dropped (sentence-level + multiset verified, qa/verify-rebuild.py)
- [x] Button 1 = "(440) 291-9431" only; Button 2 = each tab's own CTA Button 2 text, equal size/prominence/visibility
- [x] 18px body sitewide except headings (computed-size verified per page)
- [x] H1 1/page VISIBLE; H2/H3 counts match each tab; FAQ schema == visible Q/A per page; HowTo on homepage (8 steps) + first-steps blog (10 steps)
- [x] URLs: homepage / only, others no-slash, ROOT-level paths as each tab's URL line gives (NOT /services/); self-canonical; sitemap 40/40 date-only lastmod; robots NO Host:
- [x] Internal links ONLY from parenthetical paths in tab text; 0 broken; 0 orphans (footer lists all 25 services + About/Contact); 0 self-links in body copy; 1 link per target per page (repeats plain)
- [x] Real photos only, fresh for Elyria, metadata stripped + verified, 0 repeats, relevance by viewed pixels, height measured
- [x] IMAGES UNCHANGED in the full-content rebuild (2026-11-12, his call pending): 20 existing pages keep their photos; 19 new routes have NO hero photo (navy hero, no .hero-media) — imageless by design, flagged for his image decision
- [x] Sticky mobile call bar every page; footer map on all pages
- [x] LCP <1.8s mobile, CLS 0, overflow 0 @1280/@390 — MEASURED

## TESTING (fresh rounds, screenshots viewed, not code-only)
- [x] Round 1: build + structure + visual (desktop + mobile per page)
- [x] Round 2: fresh re-run after fixes (re-measure, re-screenshot)
- [x] A-to-Z audit: PROBLEMS 0 before review pack
- [x] Review pack: labelled PDF (desktop + mobile per page) in ~/workspace/your_files/
- [x] FULL-CONTENT REBUILD 2026-11-12: 40/40 routes, per-page word counts + verbatim diff (qa/FINDINGS-full-content-rebuild-2026-11-12.md), browser sweep 40x3 viewports (qa/verify-browser.py)
- [x] LOCAL ONLY — no push/deploy/domain/DNS/token until his word

## OPEN (his call)
- [ ] Domain — none in doc (placeholder until he gives one)
- [ ] No street address / Privacy in doc (no Privacy tab — do NOT build one)
- [ ] 19 new routes have no hero photo (his image decision); 6 pre-existing open image slots unchanged (mitigation hero = Stockbridge reuse, home hero palms, sump hand pump, mold Dettol label, floor-drain SAN FRANCISCO grate, flooded-basement debris card)
- [ ] Contact tab lists form fields (Name, Phone, Address, Describe the Water Damage, Submit) as text — no backend on static hosting; form wiring is his call
- [ ] Real job photos vs fresh stock — flagged slots, if any
- [ ] Review pack PDF predates the full-content rebuild — regenerate before his review

# Elyria — Per-Route Content Map (FULL doc re-read, 2026-11-12 ~19:45 PKT)

## Method (proof the read is complete)
- Doc: 1n2fnL6dnNEYo_b5LlqJHjh-yL8yXxtPd2QDqOW6myT4, 'Elyria OH Water Damage Restoration — Page Copy (40 Pages)'
- Fetched with Docs API `documents.get` + `includeTabsContent=true`. The API returned a `tabs` array of **40 tabs** — verified by listing every tab title (see below).
- Old read (`extracted.txt` 2,330 words incl. file markers; `doc-raw.json` has NO `tabs` field, body = 144 elements) was fetched WITHOUT includeTabsContent, so it contained **Tab 1 (Homepage) only — 2,242 words**.
- Full doc: **53,606 words across 40 tabs**. Old read MISSED **39 tabs / 51,364 words (95.8% of the doc)**.
- Headings in the doc are literal text prefixes ("H1:", "H2:", "H3:") in NORMAL_TEXT paragraphs, not named heading styles. Every tab declares its own `URL:` line, `Meta Title:`, `Meta Description:`, `Eyebrow:`, `H1:`, CTA buttons, H2 sections, bullets, and (service/blog tabs) an `H2: ... FAQs` section with H3 questions.
- Raw full JSON saved as `doc-full-raw.json` (new file; old `doc-raw.json` untouched). Full text saved as `extracted-full.txt`.

## Word counts per tab
| # | Tab | Words | H1 | H2 | H3 | Bullets | Doc URL line |
|---|-----|-------|----|----|----|---------|--------------|
| 1 | Homepage | 2242 | 1 | 13 | 15 | 37 | / |
| 2 | Emergency Water Extraction | 1597 | 1 | 14 | 5 | 34 | /emergency-water-extraction/ |
| 3 | Water Mitigation | 1510 | 1 | 14 | 5 | 28 | /water-mitigation/ |
| 4 | Flooded Basement Cleanup | 1520 | 1 | 14 | 5 | 32 | /flooded-basement-cleanup/ |
| 5 | Burst Pipe Water Damage | 1508 | 1 | 15 | 5 | 24 | /burst-pipe-water-damage/ |
| 6 | Sewage Backup Cleanup | 1505 | 1 | 16 | 5 | 28 | /sewage-backup-cleanup/ |
| 7 | Mold Remediation | 1554 | 1 | 19 | 5 | 28 | /mold-remediation/ |
| 8 | Mold Inspection | 1534 | 1 | 19 | 9 | 28 | /mold-inspection-testing/ |
| 9 | Flood Damage Restoration | 1496 | 1 | 20 | 4 | 26 | /flood-damage-restoration/ |
| 10 | Structural Drying | 1519 | 1 | 19 | 4 | 22 | /structural-drying/ |
| 11 | Ceiling Water Damage | 1535 | 1 | 19 | 5 | 24 | /ceiling-water-damage-repair/ |
| 12 | Hardwood Floor Water Damage | 1546 | 1 | 21 | 4 | 22 | /hardwood-floor-water-damage/ |
| 13 | Carpet Water Damage | 1515 | 1 | 23 | 4 | 33 | /carpet-water-damage/ |
| 14 | Commercial Water Damage | 1471 | 1 | 22 | 4 | 28 | /commercial-water-damage/ |
| 15 | Insurance Claim Help | 1481 | 1 | 21 | 4 | 37 | /water-damage-insurance-claim-help/ |
| 16 | Sump Pump Failure | 1518 | 1 | 20 | 4 | 41 | /sump-pump-failure-cleanup/ |
| 17 | Floor Drain Backup | 1529 | 1 | 21 | 4 | 16 | /floor-drain-backup-cleanup/ |
| 18 | Ice Dam Water Damage | 1512 | 1 | 20 | 4 | 29 | /ice-dam-roof-leak-water-damage/ |
| 19 | Vacant Home Water Damage | 1504 | 1 | 21 | 3 | 30 | /vacant-home-water-damage/ |
| 20 | Finished Basement | 1497 | 1 | 22 | 3 | 32 | /finished-basement-water-damage/ |
| 21 | Water Heater Leak | 1507 | 1 | 22 | 3 | 32 | /water-heater-leak-water-damage/ |
| 22 | Appliance Leak | 1481 | 1 | 23 | 3 | 22 | /appliance-leak-water-damage/ |
| 23 | Crawl Space | 1491 | 1 | 23 | 3 | 21 | /crawl-space-water-damage/ |
| 24 | Rental Property | 1502 | 1 | 23 | 3 | 44 | /rental-property-water-damage/ |
| 25 | Mobile Home | 1514 | 1 | 23 | 3 | 30 | /mobile-home-water-damage/ |
| 26 | Basement Seepage | 1517 | 1 | 24 | 3 | 19 | /basement-seepage-water-damage/ |
| 27 | About | 360 | 1 | 5 | 0 | 6 | /about/ |
| 28 | Contact | 204 | 1 | 3 | 0 | 6 | /contact/ |
| 29 | Blog: Cost Guide | 1119 | 1 | 14 | 3 | 30 | /blog/water-damage-restoration-cost-elyria/ |
| 30 | Blog: First Steps | 1121 | 1 | 13 | 16 | 16 | /blog/first-steps-after-water-damage/ |
| 31 | Blog: Sewer Backup Insurance | 1087 | 1 | 16 | 3 | 23 | /blog/does-insurance-cover-sewer-backup-ohio/ |
| 32 | Blog: Flood vs Water Insurance | 1059 | 1 | 16 | 3 | 26 | /blog/flood-vs-water-damage-insurance-ohio/ |
| 33 | Blog: Frozen Pipes | 1080 | 1 | 16 | 2 | 37 | /blog/prevent-frozen-pipes-elyria/ |
| 34 | Blog: Sump Pump Backup | 1089 | 1 | 17 | 2 | 27 | /blog/sump-pump-battery-backup-guide/ |
| 35 | Blog: Ice Dams | 1063 | 1 | 16 | 2 | 24 | /blog/ice-dam-prevention-ohio/ |
| 36 | Blog: Mold Growth Speed | 1061 | 1 | 17 | 2 | 32 | /blog/how-fast-mold-grows-after-basement-flood/ |
| 37 | Blog: Flood Zones | 1086 | 1 | 16 | 2 | 23 | /blog/elyria-flood-zones-black-river/ |
| 38 | Blog: Rental Who Pays | 1022 | 1 | 17 | 2 | 19 | /blog/who-pays-water-damage-rental-ohio/ |
| 39 | Blog: Plumber vs Restoration | 1085 | 1 | 17 | 2 | 27 | /blog/restoration-company-vs-plumber/ |
| 40 | Blog: Water Categories | 1065 | 1 | 16 | 2 | 19 | /blog/category-1-2-3-water-damage/ |
| | **TOTAL** | **53,606** | | | | | |

## Per-route map — the 21 site routes (from out/sitemap.xml)
Every route has FULL matching doc content. None is absent.

| Site route | Doc tab | Tab words | H2 | H3 | Doc H1 (verbatim) | Status |
|---|---|---|---|---|---|---|
| / | 1. Homepage | 2242 | 13 | 15 | 24/7 Water Damage Restoration in Elyria, OH | FULL CONTENT EXISTS |
| /emergency-water-extraction | 2. Emergency Water Extraction | 1597 | 14 | 5 | Emergency Water Extraction in Elyria, OH | FULL CONTENT EXISTS |
| /water-mitigation | 3. Water Mitigation | 1510 | 14 | 5 | Emergency Water Mitigation in Elyria, OH | FULL CONTENT EXISTS |
| /flooded-basement-cleanup | 4. Flooded Basement Cleanup | 1520 | 14 | 5 | Emergency Flooded Basement Cleanup in Elyria, OH | FULL CONTENT EXISTS |
| /burst-pipe-water-damage | 5. Burst Pipe Water Damage | 1508 | 15 | 5 | Emergency Burst Pipe Water Damage Cleanup in Elyria, OH | FULL CONTENT EXISTS |
| /sewage-backup-cleanup | 6. Sewage Backup Cleanup | 1505 | 16 | 5 | Emergency Sewage Backup Cleanup in Elyria, OH | FULL CONTENT EXISTS |
| /mold-remediation | 7. Mold Remediation | 1554 | 19 | 5 | Professional Mold Remediation in Elyria, OH | FULL CONTENT EXISTS |
| /mold-inspection-testing | 8. Mold Inspection | 1534 | 19 | 9 | Mold Inspection & Testing in Elyria, OH | FULL CONTENT EXISTS |
| /flood-damage-restoration | 9. Flood Damage Restoration | 1496 | 20 | 4 | 24/7 Flood Damage Restoration in Elyria, OH | FULL CONTENT EXISTS |
| /commercial-water-damage | 14. Commercial Water Damage | 1471 | 22 | 4 | 24/7 Commercial Water Damage Restoration in Elyria, OH | FULL CONTENT EXISTS |
| /sump-pump-failure-cleanup | 16. Sump Pump Failure | 1518 | 20 | 4 | Emergency Sump Pump Failure Cleanup in Elyria, OH | FULL CONTENT EXISTS |
| /floor-drain-backup-cleanup | 17. Floor Drain Backup | 1529 | 21 | 4 | Basement Floor Drain Backup Cleanup in Elyria, OH | FULL CONTENT EXISTS |
| /ice-dam-roof-leak-water-damage | 18. Ice Dam Water Damage | 1512 | 20 | 4 | Ice Dam Water Damage Cleanup in Elyria, OH | FULL CONTENT EXISTS |
| /vacant-home-water-damage | 19. Vacant Home Water Damage | 1504 | 21 | 3 | Vacant Home Water Damage Cleanup in Elyria, OH | FULL CONTENT EXISTS |
| /water-damage-insurance-claim-help | 15. Insurance Claim Help | 1481 | 21 | 4 | Water Damage Insurance Claim Help in Elyria, OH | FULL CONTENT EXISTS |
| /rental-property-water-damage | 24. Rental Property | 1502 | 23 | 3 | Rental Property Water Damage Restoration in Elyria, OH | FULL CONTENT EXISTS |
| /blog/category-1-2-3-water-damage | 40. Blog: Water Categories | 1065 | 16 | 2 | Category 1, 2 & 3 Water Damage Explained | FULL CONTENT EXISTS |
| /blog/water-damage-restoration-cost-elyria | 29. Blog: Cost Guide | 1119 | 14 | 3 | Water Damage Restoration Cost in Elyria, OH | FULL CONTENT EXISTS |
| /blog/first-steps-after-water-damage | 30. Blog: First Steps | 1121 | 13 | 16 | Water Damage at Home? First 10 Steps for Elyria Homeowners | FULL CONTENT EXISTS |
| /blog/prevent-frozen-pipes-elyria | 33. Blog: Frozen Pipes | 1080 | 16 | 2 | How to Prevent Frozen Pipes in Elyria This Winter | FULL CONTENT EXISTS |
| /blog/sump-pump-battery-backup-guide | 34. Blog: Sump Pump Backup | 1089 | 17 | 2 | Sump Pump Battery Backup Guide for Northeast Ohio | FULL CONTENT EXISTS |

## Tabs with FULL content but NO site route (19 tabs — content exists, page was never built)
| Doc tab | Words | Doc URL line |
|---|---|---|
| 10. Structural Drying | 1519 | /structural-drying/ |
| 11. Ceiling Water Damage | 1535 | /ceiling-water-damage-repair/ |
| 12. Hardwood Floor Water Damage | 1546 | /hardwood-floor-water-damage/ |
| 13. Carpet Water Damage | 1515 | /carpet-water-damage/ |
| 20. Finished Basement | 1497 | /finished-basement-water-damage/ |
| 21. Water Heater Leak | 1507 | /water-heater-leak-water-damage/ |
| 22. Appliance Leak | 1481 | /appliance-leak-water-damage/ |
| 23. Crawl Space | 1491 | /crawl-space-water-damage/ |
| 25. Mobile Home | 1514 | /mobile-home-water-damage/ |
| 26. Basement Seepage | 1517 | /basement-seepage-water-damage/ |
| 27. About | 360 | /about/ |
| 28. Contact | 204 | /contact/ |
| 31. Blog: Sewer Backup Insurance | 1087 | /blog/does-insurance-cover-sewer-backup-ohio/ |
| 32. Blog: Flood vs Water Insurance | 1059 | /blog/flood-vs-water-damage-insurance-ohio/ |
| 35. Blog: Ice Dams | 1063 | /blog/ice-dam-prevention-ohio/ |
| 36. Blog: Mold Growth Speed | 1061 | /blog/how-fast-mold-grows-after-basement-flood/ |
| 37. Blog: Flood Zones | 1086 | /blog/elyria-flood-zones-black-river/ |
| 38. Blog: Rental Who Pays | 1022 | /blog/who-pays-water-damage-rental-ohio/ |
| 39. Blog: Plumber vs Restoration | 1085 | /blog/restoration-company-vs-plumber/ |

## What the old read MISSED (the correction, exactly)
- Old claim: doc is "homepage-only", 2,242 words, 21 routes, "(40 Pages)" title not matched by body.
- Truth: the doc HAS 40 tabs. The old fetch (no includeTabsContent) returned Tab 1 only. It missed Tabs 2–40: 39 tabs, 51,364 words — including a complete ~1,500-word page for EVERY one of the 21 site routes, plus 19 more full pages (10 services, About, Contact, 7 blogs) that were never built as routes.
- The "(40 Pages)" title is accurate: 40 tabs = 40 pages of content.
- No hyperlink objects exist in any tab (0 links in all 40 tabs) — routes were derived from Tab 1's parenthetical path text, which is why only the 21 routes named in Tab 1 were built.

## Files
- `extracted-full.txt` — complete doc text, all 40 tabs labelled (53,606 words).
- `doc-full-raw.json` — full API response with includeTabsContent=true (new file).
- `ROUTE-CONTENT-MAP.md` — this file.
- Old files untouched: `extracted.txt`, `doc-raw.json` (Tab 1 only).

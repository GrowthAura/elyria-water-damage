"use client";
import { useEffect, useRef, useState } from "react";
import { PHONE, PHONE_TEL, HEADER_SERVICES } from "../lib/site"; // SPEED FIX 2026-11-17 F2: lib/site has no pages-full import, so the client chunk no longer ships the 647 KB doc dataset.

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropRef = useRef(null);
  // Menu closes on Escape and on scroll (standing rule + master checklist gate 4).
  // While open, lock body scroll so the page does not scroll behind the menu
  // (Round 3 QA: scroll lock was missing).
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onScroll = () => setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open ]);
  // Services dropdown closes on Escape, outside click, and scroll.
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setServicesOpen(false);
    };
    const onScroll = () => setServicesOpen(false);
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, [servicesOpen ]);
  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
  };
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Water Damage Restoration Elyria, OH, home">
          <span className="brand-mark" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0 0 14 0C19 10.5 12 2 12 2Z" />
            </svg>
          </span>
          <span>
            <span className="brand-name">Elyria Water Damage</span>
            <br />
            <span className="brand-sub">Restoration • 24/7</span>
          </span>
        </a>
        <nav className={`main-nav${open ? " open" : ""}`} id="main-nav" aria-label="Main navigation">
          {/* Services menu: ONLY the 7 most important services (HEADER_SERVICES,
              doc tab titles, same labels as the footer). The other 18 services
              live in the footer only. Desktop: click opens a panel under the
              button. Mobile: the same button expands an accordion inside the
              hamburger panel. */}
          <div className="nav-dropdown" ref={dropRef}>
            <button
              type="button"
              className="nav-drop-btn"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="services-menu"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services <span className="nav-chevron" aria-hidden="true">▾</span>
            </button>
            <div className={`nav-drop-panel${servicesOpen ? " open" : ""}`} id="services-menu">
              {HEADER_SERVICES.map((s) => (
                <a key={s.href} href={s.href} onClick={closeAll}>{s.label}</a>
              ))}
              <a
                className="nav-drop-all"
                href="#footer-services"
                onClick={(e) => {
                  // Native anchor jump would fail: closeAll hides the panel
                  // (display:none) before the browser's default scroll runs,
                  // leaving the target with no layout box. Scroll by hand.
                  // Deferred 50ms: the menu's body-scroll lock is only
                  // released after React commits the close, so an immediate
                  // scrollIntoView would be clamped while overflow is hidden.
                  e.preventDefault();
                  closeAll();
                  setTimeout(() => {
                    document.getElementById("footer-services")?.scrollIntoView();
                  }, 50);
                }}
              >
                All Services ↓
              </a>
            </div>
          </div>
          <a href="/about" onClick={closeAll}>About</a>
          <a href="/contact" onClick={closeAll}>Contact</a>
          <a href="/blog/water-damage-restoration-cost-elyria" onClick={closeAll}>Blog</a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => { setOpen((v) => !v); setServicesOpen(false); }}
        >
          ☰ Menu
        </button>
        <a className="header-phone" href={PHONE_TEL}>{PHONE}</a>
      </div>
    </header>
  );
}

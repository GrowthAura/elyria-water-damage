"use client";
import { useEffect, useState } from "react";
import { PHONE, PHONE_TEL } from "../lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
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
          <a href="/emergency-water-extraction" onClick={() => setOpen(false)}>Emergency</a>
          <a href="/flooded-basement-cleanup" onClick={() => setOpen(false)}>Flooded Basement</a>
          <a href="/burst-pipe-water-damage" onClick={() => setOpen(false)}>Burst Pipe</a>
          <a href="/sewage-backup-cleanup" onClick={() => setOpen(false)}>Sewage Backup</a>
          <a href="/mold-remediation" onClick={() => setOpen(false)}>Mold Remediation</a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰ Menu
        </button>
        <a className="header-phone" href={PHONE_TEL}>{PHONE}</a>
      </div>
    </header>
  );
}

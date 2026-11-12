"use client";
import { useEffect, useState } from "react";
import { PHONE, PHONE_TEL } from "../lib/data";

// Mobile call bar: hidden while the hero is on screen (standing rule — it must
// never cover the hero buttons at scroll 0), shown once the hero scrolls out.
export default function StickyCall() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero || !("IntersectionObserver" in window)) {
      const onScroll = () => setVisible(window.scrollY > 120);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  return (
    <div
      className={`sticky-call${visible ? " visible" : ""}`}
      role="navigation"
      aria-label="Emergency call bar"
    >
      <a className="sc-call" href={PHONE_TEL}>
        {PHONE}
      </a>
      <a className="sc-help" href={PHONE_TEL}>
        Get Emergency Help
      </a>
    </div>
  );
}

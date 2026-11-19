"use client";

import { useEffect, useState } from "react";
import { PLACE } from "./data";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#dawat", label: "Dawat platters" },
  { href: "#events", label: "Events" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="nav__inner wrap">
        <a href="#top" className="logo" aria-label={`${PLACE.name} home`}>
          <span className="logo__mark" aria-hidden="true" />
          {PLACE.name}
        </a>

        <nav aria-label="Main">
          <ul className={`nav__links ${open ? "is-open" : ""}`}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#book" className="btn btn--gold btn--small" onClick={() => setOpen(false)}>
                Book a table
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

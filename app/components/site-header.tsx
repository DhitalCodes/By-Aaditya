"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MailIcon } from "./icons";

export function SiteHeader({ homepage = false }: { homepage?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={`site-header${homepage ? " site-header--home" : ""}`}>
      <div className="site-container site-header__inner">
        <Link className="brand" href="/" aria-label="By Aaditya home" onClick={() => setMenuOpen(false)}>
          By Aaditya<span className="brand__dot">.</span>
        </Link>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close main navigation" : "Open main navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
        <nav className={`site-nav${menuOpen ? " site-nav--open" : ""}`} id="main-navigation" aria-label="Main navigation">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/work" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
        <a className="header-contact" href="mailto:byaaditya12@gmail.com">
          <MailIcon />
          <span>Let&apos;s talk</span>
        </a>
      </div>
    </header>
  );
}

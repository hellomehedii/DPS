"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems, siteName, type NavKey } from "@/data/site";

type HeaderProps = {
  active: NavKey;
};

export function Header({ active }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navigationTarget, setNavigationTarget] = useState<NavKey | null>(null);
  const isNavigating = navigationTarget !== null && navigationTarget !== active;

  const handleNavigation = (destination: NavKey) => {
    setNavigationTarget(destination === active ? null : destination);
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isMenuOpen ? "is-menu-open" : ""}`}>
      <Link
        href="/"
        className="brand brand-header"
        aria-label={`${siteName} home`}
        onNavigate={() => handleNavigation("home")}
      >
        <Image src="/DPS_Logo_PNG.png" alt={siteName} fill priority sizes="(max-width: 700px) 110px, 150px" />
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={item.key === active ? "is-active" : ""}
            aria-current={item.key === active ? "page" : undefined}
            onNavigate={() => handleNavigation(item.key)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link href="/contact" className="quote-link" onNavigate={() => handleNavigation("contact")}>
        <span />
        Contact Us
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      {isNavigating && (
        <div className="navigation-loading" role="status" aria-live="polite" aria-label="Loading page">
          <span className="navigation-spinner" />
          <span>Loading</span>
        </div>
      )}
    </header>
  );
}

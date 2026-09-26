"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "bg-ink/95 backdrop-blur border-ink-line"
          : "bg-ink border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-paper"
          aria-label={siteConfig.name}
        >
          <Image
            src="/icons/logo.png"
            alt={`Logo ${siteConfig.name}`}
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="font-display text-base font-semibold">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-paper transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">
            Parlons de votre projet
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-paper p-2"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6 L20 20 M20 6 L6 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 8 H22 M4 13 H22 M4 18 H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-ink-line bg-ink"
          aria-label="Navigation mobile"
        >
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-paper text-sm border-b border-ink-line last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button href="/contact" variant="primary" className="w-full">
                Parlons de votre projet
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
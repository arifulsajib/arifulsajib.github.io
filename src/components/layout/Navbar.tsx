"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { profile } from "@/data/profile";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-navbar backdrop-blur-md transition-colors duration-200">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10 lg:px-16"
      >
        <Link
          href="/"
          className="group flex flex-col"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="font-serif text-lg md:text-[20px] font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
            {profile.name}
          </span>
          <span className="font-mono text-xs text-muted">
            {profile.tagline.split("|")[0].trim()}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-[15px] font-medium tracking-normal md:tracking-wide transition-colors hover:text-accent",
                    isActive
                      ? "text-accent underline decoration-accent/60 underline-offset-4"
                      : "text-muted"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side: ThemeToggle & Mobile menu trigger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-border/70 text-foreground md:hidden hover:border-accent hover:text-accent transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <ul className="flex flex-col gap-1 border-t border-border/70 bg-navbar px-6 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block rounded px-3.5 py-2.5 text-base font-medium transition-colors hover:bg-accent-soft/40 hover:text-accent",
                    isActive
                      ? "text-accent bg-accent-soft/30 font-semibold"
                      : "text-muted"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}

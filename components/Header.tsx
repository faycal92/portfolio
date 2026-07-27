"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/competences", label: "Compétences" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-lg font-bold text-white transition-transform hover:scale-105"
        >
          FB
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-slate-600"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-slate-800 transition-transform ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-slate-800 transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-slate-800 transition-transform ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-6 py-4">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

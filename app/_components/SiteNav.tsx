"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "../_lib/site";
import { Logo } from "./Logo";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const overHero = onHero && !scrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-rule text-ink"
          : onHero
            ? "bg-gradient-to-b from-ink/60 to-transparent text-paper border-b border-transparent"
            : "bg-paper/95 backdrop-blur-md border-b border-rule text-ink"
      }`}
      data-over-hero={overHero ? "true" : "false"}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo light={overHero} />

          <nav aria-label="Primär" className="hidden lg:flex items-center gap-8">
            {SITE.nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[0.92rem] tracking-tight transition-colors ${
                    overHero
                      ? "text-paper/90 hover:text-paper"
                      : active ? "text-navy" : "text-ink hover:text-navy"
                  }`}
                >
                  {item.label}
                  {active && !overHero && (
                    <span className="absolute -bottom-2 left-0 h-[1px] w-full bg-navy" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${SITE.contact.phoneRaw}`}
              className={`mono-tag transition-colors ${
                overHero ? "text-paper/80 hover:text-paper" : "text-ink hover:text-navy"
              }`}
            >
              {SITE.contact.phone}
            </a>
            <Link
              href="/kontakt"
              className={overHero ? "btn-primary !bg-paper !text-navy hover:!bg-paper-2" : "btn-primary"}
            >
              Projekt besprechen
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
            aria-expanded={open}
            className="lg:hidden flex flex-col gap-[6px] p-2 -mr-2"
          >
            <span className={`block h-[1.5px] w-6 transition-transform origin-center ${open ? "translate-y-[7.5px] rotate-45 bg-ink" : overHero ? "bg-paper" : "bg-ink"}`} />
            <span className={`block h-[1.5px] w-6 transition-opacity ${open ? "opacity-0" : overHero ? "opacity-100 bg-paper" : "opacity-100 bg-ink"}`} />
            <span className={`block h-[1.5px] w-6 transition-transform origin-center ${open ? "-translate-y-[7.5px] -rotate-45 bg-ink" : overHero ? "bg-paper" : "bg-ink"}`} />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden border-t border-rule bg-paper transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-8 flex flex-col gap-1">
          {SITE.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline justify-between py-4 border-b border-rule text-ink hover:text-navy transition-colors"
            >
              <span className="text-lg font-medium tracking-tight">{item.label}</span>
              <span className="mono-tag">0{i + 1}</span>
            </Link>
          ))}
          <div className="pt-8 flex flex-col gap-3">
            <a href={`tel:${SITE.contact.phoneRaw}`} className="btn-ghost justify-center">
              {SITE.contact.phone}
            </a>
            <Link href="/kontakt" className="btn-primary justify-center">
              Projekt besprechen <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { SITE } from "../_lib/site";

const BUILT_YEAR = 2026;

export function SiteFooter() {
  const year = BUILT_YEAR;
  return (
    <footer className="bg-navy text-paper mt-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-20">
        <div className="grid grid-cols-12 gap-10 md:gap-16">
          {/* Mark + statement */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-10">
            <div>
              <div className="mono-tag text-paper/55">Kemastahl Schlosserei GmbH</div>
              <h3 className="display-serif text-[2.6rem] md:text-[3.4rem] mt-4 text-paper">
                Stahl, der steht.<br />Seit 1996.
              </h3>
            </div>
            <div className="flex flex-col gap-2 text-paper/75 text-sm">
              <div>{SITE.address.street}</div>
              <div>{SITE.address.zip} {SITE.address.city}</div>
              <div className="pt-4 flex flex-col gap-1">
                <a className="hover:text-paper transition-colors" href={`tel:${SITE.contact.phoneRaw}`}>{SITE.contact.phone}</a>
                <div className="text-paper/55">Fax {SITE.contact.fax}</div>
                <a className="hover:text-paper transition-colors" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-6 lg:col-span-3">
            <div className="mono-tag text-paper/55 mb-5">Seiten</div>
            <nav className="flex flex-col gap-3">
              {SITE.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-paper/85 hover:text-paper transition-colors text-[0.95rem]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div className="col-span-6 lg:col-span-4">
            <div className="mono-tag text-paper/55 mb-5">Werk & Büro</div>
            <div className="flex flex-col gap-2 text-paper/80 text-[0.95rem]">
              <div>{SITE.hours.weekdays}</div>
              <div>{SITE.hours.saturday}</div>
            </div>
            <div className="mono-tag text-paper/55 mt-10 mb-3">Lage</div>
            <div className="text-paper/80 text-[0.95rem]">
              Industriegebiet Sirzenich<br />
              Region Trier · Westeifel
            </div>
          </div>
        </div>

        <div className="border-t border-paper/15 mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="mono-tag text-paper/50">© {year} Kemastahl Schlosserei GmbH</div>
          <div className="flex gap-8 mono-tag text-paper/50">
            <Link href="/impressum" className="hover:text-paper transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-paper transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

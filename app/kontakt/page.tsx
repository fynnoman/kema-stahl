import type { Metadata } from "next";
import Image from "next/image";
import { SITE, TEAM } from "../_lib/site";
import { SparkMark } from "../_components/Logo";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Werk und Verwaltung in Trierweiler · Bergstraße 5 · 54311 Trierweiler. Telefon, E-Mail und Ansprechpartner von KeMa-Stahl.",
};

export default function KontaktPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden h-[62vh] min-h-[420px] md:min-h-[480px]">
        <Image
          src="/images/handshake.jpg"
          alt="Persönliche Zusammenarbeit"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />
        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 pb-12 md:pb-20 text-paper">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="mono-tag text-paper/75">Kontakt</span>
              <span className="hidden sm:inline-block h-px w-16 bg-paper/40" />
              <span className="mono-tag text-paper/75">Werk & Verwaltung</span>
            </div>
            <h1 className="fluid-hero-serif-sm display-serif mt-6 md:mt-8 text-paper max-w-[14ch]">
              Hier finden<br />
              <span className="italic">Sie uns.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* CONTACT DATA + HOURS */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-5">
              <div className="mono-tag text-navy">Adresse</div>
              <div className="display-sans text-3xl md:text-4xl leading-tight text-ink">
                {SITE.address.street}<br />
                {SITE.address.zip} {SITE.address.city}
              </div>
              <div className="text-mute">{SITE.address.district}</div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-5 md:border-l md:border-rule md:pl-10">
              <div className="mono-tag text-navy">Erreichbarkeit</div>
              <div className="flex flex-col gap-3">
                <a href={`tel:${SITE.contact.phoneRaw}`} className="display-sans text-2xl md:text-3xl text-ink hover:text-navy transition-colors">
                  {SITE.contact.phone}
                </a>
                <div className="text-mute text-sm">Fax {SITE.contact.fax}</div>
                <a href={`mailto:${SITE.contact.email}`} className="display-sans text-xl md:text-2xl text-ink hover:text-navy transition-colors mt-3 break-all">
                  {SITE.contact.email}
                </a>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:border-l lg:border-rule lg:pl-10">
              <div className="mono-tag text-navy">Öffnungszeiten</div>
              <div className="flex flex-col gap-3 text-ink text-base md:text-lg">
                <div className="flex items-start gap-3">
                  <SparkMark className="h-3 w-3 text-navy mt-2 shrink-0" />
                  <div>
                    <div className="display-sans text-lg">Mo – Fr</div>
                    <div className="text-mute text-sm">07:00 – 12:00 · 13:00 – 17:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <SparkMark className="h-3 w-3 text-navy mt-2 shrink-0" />
                  <div>
                    <div className="display-sans text-lg">Samstag</div>
                    <div className="text-mute text-sm">nach Vereinbarung</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANSPRECHPARTNER */}
      <section className="bg-paper-2/60 border-y border-rule py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex items-end justify-between mb-12 md:mb-16 gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-4">
                <span className="mono-tag text-navy">02 · Ansprechpartner</span>
                <span className="h-px w-16 bg-rule-2" />
              </div>
              <h2 className="display-serif text-[2.4rem] md:text-[3.6rem] lg:text-[4.2rem] mt-6 text-ink leading-[1]">
                Direkte Zuständigkeiten.
              </h2>
            </div>
            <div className="mono-tag">{TEAM.length} Personen</div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
            {TEAM.map((p, i) => (
              <li key={p.email} className="bg-paper p-8 md:p-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="mono-tag text-navy">{(i + 1).toString().padStart(2, "0")}</span>
                  <span className="mono-tag">{p.role}</span>
                </div>
                <div>
                  <div className="display-serif text-3xl md:text-4xl text-ink leading-[1]">{p.name}</div>
                  <div className="mt-3 text-mute text-sm md:text-base">{p.duties}</div>
                </div>
                <div className="mt-4 pt-4 border-t border-rule flex flex-col gap-1 text-sm">
                  <a className="text-ink hover:text-navy transition-colors" href={`tel:${p.phone.replace(/\s/g, "")}`}>
                    {p.phone}
                  </a>
                  <a className="text-navy rule-link break-all" href={`mailto:${p.email}`}>
                    {p.email}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MAP + Image side by side */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="col-span-12 lg:col-span-5">
              <div className="mono-tag text-navy">Anfahrt</div>
              <h2 className="display-serif text-3xl md:text-5xl mt-4 text-ink leading-[1]">
                Industriegebiet<br />
                <span className="italic text-navy">Sirzenich.</span>
              </h2>
              <p className="text-mute text-base md:text-lg leading-relaxed max-w-[42ch] mt-6">
                Direkt an der B 51, zwischen Trier und Bitburg. Lkw-tauglich erreichbar, Kundenparkplätze vor dem Büro.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  SITE.address.street + ", " + SITE.address.zip + " " + SITE.address.city
                )}`}
                target="_blank"
                rel="noopener"
                className="btn-primary mt-8 w-full sm:w-auto justify-center sm:justify-start"
              >
                In Google Maps öffnen <span>→</span>
              </a>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden border border-rule">
                <Image
                  src="/images/warehouse-aisle.jpg"
                  alt="Werkhalle Sirzenich"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 image-gradient-bottom" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-paper">
                  <div>
                    <div className="mono-tag text-paper/70">Werk & Verwaltung</div>
                    <div className="display-serif text-2xl md:text-3xl mt-1">1.700 m² in Sirzenich</div>
                  </div>
                  <div className="mono-tag text-paper/70 hidden sm:block">54311 Trierweiler</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

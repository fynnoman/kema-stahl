import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CAPABILITIES } from "../_lib/site";
import { SparkMark } from "../_components/Logo";

export const metadata: Metadata = {
  title: "Service",
  description:
    "Beratung, Konstruktion, Maschinenreparatur, Wartung, Lohnarbeiten in Blechfertigung, Wasserstrahl- und Laserschneiden, Rohrbearbeitung sowie WIG- und MAG-Schweißen.",
};

const BUCKETS = [
  {
    index: "A",
    title: "Planung & Beratung",
    img: "/images/planning-table.jpg",
    items: [
      { k: "Beratung", d: "Fachberatung vor Ort oder im Werk. Wir bringen unsere Erfahrung in Ihre Aufgabe ein." },
      { k: "Konstruktionsabteilung", d: "Eigenes Technisches Büro mit AutoCAD und HICAD für prüffähige Werkplanung." },
    ],
  },
  {
    index: "B",
    title: "Instandhaltung",
    img: "/images/industry-pipes.jpg",
    items: [
      { k: "Maschinenreparaturen", d: "Reparatur mechanischer Anlagen, Komponenten und Vorrichtungen." },
      { k: "Wartung", d: "Planmäßige Wartung für Standzeit und Betriebssicherheit." },
    ],
  },
  {
    index: "C",
    title: "Lohnarbeiten",
    img: "/images/warehouse-aisle.jpg",
    items: [
      { k: "Blechfertigung", d: "Zuschnitt, Kanten, Umformen, Fügen von Blech." },
      { k: "Wasserstrahlschneiden", d: "Hochpräzise Konturen auf der Bystronic ByJet ProL 6030 Expert." },
      { k: "Laserschneiden", d: "Saubere Schnittkanten an Blech und Profilen." },
      { k: "Rohrbearbeitung", d: "Trennen, Formen und Fügen von Rohrkonstruktionen." },
    ],
  },
  {
    index: "D",
    title: "Füge- und Schweißtechnik",
    img: "/images/welder-mask.jpg",
    items: [
      { k: "WIG-Schweißen", d: "Für saubere Nähte in Edelstahl und Dünnblech." },
      { k: "MAG-Schweißen", d: "Für tragende Konstruktionen in Baustahl." },
    ],
  },
];

export default function ServicePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden h-[70vh] min-h-[480px]">
        <Image
          src="/images/industry-pipes.jpg"
          alt="Sondermaschinenbau und Lohnarbeiten"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />
        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 pb-16 md:pb-20 text-paper">
            <div className="flex items-center gap-4">
              <span className="mono-tag text-paper/75">Service</span>
              <span className="h-px w-16 bg-paper/40" />
              <span className="mono-tag text-paper/75">Rund ums Bauteil</span>
            </div>
            <h1 className="display-serif mt-8 text-paper text-[3rem] sm:text-[4.6rem] md:text-[7rem] lg:text-[8.6rem] leading-[0.95] max-w-[14ch]">
              Mehr als<br />
              <span className="italic">Fertigung.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-5">
              <div className="mono-tag text-navy">Vier Service-Kapitel</div>
            </div>
            <p className="col-span-12 lg:col-span-7 text-ink text-lg md:text-xl leading-relaxed">
              Beratung, Konstruktion, Reparatur, Wartung, Lohnarbeiten und Schweißarbeiten gehören bei uns dazu. Nicht als Zusatz, sondern als Teil des Werks.
            </p>
          </div>
        </div>
      </section>

      {/* BUCKETS with images */}
      <section className="bg-paper-2/60 border-y border-rule py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {BUCKETS.map((b) => (
              <div key={b.index} className="bg-paper border border-rule overflow-hidden flex flex-col">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={b.img}
                    alt={b.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-navy text-paper px-3 py-1 mono-tag">Kapitel {b.index}</div>
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h2 className="display-sans text-2xl md:text-3xl text-ink">{b.title}</h2>
                  <ul className="mt-6 divide-y divide-rule border-t border-rule flex-1">
                    {b.items.map((it) => (
                      <li key={it.k} className="py-4 flex gap-4">
                        <SparkMark className="h-3 w-3 text-navy mt-1.5 shrink-0" />
                        <div>
                          <div className="display-sans text-base md:text-lg text-ink">{it.k}</div>
                          <div className="text-mute text-sm mt-1 leading-relaxed">{it.d}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maschinenpark on dark */}
      <section className="bg-ink text-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="mono-tag text-paper/55">Maschinenpark</span>
                <span className="h-px w-16 bg-paper/25" />
              </div>
              <h2 className="display-serif text-[2.6rem] md:text-[4rem] lg:text-[4.6rem] mt-6 text-paper leading-[1]">
                Unser Werkzeug.<br />
                <span className="italic">In Übersicht.</span>
              </h2>
              <p className="mt-6 text-paper/70 text-base md:text-lg max-w-[42ch] leading-relaxed">
                Was in der Werkhalle in Sirzenich steht und was damit möglich ist. Für Ihre Lohnaufträge und Ihre Projekte.
              </p>

              <div className="mt-10 relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/welder-mask.jpg"
                  alt="WIG- und MAG-Schweißen"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-paper/10">
                {CAPABILITIES.map((c, i) => (
                  <li key={c.k} className="bg-ink p-6 md:p-7 flex flex-col gap-2 hover:bg-navy-deep transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="mono-tag text-paper/50">{(i + 1).toString().padStart(2, "0")}</span>
                      <SparkMark className="h-3 w-3 text-paper/40" />
                    </div>
                    <div className="display-sans text-lg md:text-xl text-paper">{c.k}</div>
                    <div className="text-paper/60 text-sm leading-relaxed">{c.d}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden text-paper">
        <Image
          src="/images/grinder-sparks.jpg"
          alt="Fertigung"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="mono-tag text-paper/55">Lohnauftrag anfragen</div>
              <h2 className="display-serif text-[2.6rem] md:text-[4.4rem] lg:text-[5.2rem] mt-4 text-paper leading-[0.98]">
                Zeichnung schicken.<br />
                <span className="italic">Angebot bekommen.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <Link href="/kontakt" className="btn-primary !bg-paper !text-navy hover:!bg-paper-2 w-full justify-between">
                <span>Anfrage starten</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SparkMark } from "../_components/Logo";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Werk, Fertigung und ausgewählte Arbeiten aus Trierweiler. Die Galerie wird laufend ergänzt.",
};

const GALLERY = [
  { k: "WRK", title: "Werkhalle", desc: "Einblicke in die Produktionshalle in Sirzenich.", img: "/images/warehouse-aisle.jpg", span: "col-span-12 lg:col-span-8 aspect-[16/9]" },
  { k: "SCHW", title: "Schweißtechnik", desc: "WIG- und MAG-Schweißen, Stahl und Edelstahl.", img: "/images/welder-mask.jpg", span: "col-span-12 md:col-span-6 lg:col-span-4 aspect-[4/5]" },
  { k: "FKN", title: "Trennschneiden", desc: "Funkenflug beim Zuschnitt in der Werkhalle.", img: "/images/grinder-sparks.jpg", span: "col-span-12 md:col-span-6 lg:col-span-4 aspect-[4/5]" },
  { k: "KON", title: "Konstruktion", desc: "Planung in AutoCAD und HICAD.", img: "/images/planning-table.jpg", span: "col-span-12 lg:col-span-8 aspect-[16/9]" },
  { k: "MSC", title: "Sondermaschinenbau", desc: "Anlagen für Lebensmittel, Recycling, Beflockung.", img: "/images/industry-pipes.jpg", span: "col-span-12 md:col-span-6 lg:col-span-6 aspect-[16/10]" },
  { k: "QA", title: "Qualität & Präzision", desc: "Prüfung und Werkplanung.", img: "/images/quality-eye.jpg", span: "col-span-12 md:col-span-6 lg:col-span-6 aspect-[16/10]" },
  { k: "MNT", title: "Montage", desc: "Eigene Monteure vor Ort beim Kunden.", img: "/images/site-rooftop.jpg", span: "col-span-12 md:col-span-6 lg:col-span-4 aspect-[4/5]" },
  { k: "TEM", title: "Team", desc: "Erfahrene Monteure und Konstrukteure.", img: "/images/construction-team.jpg", span: "col-span-12 md:col-span-6 lg:col-span-4 aspect-[4/5]" },
  { k: "DET", title: "Handwerkliche Details", desc: "Präzision bei jedem Bauteil.", img: "/images/montage-closeup.jpg", span: "col-span-12 lg:col-span-4 aspect-[4/5]" },
];

export default function GaleriePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden h-[62vh] min-h-[420px] md:min-h-[480px]">
        <Image
          src="/images/construction-team.jpg"
          alt="Team im Werk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />
        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 pb-12 md:pb-20 text-paper">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="mono-tag text-paper/75">Galerie</span>
              <span className="hidden sm:inline-block h-px w-16 bg-paper/40" />
              <span className="mono-tag text-paper/75">Werk · Projekte · Details</span>
            </div>
            <h1 className="fluid-hero-serif-sm display-serif mt-6 md:mt-8 text-paper max-w-[14ch]">
              Was wir<br />
              <span className="italic">bauen.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-5">
              <div className="mono-tag text-navy">Werk · Fertigung · Montage</div>
            </div>
            <p className="col-span-12 lg:col-span-7 text-ink text-lg md:text-xl leading-relaxed">
              Eine Auswahl aus Werk- und Projektfotografien. Die Galerie wird laufend um reale Projektarbeiten ergänzt. Bis dahin zeigen diese Ansichten den Charakter unseres Werks und unserer Arbeit.
            </p>
          </div>
        </div>
      </section>

      {/* Mosaic gallery */}
      <section className="bg-paper-2/60 border-y border-rule py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {GALLERY.map((g) => (
              <figure key={g.k} className={`${g.span} group relative overflow-hidden`}>
                <Image
                  src={g.img}
                  alt={g.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 image-gradient-bottom transition-opacity group-hover:opacity-80" />
                <div className="absolute top-4 left-4 bg-navy text-paper px-3 py-1 mono-tag">{g.k}</div>
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-paper">
                  <div className="display-serif text-2xl md:text-3xl">{g.title}</div>
                  <div className="text-paper/70 text-sm mt-2">{g.desc}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="mono-tag text-navy">Druck</span>
                <span className="h-px w-16 bg-rule-2" />
              </div>
              <h2 className="display-serif text-3xl md:text-5xl mt-6 text-ink leading-[1]">
                Unsere Prospekte<br />
                <span className="italic text-navy">& Flyer.</span>
              </h2>
              <p className="text-mute text-base md:text-lg leading-relaxed max-w-[48ch] mt-6">
                Druckstücke zu Wasserstrahl, Laser, Prospekt KeMa deutsch und englisch sowie ein Privatkundenflyer. Auf Anfrage als PDF oder Druckexemplar.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ul className="border border-rule-2 divide-y divide-rule">
                {[
                  "Flyer Laserschneidanlage",
                  "Flyer Wasserstrahlschneiden",
                  "Prospekt KEMA deutsch",
                  "Prospekt KEMA englisch",
                  "Privatkundenflyer",
                ].map((f, i) => (
                  <li key={f} className="flex items-center justify-between px-5 md:px-6 py-5">
                    <div className="flex items-center gap-4">
                      <span className="mono-tag text-mute">D-{(i + 1).toString().padStart(2, "0")}</span>
                      <SparkMark className="h-3 w-3 text-navy" />
                      <span className="text-ink text-base md:text-lg">{f}</span>
                    </div>
                    <Link href="/kontakt" className="mono-tag text-navy rule-link">Anfragen →</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

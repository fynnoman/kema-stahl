import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HISTORY, SITE } from "../_lib/site";
import { SparkMark } from "../_components/Logo";

export const metadata: Metadata = {
  title: "Unternehmen",
  description:
    "Von einer 40 m² Doppelgarage 1996 zur 1.700 m² Produktionshalle heute. Die Geschichte von KeMa-Stahl in Trierweiler.",
};

export default function UnternehmenPage() {
  return (
    <>
      {/* HERO with image */}
      <section className="relative overflow-hidden h-[70vh] min-h-[480px]">
        <Image
          src="/images/construction-team.jpg"
          alt="Das Team von KeMa-Stahl"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />

        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 pb-16 md:pb-20 text-paper">
            <div className="flex items-center gap-4">
              <span className="mono-tag text-paper/75">Unternehmen</span>
              <span className="h-px w-16 bg-paper/40" />
              <span className="mono-tag text-paper/75">Gegründet 1996</span>
            </div>
            <h1 className="display-serif mt-8 text-paper text-[3rem] sm:text-[4.6rem] md:text-[7rem] lg:text-[8.6rem] leading-[0.95] max-w-[16ch]">
              Aus 40 m² Garage<br />
              <span className="italic">wurde ein Werk.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-5">
              <div className="mono-tag text-navy">Geschichte · Werte · Technik</div>
            </div>
            <p className="col-span-12 lg:col-span-7 text-ink text-lg md:text-xl leading-relaxed">
              Die Firma KeMa wurde 1996 von Schlossermeister Klaus-Peter Kersch und Dieter May in einer Doppelgarage in Trierweiler gegründet. Heute arbeiten 35 Menschen in einer eigenen 1.700 m² Produktionshalle im Industriegebiet Sirzenich. Dazwischen liegen Umzüge, Investitionen in Maschinen wie die Bystronic ByJet ProL und die Überzeugung, Beratung, Fertigung und Montage aus einer Hand zu halten.
            </p>
          </div>
        </div>
      </section>

      {/* KENNZAHLEN */}
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-paper/15">
            {[
              ["1996", "Gründung in Trierweiler"],
              ["1.700 m²", "Hallen- und Bürofläche"],
              ["35", "Mitarbeitende"],
              ["Seit 2003", "Eigene Produktionshalle"],
            ].map(([k, v]) => (
              <li key={k} className="p-8 md:p-10 flex flex-col gap-3">
                <div className="mono-tag text-paper/50">Fakt</div>
                <div className="display-sans text-3xl md:text-5xl text-paper leading-none">{k}</div>
                <div className="text-paper/70 text-sm md:text-base">{v}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ZEITSTRAHL */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-[42ch]">
              <div className="flex items-center gap-4">
                <span className="mono-tag text-navy">02 · Historie</span>
                <span className="h-px w-16 bg-rule-2" />
              </div>
              <h2 className="display-serif text-[2.6rem] md:text-[4rem] lg:text-[4.8rem] mt-6 text-ink leading-[1]">
                Dreißig Jahre,<br />
                <span className="italic text-navy">in sieben Kapiteln.</span>
              </h2>
            </div>
            <p className="text-mute text-lg leading-relaxed max-w-[48ch]">
              Was in Trierweiler als zwei Schlosser mit einer Idee begann, ist heute ein mittelständischer Betrieb mit eigener Konstruktion, moderner Fertigung und termintreuer Montage.
            </p>
          </div>

          <ol className="border-t border-rule">
            {HISTORY.map((h, i) => (
              <li key={h.year} className="grid grid-cols-12 gap-4 md:gap-10 py-10 md:py-12 border-b border-rule items-start">
                <div className="col-span-3 md:col-span-2">
                  <div className="mono-tag text-mute">Nr. 0{i + 1}</div>
                  <div className="display-serif text-4xl md:text-6xl text-navy mt-2">{h.year}</div>
                </div>
                <div className="col-span-9 md:col-span-4">
                  <h3 className="display-sans text-2xl md:text-3xl text-ink">{h.title}</h3>
                </div>
                <p className="col-span-12 md:col-span-6 text-mute text-base md:text-lg leading-relaxed">
                  {h.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* KONSTRUKTIONSABTEILUNG — image + text */}
      <section className="bg-paper-2/60 border-y border-rule">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[380px] md:min-h-[640px]">
            <Image
              src="/images/planning-table.jpg"
              alt="Konstruktion im Technischen Büro"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <span className="mono-tag text-navy">03 · Technisches Büro</span>
              <span className="h-px w-16 bg-rule-2" />
            </div>
            <h2 className="display-serif text-[2.4rem] md:text-[3.6rem] mt-6 text-ink leading-[1]">
              Jede Konstruktion<br />
              <span className="italic text-navy">beginnt am Bildschirm.</span>
            </h2>
            <p className="mt-8 text-ink text-lg leading-relaxed">
              Da wir eine eigene Konstruktionsabteilung besitzen, sind wir in der Lage, durch modernste Technologie auch komplexe Zeichnungen in AutoCAD sowie HICAD zu erstellen. So kommen Beratung, Planung und Ausführung aus einer Hand.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px bg-rule border border-rule">
              {[
                ["AutoCAD", "2D & 3D-Konstruktion"],
                ["HICAD", "Stahlbau-spezifisch"],
                ["Statik", "Prüffähige Nachweise"],
                ["Werkplanung", "Bis zur Fertigungszeichnung"],
              ].map(([k, v]) => (
                <div key={k} className="bg-paper p-5 md:p-6">
                  <div className="flex items-center gap-2">
                    <SparkMark className="h-3 w-3 text-navy" />
                    <span className="mono-tag">Werkzeug</span>
                  </div>
                  <div className="display-sans text-lg mt-3 text-ink">{k}</div>
                  <div className="text-mute text-sm mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUALITÄT + WERKHALLE */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/warehouse-aisle.jpg"
                  alt="Werkhalle und Lager"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-5">
                {[
                  ["1.700 m²", "Hallenfläche"],
                  ["35", "Team"],
                  ["Seit 2003", "Eigene Halle"],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-rule pt-4">
                    <div className="display-sans text-2xl md:text-3xl text-ink">{k}</div>
                    <div className="mono-tag text-mute mt-2">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <span className="mono-tag text-navy">04 · Werk</span>
                <span className="h-px w-16 bg-rule-2" />
              </div>
              <h2 className="display-serif text-[2.4rem] md:text-[3.6rem] mt-6 text-ink leading-[1]">
                Alles in eigener Halle.<br />
                <span className="italic text-navy">Alles aus einer Hand.</span>
              </h2>
              <p className="mt-8 text-ink text-lg leading-relaxed">
                Blechfertigung, Wasserstrahlschneiden auf einer Bystronic ByJet ProL 6030 Expert, Laserschneiden, Rohrbearbeitung sowie WIG- und MAG-Schweißen. Alles in Sirzenich, bevor unsere eigenen Monteure die Konstruktion beim Kunden einbauen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden text-paper">
        <Image
          src="/images/handshake.jpg"
          alt="Zusammenarbeit"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <div className="mono-tag text-paper/55">Nächster Schritt</div>
              <h2 className="display-serif text-[2.4rem] md:text-[4.2rem] mt-4 text-paper leading-[1]">
                Lernen Sie unser<br />
                <span className="italic">Team kennen.</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary !bg-paper !text-navy hover:!bg-paper-2">
                Ansprechpartner <span>→</span>
              </Link>
              <Link href="/leistungen" className="btn-ghost border-paper/40 !text-paper hover:border-paper hover:bg-paper/10">
                Leistungen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

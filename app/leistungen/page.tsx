import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "../_lib/site";
import { SparkMark } from "../_components/Logo";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Vordächer, Geländer, Treppen, Sonderanfertigungen und Sondermaschinenbau. Individuelle Fertigung für Privat, Gewerbe und Industrie.",
};

const DETAIL: Record<string, { bullets: string[]; note?: string; img: string }> = {
  vordaecher: {
    img: "/images/architecture-modern.jpg",
    bullets: [
      "Beratung vor Ort und Aufmaß",
      "Konstruktionsvorschläge nach Architektur",
      "Statische Nachweise aus eigener Hand",
      "Oberflächen in Stahl, verzinkt oder lackiert",
    ],
    note: "Lassen Sie sich von einem KeMa-Fachberater die Möglichkeiten zeigen, Ihre Wünsche und Entwürfe zu verwirklichen.",
  },
  gelaender: {
    img: "/images/interior-modern.jpg",
    bullets: [
      "Edelstahl, Stahl verzinkt, Stahl lackiert",
      "Innen- und Außenbereich",
      "Füllungen in Stab, Glas oder Lochblech",
      "Serienfertigung und Einzelstücke",
    ],
  },
  treppen: {
    img: "/images/office-glass.jpg",
    bullets: [
      "Außen- und Innentreppen in allen Oberflächen",
      "Edelstahl · Stahl · verzinkt · lackiert · mit Holzdetail",
      "Geradläufig, Einholm, Spindel, Wendel",
      "Wangen z. B. in Flachstahl",
      "Stufenbeläge: Gitterrost, Holz, Alu-Riffel, Granit",
    ],
  },
  sonderanfertigungen: {
    img: "/images/site-rooftop.jpg",
    bullets: [
      "Container und Sonderbehälter",
      "Abgasleitbleche",
      "Konstruktionen nach Vorgabe oder Entwurf",
      "Einzelstücke und Kleinserien",
    ],
  },
  maschinenbau: {
    img: "/images/industry-pipes.jpg",
    bullets: [
      "Lebensmittel: Dosieranlagen und Förderbänder",
      "Recycling: Waschanlagen, Trockenanlagen, Wasseraufbereitung",
      "Bogen- und Siebanlagen",
      "Beflockung",
    ],
  },
};

export default function LeistungenPage() {
  return (
    <>
      {/* ============ HERO with image ============ */}
      <section className="relative overflow-hidden h-[70vh] min-h-[440px] md:min-h-[520px]">
        <Image
          src="/images/grinder-sparks.jpg"
          alt="Fertigung bei KeMa-Stahl"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />

        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 pb-12 md:pb-20 text-paper">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 fade-up">
              <span className="mono-tag text-paper/75">Leistungen</span>
              <span className="hidden sm:inline-block h-px w-16 bg-paper/40" />
              <span className="mono-tag text-paper/75">Fünf Disziplinen · Ein Werk</span>
            </div>
            <h1 className="fluid-hero-serif-sm display-serif mt-6 md:mt-8 text-paper max-w-[18ch]">
              Was aus unserem<br />
              <span className="italic">Werk kommt.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ============ Intro ============ */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 lg:col-span-5">
              <div className="mono-tag text-navy break-safe">
                Beratung · Planung<br className="sm:hidden" /> · Fertigung · Montage
              </div>
            </div>
            <p className="col-span-12 lg:col-span-7 text-ink text-lg md:text-xl leading-relaxed">
              Geländer, Treppen und Balkonanlagen gehören zum täglichen Geschäft. Komplette Hallen- und Dachkonstruktionen ebenso. Jedes Bauteil wird bei uns konstruiert, gefertigt und montiert.
            </p>
          </div>
        </div>
      </section>

      {/* ============ Services ============ */}
      <div>
        {SERVICES.map((s, idx) => {
          const info = DETAIL[s.key];
          const flipped = idx % 2 === 1;
          return (
            <section
              key={s.key}
              className={`${idx % 2 === 0 ? "bg-paper-2/60" : "bg-paper"} border-y border-rule`}
            >
              <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-28">
                <div className={`grid grid-cols-12 gap-10 md:gap-16 items-center ${flipped ? "lg:[direction:rtl]" : ""}`}>
                  {/* Image side */}
                  <div className="col-span-12 lg:col-span-6 [direction:ltr]">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={info.img}
                        alt={s.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute top-5 left-5 bg-navy text-paper px-3 py-1 mono-tag">
                        NR. {s.index}
                      </div>
                    </div>
                  </div>

                  {/* Text side */}
                  <div className="col-span-12 lg:col-span-6 [direction:ltr]">
                    <div className="flex items-center gap-4">
                      <span className="mono-tag text-navy">Nr. {s.index}</span>
                      <span className="h-px w-16 bg-rule-2" />
                      <span className="mono-tag">{s.tag}</span>
                    </div>
                    <h2 className="display-serif text-[2.6rem] md:text-[4rem] lg:text-[5.4rem] mt-6 text-ink leading-[0.95]">
                      {s.title}
                    </h2>
                    <p className="mt-6 text-ink text-lg md:text-xl leading-relaxed">
                      {s.desc}
                    </p>
                    {info.note && (
                      <p className="mt-5 text-mute italic text-base">{info.note}</p>
                    )}

                    <div className="mt-10 border border-rule-2 bg-paper">
                      <div className="flex items-center justify-between px-5 py-3 border-b border-rule-2">
                        <span className="mono-tag text-navy">Umfang</span>
                        <span className="mono-tag">{info.bullets.length} Punkte</span>
                      </div>
                      <ul className="divide-y divide-rule">
                        {info.bullets.map((b, i) => (
                          <li key={b} className="px-5 py-4 flex items-start gap-4">
                            <span className="mono-tag text-mute pt-1 shrink-0">{(i + 1).toString().padStart(2, "0")}</span>
                            <SparkMark className="h-3 w-3 text-navy mt-2 shrink-0" />
                            <span className="text-ink">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/kontakt"
                      className="mt-8 inline-flex items-center gap-3 text-navy"
                    >
                      <span className="rule-link font-medium">Anfrage für {s.title.toLowerCase()}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden text-paper">
        <Image
          src="/images/welder-mask.jpg"
          alt="Schweißer in der Werkhalle"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="mono-tag text-paper/55">Keine Standardlösung?</div>
              <h2 className="display-serif text-[2.6rem] md:text-[4.4rem] lg:text-[5.2rem] mt-4 text-paper leading-[0.98]">
                Sprechen wir<br />über Ihr <span className="italic">Projekt.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <Link href="/kontakt" className="btn-primary !bg-paper !text-navy hover:!bg-paper-2 w-full justify-between">
                <span>Projekt anfragen</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

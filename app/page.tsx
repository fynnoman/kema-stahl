import Image from "next/image";
import Link from "next/link";
import { SITE, SERVICES, CAPABILITIES, PROCESS } from "./_lib/site";
import { SparkMark } from "./_components/Logo";

const HERO_IMG = "/images/welder-mask.jpg";

export default function HomePage() {
  return (
    <>
      {/* ====================== HERO — full-bleed image ====================== */}
      <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
        <Image
          src={HERO_IMG}
          alt="Schweißer in der KeMa-Werkhalle"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" aria-hidden="true" />
        <div className="absolute inset-0 blueprint-grid opacity-[0.07]" aria-hidden="true" />

        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 pb-12 md:pb-24">
            <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
              <div className="col-span-12 lg:col-span-9 text-paper">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 fade-up">
                  <span className="mono-tag text-paper/75">Metall- & Stahlbau</span>
                  <span className="hidden sm:inline-block h-px w-16 bg-paper/40" />
                  <span className="mono-tag text-paper/75">Seit 1996</span>
                </div>
                <h1 className="fluid-hero-serif display-serif mt-6 md:mt-8 text-paper">
                  Wir fertigen<br />
                  Stahl, der <span className="italic">bleibt.</span>
                </h1>
                <p className="mt-6 md:mt-10 text-paper/85 text-base md:text-xl leading-relaxed max-w-full md:max-w-[62ch]">
                  Planung, Konstruktion und Montage für Geländer, Treppen, Balkonanlagen, Vordächer, Hallen- und Dachkonstruktionen. Aus einer Hand. Aus Trierweiler.
                </p>
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap sm:items-center gap-3 md:gap-4">
                  <Link href="/kontakt" className="btn-primary !bg-paper !text-navy hover:!bg-paper-2 w-full sm:w-auto justify-center sm:justify-start">
                    Projekt besprechen <span>→</span>
                  </Link>
                  <Link href="/leistungen" className="btn-ghost border-paper/40 !text-paper hover:border-paper hover:bg-paper/10 w-full sm:w-auto justify-center sm:justify-start">
                    Leistungen ansehen
                  </Link>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-3 hidden lg:flex flex-col gap-4 text-paper/80">
                <div className="h-px w-full bg-paper/25" />
                <div className="mono-tag text-paper/55">Direkt erreichbar</div>
                <a href={`tel:${SITE.contact.phoneRaw}`} className="display-sans text-xl text-paper hover:text-paper/80 transition-colors">
                  {SITE.contact.phone}
                </a>
                <a href={`mailto:${SITE.contact.email}`} className="text-paper/70 text-sm hover:text-paper transition-colors break-all">
                  {SITE.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* bottom marker */}
          <div className="relative border-t border-paper/15">
            <div className="mx-auto max-w-[1440px] px-4 md:px-10 py-3 md:py-4 flex items-center justify-between gap-3 text-paper/60 text-[0.6rem] md:text-xs tracking-wider font-mono">
              <span className="truncate">01 / HERO</span>
              <span className="hidden sm:inline truncate">Werk Sirzenich · 54311 Trierweiler</span>
              <span className="shrink-0">▾ Scroll</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== STAT STRIP ====================== */}
      <section className="stat-strip text-paper">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-paper/15">
            {[
              { k: "1996", v: "Gegründet in Trierweiler" },
              { k: "1.700 m²", v: "Werks- & Bürofläche" },
              { k: "35", v: "Mitarbeitende" },
              { k: "Bystronic", v: "ByJet ProL 6030 Expert" },
            ].map((s) => (
              <li key={s.k} className="p-8 md:p-10 flex flex-col gap-3">
                <span className="mono-tag text-paper/50">Fakt</span>
                <span className="display-sans text-3xl md:text-5xl text-paper leading-none">{s.k}</span>
                <span className="text-paper/70 text-sm md:text-base">{s.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ====================== WILLKOMMEN / INTRO ====================== */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-16 items-center">
            <div className="col-span-12 lg:col-span-6 relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/construction-team.jpg"
                  alt="Team auf der Baustelle"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-navy text-paper p-6 md:p-8 shadow-xl hidden sm:block">
                <div className="mono-tag text-paper/55">Geschäftsführung</div>
                <div className="display-serif text-2xl md:text-3xl mt-2">
                  Kersch & May
                </div>
                <div className="mono-tag text-paper/55 mt-3">Seit 1996</div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="flex items-center gap-4">
                <span className="mono-tag text-navy">02 · Willkommen</span>
                <span className="h-px w-16 bg-rule-2" />
              </div>
              <h2 className="display-serif text-[2.6rem] md:text-[4rem] lg:text-[4.6rem] mt-6 text-ink leading-[1]">
                Ein mittelständischer<br />Metall- und Stahlbau<br />
                <span className="italic text-navy">mit Haltung.</span>
              </h2>
              <p className="mt-8 text-ink text-lg leading-relaxed">
                Seit über zwanzig Jahren stehen wir Bauherren, Architekten, Handwerk und Industrie zur Seite. Vom individuellen Geländer bis zur kompletten Hallenkonstruktion. Beratung, Planung und Ausführung kommen bei uns aus einer Hand. Termintreue Lieferung und fachgerechte Montage vor Ort sind für uns eine Selbstverständlichkeit.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6">
                {[
                  { k: "Eigene Konstruktionsabteilung", v: "AutoCAD · HICAD" },
                  { k: "Moderner Maschinenpark", v: "Wasserstrahl · Laser · Blech" },
                  { k: "WIG- und MAG-Schweißen", v: "Stahl & Edelstahl" },
                  { k: "Fachgerechte Montage", v: "Eigene Monteure" },
                ].map((f) => (
                  <div key={f.k} className="border-t border-rule pt-4">
                    <div className="display-sans text-base md:text-lg text-ink leading-tight">{f.k}</div>
                    <div className="text-mute text-sm mt-1">{f.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/unternehmen" className="rule-link text-navy font-medium">
                  Über das Unternehmen <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== LEISTUNGEN — big image cards ====================== */}
      <section className="py-24 md:py-32 bg-paper-2/60 border-y border-rule">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-[46ch]">
              <div className="flex items-center gap-4">
                <span className="mono-tag text-navy">03 · Leistungen</span>
                <span className="h-px w-16 bg-rule-2" />
              </div>
              <h2 className="display-serif text-[2.6rem] md:text-[4rem] lg:text-[4.8rem] mt-6 text-ink leading-[1]">
                Fünf Disziplinen.<br />
                <span className="italic text-navy">Ein Werk.</span>
              </h2>
            </div>
            <p className="text-mute text-lg leading-relaxed max-w-[52ch]">
              Vom einzelnen Geländer bis zur kompletten Hallenkonstruktion. Beratung, Planung und Fertigung bilden die Basis für Projekte, die wir in höchster Qualität und exzellenter Verarbeitung ausführen.
            </p>
          </div>

          {/* Services — mosaic layout */}
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {/* Vordächer — tall left */}
            <ServiceCard
              className="col-span-12 md:col-span-6 lg:col-span-5 aspect-[4/5]"
              index="01"
              title="Vordächer"
              tag="Individualbau · Beratung vor Ort"
              img="/images/architecture-modern.jpg"
            />
            {/* Geländer — tall right */}
            <ServiceCard
              className="col-span-12 md:col-span-6 lg:col-span-4 aspect-[4/5]"
              index="02"
              title="Geländer"
              tag="Innen & außen · Einzelstück & Serie"
              img="/images/interior-modern.jpg"
            />
            {/* Treppen — short right */}
            <ServiceCard
              className="col-span-12 md:col-span-6 lg:col-span-3 aspect-[4/5]"
              index="03"
              title="Treppen"
              tag="Edelstahl · Stahl · mit Holzdetail"
              img="/images/office-glass.jpg"
            />
            {/* Sonderanfertigungen — wide */}
            <ServiceCard
              className="col-span-12 md:col-span-6 lg:col-span-7 aspect-[16/9]"
              index="04"
              title="Sonderanfertigungen"
              tag="Container · Abgasleitbleche · Einzellösungen"
              img="/images/site-rooftop.jpg"
            />
            {/* Sondermaschinenbau — wide */}
            <ServiceCard
              className="col-span-12 md:col-span-6 lg:col-span-5 aspect-[16/9]"
              index="05"
              title="Sondermaschinenbau"
              tag="Lebensmittel · Recycling · Beflockung"
              img="/images/industry-pipes.jpg"
            />
          </div>

          <div className="mt-14 flex justify-center">
            <Link href="/leistungen" className="btn-primary w-full sm:w-auto justify-center sm:justify-start">
              Alle Leistungen im Detail <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== STATEMENT with sparks background ====================== */}
      <section className="relative overflow-hidden text-paper">
        <Image
          src="/images/grinder-sparks.jpg"
          alt="Trennschneiden mit Funkenflug"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 py-28 md:py-40">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 lg:col-span-10">
              <div className="flex items-center gap-4">
                <span className="mono-tag text-paper/55">04 · Haltung</span>
                <span className="h-px w-16 bg-paper/25" />
              </div>
              <blockquote className="display-serif text-[2.4rem] md:text-[4rem] lg:text-[5rem] mt-8 leading-[1.05] text-paper max-w-[26ch]">
                „Zuverlässigkeit und gute Zusammenarbeit mit unseren Kunden gehören zu unseren <span className="italic">Stärken</span>."
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <SparkMark className="h-4 w-4 text-paper" />
                <span className="mono-tag text-paper/70">Klaus-Peter Kersch & Dieter May · Geschäftsführung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== VERFAHREN / TECHNIK ====================== */}
      <section className="py-24 md:py-32 bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="mono-tag text-paper/55">05 · Verfahren</span>
                <span className="h-px w-16 bg-paper/25" />
              </div>
              <h2 className="display-serif text-[2.4rem] md:text-[3.6rem] lg:text-[4.4rem] mt-6 text-paper leading-[1]">
                Alles unter<br />
                <span className="italic">einem Dach.</span>
              </h2>
              <p className="mt-8 text-paper/70 text-base md:text-lg leading-relaxed max-w-[42ch]">
                Eigene Konstruktionsabteilung, Bystronic-Wasserstrahlschneidanlage, Laserschneiden, Blechfertigung, Rohrbearbeitung sowie WIG- und MAG-Schweißen. Modernster Maschinenpark auf 1.700 m² Werkhalle.
              </p>

              <div className="mt-10 relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/planning-table.jpg"
                  alt="Konstruktion im Technischen Büro"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale contrast-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-ink to-transparent">
                  <div className="mono-tag text-paper/70">Technisches Büro</div>
                  <div className="display-sans text-lg md:text-xl mt-1 text-paper">AutoCAD · HICAD</div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-paper/10">
                {CAPABILITIES.map((c, i) => (
                  <li key={c.k} className="bg-ink p-6 md:p-8 flex flex-col gap-3 group transition-colors hover:bg-navy-deep">
                    <div className="flex items-center justify-between">
                      <span className="mono-tag text-paper/50">{(i + 1).toString().padStart(2, "0")}</span>
                      <SparkMark className="h-3 w-3 text-paper/30 group-hover:text-paper transition-colors" />
                    </div>
                    <div className="display-sans text-xl md:text-2xl text-paper">{c.k}</div>
                    <div className="text-paper/60 text-sm leading-relaxed">{c.d}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== QUALITÄT - image + text split ====================== */}
      <section className="bg-paper">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[360px] md:min-h-[640px] order-1">
            <Image
              src="/images/quality-eye.jpg"
              alt="Präzision und Qualität"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-2 bg-paper p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <span className="mono-tag text-navy">06 · Qualität</span>
              <span className="h-px w-16 bg-rule-2" />
            </div>
            <h2 className="display-serif text-[2.4rem] md:text-[3.6rem] mt-6 text-ink leading-[1]">
              Präzision ist<br />
              <span className="italic text-navy">Pflicht.</span>
            </h2>
            <p className="mt-8 text-ink text-lg leading-relaxed">
              Jedes Bauteil wird vor Auslieferung geprüft. Unsere Konstruktionsabteilung entwickelt komplexe Zeichnungen in AutoCAD und HICAD. Die Fertigung erfolgt termintreu, die Montage durch unsere eigenen, erfahrenen Monteure.
            </p>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                ["Eigenes Technisches Büro", "Konstruktion & Werkplanung"],
                ["Moderne Fertigung", "Blech · Laser · Wasserstrahl"],
                ["WIG- und MAG-Schweißen", "Stahl & Edelstahl"],
                ["Eigene Monteure", "Keine Fremdvergabe"],
              ].map(([k, v]) => (
                <li key={k} className="border-t border-rule pt-4">
                  <div className="display-sans text-base text-ink">{k}</div>
                  <div className="text-mute text-sm mt-1">{v}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ====================== PROZESS mit Bildern ====================== */}
      <section className="py-24 md:py-32 bg-paper-2/60 border-y border-rule">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
            <div>
              <div className="flex items-center gap-4">
                <span className="mono-tag text-navy">07 · Prozess</span>
                <span className="h-px w-16 bg-rule-2" />
              </div>
              <h2 className="display-serif text-[2.6rem] md:text-[4rem] lg:text-[4.6rem] mt-6 text-ink leading-[1]">
                Vom ersten Gespräch<br />
                <span className="italic text-navy">bis zur Montage.</span>
              </h2>
            </div>
            <p className="text-mute text-lg leading-relaxed max-w-[48ch]">
              Vier klare Phasen. Transparent, nachvollziehbar und mit einem festen Ansprechpartner von Anfang bis Ende.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { ...PROCESS[0], img: "/images/handshake.jpg" },
              { ...PROCESS[1], img: "/images/planning-table.jpg" },
              { ...PROCESS[2], img: "/images/montage-closeup.jpg" },
              { ...PROCESS[3], img: "/images/construction-team.jpg" },
            ].map((p) => (
              <div key={p.n} className="group bg-paper border border-rule overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-navy text-paper px-3 py-1 mono-tag">{p.n}</div>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="display-sans text-xl md:text-2xl text-ink">{p.title}</h3>
                  <p className="text-mute text-sm md:text-base mt-3 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== BRANCHEN ====================== */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="col-span-12 lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="mono-tag text-navy">08 · Branchen</span>
                <span className="h-px w-16 bg-rule-2" />
              </div>
              <h2 className="display-serif text-[2.6rem] md:text-[4rem] mt-6 text-ink leading-[1]">
                Für wen wir<br />
                <span className="italic text-navy">arbeiten.</span>
              </h2>
              <p className="mt-8 text-mute text-lg leading-relaxed max-w-[42ch]">
                Privathaushalte, Bauherren und Architekten. Handwerk, Mittelstand und Industrie. Vom kleinen Einzelstück bis zur ganzen Serie.
              </p>

              <div className="mt-10 relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/warehouse-aisle.jpg"
                  alt="Industrie- und Lagerhalle"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 image-gradient-bottom" />
                <div className="absolute bottom-5 left-5 mono-tag text-paper">Industrie & Gewerbe</div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <ul className="divide-y divide-rule border-t border-rule">
                {[
                  { t: "Privat", d: "Geländer, Treppen und Vordächer für das Eigenheim." },
                  { t: "Architektur & Bau", d: "Konstruktionen und Fertigung nach Werkplanung." },
                  { t: "Gewerbe & Handwerk", d: "Hallenkonstruktionen, Sonderbauteile und Montagen." },
                  { t: "Lebensmittel", d: "Dosieranlagen und Förderbänder im Sondermaschinenbau." },
                  { t: "Recycling", d: "Waschanlagen, Trockenanlagen, Wasseraufbereitung, Bogen- und Siebanlagen." },
                  { t: "Beflockung", d: "Anlagen und Spezialkonstruktionen für die Beflockungstechnik." },
                ].map((b, i) => (
                  <li key={b.t} className="py-6 md:py-8 grid grid-cols-12 gap-6 items-baseline">
                    <div className="col-span-2 mono-tag text-navy">{(i + 1).toString().padStart(2, "0")}</div>
                    <div className="col-span-10 md:col-span-4 display-sans text-2xl md:text-3xl text-ink">{b.t}</div>
                    <div className="col-span-12 md:col-span-6 text-mute text-base leading-relaxed">{b.d}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== STANDORT / WERK ====================== */}
      <section className="relative overflow-hidden text-paper">
        <Image
          src="/images/warehouse-aisle.jpg"
          alt="Werkhalle Sirzenich"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 py-28 md:py-40">
          <div className="grid grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="mono-tag text-paper/55">09 · Standort</span>
                <span className="h-px w-16 bg-paper/25" />
              </div>
              <h2 className="display-serif text-[2.8rem] md:text-[4.6rem] lg:text-[5.4rem] mt-6 text-paper leading-[1]">
                1.700 m² Werkhalle.<br />
                <span className="italic">Direkt an der B 51.</span>
              </h2>
              <p className="mt-8 text-paper/80 text-lg leading-relaxed max-w-[52ch]">
                Seit 2003 arbeiten wir in der eigenen Produktionshalle im Industriegebiet Sirzenich. Hier entsteht jedes Bauteil, bevor unsere Monteure es termintreu beim Kunden einbauen.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
              <div className="bg-paper text-ink p-8">
                <div className="mono-tag text-navy">Werk & Verwaltung</div>
                <div className="display-serif text-2xl md:text-3xl mt-3 leading-tight">
                  {SITE.address.street}<br />
                  {SITE.address.zip} {SITE.address.city}
                </div>
                <div className="mt-6 text-mute text-sm">
                  Mo – Fr · 07:00 – 12:00 · 13:00 – 17:00<br />
                  Samstag nach Vereinbarung
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  SITE.address.street + ", " + SITE.address.zip + " " + SITE.address.city
                )}`}
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-between bg-navy text-paper px-6 py-5 hover:bg-navy-deep transition-colors"
              >
                <span className="display-sans text-lg">In Google Maps öffnen</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CTA FINAL ====================== */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="mono-tag text-navy">10 · Kontakt</div>
              <h2 className="display-serif text-[2.8rem] md:text-[4.6rem] lg:text-[5.4rem] mt-6 text-ink leading-[0.98]">
                Sprechen Sie mit<br />uns über Ihr<br />
                <span className="italic text-navy">Vorhaben.</span>
              </h2>
              <p className="mt-8 text-mute text-lg leading-relaxed max-w-[48ch]">
                Ob einzelnes Geländer oder komplette Hallenkonstruktion, rufen Sie uns an oder schreiben Sie uns. Beratung ist der erste Schritt, nicht die Rechnung.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <a href={`tel:${SITE.contact.phoneRaw}`} className="btn-primary w-full sm:w-auto justify-center sm:justify-start break-safe text-center">
                  <span className="truncate">{SITE.contact.phone}</span> <span>→</span>
                </a>
                <Link href="/kontakt" className="btn-ghost w-full sm:w-auto justify-center sm:justify-start">
                  Kontaktseite öffnen
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/team-hands.jpg"
                  alt="Zusammenarbeit"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 image-gradient-bottom" />
                <div className="absolute bottom-6 left-6 text-paper">
                  <div className="mono-tag text-paper/70">Zusammenarbeit</div>
                  <div className="display-serif text-2xl md:text-3xl mt-1">Für die nächsten 20 Jahre.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Service card with image ---------- */
function ServiceCard({
  index, title, tag, img, className = "",
}: {
  index: string; title: string; tag: string; img: string; className?: string;
}) {
  return (
    <Link
      href="/leistungen"
      className={`group relative overflow-hidden block ${className}`}
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 image-gradient-bottom transition-opacity group-hover:opacity-90" />
      <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-paper">
        <span className="mono-tag text-paper/70">{index}</span>
        <SparkMark className="h-3 w-3 text-paper/60 group-hover:text-paper transition-colors" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-paper">
        <h3 className="display-serif text-3xl md:text-4xl lg:text-5xl leading-[1] text-paper">
          {title}
        </h3>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div className="mono-tag text-paper/70">{tag}</div>
          <span className="text-xl text-paper group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}

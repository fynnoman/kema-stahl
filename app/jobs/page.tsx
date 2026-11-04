import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JOBS, SITE } from "../_lib/site";
import { SparkMark } from "../_components/Logo";

export const metadata: Metadata = {
  title: "Jobs",
  description:
    "Offene Stellen im Werk in Trierweiler: Metallbauer/in, Monteur/in, Maschinen- und Anlagenführer/in, Bilanzbuchhaltung und Ausbildung.",
};

export default function JobsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden h-[70vh] min-h-[440px] md:min-h-[520px]">
        <Image
          src="/images/warehouse-aisle.jpg"
          alt="Werkhalle Sirzenich"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />
        <div className="relative z-10 h-full flex flex-col justify-end">
          <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 pb-12 md:pb-20 text-paper">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="mono-tag text-paper/75">Jobs</span>
              <span className="hidden sm:inline-block h-px w-16 bg-paper/40" />
              <span className="mono-tag text-paper/75">Werk Sirzenich · Trierweiler</span>
            </div>
            <h1 className="fluid-hero-serif-sm display-serif mt-6 md:mt-8 text-paper max-w-[14ch]">
              Werden Sie<br />
              <span className="italic">Teil der Halle.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-5">
              <div className="mono-tag text-navy">{JOBS.length} offene Stellen</div>
            </div>
            <p className="col-span-12 lg:col-span-7 text-ink text-lg md:text-xl leading-relaxed">
              Wir sind ein erfolgreiches, mittelständisches Unternehmen im Bereich Maschinen-, Metall- und Stahlbau. Zur Verstärkung unseres Teams suchen wir zum nächstmöglichen Zeitpunkt engagierte Kolleginnen und Kollegen.
            </p>
          </div>
        </div>
      </section>

      {/* JOBS LIST */}
      <section className="bg-paper-2/60 border-y border-rule py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex items-baseline justify-between border-t border-rule pt-6 mb-10">
            <div className="mono-tag text-navy">Offene Stellen · {JOBS.length}</div>
            <a href={`mailto:${SITE.contact.jobsEmail}`} className="mono-tag rule-link text-navy">
              {SITE.contact.jobsEmail} →
            </a>
          </div>

          <ul className="border-t border-rule">
            {JOBS.map((job, i) => (
              <li key={job.title} className="border-b border-rule py-10 md:py-14 grid grid-cols-12 gap-4 md:gap-10 items-start">
                <div className="col-span-2 md:col-span-1">
                  <span className="mono-tag text-navy">{(i + 1).toString().padStart(2, "0")}</span>
                </div>
                <div className="col-span-10 md:col-span-5">
                  <h2 className="display-sans text-2xl md:text-4xl text-ink leading-[1.05]">
                    {job.title}
                  </h2>
                  <div className="mono-tag mt-4">Vollzeit · Trierweiler</div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`mailto:${SITE.contact.jobsEmail}?subject=Bewerbung%20${encodeURIComponent(job.title)}`}
                      className="btn-primary"
                    >
                      Jetzt bewerben <span>→</span>
                    </a>
                    <a
                      href={`tel:${SITE.contact.phoneRaw}`}
                      className="btn-ghost"
                    >
                      Telefonisch anfragen
                    </a>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <div className="border-l border-rule-2 pl-6">
                    <div className="mono-tag text-navy mb-4">Anforderungen</div>
                    <ul className="space-y-3">
                      {job.req.map((r) => (
                        <li key={r} className="flex gap-3 text-ink text-base md:text-lg leading-relaxed">
                          <SparkMark className="h-3 w-3 text-navy mt-2 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="relative overflow-hidden text-paper">
        <Image
          src="/images/construction-team.jpg"
          alt="Team"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-gradient-full" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-7">
              <div className="mono-tag text-paper/55">Bewerbung</div>
              <h2 className="display-serif text-[2.6rem] md:text-[4.6rem] mt-4 text-paper leading-[0.98]">
                Bewerbungen bitte<br />
                <span className="italic">an uns direkt.</span>
              </h2>
              <p className="mt-6 text-paper/80 text-lg leading-relaxed max-w-[48ch]">
                Per E-Mail an {SITE.contact.jobsEmail} oder telefonisch unter {SITE.contact.phone}. Wir melden uns zeitnah zurück.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
              <a
                href={`mailto:${SITE.contact.jobsEmail}`}
                className="flex items-center justify-between bg-paper text-navy px-6 py-5 hover:bg-paper-2 transition-colors"
              >
                <div>
                  <div className="mono-tag text-navy/60">E-Mail</div>
                  <div className="display-sans text-xl md:text-2xl mt-1">{SITE.contact.jobsEmail}</div>
                </div>
                <span>→</span>
              </a>
              <a
                href={`tel:${SITE.contact.phoneRaw}`}
                className="flex items-center justify-between border border-paper/40 text-paper px-6 py-5 hover:bg-paper/10 transition-colors"
              >
                <div>
                  <div className="mono-tag text-paper/60">Telefon</div>
                  <div className="display-sans text-xl md:text-2xl mt-1">{SITE.contact.phone}</div>
                </div>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { SITE } from "../_lib/site";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-[900px] px-5 md:px-10 pt-24 pb-32">
      <div className="mono-tag text-navy">Rechtliches</div>
      <h1 className="display-serif text-5xl md:text-7xl mt-4 text-ink">Impressum</h1>

      <div className="mt-14 space-y-10 text-ink text-base md:text-lg leading-relaxed">
        <section>
          <h2 className="display-sans text-xl mb-3">Angaben gemäß § 5 TMG</h2>
          <p>
            Kemastahl Schlosserei GmbH<br />
            {SITE.address.street}<br />
            {SITE.address.zip} {SITE.address.city}
          </p>
        </section>

        <section>
          <h2 className="display-sans text-xl mb-3">Vertreten durch</h2>
          <p>Klaus-Peter Kersch, Dieter May</p>
        </section>

        <section>
          <h2 className="display-sans text-xl mb-3">Kontakt</h2>
          <p>
            Telefon {SITE.contact.phone}<br />
            Fax {SITE.contact.fax}<br />
            E-Mail <a className="text-navy rule-link" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
          </p>
        </section>

        <section>
          <h2 className="display-sans text-xl mb-3">Hinweis</h2>
          <p className="text-mute">
            Weitere Pflichtangaben (Handelsregister, Umsatzsteuer-ID, Kammer, Aufsichtsbehörde, Streitschlichtung) werden auf Zuruf durch den Betreiber ergänzt.
          </p>
        </section>
      </div>
    </section>
  );
}

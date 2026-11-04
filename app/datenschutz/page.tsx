import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-[900px] px-5 md:px-10 pt-24 pb-32">
      <div className="mono-tag text-navy">Rechtliches</div>
      <h1 className="display-serif text-5xl md:text-7xl mt-4 text-ink">Datenschutz</h1>

      <div className="mt-14 space-y-8 text-ink text-base md:text-lg leading-relaxed">
        <p>
          Diese Website speichert, verarbeitet oder teilt keine personenbezogenen Daten ohne ausdrückliche Handlung der Nutzerin oder des Nutzers.
        </p>
        <p>
          Nehmen Sie per E-Mail oder Telefon Kontakt mit uns auf, verwenden wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage.
        </p>
        <p className="text-mute">
          Die vollständige Datenschutzerklärung wird auf Zuruf durch den Betreiber ergänzt.
        </p>
      </div>
    </section>
  );
}

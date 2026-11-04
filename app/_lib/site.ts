export const SITE = {
  name: "KeMa-Stahl",
  longName: "Kemastahl Schlosserei GmbH",
  founded: 1996,
  foundedBy: ["Klaus-Peter Kersch", "Dieter May"],
  address: {
    street: "Bergstraße 5",
    zip: "54311",
    city: "Trierweiler",
    district: "Industriegebiet Sirzenich",
  },
  contact: {
    phone: "+49 (0) 651 170 76-0",
    phoneRaw: "+496511707600",
    fax: "+49 (0) 651 170 76-29",
    email: "info@kemastahl.de",
    jobsEmail: "hkersch@kemastahl.de",
  },
  hours: {
    weekdays: "Montag – Freitag  07:00 – 12:00 · 13:00 – 17:00",
    saturday: "Samstag nach Vereinbarung",
  },
  nav: [
    { label: "Unternehmen", href: "/unternehmen" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Service", href: "/service" },
    { label: "Galerie", href: "/galerie" },
    { label: "Jobs", href: "/jobs" },
    { label: "Kontakt", href: "/kontakt" },
  ],
};

export const TEAM = [
  {
    name: "Dieter May",
    role: "Geschäftsführer",
    duties: "Einkauf · Kalkulation · Wasserstrahlschneiden",
    phone: "0651 17076-0",
    email: "info@kemastahl.de",
  },
  {
    name: "Klaus-Peter Kersch",
    role: "Geschäftsführer",
    duties: "Kalkulation · Bauleitung",
    phone: "0651 17076-0",
    email: "kersch@kemastahl.de",
  },
  {
    name: "Heike Kersch",
    role: "Verwaltung",
    duties: "Rechnungskontrolle",
    phone: "0651 17076-14",
    email: "hkersch@kemastahl.de",
  },
  {
    name: "Margit Wylezol",
    role: "Verwaltung",
    duties: "Buchhaltung",
    phone: "0651 17076-11",
    email: "wylezol@kemastahl.de",
  },
  {
    name: "Abbas Haidar",
    role: "Technisches Büro",
    duties: "Konstruktion · Planung",
    phone: "0651 17076-10",
    email: "haidar@kemastahl.de",
  },
];

export const SERVICES = [
  {
    key: "vordaecher",
    index: "01",
    title: "Vordächer",
    tag: "Individualbau · Beratung vor Ort",
    desc:
      "Individuelle Anfertigung nach Kundenwunsch. Von der ersten Skizze bis zur Montage entwickelt ein KeMa-Fachberater mit Ihnen die Konstruktion, die zu Ihrer Architektur und Nutzung passt.",
  },
  {
    key: "gelaender",
    index: "02",
    title: "Geländer",
    tag: "Innen & außen · Einzelstück & Serie",
    desc:
      "Beliebige Geländerkonstruktionen als Einzelanfertigung. Edelstahl, Stahl verzinkt, lackiert oder in Kombination mit Holz — gefertigt für Privathaus, Gewerbebau und öffentliche Hand.",
  },
  {
    key: "treppen",
    index: "03",
    title: "Treppen",
    tag: "Außen & innen · gerade, Spindel, Wendel",
    desc:
      "Außen- und Innentreppen in allen Oberflächen: Edelstahl, Stahl, Stahl verzinkt oder lackiert, auf Wunsch mit Holzdetail am Handlauf. Einholm, Spindel, Wendel oder geradläufig — mit Wangen aus Flachstahl und Stufenbelägen in Gitterrost, Holz, Alu-Riffel oder Granit.",
  },
  {
    key: "sonderanfertigungen",
    index: "04",
    title: "Sonderanfertigungen",
    tag: "Container · Abgasleitbleche · Einzellösungen",
    desc:
      "Individuelle Sonderkonstruktionen vom Container bis zum Abgasleitblech. Für Bauherren, Industrie und Betriebe, die eine Lösung brauchen, die es so noch nicht gibt.",
  },
  {
    key: "maschinenbau",
    index: "05",
    title: "Sondermaschinenbau",
    tag: "Lebensmittel · Recycling · Beflockung",
    desc:
      "Fertigung von Sonderanlagen und Maschinenbau. Dosieranlagen und Förderbänder für die Lebensmittelindustrie, Waschanlagen, Trockenanlagen, Wasseraufbereitung, Bogen- und Siebanlagen für das Recycling, Anlagen für die Beflockung.",
  },
];

export const CAPABILITIES = [
  { k: "Beratung", d: "Gemeinsame Entwicklung der richtigen Strategie für Ihr Bauvorhaben." },
  { k: "Konstruktionsabteilung", d: "Eigenes Technisches Büro, komplexe Zeichnungen in AutoCAD und HICAD." },
  { k: "Maschinenreparaturen", d: "Reparatur mechanischer Anlagen und Komponenten." },
  { k: "Wartung", d: "Regelmäßige Wartung für Betriebssicherheit und Standzeit." },
  { k: "Blechfertigung", d: "Zuschnitt, Umformen, Kanten und Fügen aus einer Hand." },
  { k: "Wasserstrahlschneiden", d: "Bystronic ByJet ProL 6030 Expert für hochpräzise Konturen." },
  { k: "Laserschneiden", d: "Saubere Schnittkanten an Blech und Profilen." },
  { k: "Rohrbearbeitung", d: "Trennen, Formen und Fügen von Rohrkonstruktionen." },
  { k: "Schweißarbeiten", d: "WIG- und MAG-Schweißen, Stahl und Edelstahl." },
];

export const PROCESS = [
  { n: "01", title: "Beratung", text: "Gespräch vor Ort oder im Werk. Wir hören zu und prüfen die Aufgabe technisch wie gestalterisch." },
  { n: "02", title: "Planung", text: "Konstruktion in AutoCAD und HICAD. Zeichnungen, Statik und Materialliste als klare Entscheidungsgrundlage." },
  { n: "03", title: "Fertigung", text: "Vorfertigung in der Halle in Sirzenich. Laser, Wasserstrahl, Blech, Schweißen — alles unter einem Dach." },
  { n: "04", title: "Montage", text: "Termintreue Lieferung und fachgerechte Montage vor Ort durch eigene Monteure." },
];

export const JOBS = [
  {
    title: "Bürokaufmann/-frau · Bilanzbuchhalter/in",
    req: [
      "abgeschlossene kaufmännische Ausbildung",
      "Berufserfahrung wünschenswert",
      "DATEV-Kenntnisse erforderlich",
      "Erfahrung in Finanz- und Lohnbuchhaltung",
      "selbstständiges Arbeiten, Teamfähigkeit, Belastbarkeit",
      "service- und kundenorientierte Arbeitsweise",
      "gute EDV-Kenntnisse",
      "Telefonzentrale, allgemeine Verwaltungsaufgaben",
    ],
  },
  {
    title: "Metallbauer/in für die Montage · Monteur/in",
    req: [
      "abgeschlossene Ausbildung als Metallbauer/in, Fachrichtung Konstruktionstechnik",
      "Berufserfahrung wünschenswert",
      "selbstständiges Arbeiten, Teamfähigkeit, Belastbarkeit",
      "sehr gute Deutschkenntnisse in Wort und Schrift",
      "Führerschein PKW (B)",
    ],
  },
  {
    title: "Metallbauer/in Konstruktionstechnik",
    req: [
      "abgeschlossene Ausbildung als Metallbauer/in, Fachrichtung Konstruktionstechnik",
      "Berufserfahrung wünschenswert",
      "Erfahrung in WIG- und MAG-Schweißen",
      "Erfahrung in klassischen Schlosserarbeiten, Stahl und Edelstahl",
      "selbstständiges Arbeiten, Teamfähigkeit, Belastbarkeit",
      "Führerschein PKW (B) wünschenswert",
    ],
  },
  {
    title: "Maschinen- und Anlagenführer/in",
    req: [
      "abgeschlossene Ausbildung als Maschinen- und Anlagenführer/in",
      "Berufserfahrung wünschenswert",
      "gute Deutschkenntnisse in Wort und Schrift",
      "Führerschein PKW (B) wünschenswert",
      "Teamfähigkeit, Belastbarkeit, selbstständiges Arbeiten",
    ],
  },
  {
    title: "Azubi Metallbauer/in Fachrichtung Konstruktionstechnik",
    req: [
      "abgeschlossene Schulausbildung, mindestens Hauptschulabschluss",
      "Lernbereitschaft, Zuverlässigkeit",
      "selbstständiges Arbeiten",
      "Teamfähigkeit, Belastbarkeit, Kommunikationsfähigkeit",
    ],
  },
];

export const HISTORY = [
  { year: "1996", title: "Gründung", text: "Klaus-Peter Kersch und Dieter May gründen die Firma in einer 40 m² Doppelgarage in Trierweiler." },
  { year: "1997", title: "Umzug nach Sirzenich", text: "Verlagerung in eine 400 m² Miethalle im Gewerbegebiet Sirzenich. Die Auftragslage wächst rasant." },
  { year: "2000", title: "Erste Hallenvergrößerung", text: "Anschaffung einer Plasma-Schneidanlage, Erweiterung der Halle um 200 m²." },
  { year: "2003", title: "Eigene Produktionshalle", text: "Bezug der eigenen Halle im Industriegebiet Sirzenich mit 1.700 m² Hallen- und Bürofläche." },
  { year: "2007", title: "Blechfertigung ausgebaut", text: "Ergänzung des Maschinenparks um Kantbank und Schlagschere." },
  { year: "2009", title: "Wasserstrahl-Technologie", text: "Inbetriebnahme der Bystronic ByJet ProL 6030 Expert — hochmodernes Wasserstrahlschneiden im eigenen Werk." },
  { year: "heute", title: "35 Mitarbeiter", text: "Planung, Fertigung und Montage aus einer Hand — für Privat, Gewerbe und Industrie in der Region Trier und darüber hinaus." },
];

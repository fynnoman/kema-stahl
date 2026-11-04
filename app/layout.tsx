import type { Metadata } from "next";
import { Archivo, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "./_components/SiteNav";
import { SiteFooter } from "./_components/SiteFooter";
import { NavSpacer } from "./_components/NavSpacer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kemastahl.de"),
  title: {
    default: "KeMa-Stahl — Schlosserei & Metallbau in Trierweiler",
    template: "%s — KeMa-Stahl",
  },
  description:
    "Planung, Fertigung und Montage von Geländern, Treppen, Balkonanlagen, Vordächern, Hallen- und Dachkonstruktionen. Seit 1996 aus Trierweiler bei Trier.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "KeMa-Stahl — Schlosserei & Metallbau",
    description:
      "Seit 1996 planen und fertigen wir Geländer, Treppen- und Balkonanlagen sowie Hallen- und Dachkonstruktionen in höchster Qualität.",
    siteName: "KeMa-Stahl",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${archivo.variable} ${fraunces.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <SiteNav />
        <NavSpacer />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

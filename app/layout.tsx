import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://faycalbouzid.fr"),
  title: {
    default: "Fayçal Bouzid — Chef de Projet Digital",
    template: "%s | Fayçal Bouzid",
  },
  description:
    "Portfolio de Fayçal Bouzid, Chef de Projet Digital spécialisé en Next.js, React et PHP. Disponible en CDI et freelance.",
  openGraph: {
    title: "Fayçal Bouzid — Chef de Projet Digital",
    description:
      "Portfolio de Fayçal Bouzid, Chef de Projet Digital spécialisé en Next.js, React et PHP. Disponible en CDI et freelance.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

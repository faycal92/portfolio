import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Fayçal Bouzid, Chef de Projet Digital disponible en CDI et freelance.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Me contacter
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Un projet en tête ? Une opportunité à discuter ? N&apos;hésitez pas
          à me laisser un message.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-8">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-primary/5 p-8">
            <h2 className="mb-3 text-lg font-bold text-slate-900">
              Disponibilité
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
                CDI
              </span>
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
                Freelance
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="mb-4 text-lg font-bold text-slate-900">
              Coordonnées
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href="mailto:faycalbo@hotmail.fr"
                  className="flex items-center gap-2 text-slate-600 transition-colors hover:text-primary"
                >
                  <span aria-hidden="true">✉</span>
                  faycalbo@hotmail.fr
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+33750978900"
                  className="flex items-center gap-2 text-slate-600 transition-colors hover:text-primary"
                >
                  <span aria-hidden="true">☎</span>
                  +33 7 50 97 89 00
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/faycal-bouzid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 transition-colors hover:text-primary"
                >
                  <span aria-hidden="true">in</span>
                  linkedin.com/in/faycal-bouzid
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

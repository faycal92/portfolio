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
        <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-primary/5 p-6 sm:p-8">
            <h2 className="mb-3 text-lg font-bold text-slate-900">
              Types de contrats recherchés
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
                CDI
              </span>
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
                CDD
              </span>
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
                Freelance
              </span>
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
                Mission
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
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
                  href="https://wa.me/33750978900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 transition-colors hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.26-8.24a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.25 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31s-.87.85-.87 2.08c0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
                  </svg>
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

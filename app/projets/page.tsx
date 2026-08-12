import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez PrivateMove (réservation VTC) et Horizon Immobilier (agence immobilière), les sites développés par Fayçal Bouzid.",
};

type Score = {
  label: string;
  value: number;
};

type Project = {
  name: string;
  description: string;
  technologies?: string[];
  features?: string[];
  scores: Score[];
  theme: "gold" | "blue";
  link?: string;
};

const PROJECTS: Project[] = [
  {
    name: "PrivateMove",
    description:
      "Site web complet pour un service de chauffeur VTC à Paris. Formulaire de réservation avec calcul de prix en temps réel, paiement Stripe, notifications WhatsApp automatiques. Intégration de l'API Google Maps avec autocomplétion intelligente des adresses.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Google Maps API (autocomplétion des adresses)",
      "Stripe (paiement sécurisé)",
      "Twilio (notifications WhatsApp automatiques)",
    ],
    scores: [
      { label: "Performance", value: 99 },
      { label: "Accessibilité", value: 100 },
      { label: "Bonnes pratiques", value: 100 },
      { label: "SEO", value: 100 },
    ],
    theme: "gold",
    link: "https://privatemove.fr",
  },
  {
    name: "Horizon Immobilier",
    description:
      "Site complet pour une agence immobilière — vente et location. Recherche avancée avec filtres synchronisés à l'URL, fiches détaillées avec galerie photos, présentation de l'équipe et blog de conseils immobiliers.",
    features: [
      "Recherche par ville, budget, surface et type de bien",
      "Fiches détaillées avec galerie photos",
      "Espace équipe et blog conseils",
    ],
    scores: [
      { label: "Performance", value: 96 },
      { label: "Accessibilité", value: 100 },
      { label: "Bonnes pratiques", value: 100 },
      { label: "SEO", value: 100 },
    ],
    theme: "blue",
    link: "https://horizon-immobilier-alpha.vercel.app",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const isGold = project.theme === "gold";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl ${
        isGold
          ? "border-slate-800 bg-slate-900 hover:shadow-amber-500/10"
          : "border-slate-200 bg-white hover:shadow-primary/10"
      }`}
    >
      <div
        className={`h-2 w-full ${
          isGold ? "bg-gradient-to-r from-amber-400 to-amber-600" : "bg-primary"
        }`}
      />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h2
          className={`mb-4 text-2xl font-bold ${
            isGold ? "text-amber-400" : "text-slate-900"
          }`}
        >
          {project.name}
        </h2>

        <p
          className={`mb-6 flex-1 leading-relaxed ${
            isGold ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {project.description}
        </p>

        {project.technologies ? (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                  isGold
                    ? "bg-slate-800 text-slate-200"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        {project.features ? (
          <ul className="mb-6 space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className={`flex items-start gap-2 text-sm leading-relaxed ${
                  isGold ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                    isGold ? "bg-amber-400" : "bg-primary"
                  }`}
                />
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mb-6">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-wide ${
              isGold ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Scores Google
          </p>
          <div className="grid grid-cols-2 gap-3">
            {project.scores.map((score) => (
              <div
                key={score.label}
                className={`rounded-lg border px-3 py-2 text-center ${
                  isGold
                    ? "border-slate-800 bg-slate-800/50"
                    : "border-slate-100 bg-slate-50"
                }`}
              >
                <p
                  className={`text-lg font-bold ${
                    isGold ? "text-amber-400" : "text-primary"
                  }`}
                >
                  {score.value}/100
                </p>
                <p
                  className={`text-xs ${
                    isGold ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {score.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
              isGold
                ? "bg-amber-400 text-slate-900 hover:bg-amber-300"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            Voir le site
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-400">
            Projet non déployé
          </span>
        )}
      </div>
    </article>
  );
}

export default function ProjetsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Mes projets
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Des réalisations concrètes, du cahier des charges à la mise en
          production.
        </p>
      </div>

      <div className="mx-auto mt-14 grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

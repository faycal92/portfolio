import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez les projets web réalisés par Fayçal Bouzid : PrivateMove, ShopEase et TaskFlow.",
};

type Project = {
  name: string;
  description: string;
  technologies: string[];
  badge: string;
  theme: "gold" | "blue";
  link?: string;
};

const PROJECTS: Project[] = [
  {
    name: "PrivateMove",
    description:
      "Site web complet pour un service de chauffeur VTC à Paris. Formulaire de réservation avec calcul de prix en temps réel, paiement Stripe, notifications WhatsApp automatiques.",
    technologies: ["Next.js", "Tailwind CSS", "Google Maps API", "Stripe", "Twilio"],
    badge: "PageSpeed 100/100",
    theme: "gold",
    link: "https://privatemove.fr",
  },
  {
    name: "ShopEase",
    description:
      "Application e-commerce complète avec gestion des produits, panier d'achat, paiement en ligne et tableau de bord administrateur.",
    technologies: ["Next.js", "MySQL", "Stripe", "Tailwind CSS"],
    badge: "Projet personnel",
    theme: "blue",
  },
  {
    name: "TaskFlow",
    description:
      "Application de gestion de tâches et de projets pour équipes. Tableau Kanban, assignation de tâches, notifications en temps réel.",
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    badge: "Projet personnel",
    theme: "blue",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const isGold = project.theme === "gold";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl ${
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

      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2
            className={`text-2xl font-bold ${
              isGold ? "text-amber-400" : "text-slate-900"
            }`}
          >
            {project.name}
          </h2>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
              isGold
                ? "bg-amber-400/10 text-amber-400"
                : "bg-primary/10 text-primary"
            }`}
          >
            {project.badge}
          </span>
        </div>

        <p
          className={`mb-6 flex-1 leading-relaxed ${
            isGold ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {project.description}
        </p>

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

        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-300"
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
          Une sélection de réalisations, du site en production à mes projets
          personnels d&apos;expérimentation.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez PrivateMove (réservation VTC), Horizon Immobilier (agence immobilière), DriveConnect (services web pour chauffeurs VTC) et Aquitaine Prestige (chauffeur privé VTC à Bordeaux), les sites développés par Fayçal Bouzid.",
};

type Score = {
  label: string;
  value: number;
};

type Theme = "gold" | "blue" | "bordeaux";

type Project = {
  name: string;
  description: string;
  technologies?: string[];
  features?: string[];
  score: Score;
  theme: Theme;
  link?: string;
};

type ThemeTokens = {
  card: string;
  bar: string;
  title: string;
  badge: string;
  body: string;
  tag: string;
  bullet: string;
  button: string;
};

const THEMES: Record<Theme, ThemeTokens> = {
  gold: {
    card: "border-slate-800 bg-slate-900 hover:shadow-amber-500/10",
    bar: "bg-gradient-to-r from-amber-400 to-amber-600",
    title: "text-amber-400",
    badge: "bg-amber-400/10 text-amber-400",
    body: "text-slate-300",
    tag: "bg-slate-800 text-slate-200",
    bullet: "bg-amber-400",
    button: "bg-amber-400 text-slate-900 hover:bg-amber-300",
  },
  blue: {
    card: "border-slate-200 bg-white hover:shadow-primary/10",
    bar: "bg-primary",
    title: "text-slate-900",
    badge: "bg-primary/10 text-primary",
    body: "text-slate-600",
    tag: "bg-slate-100 text-slate-700",
    bullet: "bg-primary",
    button: "bg-primary text-white hover:bg-primary-dark",
  },
  bordeaux: {
    card: "border-bordeaux/15 bg-cream hover:shadow-bordeaux/10",
    bar: "bg-bordeaux",
    title: "text-bordeaux",
    badge: "bg-bordeaux/10 text-bordeaux",
    body: "text-slate-600",
    tag: "bg-bordeaux/5 text-bordeaux",
    bullet: "bg-bordeaux",
    button: "bg-bordeaux text-white hover:bg-bordeaux-dark",
  },
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
    score: { label: "SEO", value: 100 },
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
    score: { label: "SEO", value: 100 },
    theme: "blue",
    link: "https://horizon-immobilier-alpha.vercel.app",
  },
  {
    name: "DriveConnect",
    description:
      "Site de vente de services web destiné aux chauffeurs VTC. Présentation des offres, réalisations, FAQ et blog SEO pour le référencement naturel.",
    features: [
      "Trois offres détaillées avec comparatif",
      "Section réalisations et FAQ",
      "Blog optimisé pour le référencement",
    ],
    score: { label: "SEO", value: 100 },
    theme: "gold",
    link: "https://chauffeurpro.vercel.app",
  },
  {
    name: "Aquitaine Prestige",
    description:
      "Site vitrine pour un chauffeur privé VTC à Bordeaux, spécialisé dans les transferts aéroport et la clientèle affaires. Présentation des services, grille tarifaire et formulaire de contact.",
    features: [
      "Présentation détaillée des services et de la zone d'intervention",
      "Grille tarifaire claire",
      "Formulaire de contact et lien WhatsApp",
      "Optimisé pour la recherche locale",
    ],
    score: { label: "SEO", value: 100 },
    theme: "bordeaux",
    link: "https://aquitaine-prestige.vercel.app",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const t = THEMES[project.theme];

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl ${t.card}`}
    >
      <div className={`h-2 w-full ${t.bar}`} />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className={`text-2xl font-bold ${t.title}`}>{project.name}</h2>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${t.badge}`}
          >
            {project.score.label} {project.score.value}/100
          </span>
        </div>

        <p className={`mb-6 flex-1 leading-relaxed ${t.body}`}>
          {project.description}
        </p>

        {project.technologies ? (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`rounded-md px-2.5 py-1 text-xs font-medium ${t.tag}`}
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
                className={`flex items-start gap-2 text-sm leading-relaxed ${t.body}`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${t.bullet}`}
                />
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${t.button}`}
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

      <div className="mx-auto mt-14 grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

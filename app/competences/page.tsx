import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compétences",
  description:
    "Les technologies et outils maîtrisés par Fayçal Bouzid : Next.js, React, PHP, Laravel, Symfony, MySQL et plus.",
};

type SkillCategory = {
  title: string;
  skills: string[];
};

const CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["Next.js / React", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "Symfony", "Node.js"],
  },
  {
    title: "Base de données",
    skills: ["MySQL"],
  },
  {
    title: "Outils",
    skills: [
      "Git / GitHub",
      "Vercel",
      "Stripe API",
      "Google Maps API",
      "Twilio API",
    ],
  },
];

export default function CompetencesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Mes compétences
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Un aperçu des technologies que j&apos;utilise au quotidien pour
          concevoir et développer des applications web.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-slate-200 p-8 transition-shadow hover:shadow-lg hover:shadow-primary/5"
          >
            <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              {category.title}
            </h2>
            <ul className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

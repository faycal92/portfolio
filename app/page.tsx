import Link from "next/link";
import HeroIllustration from "@/components/HeroIllustration";

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center gap-12 px-6 py-16 md:flex-row md:py-0">
      <div className="flex-1 animate-fade-in-up text-center md:text-left">
        <p className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Chef de Projet Digital
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Fayçal Bouzid
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:mx-0 mx-auto">
          Je crée des applications web modernes, performantes et élégantes.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start justify-center">
          <Link
            href="/projets"
            className="w-full rounded-lg bg-primary px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="w-full rounded-lg border border-slate-200 px-8 py-3.5 text-center text-sm font-semibold text-slate-700 transition-all hover:border-primary hover:text-primary sm:w-auto"
          >
            Me contacter
          </Link>
        </div>
      </div>

      <div className="flex-1 animate-fade-in">
        <div className="mx-auto aspect-square w-full max-w-md">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-slate-500">© 2026 Fayçal Bouzid</p>
        <div className="flex items-center gap-6">
          <Link
            href="https://www.linkedin.com/in/faycal-bouzid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 transition-colors hover:text-primary"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:faycalbo@hotmail.fr"
            className="text-sm text-slate-500 transition-colors hover:text-primary"
          >
            faycalbo@hotmail.fr
          </Link>
        </div>
      </div>
    </footer>
  );
}

import { PERSONAL_INFO } from "../data/portfolioData";
import { Mail, FileText } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="py-20">
      <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wide uppercase rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
        Available for opportunities
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
          {PERSONAL_INFO.name}
        </span>
      </h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8 leading-relaxed">
        {PERSONAL_INFO.bio}
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition text-sm font-medium"
        >
          <GithubIcon size={16} /> GitHub
        </a>
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition text-sm font-medium"
        >
          <LinkedinIcon size={16} /> LinkedIn
        </a>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold shadow-md shadow-amber-500/20 transition text-sm"
        >
          <Mail size={16} /> Contact Me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition text-sm font-medium"
        >
          <FileText size={16} /> Resume
        </a>
      </div>
    </section>
  );
}
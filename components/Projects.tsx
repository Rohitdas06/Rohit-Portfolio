import { PROJECTS } from "../data/portfolioData";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
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

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-zinc-200 dark:border-zinc-800">
      <h2 className="text-2xl font-bold tracking-tight mb-8">
        Featured <span className="text-amber-600 dark:text-amber-500">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-sm hover:shadow-md dark:shadow-none flex flex-col justify-between hover:border-amber-500/50 dark:hover:border-amber-500/40 transition duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-zinc-400 dark:text-zinc-500">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-600 dark:hover:text-amber-500 transition"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-600 dark:hover:text-amber-500 transition"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
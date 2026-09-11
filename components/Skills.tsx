import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-zinc-200 dark:border-zinc-800">
      <h2 className="text-2xl font-bold tracking-tight mb-8">
        Technical <span className="text-amber-600 dark:text-amber-500">Skills</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SKILLS.map((group) => (
          <div key={group.category} className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500/80">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-sm font-medium bg-white dark:bg-zinc-900/60 text-zinc-800 dark:text-zinc-200 shadow-sm dark:shadow-none hover:border-amber-500/40 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
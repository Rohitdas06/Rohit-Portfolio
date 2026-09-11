"use client";

import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm transition-colors">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400">
        {/* Copyright & Info */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}.</span>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
          <span className="text-xs sm:text-sm">
            Built with <span className="text-zinc-800 dark:text-zinc-200 font-medium">Next.js</span> & <span className="text-amber-600 dark:text-amber-500 font-medium">Tailwind CSS</span>
          </span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-300 hover:border-amber-500/40 hover:text-amber-600 dark:hover:text-amber-500 shadow-sm dark:shadow-none transition-all duration-200"
          aria-label="Back to top"
        >
          <span className="text-xs font-medium">Back to top</span>
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>
    </footer>
  );
}
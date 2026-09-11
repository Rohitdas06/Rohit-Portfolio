import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-lg tracking-tight hover:text-amber-500 transition-colors"
        >
          Rohit<span className="text-amber-500">.</span>portfolio
        </Link>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            <a href="#projects" className="hover:text-amber-500 dark:hover:text-amber-400 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-amber-500 dark:hover:text-amber-400 transition">
              Skills
            </a>
          </nav>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
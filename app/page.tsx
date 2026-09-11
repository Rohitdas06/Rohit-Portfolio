import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-amber-500 selection:text-white dark:selection:text-zinc-950 overflow-x-hidden font-sans transition-colors duration-200 flex flex-col justify-between">
      
      {/* Ambient Glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 right-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-amber-400/10 dark:from-amber-500/20 via-orange-300/10 dark:via-orange-500/15 to-transparent blur-[120px]" />
        <div className="absolute top-[35%] -left-32 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-orange-400/10 dark:from-orange-600/15 via-amber-300/10 dark:via-amber-500/10 to-transparent blur-[140px]" />
        <div className="absolute -bottom-20 right-[5%] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-amber-400/10 dark:from-amber-600/10 via-orange-300/5 dark:via-orange-600/5 to-transparent blur-[130px]" />
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex-1">
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 pb-20">
          <Hero />
          <Projects />
          <Skills />
        </main>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
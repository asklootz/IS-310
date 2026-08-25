import { type Lang, T } from "@/data/translations"
import F5Logo from "@/components/F5Logo"

type Props = { lang: Lang; scrollTo: (id: string) => void }

export default function HeroSection({ lang, scrollTo }: Props) {
  const c = T[lang].hero

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/5 text-brand text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          {c.badge}
        </div>

        <div className="flex justify-center mb-8">
          <img src="https://raw.githubusercontent.com/asklootz/IS-310/fe80bd338c77effe7718ae475a51fca3599c7c9b/src/images/F5-Small-Logo-With-Text.svg" alt="F5 Logo" className="w-30 h-30" />
        </div>

        <h1 className="font-display font-900 text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-navy-900 dark:text-white mb-4">
          F5{" "}
          <span className="text-brand relative">
            Development
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand/40 rounded-full" />
          </span>
        </h1>

        <p className="font-display font-300 text-xl md:text-2xl text-navy-600 dark:text-navy-200 mt-6 mb-4 tracking-wide">
          {c.tagline}
        </p>

        <p className="text-navy-600 dark:text-navy-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          {c.desc}
        </p>

        <button
          onClick={() => scrollTo("projects")}
          className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-navy-900 font-display font-700 text-base rounded-full hover:bg-brand-dim transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,160,0.3)] active:scale-95"
        >
          {c.cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <button
        onClick={() => scrollTo("team")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-600 dark:text-navy-400 hover:text-brand transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase">{c.scroll}</span>
        <div className="w-5 h-8 border border-current rounded-full flex justify-center pt-1.5 group-hover:border-brand">
          <div className="w-1 h-1.5 rounded-full bg-current animate-bounce" />
        </div>
      </button>
    </section>
  )
}

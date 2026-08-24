import { type Lang, T } from "@/data/translations"
import SectionHead from "@/components/SectionHead"

type Props = { lang: Lang }

const STATS = [
  { n: "5", label: { en: "Team Members", no: "Gruppemedlemmer" } },
  { n: "3+", label: { en: "Prosjekter", no: "Prosjekter" } },
  { n: "2024", label: { en: "Founded", no: "Grunnlagt" } },
  { n: "100%", label: { en: "Passion", no: "Lidenskap" } },
]

export default function TeamSection({ lang }: Props) {
  const c = T[lang].team

  return (
    <section id="team" className="py-24 px-6 bg-navy-100/50 dark:bg-navy-850">
      <div className="max-w-6xl mx-auto">
        <SectionHead title={c.title} sub={c.sub} />

        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-12 border border-navy-700/20 dark:border-navy-700/40 shadow-2xl bg-navy-800">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&h=600&fit=crop&auto=format"
            alt={c.photoLabel}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
            <div>
              <p className="text-white font-display font-700 text-xl">F5 Development</p>
              <p className="text-brand text-sm font-medium">2026 – Present</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand/20 border border-brand/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span className="text-brand text-xs font-semibold">{lang === "en" ? "5 Members" : "5 Medlemmer"}</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-navy-700 dark:text-navy-200 text-lg leading-relaxed">{c.desc}</p>
        </div>

        {/* Team video */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-navy-700/20 dark:border-navy-700/40 shadow-xl bg-navy-800 group">
            {/* Replace the src below with your YouTube embed URL, e.g.:
                https://www.youtube.com/embed/YOUR_VIDEO_ID
                or a direct .mp4 URL for a self-hosted video */}
            <iframe 
              src="https://www.youtube.com/embed/zHmA4o-MDlI?si=PzskUyszWb-0xHlC" 
              title="F5 Development Team Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"/>
          </div>
          <p className="mt-3 text-center text-xs text-navy-500 dark:text-navy-500">
            {lang === "en" ? "Meet the team through our video" : "Møt teamet gjennom vår video"}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div
              key={s.n}
              className="text-center p-6 rounded-xl bg-white/60 dark:bg-navy-800/60 border border-navy-700/10 dark:border-navy-700/30"
            >
              <div className="font-display font-800 text-3xl text-brand mb-1">{s.n}</div>
              <div className="text-sm text-navy-600 dark:text-navy-400">{s.label[lang]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

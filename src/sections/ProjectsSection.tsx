import { useState } from "react"
import { type Lang, T } from "@/data/translations"
import { PROJECTS } from "@/data/projects"
import SectionHead from "@/components/SectionHead"
import SkillPill from "@/components/SkillPill"

type Props = { lang: Lang }

type Rect = { top: number; left: number; width: number; height: number }

export default function ProjectsSection({ lang }: Props) {
  const c = T[lang].projects
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [projectRect, setProjectRect] = useState<Rect | null>(null)
  const [projectExpanded, setProjectExpanded] = useState(false)

  const openProject = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setProjectRect({ top: r.top, left: r.left, width: r.width, height: r.height })
    setProjectExpanded(false)
    setSelectedProject(id)
    requestAnimationFrame(() => requestAnimationFrame(() => setProjectExpanded(true)))
  }

  const closeProject = () => {
    setProjectExpanded(false)
    setTimeout(() => { setSelectedProject(null); setProjectRect(null) }, 480)
  }

  return (
    <section id="projects" className="py-24 px-6 bg-navy-100/50 dark:bg-navy-850">
      <div className="max-w-6xl mx-auto">
        <SectionHead title={c.title} sub={c.sub} />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={(e) => openProject(p.id, e)}
              className="text-left rounded-2xl border border-navy-700/20 dark:border-navy-700/40 bg-white/60 dark:bg-navy-800/60 hover:border-brand/40 hover:shadow-[0_0_24px_rgba(0,229,160,0.08)] transition-all duration-200 group overflow-hidden flex flex-col"
            >
              <div className="relative h-44 bg-navy-800 overflow-hidden shrink-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <h3 className="font-display font-800 text-white text-xl">{p.name}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.statusColor}`}>
                    {p.status[lang]}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-brand text-sm font-medium mb-2">{p.tagline[lang]}</p>
                <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed line-clamp-2 mb-4">
                  {p.desc[lang]}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => <SkillPill key={`${p.id}-${t}`} label={t} />)}
                </div>
                <p className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all duration-200">
                  {c.details}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject !== null && projectRect && (() => {
          const p = PROJECTS.find((x) => x.id === selectedProject)!
          const ease = "top 0.48s cubic-bezier(0.4,0,0.2,1), left 0.48s cubic-bezier(0.4,0,0.2,1), width 0.48s cubic-bezier(0.4,0,0.2,1), height 0.48s cubic-bezier(0.4,0,0.2,1), border-radius 0.48s cubic-bezier(0.4,0,0.2,1)"
          const panelStyle: React.CSSProperties = projectExpanded
            ? { position: "fixed", zIndex: 50, top: 0, left: 0, width: "100%", height: "100%", borderRadius: 0, transition: ease }
            : { position: "fixed", zIndex: 50, top: projectRect.top, left: projectRect.left, width: projectRect.width, height: projectRect.height, borderRadius: 16, transition: ease }

          return (
            <>
              <div
                className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm cursor-pointer"
                style={{ opacity: projectExpanded ? 1 : 0, transition: "opacity 0.48s ease" }}
                onClick={closeProject}
              />
              <div style={panelStyle} className="bg-white dark:bg-navy-800 overflow-hidden shadow-2xl flex flex-col">
                <div className="relative h-56 bg-navy-800 shrink-0">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                    <div>
                      <h2 className="font-display font-800 text-white text-3xl">{p.name}</h2>
                      <p className="text-brand font-medium mt-1">{p.tagline[lang]}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${p.statusColor}`}>
                      {p.status[lang]}
                    </span>
                  </div>
                </div>

                <div
                  className="flex-1 overflow-y-auto"
                  style={{
                    opacity: projectExpanded ? 1 : 0,
                    transform: projectExpanded ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 0.3s ease 0.3s, transform 0.3s ease 0.3s",
                  }}
                >
                  <div className="sticky top-0 z-10 flex justify-end px-6 pt-4 pb-2 bg-white/80 dark:bg-navy-800/80 backdrop-blur-sm">
                    <button
                      onClick={closeProject}
                      className="w-9 h-9 rounded-full flex items-center justify-center border border-navy-700/20 dark:border-navy-700/40 text-navy-500 dark:text-navy-400 hover:text-brand hover:border-brand/40 transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="max-w-2xl mx-auto px-8 md:px-12 pb-16 pt-2">
                    <div className="w-full h-px bg-navy-700/10 dark:bg-navy-700/30 mb-8" />

                    <div className="mb-8">
                      <p className="text-xs font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider mb-4">
                        {lang === "en" ? "About this project" : "Om prosjektet"}
                      </p>
                      <p className="text-navy-700 dark:text-navy-200 leading-relaxed text-lg">{p.desc[lang]}</p>
                    </div>

                    <div className="mb-8">
                      <p className="text-xs font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider mb-4">
                        {c.tech}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span key={`modal-${p.id}-${t}`} className="px-4 py-2 text-sm font-medium rounded-full bg-brand/10 text-brand border border-brand/25">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a href={p.github} className="flex items-center gap-2 px-6 py-3 border border-navy-700/20 dark:border-navy-700/40 text-sm font-semibold text-navy-700 dark:text-navy-200 rounded-xl hover:border-brand/40 hover:text-brand transition-all">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        {c.github}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })()}
      </div>
    </section>
  )
}

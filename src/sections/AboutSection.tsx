import { useEffect, useState } from "react"
import { type Lang, T } from "@/data/translations"
import { MEMBERS } from "@/data/members"
import SectionHead from "@/components/SectionHead"
import SkillPill from "@/components/SkillPill"

type Props = { lang: Lang }

type Rect = { top: number; left: number; width: number; height: number }

export default function AboutSection({ lang }: Props) {
  const c = T[lang].about
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  const [modalRect, setModalRect] = useState<Rect | null>(null)
  const [modalExpanded, setModalExpanded] = useState(false)

  useEffect(() => {
    if (selectedMember === null) return

    const originalOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMember()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedMember])

  const openMember = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setModalRect({ top: r.top, left: r.left, width: r.width, height: r.height })
    setModalExpanded(false)
    setSelectedMember(id)
    requestAnimationFrame(() => requestAnimationFrame(() => setModalExpanded(true)))
  }

  const closeMember = () => {
    setModalExpanded(false)
    setTimeout(() => { setSelectedMember(null); setModalRect(null) }, 480)
  }

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHead title={c.title} sub={c.sub} />

        <div className="flex flex-wrap justify-center gap-6">
          {MEMBERS.map((m) => (
            <button
              key={m.id}
              onClick={(e) => openMember(m.id, e)}
              className="w-72 text-left rounded-2xl border border-navy-700/20 dark:border-navy-700/40 bg-white/60 dark:bg-navy-800/60 hover:border-brand/40 hover:shadow-[0_0_24px_rgba(0,229,160,0.08)] transition-all duration-200 group overflow-hidden flex flex-col"
            >
              <div className={`h-1.5 w-full shrink-0 bg-gradient-to-r ${m.color}`} />
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${m.color} overflow-hidden ring-2 ring-brand/20 group-hover:ring-brand/50 group-hover:scale-105 transition-all duration-200`}>
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
                    />
                  </div>
                </div>
                <div className="text-center mb-3">
                  <h3 className="font-display font-700 text-navy-900 dark:text-white text-lg leading-tight">{m.name}</h3>
                  <p className="text-brand text-sm font-medium mt-0.5">{m.role[lang]}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {m.skills.map((s) => <SkillPill key={`${m.id}-${s}`} label={s} />)}
                </div>

                <div className="flex justify-center gap-2 mb-4" onClick={(e) => e.stopPropagation()}>
                  <a href={`mailto:${m.email}`} title="Email"
                    className="w-8 h-8 rounded-lg flex items-center justify-center border border-navy-700/20 dark:border-navy-700/40 text-navy-500 dark:text-navy-400 hover:text-brand hover:border-brand/40 transition-all">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a href={m.linkedin} title="LinkedIn" target="_blank" rel="noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center border border-navy-700/20 dark:border-navy-700/40 text-navy-500 dark:text-navy-400 hover:text-brand hover:border-brand/40 transition-all">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href={m.github} title="GitHub" target="_blank" rel="noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center border border-navy-700/20 dark:border-navy-700/40 text-navy-500 dark:text-navy-400 hover:text-brand hover:border-brand/40 transition-all">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a href={m.website} title="Website" target="_blank" rel="noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center border border-navy-700/20 dark:border-navy-700/40 text-navy-500 dark:text-navy-400 hover:text-brand hover:border-brand/40 transition-all">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" d="M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                    </svg>
                  </a>
                </div>

                <p className="flex items-center justify-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all duration-200">
                  {c.readMore}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Member Modal */}
        {selectedMember !== null && modalRect && (() => {
          const m = MEMBERS.find((x) => x.id === selectedMember)!
          const ease = "top 0.48s cubic-bezier(0.4,0,0.2,1), left 0.48s cubic-bezier(0.4,0,0.2,1), width 0.48s cubic-bezier(0.4,0,0.2,1), height 0.48s cubic-bezier(0.4,0,0.2,1), border-radius 0.48s cubic-bezier(0.4,0,0.2,1)"
          const panelStyle: React.CSSProperties = modalExpanded
            ? { position: "fixed", zIndex: 50, top: 0, left: 0, width: "100%", height: "100%", borderRadius: 0, transition: ease }
            : { position: "fixed", zIndex: 50, top: modalRect.top, left: modalRect.left, width: modalRect.width, height: modalRect.height, borderRadius: 16, transition: ease }

          return (
            <>
              <div
                className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm cursor-pointer"
                style={{ opacity: modalExpanded ? 1 : 0, transition: "opacity 0.48s ease" }}
                onClick={closeMember}
              />
              <div style={panelStyle} className="bg-white dark:bg-navy-800 overflow-hidden shadow-2xl">
                <div className={`h-1.5 bg-gradient-to-r ${m.color} shrink-0`} />
                <div
                  className="h-full overflow-y-auto"
                  style={{
                    opacity: modalExpanded ? 1 : 0,
                    transform: modalExpanded ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 0.3s ease 0.3s, transform 0.3s ease 0.3s",
                  }}
                >
                  <div className="sticky top-0 z-10 flex justify-end px-6 pt-5 pb-2 bg-white/80 dark:bg-navy-800/80 backdrop-blur-sm">
                    <button
                      onClick={closeMember}
                      className="w-9 h-9 rounded-full flex items-center justify-center border border-navy-700/20 dark:border-navy-700/40 text-navy-500 dark:text-navy-400 hover:text-brand hover:border-brand/40 transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="max-w-2xl mx-auto px-8 md:px-12 pb-16 pt-4">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
                      <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${m.color} overflow-hidden shrink-0 ring-2 ring-brand/30`}>
                        <img
                          src={m.photo}
                          alt={m.name}
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <h2 className="font-display font-800 text-4xl text-navy-900 dark:text-white">{m.name}</h2>
                        <p className="text-brand font-semibold mt-1 text-lg">{m.role[lang]}</p>
                        <a href={`mailto:${m.email}`} className="text-sm text-navy-500 dark:text-navy-400 hover:text-brand transition-colors mt-1 block">
                          {m.email}
                        </a>
                      </div>
                    </div>

                    <div className="w-full h-px bg-navy-700/10 dark:bg-navy-700/30 mb-10" />

                    <div className="mb-10">
                      <p className="text-xs font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider mb-4">
                        {lang === "en" ? "About" : "Om"}
                      </p>
                      <p className="text-navy-700 dark:text-navy-200 leading-relaxed text-lg">{m.bio[lang]}</p>
                    </div>

                    <div className="mb-10">
                      <p className="text-xs font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider mb-4">
                        {lang === "en" ? "Skills" : "Ferdigheter"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {m.skills.map((s) => (
                          <span key={`modal-${m.id}-${s}`} className="px-4 py-2 text-sm font-medium rounded-full bg-brand/10 text-brand border border-brand/25">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a href={`mailto:${m.email}`} className="flex items-center gap-2 px-6 py-3 bg-brand text-navy-900 font-display font-700 rounded-xl hover:bg-brand-dim transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {lang === "en" ? "Send Email" : "Send e-post"}
                      </a>
                      <a href={m.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 border border-navy-700/20 dark:border-navy-700/40 text-sm font-semibold text-navy-700 dark:text-navy-200 rounded-xl hover:border-brand/40 hover:text-brand transition-all">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        LinkedIn
                      </a>
                      <a href={m.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 border border-navy-700/20 dark:border-navy-700/40 text-sm font-semibold text-navy-700 dark:text-navy-200 rounded-xl hover:border-brand/40 hover:text-brand transition-all">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                        GitHub
                      </a>
                      <a href={m.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 border border-navy-700/20 dark:border-navy-700/40 text-sm font-semibold text-navy-700 dark:text-navy-200 rounded-xl hover:border-brand/40 hover:text-brand transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" d="M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
                        {lang === "en" ? "Website" : "Nettside"}
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

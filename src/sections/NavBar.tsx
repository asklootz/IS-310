import { useState } from "react"
import { type Lang } from "@/data/translations"
import F5Logo from "@/components/F5Logo"

type NavLink = { key: string; label: string }

type Props = {
  lang: Lang
  setLang: (l: Lang) => void
  dark: boolean
  setDark: (d: boolean) => void
  activeSection: string
  scrollTo: (id: string) => void
  navLinks: NavLink[]
}

export default function NavBar({ lang, setLang, dark, setDark, activeSection, scrollTo, navLinks }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScrollTo = (id: string) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-navy-700/30 dark:border-navy-700/60 backdrop-blur-md bg-navy-50/80 dark:bg-navy-900/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleScrollTo("home")} className="flex items-center gap-3 group">
          <img src="https://raw.githubusercontent.com/asklootz/IS-310/fe80bd338c77effe7718ae475a51fca3599c7c9b/src/images/F5-Small-Logo-With-Text.svg" alt="F5 Logo" className="logo-hue w-15 h-15" />
          <div className="hidden sm:block">
            <div className="font-display font-700 text-sm leading-none text-navy-900 dark:text-navy-50">F5 Development</div>
            <div className="text-xs text-brand leading-none mt-0.5">Refreshing Development</div>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l.key}
              onClick={() => handleScrollTo(l.key)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                ${activeSection === l.key ? "text-brand" : "text-navy-600 dark:text-navy-200 hover:text-brand"}`}
            >
              {l.label}
              <span
                className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-brand transition-all duration-300
                  ${activeSection === l.key ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
                style={{ transformOrigin: "center" }}
              />
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <div className="flex items-center bg-navy-700/20 dark:bg-navy-800 rounded-full p-0.5 border border-navy-700/30">
            {(["en", "no"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200
                  ${lang === l ? "bg-brand text-navy-900 shadow-sm" : "text-navy-600 dark:text-navy-300 hover:text-brand"}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-navy-700/30 hover:border-brand/50 text-navy-600 dark:text-navy-300 hover:text-brand transition-all"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" strokeWidth="2" />
                <path strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-navy-700/30 hover:border-brand/50 text-navy-600 dark:text-navy-300 hover:text-brand transition-all"
          >
            {menuOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-navy-700/30 bg-navy-50/95 dark:bg-navy-900/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <button
              key={l.key}
              onClick={() => handleScrollTo(l.key)}
              className={`text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors
                ${activeSection === l.key ? "text-brand bg-brand/10" : "text-navy-600 dark:text-navy-200"}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

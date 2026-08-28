import { type Lang, T } from "@/data/translations"
import F5Logo from "@/components/F5Logo"

type NavLink = { key: string; label: string }
type Props = { lang: Lang; scrollTo: (id: string) => void; navLinks: NavLink[] }

export default function FooterSection({ lang, scrollTo, navLinks }: Props) {
  const c = T[lang].footer

  return (
    <footer className="border-t border-navy-700/20 dark:border-navy-700/40 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="https://raw.githubusercontent.com/asklootz/IS-310/fe80bd338c77effe7718ae475a51fca3599c7c9b/src/images/F5-Small-Logo-With-Text.svg" alt="F5 Logo" className="logo-hue w-15 h-15" />
          <span className="font-display font-600 text-sm text-navy-900 dark:text-navy-100">F5 Development</span>
        </div>
        <p className="text-xs text-navy-500 dark:text-navy-500">
          © {new Date().getFullYear()} F5 Development. {c.rights}
        </p>
        <div className="flex gap-4">
          {navLinks.map((l) => (
            <button
              key={l.key}
              onClick={() => scrollTo(l.key)}
              className="text-xs text-navy-500 dark:text-navy-500 hover:text-brand transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}

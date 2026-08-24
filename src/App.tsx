import { useState, useEffect } from "react"
import { type Lang, T } from "@/data/translations"
import NavBar from "@/sections/NavBar"
import HeroSection from "@/sections/HeroSection"
import TeamSection from "@/sections/TeamSection"
import AboutSection from "@/sections/AboutSection"
import ProjectsSection from "@/sections/ProjectsSection"
import ContactSection from "@/sections/ContactSection"
import FooterSection from "@/sections/FooterSection"

export default function App() {
  const [lang, setLang] = useState<Lang>("no")
  const [dark, setDark] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sectionIds = ["home", "team", "about", "projects", "contact"]
    const onScroll = () => {
      const threshold = window.innerHeight * 0.3
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const c = T[lang]
  const navLinks = [
    { key: "home", label: c.nav.home },
    { key: "team", label: c.nav.team },
    { key: "about", label: c.nav.about },
    { key: "projects", label: c.nav.projects },
    { key: "contact", label: c.nav.contact },
  ]

  return (
    <div className={`${dark ? "dark" : ""} min-h-screen font-body`}>
      <div className="min-h-screen bg-navy-50 dark:bg-navy-900 text-navy-900 dark:text-navy-100 transition-colors duration-300">
        <NavBar
          lang={lang}
          setLang={setLang}
          dark={dark}
          setDark={setDark}
          activeSection={activeSection}
          scrollTo={scrollTo}
          navLinks={navLinks}
        />
        <HeroSection lang={lang} scrollTo={scrollTo} />
        <TeamSection lang={lang} />
        <AboutSection lang={lang} />
        <ProjectsSection lang={lang} />
        <ContactSection lang={lang} />
        <FooterSection lang={lang} scrollTo={scrollTo} navLinks={navLinks} />
      </div>
    </div>
  )
}

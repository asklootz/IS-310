export type Project = {
  id: number
  name: string
  tagline: { en: string; no: string }
  desc: { en: string; no: string }
  tech: string[]
  status: { en: string; no: string }
  statusColor: string
  github: string
  visit: string
  image: string
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "StudySync",
    tagline: { en: "Collaborative Study Platform", no: "Kollaborativ Studieplattform" },
    desc: {
      en: "A real-time collaborative platform designed for students to organize study sessions, share notes, and track academic progress together. Features include live document editing, Pomodoro timers, and AI-powered summaries.",
      no: "En sanntids kollaborativ plattform designet for studenter som vil organisere studieøkter, dele notater og spore akademisk fremgang. Funksjoner inkluderer live dokumentredigering, Pomodoro-timer og AI-drevne sammendrag.",
    },
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    status: { en: "In Progress", no: "Under utvikling" },
    statusColor: "bg-brand/20 text-brand",
    github: "#",
    visit: "#",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "EcoTrack",
    tagline: { en: "Environmental Impact Dashboard", no: "Miljøpåvirknings Dashboard" },
    desc: {
      en: "An analytics dashboard helping organizations measure, track, and reduce their carbon footprint. Integrates with energy meters, transport APIs, and generates detailed sustainability reports.",
      no: "Et analysedashboard som hjelper organisasjoner med å måle, spore og redusere sitt karbonfotavtrykk. Integreres med energimålere, transport-APIer og genererer detaljerte bærekraftsrapporter.",
    },
    tech: ["Vue.js", "Python", "FastAPI", "Chart.js"],
    status: { en: "Completed", no: "Fullført" },
    statusColor: "bg-emerald-500/20 text-emerald-400",
    github: "#",
    visit: "#",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "HealthBridge",
    tagline: { en: "Healthcare Appointment System", no: "Helsetjeneste Bestillingssystem" },
    desc: {
      en: "A streamlined appointment booking system connecting patients with healthcare providers. Includes smart scheduling, automatic reminders, telehealth video support, and full GDPR compliance.",
      no: "Et strømlinjeformet bestillingssystem som kobler pasienter med helsepersonell. Inkluderer smart planlegging, automatiske påminnelser, telemedisin-videostøtte og full GDPR-overholdelse.",
    },
    tech: ["Next.js", "PostgreSQL", "Prisma", "WebRTC"],
    status: { en: "Planning", no: "Planlegging" },
    statusColor: "bg-blue-500/20 text-blue-400",
    github: "#",
    visit: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "CityFlow",
    tagline: { en: "Urban Mobility Dashboard", no: "Urbant Mobilitets Dashboard" },
    desc: {
      en: "A smart city dashboard visualizing real-time public transport data, bike-sharing availability, and pedestrian flow across Oslo. Built in collaboration with city planners to improve urban mobility decisions.",
      no: "Et smartby-dashboard som visualiserer sanntids kollektivtransportdata, bysykkel-tilgjengelighet og fotgjengerflyt i Oslo. Bygget i samarbeid med byplanleggere for å forbedre urbane mobilitetsbeslutninger.",
    },
    tech: ["React", "Mapbox GL", "WebSocket", "TimescaleDB"],
    status: { en: "Completed", no: "Fullført" },
    statusColor: "bg-emerald-500/20 text-emerald-400",
    github: "#",
    visit: "#",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop&auto=format",
  },
]

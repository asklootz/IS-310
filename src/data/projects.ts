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
    name: "Navisafe",
    tagline: { en: "Webapplication for helicopter pilots to register air obstacles", no: "Webapplikasjon for helikopterpiloter for å registrere luftihindringer" },
    desc: {
      en: "Web application for helicopter pilots to register air obstacles and share them with other pilots. The application features a map interface, real-time updates, live GPS-tracking and a database of reported obstacles.",
      no: "Webapplikasjon for helikopterpiloter for å registrere luftihindringer og dele dem med andre piloter. Applikasjonen har et kartgrensesnitt, sanntidsoppdateringer, live GPS-sproring og en database over rapporterte hindringer.",
    },
    tech: ["ASP.NET Core", ".NET Aspire", "Bootstrap CSS", "MariaDB/MysQL", "Leaflet.js", "OpenStreetMap", "Docker", "Git/Github"],
    status: { en: "Completed", no: "Fullført" },
    statusColor: "bg-brand/20 text-brand",
    github: "https://github.com/asklootz/NaviSafe",
    visit: "#",
    image: "https://camo.githubusercontent.com/07c0c202daa57c197a334b2e1512f7bf7ddd6494e7d9f16ab8b6f500458892ab/68747470733a2f2f692e706f7374696d672e63632f72464262785871722f4e6176692d536166652d6c6f676f2e706e67",
  },
  {
    id: 2,
    name: "Beredskart",
    tagline: { en: "Application to find the nearest shelter in an emergency", no: "Applikasjon for å finne nærmeste tilfluktssted i en nødsituasjon" },
    desc: {
      en: "A web application helping users find the nearest shelter in an emergency. Features include real-time location tracking with navigation, emergency alerts, call in to report emergencies, and a database of available shelters. It has an admin-dashboard for managing shelters and monitoring usage, sending emergency responders to places that have emergencies and track the responders.",
      no: "En webapplikasjon som hjelper brukere med å finne nærmeste tilfluktssted i en nødsituasjon. Funksjoner inkluderer sanntids posisjonssporing, nødalarm, innrapportering av nødsituasjoner, og en database over tilgjengelige tilfluktssteder. Den har et administrasjonsdashboard for å administrere tilfluktssteder og overvåke bruken, samt sende nødetater til steder som har nødsituasjoner og spore nødetatene.",
    },
    tech: ["Vite", "React", "Node.js", "Docker", "PostgreSQL/PostGIS", "Mapbox GL", "WebSocket", "Valhalla API"],
    status: { en: "Completed", no: "Fullført" },
    statusColor: "bg-emerald-500/20 text-emerald-400",
    github: "https://github.com/asklootz/IS-218_Gruppe4",
    visit: "#",
    image: "https://private-user-images.githubusercontent.com/178719866/584719735-dbccd2e6-07a7-4acb-90e6-77d6c96b23ec.webp?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODgwNjcxMzgsIm5iZiI6MTc4ODA2NjgzOCwicGF0aCI6Ii8xNzg3MTk4NjYvNTg0NzE5NzM1LWRiY2NkMmU2LTA3YTctNGFjYi05MGU2LTc3ZDZjOTZiMjNlYy53ZWJwP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDgzMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA4MzBUMDUxMzU4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZTZkMzJlZmFjNTg5ZDFjOGI5YTIwZjYwZGU0NmMwZTM5MTdkMjI4YmRjY2MwZDMyMWUwMGZjOTEwMzQwOGZhMiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGd2VicCJ9.t5VWfLBtQn5V0yDURAuGYP94R9kHSGePFGjNQ_GDbsQ",
  },
  {
    id: 3,
    name: "F5 Development Homepage",
    tagline: { en: "F5 Development Homepage", no: "F5 Utvikling Hjemmeside" },
    desc: {
      en: "A modern, responsive, and interactive homepage for F5 Development. Built for the class IS-310 at the University of Agder, this project showcases our skills in frontend and backend development, design, and DevOps. It features a dynamic team section, project showcase, contact form, and smooth scrolling navigation.",
      no: "En moderne, responsiv og interaktiv hjemmeside for F5 Utvikling. Bygget for faget IS-310 ved Universitetet i Agder, dette prosjektet viser våre ferdigheter innen frontend- og backend-utvikling, design og DevOps. Den har en dynamisk teamseksjon, prosjektvisning, kontaktskjema og jevn rulle-navigasjon.",
    },
    tech: ["Node.js", "React", "Github Actions", "Vite", "Figma", "Agentic AI"],
    status: { en: "Completed", no: "Fullført" },
    statusColor: "bg-blue-500/20 text-blue-400",
    github: "https://github.com/asklootz/IS-310",
    visit: "https://asklootz.github.io/IS-310/",
    image: "https://github.com/asklootz/IS-310/blob/main/src/images/Gruppe-Bilde.png?raw=true",
  },
  /*{
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
*/ 
]

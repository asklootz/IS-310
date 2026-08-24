export type Member = {
  id: number
  name: string
  role: { en: string; no: string }
  bio: { en: string; no: string }
  email: string
  linkedin: string
  github: string
  website: string
  skills: string[]
  avatar: string
  photo: string
  color: string
}

export const MEMBERS: Member[] = [
  {
    id: 1,
    name: "Jimmy Hai Trinh",
    role: { en: "Title", no: "Gruppeleder" },
    bio: { en: "BIO", no: "rosjektleder, Fullstack-utvikler og Database Management. Utdanning: Bachelor i elektronisk musikk og Master i Music Business & Management" },
    email: "jimmyt18@uia.no",
    linkedin: "#",
    github: "#",
    website: "#",
    skills: ["C#", "Python", "TypeScript", "PostgreSQL", "MySQL", "Javascript", "Supabase", "PHP"],
    avatar: "JT",
    photo: "https://pbs.twimg.com/media/GK1454Ob0AA5d8M.jpg",
    color: "from-blue-500 to-brand",
  },
  {
    id: 2,
    name: "Synne Kyrjebø",
    role: { en: "Frontend Developer & Designer", no: "Frontend Utvikler & Designer" },
    bio: { en: "BIO", no: "Hei! Jeg heter Synne Kyrkjebø, er 22 år og kommer fra Sandefjord. Jeg går siste året på bachelor i IT og informasjonssystemer ved Universitetet i Agder. Det siste semesteret har jeg vært på utveksling ved East Tennessee State University i USA, hvor jeg blant annet tok fag innen kunstig intelligens og markedsføring. Ved siden av studiene har jeg jobbet som studentmentor og læringsassistent for førsteårsstudenter på IT og informasjonssystemer. Jeg har også erfaring fra et internship som utvikler hos Komplett, hvor jeg jobbet i team med både frontend- og backendutvikling. Jeg er spesielt interessert i frontendutvikling og liker å skape moderne, brukervennlige og visuelt gode løsninger. Jeg har blant annet erfaring med React og Tailwind CSS, og ønsker å utvikle meg videre innen frontend, design og brukeropplevelse." },
    email: "synnek@uia.no",
    linkedin: "https://www.linkedin.com/in/synne-kyrkjeboe/",
    github: "https://github.com/synnekyrkjebo",
    website: "#",
    skills: ["Figma", "React", "Tailwind CSS", "C#/.NET", "UI/UX", "AI", "Team Work", "Git", "Jira"],
    avatar: "SK",
    photo: "https://pbs.twimg.com/media/GK1454Ob0AA5d8M.jpg",
    color: "from-yellow-500 to-brand",
  },
  {
    id: 3,
    name: "Ask Lootz",
    role: { en: "Backend Developer", no: "Backend Utvikler" },
    bio: { en: "BIO", no: "BIO" },
    email: "asklootz@outlook.com",
    linkedin: "https://www.linkedin.com/in/ask-lootz-17a6651b6/",
    github: "https://github.com/asklootz",
    website: "https://asklootz.github.io/",
    skills: ["C#/NET", "Docker", "Git/Github", "Python", "PostgreSQL", "MySQL", "Node.js", "TypeScript", "React", "Tailwind CSS", "UI/UX", "Team Work", "Communication", "Cisco", "Linux", "Windows Server", "Networking", "GIS", "Data Analysis"],
    avatar: "AL",
    photo: "https://pbs.twimg.com/media/GK1454Ob0AA5d8M.jpg",
    color: "from-pink-500 to-brand",
  },
  {
    id: 4,
    name: "Mina Rebecca Remseth",
    role: { en: "UX/UI Designer", no: "UX/UI Designer" },
    bio: {
      en: "Sofia puts users at the center of everything. Through research, prototyping, and iteration she ensures F5's products are intuitive and delightful.",
      no: "Sofia setter brukerne i sentrum av alt. Gjennom forskning, prototyping og iterasjon sikrer hun at F5s produkter er intuitive og gledelige.",
    },
    email: "sofia@f5dev.no",
    linkedin: "#",
    github: "#",
    website: "#",
    skills: ["Figma", "User Research", "Prototyping", "Accessibility"],
    avatar: "MR",
    photo: "https://pbs.twimg.com/media/GK1454Ob0AA5d8M.jpg",
    color: "from-violet-500 to-brand",
  },
  {
    id: 5,
    name: "Rikke",
    role: { en: "DevOps Engineer", no: "DevOps Ingeniør" },
    bio: {
      en: "Thomas keeps the lights on. He architects CI/CD pipelines, cloud infrastructure, and ensures everything deploys smoothly — every time.",
      no: "Thomas holder hjulene i gang. Han arkitekterer CI/CD-pipelines, skyinfrastruktur og sikrer at alt deployes problemfritt — hver gang.",
    },
    email: "thomas@f5dev.no",
    linkedin: "#",
    github: "#",
    website: "#",
    skills: ["AWS", "Kubernetes", "Terraform", "GitHub Actions"],
    avatar: "TO",
    photo: "https://pbs.twimg.com/media/GK1454Ob0AA5d8M.jpg",
    color: "from-red-500 to-brand",
  },
]

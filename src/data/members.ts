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
    role: { en: "Project Manager", no: "Gruppeleder" },
    bio: { en: "Project manager, fullstack developer, and database management. Education: Bachelor's in Electronic Music and Master's in Music Business & Management.", no: "Jeg er en 27 år gammel student med en tverrfaglig bakgrunn innen musikk og teknologi. Siden 2018 har jeg vært i kontinuerlig utdanning, noe som har gitt meg både faglig dybde og sterk gjennomføringsevne.\nJeg har en bachelorgrad i elektronisk musikk og en mastergrad i Music Business & Management. Gjennom disse studiene har jeg utviklet en god forståelse for kreativt arbeid, prosjektstyring og samarbeid i dynamiske miljøer. I dag studerer jeg IT og informasjonssystemer ved Universitetet i Agder, hvor jeg bygger kompetanse innen systemutvikling, teknologi og digitale løsninger." },
    email: "jimmyt18@uia.no",
    linkedin: "https://www.linkedin.com/in/jimmy-trinh-578951264/",
    github: "https://github.com/jimmyht98",
    website: "https://jimmyht98.github.io/Portef-lje/",
    skills: ["C#", "Python", "TypeScript", "PostgreSQL", "MySQL", "Javascript", "Supabase", "PHP", "Docker", "Git/Github", "Node.js", "React", "Tailwind CSS", "UI/UX", "ASP.NET Core", "Azure"],
    avatar: "JT",
    photo: "https://github.com/asklootz/IS-310/blob/main/src/images/Jimmy-Bilde.png?raw=true",
    color: "from-blue-500 to-brand",
  },
  {
    id: 2,
    name: "Synne Kyrjebø",
    role: { en: "Frontend Developer & Designer", no: "Frontend Utvikler & Designer" },
    bio: { en: "Hi! My name is Synne Kyrkjebø, I am 22 years old and from Sandefjord. I am in my final year of a bachelor's degree in IT and information systems at the University of Agder. Last semester, I was on exchange at East Tennessee State University in the USA, where I took courses in artificial intelligence and marketing. Besides my studies, I have worked as a student mentor and teaching assistant for first-year students in IT and information systems. I also have experience from an internship as a developer at Komplett, where I worked in a team with both frontend and backend development. I am particularly interested in frontend development and enjoy creating modern, user-friendly, and visually appealing solutions. I have experience with React and Tailwind CSS, and I wish to further develop my skills in frontend, design, and user experience.", no: "Hei! Jeg heter Synne Kyrkjebø, er 22 år og kommer fra Sandefjord. Jeg går siste året på bachelor i IT og informasjonssystemer ved Universitetet i Agder. Det siste semesteret har jeg vært på utveksling ved East Tennessee State University i USA, hvor jeg blant annet tok fag innen kunstig intelligens og markedsføring. Ved siden av studiene har jeg jobbet som studentmentor og læringsassistent for førsteårsstudenter på IT og informasjonssystemer. Jeg har også erfaring fra et internship som utvikler hos Komplett, hvor jeg jobbet i team med både frontend- og backendutvikling. Jeg er spesielt interessert i frontendutvikling og liker å skape moderne, brukervennlige og visuelt gode løsninger. Jeg har blant annet erfaring med React og Tailwind CSS, og ønsker å utvikle meg videre innen frontend, design og brukeropplevelse." },
    email: "synnek@uia.no",
    linkedin: "https://www.linkedin.com/in/synne-kyrkjeboe/",
    github: "https://github.com/synnekyrkjebo",
    website: "#",
    skills: ["Figma", "React", "Tailwind CSS", "C#/.NET", "UI/UX", "AI", "Team Work", "Git", "Jira"],
    avatar: "SK",
    photo: "https://github.com/asklootz/IS-310/blob/main/src/images/Synne-Bilde.png?raw=true",
    color: "from-yellow-500 to-brand",
  },
  {
    id: 3,
    name: "Ask Lootz",
    role: { en: "Fullstack Developer & System Architect", no: "Fullstack Utvikler & Systemarkitekt" },
    bio: { en: "My name is Ask and I am a student at the University of Agder, with a strong interest in technology. I have worked in IT for over 4 years, starting as an apprentice and obtaining a vocational certificate in ICT. Before studying at UiA, I specialized in network and system administration with a CCNA certification. Since being at UiA, I have developed a greater interest in development and data security. I have worked as a technician, IT consultant, teaching assistant in the course \"Object-Oriented Programming,\" and now work as a SOC analyst. I enjoy trying new technology and working on varied tasks.", no: "Jeg heter Ask og er student på UiA, med stor interesse innenfor teknologi. Jeg har jobbet innenfor IT i over 4 år og startet som lærling og tok fagbrev innenfor IKT. Før studiet på UiA, spesialiserte jeg meg innenfor nettverks- og systemdrift med en CCNA-sertifisering. Etter jeg har vært på UiA har jeg fått større interesse innenfor utvikling og data-sikkerhet. Jeg har jobbet som tekniker, IT-konsulent, lærer assistent i faget \"Objektorientert programmering\" og jobber nå som SOC-analytiker. Veldig glad i å prøve ny teknologi og jobbe med varierte oppgaver. " },
    email: "asklootz@outlook.com",
    linkedin: "https://www.linkedin.com/in/ask-lootz-17a6651b6/",
    github: "https://github.com/asklootz",
    website: "https://asklootz.github.io/",
    skills: ["C#/NET", "Docker", "Git/Github", "Python", "PostgreSQL", "MySQL", "Node.js", "TypeScript", "React", "Tailwind CSS", "UI/UX", "Team Work", "Communication", "Cisco", "Linux", "Windows Server", "Networking", "GIS", "Data Analysis"],
    avatar: "AL",
    photo: "https://github.com/asklootz/IS-310/blob/main/src/images/Ask-Bilde.png?raw=true",
    color: "from-pink-500 to-brand",
  },
  {
    id: 4,
    name: "Mina Rebecca Remseth",
    role: { en: "Scrum master & UX/UI Designer", no: "Scrum master & UX/UI Designer" },
    bio: {
      en: "Hi, my name is Mina, I am 22 years old and I come from Klepp. I study at the University of Agder, and last semester I was on exchange at Pusan National University in South Korea. There, I focused on administrative and technology-related subjects, including IT Business and Innovation and Technology Management. I have a particular interest in UX design, UI design, digitalization, and how technology can be used to improve and simplify everyday life. I thrive in interdisciplinary teams, where I can contribute both creatively and analytically. In this project, I have the role of UX designer and Scrum Master, which combines my interests in user experience, structured workflow, and continuous improvement.",
      no: "Jeg heter Mina, er 22 år og kommer fra Klepp. Jeg studerer ved Universitetet i Agder, og i forrige semester var jeg på utveksling ved Pusan National University i Sør-Korea. Der fordypet jeg meg i administrative og teknologirelaterte fag, blant annet IT Business og Innovation and Technology Management. Jeg har en særlig interesse for UX-design, UI-design, digitalisering og hvordan teknologi kan brukes til å forbedre og forenkle hverdagen. Jeg trives godt i tverrfaglige team, hvor jeg kan bidra både kreativt og analytisk. I dette prosjektet har jeg rollen som UX-designer og Scrum Master, noe som kombinerer mine interesser for brukeropplevelse, strukturert arbeidsflyt og kontinuerlig forbedring.",
    },
    email: "minarr@uia.no",
    linkedin: "https://www.linkedin.com/in/mina-rebecca-remseth-b02607350/",
    github: "https://github.com/minaremseth",
    website: "#",
    skills: ["Figma", "Trello/Jira", "CSS/Tailwind CSS", "HTML", "React", "UI/UX", "Team Work", "Communication"],
    avatar: "MR",
    photo: "https://github.com/asklootz/IS-310/blob/main/src/images/Mina-Bilde.png?raw=true",
    color: "from-violet-500 to-brand",
  },
  {
    id: 5,
    name: "Rikke Skaar Krauss",
    role: { en: "Frontend Developer & UI/UX Designer", no: "Frontend Utvikler & UI/UX Designer" },
    bio: {
      en: "Hi\nMy name is Rikke, I am 26 years old and in my final year of a bachelor's degree in IT and information systems at the University of Agder. Alongside my studies, I work as a student mentor and teaching assistant, where I help students with both academic questions and collaboration in project groups. \n\nI am particularly interested in UX/UI design, digitalization, and how technology can be used to create simple and user-friendly solutions. I thrive best with the creative and visual parts of the development process, such as idea development, user insight, prototyping, and design. I also enjoy working in teams, creating structure, and contributing to good communication and progress in projects.",
      no: "Hei\nJeg heter Rikke, og er 26 år og går siste år på bachelor i IT og informasjonssystemer ved Universitet i Agder. Ved siden av studiene jobber jeg som studentmentor og læringsassitent, hvor jeg hjelper studenter med både faglige spørsmål og samarbeid i prosjektgrupper. \n\nJeg er spesielt interessert i UX/UI design, digitalisering og hvordan teknologi kan brukes til å skape enkle og brukervennlige løsninger. Jeg trives best med de kreative og visuelle delene av utviklingsprosessen, som ideutvikling, brukerinnsikt, prototyping og design. Jeg liker også å jobbe i team, skape struktur og bidra til en god kommunikasjon og fremdrift i prosjekter.",
    },
    email: "rikkekrauss@icloud.com",
    linkedin: "https://www.linkedin.com/in/rikke-krauss-910953432",
    github: "https://github.com/Rikkekrauss",
    website: "#",
    skills: ["Figma", "UX/UI", "Prototyping", "React", "QA", "Github", "Team Work", "Communication"],
    avatar: "RSK",
    photo: "https://github.com/asklootz/IS-310/blob/main/src/images/Rikke-Bilde.png?raw=true",
    color: "from-red-500 to-brand",
  },
]

export type Lang = "pt" | "en";
export type Bi = { pt: string; en: string };

export const profile = {
  name: "Gustavo Vieira",

  photo: "",
  links: {
    email: "gustavofvieira5@gmail.com",
    whatsapp: "5531989575955",
    linkedin: "https://www.linkedin.com/in/gustavovieira21",
    github: "https://github.com/vGustav1",
  },
  facts: [
    { k: { pt: "Curso", en: "Degree" }, v: { pt: "Engenharia de Software", en: "Software Engineering" } },
    { k: { pt: "Período", en: "Semester" }, v: { pt: "2º", en: "2nd" } },
    { k: { pt: "Instituição", en: "University" }, v: { pt: "PUC Minas", en: "PUC Minas" } },
    { k: { pt: "Disponibilidade", en: "Availability" }, v: { pt: "Aberto a estágio", en: "Open to internships" } },
  ],
  about: [
    {
      pt: "Sou formado em Análise e Desenvolvimento de Sistemas pela UniBH (2023–2025) e atualmente curso Engenharia de Software na PUC Minas.",
      en: "I hold a degree in Systems Analysis and Development from UniBH (2023–2025) and I am currently studying Software Engineering at PUC Minas.",
    },
    {
      pt: "Meu objetivo é conseguir meu primeiro estágio como desenvolvedor full stack e continuar evoluindo na criação de aplicações completas, do back-end ao front-end.",
      en: "My goal is to land my first internship as a full stack developer and keep growing in building complete applications, from back-end to front-end.",
    },
  ] as Bi[],
  education: [
    { title: { pt: "Engenharia de Software · PUC Minas", en: "Software Engineering · PUC Minas" }, when: { pt: "2026 — 2030", en: "2026 — 2030" } },
    { title: { pt: "Análise e Desenvolvimento de Sistemas · UniBH", en: "Systems Analysis and Development · UniBH" }, when: { pt: "2023 — 2025", en: "2023 — 2025" } },
  ],
};

export type Skill = {
  id: string;
  name: string;
  category: Bi;
  color: string;
  orbit: 0 | 1 | 2;
  angle: number;
  size: number;
  status: "used" | "learning";
  usedIn: Bi[];
  time: Bi;
};

export const skills: Skill[] = [
  { id: "java", name: "Java", category: { pt: "Linguagem", en: "Language" }, color: "#FF8A50", orbit: 0, angle: 205, size: 54, status: "used", usedIn: [{ pt: "[Projeto]", en: "[Project]" }], time: { pt: "[ex.: 1 ano]", en: "[e.g. 1 year]" } },
  { id: "git", name: "Git & GitHub", category: { pt: "Ferramenta", en: "Tool" }, color: "#FF2E88", orbit: 0, angle: 25, size: 46, status: "used", usedIn: [{ pt: "Todos os projetos", en: "Every project" }], time: { pt: "[ex.: 1 ano]", en: "[e.g. 1 year]" } },
  { id: "js", name: "JavaScript", category: { pt: "Linguagem", en: "Language" }, color: "#FFE36E", orbit: 1, angle: 130, size: 50, status: "used", usedIn: [{ pt: "Este portfólio", en: "This portfolio" }], time: { pt: "[ex.: 6 meses]", en: "[e.g. 6 months]" } },
  { id: "python", name: "Python", category: { pt: "Linguagem", en: "Language" }, color: "#5AA9FF", orbit: 1, angle: 315, size: 48, status: "used", usedIn: [{ pt: "[Projeto]", en: "[Project]" }], time: { pt: "[ex.: 6 meses]", en: "[e.g. 6 months]" } },
  { id: "mysql", name: "MySQL", category: { pt: "Banco de dados", en: "Database" }, color: "#2EF2FF", orbit: 2, angle: 60, size: 46, status: "used", usedIn: [{ pt: "[Projeto]", en: "[Project]" }], time: { pt: "[ex.: 3 meses]", en: "[e.g. 3 months]" } },
  { id: "spring", name: "Spring Boot", category: { pt: "Back-end", en: "Back-end" }, color: "#6EE7A0", orbit: 2, angle: 240, size: 48, status: "used", usedIn: [{ pt: "[Projeto]", en: "[Project]" }], time: { pt: "[ex.: 3 meses]", en: "[e.g. 3 months]" } },
];

export type Project = {
  year: string;
  when: Bi;
  context: Bi;
  name: Bi;
  description: Bi;
  tech: string[];
  repo: string;

  gif?: string;
};

export const projects: Project[] = [
  {
    year: "2026",
    when: { pt: "1º semestre", en: "1st semester" },
    context: { pt: "EM EQUIPE", en: "TEAM PROJECT" },
    name: { pt: "Spaceshi.py", en: "Spaceshi.py" },
    description: {
      pt: "Jogo de nave em Python inspirado em Star Wars. O jogador pilota um caça, destrói ondas de inimigos e enfrenta um Destróier como chefe. A dificuldade aumenta com a pontuação, e o jogo tem barra de vida, trilha e efeitos sonoros, recorde salvo em arquivo e testes automatizados da lógica.",
      en: "A Star Wars–inspired spaceship game in Python. The player flies a fighter, destroys waves of enemies and faces a Destroyer boss. Difficulty grows with the score, and the game has a health bar, music and sound effects, a high score saved to file and automated tests for the game logic.",
    },
    tech: ["Python", "Pygame", "Pytest"],
    repo: "https://github.com/Nametala/Spaceshi.py",
    gif: "/projetos/spaceshipy.gif",
  },
  {
    year: "2026",
    when: { pt: "2º semestre", en: "2nd semester" },
    context: { pt: "PESSOAL", en: "PERSONAL" },
    name: { pt: "Bot de Promoções", en: "Deals Bot" },
    description: {
      pt: "Bot para Telegram que publica ofertas de afiliado em um canal. As ofertas são cadastradas por comando ou por uma conversa guiada e postadas em rodízio automático, com imagem e preço riscado. Os dados ficam salvos em arquivo e o bot avisa no privado quando uma oferta está ativa há muitos dias.",
      en: "A Telegram bot that posts affiliate deals to a channel. Deals are added by command or through a guided chat and posted in an automatic rotation, with an image and a struck-through price. Data is saved to file, and the bot sends a private alert when a deal has been active for too many days.",
    },
    tech: ["Python"],
    repo: "https://github.com/vGustav1/bot-promocoes-telegram",
    gif: "/projetos/bot-promocoes.gif",
  },
];

export type ExpType = "pro" | "aca" | "oss" | "evt";

export type Experience = {
  type: ExpType;
  when: Bi;
  role: Bi;
  org: Bi;
  description: Bi;
};

export const experiences: Experience[] = [
  {
    type: "evt",
    when: { pt: "2026", en: "2026" },
    role: { pt: "Voluntário", en: "Volunteer" },
    org: { pt: "We Make Software · PUC Minas", en: "We Make Software · PUC Minas" },
    description: {
      pt: "Atuei como voluntário no evento, auxiliando as bancas das empresas parceiras presentes.",
      en: "I volunteered at the event, assisting the booths of the partner companies attending.",
    },
  },
];

export const favoriteGames: { name: string; cover?: string; genre: Bi }[] = [
  { name: "Hotline Miami", genre: { pt: "Ação", en: "Action" } },
  { name: "Balatro", genre: { pt: "Roguelike de cartas", en: "Card roguelike" } },
  { name: "Grand Theft Auto IV", genre: { pt: "Ação · mundo aberto", en: "Action · open world" } },
  { name: "Shadow of the Colossus", genre: { pt: "Aventura", en: "Adventure" } },
];

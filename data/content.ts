export type Lang = "pt" | "en";
export type Bi = { pt: string; en: string };

export const profile = {
  name: "Gustavo Vieira",

  photo: "",
  links: {
    email: "seu@email.com",
    whatsapp: "5500000000000",
    linkedin: "https://www.linkedin.com/in/seu-perfil",
    github: "https://github.com/vGustav1",
  },
  facts: [
    { k: { pt: "Curso", en: "Degree" }, v: { pt: "Engenharia de Software", en: "Software Engineering" } },
    { k: { pt: "Período", en: "Semester" }, v: { pt: "2º", en: "2nd" } },
    { k: { pt: "Instituição", en: "University" }, v: { pt: "PUC Minas", en: "PUC Minas" } },
    { k: { pt: "Disponibilidade", en: "Availability" }, v: { pt: "[Aberto a estágio]", en: "[Open to internships]" } },
  ],
  about: [
    {
      pt: "Sou estudante do 2º período de Engenharia de Software na PUC Minas. [Complete com sua área de atuação.]",
      en: "I am a 2nd-semester Software Engineering student at PUC Minas. [Add your field of work.]",
    },
    {
      pt: "Gosto de desenvolvimento web e de jogos, e procuro unir os dois nos meus projetos. [Seus outros interesses.]",
      en: "I enjoy web development and games, and I try to bring both together in my projects. [Your other interests.]",
    },
    {
      pt: "Meu objetivo é [seu objetivo profissional, por exemplo: conseguir o primeiro estágio em desenvolvimento].",
      en: "My goal is [your professional goal, for example: landing my first development internship].",
    },
  ] as Bi[],
  education: {
    title: { pt: "Engenharia de Software · PUC Minas", en: "Software Engineering · PUC Minas" },
    when: { pt: "[início] — [previsão de conclusão]", en: "[start] — [expected graduation]" },
  },
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
    tech: ["Python", "python-telegram-bot", "JobQueue", "dotenv"],
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
  { type: "aca", when: { pt: "[semestre ano]", en: "[semester year]" }, role: { pt: "[Projeto em equipe]", en: "[Team project]" }, org: { pt: "PUC Minas", en: "PUC Minas" }, description: { pt: "[Disciplina, seu papel e o que foi entregue.]", en: "[Course, your role and what was delivered.]" } },
  { type: "evt", when: { pt: "[mês ano]", en: "[month year]" }, role: { pt: "[Hackathon, palestra...]", en: "[Hackathon, talk...]" }, org: { pt: "[Nome do evento]", en: "[Event name]" }, description: { pt: "[O que você construiu ou aprendeu.]", en: "[What you built or learned.]" } },
  { type: "pro", when: { pt: "[mês ano] — [atual]", en: "[month year] — [present]" }, role: { pt: "[Cargo ou atividade]", en: "[Role or activity]" }, org: { pt: "[Empresa ou cliente]", en: "[Company or client]" }, description: { pt: "[O que você fez e o resultado.]", en: "[What you did and the result.]" } },
];

export const favoriteGames: { name: string; cover?: string; genre: Bi }[] = [
  { name: "Hotline Miami", genre: { pt: "Ação", en: "Action" } },
  { name: "Balatro", genre: { pt: "Roguelike de cartas", en: "Card roguelike" } },
  { name: "Grand Theft Auto IV", genre: { pt: "Ação · mundo aberto", en: "Action · open world" } },
  { name: "Shadow of the Colossus", genre: { pt: "Aventura", en: "Adventure" } },
];

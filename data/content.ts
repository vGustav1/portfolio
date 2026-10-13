/**
 * Todo o conteúdo do site fica aqui.
 * Para atualizar projetos, experiências e tecnologias, edite só este arquivo.
 * Textos entre [colchetes] são para trocar pelos seus dados reais.
 */

export type Lang = "pt" | "en";
export type Bi = { pt: string; en: string };

export const profile = {
  name: "Gustavo Vieira",
  /** Sua foto: coloque o arquivo em public/ e escreva o caminho, ex.: "/foto.jpg". Vazio = placeholder. */
  photo: "",
  links: {
    email: "seu@email.com",
    whatsapp: "5500000000000", // só números, com DDI e DDD
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
  orbit: 0 | 1 | 2; // 0 = mais perto do sol
  angle: number; // posição na órbita, em graus
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
  /** Caminho em /public, ex.: "/projetos/login.gif". Vazio = placeholder. */
  gif?: string;
};

/** Do mais antigo para o mais recente (requisito do enunciado). */
export const projects: Project[] = [
  {
    year: "[ANO]",
    when: { pt: "[semestre]", en: "[semester]" },
    context: { pt: "[DISCIPLINA OU PESSOAL]", en: "[COURSE OR PERSONAL]" },
    name: { pt: "[Nome do projeto 1]", en: "[Project name 1]" },
    description: { pt: "[O problema, o que você construiu e o resultado.]", en: "[The problem, what you built and the result.]" },
    tech: ["Java", "MySQL"],
    repo: "https://github.com/seu-usuario/projeto-1",
  },
  {
    year: "[ANO]",
    when: { pt: "[semestre]", en: "[semester]" },
    context: { pt: "[DISCIPLINA OU PESSOAL]", en: "[COURSE OR PERSONAL]" },
    name: { pt: "[Nome do projeto 2]", en: "[Project name 2]" },
    description: { pt: "[O problema, o que você construiu e o resultado.]", en: "[The problem, what you built and the result.]" },
    tech: ["Spring Boot", "Python"],
    repo: "https://github.com/seu-usuario/projeto-2",
  },
  {
    year: "2026",
    when: { pt: "2º semestre", en: "2nd semester" },
    context: { pt: "DIAW · PUC MINAS", en: "DIAW · PUC MINAS" },
    name: { pt: "Este portfólio", en: "This portfolio" },
    description: {
      pt: "Site em uma página com cidade animada, sistema solar de habilidades, dados ao vivo de APIs e deploy na Vercel.",
      en: "One-page site with an animated city, a skills solar system, live API data and deployment on Vercel.",
    },
    tech: ["Next.js", "TypeScript", "EmailJS"],
    repo: "https://github.com/vGustav1/portfolio",
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

/** Jogos favoritos (seção Hobbies). Capas em /public/jogos/. */
export const favoriteGames: { name: string; cover?: string; genre: Bi }[] = [
  { name: "[Jogo favorito 1]", genre: { pt: "[Gênero]", en: "[Genre]" } },
  { name: "[Jogo favorito 2]", genre: { pt: "[Gênero]", en: "[Genre]" } },
  { name: "[Jogo favorito 3]", genre: { pt: "[Gênero]", en: "[Genre]" } },
  { name: "[Jogo favorito 4]", genre: { pt: "[Gênero]", en: "[Genre]" } },
];

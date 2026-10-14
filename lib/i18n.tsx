"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Bi, Lang } from "@/data/content";

export const ui = {
  nav: {
    about: { pt: "Sobre mim", en: "About me" },
    projects: { pt: "Projetos", en: "Projects" },
    experience: { pt: "Experiências", en: "Experience" },
    hobbies: { pt: "Hobbies", en: "Hobbies" },
    contact: { pt: "Contato", en: "Contact" },
    menu: { pt: "Abrir menu", en: "Open menu" },
    lang: { pt: "Idioma", en: "Language" },
    skip: { pt: "Pular para o conteúdo", en: "Skip to content" },
  },
  hero: {
    kicker: { pt: "ENGENHARIA DE SOFTWARE · PUC MINAS", en: "SOFTWARE ENGINEERING · PUC MINAS" },
    line: {
      pt: "Estudante de Engenharia de Software na PUC Minas. Desenvolvo aplicações e gosto de unir código e jogos.",
      en: "Software Engineering student at PUC Minas. I build applications and love bringing code and games together.",
    },
    ctaProjects: { pt: "VER PROJETOS", en: "SEE PROJECTS" },
    ctaContact: { pt: "FALE COMIGO", en: "GET IN TOUCH" },
    scroll: { pt: "Rolar para Sobre mim", en: "Scroll to About me" },
  },
  about: {
    summary: { pt: "Resumo", en: "Summary" },
    photo: { pt: "[ sua foto ]", en: "[ your photo ]" },
  },
  skills: {
    label: { pt: "HABILIDADES", en: "SKILLS" },
    hint: { pt: "Clique em um planeta para ver detalhes", en: "Click a planet to see details" },
    used: { pt: "JÁ USEI", en: "USED IT" },
    learning: { pt: "ESTUDANDO AGORA", en: "LEARNING NOW" },
    time: { pt: "Tempo de uso", en: "Time using it" },
    where: { pt: "Onde usei", en: "Where I used it" },
    legend: {
      pt: "Os pontinhos ao redor de cada planeta são os projetos em que usei a tecnologia.",
      en: "The small dots around each planet are the projects where I used that technology.",
    },
  },
  projects: {
    sub: { pt: "Alguns projetos que desenvolvi.", en: "Some projects I have built." },
    repo: { pt: "Ver repositório no GitHub ›", en: "View repository on GitHub ›" },
    gif: { pt: "[ GIF do projeto em funcionamento ]", en: "[ GIF of the project running ]" },
    recent: { pt: "REPOSITÓRIOS RECENTES · GITHUB", en: "RECENT REPOSITORIES · GITHUB" },
    noDesc: { pt: "Sem descrição.", en: "No description." },
  },
  experience: {
    filter: { pt: "Filtrar por tipo", en: "Filter by type" },
    types: {
      all: { pt: "Todas", en: "All" },
      pro: { pt: "Profissional", en: "Professional" },
      aca: { pt: "Acadêmica", en: "Academic" },
      oss: { pt: "Open source", en: "Open source" },
      evt: { pt: "Eventos", en: "Events" },
    },
    empty: { pt: "Nada por aqui ainda.", en: "Nothing here yet." },
  },
  hobbies: {
    sub: { pt: "O que eu jogo, ouço e treino, com dados ao vivo.", en: "What I play, listen to and practice, with live data." },
    listen: { pt: "Ouvir no Spotify", en: "Listen on Spotify" },
    nowPlaying: { pt: "► OUVINDO AGORA", en: "► NOW PLAYING" },
    lastPlayed: { pt: "OUVIDO POR ÚLTIMO", en: "LAST PLAYED" },
    mostPlayed: { pt: "MAIS JOGADOS", en: "MOST PLAYED" },
    hours: { pt: "h", en: "h" },
    team: { pt: "TIME DO CORAÇÃO", en: "MY TEAM" },
    chess: { pt: "XADREZ", en: "CHESS" },
    rapid: { pt: "RÁPIDA", en: "RAPID" },
    favorites: { pt: "JOGOS FAVORITOS", en: "FAVORITE GAMES" },
    offline: { pt: "Dados de exemplo (API não configurada)", en: "Sample data (API not configured)" },
  },
  contact: {
    sub: { pt: "Escolha um canal ou envie uma mensagem.", en: "Pick a channel or send a message." },
    name: { pt: "Nome", en: "Name" },
    email: { pt: "E-mail", en: "Email" },
    message: { pt: "Mensagem", en: "Message" },
    required: { pt: "Campos obrigatórios", en: "Required fields" },
    send: { pt: "ENVIAR MENSAGEM", en: "SEND MESSAGE" },
    sending: { pt: "ENVIANDO...", en: "SENDING..." },
    errName: { pt: "Informe seu nome.", en: "Please enter your name." },
    errEmail: { pt: "Informe um e-mail válido.", en: "Please enter a valid email." },
    errMsg: { pt: "Escreva uma mensagem.", en: "Please write a message." },
    ok: { pt: "Mensagem enviada! Respondo em breve.", en: "Message sent! I will reply soon." },
    fail: { pt: "Não foi possível enviar. Tente de novo ou use um dos canais ao lado.", en: "Could not send. Try again or use one of the channels." },
  },
  footer: { top: { pt: "VOLTAR AO TOPO ↑", en: "BACK TO TOP ↑" } },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (b: Bi) => string };

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "pt" || saved === "en") setLangState(saved);
    } catch {

    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {

    }
  };

  return <LangContext.Provider value={{ lang, setLang, t: (b) => b[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang precisa estar dentro de LanguageProvider");
  return ctx;
}

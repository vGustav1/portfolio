"use client";

import { useEffect, useState } from "react";
import { ui, useLang } from "@/lib/i18n";

const sections = [
  { id: "sobre", label: ui.nav.about },
  { id: "projetos", label: ui.nav.projects },
  { id: "experiencias", label: ui.nav.experience },
  { id: "hobbies", label: ui.nav.hobbies },
  { id: "contato", label: ui.nav.contact },
];

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a href="#conteudo" className="skip">{t(ui.nav.skip)}</a>
      <header className={`header${open ? " open" : ""}`}>
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <span className="neon">GS</span>
          <span className="brand-name">GUSTAVO VIEIRA</span>
        </a>
        <nav className="nav" aria-label={t(ui.nav.menu)}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? "active" : undefined} onClick={() => setOpen(false)}>
              {t(s.label)}
            </a>
          ))}
        </nav>
        <div className="header-right">
          <div className="lang" role="group" aria-label={t(ui.nav.lang)}>
            <button type="button" aria-pressed={lang === "pt"} onClick={() => setLang("pt")}>PT</button>
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          </div>
          <button type="button" className="menu-btn" aria-expanded={open} aria-label={t(ui.nav.menu)} onClick={() => setOpen((o) => !o)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

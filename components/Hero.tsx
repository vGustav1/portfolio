"use client";

import { useEffect, useRef } from "react";
import { ui, useLang } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (bg.current) bg.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="inicio" className="hero">
      <div ref={bg} className="hero-bg" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />
      <div className="container hero-content">
        <p className="kicker">{t(ui.hero.kicker)}</p>
        <h1 className="neon">Gustavo Vieira</h1>
        <p className="hero-line">{t(ui.hero.line)}</p>
        <div className="cta">
          <a href="#projetos" className="btn btn-primary">{t(ui.hero.ctaProjects)}</a>
          <a href="#contato" className="btn btn-ghost">{t(ui.hero.ctaContact)}</a>
        </div>
      </div>
      <a href="#sobre" className="scroll-down" aria-label={t(ui.hero.scroll)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}

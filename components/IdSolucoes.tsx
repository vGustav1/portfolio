"use client";

import { idSolucoes } from "@/data/content";
import { ui, useLang } from "@/lib/i18n";
import { Briefcase } from "./LowPoly";

export default function IdSolucoes() {
  const { t } = useLang();

  return (
    <section id="id-solucoes" className="container section">
      <div className="section-head">
        <Briefcase size={84} />
        <div>
          <h2 className="neon tilt">{t(ui.nav.idSolucoes)}</h2>
          <p className="sub">{t(ui.idSolucoes.sub)}</p>
        </div>
      </div>

      <article className="card project id-intro">
        <div className="project-media">
          <img src={idSolucoes.image} alt={t(ui.nav.idSolucoes)} loading="lazy" />
        </div>
        <div className="project-body">
          <span className="project-ctx">{t(idSolucoes.context)}</span>
          <h3>{t(idSolucoes.tagline)}</h3>
          <p>{t(idSolucoes.description)}</p>
          <div className="tags">
            {idSolucoes.tech.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
          <div className="id-links">
            <a className="link-strong" href={idSolucoes.site} target="_blank" rel="noopener noreferrer">{t(ui.idSolucoes.site)}</a>
            <a className="link-strong" href={idSolucoes.instagram} target="_blank" rel="noopener noreferrer">{t(ui.idSolucoes.instagram)}</a>
          </div>
        </div>
      </article>

      <div className="id-work">
        <p className="label">{t(ui.idSolucoes.dev)}</p>
        <p className="id-dev-intro">{t(idSolucoes.devIntro)}</p>
        <div className="id-hub">
          <span className="id-hub-dot" />
          {t(ui.idSolucoes.hub)}
          <span className="id-hub-mcp">MCP</span>
        </div>
        <ol className="id-steps">
          {idSolucoes.process.map((s, i) => (
            <li key={s.tool} className="card id-step">
              <span className="id-step-n">{String(i + 1).padStart(2, "0")} · {t(s.step)}</span>
              <h3>{s.tool}</h3>
              <p>{t(s.text)}</p>
            </li>
          ))}
        </ol>
        <div className="project-examples">
          <span className="lbl">{t(ui.idSolucoes.sites)}</span>
          {idSolucoes.sites.map((c) => (
            <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer">{c.name} ↗</a>
          ))}
        </div>
      </div>
    </section>
  );
}

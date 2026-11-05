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
        <p className="label">{t(ui.idSolucoes.work)}</p>
        <div className="id-grid">
          {idSolucoes.showcase.map((s) => (
            <article key={s.url} className="card project">
              <div className="project-media">
                <img src={s.gif} alt={`${t(ui.idSolucoes.preview)} ${s.name}`} width={560} height={350} loading="lazy" />
              </div>
              <div className="project-body">
                <div className="id-meta">
                  <span className={s.kind === "client" ? "badge" : "badge badge-alt"}>
                    {t(s.kind === "client" ? ui.idSolucoes.client : ui.idSolucoes.model)}
                  </span>
                  <span className="lbl">{t(s.segment)}</span>
                </div>
                <h3>{s.name}</h3>
                <a className="link-strong" href={s.url} target="_blank" rel="noopener noreferrer">{t(ui.idSolucoes.live)}</a>
              </div>
            </article>
          ))}
        </div>
        <div className="project-examples">
          <span className="lbl">{t(ui.idSolucoes.more)}</span>
          {idSolucoes.moreClients.map((c) => (
            <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer">{c.name} ↗</a>
          ))}
        </div>
      </div>
    </section>
  );
}

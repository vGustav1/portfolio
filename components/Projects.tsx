"use client";

import { projects } from "@/data/content";
import { ui, useLang } from "@/lib/i18n";
import { Monitor } from "./LowPoly";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projetos" className="container section">
      <div className="section-head">
        <Monitor />
        <div>
          <h2 className="neon tilt">{t(ui.nav.projects)}</h2>
          <p className="sub">{t(ui.projects.sub)}</p>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.repo} className="card project">
            <div className="project-media">
              {p.gif ? <img src={p.gif} alt={t(p.name)} loading="lazy" /> : t(ui.projects.gif)}
            </div>
            <div className="project-body">
              <h3>{t(p.name)}</h3>
              <p>{t(p.description)}</p>
              <div className="tags">
                {p.tech.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              {p.examples && (
                <div className="project-examples">
                  <span className="lbl">{t(ui.projects.examples)}</span>
                  {p.examples.map((ex) => (
                    <a key={ex.url} href={ex.url} target="_blank" rel="noopener noreferrer">{ex.name} ↗</a>
                  ))}
                </div>
              )}
              <a className="link-strong" href={p.repo} target="_blank" rel="noopener noreferrer">{p.linkLabel ? t(p.linkLabel) : t(ui.projects.repo)}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

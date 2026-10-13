"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/content";
import { ui, useLang } from "@/lib/i18n";
import { Monitor } from "./LowPoly";

type Repo = { name: string; full_name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number };

export default function Projects() {
  const { t } = useLang();
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => (r.ok ? r.json() : { repos: [] }))
      .then((d) => setRepos(d.repos ?? []))
      .catch(() => setRepos([]));
  }, []);

  return (
    <section id="projetos" className="container section">
      <div className="section-head">
        <Monitor />
        <div>
          <h2 className="neon tilt">{t(ui.nav.projects)}</h2>
          <p className="sub">{t(ui.projects.sub)}</p>
        </div>
      </div>

      <div>
        {projects.map((p, i) => {
          const left = i % 2 === 0;
          const card = (
            <article className="card project">
              <span className="mobile-year">{p.year} · {t(p.when)}</span>
              <div className="project-media">
                {p.gif ? <img src={p.gif} alt={t(p.name)} loading="lazy" /> : t(ui.projects.gif)}
              </div>
              <div className="project-body">
                <span className="project-ctx">{t(p.context)}</span>
                <h3>{t(p.name)}</h3>
                <p>{t(p.description)}</p>
                <div className="tags">
                  {p.tech.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
                <a className="link-strong" href={p.repo} target="_blank" rel="noopener noreferrer">{t(ui.projects.repo)}</a>
              </div>
            </article>
          );
          const year = (
            <div className="year">
              <b>{p.year}</b>
              <span className="lbl" style={{ fontSize: 15 }}>{t(p.when)}</span>
            </div>
          );
          return (
            <div className="timeline-row" key={i}>
              <div className={`timeline-side left${left ? "" : " year"}`}>{left ? card : year}</div>
              <div className="timeline-mark" aria-hidden="true"><span className="dot" /><span className="line" /></div>
              <div className={`timeline-side right${left ? " year" : ""}`}>{left ? year : card}</div>
            </div>
          );
        })}
      </div>

      {repos.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span className="label">{t(ui.projects.recent)}</span>
          <div className="repos">
            {repos.map((r) => (
              <a key={r.full_name} className="card repo" href={r.html_url} target="_blank" rel="noopener noreferrer">
                <span className="repo-name">{r.full_name}</span>
                <span style={{ fontSize: 14, lineHeight: 1.5, color: "var(--muted)" }}>{r.description ?? t(ui.projects.noDesc)}</span>
                <span className="lbl">{r.language ?? "—"} · ★ {r.stargazers_count}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

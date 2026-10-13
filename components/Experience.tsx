"use client";

import { experiences } from "@/data/content";
import { ui, useLang } from "@/lib/i18n";
import { Trophy } from "./LowPoly";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experiencias" className="container section" style={{ gap: 36 }}>
      <div className="section-head">
        <Trophy />
        <h2 className="neon tilt">{t(ui.nav.experience)}</h2>
      </div>
      <div className="exp-list">
        {experiences.map((e, i) => (
          <article key={i} className="card exp">
            <div className="exp-meta">
              <span className="lbl" style={{ fontSize: 15 }}>{t(e.when)}</span>
              <span className="badge">{t(ui.experience.types[e.type])}</span>
            </div>
            <div className="exp-body">
              <h3>{t(e.role)}</h3>
              <span className="exp-org">{t(e.org)}</span>
              <p>{t(e.description)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

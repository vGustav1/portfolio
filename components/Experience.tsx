"use client";

import { useState } from "react";
import { experiences, type ExpType } from "@/data/content";
import { ui, useLang } from "@/lib/i18n";
import { Trophy } from "./LowPoly";

const FILTERS: ("all" | ExpType)[] = ["all", "pro", "aca", "oss", "evt"];

export default function Experience() {
  const { t } = useLang();
  const [filter, setFilter] = useState<"all" | ExpType>("all");
  const list = filter === "all" ? experiences : experiences.filter((e) => e.type === filter);

  return (
    <section id="experiencias" className="container section" style={{ gap: 36 }}>
      <div className="section-head">
        <Trophy />
        <h2 className="neon tilt">{t(ui.nav.experience)}</h2>
      </div>
      <div className="filters" role="group" aria-label={t(ui.experience.filter)}>
        {FILTERS.map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {t(ui.experience.types[f])}
          </button>
        ))}
      </div>
      <div className="exp-list">
        {list.length === 0 && <p className="lbl">{t(ui.experience.empty)}</p>}
        {list.map((e, i) => (
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

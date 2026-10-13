"use client";

import { profile } from "@/data/content";
import { ui, useLang } from "@/lib/i18n";
import { IdCard } from "./LowPoly";
import SolarSystem from "./SolarSystem";

export default function About() {
  const { t } = useLang();
  return (
    <section id="sobre" className="container section">
      <div className="section-head">
        <IdCard />
        <h2 className="neon tilt">{t(ui.nav.about)}</h2>
      </div>
      <div className="about-grid">
        <aside className="card about-card" aria-label={t(ui.about.summary)}>
          <div className="about-photo">{t(ui.about.photo)}</div>
          {profile.facts.map((f) => (
            <div className="fact" key={f.k.pt}>
              <span className="lbl">{t(f.k).toUpperCase()}</span>
              <b>{t(f.v)}</b>
            </div>
          ))}
        </aside>
        <div className="about-text">
          <div className="about-paras">
            {profile.about.map((p, i) => (
              <p key={i}>{t(p)}</p>
            ))}
          </div>
          <div className="edu">
            <span>{t(profile.education.title)}</span>
            <span className="lbl" style={{ fontSize: 15 }}>{t(profile.education.when)}</span>
          </div>
        </div>
      </div>
      <SolarSystem />
    </section>
  );
}

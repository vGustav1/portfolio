"use client";

import { useEffect, useMemo, useState } from "react";
import { skills } from "@/data/content";
import { ui, useLang } from "@/lib/i18n";
import { Planet, Sun } from "./LowPoly";

// Órbitas (em unidades de um palco 800 x 600). Elipses dão a sensação de perspectiva.
const ORBITS: [number, number][] = [
  [150, 62],
  [255, 108],
  [360, 152],
];
const SPEED = [0.006, 0.004, 0.0028]; // graus por milissegundo

export default function SolarSystem() {
  const { t } = useLang();
  const [sel, setSel] = useState(skills[0].id);
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);

  // Planetas giram devagar; param quando o mouse está em cima ou se o sistema pede menos movimento.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = now - last;
      last = now;
      if (!paused) setTick((v) => v + dt);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const stars = useMemo(() => {
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    return Array.from({ length: 40 }, () => ({ left: rnd() * 100, top: rnd() * 100, opacity: 0.25 + rnd() * 0.6, delay: rnd() * 3 }));
  }, []);

  const current = skills.find((s) => s.id === sel) ?? skills[0];

  return (
    <div className="skills">
      <div className="skills-top">
        <span className="label">{t(ui.skills.label)}</span>
        <span className="lbl" style={{ fontSize: 14 }}>{t(ui.skills.hint)}</span>
      </div>
      <div className="skills-row">
        <div className="space" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {stars.map((s, i) => (
            <span key={i} className="star" aria-hidden="true" style={{ left: `${s.left}%`, top: `${s.top}%`, opacity: s.opacity, animationDelay: `${s.delay}s` }} />
          ))}
          <svg className="orbits" viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden="true">
            {ORBITS.map(([rx, ry], i) => (
              <ellipse key={i} cx="400" cy="300" rx={rx} ry={ry} fill="none" stroke={i === 2 ? "#2EF2FF" : "#FF2E88"} strokeOpacity={0.3} strokeWidth="1.5" strokeDasharray="6 6" />
            ))}
          </svg>
          <div className="sun-wrap">
            <Sun size={96} />
          </div>
          {skills.map((s) => {
            const [rx, ry] = ORBITS[s.orbit];
            const angle = ((s.angle + tick * SPEED[s.orbit]) * Math.PI) / 180;
            const x = (400 + rx * Math.cos(angle)) / 8;
            const y = (300 + ry * Math.sin(angle)) / 6;
            const on = s.id === sel;
            return (
              <button
                key={s.id}
                type="button"
                className="planet"
                aria-pressed={on}
                onClick={() => setSel(s.id)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                style={{ left: `${x}%`, top: `${y}%`, zIndex: y > 50 ? 3 : 1 }}
              >
                <span style={{ position: "relative", filter: on ? `drop-shadow(0 0 14px ${s.color})` : undefined }}>
                  <Planet color={s.color} size={s.size} />
                  {s.usedIn.map((_, i) => (
                    <span key={i} className="moon" aria-hidden="true" style={{ top: 2 + i * 12, right: -4 - i * 4 }} />
                  ))}
                </span>
                <span className="planet-name" style={on ? { background: s.color, color: "#0B0016" } : undefined}>{s.name}</span>
              </button>
            );
          })}
        </div>
        <aside className="card skill-panel" aria-live="polite">
          <span className="lbl" style={{ color: "var(--cyan)" }}>{t(current.category)}</span>
          <h3>{current.name}</h3>
          <span className="chip" style={{ background: current.status === "used" ? "var(--cyan)" : "var(--yellow)" }}>
            {current.status === "used" ? t(ui.skills.used) : t(ui.skills.learning)}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 8, borderTop: "1px dashed rgba(201,184,220,.35)" }}>
            <span className="lbl">{t(ui.skills.time)}</span>
            <span style={{ fontWeight: 600, fontSize: 16 }}>{t(current.time)}</span>
          </div>
          <div className="skill-where" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span className="lbl">{t(ui.skills.where)}</span>
            {current.usedIn.map((w, i) => (
              <a key={i} href="#projetos">{t(w)}</a>
            ))}
          </div>
          <p className="lbl" style={{ margin: "auto 0 0", lineHeight: 1.6 }}>{t(ui.skills.legend)}</p>
        </aside>
      </div>
    </div>
  );
}

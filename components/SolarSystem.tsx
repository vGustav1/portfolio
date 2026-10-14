"use client";

import { useEffect, useMemo, useState } from "react";
import { skills } from "@/data/content";
import { ui, useLang } from "@/lib/i18n";
import { Planet, Sun } from "./LowPoly";

const W = 1000;
const H = 500;
const ORBITS: [number, number][] = [
  [190, 82],
  [320, 140],
  [440, 200],
];
const SPEED = [0.006, 0.004, 0.0028];

export default function SolarSystem() {
  const { t } = useLang();
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);

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
    return Array.from({ length: 70 }, () => ({ left: rnd() * 100, top: rnd() * 100, opacity: 0.25 + rnd() * 0.6, delay: rnd() * 3 }));
  }, []);

  return (
    <div className="skills">
      <span className="label">{t(ui.skills.label)}</span>
      <div
        className="space"
        role="list"
        aria-label={t(ui.skills.label)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {stars.map((s, i) => (
          <span key={i} className="star" aria-hidden="true" style={{ left: `${s.left}%`, top: `${s.top}%`, opacity: s.opacity, animationDelay: `${s.delay}s` }} />
        ))}
        <svg className="orbits" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
          {ORBITS.map(([rx, ry], i) => (
            <ellipse key={i} cx={W / 2} cy={H / 2} rx={rx} ry={ry} fill="none" stroke={i === 2 ? "#2EF2FF" : "#FF2E88"} strokeOpacity={0.3} strokeWidth="1.5" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <div className="sun-wrap">
          <Sun size={120} />
        </div>
        {skills.map((s) => {
          const [rx, ry] = ORBITS[s.orbit];
          const angle = ((s.angle + tick * SPEED[s.orbit]) * Math.PI) / 180;
          const x = ((W / 2 + rx * Math.cos(angle)) / W) * 100;
          const y = ((H / 2 + ry * Math.sin(angle)) / H) * 100;
          return (
            <div key={s.id} role="listitem" className="planet" style={{ left: `${x}%`, top: `${y}%`, zIndex: y > 50 ? 3 : 1 }}>
              <span style={{ filter: `drop-shadow(0 0 12px ${s.color}88)` }}>
                <Planet color={s.color} size={Math.round(s.size * 1.35)} />
              </span>
              <span className="planet-name">{s.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

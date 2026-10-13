"use client";

import { useEffect, useState } from "react";
import { favoriteGames } from "@/data/content";
import { ui, useLang } from "@/lib/i18n";
import { Gamepad } from "./LowPoly";
import type { ChessData, LolData, SpotifyData, SteamData } from "@/lib/hobbies";

function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, [url]);
  return data;
}

const resColor = (r: string) => (r === "W" ? "var(--cyan)" : r === "L" ? "var(--pink)" : "var(--muted)");

export default function Hobbies() {
  const { t, lang } = useLang();
  const spotify = useApi<SpotifyData>("/api/spotify");
  const steam = useApi<SteamData>("/api/steam");
  const lol = useApi<LolData>("/api/lol");
  const chess = useApi<ChessData>("/api/chess");
  const igdb = useApi<{ games: { name: string; cover?: string; genre?: string; year?: number }[] }>("/api/igdb");
  const games = favoriteGames.map((g, i) => {
    const hit = igdb?.games?.[i];
    return { name: hit?.name ?? g.name, cover: hit?.cover ?? g.cover, genre: hit?.genre ? `${hit.genre}${hit.year ? ` · ${hit.year}` : ""}` : t(g.genre) };
  });
  const resLabel = (r: string) => (lang === "pt" ? ({ W: "V", L: "D", D: "E" } as Record<string, string>)[r] ?? r : r);
  const maxHours = Math.max(1, ...(steam?.games.map((g) => g.hours) ?? [1]));

  return (
    <section id="hobbies" className="container section">
      <div className="section-head">
        <Gamepad />
        <div>
          <h2 className="neon tilt">{t(ui.nav.hobbies)}</h2>
          <p className="sub">{t(ui.hobbies.sub)}</p>
        </div>
      </div>

      <div className="hobby-grid">
        <div className="card hobby spotify">
          <span className="src">SPOTIFY</span>
          <div className="spotify-body">
            <div className="ph spotify-cover">
              {spotify?.cover ? <img src={spotify.cover} alt={spotify.title ?? ""} /> : "[ capa ]"}
            </div>
            <div className="spotify-info">
              <span className="lbl" style={{ color: "var(--cyan)" }}>{spotify?.isPlaying ? t(ui.hobbies.nowPlaying) : t(ui.hobbies.lastPlayed)}</span>
              <span className="title">{spotify?.title ?? "—"}</span>
              <span className="artist">{spotify?.artist ?? "—"}</span>
              {spotify?.url && (
                <a className="link-strong" href={spotify.url} target="_blank" rel="noopener noreferrer">{t(ui.hobbies.listen)} ›</a>
              )}
            </div>
          </div>
          {spotify?.sample && <span className="note">{t(ui.hobbies.offline)}</span>}
        </div>

        <div className="card hobby steam">
          <span className="src">STEAM</span>
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: ".06em" }}>{t(ui.hobbies.mostPlayed)}</span>
          <div className="steam-games">
            {(steam?.games ?? []).map((g) => (
              <div className="steam-game" key={g.name}>
                <div className="ph">{g.cover ? <img src={g.cover} alt={g.name} /> : "[ capa ]"}</div>
                <span className="name">{g.name}</span>
                <span className="hours">{g.hours.toLocaleString(lang === "pt" ? "pt-BR" : "en-US")} <small className="lbl">{t(ui.hobbies.hours)}</small></span>
                <div className="bar"><span style={{ width: `${(g.hours / maxHours) * 100}%`, background: "var(--cyan)" }} /></div>
              </div>
            ))}
          </div>
          {steam?.sample && <span className="note">{t(ui.hobbies.offline)}</span>}
        </div>

        <div className="card hobby lol">
          <span className="src">LEAGUE OF LEGENDS</span>
          <div className="row">
            <div className="ph" style={{ width: 80, height: 80 }}>[ elo ]</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontWeight: 700, fontSize: 21 }}>{lol?.rank ?? "—"}</span>
              <span className="lbl">{lol ? `${lol.lp} PDL · ${lol.winRate}% ${t(ui.hobbies.winRate)}` : "—"}</span>
            </div>
          </div>
          <div className="results">
            {(lol?.recent ?? []).map((r, i) => (
              <span key={i} className="res" style={{ background: resColor(r) }}>{resLabel(r)}</span>
            ))}
          </div>
          {lol?.sample && <span className="note">{t(ui.hobbies.offline)}</span>}
        </div>

        <div className="card hobby chess">
          <span className="src">{t(ui.hobbies.chess)}</span>
          <span className="lbl">Chess.com · {chess?.username ?? "—"}</span>
          <div className="ratings">
            <div className="rating"><span className="lbl">BULLET</span><b>{chess?.bullet ?? "—"}</b></div>
            <div className="rating"><span className="lbl">BLITZ</span><b>{chess?.blitz ?? "—"}</b></div>
            <div className="rating"><span className="lbl">{t(ui.hobbies.rapid)}</span><b>{chess?.rapid ?? "—"}</b></div>
          </div>
          {chess?.sample && <span className="note">{t(ui.hobbies.offline)}</span>}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <span className="label">{t(ui.hobbies.favorites)}</span>
        <div className="games">
          {games.map((g, i) => (
            <article key={i}>
              <div className="ph" style={{ aspectRatio: "3 / 4" }}>{g.cover ? <img src={g.cover} alt={g.name} loading="lazy" /> : "[ capa do jogo ]"}</div>
              <span style={{ fontWeight: 700, fontSize: 15 }}>{g.name}</span>
              <span className="lbl">{g.genre}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

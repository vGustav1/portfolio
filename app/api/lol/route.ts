import { NextResponse } from "next/server";
import { fallback, REVALIDATE, type LolData } from "@/lib/hobbies";

export const revalidate = 600;

/**
 * Elo da fila ranqueada solo e resultado das últimas 5 partidas.
 * Atenção: a chave de desenvolvedor da Riot expira a cada 24h.
 * Para o site no ar, peça uma "Personal API Key" no portal da Riot.
 */
export async function GET() {
  const key = process.env.RIOT_API_KEY;
  const name = process.env.RIOT_GAME_NAME;
  const tag = process.env.RIOT_TAG_LINE;
  const region = process.env.RIOT_REGION ?? "americas";
  const platform = process.env.RIOT_PLATFORM ?? "br1";
  if (!key || !name || !tag) return NextResponse.json(fallback.lol);

  const get = async (url: string) => {
    const res = await fetch(url, { headers: { "X-Riot-Token": key }, next: { revalidate: REVALIDATE } });
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    return res.json();
  };

  try {
    const account = await get(`https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`);
    const puuid: string = account.puuid;

    const entries: { queueType: string; tier: string; rank: string; leaguePoints: number; wins: number; losses: number }[] =
      await get(`https://${platform}.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}`);
    const solo = entries.find((e) => e.queueType === "RANKED_SOLO_5x5") ?? entries[0];

    const ids: string[] = await get(`https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?count=5`);
    const matches = await Promise.all(ids.map((id) => get(`https://${region}.api.riotgames.com/lol/match/v5/matches/${id}`)));
    const recent = matches.map((m) => {
      const me = m.info.participants.find((p: { puuid: string }) => p.puuid === puuid);
      return me?.win ? "W" : "L";
    }) as ("W" | "L")[];

    const data: LolData = solo
      ? {
          rank: `${solo.tier.charAt(0)}${solo.tier.slice(1).toLowerCase()} ${solo.rank}`,
          lp: solo.leaguePoints,
          winRate: Math.round((solo.wins / Math.max(1, solo.wins + solo.losses)) * 100),
          recent,
        }
      : { rank: "Unranked", lp: 0, winRate: 0, recent };
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(fallback.lol);
  }
}

import { NextResponse } from "next/server";
import { fallback, REVALIDATE, type SteamData } from "@/lib/hobbies";

export const revalidate = 600;

/** Três jogos com mais horas na biblioteca Steam (perfil precisa estar público). */
export async function GET() {
  const key = process.env.STEAM_API_KEY;
  const id = process.env.STEAM_ID;
  if (!key || !id) return NextResponse.json(fallback.steam);
  try {
    const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${key}&steamid=${id}&include_appinfo=1&format=json`;
    const res = await fetch(url, { next: { revalidate: REVALIDATE } });
    if (!res.ok) throw new Error(String(res.status));
    const json = await res.json();
    const games: { appid: number; name: string; playtime_forever: number }[] = json.response?.games ?? [];
    const top = games.sort((a, b) => b.playtime_forever - a.playtime_forever).slice(0, 3);
    if (top.length === 0) throw new Error("vazio");
    const data: SteamData = {
      games: top.map((g) => ({
        name: g.name,
        hours: Math.round(g.playtime_forever / 60),
        cover: `https://cdn.cloudflare.steamstatic.com/steam/apps/${g.appid}/header.jpg`,
      })),
    };
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(fallback.steam);
  }
}

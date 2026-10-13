import { NextResponse } from "next/server";
import { favoriteGames } from "@/data/content";

export const revalidate = 86400; // capas e gêneros quase nunca mudam: 1 dia de cache

type Game = { name: string; cover?: string; genre?: string; year?: number };

/** Busca capa, gênero e ano dos jogos favoritos (lista em data/content.ts) na IGDB. */
export async function GET() {
  const id = process.env.TWITCH_CLIENT_ID;
  const secret = process.env.TWITCH_CLIENT_SECRET;
  if (!id || !secret) return NextResponse.json({ games: [], sample: true });

  try {
    const tokenRes = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`,
      { method: "POST", next: { revalidate: 86400 } },
    );
    if (!tokenRes.ok) throw new Error(String(tokenRes.status));
    const { access_token } = await tokenRes.json();

    const games: Game[] = await Promise.all(
      favoriteGames.map(async (g) => {
        const res = await fetch("https://api.igdb.com/v4/games", {
          method: "POST",
          headers: { "Client-ID": id, Authorization: `Bearer ${access_token}`, "Content-Type": "text/plain" },
          body: `search "${g.name.replace(/"/g, "")}"; fields name,cover.image_id,genres.name,first_release_date; limit 1;`,
          next: { revalidate: 86400 },
        });
        if (!res.ok) return { name: g.name };
        const [hit] = await res.json();
        if (!hit) return { name: g.name };
        return {
          name: hit.name,
          cover: hit.cover?.image_id ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${hit.cover.image_id}.jpg` : undefined,
          genre: hit.genres?.[0]?.name,
          year: hit.first_release_date ? new Date(hit.first_release_date * 1000).getFullYear() : undefined,
        };
      }),
    );
    return NextResponse.json({ games });
  } catch {
    return NextResponse.json({ games: [], sample: true });
  }
}

import { NextResponse } from "next/server";
import { fallback, type SpotifyData } from "@/lib/hobbies";

export const dynamic = "force-dynamic";

type Track = { name: string; artists: { name: string }[]; album: { images: { url: string }[] }; external_urls: { spotify: string } };

async function accessToken() {
  const id = process.env.SPOTIFY_CLIENT_ID;
  const secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!id || !secret || !refresh) return null;
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refresh }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(String(res.status));
  return (await res.json()).access_token as string;
}

const toData = (track: Track, isPlaying: boolean): SpotifyData => ({
  isPlaying,
  title: track.name,
  artist: track.artists.map((a) => a.name).join(", "),
  cover: track.album.images.at(-1)?.url,
  url: track.external_urls.spotify,
});

/** Música tocando agora; se nada estiver tocando, a última ouvida. */
export async function GET() {
  try {
    const token = await accessToken();
    if (!token) return NextResponse.json(fallback.spotify);
    const auth = { Authorization: `Bearer ${token}` };

    const now = await fetch("https://api.spotify.com/v1/me/player/currently-playing", { headers: auth, cache: "no-store" });
    if (now.status === 200) {
      const json = await now.json();
      if (json.item) return NextResponse.json(toData(json.item, Boolean(json.is_playing)));
    }

    const recent = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", { headers: auth, cache: "no-store" });
    if (!recent.ok) throw new Error(String(recent.status));
    const item = (await recent.json()).items?.[0]?.track;
    return NextResponse.json(item ? toData(item, false) : fallback.spotify);
  } catch {
    return NextResponse.json(fallback.spotify);
  }
}

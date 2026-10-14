import { NextResponse } from "next/server";
import { fallback, REVALIDATE, type ChessData } from "@/lib/hobbies";

export const revalidate = 600;

export async function GET() {
  const user = process.env.CHESS_USERNAME;
  if (!user) return NextResponse.json(fallback.chess);
  try {
    const res = await fetch(`https://api.chess.com/pub/player/${encodeURIComponent(user.toLowerCase())}/stats`, {
      headers: { "User-Agent": "portfolio-gustavo-vieira" },
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) throw new Error(String(res.status));
    const s = await res.json();
    const data: ChessData = {
      username: user,
      bullet: s.chess_bullet?.last?.rating,
      blitz: s.chess_blitz?.last?.rating,
      rapid: s.chess_rapid?.last?.rating,
    };
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ ...fallback.chess, username: user });
  }
}

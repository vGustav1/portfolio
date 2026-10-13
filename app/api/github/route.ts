import { NextResponse } from "next/server";

export const revalidate = 3600;

/** Repositórios atualizados mais recentemente (sem forks). */
export async function GET() {
  const user = process.env.GITHUB_USERNAME;
  if (!user) return NextResponse.json({ repos: [] });
  try {
    const headers: HeadersInit = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=updated&per_page=12`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(String(res.status));
    const all: { fork: boolean }[] = await res.json();
    return NextResponse.json({ repos: all.filter((r) => !r.fork).slice(0, 3) });
  } catch {
    return NextResponse.json({ repos: [] });
  }
}

export type SpotifyData = { isPlaying: boolean; title: string; artist: string; cover?: string; url?: string; sample?: boolean };
export type SteamData = { games: { name: string; hours: number; cover?: string }[]; sample?: boolean };
export type ChessData = { username: string; bullet?: number; blitz?: number; rapid?: number; sample?: boolean };

export const fallback = {
  spotify: { isPlaying: false, title: "[Música]", artist: "[Artista]", sample: true } satisfies SpotifyData,
  steam: { games: [{ name: "[Jogo 1]", hours: 120 }, { name: "[Jogo 2]", hours: 80 }, { name: "[Jogo 3]", hours: 35 }, { name: "[Jogo 4]", hours: 20 }, { name: "[Jogo 5]", hours: 12 }, { name: "[Jogo 6]", hours: 6 }], sample: true } satisfies SteamData,
  chess: { username: "[usuário]", sample: true } satisfies ChessData,
};

export const REVALIDATE = 600;

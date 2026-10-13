/** Tipos e dados de reserva das integrações da seção Hobbies. */

export type SpotifyData = { isPlaying: boolean; title: string; artist: string; cover?: string; url?: string; sample?: boolean };
export type SteamData = { games: { name: string; hours: number; cover?: string }[]; sample?: boolean };
export type LolData = { rank: string; lp: number; winRate: number; recent: ("W" | "L")[]; sample?: boolean };
export type ChessData = { username: string; bullet?: number; blitz?: number; rapid?: number; sample?: boolean };

// Mostrados quando a API não está configurada ou falha, para o card nunca ficar vazio.
export const fallback = {
  spotify: { isPlaying: false, title: "[Música]", artist: "[Artista]", sample: true } satisfies SpotifyData,
  steam: { games: [{ name: "[Jogo 1]", hours: 120 }, { name: "[Jogo 2]", hours: 80 }, { name: "[Jogo 3]", hours: 35 }], sample: true } satisfies SteamData,
  lol: { rank: "[Elo] [Divisão]", lp: 0, winRate: 50, recent: ["W", "W", "L", "W", "L"], sample: true } satisfies LolData,
  chess: { username: "[usuário]", sample: true } satisfies ChessData,
};

/** Cache das respostas por 10 minutos no servidor (evita estourar limite das APIs). */
export const REVALIDATE = 600;

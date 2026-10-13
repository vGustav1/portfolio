/**
 * Gera o SPOTIFY_REFRESH_TOKEN (só precisa rodar uma vez).
 *
 * 1. Em https://developer.spotify.com/dashboard crie um app e adicione a Redirect URI:
 *      http://127.0.0.1:3001/callback
 * 2. Rode:  node scripts/spotify-token.mjs SEU_CLIENT_ID SEU_CLIENT_SECRET
 * 3. Abra o link que aparecer, autorize, e copie o refresh token mostrado no terminal.
 */
import http from "node:http";

const [clientId, clientSecret] = process.argv.slice(2);
if (!clientId || !clientSecret) {
  console.log("Uso: node scripts/spotify-token.mjs CLIENT_ID CLIENT_SECRET");
  process.exit(1);
}

const redirect = "http://127.0.0.1:3001/callback";
const scope = "user-read-currently-playing user-read-recently-played";
const authUrl =
  "https://accounts.spotify.com/authorize?" +
  new URLSearchParams({ response_type: "code", client_id: clientId, scope, redirect_uri: redirect });

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, redirect);
  if (url.pathname !== "/callback") return res.end();
  const code = url.searchParams.get("code");
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "authorization_code", code, redirect_uri: redirect }),
  });
  const json = await tokenRes.json();
  if (json.refresh_token) {
    console.log("\nSPOTIFY_REFRESH_TOKEN=" + json.refresh_token + "\n");
    res.end("Pronto! Volte para o terminal e copie o refresh token.");
  } else {
    console.log("Erro:", json);
    res.end("Deu erro, veja o terminal.");
  }
  server.close();
});

server.listen(3001, "127.0.0.1", () => {
  console.log("Abra este link no navegador e autorize:\n\n" + authUrl + "\n");
});

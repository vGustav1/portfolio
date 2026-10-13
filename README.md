# Gustavo Vieira · Portfólio

Portfólio pessoal em uma página, com visual neon anos 80 e objetos low-poly, em português e inglês.

Laboratório 01 · Desenvolvimento e Integração de Aplicações Web (DIAW) · Engenharia de Software · PUC Minas

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)
![Vercel](https://img.shields.io/badge/deploy-Vercel-000000?logo=vercel)

🔗 **Site:** https://portfolio-gus-corp1.vercel.app

## Sobre o projeto

A abertura é uma cidade animada ao pôr do sol. Ao rolar, o conteúdo aparece sobre um fundo escuro, com um menu fixo que leva a cada seção:

- **Sobre mim** — apresentação, formação e um sistema solar interativo com as tecnologias que já usei
- **Projetos** — linha do tempo do mais antigo ao mais recente, com tecnologias, GitHub e GIF
- **Experiências** — com filtro por tipo
- **Hobbies** — dados ao vivo do Spotify, Steam, League of Legends e Chess.com
- **Contato** — ícones clicáveis e formulário que envia e-mail

## Tecnologias

| Uso | Tecnologia |
| --- | --- |
| Framework | Next.js 16 (App Router) + React 19 |
| Linguagem | TypeScript 5 |
| Estilo | CSS puro com variáveis |
| E-mail | EmailJS (`@emailjs/browser`) |
| APIs | Spotify, Steam, Riot Games, Chess.com, IGDB |
| Hospedagem | Vercel |

As chaves das APIs ficam no servidor, nas rotas `app/api/*`. Sem chave configurada, cada card mostra dados de exemplo em vez de quebrar.

## Como rodar

Pré-requisitos: Node.js 20+ e npm.

```bash
git clone https://github.com/vGustav1/portfolio.git
cd portfolio
npm install
cp .env.example .env.local   # opcional: preencha as chaves
npm run dev                  # http://localhost:3000
```

Para gerar a versão de produção: `npm run build` e `npm run start`.

As variáveis de ambiente estão explicadas no [`.env.example`](.env.example). Na Vercel, cadastre as mesmas em **Settings → Environment Variables**.

## Estrutura

```
app/
  api/          rotas de servidor (Spotify, Steam, LoL, xadrez, IGDB)
  layout.tsx    HTML base e fontes
  page.tsx      página única
  globals.css   identidade visual
components/     uma seção por arquivo + ícones low-poly
data/
  content.ts    todo o conteúdo editável (projetos, experiências, habilidades)
lib/
  i18n.tsx      textos em PT/EN
public/         imagens e GIFs
```

## Demonstração

<!-- Adicione aqui os prints dos wireframes (Figma) e do site -->

| Wireframe | Site |
| --- | --- |
| ![Wireframe](docs/wireframe.png) | ![Site](docs/site.png) |

## Autor

**Gustavo Vieira** · [GitHub](https://github.com/vGustav1) · [LinkedIn](https://www.linkedin.com/in/seu-perfil)

Licença MIT.

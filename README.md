#Portfólio 👨‍💻

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Site pessoal desenvolvido no <b>Laboratório 01</b> da disciplina <i>Desenvolvimento e Integração de Aplicações Web (DIAW)</i> do curso de <b>Engenharia de Software da PUC Minas</b>. Ele reúne minha apresentação, projetos, experiências, hobbies e formas de contato em uma única página responsiva, publicada gratuitamente na <b>Vercel</b>. A abertura é uma cidade animada ao pôr do sol; as habilidades aparecem em um sistema solar interativo; e a seção de hobbies mostra informações reais do Spotify, da Steam, do Chess.com e da IGDB.
      </div>
    </td>
    <td>
      <div>
        <img src="docs/logo.png" alt="Logo GS" width="120px"/>
      </div>
    </td>
  </tr>
</table>

---

## 🚧 Status do Projeto

![Status](https://img.shields.io/badge/status-concluído-2ef2ff)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)
![Vercel](https://img.shields.io/badge/deploy-Vercel-000000?logo=vercel)
![Licença](https://img.shields.io/badge/licença-MIT-ff2e88)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Variáveis de Ambiente](#-variáveis-de-ambiente)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Como Executar a Aplicação](#-como-executar-a-aplicação)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Demo Online:** [portfolio-gus-corp1.vercel.app](https://portfolio-gus-corp1.vercel.app)
* 💻 **Repositório:** [github.com/vGustav1/portfolio](https://github.com/vGustav1/portfolio)

---

## 📝 Sobre o Projeto
O objetivo é ter um **portfólio profissional autêntico**, que apresente minha trajetória, habilidades, projetos e formas de contato de maneira moderna e acessível, e que também mostre um pouco de quem eu sou fora do código.

- **Por que existe:** atividade avaliativa do Laboratório 01 (DIAW · PUC Minas) e vitrine pessoal para processos seletivos de estágio.
- **Qual problema resolve:** centraliza em um único link tudo o que um recrutador precisa ver: formação, projetos com demonstração, experiências e contato direto.
- **Contexto:** acadêmico, com uso real como portfólio pessoal.
- **Diferencial:** identidade visual própria (neon anos 80 + low-poly), versão bilíngue e dados ao vivo de serviços que eu uso no dia a dia.

---

## ✨ Funcionalidades Principais

- 🌐 **Internacionalização (i18n):** todo o conteúdo em português e inglês, com troca no menu e preferência salva no navegador.
- 🧭 **Navegação em página única:** menu fixo com destaque da seção atual e menu sanfona no celular.
- 🌇 **Abertura animada:** cidade ao pôr do sol em GIF com efeito de profundidade (parallax) e um efeito VHS sutil.
- 🪐 **Habilidades em sistema solar:** cada tecnologia é um planeta low-poly orbitando o sol.
- 🗂️ **Projetos em grid:** nome, descrição, tecnologias, link do GitHub e GIF/imagem do projeto funcionando.
- 🏆 **Experiências:** empresa ou instituição, cargo/atividade, período e descrição, com etiqueta do tipo (profissional, evento, certificação).
- 🔄 **Integração com APIs externas (hobbies):**
  - **Spotify:** música tocando agora ou a última ouvida, com capa.
  - **Steam:** os 6 jogos mais jogados, com horas.
  - **Chess.com:** ratings de bullet, blitz e rápida.
  - **IGDB (Twitch):** capas dos jogos favoritos.
- 📨 **Formulário de contato:** nome, e-mail e mensagem com validação e envio por e-mail via **EmailJS**.
- 📱 **Design responsivo:** layout adaptado para celular, tablet e desktop.
- 🔐 **Chaves protegidas:** as credenciais das APIs ficam no servidor (rotas `app/api`) e nunca vão para o navegador.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end
* **Framework:** Next.js 16 (App Router, Turbopack)
* **Biblioteca de UI:** React 19
* **Linguagem:** TypeScript 5
* **Estilização:** CSS puro com variáveis (sem bibliotecas de componentes)
* **Fontes:** Barlow Condensed, Chakra Petch e Share Tech Mono (Google Fonts)

### 🖥️ Back-end
* **Rotas de servidor:** Next.js Route Handlers (`app/api/*`) com cache (`revalidate`)
* **E-mail:** EmailJS (`@emailjs/browser`)
* **APIs externas:** Spotify Web API, Steam Web API, Chess.com Public API, IGDB (via Twitch)

### ⚙️ Infraestrutura & DevOps
* **Hospedagem:** Vercel (deploy automático a cada `push` na `main`)
* **Versionamento:** Git e GitHub

### 📦 Dependências

| Pacote | Versão | Uso |
| --- | --- | --- |
| `next` | ^16.4.0 | Framework React full stack |
| `react` / `react-dom` | ^19.3.0 | Interface |
| `@emailjs/browser` | ^5.0.3 | Envio do formulário de contato |
| `typescript` *(dev)* | ^5.9.3 | Tipagem |
| `@types/node`, `@types/react`, `@types/react-dom` *(dev)* | — | Tipos do TypeScript |

---

## 🏗 Arquitetura

O site é uma aplicação **Next.js** de página única. Os componentes de interface rodam no navegador e buscam os dados dos hobbies em **rotas de servidor próprias**, que por sua vez chamam as APIs externas usando as chaves guardadas em variáveis de ambiente.

```
Navegador (React)
   │  fetch("/api/spotify"), ("/api/steam"), ("/api/chess"), ("/api/igdb")
   ▼
Rotas de servidor Next.js (Vercel)  ──►  Spotify · Steam · Chess.com · IGDB
   │  respostas em cache (revalidate) e dados de reserva se a API falhar
   ▼
Componente Hobbies renderiza os cards

Formulário de contato ──► EmailJS ──► Gmail
```
---

## 🔧 Instalação e Execução

### Pré-requisitos
* **Node.js** 20 ou superior
* **npm**
* **Git**

### 🔑 Variáveis de Ambiente

Copie `.env.example` para `.env.local` e preencha. Todas são opcionais: sem a chave, o card correspondente mostra dados de exemplo.

| Variável | Descrição |
| :--- | :--- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ID do serviço no EmailJS |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID do template no EmailJS |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Chave pública do EmailJS |
| `CHESS_USERNAME` | Usuário do Chess.com |
| `STEAM_API_KEY` / `STEAM_ID` | Chave da Steam Web API e SteamID64 |
| `SPOTIFY_CLIENT_ID` / `SPOTIFY_CLIENT_SECRET` | Credenciais do app no Spotify for Developers |
| `SPOTIFY_REFRESH_TOKEN` | Gerado uma vez com `node scripts/spotify-token.mjs ID SECRET` |
| `TWITCH_CLIENT_ID` / `TWITCH_CLIENT_SECRET` | Credenciais da Twitch, usadas pela IGDB |

Na Vercel, cadastre as mesmas variáveis em **Settings → Environment Variables**.

### 📦 Instalação de Dependências

```bash
git clone https://github.com/vGustav1/portfolio.git
cd portfolio
npm install
cp .env.example .env.local
```

### ⚡ Como Executar a Aplicação

```bash
npm run dev      # ambiente de desenvolvimento em http://localhost:3000
```

Versão de produção local:

```bash
npm run build
npm run start
```

---

## 🚀 Deploy

O deploy é feito na **Vercel**, conectada ao repositório do GitHub:

1. Importar o repositório em **vercel.com → Add New → Project**.
2. Cadastrar as variáveis de ambiente da tabela acima.
3. A cada `git push` na branch `main`, a Vercel gera e publica uma nova versão automaticamente.

---

## 📂 Estrutura de Pastas

```
.
├── app/
│   ├── api/
│   │   ├── chess/route.ts     # ratings do Chess.com
│   │   ├── igdb/route.ts      # capas dos jogos favoritos (IGDB/Twitch)
│   │   ├── spotify/route.ts   # música atual ou última ouvida
│   │   └── steam/route.ts     # jogos mais jogados
│   ├── globals.css            # identidade visual e responsividade
│   ├── layout.tsx             # HTML base, fontes e efeito VHS
│   └── page.tsx               # página única com todas as seções
├── components/
│   ├── Header.tsx             # menu fixo e troca de idioma
│   ├── Hero.tsx               # abertura com a cidade animada
│   ├── About.tsx              # sobre mim e formação
│   ├── SolarSystem.tsx        # habilidades em sistema solar
│   ├── Projects.tsx           # grid de projetos
│   ├── Experience.tsx         # experiências e certificações
│   ├── Hobbies.tsx            # cards com dados das APIs
│   ├── Contact.tsx            # canais e formulário (EmailJS)
│   ├── Footer.tsx
│   └── LowPoly.tsx            # ícones low-poly em SVG
├── data/
│   └── content.ts             # todo o conteúdo editável (PT/EN)
├── lib/
│   ├── i18n.tsx               # textos da interface e idioma
│   └── hobbies.ts             # tipos e dados de reserva
├── public/                    # foto, GIF da cidade e imagens dos projetos
├── scripts/
│   ├── spotify-token.mjs      # gera o refresh token do Spotify
│   └── cidade-gif.js          # gera os quadros da cidade animada
├── docs/                      # imagens do README
├── .env.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 🎥 Demonstração

### 🌐 Aplicação Web

| Tela | Captura de Tela |
| :---: | :---: |
| **Abertura** | **Sobre mim** |
| <img src="docs/home.jpg" alt="Abertura" width="420px"> | <img src="docs/sobre.jpg" alt="Sobre mim" width="420px"> |
| **Projetos** | **Experiências** |
| <img src="docs/projetos.jpg" alt="Projetos" width="420px"> | <img src="docs/experiencias.jpg" alt="Experiências" width="420px"> |
| **Contato** | **Versão mobile** |
| <img src="docs/contato.jpg" alt="Contato" width="420px"> | <img src="docs/mobile.jpg" alt="Versão mobile" width="200px"> |

---

## 🔗 Documentações utilizadas

* 📖 **Framework:** [Documentação do **Next.js**](https://nextjs.org/docs)
* 📖 **Biblioteca de UI:** [Documentação do **React**](https://react.dev/reference/react)
* 📖 **E-mail:** [Documentação do **EmailJS**](https://www.emailjs.com/docs/)
* 📖 **Spotify:** [Spotify **Web API**](https://developer.spotify.com/documentation/web-api)
* 📖 **Steam:** [Steam **Web API**](https://developer.valvesoftware.com/wiki/Steam_Web_API)
* 📖 **Chess.com:** [**Published-Data API**](https://www.chess.com/news/view/published-data-api)
* 📖 **IGDB:** [Documentação da **IGDB API**](https://api-docs.igdb.com/)
* 📖 **Hospedagem:** [Documentação da **Vercel**](https://vercel.com/docs)

---


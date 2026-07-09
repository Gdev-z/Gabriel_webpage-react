# Gabriel Zanon — Portfolio (React)

Portifolio em **React + Vite**, mantendo fidelidade visual ao site original mas com código limpo, componentizado e fácil de editar.

> O site original (`index.html`, `js/`, `images/` na raiz do repositório) permanece **intacto**. Este projeto vive em `react-app/`.

## Como rodar

```bash
cd react-app
npm install      # apenas na primeira vez
npm run dev      # abre http://localhost:5173
npm run build    # gera dist/ pronto para deploy
npm run preview  # pré-visualiza o build
```

## Stack

- **Vite + React 18** — build/dev instantâneo
- **motion** (ex-framer-motion) — animações (mesma lib do original)
- **Lenis** — smooth scroll (mesma lib do original)
- **CSS Modules** — um `.module.css` por componente, sem dependências

## Estrutura

```
src/
├── main.jsx                 # entry point
├── App.jsx                  # compõe as 10 seções
├── App.module.css
├── styles/
│   ├── tokens.css           # 🎨 TODAS as cores/fontes/medidas — edite aqui
│   ├── global.css           # reset + fontes + base
│   └── animations.js        # variants de animação reutilizáveis
├── hooks/
│   ├── useLenis.js          # smooth scroll
│   └── useClock.js          # relógio GMT+1 live
├── data/
│   └── content.js           # 📝 TODOS os textos/links — edite aqui
└── components/
    ├── LoadingOverlay.jsx   # 6 painéis que recuam no load
    ├── Navigation.jsx       # menu overlay + social + legal + relógio
    ├── Hero.jsx             # bg scale-in + headline PT + subtitle
    ├── Intro.jsx            # headline + video promo
    ├── ScrollingImages.jsx  # 3 pares com parallax X
    ├── ProjectHighlights.jsx# 3 cards (Boreal/Velocity/Stride)
    ├── Achievements.jsx     # headline letra-a-letra
    ├── VideoReel.jsx        # CTA final
    ├── LogoTicker.jsx       # marquee infinito
    └── Footer.jsx           # logo, menu, newsletter, social, ©
```

## Onde editar o quê

| Quero mudar... | Vá em... |
|---|---|
| Cores, fontes, espaçamentos | `src/styles/tokens.css` |
| Textos, links, projetos | `src/data/content.js` |
| Animações (timing, easing) | `src/styles/animations.js` |
| Layout/estilo de uma seção | `src/components/<Secao>.module.css` |

## Notas

- As fontes vêm do Google Fonts (Inter), igual ao original.
- Os assets (imagens/vídeo) estão em `public/assets/`, copiados de `../images/`.
- O `video-promo.mp4` (18,8 MB) está incluído — vale comprimir antes do deploy.

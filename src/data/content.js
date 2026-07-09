/* ============================================
   CONTEÚDO DO SITE — tudo editável em um lugar.
   Rebranding: Gabriel Zanon — Desenvolvedor Full Stack.
   ============================================ */

export const site = {
  name: 'Gabriel Zanon',
  title: 'Gabriel Zanon — Desenvolvedor Full Stack',
  description:
    'Gabriel Zanon — Desenvolvedor Full Stack. Aplicações robustas, interfaces modernas, do código ao deploy.',
  timezone: 'America/Sao_Paulo',
  timezoneLabel: 'Timezone (GMT-3)',
  email: 'gabrielzanon.dev@gmail.com',
  phone: '+55 13 99758-1820',
  whatsapp: '5513997581820',
  copyright: '© 2026 Gabriel Zanon — Todos os direitos reservados.',
  legalText: 'Serviços de desenvolvimento e design por Gabriel Zanon.',
}

/* ---- Links sociais (navegação + footer) ---- */
export const socials = [
  { label: 'WA', name: 'Whatsapp', href: 'https://wa.me/5513997581820' },
  { label: 'GH', name: 'GitHub', href: 'https://github.com/Gdev-z' },
  {
    label: 'LI',
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/gabriel-antonio-zanon/',
  },
  {
    label: 'EMAIL',
    name: 'Email',
    href: 'mailto:gabrielzanon.dev@gmail.com',
  },
]

/* ---- Menu principal (overlay) ---- */
export const menuLinks = [
  { label: 'Início', href: '#top' },
  { label: 'Sobre', href: '#introduction' },
  { label: 'Projetos', href: '#highlights' },
  { label: 'Serviços', href: '#achievements' },
  { label: 'Contato', href: '#footer' },
]

/* ---- Links legais ---- */
export const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Disclaimer', href: '#' },
]

/* ---- Hero ---- */
export const hero = {
  headlineLines: ['Código que', 'funciona.'],
  subtitle: 'Desenvolvedor Full Stack — React, Node, APIs e tudo entre o front e o back.',
}

/* ---- Intro ---- */
export const intro = {
  lines: [
    { text: 'Aplicações que' },
    { text: 'escalam com' },
    { text: 'performance' },
    { text: 'e propósito.' },
  ],
}

/* ---- Scrolling Images (3 pares com parallax) ---- */
export const scrollingImages = [
  {
    image1: { src: 'assets/project-car-top.jpeg', alt: 'Projeto automotivo' },
    image2: {
      src: 'assets/product-pouch.jpeg',
      alt: 'Design de produto digital',
    },
  },
  {
    image1: {
      src: 'assets/project-girl-vr.jpeg',
      alt: 'Experiência imersiva em VR',
    },
    image2: { src: 'assets/bg-art-bw.webp', alt: 'Design de interface' },
  },
  {
    image1: {
      src: 'assets/project-cube-mockup.jpeg',
      alt: 'Mockup de aplicação 3D',
    },
    image2: {
      src: 'assets/mockup-iphone-grid.jpeg',
      alt: 'Aplicativo mobile responsivo',
    },
  },
]

/* ---- Project Highlights (3 cards) ---- */
export const projects = [
  {
    name: 'Identidade Visual',
    client: 'Design + Branding',
    role: 'UI/UX Design — Figma + Illustrator + Photoshop',
    image: { src: 'assets/bg-abstract-shapes.png', alt: 'Plataforma de e-commerce' },
    href: '#',
  },
  {
    name: 'Proteção de Dados',
    client: 'LGPD & Compliance',
    role: 'termos de uso + política de privacidade — React + Node.js',
    image: { src: 'assets/logo-arpeggio-nav.jpg', alt: 'Dashboard em tempo real' },
    href: '#',
  },
  {
    name: 'Acessibilidade e SEO',
    client: 'Web App Responsivo',
    role: 'Full Stack Development — React + Node.js + PostgreSQL',
    image: {
      src: 'assets/hero-abstract.jpg',
      alt: 'Aplicativo mobile',
    },
    href: '#',
  },
]

/* ---- Achievements ---- */
export const achievements = {
  label: 'Experiência',
  subLabel: 'stack & ferramentas',
  headline: 'Cada linha de código resolve um problema real',
  subHeader: 'Back-end, front-end, mobile, APIs, cloud — entregas que funcionam em produção.',
}

/* ---- Video Reel / CTA final ---- */
export const videoReel = {
  titleLines: [
    { text: 'Tem um projeto?' },
    { text: 'Vamos construir.', accent: true },
  ],
  subtitle:
    'Precisa de um dev que entenda o projeto inteiro? Do wireframe ao deploy, eu entrego.',
  buttons: [
    { label: 'fale comigo', href: 'https://wa.me/5513997581820' },
    { label: 'enviar email', href: 'mailto:gabrielzanon.dev@gmail.com' },
  ],
}

/* ---- Logo Ticker ---- */
export const logoTicker = {
  title: 'Tecnologias que uso no dia a dia',
}

/* ---- Footer ---- */
export const footer = {
  locationText:
    'Desenvolvedor Full Stack disponível para projetos remotos ou presenciais.',
  menuBar1: [
    { label: 'Início', href: '#top' },
    { label: 'Projetos', href: '#highlights' },
    { label: 'Sobre', href: '#introduction' },
    { label: 'Serviços', href: '#achievements' },
    { label: 'Contato', href: '#footer' },
  ],
  newsletter: {
    title: 'Fique por dentro',
    subtitle:
      'Receba novidades sobre projetos, dicas de dev e atualizações direto no seu email.',
    secondary: 'Sem spam. Apenas conteúdo relevante.',
    inputPlaceholder: 'Seu melhor email',
  },
  // menuBar2: [
  //   { label: 'Privacy Policy', href: '#' },
  //   { label: 'Terms of Service', href: '#' },
  //   { label: 'Disclaimer', href: '#' },
  // ],
}

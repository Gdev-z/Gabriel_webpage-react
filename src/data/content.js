/* ============================================
   CONTEÚDO DO SITE — tudo editável em um lugar.
   Rebranding: Gabriel Zanon — Desenvolvedor Full Stack
   product-minded (design + código + deploy).
   ============================================ */

export const site = {
  name: 'Gabriel Zanon',
  title: 'Gabriel Zanon — Desenvolvedor Full Stack',
  description:
    'Gabriel Zanon — Desenvolvedor Full Stack. Eu desenho a interface, construo o back-end e coloco no ar: ponta a ponta.',
  timezone: 'America/Sao_Paulo',
  timezoneLabel: 'Timezone (GMT-3)',
  email: 'gabrielzanon.dev@gmail.com',
  phone: '+55 13 99758-1820',
  whatsapp: '5513997581820',
  copyright: '© 2026 Gabriel Zanon — Todos os direitos reservados.',
  legalText: 'Desenvolvimento e design de produtos digitais por Gabriel Zanon.',
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
  { label: 'Como trabalho', href: '#achievements' },
  { label: 'Contato', href: '#footer' },
]

/* ---- Links legais ---- */
export const legalLinks = [
  { label: 'Privacidade', href: '#' },
  { label: 'Termos', href: '#' },
  { label: 'Aviso', href: '#' },
]

/* ---- Hero ---- */
export const hero = {
  label: 'Full Stack Developer',
  headlineLines: ['Produtos digitais', 'de ponta a ponta.'],
  subtitle:
    'Do wireframe ao deploy: design, front, back-end e hospedagem — tudo com uma pessoa só.',
  cta: [
    { label: 'Ver projetos', href: '#highlights', primary: true },
    { label: 'Falar comigo', href: 'https://wa.me/5513997581820', primary: false },
  ],
}

/* ---- Intro ---- */
export const intro = {
  lines: [
    { text: 'Você tem a ideia.'},
    { text: 'Eu cuido do resto:'},
    { text: 'design, código'},
    { text: 'e deploy.'},
  ],
}

/* ---- Scrolling Images (3 pares com parallax) ---- */
export const scrollingImages = [
  {
    image1: { src: 'assets/gallery-automotive.jpeg', alt: 'Projeto automotivo' },
    image2: {
      src: 'assets/gallery-product-design.jpeg',
      alt: 'Design de produto digital',
    },
  },
  {
    image1: {
      src: 'assets/gallery-vr-experience.jpeg',
      alt: 'Experiência imersiva em VR',
    },
    image2: { src: 'assets/gallery-ui-design.jpg', alt: 'Design de interface' },
  },
  {
    image1: {
      src: 'assets/gallery-3d-mockup.jpeg',
      alt: 'Mockup de aplicação 3D',
    },
    image2: {
      src: 'assets/gallery-mobile-app.jpeg',
      alt: 'Aplicativo mobile responsivo',
    },
  },
]

/* ---- Project Highlights (3 cards) ---- */
export const projects = [
  {
    name: 'Site que aparece',
    client: 'SEO & Acessibilidade',
    role: 'Full Stack + otimização para busca',
    image: {
      src: 'assets/project-compativel.jpg',
      alt: 'Site otimizado e acessível',
    },
    href: 'https://compativeis-v1.vercel.app/',
  },
  {
    name: 'Plataformas Premium',
    client: 'Plataforma de Projetos',
    role: 'Full Stack — React + Node.js',
    image: { src: 'assets/devclub.png', alt: 'DevClub plataforma de projetos' },
    href: 'https://devclub-smoky.vercel.app/',
  },
  {
    name: 'App dentro da lei',
    client: 'LGPD & Termos',
    role: 'Back-end seguro + documentação de compliance',
    image: { src: 'assets/project-lgpd.jpg', alt: 'Plataforma em conformidade' },
    href: '#',
  },
]

/* ---- Achievements ("Como trabalho") ---- */
export const achievements = {
  label: 'Como trabalho',
  subLabel: 'do briefing ao deploy',
  headline: 'Menos burocracia. Mais produto nas mãos do usuário.',
  subHeader:
    'Eu assumo o projeto inteiro — front, back-end, mobile, APIs e nuvem — pra você não correr atrás de três fornecedores.',
}

/* ---- Video Reel / CTA final ---- */
export const videoReel = {
  titleLines: [
    { text: 'Tem um projeto', accent: false },
    { text: 'pra gente construir?', accent: true },
  ],
  subtitle:
    'Me conta o que você precisa. Eu traduzo em código, design e deploy.',
  buttons: [
    { label: 'chamar no WhatsApp', href: 'https://wa.me/5513997581820' },
    { label: 'enviar um email', href: 'mailto:gabrielzanon.dev@gmail.com' },
  ],
}

/* ---- Logo Ticker ---- */
export const logoTicker = {
  title: 'Tecnologias que uso no dia a dia',
}

/* ---- Footer ---- */
export const footer = {
  locationText:
    'Aberto a projetos remotos e presenciais — Brasil e exterior.',
  menuBar1: [
    { label: 'Início', href: '#top' },
    { label: 'Projetos', href: '#highlights' },
    { label: 'Sobre', href: '#introduction' },
    { label: 'Como trabalho', href: '#achievements' },
    { label: 'Contato', href: '#footer' },
  ],
  newsletter: {
    title: 'Receba dicas de produto e dev',
    subtitle:
      'Um email por mês com o que aprendi construindo produtos de verdade.',
    secondary: 'Sem spam. Apenas conteúdo que vale a leitura.',
    inputPlaceholder: 'Seu melhor email',
  },
}

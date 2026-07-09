/* ============================================
   VARIANTS DE ANIMAÇÃO REUTILIZÁVEIS
   Espelham o sistema de scroll-reveal do Framer
   original (6.271 elementos animados).

   Uso:
   import { fadeUp } from '../styles/animations'
   <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
   ============================================ */

import { cubicBezier } from 'motion'

// Easings que aproximam o feel do Framer original
const easeOutExpo = cubicBezier(0.16, 1, 0.3, 1)
const easeInOutCirc = cubicBezier(0.85, 0, 0.15, 1)

// Viewport padrão: dispara uma vez, com pequena antecipação
export const viewportOnce = { once: true, amount: 0.2 }

/* ---- Reveal básico (mais comum) ---- */
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
}

/* ---- Reveal com translate Y maior (hero, impactos) ---- */
export const fadeUpLarge = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeOutExpo },
  },
}

/* ---- Reveal vindo da esquerda/direita (parallax de imagens) ---- */
export const fadeFromRight = (distance = 350) => ({
  hidden: { opacity: 0, x: distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: easeOutExpo },
  },
})

export const fadeFromLeft = (distance = 350) => ({
  hidden: { opacity: 0, x: -distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: easeOutExpo },
  },
})

/* ---- Blur-in (menu overlay, painéis de carregamento) ---- */
export const blurIn = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easeOutExpo },
  },
}

/* ---- Scale-in (hero background, imagens de projetos) ---- */
export const scaleIn = (from = 1.6) => ({
  hidden: { opacity: 0, scale: from },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: easeInOutCirc },
  },
})

/* ---- Container com stagger (texto letra-a-letra, listas) ---- */
export const staggerContainer = (stagger = 0.04, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

/* ---- Item filho para stagger (cada letra/palavra) ---- */
export const staggerItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
}

export { easeOutExpo, easeInOutCirc }

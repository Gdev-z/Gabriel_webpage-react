import { useRef, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'motion/react'
import { hero } from '../data/content'
import { fadeUpLarge, staggerContainer, staggerItem } from '../styles/animations'
import styles from './Hero.module.css'

/* ============================================
   Hero — seção de abertura.
   - Background com scale-in (1.6 → 1) + parallax
   - Logo SVG central (logoG.svg) com mouse parallax invertido
   - Subtitle Dev Full Stack
   - Plus-bar decorativo animado
   ============================================ */

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  // Parallax suave no background ao rolar
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  // --- Mouse parallax invertido na logo ---
  // Posição normalizada do cursor (-0.5..0.5) relativa ao viewport.
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  // Spring suaviza o seguimento do cursor (evita movimento brusco).
  const springX = useSpring(pointerX, { stiffness: 150, damping: 18, mass: 0.4 })
  const springY = useSpring(pointerY, { stiffness: 150, damping: 18, mass: 0.4 })

  // Sinal negativo = a logo foge do cursor (reverse parallax).
  const logoX = useTransform(springX, [-0.5, 0.5], [18, -18])
  const logoY = useTransform(springY, [-0.5, 0.5], [14, -14])

  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    function onMouseMove(e) {
      // -0.5 (esquerda/top) .. 0.5 (direita/baixo)
      pointerX.set(e.clientX / window.innerWidth - 0.5)
      pointerY.set(e.clientY / window.innerHeight - 0.5)
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [pointerX, pointerY, reduceMotion])

  return (
    <section ref={ref} className={styles.hero} id="hero">
      {/* Background com scale-in + parallax + brightness */}
      <motion.div
        className={styles.bgWrapper}
        initial={{ scale: 1.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.85, 0, 0.15, 1], delay: 0.2 }}
        style={{ y: bgY }}
      >
        <img
          src="assets/hero-background.jpg"
          alt="Girl in white smoke"
          className={styles.bgImage}
          fetchPriority="high"
        />
        <div className={styles.bgOverlay} />
      </motion.div>

      {/* Conteúdo central */}
      <motion.div
        className={styles.content}
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15, 1.4)}
      >
        {/* Logo SVG central — reveal de opacidade + mouse parallax invertido */}
        <motion.img
          src="assets/logoG.svg"
          alt="Gabriel Zanon — Logo"
          className={styles.logoSvg}
          style={{ x: reduceMotion ? 0 : logoX, y: reduceMotion ? 0 : logoY }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        />

        {/* Subtitle PT */}
        <motion.p className={styles.subtitle} variants={staggerItem}>
          {hero.subtitle}
        </motion.p>
<br/>
<br/>
      </motion.div>
      {/* Plus-bar decorativo (desktop/tablet) */}
      <div className={styles.plusBar} aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className={styles.plusBarItem}
            initial={{ opacity: 0, x: i === 1 ? -367 : 367 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 1.8 + i * 0.1,
            }}
          />
        ))}
      </div>
    </section>
  )
}

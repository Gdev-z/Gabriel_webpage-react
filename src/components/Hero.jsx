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
import { staggerContainer, staggerItem } from '../styles/animations'
import styles from './Hero.module.css'

/* ============================================
   Hero — Split / Two-Column Asymmetric Layout
   - Left: Headline + Subtitle + CTA
   - Right: Logo with mouse parallax
   - Background with subtle parallax
   ============================================ */

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  // Mouse parallax for logo
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const springX = useSpring(pointerX, { stiffness: 150, damping: 18, mass: 0.4 })
  const springY = useSpring(pointerY, { stiffness: 150, damping: 18, mass: 0.4 })

  const logoX = useTransform(springX, [-0.5, 0.5], [20, -20])
  const logoY = useTransform(springY, [-0.5, 0.5], [15, -15])

  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    function onMouseMove(e) {
      pointerX.set(e.clientX / window.innerWidth - 0.5)
      pointerY.set(e.clientY / window.innerHeight - 0.5)
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [pointerX, pointerY, reduceMotion])

  return (
    <section ref={ref} className={styles.hero} id="hero">
      {/* Background */}
      <motion.div
        className={styles.bgWrapper}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: 0.1 }}
        style={{ y: bgY }}
      >
        <img
          src="assets/hero-background.jpg"
          alt=""
          className={styles.bgImage}
          fetchPriority="high"
        />
        <div className={styles.bgOverlay} />
      </motion.div>

      {/* Content Grid */}
      <div className={styles.container}>
        {/* Left Column — Text */}
        <motion.div
          className={styles.textColumn}
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12, 1.2)}
        >
          <motion.span className={styles.label} variants={staggerItem}>
            {hero.label}
          </motion.span>

          <motion.h1 className={styles.headline} variants={staggerItem}>
            {hero.headlineLines.map((line, i) => (
              <span key={i} className={styles.headlineLine}>
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p className={styles.subtitle} variants={staggerItem}>
            {hero.subtitle}
          </motion.p>

          <motion.div className={styles.ctaGroup} variants={staggerItem}>
            {hero.cta.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className={btn.primary ? styles.ctaPrimary : styles.ctaSecondary}
              >
                {btn.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column — Visual */}
        <motion.div
          className={styles.visualColumn}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <motion.img
            src="assets/logoG.svg"
            alt="Gabriel Zanon — Logo"
            className={styles.logoSvg}
            style={{ x: reduceMotion ? 0 : logoX, y: reduceMotion ? 0 : logoY }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}

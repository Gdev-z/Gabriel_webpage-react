import { motion } from 'motion/react'
import { logoTicker, site } from '../data/content'
import { viewportOnce } from '../styles/animations'
import styles from './LogoTicker.module.css'

/* ============================================
   LogoTicker — marquee infinito horizontal.
   Usa CSS keyframes + mask-image nas bordas.
   Logos = SVGs reutilizados como placeholder.
   ============================================ */

const tickerLogos = [
  'assets/icon-play.svg',
  'assets/icon-arrow-right.svg',
  'assets/icon-external.svg',
  'assets/icon-arrow-left.svg',
  'assets/icon-dots.svg',
  'assets/icon-pause.svg',
  'assets/icon-plus.svg',
  'assets/javascript.svg',
  'assets/node_js.svg',
  'assets/React.svg',
  'assets/Typescript.svg',
]

export default function LogoTicker() {
  // Duplica a lista para o loop infinito parecer contínuo
  const loop = [...tickerLogos, ...tickerLogos]

  return (
    <section className={styles.section}>
      <motion.p
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
      >
        {logoTicker.title}
      </motion.p>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.track}>
          {loop.map((src, i) => (
            <span key={i} className={styles.logoItem}>
              <img src={src} alt="" className={styles.logo} loading="lazy" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

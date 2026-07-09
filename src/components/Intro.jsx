import { motion } from 'motion/react'
import { intro } from '../data/content'
import { fadeUpLarge, staggerContainer, staggerItem, viewportOnce } from '../styles/animations'
import styles from './Intro.module.css'

/* ============================================
   Intro — headline misto PT/EN + video promo.
   Etapa 3 (implementação completa).
   Por ora, headline funcional; video em stub.
   ============================================ */

export default function Intro() {
  return (
    <section className={styles.intro} id="introduction">
      <motion.div
        className={styles.headline}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
      >
        {intro.lines.map((line, i) => (
          <motion.span key={i} className={styles.line} variants={fadeUpLarge}>
            {line.text}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className={styles.videoWrapper}
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* TODO Etapa 3: apontar para assets/video-promo.mp4 local */}
        <video
          className={styles.video}
          src="assets/video-promo.mp4"
          poster="assets/hero-video-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
    </section>
  )
}

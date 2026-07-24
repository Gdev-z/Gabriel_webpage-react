import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { videoReel } from '../data/content'
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '../styles/animations'
import styles from './VideoReel.module.css'

/* ============================================
   VideoReel — CTA final com bg image + 2 botões.
   "We transform brands. Your success is next."
   ============================================ */

export default function VideoReel() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.3, 1.1])

  return (
    <section ref={ref} className={styles.section}>
      {/* Background image com parallax de scale */}
      <motion.img
        src="assets/team-photo.webp"
        alt=""
        className={styles.bgImage}
        style={{ scale: bgScale }}
        loading="lazy"
      />
      <div className={styles.scrim} />

      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
      >
        <h2 className={styles.title}>
          {videoReel.titleLines.map((line, i) => (
            <motion.span
              key={i}
              className={styles.titleLine}
              data-accent={line.accent || undefined}
              variants={staggerItem}
            >
              {line.text}
            </motion.span>
          ))}
        </h2>

        <motion.p className={styles.subtitle} variants={staggerItem}>
          {videoReel.subtitle}
        </motion.p>

        <motion.div className={styles.buttons} variants={staggerItem}>
          {videoReel.buttons.map((btn) => (
            <a key={btn.label} href={btn.href} className={styles.button}>
              <span>{btn.label}</span>
              <span className={styles.buttonUnderline} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

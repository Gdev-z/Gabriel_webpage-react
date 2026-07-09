import { motion } from 'motion/react'
import { achievements } from '../data/content'
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '../styles/animations'
import styles from './Achievements.module.css'

/* ============================================
   Achievements — headline animada letra-a-letra.
   "Behind every statistic pulses a human story"
   ============================================ */

// Quebra o headline em palavras → letras, para stagger por letra
function AnimatedHeadline({ text }) {
  const words = text.split(' ')
  return (
    <motion.h2
      className={styles.headline}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.04)}
    >
      {words.map((word, wi) => (
        <span key={wi} className={styles.word}>
          {word.split('').map((char, ci) => (
            <motion.span key={ci} className={styles.char} variants={staggerItem}>
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span className={styles.space}>&nbsp;</span>}
        </span>
      ))}
    </motion.h2>
  )
}

export default function Achievements() {
  return (
    <section className={styles.section} id="achievements">
      <div className={styles.inner}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <img src="assets/icon-circle.svg" alt="" className={styles.bullet} />
          <span>{achievements.label}</span>
        </motion.div>

        <span className={styles.subLabel}>{achievements.subLabel}</span>

        <AnimatedHeadline text={achievements.headline} />

        <motion.p
          className={styles.subHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {achievements.subHeader}
        </motion.p>
      </div>
    </section>
  )
}

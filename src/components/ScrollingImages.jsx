import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { scrollingImages } from '../data/content'
import { viewportOnce } from '../styles/animations'
import styles from './ScrollingImages.module.css'

/* ============================================
   ScrollingImages — 3 pares com parallax X.
   Refinamento completo na Etapa 3.
   ============================================ */

function ImagePair({ pair, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x1 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const x2 = useTransform(scrollYProgress, [0, 1], [-80, 80])

  return (
    <div ref={ref} className={styles.pair}>
      <motion.img
        src={pair.image1.src}
        alt={pair.image1.alt}
        style={{ x: x1 }}
        className={styles.image}
        loading="lazy"
      />
      <motion.img
        src={pair.image2.src}
        alt={pair.image2.alt}
        style={{ x: x2 }}
        className={styles.image}
        loading="lazy"
      />
    </div>
  )
}

export default function ScrollingImages() {
  return (
    <section className={styles.section} id="floating-spotlight">
      <motion.h2
        className={styles.visuallyHidden}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        Selected work
      </motion.h2>
      <div className={styles.grid}>
        {scrollingImages.map((pair, i) => (
          <ImagePair key={i} pair={pair} index={i} />
        ))}
      </div>
    </section>
  )
}

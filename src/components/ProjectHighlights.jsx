import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { projects } from '../data/content'
import { viewportOnce } from '../styles/animations'
import styles from './ProjectHighlights.module.css'

/* ============================================
   ProjectHighlights — 3 cards full-width.
   Cada card: nome do projeto, cliente, role,
   imagem full-bleed com brightness(0.7).
   Hover: imagem escala + brightness.
   ============================================ */

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // Parallax suave na imagem dentro do card
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.25])

  return (
    <motion.a
      ref={ref}
      href={project.href}
      className={styles.card}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Imagem full-bleed */}
      <motion.img
        src={project.image.src}
        alt={project.image.alt}
        className={styles.cardImage}
        style={{ scale }}
        loading="lazy"
      />
      <div className={styles.cardScrim} />

      {/* Conteúdo sobreposto */}
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <span className={styles.cardName}>{project.name}</span>
        </div>
        <div className={styles.cardDivider} />
        <div className={styles.cardFooter}>
          <span className={styles.cardClient}>{project.client}</span>
          <span className={styles.cardRole}>{project.role}</span>
        </div>
      </div>
    </motion.a>
  )
}

export default function ProjectHighlights() {
  return (
    <section className={styles.section} id="highlights">
      {projects.map((project, i) => (
        <ProjectCard key={project.name} project={project} index={i} />
      ))}
    </section>
  )
}

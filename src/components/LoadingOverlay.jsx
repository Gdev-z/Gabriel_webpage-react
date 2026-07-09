import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import styles from './LoadingOverlay.module.css'

/* ============================================
   LoadingOverlay — 6 painéis pretos cobrem a
   tela na carga, seguram um instante e então
   recuam de cima para baixo (stagger), revelando
   o site por baixo. Espelha o loader do Framer.
   ============================================ */

const PANEL_COUNT = 6

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      setVisible(false)
      return
    }

    // Trava o scroll enquanto o overlay está visível
    document.body.style.overflow = 'hidden'

    // Segura os painéis cobrindo a tela por 1.2s, depois marca para sair
    const holdTimer = setTimeout(() => {
      setExiting(true)
    }, 1200)

    return () => {
      clearTimeout(holdTimer)
    }
  }, [])

  // Remove o overlay do DOM e libera o scroll após a animação de saída
  function handleAnimationComplete() {
    if (exiting) {
      document.body.style.overflow = ''
      setVisible(false)
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Loading"
          aria-live="polite"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className={styles.panels} aria-hidden="true">
            {Array.from({ length: PANEL_COUNT }).map((_, i) => (
              <motion.div
                key={i}
                className={styles.panel}
                initial={{ scaleY: 1 }}
                animate={
                  exiting
                    ? { scaleY: 0 }
                    : { scaleY: 1 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.85, 0, 0.15, 1],
                  delay: exiting ? i * 0.08 : 0,
                }}
                onAnimationComplete={
                  // Só o último painel dispara a remoção
                  i === PANEL_COUNT - 1 ? handleAnimationComplete : undefined
                }
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useClock } from '../hooks/useClock'
import { socials, menuLinks, legalLinks, site } from '../data/content'
import { staggerContainer, staggerItem } from '../styles/animations'
import styles from './Navigation.module.css'

/* ============================================
   Navigation — menu overlay fullscreen.
   - Burger fixo no topo (linhas laranja)
   - Overlay com backdrop blur: social, menu, legal
   - Logo fixo à esquerda
   - Relógio GMT+1 live no painel
   ============================================ */

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const time = useClock(site.timezone)

  // Fecha com ESC e trava scroll quando aberto
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* Logo fixo */}
      <motion.a
        href="#top"
        className={styles.logo}
        aria-label={`${site.name} — voltar ao topo`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
      >
        <img src="assets/icon-star.svg" alt="" />
      </motion.a>

      {/* Burger fixo no canto superior direito */}
      <motion.button
        type="button"
        className={styles.burger}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.6 }}
      >
        <span className={styles.burgerLine} data-open={open} />
        <span className={styles.burgerLine} data-open={open} />
      </motion.button>

      {/* Overlay do menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Backdrop com blur */}
            <div className={styles.backdrop} aria-hidden="true" />

            {/* Painel de conteúdo */}
            <motion.div
              className={styles.content}
              initial="hidden"
              animate="visible"
              variants={staggerContainer(0.08, 0.1)}
            >
              {/* Topo: social + timezone */}
              <div className={styles.topRow}>
                <motion.ul className={styles.social} variants={staggerItem}>
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target={
                          s.href.startsWith('mailto:')
                            ? undefined
                            : '_blank'
                        }
                        rel="noopener noreferrer"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </motion.ul>

                <motion.div className={styles.timezone} variants={staggerItem}>
                  <span className={styles.time} suppressHydrationWarning>
                    {time}
                  </span>
                  <span className={styles.tzLabel}>{site.timezoneLabel}</span>
                  <p className={styles.status}>
                    Disponível para projetos{' '}
                    <span className={styles.accent}>remotos</span> e
                    presenciais.
                  </p>
                </motion.div>
              </div>

              {/* Menu principal */}
              <motion.nav
                className={styles.menu}
                variants={staggerContainer(0.06, 0.2)}
              >
                {menuLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className={styles.menuLink}
                    variants={staggerItem}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>

              {/* Links legais */}
              <motion.ul className={styles.legal} variants={staggerItem}>
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles.legalLink}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { motion } from 'motion/react'
import { useClock } from '../hooks/useClock'
import {
  site,
  socials,
  footer as footerContent,
} from '../data/content'
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '../styles/animations'
import styles from './Footer.module.css'

/* ============================================
   Footer — seção clara (inverte o tema).
   - Logo + localização PT + relógio
   - Menu principal + legal
   - Newsletter
   - Social row
   - Copyright + back-to-top
   ============================================ */

export default function Footer() {
  const time = useClock(site.timezone)

  return (
    <footer className={styles.footer} id="footer">
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
      >
        {/* ---- Topo: logo + localização + relógio ---- */}
        <div className={styles.topRow}>
          <motion.div className={styles.brand} variants={fadeUp}>
            <img
              src="assets/icon-star.svg"
              alt=""
              className={styles.brandLogo}
              loading="lazy"
            />
            <span className={styles.brandName}>{site.name}</span>
          </motion.div>

          <motion.div className={styles.location} variants={fadeUp}>
            <img src="assets/icon-circle.svg" alt="" className={styles.bullet} loading="lazy" />
            <p>{footerContent.locationText}</p>
          </motion.div>

          <motion.div className={styles.clock} variants={fadeUp}>
            <span className={styles.time} suppressHydrationWarning>
              {time}
            </span>
            <div className={styles.clockMeta}>
              <img src="assets/icon-globe.svg" alt="Globe icon" loading="lazy" />
              <span>{site.timezoneLabel}</span>
            </div>
          </motion.div>
        </div>

        {/* ---- Menu principal ---- */}
        <motion.nav className={styles.menuBar} variants={fadeUp}>
          {footerContent.menuBar1.map((link) => (
            <a key={link.label} href={link.href} className={styles.menuLink}>
              <span>{link.label}</span>
              <span className={styles.menuUnderline} />
            </a>
          ))}
        </motion.nav>

        {/* ---- Newsletter ---- */}
        <motion.div className={styles.newsletter} variants={fadeUp}>
          <div className={styles.newsletterText}>
            <h3 className={styles.newsletterTitle}>
              {footerContent.newsletter.title}
            </h3>
            <p className={styles.newsletterSubtitle}>
              {footerContent.newsletter.subtitle}
            </p>
            <p className={styles.newsletterSecondary}>
              {footerContent.newsletter.secondary}
            </p>
          </div>
          <form
            className={styles.newsletterForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={footerContent.newsletter.inputPlaceholder}
              className={styles.newsletterInput}
              aria-label="Email"
            />
            <button type="submit" className={styles.newsletterSubmit} aria-label="Subscribe">
              <img src="assets/icon-chevron-left.svg" alt="" loading="lazy" />
            </button>
          </form>
        </motion.div>
{/* 
       
        <motion.ul className={styles.legalBar} variants={fadeUp}>
          {footerContent.menuBar2.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.legalLink}>
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul> */}

        {/* ---- Social row ---- */}
        <motion.ul className={styles.socialRow} variants={fadeUp}>
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <span>{s.name}</span>
                <img src="assets/icon-chevron-right.svg" alt="" loading="lazy" />
              </a>
            </li>
          ))}
        </motion.ul>

        {/* ---- Bottom: endereço + copyright ---- */}
        <motion.div className={styles.bottom} variants={fadeUp}>
          <div className={styles.address}>
            <span className={styles.addressLabel}>Offline</span>
            <strong className={styles.addressName}>{site.name}</strong>
            <a href={`tel:${site.phone}`} className={styles.addressPhone}>
              {site.phone}
            </a>
          </div>

          <p className={styles.legalText}>{site.legalText}</p>
          <p className={styles.copyright}>{site.copyright}</p>
        </motion.div>
      </motion.div>

      {/* Back to top */}
      <a href="#top" className={styles.backToTop} aria-label="Scroll back to top">
        <img src="assets/icon-chevron-up.svg" alt="" loading="lazy" />
      </a>
    </footer>
  )
}

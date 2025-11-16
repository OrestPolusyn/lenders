import { navLinks } from '@/const/navLinks'
import { useEffect } from 'react'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <div className={styles.mobileMenuHeader}>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label='Close menu'
          >
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={styles.mobileMenuNav}>
          <ul className={styles.mobileMenuList}>
            {navLinks.map(link => (
              <li key={link.href} className={styles.mobileMenuListItem}>
                <a
                  href={link.href}
                  className={styles.mobileMenuLink}
                  onClick={onClose}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

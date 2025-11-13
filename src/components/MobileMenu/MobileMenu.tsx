import { useState, useEffect } from 'react'
import { BUSINESS_INFO } from '@/config/constants'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const links = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Our Programs', href: '/loan' },
  { title: 'Calculator', href: '/calculator' },
  { title: 'News', href: '/news' },
  { title: 'Contact Us', href: '/contact' },
]

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
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <div className="logo">The Lenders</div>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={styles.mobileMenuNav}>
          <ul className={styles.mobileMenuList}>
            {links.map((link) => (
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

          <div className={styles.mobileMenuFooter}>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={styles.mobileMenuPhone}
            >
              {BUSINESS_INFO.phoneFormatted}
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className={styles.mobileMenuEmail}
            >
              {BUSINESS_INFO.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

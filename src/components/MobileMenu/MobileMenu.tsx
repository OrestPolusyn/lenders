import { navLinks } from '@/const/navLinks'
import { useEffect, useState } from 'react'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openParent, setOpenParent] = useState<string | null>(null)

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

  useEffect(() => {
    if (!isOpen) {
      setOpenParent(null)
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
            {navLinks.map(link => {
              const anyLink = link as any
              const hasChildren =
                Array.isArray(anyLink.children) && anyLink.children.length > 0

              if (hasChildren) {
                const isOpenParent = openParent === link.title

                return (
                  <li key={link.title} className={styles.mobileMenuListItem}>
                    <button
                      type='button'
                      className={`${styles.mobileMenuLink} ${
                        isOpenParent ? styles.mobileMenuLinkOpen : ''
                      }`}
                      onClick={() =>
                        setOpenParent(current =>
                          current === link.title ? null : link.title
                        )
                      }
                    >
                      <span>{link.title}</span>
                      <span className={styles.mobileMenuToggleIcon} />
                    </button>

                    {isOpenParent && (
                      <ul className={styles.mobileSubmenu}>
                        {anyLink.children.map((child: any) => (
                          <li
                            key={child.href ?? child.title}
                            className={styles.mobileMenuListItem}
                          >
                            <a
                              href={child.href}
                              className={styles.mobileMenuLink}
                              onClick={onClose}
                            >
                              {child.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              }

              return (
                <li
                  key={link.href ?? link.title}
                  className={styles.mobileMenuListItem}
                >
                  <a
                    href={link.href}
                    className={styles.mobileMenuLink}
                    onClick={onClose}
                  >
                    {link.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}

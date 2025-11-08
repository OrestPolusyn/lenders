import { useState } from 'react'
import { links } from '../../const/links'
import styles from './index.module.css'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    document.body.classList.toggle('dis-scroll')
    setIsOpen(prev => !prev)
  }

  const handleLinkClick = (href: string) => {
    toggleMenu()

    if (href !== '#home') {
      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <button
        className={`${styles.burger} ${isOpen ? styles.open : ''}`}
        aria-label='Mobile menu'
        type='button'
        onClick={toggleMenu}
      >
        <span></span>
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <div className={styles.menuInner}>
          {links.map((link, index) => {
            const sectionNumber = index + 1

            return (
              <a
                key={link.href}
                href={'/' + link.href}
                className={`${styles.aboutUs} ${
                  index === 0 ? styles.home : ''
                }`}
                onClick={() => {
                  handleLinkClick(link.href)
                }}
              >
                <span className={styles.span}>{`0${sectionNumber}.`}</span>
                <span className={styles.span1}></span>
                <b>{link.title}</b>
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}

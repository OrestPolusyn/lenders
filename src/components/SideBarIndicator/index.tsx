import { useEffect, useState } from 'react'
import { links } from '../../const/links'
import { handleScrollSection } from '../../hooks/handleScrollSection'
import styles from './index.module.css'

export const SideBarIndicator = () => {
  const [activeSection, setActiveSection] = useState(1)
  const sectionLength = links.length

  useEffect(() => {
    handleScrollSection(setActiveSection)
  }, [])

  return (
    <div className={styles['sidebar-indicator']}>
      {Array.from({ length: sectionLength }, (_, index) => index + 1).map(
        number => (
          <div
            key={number}
            className={`${styles['sidebar-indicator-item']} ${
              number === activeSection ? styles['active'] : ''
            }`}
            data-number={number}
          ></div>
        )
      )}
    </div>
  )
}

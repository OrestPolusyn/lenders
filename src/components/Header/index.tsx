import { Link } from 'react-router-dom'
// TODO: change to svg
import logo from '@/assets/images/logo.png'
import { links } from '../../const/links'
import styles from './index.module.css'

export const Header = ({ onSidebarOpen }: { onSidebarOpen: () => void }) => {
  return (
    <header className={`${styles.header} header`}>
      <nav className={styles.headerNav}>
        <Link className={styles.headerLogo} to='/'>
          <img
            className={styles.headerChild}
            loading='lazy'
            alt='Nabuto company'
            width={160}
            height={40}
            src={logo}
          />
        </Link>
        <ul className={styles.headerList}>
          {links.map(link => (
            <li key={link.title} className={styles.headerListItem}>
              <Link className={styles.headerLink} to={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className={`${styles.headerLink} phone`}
              to='tel:+998971234567'
            >
              +998971234567
            </Link>
          </li>
        </ul>

        <button className={styles.headerSidebar} onClick={onSidebarOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}

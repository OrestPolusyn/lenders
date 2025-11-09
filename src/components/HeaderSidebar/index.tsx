import logo from '@/assets/images/logo.png'

import { Link } from 'react-router-dom'
import styles from './index.module.css'

export const HeaderSidebar = ({
  open,
  onSidebarClose,
}: {
  open: boolean
  onSidebarClose: () => void
}) => {
  return (
    <aside
      className={
        styles.headerSidebar + ' ' + (open ? styles.headerSidebarOpen : '')
      }
    >
      <div
        onClick={onSidebarClose}
        className={styles.headerSidebarOverlay}
      ></div>
      <div className={styles.headerSidebarContent}>
        <img
          loading='lazy'
          alt='Nabuto company'
          width={160}
          height={40}
          src={logo}
        />

        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form
        </p>

        <h2>Contact Us</h2>

        <ul>
          <li>
            <Link to='/'>85 Ketch Harbour Road Bensal PA 19020</Link>
          </li>
          <li>
            <Link to='tel:+998971234567'>+998971234567</Link>
          </li>
          <li>
            <Link to='mailto:info@nabuto.com'>info@nabuto.com</Link>
          </li>
        </ul>

        <button
          className={styles.headerSidebarClose}
          onClick={onSidebarClose}
        ></button>
      </div>
    </aside>
  )
}

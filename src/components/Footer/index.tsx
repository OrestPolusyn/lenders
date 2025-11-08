import { Link } from 'react-router-dom'
import styles from './index.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li>
            <Link to='/privacy-policy'>Privacy Policy</Link>
          </li>
          <li>
            <Link to='/cookie-policy'>Cookie Policy</Link>
          </li>
        </ul>
      </nav>
      <p>2025 Nabuto FZ LLC</p>
    </footer>
  )
}

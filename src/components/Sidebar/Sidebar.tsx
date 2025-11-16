import styles from './Sidebar.module.css'

const BUSINESS_INFO = {
  name: 'The Lenders',
  phone: '+12485341720',
  phoneFormatted: '(248) 534-1720',
  email: 'info@thelenders.mortgage',
  address: {
    full: '2930 W. Hamlin Rd Rochester Hills, Michigan 48309',
  },
  mapsUrl: 'https://maps.app.goo.gl/SNtyFQi4PGPizbnw9',
}

export const Sidebar = ({
  open,
  onSidebarClose,
}: {
  open: boolean
  onSidebarClose: () => void
}) => {
  return (
    <aside className={styles.sidebar + ' ' + (open ? styles.sidebarOpen : '')}>
      <div onClick={onSidebarClose} className={styles.sidebarOverlay}></div>
      <div className={styles.sidebarContent}>
        <h3>Contact Us</h3>

        <p>Expert mortgage solutions tailored to your needs.</p>
        <ul>
          <li>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z' />
            </svg>
            <a
              className={styles.mapPlaceholder}
              href={BUSINESS_INFO.mapsUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              {BUSINESS_INFO.address.full}
            </a>
          </li>
          <li>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z' />
            </svg>
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              {BUSINESS_INFO.phoneFormatted}
            </a>
          </li>
          <li>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z' />
            </svg>
            <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>
          </li>
        </ul>
        <p className={styles.license}>NMLS #1665272</p>
        <button
          className={styles.sidebarClose}
          onClick={onSidebarClose}
        ></button>
      </div>
    </aside>
  )
}

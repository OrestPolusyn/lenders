import { Link } from 'react-router-dom'
import styles from './index.module.css'

export const Hero = () => {
  return (
    <section className={styles.hero + ' hero-section'}>
      <div className='container'>
        <div className={styles.heroContent}>
          <div>
            <p className='slogan'>Smart Loans For Bright Future</p>
          </div>
          <h1>Personal Loans To Fulfill Your Dreams</h1>
          <div className={styles.heroActions}>
            <Link className='button' to='/preapproved'>
              <span>Get PreApproved</span>
            </Link>
            <Link className='button button--reverse' to='/about'>
              <span>Learn More</span>
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            src='/src/assets/images/home/hero-men.jpg'
            alt='hero-men'
            width={500}
            height={500}
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}

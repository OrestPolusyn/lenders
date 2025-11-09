import philosophyImage from '@/assets/images/home/philosophy-women.jpg'

import { Link } from 'react-router-dom'
import styles from './index.module.css'

export const Philosophy = () => {
  return (
    <section className={styles.homePhilosophy}>
      <div className='container'>
        <div className={styles.homePhilosophyWrapper + ' wrapper'}>
          <div className={styles.homePhilosophyImages}>
            <img
              className={styles.homePhilosophyImage}
              src={philosophyImage}
              alt='Philosophy'
              width={495}
              height={500}
              loading='lazy'
            />
          
            <div className={styles.homePhilosophyInfo}>
              <p>
              "We believe everyone deserves a chance to be approved."
              </p>
            </div>
          </div>

          <div className={styles.homePhilosophyContent}>
            <div className='slogan slogan--reverse'>
              <span>our philosophy</span>
            </div>

            <h2>Mortgage Lending: Building Dreams</h2>

            <p>
              At our core, we believe that homeownership shouldn't be an impossible dream. We're committed to finding solutions for borrowers who might have been turned away elsewhere.
            </p>

              <p>
              With over 15 years of experience, we've helped thousands of borrowers navigate the complex world of mortgage lending with accessible, transparent, and flexible solutions.
            </p>

            <ul className={styles.homePhilosophyList}>
              <li
                className={
                  styles.homePhilosophyListItem + ' ' + styles.homPhilosophyListItemFirst
                }
              >
                <h3>Transparency</h3>
                <p>Clear communication at every step of your journey</p>
              </li>

              <li
                className={
                  styles.homePhilosophyListItem +
                  ' ' +
                  styles.homePhilosophyListItemSecond
                }
              >
                <h3>Flexibility</h3>
                <p>Customized solutions for your unique needs</p>
              </li>

            </ul>

            <Link className='button' to='/loans'>
              <span>Read Our Story</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

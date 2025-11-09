import aboutImage from '@/assets/images/home/about-men.jpg'
import calculateImage from '@/assets/images/home/calculate.jpg'

import { Link } from 'react-router-dom'
import styles from './index.module.css'

export const About = () => {
  return (
    <section className={styles.homeAbout}>
      <div className='container'>
        <div className={styles.homeAboutWrapper + ' wrapper'}>
          <div className={styles.homeAboutImages}>
            <img
              className={styles.homeAboutImageFirst}
              src={aboutImage}
              alt='About'
              width={685}
              height={717}
              loading='lazy'
            />
            <img
              className={styles.homeAboutImageSecond}
              src={calculateImage}
              alt='About'
              width={220}
              height={220}
              loading='lazy'
            />

            <div className={styles.homeAboutInfo}>
              <span className={styles.homeAboutExperience}>
                years of <br />
                experience
              </span>

              <span className={styles.homeAboutExperienceNumber}>15+</span>
            </div>
          </div>

          <div className={styles.homeAboutContent}>
            <div className='slogan slogan--reverse'>
              <span>welcome to easiloan</span>
            </div>

            <h2>our loans will fill yourdreams come true</h2>

            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
            </p>

            <ul className={styles.homeAboutList}>
              <li
                className={
                  styles.homeAboutListItem + ' ' + styles.homeAboutListItemFirst
                }
              >
                <p>Quick Loan Process</p>
              </li>

              <li
                className={
                  styles.homeAboutListItem +
                  ' ' +
                  styles.homeAboutListItemSecond
                }
              >
                <p>Small Business Loan</p>
              </li>

              <li
                className={
                  styles.homeAboutListItem + ' ' + styles.homeAboutListItemThird
                }
              >
                <p>Very Low Rates</p>
              </li>

              <li
                className={
                  styles.homeAboutListItem +
                  ' ' +
                  styles.homeAboutListItemFourth
                }
              >
                <p>Studying Abroad Loan</p>
              </li>
            </ul>

            <Link className='button' to='/loans'>
              <span>Explore Loans</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

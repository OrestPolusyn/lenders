import calculatorImage from '@/assets/images/home/calculator.png'

import { Link } from 'react-router-dom'
import styles from './index.module.css'

export const Calculator = () => {
  return (
    <section className={styles.homeCalculator}>
      <div className='container'>

        <div className={styles.homeCalculatorContent}>

         <div className='slogan'>
              <span>calculate your loan</span>
            </div>

            <h2>
              Mortgage Programs Tailored for Every Dream
            </h2>

            <p>
              Use our calculator to estimate your monthly payments and explore our flexible mortgage programs designed to match your unique needs.
            </p>

            </div>
            

        <div className={styles.homeCalculatorWrapper}>
          <div className={styles.homeCalculatorImages}>
            <img
              src={calculatorImage}
              alt='About'
              width={404}
              height={616}
              loading='lazy'
            />
          </div>

          <div className={styles.homeCalculatorGrid}>
            
           <ul className={styles.homeCalculatorList}>
              <li
                className={
                  styles.homeCalculatorListItem + ' ' + styles['homeCalculatorListItem--conventional']
                }
              >
                <p>Conventional Loans</p>
              </li>

              <li
                className={
                  styles.homeCalculatorListItem +
                  ' ' +
                  styles['homeCalculatorListItem--fha']
                }
              >
                <p>FHA Loans</p>
              </li>

              <li
                className={
                  styles.homeCalculatorListItem + ' ' + styles['homeCalculatorListItem--va']
                }
              >
                <p>VA Loans</p>
              </li>

              <li
                className={
                  styles.homeCalculatorListItem +
                  ' ' +
                  styles['homeCalculatorListItem--usda']
                }
              >
                <p>USDA Loans</p>
              </li>

              <li
                className={
                  styles.homeCalculatorListItem +
                  ' ' +
                  styles['homeCalculatorListItem--jumbo']
                }
              >
                <p>Jumbo Loans</p>
              </li>

              <li
                className={
                  styles.homeCalculatorListItem +
                  ' ' +
                  styles['homeCalculatorListItem--heloc']
                }
              >
                <p>HELOC (Home Equity)</p>
              </li>

              <li
                className={
                  styles.homeCalculatorListItem +
                  ' ' +
                  styles['homeCalculatorListItem--rehab-investment']
                }
              >
                <p>Rehab / Investment Property</p>
              </li>

              <li
                className={
                  styles.homeCalculatorListItem +
                  ' ' +
                  styles['homeCalculatorListItem--zero-downpayment']
                }
              >
                <p>Zero Downpayment Options</p>
              </li>

              <li
                className={
                  styles.homeCalculatorListItem +
                  ' ' +
                  styles['homeCalculatorListItem--self-employed']
                }
              >
                <p>Self-Employed Programs</p>
              </li>
            </ul>

            <Link className='button' to='/loans'>
              <span>Compare Programs</span>
            </Link>
          
           
          </div>
        </div>
      </div>
    </section>
  )
}
